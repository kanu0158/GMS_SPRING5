<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%><!-- jstl.jar 사용하기 위해 한 것 -->
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!doctype html>
<html lang="en">
<head>
	<title>Main</title>
	<link rel="shortcut icon" href="${context}/resources/img/favicon.ico" />
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="${context}/resources/css/style.css">

    <link href="${context}/resources/otherResources/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <link href="${context}/resources/otherResources/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
	
	<script	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<%-- <script src="${context}/resources/js/app.js"></script> --%>
</head>
<body>
<div id="wrapper">
	<div id="nav">
		<tiles:insertAttribute name="nav"/>
	</div>
	<div id="header">
		<tiles:insertAttribute name="header"/>
	</div> 	<!-- header end -->
	<div id="content">
		<tiles:insertAttribute name="content"/>
	</div> <!-- content end -->
	<div id="footer">
		<tiles:insertAttribute name="footer"/>
	</div>
</div>
<script> /* 바디 안에 넣음, 전역메소드로 처리한 것 */
/* common.main({
	context : '${context}',
	adminPass : '${adminPass}'}
	); */
	/* app.init('${context}'); */
</script>

</body>
</html>