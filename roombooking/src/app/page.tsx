import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <h1 className={styles.title}>Room Booking</h1>
      
      <div className={styles.buttonContainer}>
          <Link href={"/login"}>
            <button className={`${styles.buttonLogin}`}>Faça Login</button>
          </Link>
          <Link href={"/register"}>
            <button className={`${styles.buttonRegister}`}>Cadastre-se</button>
          </Link>
          </div>
      
      <div className={styles.hotel}>
      <Image src="/images/initial-hotel.jpg" width={1520} height={760} alt={"Imagem de uma piscina de um hotel"} />
      </div>
    </main>
    </>
  );
}
