import { HomeContainer, Product } from "@/styles/pages/Home"
import Image from "next/image"

import Camiseta1 from '../assets/camisetas/1.svg'
import Camiseta2 from '../assets/camisetas/2.svg'
import Camiseta3 from '../assets/camisetas/3.svg'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Camiseta1} width={520} height={480}  alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={Camiseta2} width={520} height={480}  alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
