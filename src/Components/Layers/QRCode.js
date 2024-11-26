// src/components/QRCode.js
import React from 'react';

const QRCode = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  };

  return (
    <div style={style}>
      <img src="./qr-code.png" alt="QR Code" style={{ maxWidth: '300px', maxHeight: '300px' }} />
    </div>
  );
};

export default QRCode;
