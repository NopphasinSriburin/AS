'use client'; // ใช้ client component เนื่องจากมีการใช้ hooks

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}