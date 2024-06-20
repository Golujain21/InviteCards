import { Inter } from "next/font/google";
import "./_styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata ={
  metadataBase: new URL(`https://invite-cards.vercel.app/`),
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
      <head>
        <meta name="google-site-verification" content="pscaKePUrtuWCVRpEQZdvO8ni8SSjcNO64cL9Vg7mfg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
