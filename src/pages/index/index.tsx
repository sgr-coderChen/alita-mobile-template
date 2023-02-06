import { useNavigate, useSelector, useDispatch } from 'alita';
import { Button } from 'antd-mobile';
import styles from './index.css';

export default function ({}) {
  const navigate = useNavigate();
  const appInfo = useSelector((state: any) => state.useAppInfo);
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log('appInfo', appInfo);
    dispatch({
      type: 'useAppInfo/login',
    });
  };

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Button color="primary" onClick={() => handleLogin()}>
        点击把数据存入store中
      </Button>
      <p className={styles.description}>
        To get started, edit <code>src/pages/index.js</code> and save to reload.
      </p>
      <Button
        color="primary"
        fill="solid"
        onClick={() => navigate('/demo-list')}
      >
        Go to List
      </Button>
    </div>
  );
}
