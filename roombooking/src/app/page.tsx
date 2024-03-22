import Image from "next/image";
import Link from "next/link";
import styles from './home.module.css';

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <h1 className={styles.tittle}>Room Booking</h1>
      <form>
      <div className={styles.buttonsContainer}>
          <Link href={"/login"}>
            <button className={styles.button}>Faça Login</button>
          </Link>
          <Link href={"/register"}>
            <button className={styles.button}>Cadastre-se</button>
          </Link>
          </div>
      </form>
      <div className={styles.hotel}>
      <Image src="/images/initial-hotel.jpg" width={1520} height={760} alt={"Imagem de uma piscina de um hotel"} />
      </div>
    </main>
    </>
  );
}