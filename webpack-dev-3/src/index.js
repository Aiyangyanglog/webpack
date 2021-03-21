// let button = document.createElement('button');
// button.innerHTML = 'hello';
// // vue的懒加载 react的懒加载的实现原理
// button.addEventListener('click',function() {
//     // es6 草案中的语法
//     import('./source.js').then(data=>{
//         console.log(data.default);
//     })
// })
// document.body.appendChild(button)

import str from './source';
console.log(str);
if(module.hot) {
    module.hot.accept('./source',()=>{
        let str = require('./source');
        console.log(str);
    })
}