import './Header.css';
import { imageUrlHeader } from './constants';

const Header = () => {
    return (
        <div className="head-container">
            <img  className="image" src={imageUrlHeader} alt ="no-image"/>
        </div>
    )
}

export default Header;