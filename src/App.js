import React, {useState, useEffect} from 'react';

import ReservationHeader from './ReservationHeader';
import ShoppingCart from './ShoppingCart';
import SearchResults from './SearchResults';

const App = () => {
  const [user, setUser] = useState();
  const [lang, setLang] = useState('es');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setLang((user && user.language) || 'es');
  }, [user, setLang]);

  const addItem = item => {
    setCartItems([...cartItems, item]);
  };

  return (
    <main>
      <ReservationHeader user={user} language={lang} setUser={setUser} />
      <ShoppingCart items={cartItems} />
      <SearchResults addItem={addItem} />
    </main>
  );
};

export default App;
