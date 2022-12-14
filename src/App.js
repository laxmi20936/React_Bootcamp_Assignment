import {useState,useEffect} from 'react';
import Header from './components/Header';
import BodyContainer from './components/BodyContainer';
import members_data from './utils/data.json';
import SearchBar from './components/SearchBar'
import NoSearch from './components/NoSearch'

function App() {
  const [data, setData] =useState([]);
  const [data1, setData1] =useState([]);
  const [noSearch, setNoSearch] =useState(false);
  const [text, setText] =useState('');
  
  useEffect(()=>{
    getApiInfo();
  },[])

  const getApiInfo = async () => {
  const allUsers = await getMemberInfo();
    console.log(allUsers, "abcd")
    setData(allUsers)
  };

  const getMemberInfo = async () =>{
    return Promise.all(members_data.map(async (x) => {
      return (await fetch(`https://api.github.com/users/${x.username}`)).json();
    }));

  }
  
  const filteredArray = (filteredArrayData,textReceived) =>{
    if(filteredArrayData.length === 0 ){
      setText(textReceived)
      console.log("no search")
      setNoSearch(true)
    }else{
      setNoSearch(false)
      setData1(filteredArrayData)
    }
  }

  return (
    <> 
      <Header/>
      <SearchBar getFilterArray = {filteredArray} allUsers={data}/>
      {noSearch? <NoSearch searchData= {text} /> : 
      <BodyContainer members_data= {data1.length?data1:data}/>}
      
    </>
  );
}

export default App;
