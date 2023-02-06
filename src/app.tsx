import HomeGary from '@/assets/demoIcon/home.png';
import HomeBlue from '@/assets/demoIcon/home1.png';
import type {
  NavBarListItem,
  NavBarProps,
  TabBarListItem,
  TabBarProps,
  TitleListItem,
} from 'alita';
import { history } from 'alita';

// 页面标题，也可以通过页面级别修改 这里貌似没法通过路由静态属性配合onRouteChange 来动态设置title
const titleList: TitleListItem[] = [
  {
    pagePath: '/',
    title: '首页',
  },
  {
    pagePath: '/demo-list',
    title: '测试列表页',
  },
];

//  单独设置某些页面的 navbar
const navList: NavBarListItem[] = [];

const navBar: NavBarProps = {
  navList,
  fixed: false,
  onLeftClick: () => {
    history.back();
  },
};

const tabList: TabBarListItem[] = [
  {
    pagePath: '/',
    text: '首页',
    iconPath: HomeGary,
    selectedIconPath: HomeBlue,
    title: '首页',
    iconSize: '',
    badge: '',
  },
];

const tabBar: TabBarProps = {
  color: `#999999`,
  selectedColor: '#00A0FF',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};
