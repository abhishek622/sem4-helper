import React from 'react';
import { Header } from '../components/general/Header';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { pmeCh } from '../assets/PmeData';
import { useStyles } from '../styles/Page.style';

export const Pme = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageCenter}>
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
