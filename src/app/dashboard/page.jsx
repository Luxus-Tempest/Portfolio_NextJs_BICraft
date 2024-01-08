"use client"
import React from "react";
import styles from "./page.module.css"
import useSWR from 'swr';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Dashboard = () => {

    const session = useSession();
    console.log(session)

    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, mutate ,error, isLoading } = useSWR(
        `api/posts?username=${session?.data?.user.name}`, 
        fetcher
    );
    console.log(data);


    if(session.status === "loading"){
        return <p>Loading...</p>
    }

    if(session.status === "unauthenticated"){
        router?.push("/dashboard/login")
    }


    const handleSubmit = async (e) => {
        e.preventDefault(); //pour empecher la page de se rafraichir
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;
    
        try {
          await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
              title,
              desc,
              img,
              content,
              username: session.data.user.name,
            }),
          });
          mutate(); //Pour appliquer les modififications sans rafraichir la page
          e.target.reset() //Pour effacre le contenu des input après le send
        } catch (err) {
          console.log(err);
        }
      };

      const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
              method: "DELETE",
            });
            mutate();
          } catch (err) {
            console.log(err);
          }
      };
    
    if(session.status === "authenticated"){
            return (
                <div className={styles.container}>
                <div className={styles.posts}>
                  {isLoading
                    ? "loading"
                    : data?.map((post) => (
                        <div className={styles.post} key={post._id}>
                          <div className={styles.imgContainer}>
                            <Image src={post.img} alt="" width={200} height={100} />
                          </div>
                          <h2 className={styles.postTitle}>{post.title}</h2>
                          <span
                            className={styles.delete}
                            onClick={() => handleDelete(post._id)}
                          >
                            X
                          </span>
                        </div>
                      ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                  <h1>Publier un post</h1>
                  <input type="text" placeholder="Title" className={styles.input} />
                  <input type="text" placeholder="Desc" className={styles.input} />
                  <input type="text" placeholder="Image" className={styles.input} />
                  <textarea
                    placeholder="Content"
                    className={styles.textArea}
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button className={styles.button}>Send</button>
                </form>
              </div>
            );
    }
}

export default Dashboard;