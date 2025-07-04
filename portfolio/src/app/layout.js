// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Harshan S L - Electronics & Communication Engineer',
  description: 'Third-year ECE student at VIT, specializing in embedded systems, circuit design, and hardware-software integration.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/flash.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
