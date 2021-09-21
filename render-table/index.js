/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-17 18:36:20
 */
var app = new Vue({
  el: '#app',
  data: {
    columns: [
      { title: '姓名', key: 'name', width: 100 },
      { title: '年龄', key: 'age', sortable: true, width: 100 },
      { title: '出生日期', key: 'birthday', sortable: false, width: 200 },
      { title: '地址', key: 'address', sortable: false, width: 300 }
    ],
    data: [
      { name: '王小明', age: 18, birthday: '1999-02-21', address: '北京市朝阳区芍药居' },
      { name: '杜康', age: 29, birthday: '1991-11-15', address: '武汉市硚口区古田街道' },
    ]
  }
})