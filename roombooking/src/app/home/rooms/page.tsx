import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import styles from "./room.module.css";
import Image from "next/image";

export async function getData() {
    const data = await fetch('http://localhost:3001/rooms');
    const rooms = await data.json();

   return rooms;
    
}

export default async function Rooms() {
    const rooms = await getData();
    return( 
        <>
        <NavBar/>
    <h1 className={styles.title}>Quartos</h1>

        <ul className={styles.list}>
            {rooms && rooms.map((room: any) => (
                <li key={room.id}>{room.roomNumber}, {room.roomType}, {room.nightPrice}
                <div className={styles.bed}>
                <Image src={"/images/room.png"} alt={"imagem de cama"} width={60} height={60}/>
                </div>
                </li>
                
            ))}
        </ul>



        <Link href={"/home"}>
    <button>Voltar</button>
    </Link>
    </>
    )
}
