import React from 'react';
import ListWidget from '../../widgets/ListWidget/ListWidget.jsx';
import './Body.css';

function Body({ coinData }) {

    return (
      <div>
        <div className="body">
        <ListWidget coins={coinData} />
        </div>
      </div>
    );
}
export default Body;