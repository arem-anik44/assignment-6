import { Suspense, useState } from 'react';
import './App.css'
import Card from './components/Cards/Card';
import Herobanner from './components/herobanner/Herobanner';
import Navbar from './components/Navbar/Navbar';
import Statsbar from './components/statsbar/Statsbar';
import { toast } from 'react-toastify';
import Footer from './components/Footer/Footer';

const fetchCard = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const cardInfoPromise = fetchCard();

  const [isAvilable, setIsAvilable] = useState(true);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
  const isExist = cart.find((item) => item.id === product.id);

  if (!isExist) {
    setCart([...cart, product]);

    toast.success("Added to cart successfully!");
  } else {
    toast.warning("Already added!");
  }
};

  const handleRemoveCart = (id) => {
  const remainingCart = cart.filter((item) => item.id !== id);
  setCart(remainingCart);

  toast.warning("Item removed from cart!");
};

  const handleClearCart = () => {
  setCart([]);
};


  return (
    <>
      <Navbar
        isAvilable={isAvilable}
        setIsAvilable={setIsAvilable}
        cart={cart}
      />

      <Herobanner />
      <Statsbar />

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Card
          cardInfoPromise={cardInfoPromise}
          isAvilable={isAvilable}
          setIsAvilable={setIsAvilable}
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleRemoveCart={handleRemoveCart}
          handleClearCart={handleClearCart}
        />
      </Suspense>

      <Footer/>
    </>
  )
}

export default App;