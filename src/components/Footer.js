import React from "react";
import "../app/styles/Footer.css";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="footer-nav">
        <div
          className=" container columns-3  mt-10"
          style={{
            display: "flex",
            margin: "auto",
            marginTop: 20,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <ul className="contact-info">
            <li className="font-bold text-lg">ХОЛБОО БАРИХ</li>
            <li className=" underline underline-offset-6">
              <Link href="/blog/holboo-barih">Вэб сайтын тухай </Link>
            </li>

            {/* <li className=" underline underline-offset-6">
              <Link href="/">Манайхаар зочлоорой </Link>
            </li>

            <li className=" underline underline-offset-6">
              <Link href="/">Хэвлэлийн хувьд </Link>
            </li> */}
          </ul>

          {/* <ul className="contact-info">
            <li className="font-bold text-lg">БИДНИЙ ТУХАЙ </li>
            <li className=" underline underline-offset-6">
              <Link href="/">Вэб сайтын тухай </Link>
            </li>

            <li className=" underline underline-offset-6">
              <Link href="/">Сайтын газрын зураг</Link>
            </li>

            <li className=" underline underline-offset-6">
              <Link href="/">Хууль эрх зүйн мэдээлэл </Link>
            </li>
          </ul> */}

          <ul className="footer-logo-container">
            <Image
              alt="footer-logo"
              height={300}
              width={350}
              className="footer-logo"
              src="/static/images/new_logo.png"
            />
          </ul>
        </div>
        <div className=" social-info ">
          <div
            className="container font-bold font-lg"
            style={{
              color: "#fff",
              display: "flex",
              margin: "auto",
              marginTop: 20,
            }}
          >
            <ul className="social-footer">
              <li>БИДНИЙГ ДАГААРАЙ</li>

              <a
                style={{ marginLeft: 5 }}
                href="https://www.facebook.com/turbat.chinzorig"
              >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </li>
              </a>

              <a style={{ marginLeft: 5 }} href="mailto:Chinzorigtur@gmail.com">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 488 512"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
