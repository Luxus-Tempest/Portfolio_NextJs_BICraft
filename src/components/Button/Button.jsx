import React from "react";
import style from "./button.module.css";
import Link from "next/link";

const Button = ({text, url}) => {

    return (
        <Link href={url} target="_blank">
            <button className={style.container}>{text}</button>
        </Link>
        
    );
}

export default Button;