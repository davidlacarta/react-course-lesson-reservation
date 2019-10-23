import React, { useState } from 'react';

import api from './api';
import { sleep } from './utils';

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

export default LoginForm;
