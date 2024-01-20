import React from 'react';
import './copyAddress.css';

function CopyAddressButton({ address }) {
  const handleClick = async () => {
    try {
      // Use the Clipboard API
      await navigator.clipboard.writeText(address);
      console.log('Copied address to clipboard!');
    } catch (error) {
      // Fallback to document.execCommand('copy') for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      console.log('Copied address to clipboard (fallback)');
    }
  };

  return (
    <button className="copyAddressButton" onClick={handleClick}>
      Copy Address
    </button>
  );
}

export default CopyAddressButton;
