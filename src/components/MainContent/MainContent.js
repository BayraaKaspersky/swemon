import React from "react";
import "@/app/styles/MainContent.css";
import Footer from "../Footer";
import Image from "next/image";
import Banner from "../Banner/Banner";
import NewsCard from "../Card/NewsCard";
import Link from "next/link";
export default function MainContent({ posts }) {
  const renderPosts = () => {
    const arr = [];
    for (let i = 0; i < posts.length; i++) {
      console.log("dds", posts[i]);
      if (i < 2) {
        arr.push(
          <div className="news col-span-1">
            <NewsCard key={i} post={posts[i]} />
          </div>
        );
      }
    }
    console.log("d");
    return arr;
  };

  const renderSidePosts = () => {
    const arr = [];
    for (let i = 0; i < posts.length; i++) {
      if (i < 8) {
        arr.push(
          <div className="news-item">
            <p className="news-published-date text-gray-400">2024-02-08</p>
            <p className="news-item-title text-blue-700 underline underline-offset-6">
              <Link
                // className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                href={`/blog/${posts[i].slug}`}
              >
                {posts[i].title}
              </Link>
            </p>
          </div>
        );
      }
    }
    return arr;
  };

  return (
    <div>
      <Banner />

      <div
        className="container main-content-nav columns-3 mt-10 p-2"
        style={{ margin: "auto", marginTop: 20, background: "#fff" }}
      >
        <ul className="nav font-bold text-lg">
          <li>Өргөдөл</li>
          <li>Миний хуудас болон програмыг</li>
          <li>Зочлох цагаа захиалах</li>
          <ul className="nav font-bold text-lg">
            <li>Зөвшөөрлийг сунгах</li>
            <li>Шийдвэр гаргах цаг</li>
            <li>Шведийг орхи</li>
          </ul>
        </ul>
      </div>

      <div
        className="main-content-body container grid grid-cols-1 md:grid-cols-3 gap-5 mt-10"
        style={{ margin: "auto", marginTop: 20, background: "#fff" }}
      >
        {renderPosts()}

        <div className="news col-span-1 gap-5">
          <h2 className="news-title font-bold my-5 uppercase">Бусад мэдээ</h2>

          {renderSidePosts()}

          <div className="news-item mt-5">
            <p className="news-item-title text-blue-700 underline underline-offset-6">
              <Link
                // className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                href={`/news`}
              >
                Илүү их мэдээ
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="main-content-body container mt-10 mx-auto bg-white p-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          <div className="md:col-span-4">
            <img
              alt="news-image"
              className="w-full h-auto object-cover"
              src="/static/images/news3.jpeg"
            />
          </div>

          <div className="md:col-span-2">
            <h2 className="font-bold text-lg md:text-xl mb-4">
              Бидний даалгавар
            </h2>
            <div className="mb-4">
              <p className="text-sm leading-relaxed">
                Шведийн Цагаачлалын агентлагийн эрхэм зорилго нь Шведэд амьдрах,
                тус улсад айлчлах, хавчлагаас хамгаалах, Шведийн иргэншил авах
                хүсэлтэй хүмүүсийн өргөдлийг авч үзэх явдал юм. Шведийн
                цагаачлалын агентлаг нь Шведийн орогнол, цагаачлалын бодлогыг
                тодорхойлдог парламент, засгийн газрын захиалгаар ажилладаг.
              </p>
            </div>
            <button className="text-blue-700 underline mt-2 md:mt-4 block">
              Нийтлэлийг эндээс уншина уу
            </button>

            <div className="mt-4">
              <h2 className="font-bold text-lg md:text-xl mb-4">
                Шведийн Цагаачлалын агентлагт ажилладаг
              </h2>
              <p className="text-sm leading-relaxed">
                The Swedish Migration Agency's mission includes considering
                applications from people who want to live in Sweden, visit the
                country, seek protection from persecution or be granted Swedish
                citizenship. The Swedish Migration Agency is commissioned by
                parliament and government, who set the Swedish asylum and
                migration policy.
              </p>
              <button className="text-blue-700 underline mt-2 md:mt-4 block">
                Нийтлэлийг эндээс уншина уу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
