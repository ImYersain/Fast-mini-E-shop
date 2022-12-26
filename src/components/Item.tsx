import React from 'react'
import { IItem } from '../types/types'

interface IProps {
    item: IItem,
    onAdd: (item:IItem) => void,
    onShowItem: (arg:IItem) => void
}

export const Item = ({item, onAdd, onShowItem}: IProps) => {
  return (
    <div className='item'>
        <img src={item.img} alt='img' onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className='add-to-card' onClick={() => onAdd(item)}>+</div>
    </div>
  )
}
