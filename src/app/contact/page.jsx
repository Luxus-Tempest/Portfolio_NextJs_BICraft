import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
//import ContactImg from "../../../public/contact.png"
import Button from "@/components/Button/Button";

export const metadata = {
  title: 'BAH IBRAHIM Contact information',
  description: ' Contact page',
}

const Contact = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Prendre contact</h1>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <Image
                src="/mailSent.svg"
                alt=""
                fill={true}
                className={styles.image}
              />
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="nom" className={styles.input} />
              <input type="text" placeholder="exemple@gmail.com" className={styles.input} />
              <textarea
                className={styles.textArea}
                placeholder="message"
                cols="30"
                rows="10"
              ></textarea>
              <Button url="#" text="Send"/>
            </form>
          </div>
        </div>
      );
}

export default Contact;