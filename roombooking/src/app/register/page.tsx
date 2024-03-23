import Link from 'next/link';
import styles from './register.module.css';
import Image from 'next/image';

export default function Register() {
    return (
        <>
        <main className={styles.main}>
          <h1 className={styles.tittle}>Room Booking</h1>
          <form>
          <div className={styles.buttonsContainer}>
              <Link href={"/login"}>
                <button className={styles.button}>Cadastrar</button>
              </Link>
              <Link href={"/"}>
                <button className={styles.button}>Voltar</button>
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