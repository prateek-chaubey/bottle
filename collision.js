/*!
* Collision.js v0.1 visit https://github.com/h4c-k3r for more details
* Copyright 2018-Present PRATEEK CHAUBEY
* Licensed under the MIT license
*/
if("undefined"==typeof jQuery)throw new Error("Collision.js requires jQuery to run");function collision(collider1,collider2){var x1 = collider1.offset().left;var y1 = collider1.offset().top;var h1 = collider1.height();var w1 = collider1.width();var x2 = collider2.offset().left;var y2 = collider2.offset().top;var h2 = collider2.height();var w2 = collider2.width();var b1 = x1+w1;var b2 = x2+w2;var a1 = y1+h1;var a2 = y2+h2;if ((( y1==a2 || y2==a1 ||( a2>y1 && y2<a1) || (x1==x2 && y1==y2))&&( x1==b2 || x2==b1 ||( b2>x1 && x2<b1) || (x1==x2 && y1==y2))) ){return true;}else if(b1<x2 || a1>y2){return false;}}