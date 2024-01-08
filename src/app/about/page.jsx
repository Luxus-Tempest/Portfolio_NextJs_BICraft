import React from "react";
import style from "./page.module.css"
import Image from "next/image";
import Button from "@/components/Button/Button";


const About = () => {
    return (
        <div className={style.container}>

            <div className={style.imgContainer}>
                <Image  src="https://img.freepik.com/free-photo/smiling-businesswoman-with-light-bulb-icon-making-plans-energy-saving-with-her-partner_23-2147826602.jpg?w=1060&t=st=1704491178~exp=1704491778~hmac=87b2d9ef800fa83a0646ce325d451982752866eb1359047c7a2ebcf298615054" 
                fill={true} 
                alt='aboutPicture' 
                className={style.img} />
            
                <div className={style.imgText}> 
                    <h1 className={style.imgTitle}>Savoir plus</h1>
                    <p className={style.imgDescription}>
                        Création artisanale d'applications de tous types.
                    </p>
                </div>
            </div>
            <div className={style.textContainer}>
                <div className={style.item}>
                    <h1 className={style.title}>Qui suis-je ?</h1>
                    <p className={style.description}>
                        Étudiant en Génie Informatique à l'ENSA en 4ème année, je suis Bah Ibrahim, un passionné de développement d'applications. Mon parcours académique et mes projets personnels reflètent ma polyvalence, de la conception d'applications web interactives à la résolution de problèmes complexes. Créatif et méthodique, je suis constamment à la recherche de nouvelles opportunités pour innover et contribuer au monde du développement informatique.
                    </p>
                </div>
                <div className={style.item}>
                <h1  className={style.title} >Que fais-je ?</h1>
                <p className={style.description} >
                Développeur Fullstack passionné, je forge des applications alliant conception intuitive côté client et fonctionnalités robustes côté serveur. Mon engagement : offrir des expériences utilisateur fluides et esthétiques. Mon expertise holistique garantit des solutions technologiques innovantes, centrées sur les besoins concrets des utilisateurs.
                    <br />
                    <br /> - Sites web dynamique
                    <br />
                    <br /> - Apps Bureau
                    <br />
                    <br /> - Apps Mobile 
                </p>
                <Button url="/contact" text="Contact"/>
                </div>
            </div>

        </div>
    );
}

export default About;