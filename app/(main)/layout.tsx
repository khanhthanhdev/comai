import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/components/providers";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-brand dark:bg-[#111] antialiased">
      <Providers>
        <div className="isolate">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center py-2">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </Providers>
    </body>
  );
}
