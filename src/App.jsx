
import './App.css'
import Card from './components/Cards/Card';
import Herobanner from './components/herobanner/Herobanner';
import Navbar from './components/Navbar/Navbar';
import Statsbar from './components/statsbar/Statsbar';

function App() {
  

  return (
    <>
      <Navbar/>
      <Herobanner/>
      <Statsbar/>
      
      <Card/>
      
    </>
  )
}

export default App
