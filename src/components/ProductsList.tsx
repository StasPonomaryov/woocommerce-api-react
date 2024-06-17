import Product from "./Product";

type TProductsListProps = {
  products: Product[]
}

function ProductsList(props: TProductsListProps) {
  const { products } = props;

  return (
    products ? (
      <div className="products-list">
        {products.map((p: Product) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    ) : null
  )
}

export default ProductsList;
