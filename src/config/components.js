
import headerNav from '../components/header/nav';

import navigate from '../components/footer/navigate.vue'
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Actionsheet,
  Sku,
  Card,Button,SwipeCell,Dialog,Tab, Tabs,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar,Tabbar, TabbarItem,Panel,List,Step, Steps,Field ,
  Badge, BadgeGroup,Popup,Stepper,RadioGroup, Radio,Picker,Uploader,Info,Loading
} from 'vant';

const components=[
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    SwipeItem,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn,
    Actionsheet,
    Sku,
    Card,
    Button,
    SwipeCell ,
    Dialog ,
    headerNav, 
    Tab, Tabs,Toast,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar ,Tabbar, TabbarItem,navigate,Panel,List ,Step, Steps,Field ,
    Badge, BadgeGroup,Popup,Stepper,RadioGroup, Radio,Picker,Uploader,Info,Loading
]


export default (Vue)=>{
    components.forEach(Component => {
        Vue.component(Component.name, Component)
    });
}
