import React from 'react';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { Header } from '../components/general/Header';
import { data } from '../assets/CoaData';
import { useStyles } from '../styles/Page.style';

export const Coa = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageCenter}>
      <Header subName="Computer Organization and Architecture" />
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
