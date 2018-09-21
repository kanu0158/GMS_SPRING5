"use strict";
$.prototype.nullChecker = x=>{//$(제이쿼리)에다가 내가만든 nullChecker를 부여해서 사용할 수 있게
	let flag = false;
	let i = 0;
	for(i in x){
		if(x[i]===''){
			flag = true;
		}
	}
	return flag;
};

$.prototype.zeroChecker = x=>{//$(제이쿼리)에다가 내가만든 nullChecker를 부여해서 사용할 수 있게
	let flag = false;
	let i = 0;
	for(i in x){
		if(x[i]==0){
			flag = true;
		}
	}
	return flag;
};



