import React, {useState} from 'react';
import { Provider } from 'react-redux';

import store from './store';

// Components
import ReservationHeader from './ReservationHeader';
import ShoppingCart from './ShoppingCart';
import SearchResults from './SearchResults';

const App = () => {
  const [lang] = useState('es');
  const [cartItems, setCartItems] = useState([]);

  const addItem = item => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Provider store={store}>
      <ReservationHeader language={lang} />
      <ShoppingCart items={cartItems} />
      <SearchResults addItem={addItem} />
    </Provider>
  );
};

export default App;
