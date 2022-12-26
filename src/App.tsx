import React, { useEffect, useState } from 'react';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { FullItem } from './components/FullItem';
import { Header } from './components/Header';
import { Items } from './components/Items';
import { IItem } from './types/types';

function App() {
  const [items, setItems] = useState<IItem[]>([
    {
      id: 1,
      title: 'Chair',
      img: 'https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202234/1044/lorraine-tufted-chair-c.jpg',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'chairs',
      price: '10',
      finalPrice: 10,
      count: 1
    },
    {
      id: 2,
      title: 'Table',
      img: 'https://cdn.shopify.com/s/files/1/0044/1208/0217/products/CENTER_TABLE2_CARV_GLASS_PEAR_WOOD_CENTBL2CARGPRW_06_900x.jpg?v=1661147387',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'tables',
      price: '29',
      finalPrice: 29,
      count: 1
    },
    {
      id: 3,
      title: 'Table',
      img: 'https://www.ulcdn.net/images/products/579153/original/Adele_Compact_coffee_table_Classic_WalnutLP_1.jpg?1655454844',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'tables',
      price: '29',
      finalPrice: 29,
      count: 1
    },
    {
      id: 4,
      title: 'Sofa',
      img: 'https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FSOFAS.png%3Fcontext%3DbWFzdGVyfHJvb3R8MTcxNjczfGltYWdlL3BuZ3xoZjEvaDI1LzkwMTIyODI3NTMwNTQucG5nfGZjZmE3M2YwYmYyNGEzMTMxZWU0MmU4Y2ViMGY1MThjMzFjMzUyODY1MTdjZGVmYTA2NzJhODYxNzg1OWM3ZDE',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'sofas',
      price: '49',
      finalPrice: 49,
      count: 1
    },
    {
      id: 5,
      title: 'Chair',
      img: 'https://cdn.shopify.com/s/files/1/0099/2867/1291/products/FIACCARLESONSFACBW_2000x.jpg?v=1653041232',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'chairs',
      price: '16.5',
      finalPrice: 16.5,
      count: 1
    },
    {
      id: 6,
      title: 'Chair for Gaming',
      img: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/102078ba05f00ead3aec6f240ab7ebaf_46b686dd-2ac4-4d7b-9ac1-001770a055f5_2048x.jpg?v=1620184068',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'chairs',
      price: '18.9',
      finalPrice: 18.9,
      count: 1
    },
    {
      id: 7,
      title: 'Sofa',
      img: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=100785840-847&recipeName=680',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'sofas',
      price: '80.9',
      finalPrice: 80.9,
      count: 1
    },
    {
      id: 8,
      title: 'Sofa',
      img: 'https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1743605&recipeId=729',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'sofas',
      price: '90.3',
      finalPrice: 90.3,
      count: 1
    },
    {
      id: 9,
      title: 'Table',
      img: 'https://cdn.shopify.com/s/files/1/2268/9819/products/Sheffield_Dining_Table_Main_1500x.jpg?v=1629200989',
      desc: 'lorem is ipsum lorem is ipsum lorem is ipsum',
      category: 'tables',
      price: '29',
      finalPrice: 29,
      count: 1
    },
  ]);
  const [orders, setOrders] = useState<IItem[]>([]);
  const [currentItems, setCurrentItems] = useState<IItem[]>([]);
  const [showFullItem, setShowFullItem] = useState<boolean>(false);
  const [fullItem, setfullItem] = useState<IItem>();

  useEffect(() => {
    setCurrentItems([...items]);
  }, []);

  const addToOrder = (item:IItem) => {
    let isInArray = false;
    orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true;
        el.count += 1;
        setOrders([...orders])
        return
      }
      });

      !isInArray && setOrders([...orders, item])
  }

  const deleteOrder = (id: number) => {
    let newOrders = orders.filter(item => {
      if(item.id !== id) {
        return item;
      } else if(item.count > 1){
        item.count = item.count - 1;
        return item;
      }
    })
    
    setOrders([ ...newOrders])
  }

  const chooseCategory = (key: string) => {
    if(key === 'all'){
      setCurrentItems([...items]);
      return
    }
    setCurrentItems(items.filter(item => item.category === key));
  }

  const onShowItem = (item: IItem) => {
    setfullItem(item)
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories onCategory={chooseCategory} />
      <Items items={currentItems} onAdd={addToOrder} onShowItem={onShowItem} />
      {showFullItem && <FullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem} />}
      <Footer />
    </div>
  );
}

export default App;
