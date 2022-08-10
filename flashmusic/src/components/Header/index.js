import {logo, searchIcon} from '../../assets';
import './style.css';

const Header = props =>{
    return(
        <header className="header flex justify-sb">
            <div className="logo">
                <img src={logo} alt="f"/>
            </div>
            <div>
                <img src={searchIcon} alt="search"/>
            </div>
        </header>
    )
}

export default Header;