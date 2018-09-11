<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content">
<div>
<form id="modifyForm">
<table id="retrieve-table">
	<tr>
		<td rowspan="3"></td>
		<td>ID</td>
		<td colspan="2"><input id="userId" type="text" name="userId" value="${user.userId}" readonly/></td>
	</tr>
	<tr>
		<td>이름</td>
		<td colspan="2"><input id="name" type="text" name="name" value="${user.name}" readonly/></td>
	</tr>
	<tr>
		<td>비번</td>
		<td colspan="2"><input id="password" type="text" name="password" placeholder="new password"/></td>
	</tr>
	<tr>
		<td>나이</td>
		<td>${user.age}</td>
		<td>팀(현재 소속팀: ${user.teamId})</td>
		<td>
		<select name="teamId" id="teamId">
			<option value="${user.teamId}">없음</option>
			<option value="YANOLJA">야놀자</option>
			<option value="JIEUNHOUSE">지은집</option>
			<option value="TURTLEKING">거북왕</option>
			<option value="CODDINGZZANG">코딩짱</option>
		</select>
		</td>
	</tr>
	<tr>
		<td>성별</td>
		<td>${user.gender}</td>
		<td>직책(현재 직책: ${user.roll})</td>
		<td><select name="roll" id="roll">
			<option value="팀장" selected="selected">팀장</option>
			<option value="프론트단">프론트단</option>
			<option value="백단">백단</option>
			<option value="안드로이드">안드로이드</option>
		</select></td>
	</tr>
</table>
<input type="button" id="modifyFormBtn" value="수정확인" />
</form>
</div>
</div> <!-- content end -->
<%-- <form method="POST" enctype="multipart/form-data" action="${context}/member.do?action=fileUpload&userId=${user.userId}">
    파일업로드: <input type="file" name="upfile"><br/>
  <input type="submit" value="파일업로드">
</form>
 --%>
 
 <script>
 $('#modifyFormBtn').click(function(){
		alert('modifyFormBtn 클릭  ');
		$('#modifyForm').attr({
			action:"${context}/member/modify",
			method:"POST"
		})
		.submit();
	});
 </script>
 