import React from 'react';
import CoinWidget from '../CoinWidget/Coin.jsx';
import './ListWidget.css';

function ListWidget({ coins }) {
  //console.log('Loaded list widget');
  return (
    <div className="listwidget">
      {coins.map((coin, index) => (
        <CoinWidget key={index} coinData={coin} />
      ))}
    </div>
  );
}


export default ListWidget;
