<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="content">
		<div id="user-login-layout">
		<h1>사용자로그인</h1>
		<form id="loginForm">
		ID: <input type="TEXT" id="userId" name="userId" /><br>
		PASS: <input TYPE="TEXT" id="password" name="password" /><br>
		<input id="loginFormBtn" type="button" value="전 송"/> 
		</form>
		</div>
	</div> <!-- content end -->
<script>
$('#loginFormBtn').click(function(){
	alert('login폼버튼 클릭!');
	$('#loginForm').attr({
		action:"${context}/member/login",
		method:"POST"
	})
	.submit();
});
</script>
