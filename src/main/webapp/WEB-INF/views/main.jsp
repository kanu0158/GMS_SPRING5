<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%><!-- jstl.jar 사용하기 위해 한 것 -->
<!doctype html>
<html lang="en">
<head>
	<title>Turtle Music</title>
	<link rel="shortcut icon" href="${context}/resources/img2/favicon.ico" />
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	
	<link href="${context}/resources/css/style.css" rel="stylesheet"> 
	
	<script	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="${context}/resources/js/app.js"></script>
		
</head>
<body data-spy="scroll" data-target="#header">
<div id="wrapper"></div>
<script> /* 바디 안에 넣음, 전역메소드로 처리한 것 */
app.init('${context}');
</script>
</body>
</html>