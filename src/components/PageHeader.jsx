import React from "react";
import { Link } from "react-router-dom";
import './PageHeader.css';

const PageHeader = ({ title }) => {
  return (
    <div className='header'>
      <Link to="/" className='titleMini'>
        The Auto Trader
      </Link>
      <h1 className='title'>{title}</h1>
    </div>
  );
};

export default PageHeader;