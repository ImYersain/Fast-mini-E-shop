import React from 'react'
import { IItem } from '../types/types'
import { Item } from './Item'

interface IProps {
    items: IItem[],
    onAdd: (item:IItem) => void,
    onShowItem: (arg:IItem) => void
}
export const Items = ({items, onAdd, onShowItem}: IProps) => {
  return (
    <main>
        {items.map((item) => (
            <Item key={item.id} item={item} onAdd={onAdd} onShowItem={onShowItem} />
        ))}
    </main>
  )
}
