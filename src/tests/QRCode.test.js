// src/components/QRCode.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import QRCode from '../Components/Layers/QRCode';


describe('QRCode Component', () => {
  test('renders QR code image', () => {
    render(<QRCode />);

    // Vérifie si l'image est présente dans le document
    const qrImage = screen.getByAltText(/QR Code/i);
    expect(qrImage).toBeInTheDocument();

    // Vérifie si l'image a la bonne source
    expect(qrImage).toHaveAttribute('src', './qr-code.png');
  });
});
