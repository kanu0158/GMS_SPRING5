"use strict";
var algo = algo || {};
algo = {
		init : x=>{
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate : x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
};
algo.main = {
		onCreate : ()=>{
			algo.main.setContentView();
		},
		setContentView : ()=>{
			/*
			.html 은 오버라이딩
			.append 는 오버로딩
			*/
			$('#wrapper').html('<h1>알고리즘 공부를 하자 !!</h1><h3>수 열</h3><div id="content">'
					+'<table id="tb1" style="width: 800px;height: 300px;border-collapse: collapse;border: 1px solid black;margin: 0 auto">'
					+'<tr style="border: 1px solid black;">'
					+'<td id="t__1" style="width: 50%;border: 1px solid black;"></td>'
					+'<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
					+'</tr>'
					+'</table>'
					+'</div>');
			$('#t__1').html('<a id="arith__seq"><h3>등차수열</h3><a>')
			$('#t__1').append('<a id="swit__seq"><h3>스위치수열</h3><a>');
			$('#t__1').append('<a id="fibo__seq"><h3>피보나치수열</h3><a>');
			$('#t__1').append('<a id="fact__seq"><h3>팩토리얼수열</h3><a>');
			$('#arith__seq').click(e=>{
				alert('등차수열 선택!');
			});
			$('#swit__seq').click(e=>{
				alert('스위치 선택!');
			});
			$('#fibo__seq').click(e=>{
				alert('피보나치 선택!');
			});
			$('#fact__seq').click(e=>{
				alert('팩토리얼 선택!');
			});
			
		}
};
algo.series = {
		arith : x =>{},
		fibonacci : x =>{},
		swit : x => {},
		factorial : x => {} 
};
algo.array = {
		bubble : x => {},
		insert : x => {},
		select : x => {},
		ranking : x => {}
};
algo.matrix = {
		fiveBy5 : x =>{},
		sandGlass : x => {},
		snail : x => {},
		diamond : x => {},
		zigzag : x => {}
};
algo.math = {};
algo.appl = {};

/*위의 algo는 객체, new 해야지 생성됨(우리는 main에서 init 해주니 크게 차이는 없지만...), 반면 아래 algo.router();는 실행되자마자 만들어짐*/ 
algo.router = {
	onCreate : x =>{
		/*외부의 js파일 호출하는 것, 자바에서의 import의 의미와 같다, context는 webapp까지를 가리킴*/
		$.getScript(x+'/resources/js/router.js',
				()=>{
					$.extend(new Session(x));/*제이쿼리기능을 확장,new Session을 확장?*/
					algo.main.onCreate();
				}
		);
	}
};
