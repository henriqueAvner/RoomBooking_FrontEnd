import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import styles from "./users.module.css";
import Image from "next/image";

//Como utilizar o token para realizar requisições em que se é necessário o token.
export async function getData(){
    const token = ''
    const data = await fetch('http://localhost:3001/users', 
    {headers: 
        {Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExMTM0MzA2fQ.5es-P297s7j-c64Zd35c3FLt2ViB2pv6eIb-cSJL0Ec'}`}});
    const users = await data.json();

    return users;
}
export default async function Users() {
    const users = await getData();
    return( 
        <>
        <NavBar/>
    <h1 className={styles.title}>Clientes</h1>
        <ul className={styles.list}>
        {users.map((user: any) => {
            return(
            <li key={user.id}>
                <p>Nome: {user.nome}</p>
                <p>E-mail para contato: {user.email}</p>
                <Image src={"/images/user.jpg"} alt={"imagem padrão de usuário"} width={100} height={100}/>
            </li>
            )
        })}
        </ul>

        <Link href={"/home"}>
    <button>Voltar</button>
    </Link>
    </>
    )
}