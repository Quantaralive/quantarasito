
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'QUANTARA – Future of Betting',
  description: 'Track. Analyze. Dominate.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          padding: '1.5rem',
          fontSize: '1.25rem',
          background: '#000',
          color: '#00f0ff',
          fontWeight: 'bold',
          letterSpacing: '2px',
          fontFamily: 'monospace'
        }}>
          QUANTARA
        </header>
        <main style={{
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#0a0a0a',
          color: '#fff',
          minHeight: '100vh',
          padding: '2rem'
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}
