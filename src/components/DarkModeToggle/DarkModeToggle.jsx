"use client"

import { useContext } from "react";
import style from "./DarkModeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {

    const {toggle, mode} = useContext(ThemeContext)
    return (
        <div className={style.container} onClick={toggle}>
            <div className={style.icon}>🌙</div>
            <div className={style.icon}>🔆</div>
            <div className={style.ball}
            style={mode === "light" ? {left:"5px"} : {right:"5px"}}
            ></div>
        </div>
    );
}

export default DarkModeToggle;