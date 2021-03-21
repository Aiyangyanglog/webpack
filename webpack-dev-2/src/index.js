// import 'bootstrap';
let url = '';
if(DEV === 'dev') {
    url = "http:localhost:3000"
} else {
    url = "http://www.baidu.com"
}
console.log(url,'------');
// import './style';
// let xhr = new XMLHttpRequest();

// // http-proxy
// xhr.open('GET', '/user',true);

// xhr.onload = function() {
//     console.log(xhr.response);
// }

// xhr.send();

// console.log('home1');

// class Log{
//     constructor() {
//         console.log('出错了');
//     }
// }
// let log = new Log();
// console.log(log);