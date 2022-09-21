import { Link } from 'react-router-dom';
import './styles.css';


const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <div>
        <Link to="/products">
        <button className="btn-icon">
          <h6>VER CATÁLOGO</h6>
        </button>
        </Link>
      </div>
      <div className="btn-container-navegar">
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};
export default ButtonIcon;
