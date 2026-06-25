import ThemeProvider from '../../context/theme/ThemeProvider';
import RootOutlet from '../../outlet/RootOutlet/RootOutlet';
import QueryProvider from '../../query/QueryProvider';
import './../../index.css';

export default async function RootLayout({
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
