import { useState } from 'react';

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authSliceActions, authSliceSelectors } from "../../store/redux/auth/authSlice";
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector(authSliceSelectors.stateData);

  const handleLogin = () => {
    dispatch(authSliceActions.login({ email, password }));
  };

  if (isAuthenticated) {
    return <h2>Вы успешно авторизовались!</h2>;
  }

  return (
    <div>
      <h2>Вход</h2>
      <Input
        label='Email'
        name='email'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        label='Password'
        name='password'
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={handleLogin} disabled={loading} name={loading ? 'Загрузка...' : 'Войти'} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
