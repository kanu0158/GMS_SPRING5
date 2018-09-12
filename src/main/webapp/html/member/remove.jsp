<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="content">
		<div id="user-login-layout">
		<h1>계정탈퇴</h1>
		<form id="removeForm">
		아이디:<input id="userId" type="text" name="userId" value="${user.userId}" readonly/><br/>
		비밀번호 재입력: <input TYPE="password" name="password" id="password" /><br>
		<input id="removeFormBtn" type="button" value="전 송"/> 
		</form>
	</div>
	</div> <!-- content end -->
<script>
$('#removeFormBtn').click(function(){
	alert('removeFormBtn 클릭 ');
	$('#removeForm').attr({
		action:"${context}/member/remove",
		method:"POST"
	})
	.submit();
});
</script>