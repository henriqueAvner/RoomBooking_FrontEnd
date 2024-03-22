import Link from "next/link"

export default function Register() {
    return (
        <>
        <h1>Cadastre-se</h1>
        <p>Nome:</p>
        <p>Email:</p>
        <p>Senha:</p>
        <Link href={"/"}>
            <button>Voltar</button>
        </Link>
        </>
    )
}