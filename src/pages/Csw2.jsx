import React from 'react';
import { Header } from '../components/general/Header';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { data } from '../assets/Csw2Data';
import { useStyles } from '../styles/Page.style';

export const Csw2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageCenter}>
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
