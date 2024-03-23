import styles from './login.module.css';
import Image from "next/image";
import Link from "next/link";


export default function Login() {
    return (
        <>
        <main className={styles.main}>
          <h1 className={styles.tittle}>Room Booking</h1>
          <form>
          <div className={styles.buttonsContainer}>
              <Link href={"/login"}>
                <button className={styles.button}>Entrar</button>
              </Link>
              </div>
          </form>
          <div className={styles.hotel}>
          <Image src="/images/initial-hotel.jpg" width={1520} height={760} alt={"Imagem de uma piscina de um hotel"} />
          </div>
        </main>
        </>
    )
}