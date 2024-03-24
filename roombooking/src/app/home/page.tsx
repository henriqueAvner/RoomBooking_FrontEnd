import Link from "next/link"
import Image from "next/image"

import styles from './inicial.module.css'



export default function Home() {
    return (
<>
    <div className={styles.main}>
        <header className={styles.title} >
        <Link href={"/"}>
        <h5 className={styles.title}>Home Page</h5>
        </Link>
        </header>
      
      <ul className={styles.links}>
        <li>
          <Link href="/home/reservations">
              <h2>Reservas</h2>
          </Link>
          <Image src={"/images/reservas1.jpg"} alt={"seção para reservas"} width={500} height={400}/>
              <p className={styles.description}>Aqui você encontra todas as reservas <br/>realizadas em nosso site</p>

        </li>
        <li>
          <Link href="/home/rooms">
              <h2>Quartos</h2>
          </Link>
          <Image src={"/images/quartos.jpg"} alt={"seção para reservas"} width={500} height={400}/>
              <p className={styles.description}>Aqui você encontrará todos os quartos e suas <br/>respectivas reservas</p>

        </li>
        <li>
          <Link href="/home/users">
              <h2>Clientes</h2>
          </Link>
          <Image src={"/images/clientes.avif"} alt={"seção para reservas"} width={550} height={400}/>

          <p className={styles.description}>Aqui você encontrará todos os nossos clientes, e e-mails para <br/>contato dos mesmos</p>
        </li>
      </ul>

      <Link href="/">
        <button className={styles.logoutButton}>Logout</button>
      </Link>
    </div>

</>

    )
}