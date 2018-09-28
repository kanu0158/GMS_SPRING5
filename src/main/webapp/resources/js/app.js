"use strict";
/*만약 app이 있다면 있는걸로 대체하고 없으면 새로 만들어라*/
var app = app || {};
/*app.main =(()=>{
	var init =()=>{};
	var onCreate =()=>{};
	var setContentView =()=>{};
	return {init : init};
})();*/
app=(()=>{
	var init =x=>{
		console.log('step 1');
		app.router.init(x);
	};
	return{init : init};
})();
app.main=(()=>{
	var w,nav,sMain,footer,content,ctx,script,style,img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		sMain = script+'/sMain.js';
		content = script+'/content.js';
		nav = script+'/sNav.js';
		footer = script+'/footer.js';
		console.log('style : '+style);
		console.log('sMain : '+sMain);
		console.log('nav : '+nav);
		console.log('content : '+content);
		console.log('footer : '+footer);
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		console.log('step2');        
		app.router.home();
	};
	return{init : init};
})();
app.board =(()=>{
	var w,nav,header,footer,content,ctx,script,style,img;
	var init =()=>{
		alert('board init! 공용!!');
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		$('#headerwrap').remove();
		let service = $('#service');
		service.empty();
		app.service.boards(1);
		
	};
	//ddsfk;
	return {init : init};
})();
app.permission =(()=>{
	var login =()=>{
		alert('login');
		//$('#headerwrap').remove();
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/login.js',()=>{
				$('#service').html(loginUI());
				ui.anchor({id : 'loginFormBtn', txt : '로그인'})
				.css({width:'200px'})
				//.addClass()
				.appendTo($('#loginBox'))
				.click(e=>{
					alert('id : '+$('#userId').val());
					alert('pass : '+$('#password').val());
					$.ajax({
						//url : ctx+'/algo/money/'+$('#money').val(),get방식
						url : $.ctx() + '/member/login',
						method : 'post',
						contentType : 'application/json',/*mime 타입*/
						data : JSON.stringify({
							userId : $('#userId').val(),
							password : $('#password').val()
							}),/*post방식*/
						success : d=>{
							alert('id 판단이다!'+d.ID);
							alert('pw 판단이다!'+d.PW);
							alert('member 판단이다!'+d.MBR.userId);
							$.getScript($.script()+'/content.js',()=>{
								$('#service').html(contentUI());
								$('#loginBtn').attr({id : 'loginFormBtn'}).html('logout');
								$('#addBtn').attr({id : 'mypage'}).html('mypage');
								$('#board').attr({id : 'myboard'}).html('my_board');
								
							});
							$('#myboard').click(e=>{
								app.service.myBoard({ id : d.MBR.userId, pageNo : '1'});
							});
							
							/*if(d.ID ==="WRONG"){
								
							}else if(d.PW ==="WRONG"){
								
							}else{
								
							}*/
						},
						error : (m1,m2,m3)=>{
							alert('에러발생1'+m1);
							alert('에러발생2'+m2);
							alert('에러발생3'+m3);
						}
					});
				
				});
			});
		})
		
	};
	var join =()=>{
		alert('join');
		//$('#headerwrap').remove();
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/join.js',()=>{
				$('#service').html(joinUI());
				/*$("[name='subject']")
				.change(function() {
					alert($(this).val());
				});*/
				
				ui.anchor({id : 'joinFormBtn', txt : '회원가입'})
				.css({width:'200px'})
				//.addClass()
				.appendTo($('#joinBox'))
				.click(e=>{
					alert('id : '+$('#userId').val());
					alert('pass : '+$('#password').val());
					var arr = [];
					var sub = $("[name='subject']");
					let i;
					for(i of sub){
						if(i.checked){
							alert('선택된 과목 ::'+i.value);
							arr.push(i.value);
						}
					}
					$.ajax({
						//url : ctx+'/algo/money/'+$('#money').val(),get방식
						url : $.ctx() + '/member/join',
						method : 'post',
						contentType : 'application/json',/*mime 타입*/
						data : JSON.stringify({
							userId : $('#userId').val(),
							password : $('#password').val(),
							name : $('#name').val(),
							ssn : $('#ssn').val(),
							teamId : $('#teamId').val(),
							roll : $('#roll').val(),
							subject : JSON.stringify(arr)
							}),/*post방식*/
						success : d=>{
							alert('id 판단이다!'+d.ID);
							alert('pw 판단이다!'+d.PW);
							alert('member 판단이다!'+d.MBR.userId);
							let validate ='';
							if(d.ID ==="WRONG"){
								
							}else if(d.PW ==="WRONG"){
								
							}else{
								
							}
						},
						error : (m1,m2,m3)=>{
							alert('에러발생1'+m1);
							alert('에러발생2'+m2);
							alert('에러발생3'+m3);
						}
					});
				
				});
			});
		})
	};
	return {login : login, join : join};
})();
app.service = {
	boards : x=>{
		let service = $('#service');
		service.empty();
		$.getJSON($.ctx()+'/boards/'+x,d=>{
			alert('app.service.boards in ');
			$.getScript($.script()+'/compo.js',()=>{
				let x = {
					type : 'success',
					id : 'table',
					head : '게시판',
					body : '오픈게시판 ... 누구든지 사용가능',
					list : ['No','제목','내용','글쓴이','작성일','조회수'],
					clazz : 'table table-bordered'
				};
				ui.tbl(x).appendTo(service);
				console.log('page ::'+d.page);
				console.log('page.beginRow ::'+d.page.beginRow);
				$.each(d.list,(i,j)=>{
					$('<tr/>').append(
						$('<td/>').attr('width','5%').html(j.bno),
						$('<td/>').attr('width','5%').html(j.title),
						$('<td/>').attr('width','40%').html(j.content),
						$('<td/>').attr('width','5%').html(j.writer),
						$('<td/>').attr('width','5%').html(j.regdate),
						$('<td/>').attr('width','5%').html(j.viewcnt)	
					).appendTo($('tbody'));
				});
				ui.page({}).appendTo(service);
				let p = d.page;
				let ul = $('.pagination');
				let prev = $('<li/>').addClass('page-item').appendTo(ul);
				ui.anchor({ id : 'prevBtn', clazz : 'page-link', txt : 'Previous'}).appendTo(prev)
				.click(e=>{
					e.preventDefault();
					alert('prev no :: page'+p.prevBlock);
					console.log('p.prevBlock : '+p.prevBlock);
					app.service.boards(p.prevBlock);
					
				});
				let end = p.endPage;
				for(let i=p.beginPage;i<=end;i++){
					let li = $('<li/>').addClass('page-item'+((i==p.pageNum)?' active':'')).appendTo(ul);
					ui.anchor({ id : 'page'+i, clazz : 'page-link', txt : i}).appendTo(li)
					.click(e=>{
						e.preventDefault();
						alert('no :: page'+i);
						app.service.boards(i);
					});
				}
				let next = $('<li/>').addClass('page-item').appendTo(ul);
				ui.anchor({ id : 'nextBtn', clazz : 'page-link', txt : 'Next'}).appendTo(next)
				.click(e=>{
					e.preventDefault();
					alert('next no :: page'+p.nextBlock);
					app.service.boards(p.nextBlock);
				});
				if(!p.existPrev){
					//prev.addClass('disabled');
					prev.empty();
				}
				if(!p.exisNext){
					//next.addClass('disabled');
					next.empty();
				}
			});
			
		});
	},
	myBoard : x=>{
		let service = $('#service');
		service.empty();
		$.getJSON($.ctx()+'/boards/'+x.id+'/'+x.pageNo,d=>{
			alert('app.service.myBoard in ');
			$.getScript($.script()+'/compo.js',()=>{
				let x = {
					type : 'success',
					id : 'table',
					head : '게시판',
					body : '오픈게시판 ... 누구든지 사용가능',
					list : ['No','제목','내용','글쓴이','작성일','조회수'],
					clazz : 'table table-bordered'
				};
				ui.tbl(x).appendTo(service);
				console.log('page ::'+d.page);
				console.log('page.beginRow ::'+d.page.beginRow);
				$.each(d.list,(i,j)=>{
					$('<tr/>').append(
						$('<td/>').attr('width','5%').html(j.bno),
						$('<td/>').attr('width','5%').html(j.title),
						$('<td/>').attr('width','40%').html(j.content),
						$('<td/>').attr('width','5%').html(j.writer),
						$('<td/>').attr('width','5%').html(j.regdate),
						$('<td/>').attr('width','5%').html(j.viewcnt)	
					).appendTo($('tbody'));
				});
				ui.page({}).appendTo(service);
				let p = d.page;
				let ul = $('.pagination');
				let prev = $('<li/>').addClass('page-item').appendTo(ul);
				ui.anchor({ id : 'prevBtn', clazz : 'page-link', txt : 'Previous'}).appendTo(prev)
				.click(e=>{
					e.preventDefault();
					alert('prev no :: page'+p.prevBlock);
					console.log('p.prevBlock : '+p.prevBlock);
					app.service.myBoard({ id : d.ID, pageNo : p.prevBlock});
				});
				let end = p.endPage;
				for(let i=p.beginPage;i<=end;i++){
					let li = $('<li/>').addClass('page-item'+((i==p.pageNum)?' active':'')).appendTo(ul);
					ui.anchor({ id : 'page'+i, clazz : 'page-link', txt : i}).appendTo(li)
					.click(e=>{
						e.preventDefault();
						alert('no :: page'+i);
						app.service.myBoard({ id : d.ID, pageNo : i});
					});
				}
				let next = $('<li/>').addClass('page-item').appendTo(ul);
				ui.anchor({ id : 'nextBtn', clazz : 'page-link', txt : 'Next'}).appendTo(next)
				.click(e=>{
					e.preventDefault();
					alert('next no :: page'+p.nextBlock);
					app.service.myBoard({ id : d.ID, pageNo : p.nextBlock});
				});
				if(!p.existPrev){
					//prev.addClass('disabled');
					prev.empty();
				}
				if(!p.exisNext){
					//next.addClass('disabled');
					next.empty();
				}
			});
			
		});
	}
};


app.router = {
		init : x =>{
			/*외부의 js파일 호출하는 것, 자바에서의 import의 의미와 같다, context는 webapp까지를 가리킴*/
			$.getScript(x+'/resources/js/router.js',
					()=>{
						$.extend(new Session(x));/*제이쿼리기능을 확장,new Session을 확장?*/
						$.getScript($.ctx()+'/resources/js/util.js')
						.done(x=>{console.log('실행해라라는 의미');})
						.fail(x=>{console.log('실패');});
						app.main.init();
						//$('input[name=fdfd]:checked')
					}
			);
		},
		home : ()=>{
			$.when(
		            $.getScript($.script()+'/sNav.js'),
		            $.getScript($.script()+'/sMain.js'),
		            $.getScript($.script()+'/content.js'),
		            $.getScript($.script()+'/footer.js'),
		           
		            $.Deferred(y=>{
		               $(y.resolve);
		            })
		        ).done(x=>{
		        	$('#wrapper').html(sNavUI()
		        			+mainUI()
		        			+contentUI()
		        			+footerUI());
		        	$('#loginBtn').click(e=>{
		        		e.preventDefault();
		        		app.permission.login();
		        	});
		        	$('#addBtn').click(e=>{
		        		e.preventDefault();
		        		app.permission.join();
		        	});
		        	/*$('#board').click(e=>{
		        		e.preventDefault();
		        		alert('전체 board');
		        		app.board.init();
		        	});*/
		        	
		        })
		        .fail(x=>{
		    		console.log('로드실패');
		    	});
		}
};



