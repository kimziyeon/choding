import type { Metadata } from "next";
import '@/styles/global.scss';
import '@/styles/base/reset.scss';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: "초딩 - 초보들의 코딩공부",
  description: "팀곰문곰팀의 초딩 웹사이트입니다.",
};
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
