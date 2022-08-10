import { searchIcon } from '../../assets';
import './style.css';

const SearchInput = props =>{
   return(
       <div className="search-input-container flex">
           <img src={searchIcon} alt="search"/>
           <input placeholder="Find Your Music"/>
       </div>
   );
}

export default SearchInput;