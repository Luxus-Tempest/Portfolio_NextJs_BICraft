
import React from "react";
import style from "./footer.module.css"
import Image from "next/image";

const Footer = () => {

    return (
        <div className={style.container}>
            <div>©2024 {"<B.I.Craft />"}. Tous droits réservés.</div>
            <div className={style.social}>
                <Image src="/1.png" 
                alt="<B.I.Craft /> Facebook"
                width={20}
                height={20}
                className={style.icon}
                />
                <Image src="/2.png" 
                alt="<B.I.Craft /> Instagram"
                width={20}
                height={20}
                className={style.icon}
                />
                <Image src="/3.png" 
                alt="<B.I.Craft /> Twitter"
                width={20}
                height={20}
                className={style.icon}
                />
                <Image src="/4.png" 
                alt="<B.I.Craft /> Youtube"
                width={20}
                height={20}
                className={style.icon}
                />
            </div>
        </div>
    );
};

export default Footer;