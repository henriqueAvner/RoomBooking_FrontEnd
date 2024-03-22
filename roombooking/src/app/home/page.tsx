import Link from "next/link"
import NavBar from "../components/NavBar"
import Head from "next/head"



export default function Home() {
    return (
<>
        <h1>
        Página inicial - Todas as sessões
        </h1>
        <ul>
            <li >
                <Link href="/home/reservations">
                    <h2>Reservas</h2>
                </Link>
            </li>
            <li >
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
    
      
        <Link href={"/"}>
    <button>Logout</button>
    </Link>
    
</>

    )
}