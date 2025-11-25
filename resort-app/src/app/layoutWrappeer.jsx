"use client";

import { usePathname } from "next/navigation";
import Hero from "./pages/Hero/Hero";
import Footer from "./pages/footer/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Pages that should NOT show Hero + Footer
 const noLayoutPages = ["/admin/login-page"];  

  const hideLayout = noLayoutPages.includes(pathname);

  return (
    <>
      {!hideLayout && <Hero />}
     <main style={{ flex: 1 }}>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
