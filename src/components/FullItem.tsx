import React from 'react';
import { IItem } from '../types/types';
import { AiOutlineCloseSquare } from 'react-icons/ai';

interface IProps {
  item?: IItem;
  onAdd: (item: any) => void;
  onShowItem: (arg: any) => void;
}
export const FullItem = ({ item, onAdd, onShowItem }: IProps) => {
  return (
    <div className="full-item" onClick={() => onShowItem(false)}>
      <div>
        <AiOutlineCloseSquare className='close-icon' onClick={() => onShowItem(false)} />
        <img src={item?.img} alt="img" onClick={() => onShowItem(item)} />
        <h2>{item?.title}</h2>
        <p>{item?.desc}</p>
        <b>{item?.price}$</b>
        <div className="add-to-card" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
};
