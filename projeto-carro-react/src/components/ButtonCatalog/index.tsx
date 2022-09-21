import { Link } from 'react-router-dom';
import './styles.css';


const ButtonCatalog = () => {
  return (
    <div className="btn-container-catalog">
      <div>
        <Link to="/products">
        <button className="btn-icon-catalog">
          <h6>COMPRAR</h6>
        </button>
        </Link>
      </div>
    </div>
  );
};
export default ButtonCatalog;