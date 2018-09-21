"use strict";
var ui={//콜백함수 안에서만 전역으로 존재하는 친구를 만들겠다. 
	div : x=>{return $('<div/>').attr(x);},
	anchor : x=>{return $('<a/>').attr({href : '#',id : x.id}).html(x.txt);},
	ul : x=>{
		let ul = $('<ul>');
		let len = x.len;
		let id = x.id;
		for(var i=0;i<len;i++){
			$('<li/>').attr({id : id+'-'+i}).appendTo(ul);
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

