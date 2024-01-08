"use client"
import React, { useState } from "react";
import styles from "./page.module.css"
import Link from "next/link";
import { useRouter } from "next/navigation";


const Register = () => {

    const [err, setErr] = useState(false);

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try{
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            res.status === 201 && router.push("/dashboard/login?success=Compte creer avec succes")
        }catch(e){
            setErr(true);
        }
    };

    return (
        <div className={styles.container}>
      <h1 className={styles.title}>Créer un compte</h1>
      <h2 className={styles.subtitle}>Pour accéder au tableau de bord.</h2>
      <form  className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
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
        <button className={styles.button}>Register</button>
      </form>
      {err && "Something went wrong !"}

      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Se connecter
      </Link>
    </div>
    );
}

export default Register;