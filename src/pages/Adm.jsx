import React from 'react';
import { Header } from '../components/general/Header';
import { AccordionLayout } from '../components/general/AccordionLayout';
import { data } from '../assets/AdmData';
import { useStyles } from '../styles/Page.style';

export const Adm = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageCenter}>
      <Header subName="Advanced Discrete Mathematics" />
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
