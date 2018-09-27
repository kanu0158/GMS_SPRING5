package com.gms.web.brd;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.cmm.Util;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired BoardMapper brdmapper;
	@Autowired Board brd;
	@Autowired Pagination page;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("article") Board board) {
		logger.info("BoardController ::: add ");
		/*System.out.println("name is "+board.getName());
		SDAS
		System.out.println("--------------------------------------");
		System.out.println(member.getUserId());
		System.out.println(member.getPassword());
		System.out.println(member.getName());
		System.out.println(member.getSsn());
		System.out.println(member.getTeamId());
		System.out.println(member.getRoll());
		System.out.println(member.getSubject());*/
		//boardService.add(article);
		return "auth:member/login.tiles";
	}
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody List<Board> list(@PathVariable String pageNo) {
		logger.info("BoardController ::: list ::: pageNo "+pageNo);
		page.carryOut(pageNo+"/"+62);
		Util.log.accept("start end:"+page.getBeginRow()+"::"+page.getEndRow());
		List<Board> lst = brdmapper.list(page);
		Util.log.accept("게시글 리스트:"+lst);
		
		return lst;
	}
/*	@RequestMapping("/boards")
	public @ResponseBody Map<String,Object> list() {
		logger.info("BoardController ::: list");
		Map<String,Object> lst = new HashMap<>();
				//brdmapper.list();
		//Util.log.accept("게시글 리스트:"+lst);
		lst.put("msg", "success");
		return lst;
	}*/
	@RequestMapping("/search")
	public void search() {
		
	}
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute("article") Board board) {
		
	}
	@RequestMapping("/count")
	public void count() {
		
	}
	@RequestMapping("/modify")
	public String modify(@ModelAttribute("article") Board board,
			Model model) {
		logger.info("BoardController ::: modify ");
		
		return "user:member/retrieve.tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute("article") Board board) {
		logger.info("BoardController ::: remove ");
		
		return "redirect:/";
	}
	
	@RequestMapping("/fileupload")
	public void fileupload() {
		
	}
}