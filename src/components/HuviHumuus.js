"use client";
import React from "react";
import styles from "@/app/blog/single-page.module.css";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Link from "next/link";
import Image from "next/image";
import chevronDown from "@/../../public/static/images/chevron-down.svg";
import { menu } from "@/app/data/navigationData";
const AccordionItem = ({ item, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        <Link href={item.routePath}>{item.title}</Link>
        {item.sub && item.sub.length > 0 && (
          <Image
            className={styles.chevron}
            src={chevronDown}
            alt="Chevron Down"
          />
        )}
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  >
    {item.sub &&
      item.sub.map((subItem, index) => (
        <Accordion key={index}>
          <AccordionItem item={subItem} />
        </Accordion>
      ))}
    {item.lastSub && (
      <Accordion>
        <AccordionItem item={item.lastSub} />
      </Accordion>
    )}
  </Item>
);

const renderMenu = () => (
  <Accordion>
    {menu.map((item, index) => (
      <AccordionItem key={index} item={item} />
    ))}
  </Accordion>
);

export default function HuviHumuus() {
  return <div>{renderMenu()}</div>;
}
