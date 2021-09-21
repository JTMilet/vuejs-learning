/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-17 18:41:21
 */
Vue.component('vTable', {
  props: {
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      currentColumns: [],
      currentData: []
    }
  },
  render: function (h) {
    var begin = +new Date()
    var _this = this
    var cols = []
    var ths = []
    this.currentColumns.forEach(function (col, index) {
      if (col.width) {
        cols.push(h('col', {
          style: {
            width: col.width + 'px'
          },
          attrs: {
            span: 1
          }
        }))
      }
      if (col.sortable) {
        ths.push(h('th', [
          h('span', col.title),
          h('a', {
            class: {
              on: col._sortType_ === 'asc'
            },
            on: {
              click: function () {
                _this.handleSortByAsc(index)
              }
            }
          }, '↑'),
          h('a', {
            class: {
              on: col._sortType_ === 'desc'
            },
            on: {
              click: function () {
                _this.handleSortByDesc(index)
              }
            }
          }, '↓')
        ]))
      } else {
        ths.push(h('th', col.title))
      }
    })
    var trs = []
    this.currentData.forEach(function (row) {
      var tds = []
      _this.currentColumns.forEach(function (cell) {
        tds.push(h('td', {
          style: {
            textAlign: 'center'
          }
        }, row[cell.key]))
      })
      trs.push(h('tr', tds))
    })
    return h('table', [
      h('colgroup', cols),
      h('thead', [
        h('tr', ths)
      ]),
      h('tbody', trs)
    ])
  },
  watch: {
    data: function () {
      this.makeData()
      var sorttedColumn = this.currentColumns.filter(function (col) {
        return col._sortType_ !== 'normal'
      })
      if (sorttedColumn.length > 0) {
        if (sorttedColumn[0]._sortType_ === 'asc') {
          this.handleSortByAsc(sorttedColumn[0]._index)
        } else {
          this.handleSortByDesc(sorttedColumn[0]._index)
        }
      }
    }
  },
  methods: {
    makeColumns: function () {
      this.currentColumns = this.columns.map(function (col, index) {
        col._sortType_ = 'normal'
        col._index_ = index
        return col
      })
    },
    makeData: function () {
      this.currentData = this.data.map(function (row, index) {
        row._index_ = index
        return row
      })
    },
    handleSortByAsc: function (index) {
      var key = this.currentColumns[index].key
      this.currentColumns.forEach(function (col) {
        col._sortType_ = 'normal'
      })
      this.currentColumns[index]._sortType_ = 'asc'
      this.currentData.sort(function (a, b) {
        return a[key] > b[key] ? 1 : -1
      })
    },
    handleSortByDesc: function (index) {
      var key = this.currentColumns[index].key
      this.currentColumns.forEach(function (col) {
        col._sortType_ = 'normal'
      })
      this.currentColumns[index]._sortType_ = 'desc'
      this.currentData.sort(function (a, b) {
        return a[key] < b[key] ? 1 : -1
      })
    }
  },
  mounted () {
    this.makeColumns()
    this.makeData()
  }
})