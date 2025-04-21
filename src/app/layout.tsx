import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Server Actions",
  description: "Server actions with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      
      >
          <ToastContainer theme="colored" position="top-center" />
        <main className="container m-auto"> {children}</main>
      </body>
    </html>
  );
}
