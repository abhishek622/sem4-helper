import React from 'react';
import { Header } from '../components/general/Header';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { data } from '../assets/Ad1Data';

export const Ad1 = () => {
  return (
    <div>
      <Header subName="Algorithms Design - 1" />
      {data.map(items => (
        <AccordionLayout
          key={items.id}
          title={items.title}
          formSection={items.formSection}
        />
      ))}
    </div>
  );
};
