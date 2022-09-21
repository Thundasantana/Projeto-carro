import { Link } from 'react-router-dom';
import './styles.css';

const ButtonBuscar = () => {
  return (
    <div className="btn-container-buscar">
      <div className="btn-box">
        <Link to="/products">
          <input className="btn-box-search" type="text" name='search' id='search' placeholder='Digite sua busca'/>
          <button className="btn-icon-buscar">
            <h6> BUSCAR</h6>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ButtonBuscar;
