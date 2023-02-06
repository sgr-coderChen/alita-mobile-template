import { getList } from '@/services/demo-list';
import { useRequest } from '@/hooks';
import { Button } from 'antd-mobile';
import { useEffect } from 'react';
import { history, useSelector } from 'alita';
import { Page, Content } from '@alita/flow';

const DemoList = () => {
  const appInfo = useSelector((state: any) => state.useAppInfo);

  const { run: fetchList, loading } = useRequest(getList, {
    toast: true,
    loadingState: true,
    onSuccess(res) {
      console.log(res);
    },
    onError(err) {
      console.log('err', err);
    },
  });

  useEffect(() => {
    console.log('loading', loading);
  }, [loading]);

  return (
    <Page>
      <Content>
        <div onClick={() => history.push(`/demo-list/edit`)}>新增</div>
        <div onClick={() => history.push(`/demo-list/edit/${123}`)}>编辑</div>
        <Button color="primary" onClick={() => fetchList()}>
          获取文章列表
        </Button>
        <Button
          color="primary"
          onClick={() => console.log('store中的数据', appInfo)}
        >
          获取store
        </Button>
      </Content>
    </Page>
  );
};

export default DemoList;
