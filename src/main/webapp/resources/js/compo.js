"use strict";
var ui={//콜백함수 안에서만 전역으로 존재하는 친구를 만들겠다. 
	div : x=>{return $('<div/>').attr(x);},
	anchor : x=>{return $('<a/>').attr({href : '#',id : x.id}).addClass(x.clazz).html(x.txt);},
	ul : x=>{
		let ul = $('<ul>');
		let len = x.len;
		let id = x.id;
		for(var i=0;i<len;i++){
			$('<li/>').attr({id : id+'-'+i}).addClass(x.clazz).appendTo(ul);
		}
		return ul;
	},
	
	label : x=>{
		return  $('<label/>')
				.attr('for',x.id).text(x.txt);
	},
	/*<div class="input-group mb-3">
	<div class="input-group-prepend">
	<span class="input-group-text" id="basic-addon1">@</span>
	</div>
	<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>*/
	btn : x=>{
		//			attr			addClass			 html
		/*<button type="button" class="btn btn-primary">Primary</button>
		 * http://bootstrap4.kr/docs/4.0/components/buttons/
		 *  clazz   :   color
		 * primary       파랑 
		 * secondary	 회색
		 * success		초록
		 * danger		빨강
		 * warning		노랑
		 * info			하늘
		 * light		투명
		 * dark			검정
		 * link			링크*/
		return $('<button/>')
			   .attr('type','button')
			   .addClass('btn btn-'+x.clazz)
			   .html(x.txt);
	},
	
	input : x=>{ // id,val
		let y = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.txt
						+'</span>').appendTo(y);
	
		$("<input/>").attr({
			id : x.id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(y);
		return y;
	},
/*	<div class="panel panel-default">
	  <!-- Default panel contents -->
	  <div class="panel-heading">Panel heading</div>
	  <div class="panel-body">
	    <p>...</p>
	  </div>

	  <!-- Table -->
	  <table class="table">
	    ...
	  </table>
	</div>*/
	tbl : x=>{
		let p = $('<div class="panel panel-'+x.type+'"/>');
		p.attr({id : x.id});
		let ph = $('<div class="panel-heading"/>');
		ph.html(x.head).appendTo(p);
		let pb = $('<div class="panel-body"/>');
		pb.html(x.body).appendTo(p);
		
		let t = $('<table/>');
		t.addClass(x.clazz);
		let thead = $('<thead/>');
		let tr =$('<tr/>');
		$.each(x.list,(i,j)=>{
			$('<th/>')
			.html(j)
			.appendTo(tr);
		});
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').appendTo(t);
		t.appendTo(p);
		/*let t = $('<table/>');
		let tr =$('<tr/>');
		$('<th/>').html('번 호').appendTo(tr);
		$('<th/>').html('제 목').appendTo(tr);
		$('<th/>').html('내 용').appendTo(tr);
		$('<th/>').html('작 가').appendTo(tr);
		$('<th/>').html('등록일').appendTo(tr);
		tr.appendTo(t);
		$.each(x, function() { 
			let tr2 =$('<tr/>');
			$('<td/>').html(this.bno).appendTo(tr2);
			$('<td/>').html(this.title).appendTo(tr2);
			$('<td/>').html(this.content).appendTo(tr2);
			$('<td/>').html(this.writer).appendTo(tr2);
			$('<td/>').html(this.viewcnt).appendTo(tr2);
			tr2.appendTo(t);
		});
		
		*/
		
		//let td = $('<td/>');
		return p;
	},
	/*let prev = $('<li/>').addClass('page-item').appendTo(ul);
		ui.anchor({ id : 'prevBtn', clazz : 'page-link', txt : 'Previous'}).appendTo(prev);
		
		for(let i=x.beginPage;i<=x.endPage;i++){
			let li = $('<li/>').addClass('page-item').appendTo(ul);
			ui.anchor({ id : 'page'+i, clazz : 'page-link', txt : i}).appendTo(li)
			.click(e=>{
				e.preventDefault();
				alert('no :: page'+i);
			});
		}
		let next = $('<li/>').addClass('page-item').appendTo(ul);
		ui.anchor({ id : 'nextBtn', clazz : 'page-link', txt : 'Next'}).appendTo(next);
		if(!x.existPrev){
			prev.addClass('disabled');
		}else{
			prev.removeClass('disabled');
		}
		if(!x.exisNext){
			next.addClass('disabled');
		}else {
			next.removeClass('disabled');
		}*/
	page : x=>{
		let n = $('<nav aria-label="Page navigation"/>').addClass('center');
		let ul =$('<ul/>').addClass('pagination').appendTo(n);
		return n;
	},
	createbrd : x=>{
		let d = '<div>'
			+'<span><input id="brdTitle" type="text" class="width725px" placeholder="제목" value="'+x.title+'"></span></br>'
			+'<span> writer </span>'
			+'<span><input type="text" class="width685px" value="' +x.id+'" readonly></span></br>'
			+'<span><textarea rows="20" cols="100" class="width725px" placeholder="내용" id="brdContent" name="CONTENTS"></textarea></span></br>'
			+'</div>';
		
		return d;
	},
	//이런방식도 있다!!!!! 부트스트랩 그대로 따오는
	inputGroupPrepend : x =>{
		return '<div class="input-group mb-3">'
		+'<div class="input-group-prepend">'
		+'<span class="input-group-text" id="basic-addon1">@</span>'
		+'</div>'
		+'<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
		+'</div>';
	}
}

