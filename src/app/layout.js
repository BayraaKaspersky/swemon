"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import HuviHumuus from "@/components/HuviHumuus";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const router = useRouter();
  const isHomePage = router.route;
  const pathname = usePathname();
  return (
    // <Suspense>
    <html
      lang="en"
      suppressHydrationWarning={true}
      style={{ background: "#f2f2f2" }}
    >
      <body suppressHydrationWarning={true}>
        <Navbar />
        {console.log("isHomePage", pathname)}
        {pathname !== "/" ? (
          <div
            style={{ background: "white", margin: "0 auto" }}
            className="grid grid-cols-6 gap-5 mt-10 p-5 container"
          >
            <div className="col-span-2">{<HuviHumuus />}</div>

            <div className="col-span-4">
              <div>
                <div>
                  <main>{children}</main>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <main>{children}</main>
            </div>
          </div>
        )}

        {/* <div>
          <div>
            <main>{children}</main>
          </div>
        </div> */}
        <Footer />
      </body>
    </html>
    // </Suspense>
  );
}
