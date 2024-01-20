import React from 'react';
import './Coin.css'; 
import CopyAddressButton from '../../components/Buttons/copyAddress.jsx';


function CoinWidget({ coinData }) {
    //console.log('loaded coins')
    return (
      <div className="coin-widget">

          <h2>{coinData.name}</h2>
        
          <div className="titleBox">
              <h2>{coinData.ticker}/sol</h2>
              <CopyAddressButton address={coinData.address} />
          </div>

          <div className="titleBox">
          <p>Address: {coinData.address}</p>
          </div>
          
          <div className="infoBox">
              <p>Lat: {coinData.lat}</p>
              <p>Timest: {coinData.timest}</p>
          </div>
      </div>
    );

}

export default CoinWidget;
