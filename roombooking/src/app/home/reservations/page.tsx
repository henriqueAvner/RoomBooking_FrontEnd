import NavBar from "@/app/components/NavBar"
import Link from "next/link"
import styles from './reservations.module.css';
import Image from "next/image";


export async function getData() {
    const data = await fetch('http://localhost:3001/reservations');
    const reservations = await data.json();
    return reservations;
}

export default async function Reservations() {
    const reservations = await getData();
    return( 
        <>
        <NavBar/>
        <Link href={"/home"}>
    <button>Voltar</button>
    </Link>
    
    <h1 className={styles.title}>Reservas dos clientes</h1>
        <ul className={styles.list}>
        {reservations && reservations.map((reservation: any) => {
            return(
           <li key={reservation.id}>
            <p>Quarto: {reservation.Rooms.roomType}</p>
            <p>Número: {reservation.Rooms.roomNumber}</p>
            <p>Valor: {reservation.Rooms.nightPrice}</p>
            <ul>
            {!reservation.Users|| reservation.Users.length === 0 ? (
            <>
                <h3>Quarto disponível</h3>
                <Image src={"/images/available.png"} alt={"quarto diponível"} width={80} height={80}/>
                </>
            ) :
             reservation.Users.map((user: any) => {
                return(
                <>
                    <h4>Reservado por:</h4>
                        <li> 
                            {user.nome}
                            <Image src={"/images/ocuped.svg"} alt={"quarto diponível"} width={80} height={80}/>
                        </li>
                </>      
            );
            })}
            </ul>
            </li> 
            )
        })}
       </ul>
     
    </>
    )
}
