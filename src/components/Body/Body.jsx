import React from 'react';
import ListWidget from '../../widgets/ListWidget/ListWidget.jsx';
import './Body.css';

function Body({ coinData }) {

    return (
    <div className="body">
      <h2>These are the most recent tokens.</h2>
      <ListWidget coins={coinData} />
    </div>
    );
}
export default Body;