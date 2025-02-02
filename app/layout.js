import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Haris Javed",
  description: "A portfolio reflecting my life's work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
