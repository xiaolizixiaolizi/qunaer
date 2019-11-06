// 按需导入
import {
  Button, Cell, CellGroup,
  Icon, Image, Row, Col,
  Checkbox, CheckboxGroup, Search,
  DatetimePicker, Collapse, CollapseItem,IndexBar, IndexAnchor,
  Grid, GridItem, Swipe, SwipeItem, Toast, Lazyload,Sticky ,
  Tabbar, TabbarItem 
  , Notify, Dialog,Loading

} from 'vant'
const vant = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Cell)
    Vue.use(CellGroup)
    Vue.use(Icon)
    Vue.use(Image)
    Vue.use(Sticky)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    Vue.use(DatetimePicker)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
    Vue.use(Grid)
    Vue.use(GridItem)
    Vue.use(Swipe)
    Vue.use(SwipeItem)
    Vue.use(IndexBar)
    Vue.use(IndexAnchor)
    Vue.use(Toast)
    Vue.use(Lazyload)
    Vue.use(Tabbar)
    Vue.use(TabbarItem)
    Vue.use(Search)
    Vue.use(Loading)

    Vue.prototype.$toast = Toast
    Vue.prototype.$loading = Toast.loading
    Vue.prototype.$notify = Notify
    Vue.prototype.$dialog = Dialog
    Vue.prototype.$alert = Dialog.alert

  }
}
export default vant

