import { ImageContainer, SucessContainer } from "@/styles/pages/Sucess";
import Link from "next/link";

export default function Sucess() {
    return (
        <SucessContainer>
            <h1>Compra efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul! <strong>Diego</strong>, sua <strong>Camiseta Beyond the Limists</strong> já está a caminho da sua casa.
            </p>

            <Link href="/">
              Voltar ao catálogo
            </Link>
        </SucessContainer>
    )
}