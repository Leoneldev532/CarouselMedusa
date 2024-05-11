"use client";
import {
  Inter,
  Libre_Baskerville,
  Montserrat,
  Poppins,
  Space_Grotesk
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const police = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskerville",
  weight: "400",
});

const police1 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Montserrat",
  weight: "400",
});

const police3 = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space_Grotesk",
  weight: "400",
});

const police4 = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Poppins",
  weight: "300",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html
      lang="en"
      className={`${police4.variable}`}
    >
      <body className={inter.className + "relative  text-white  "}>
        <div className="min-h-screen relative flex justify-start items-start w-full">
          
          <div className="flex flex-col w-full overflow-hidden  ">
            {/* <Header/> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
