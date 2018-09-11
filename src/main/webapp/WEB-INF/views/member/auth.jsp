<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Brand</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
					<li><a href="#">Link</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-expanded="false">Dropdown
							<span class="caret"></span>
					</a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li><a href="#">Separated link</a></li>
							<li class="divider"></li>
							<li><a href="#">One more separated link</a></li>
						</ul></li>
				</ul>
				<form class="navbar-form navbar-left" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
					</div>
					<button type="submit" class="btn btn-default">Submit</button>
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#">Link</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-expanded="false">Dropdown
							<span class="caret"></span>
					</a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li><a href="#">Separated link</a></li>
						</ul></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
	
		<div class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
			</div>
			<div class="navbar-collapse collapse navbar-right">
				<ul class="nav navbar-nav">
					<li class="active"><a href="index.html">HOME</a></li>
					<li class="active"><a href="#service">ABOUT</a></li>
					<li class="active"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown">게시판<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a id="boardWriteBtn">게시글쓰기</a></li>
							<li><a id="boardListBtn">게시글목록보기</a></li>
						</ul></li>
					<li class="dropdown">
					<li class="active"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown">${user.name} PAGES<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a id="logOutBtn">로그아웃</a></li>
							<li><a id="removeBtn">회원탈퇴</a></li>
							<li><a id="modifyBtn">정보수정</a></li>
							<li><a id="mypageBtn">마이페이지</a></li>
						</ul></li>
					</li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</div>
<script>
	/* user.session({userId : '${user.userId}',
			      name : '${user.name}',
			      teamId : '${user.teamId}',
			      roll : '${user.roll}'}); */
$('#modifyBtn').click(function(){
			alert('auth.jsp in modifyBtn 클릭  ');
			location.href ='${context}/move/user/member/modify';
});
$('#removeBtn').click(function(){
			location.href ='${context}/move/user/member/remove';
});
$('#boardWriteBtn').click(function(){
	alert('auth.jsp in boardWriteBtn 클릭  ');
	/* location.href ='${context}/move/user/member/modify'; */
});
$('#boardListBtn').click(function(){
	alert('auth.jsp in boardListBtn 클릭  ');
	/* location.href ='${context}/move/user/member/modify'; */
});
$('#logOutBtn').click(()=>{
	location.href ='${context}/member/logout';
});
</script>