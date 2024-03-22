import Link from "next/link";
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <ul className={styles.navbar}>
            <li className={styles.navItem}>
                <Link href="/home/reservations">
                    <p className={styles.navLink}>Reservas</p>
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/home/rooms">
                    <p className={styles.navLink}>Quartos</p>
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/home/users">
                    <p className={styles.navLink}>Clientes</p>
                </Link>
            </li>
        </ul>
    )
}