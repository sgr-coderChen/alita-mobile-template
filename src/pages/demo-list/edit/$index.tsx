import Index from './components/Detail';
import { useParams } from 'alita';

const Edit = () => {
  const params = useParams();
  console.log('params', params);
  return <Index />;
};

Edit.title = '编辑测试页面详情';

export default Edit;
