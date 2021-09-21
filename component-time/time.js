/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-14 19:44:42
 */
var Time = {
  getUnix: function () {
    var date = new Date()
    return date.getTime()
  },
  getTodayUnix: function () {
    var date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },
  getYearUnix: function () {
    var date = new Date()
    date.setMonth(0)
    date.setDate(1)
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },
  getLastDate: function (time) {

  }
}