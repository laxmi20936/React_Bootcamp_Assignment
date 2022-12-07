import {useState} from 'react';
import Header from './components/Header';
import BodyContainer from './components/BodyContainer';
import members_data from './data.json';
import SearchBar from './components/SearchBar'
import NoSearch from './components/NoSearch'

function App() {
  const [data, setData] =useState(members_data);
  const [noSearch, setNoSearch] =useState(false);
  const [text, setText] =useState('');

  const filteredArray = (filteredArrayData,textReceived) =>{
    if(filteredArrayData.length === 0 ){
      setText(textReceived)
      console.log("no search")
      setNoSearch(true)
    }else{
      setNoSearch(false)
      setData(filteredArrayData)
    }
  }

  return (
    <> 
      <Header/>
      <SearchBar getFilterArray = {filteredArray}/>
      {noSearch? <NoSearch searchData= {text} /> : 
      <BodyContainer members_data= {data}/>}
      
    </>
  );
}

export default App;
