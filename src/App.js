import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {

  const showcart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    fetch("https://database-982fe-default-rtdb.europe-west1.firebasedatabase.app/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart)
    })

  }, [cart]);

  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
