import { SpinLoading } from 'antd-mobile';

const PageLoading = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <SpinLoading color="primary" style={{ '--size': '12vw' }} />
  </div>
);

export default PageLoading;
