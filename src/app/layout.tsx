import "./globals.css";
import ReduxProvider from "@/stores/ReduxProvider";

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
        <body>{children}</body>
      </ReduxProvider>
    </html>
  );
}
