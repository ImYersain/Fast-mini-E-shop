import React from 'react'
import { IItem } from '../types/types'
import { FaTrash } from 'react-icons/fa'

interface IProps {
    order: IItem,
    onDelete: (arg:number) => void
}

export const Order = ({order, onDelete}: IProps) => {

  return (
    <div className='item'>
        <img src={order.img} alt='img' />
        <h2>{order.title}</h2>
        <p>{order.price}$</p>
        <p>Amount of staff: {order.count}</p>
        <FaTrash className='delete-icon' onClick={() => onDelete(order.id)} />
    </div>
  )
}
