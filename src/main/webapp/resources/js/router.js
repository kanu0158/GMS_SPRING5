"use strict";
function Session(x){//전역으로 처리한 것, $.ctx 쓰면 편하니 양도 적고 이정도는 prototype($.fn)안써도 괜찮
	sessionStorage.setItem('ctx',x);//내장된 객체와 메소드들
	sessionStorage.setItem('script',x+'/resources/js');
	sessionStorage.setItem('style',x+'/resources/css');
	sessionStorage.setItem('img',x+'/resources/img2');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		script : ()=>{return sessionStorage.getItem('script');},
		style : ()=>{return sessionStorage.getItem('style');},
		img : ()=>{return sessionStorage.getItem('img');}
	};
}

