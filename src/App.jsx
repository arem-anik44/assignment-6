
import { Suspense, use } from 'react';
import './App.css'
import Card from './components/Cards/Card';
import Herobanner from './components/herobanner/Herobanner';
import Navbar from './components/Navbar/Navbar';
import Statsbar from './components/statsbar/Statsbar';

const fetchCard = async () => {
    const res = await fetch("/data.json");
    return res.json();
};


function App() {
 
  const cardInfoPromise = fetchCard();

  return (
    <>
      <Navbar/>
      <Herobanner/>
      <Statsbar/>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>

      <Card cardInfoPromise={cardInfoPromise}/>
      </Suspense>
      
      
    </>
  )
}

export default App;
