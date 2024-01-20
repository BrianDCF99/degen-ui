import React from 'react';
import './Coin.css'; 
import CopyAddressButton from '../../components/Buttons/copyAddress.jsx';


function CoinWidget({ coinData }) {
    //console.log('loaded coins')
    return (
      <div className="coin-widget">

        <div className="info">
          <h2 className="nameNticker">{coinData.name}</h2>
          <h2 className="nameNticker">{coinData.ticker}/sol</h2>
          <p className="lat">Lat: {coinData.lat}</p>
          <p className="timest">Timest: {coinData.timest}</p>
          <div className="button" ><CopyAddressButton address={coinData.address} /></div>
        </div>
          
      </div>
    );

}

export default CoinWidget;
