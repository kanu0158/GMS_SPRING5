<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%><!-- jstl.jar 사용하기 위해 한 것 -->
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
	<script src="${context}/resources/js/algo.js"></script>
	<%-- <script src="${context}/resources/js/router.js"></script> 계속 있기보단 필요할때 호출하고 버리는게 낫다.--%>
</head>
<body>
<div id="wrapper"></div>
<script> /* 바디 안에 넣음, 전역메소드로 처리한 것 */
algo.init('${context}');
</script>
</body>
</html>