import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true

function App() {
  const showcart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = async () => {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "pending",
      //     title: "Sending",
      //     message: "Sending cart data!",
      //   })
      // );
      // const response = await fetch(
      //   "https://database-982fe-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      //   {
      //     method: "PUT",
      //     body: JSON.stringify(cart),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Sendind cart data failed");
      // }
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Success",
    //       message: "Sent cart data successfully!",
    //     })
    //   );
    // };

    if (isInitial) {
      isInitial = false;
      return
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }

  
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error",
    //       message: "Sending cart data failed!",
    //     })
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showcart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
