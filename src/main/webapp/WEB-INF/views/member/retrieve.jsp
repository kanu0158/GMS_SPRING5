<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div id="content">
	<h1>${user.name} page</h1>
	<div>
		<table id="mypage-table">
			<tr><!-- home/bugs.PNG -->
				<td rowspan="3"></td>
				<td>ID</td>
				<td colspan="2">${user.userId}</td>
			</tr>
			<tr>
				<td>이름</td>
				<td colspan="2">${user.name}</td>
			</tr>
			<tr>
				<td>비번</td>
				<td colspan="2">********</td>
			</tr>
			<tr>
				<td>나이</td>
				<td>${user.age}</td>
				<td>팀명</td>
				<td>${user.teamId}</td>
			</tr>
			<tr>
				<td>성별</td>
				<td>${user.gender}</td>
				<td>직책</td>
				<td>${user.roll}</td>
			</tr>
		</table>
	</div>
</div>
<!-- content end -->
<script>
/* app.user.init({userId : '${user.userId}',
				password : '${user.password}'}); */
user.session({userId : '${user.userId}',
			  name : '${user.name}',
			  teamId : '${user.teamId}',
		      roll : '${user.roll}'});
</script>	