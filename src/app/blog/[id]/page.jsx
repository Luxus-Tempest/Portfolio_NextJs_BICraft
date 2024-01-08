import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, 
    { cache: 'no-store' });

    if (!res.ok) {
      return notFound()
    }
   
    return res.json()
  }

  export async function generateMetadata({ params }) {
    const post = await  getData(params.id)
    return {
      title: post.title,
      description: post.desc,
    };
  }


const BlogPost = async ({params}) => {
    //console.log(params);

    const data = await getData(params.id)


    return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
            <div className={styles.author}>
                <Image
                src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=996&t=st=1704583347~exp=1704583947~hmac=49bd5aefb0b6d6e556d85e0b7b1d4b901718d7671b59b44b687d96ab5a0158f4"
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
                />
                <span className={styles.username}>{data.username}</span>
            </div>
            </div>
            <div className={styles.imageContainer}>
            <Image
                src={data.img}
                alt=""
                fill={true}
                className={styles.image}
            />
            </div>
        </div>
        <div className={styles.content}>
            <p className={styles.text}>
                {data.content}
            </p>
        </div>
        </div>
  );
}

export default BlogPost;