import {useState} from 'react';
import './SearchBar.css';
import members_data from '../utils/data.json';

const filterName = (enteredText,allUsers) => {
  const filteredData = allUsers.filter((x) => x?.name?.toLowerCase().includes(enteredText));
  console.log(filteredData,"xyz")
  return filteredData;
}

const SearchBar = ({getFilterArray, allUsers}) => {
    const [enteredText, setEnteredText] = useState("")
    
    const changeHandler = (e) =>{
       setEnteredText(e.target.value);
    }
    
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(enteredText, "laxmi")
      const result = filterName(enteredText,allUsers);
      getFilterArray(result,enteredText)
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} >
          <div className="search-container">
            <input className="input-text" 
            type="text" 
            value={enteredText}
            placeholder = "Search..."
            onChange={changeHandler}/>
            
            <button className="search-button">Search</button>
          </div>
        </form>
  )
}

export default SearchBar;