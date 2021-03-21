import './a';
import './b';
console.log('index.js');

import $ from 'jquery';
console.log($);
// import calc from './test';
// import 在生产环境下 会自动去除掉没有用的代码
// tree-shaking 把没有用的代码自动删除掉
// console.log(calc.sum(1,2));

// import React from 'react';
// import { render} from 'react-dom';
// render(<h1>jsx</h1>,window.root);
// import jquery from 'jquery';
// import moment from 'moment';
// // 设置语言
// // 手动引入中文包
// import 'moment/locale/zh-cn';


// let r = moment().endOf('day').fromNow();
// console.log(r);