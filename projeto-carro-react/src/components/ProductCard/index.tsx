import './styles.css';
import ProductImg from 'assets/images/product.png';
import ButtonCatalog from 'components/ButtonCatalog';

const ProductCard = () => {
  return (
    <div className="base card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>

      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cupiditate,nisi
        </p>
        <ButtonCatalog />
      </div>
  
    </div>
  );
};

export default ProductCard;
