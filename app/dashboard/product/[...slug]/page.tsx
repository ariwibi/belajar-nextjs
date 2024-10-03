type ProductProps = {
  params: {
    slug?: string[];
  };
};

export default function Product({ params }: ProductProps) {
  console.log(params);

  return <h1>Detail {params.slug?.join(", ")}</h1>;
}
