import { Inter } from "next/font/google";
import "./_styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata ={
  metadataBase: new URL(`http://localhost:3000/`),
  title: "Invite Cards",
  description: "Invite Cards Description",
  keywords:"video invitation, wedding invitation video, create wedding invitation video,",
  alternates: {
    canonical: './',
}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
