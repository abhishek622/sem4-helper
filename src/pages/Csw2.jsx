import React from 'react';
import { Header } from '../components/general/Header';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { data } from '../assets/Csw2Data';

export const Csw2 = () => {
  return (
    <div>
      <Header subName="Computer Science Workshop - 2" />
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
