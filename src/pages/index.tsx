import { HomeContainer, Product } from "@/styles/pages/Home";

import Image from "next/image";

import Camiseta1 from "../assets/camisetas/1.svg";
import Camiseta2 from "../assets/camisetas/2.svg";
import Camiseta3 from "../assets/camisetas/3.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <HomeContainer>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={48}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Product>
            <Image src={Camiseta1} width={520} height={480} alt="" />
            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>

        <SwiperSlide>
          <Product>
            <Image src={Camiseta2} width={520} height={480} alt="" />
            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>

        <SwiperSlide>
          <Product>
            <Image src={Camiseta3} width={520} height={480} alt="" />
            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>

        <SwiperSlide>
          <Product>
            <Image src={Camiseta3} width={520} height={480} alt="" />
            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </SwiperSlide>
      </Swiper>
    </HomeContainer>
  );
}
