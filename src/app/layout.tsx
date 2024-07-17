import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import NavBottom from "@/components/NavBottom";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Plus Squared Social Media App",
  description: "Developed by Adeboye Thompson July 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
     <html lang="en">
       <body className={`${geistSans.variable} ${geistMono.variable}`}>
         <div className="bg-white w-full px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
           <Navbar />
         </div>
         <NavBottom/>
         <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64" style={{backgroundColor:'#ecf0f3'}}>
           {children}
         </div>
       </body>
     </html>
     </ClerkProvider>
  );
}
