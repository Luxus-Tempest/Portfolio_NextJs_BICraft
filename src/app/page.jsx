import Image from 'next/image'
import style from './page.module.css'
import Hero from "../../public/progHero.svg"
import Button from '@/components/Button/Button'

export default function Home() {
  return (
      <div className={style.container}>
        <div className={style.item}>
          <h1 className={style.title}>BAH IBRAHIM | Developpeur Fullstack.</h1>
          <p className={style.description}>Transformer vos idées en réalité. Votre application au service de vos besoins.</p>
          <Button url="/portfolio" text="Voir mes travaux"/>
        </div>
        <div className={style.item}>
          <Image  src={Hero} alt='HomePicture' className={style.img} />
        </div>
      </div>
  )
}
