import React, { useState } from 'react';
import { ICategory } from '../types/types';

interface IProps {
    onCategory: (key: string) => void
}

export const Categories = ({onCategory}: IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([
    {
      key: 'all',
      name: 'all',
    },
    {
      key: 'chairs',
      name: 'chairs',
    },
    {
      key: 'tables',
      name: 'tables',
    },
    {
      key: 'sofas',
      name: 'sofa',
    },
  ]);

  return <div className='categories'>
        {categories.map(el => (
            <div key={el.key} onClick={() => onCategory(el.key)}>{el.name}</div>
        ))}
  </div>;
};
