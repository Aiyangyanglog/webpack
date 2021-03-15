// webpack 打包图片
// 1)在js中创建图片来引入
// file-loader 默认会在内部生成一张图片到build目录下
// 把生成图片的名字返回回来
import './index.css';
import logo from './logo.png';
let image = new Image();
console.log(logo);
image.src = logo; // 就是一个普通的字符串
document.body.appendChild(image);

// 2)在css引入background('url')
// 3)<img src="" alt="">


// import $ from 'jquery';
// expose-loader 暴露全局的loader
// console.log(window.$); // 在每个模块中注入 $对象

// 1)expose-loader 暴露到window上
// 2)providePlugin 给每个模块提供一个$
// 3)引入不打包

// let str = require('./a.js');
// console.log(str);

// require('./index.css');
// require('./index.less');

// let fn = () => {
//  console.log('log');
// }
// fn();

// class A {
//     a = 1;
// }
// let a = new A();
// console.log(a.a);