import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  background-color: rgb(205, 202, 169);

  span:first-child {
    font-weight: bold;
    margin-right: 1em;
  }
`;

const api = {
  JSON: {'Content-Type': 'application/json'},
  getUser: async name => {
    const response = await fetch(`/users?name=${name}`, {
      headers: {...api.JSON},
    });
    const data = await response.json();
    if (data.length > 0) {
      const [userData] = data;
      return userData;
    }

    return false;
  },

  getResults: async () => {
    const response = await fetch(`/hotels`, {
      headers: {...api.JSON},
    });
    const results = await response.json();
    return results;
  },
};

const sleep = (ms = Math.random() * 3000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const LoginForm = ({setUser}) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async event => {
    event.preventDefault();
    setLoading(true);
    const userData = await api.getUser(value);
    await sleep();
    if (userData) {
      setUser(userData);
    }
    setLoading(false);
  };

  if (loading) {
    return 'loading...';
  }

  return (
    <form onSubmit={submit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">LogIn</button>
    </form>
  );
};

const User = ({user, setUser}) => {
  if (user) {
    return <span>{user.name}</span>;
  }

  return <LoginForm setUser={setUser} />;
};

const ReservationHeader = ({user, setUser, language}) => {
  return (
    <Header>
      <User user={user} setUser={setUser} />
      <span>{language}</span>
    </Header>
  );
};

const Hotel = styled.article`
  margin: 2em;
  padding: 0.5em 2em;
  border: 2px solid lightblue;
`

const SearchResults = () => {
  const [results, setResults] = useState();

  useEffect(() => {
    const getResults = async () => {
      const response = await api.getResults();
      await sleep();
      setResults(response);
    };

    getResults();
  }, []);

  if (!results) {
    return 'loading...';
  }

  return results.map(item => (
    <Hotel key={`HOTEL|${item.id}`}>
      <h2>{item.name}</h2>
    </Hotel>
  ));
};

const App = () => {
  const [user, setUser] = useState();
  const [lang, setLang] = useState('es');

  useEffect(() => {
    setLang((user && user.language) || 'es');
  }, [user, setLang]);

  return (
    <main>
      <ReservationHeader user={user} language={lang} setUser={setUser} />
      <SearchResults />
    </main>
  );
};

export default App;
