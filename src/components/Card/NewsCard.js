import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function NewsCard({ post }) {
  return (
    <>
      <div className="news col-span-1">
        {post.image ? (
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="news-image"
            className="news-image"
            unoptimized={true}
            src={post.image}
          />
        ) : (
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="news-image"
            className="news-image"
            unoptimized={true}
            src={"/static/images/default.png"}
          />
        )}

        <h2 className="news-title font-bold my-5">{post.title}</h2>
        <p className="news-description">{post.subtitle}</p>

        <Link href={`/blog/${post.slug}`}>
          {" "}
          <h2 className="mt-5 mb-5 text-blue-700 underline underline-offset-6">
            Нийтлэлийг эндээс уншина уу{" "}
          </h2>
        </Link>
      </div>
    </>
  );
}
