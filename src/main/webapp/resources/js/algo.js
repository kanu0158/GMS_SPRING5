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
					+'<td id="t__l" style="width: 50%;border: 1px solid black;"></td>'
					+'<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
					+'</tr>'
					+'</table>'
					+'</div>');
			let $t__l  = $('#t__l');
			let $t__r  = $('#t__r');
			/*$('#t__l').html('<a id="arith__seq"><h3>등차수열</h3><a>')
			$('#t__l').append('<a id="swit__seq"><h3>스위치수열</h3><a>');
			$('#t__l').append('<a id="fibo__seq"><h3>피보나치수열</h3><a>');
			$('#t__l').append('<a id="fact__seq"><h3>팩토리얼수열</h3><a>');*/
			$('<ul/>')
			.attr({id : 'side__menu'})
			.addClass('list-group').appendTo($t__l);
			$('<li/>')
			.attr({id : 'arith'})
			.addClass('list-group-item').appendTo($('#side__menu'));
			$('<a/>')
			.attr({href : '#'})
			.html('등차수열의 합')
			.appendTo($('#arith'))
			.click(e=>{
				$t__r.empty();
				$('<div/>').attr({id:'ques'}).appendTo($t__r);
				$('<h3/>').html('시작값 x, 마지막값 e, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
				$('<label/>').html('시작값').appendTo($('#ques'));
				$('<input/>').attr({id:'s',type:'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
				$('<label/>').html('마지막값').appendTo($('#ques'));
				$('<input/>').attr({id:'e',type:'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
				$('<label/>').html('공차').appendTo($('#ques'));
				$('<input/>').attr({id:'d',type:'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
				$('<button/>')
				.addClass('btn btn-primary')//btn은 부트스트랩 css에서 본 것
				.attr({type:'button'})
				.html('결과보기')
				.appendTo($('#ques'))
				.click(e=>{
					$('#dap').remove();
					let arr = [
						$('#s').val()*1,
						$('#e').val()*1,
						$('#d').val()*1
						];
					if($.fn.zeroChecker(arr)){
						console.log('<h6>빈칸을채우세요</h6>');
						$('<input/>').attr({id:'dap',type:'text'}).appendTo($('#ques')).val('빈칸을채우세요');
					}else{
						console.log(arr[0]+','+arr[1]+','+arr[2]);
						let i=arr[0];
						let sum = 0;
						while(i<=arr[1]){
							sum += i;
							i+=arr[2];
						}
						//$('#dap').val(sum);
						$('<input/>').attr({id:'dap',type:'text'}).appendTo($('#ques')).val(sum);
					}
					
				});
				//사용할때만 존재하게 하려면 안에다 넣어라 $('<input/>').attr({id:'dap',type:'text'}).appendTo($('#ques'));
				
				/*$('#t__r').append('<div id="ques"><h3>시작값 x, 마지막값 e, 공차 d 인 등차수열의 합을 구하시오.</h3>'
				+'<label for="s">시작값</label><input id="s" type="text"></br>'
				+'<label for="e">마지막값</label><input id="e" type="text"></br>'
				+'<label for="d">공차</label><input id="d" type="text"></br>'
				+'<button id="bt">결과보기</button></br>'
				+'<label for="dap">답</label><input id="dap" type="text"></div>');*/
			});
		
			$('#swit__seq').click(e=>{
				$('#t__r').html('<h3>시작값 x, 마지막값 e, 공차 d 인 스위치수열의 합을 구하시오.</h3>'
						+'<label for="s">시작값</label><input id="s" type="text"></br>'
						+'<label for="e">마지막값</label><input id="e" type="text"></br>'
						+'<label for="d">공차</label><input id="d" type="text"></br>'
						+'<button id="bt">결과보기</button></br>'
						+'<label for="dap">답</label><input id="dap" type="text">');
				$('#bt').click(()=>{
					let arr = [
						$('#s').val()*1,
						$('#e').val()*1,
						(($('#s').val()*1)%2==0)?$('#d').val()*-1:$('#d').val()*1
						];
					if($.fn.zeroChecker(arr)){
						console.log('<h6>빈칸을채우세요</h6>');
						$('dap').empty().append('<h6>빈칸을채우세요</h6>');
					}else{
						console.log(arr[0]+','+arr[1]+','+arr[2]);
						let sum = 0;
						while(arr[0]<=arr[1]){
							sum += arr[0]*arr[2];
							console.log(arr[0]+','+arr[2]+','+sum);
							arr[2] *= -1;
							arr[0]++;
						}
						$('#dap').val(sum);
					}
					
				});
			});
			
			$('#fibo__seq').click(e=>{
				$('#t__r').html('<h3>항의 수 n인 피보나치수열의 합을 구하시오.</h3>'
						+'<label for="n">항의 수</label><input id="n" type="text"></br>'
						+'<button id="bt">결과보기</button></br>'
						+'<label for="dap">답</label><input id="dap" type="text">');
				$('#bt').click(()=>{
					let end = $('#n').val()*1;
					//console.log(sta+','+end);
					let i=2;
					let sum = 1;
					let one = 1;
					let two = 1;
					while(i<=end){
						sum += one+two;
						//console.log(i+','+sta+','+sum);
						i++;
					}
					$('#dap').val(sum);
				});
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
					$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{console.log('실행해라라는 의미');})
					.fail(x=>{console.log('실패');});
					algo.main.onCreate();
				}
		);
	}
};

/*algo.util = {
	onCreate : x =>{
		외부의 js파일 호출하는 것, 자바에서의 import의 의미와 같다, context는 webapp까지를 가리킴
		$.getScript(x+'/resources/js/util.js',
				()=>{
					$.extend(new NullChecker(x));제이쿼리기능을 확장,new Session을 확장?
					algo.main.onCreate();
				}
		);
	}
};
*/