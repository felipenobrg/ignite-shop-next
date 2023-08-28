import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/Product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          similique nisi, assumenda cum fugiat a id sit est voluptates,
          expedita, exercitationem voluptate. Aliquam soluta harum atque quod
          voluptatem, temporibus neque!
        </p>

        <button>
            Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
