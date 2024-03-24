import Link from 'next/link';
import styles from './register.module.css';
import Image from 'next/image';

export default function Register() {
    return (
      <>
      <main className={styles.main}>
        <Link href={"/"}>
        <h1 className={styles.title}>Room Booking</h1>
        </Link>
        <form className={styles.form}>
          <h3>Cadastre-se</h3>
          <div className={styles.inputContainer}>
            
              <input type="text" name="email" id="email" className={styles.input} placeholder="Email" />
          </div>
          <div className={styles.inputContainer}>
            
              <input type="text" name="name" id="name" className={styles.input} placeholder="Nome Completo" />
          </div>
          <div className={styles.inputContainer}>
              <input type="password" name="password" id="password" className={styles.input} placeholder="Password" />
          </div>
          <div className={styles.buttonsContainer}>
            <Link href={"/home"}>
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