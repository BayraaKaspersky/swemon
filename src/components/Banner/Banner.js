import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div>
      <div
        className="banner h-157 "
        style={{ width: "100%", height: 188, position: "relative" }}
      >
        <Image
          // height={400}
          fill
          src="/static/images/back.png"
          className="object-cover "
          alt="swemon Logo"
        />
      </div>
    </div>
  );
}
