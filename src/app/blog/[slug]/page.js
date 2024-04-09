"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/blog/single-page.module.css";
import chevronDown from "../../../../public/static/images/chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { getPostBySlug } from "@/app/lib/api";
import BlockContent from "@sanity/block-content-to-react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import HuviHumuus from "@/components/HuviHumuus";
import AjilOlgogchid from "@/components/AjilOlgogchid";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image alt={"image"} width={400} height={400} src={value.asset.url} />
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default async function SinglePage({ params }) {
  const slug = params.slug;

  const getPost = async () => {
    const post = await getPostBySlug(slug);
    console.log(`post`, post);
    return post;
  };
  const searchParams = useSearchParams();
  const post = await getPost();

  return (
    <>
      <div
        style={{ background: "white", margin: "0 auto" }}
        // className="grid grid-cols-6 gap-5 mt-10 p-5 container"
      >
        {/* <div className="col-span-2">{<HuviHumuus />}</div> */}
        <div className="col-span-4">
          <div>
            {post ? (
              <>
                <h1
                  style={{
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    marginBottom: 10,
                  }}
                >
                  {post[0].title}
                </h1>
                {/* <PortableText
                  value={post[0].content}
                  components={myPortableTextComponents}
                /> */}
                <BlockContent
                  blocks={post[0].content}
                  serializers={serializers}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
