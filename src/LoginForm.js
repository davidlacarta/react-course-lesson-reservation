import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import api from './api';
import {sleep} from './utils';
import {login} from './user/userSlice';

const LoginForm = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submit = async event => {
    event.preventDefault();
    setLoading(true);
    const userData = await api.getUser(value);
    await sleep();
    if (userData) {
      const { id, name: username, language } = userData;
      dispatch(login({ id, username, language }));
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
