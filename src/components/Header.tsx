import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IItem } from '../types/types';
import { Order } from './Order';

interface IProps {
  orders: IItem[]
  onDelete: (id:number) => void
}

export const Header = ({orders, onDelete}: IProps) => {
  let [cardOpen, setCardOpen] = useState(false);

  const showOrders = (orders: IItem[]) => {
    let total = 0;
    orders.forEach(el => {
      el.finalPrice = +el.price * el.count;
      total += +el.finalPrice
    });

    return (
      <>
        {orders.map(item => {
          return <Order key={item.id} order={item} onDelete={onDelete} />
        })}
        <p className='total'>Total price: {total.toFixed(2)}$</p>
      </>
    )
  };
  
  const showEmptyCart = () => {
    return (
      <div className='empty-cart'>
        <h2>Cart is empty yet</h2>
      </div>
    )
  };

  return (
    <header>
        <span className='logo'>
            House Staff
        </span>
        <ul className='nav'>
            <li>About us</li>
            <li>Contacts</li>
            <li>Office</li>
        </ul>
        <FaShoppingCart onClick={()=> setCardOpen(!cardOpen)} className={`shop-cart-button ${cardOpen && 'active'}`} />
        {cardOpen && (
          <div className='shop-cart-modal'>
            {orders.length > 0 ? 
              showOrders(orders): showEmptyCart()
            }
          </div>
        )}
        <div className='presentation'></div>
    </header>
  )
}
