import { useAppDispatch, useAppSelector } from 'store/hooks';
import { authSliceActions, authSliceSelectors } from "../../store/redux/auth/authSlice";
import Button from 'components/Button/Button';


function Dashboard() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(authSliceSelectors.stateData);

  const handleLogout = () => {
    dispatch(authSliceActions.logout());
  };

  return (
    <div>
      <h2>Панель управления</h2>
      <p>Ваш токен: {token}</p>
      < Button onClick={handleLogout} name='Выйти' />
    </div>
  );
};

export default Dashboard;
