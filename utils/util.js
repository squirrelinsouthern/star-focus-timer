const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}
//在不是很清楚两者关系的时候，请采用module.exports来暴露接口，而尽量不采用exports暴露接口。

module.exports = {
  formatTime
}

// exports.formatTime = formatTime

// ES6语法 
// export default{
//   formatTime,
//   sayHello
// }

// export{
//   sayGoodbye
// }

