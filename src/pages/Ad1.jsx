import React from 'react';
import { Header } from '../components/general/Header';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { data } from '../assets/Ad1Data';
import { useStyles } from '../styles/Page.style';

export const Ad1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageCenter}>
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
