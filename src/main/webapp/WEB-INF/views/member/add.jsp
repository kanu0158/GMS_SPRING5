<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="content">
		<div id="user-login-layout">
	<h1>회원가입</h1>
	<form id="addForm">
		ID: <input type="text" name="userId" required/><br>
		PASS: <input type="text" name="password" required/><br>
		NAME: <input type="text" name="name" required/><br>
		SSN: <input type="text" name="ssn" required/><br>
		<br/>
		소속팀:
		<input type="radio" name="teamId" value="" checked="checked"/>없음
		<input type="radio" name="teamId" value="YANOLJA" checked="checked"/>야놀자
		<input type="radio" name="teamId" value="JIEUNHOUSE" checked="checked"/>지은집
		<input type="radio" name="teamId" value="TURTLEKING" checked="checked"/>거북왕
		<input type="radio" name="teamId" value="CODDINGZZANG" checked="checked"/>코딩짱
		<br/>
		프로젝트역할
		<select name="roll" id="roll">
			<option value="팀장">팀장</option>
			<option value="프론트단">프론트단</option>
			<option value="백단">백단</option>
			<option value="안드로이드">안드로이드</option>
		</select>
		<br/>
		수강과목
		<input type="checkbox" name="subject" value="JAVA" checked="checked" />Java 
		<input type="checkbox" name="subject" value="C" />C언어 
		<input type="checkbox" name="subject" value="JSP" />JSP 
		<input type="checkbox" name="subject" value="PHP" />PHP 
		<input type="checkbox" name="subject" value="NODEJS" />NodeJS 
		<input type="checkbox" name="subject" value="LINUX" />Linux
		<input type="checkbox" name="subject" value="HTML" />HTML
		<input type="checkbox" name="subject" value="SPLING" />Spring
		<br/>
		<input id="addFormBtn" type="button" value="전송" />
	</form>
	</div>
	</div> <!-- content end -->
<script>
$('#addFormBtn').click(function(){
	alert('addFormBtn 클릭 : ');
	/*var form = document.getElementById('addForm');
	form.action = app.x()+"/member/add";  이렇게하면 action은 어트리뷰트->프로퍼티로 바뀌고 값을 바꿀수있게된다. 
	form.method = "post";
	form.submit();*/
	$('#addForm').attr({
		action:"${context}/member/add",
		method:"POST"
	})
	.submit();
	
});
</script>