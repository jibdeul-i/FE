import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/stores/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "집들이",
  description: "집들이올시다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
