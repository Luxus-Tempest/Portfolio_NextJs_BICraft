"use client"
import React from "react";
import  styles from "./page.module.css"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {

  const session = useSession();
  const router = useRouter()

  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  
  if(session.status === "authenticated"){
    router?.push("/dashboard")
    
  }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
    
        signIn("credentials", {
          email,
          password,
        });
      };

    return (
        <div className={styles.container}>
             <form onSubmit={handleSubmit} className={styles.form}>
                <input
                type="email"
                placeholder="Email"
                required
                className={styles.input}
                />
                <input
                type="password"
                placeholder="Password"
                required
                className={styles.input}
                />
                <button className={styles.button}>Login</button>
            </form>
            <button
              onClick={() => {
                signIn("google");
              }}
              className={styles.button + " " + styles.google}
            >
              Login with Google
            </button>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/register">
              Create new account
            </Link>
        </div>
    );
}

export default Login;