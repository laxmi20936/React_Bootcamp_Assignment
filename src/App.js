import Header from './components/Header';
import BodyContainer from './components/BodyContainer';
import './App.css';
import members_data from './data.json'

console.log(members_data,"Array")

function App() {
  return (
    <>
      <Header/>
      <div className="box">
        <BodyContainer members_data = {members_data}/>
      </div>
    </>
  );
}

export default App;
