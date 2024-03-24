import Link from "next/link"

import styles from './inicial.module.css'



export default function Home() {
    return (
<>
    <div className={styles.main}>
        <header className={styles.title}>
        <h5>Página inicial - Todas as sessões</h5>
        </header>
      
      <ul className={styles.links}>
        <li>
          <Link href="/home/reservations">
              <h2>Reservas</h2>
          </Link>
        </li>
        <li>
          <Link href="/home/rooms">
            
              <h2>Quartos</h2>
           
          </Link>
        </li>
        <li>
          <Link href="/home/users">
            
              <h2>Clientes</h2>
            
          </Link>
        </li>
      </ul>

      <Link href="/">
        <button className={styles.logoutButton}>Logout</button>
      </Link>
    </div>

</>

    )
}