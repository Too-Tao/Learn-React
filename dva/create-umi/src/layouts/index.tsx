import React from 'react';
import Header from './Header'
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <Header location={props.location}/>
      {props.children}
    </div>
  );
};

export default BasicLayout;
