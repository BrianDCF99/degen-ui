import React from 'react';
import './Coin.css'; 

function CopyAddressButton() {
    const handleClick = () => {
        console.log("Copied address to clipboard!");
    }

    return (
        <button className = "copyAdressButton" onClick={handleClick}>
            Copy Address
        </button>
    );
}

function CoinWidget({ coinData }) {
    //console.log('loaded coins')
    return (
      <div className="coin-widget">

          <h2>{coinData.name}</h2>
        
          <div className="titleBox">
              <h2>{coinData.ticker}/sol</h2>
              <CopyAddressButton />
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
