"use client";
import React from "react";
import style from "./page.module.css"
import Link from "next/link";


const Portfolio = () => {

    const handleHover = (event) => {
        const items = document.querySelectorAll(`.${style.item}`);
        items.forEach((item) => {
          if (item !== event.target) {
            item.classList.add(style.blur);
          }
        });
      };
    
      const handleMouseLeave = () => {
        const items = document.querySelectorAll(`.${style.item}`);
        items.forEach((item) => {
          item.classList.remove(style.blur);
        });
      };

    return (
        <div className={style.container}>
            <h1 className={style.selectTitle}> Catégories des projets</h1>
            <div className={style.items}>
                <Link href="portfolio/Illustrations" className={style.item} 
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}>
                    <span className={style.title}>Illustrations</span>
                </Link>

                <Link href="portfolio/Websites" className={style.item} 
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}>
                    <span className={style.title}>Sites Web</span>
                </Link>

                <Link href="portfolio/Applications_Mobile" className={style.item} 
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}>
                    <span className={style.title}>App Android</span>
                </Link>
                <Link href="portfolio/Applications_Bureau" className={style.item} 
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}>
                    <span className={style.title}>App Bureau</span>
                </Link>
            </div>
        </div>
    );
}

export default Portfolio;