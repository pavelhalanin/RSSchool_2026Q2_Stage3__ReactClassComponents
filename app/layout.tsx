'use client';

import ThemeProvider from './src/context/theme/ThemeProvider';
import QueryProvider from './src/query/QueryProvider';
import RootOutlet from './src/outlet/RootOutlet/RootOutlet';
import './src/index.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ThemeProvider>
            <RootOutlet>{children}</RootOutlet>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
