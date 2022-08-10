import Header from './components/Header/index';
import {useEffect, useState} from 'react'
import './App.css';
import SearchInput from './components/SearchInput';
import Tabs from './components/Tabs';
import AudioList from './components/AudioList';
import AudioPlayer from './components/AudioPlayer';
import { baseUrl } from './config';
//import { appData } from '../../server/mock';

function App() {
  const [list,setList] = useState(false);
  const [appData,setAppData] = useState({}); 

  const onBackButtonPress = () => {
    setList(false);
  }
  
  useEffect(() => {
    fetch(`${baseUrl}song`)
    .then(res => res.json())
    .then(jsonResp => {
      console.log({ jsonResp});
      setAppData(jsonResp.appData);
    })
    .catch(error => {
      console.log({ error});
    })
  },[])
  
  return (
    <div className="App m-20">
     <Header/>
     <h2 className="mtb-20 app-quote">Find the Best Music for your code</h2>
     <SearchInput/>
     <Tabs tabData={appData['homeScreen']}/>
     {list && <AudioList onBackButtonPress = {onBackButtonPress} />}
     {/* <button onClick={()=>setList(true)}>btn</button> */}
     <AudioPlayer/>
    </div>
  );
}

export default App;
