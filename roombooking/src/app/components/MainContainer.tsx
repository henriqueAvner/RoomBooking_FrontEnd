import Footer from "./Footer";

export type Props = {
    children: React.ReactNode
}

export default function MainContainer({children}: Props) {
    return (
        <>
            <Footer/>
            <div>{children}</div>
        </>
    )
}