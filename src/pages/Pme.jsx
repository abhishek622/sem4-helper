import React from 'react';
import { Header } from '../components/general/Header';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { pmeCh } from '../assets/PmeData';


export const Pme = () => {
  return (
    <div>
      <Header subName="Principles of Macroeconomics" />
      {pmeCh.map(items => (
        <AccordionLayout
          key={items.id}
          title={items.title}
          formSection={items.formSection}
        />
      ))}
    </div>
  );
};
