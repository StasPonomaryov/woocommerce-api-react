import '../assets/css/product.css';
import NoImage from './UI/NoImage';

type TProductProps = {
  product: Product
}

function Product(props: TProductProps) {
  const { product } = props;

  return (
    <div className="product" key={product.id}>
      <div className="product-image">
        {product?.images.length ? (
          <img src={product.images[0].src} alt={product.name} />
        ) : <NoImage />}
      </div>
      <div className="product-name">
        {product.name}
      </div>      
    </div>
  )
}

export default Product;
