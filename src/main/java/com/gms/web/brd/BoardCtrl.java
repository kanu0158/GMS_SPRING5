package com.gms.web.brd;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Function;
import java.util.function.Supplier;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gms.web.cmm.Util;
import com.gms.web.mbr.Member;
import com.gms.web.page.Pagination;
import com.gms.web.tx.TxService;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired BoardMapper brdmapper;
	@Autowired Board brd;
	@Autowired Pagination page;
	@Autowired TxService tx;
	@Autowired HashMap<String, Object> map;
	@Resource(name = "uploadPath")
	private String uploadPath;
	
	@PostMapping("/boards/add")
	public @ResponseBody Map<String,Object> add(@RequestBody Board board) {
		logger.info("BoardController ::: add ");
		map.clear();
		Util.log.accept(" add 넘어온  정보 : "+board.getWriter()+" , "+board.getTitle()+" , "+board.getContent());
		map.put("id", board.getWriter());
		map.put("pageNo", 1);
		map.put("board", board);
		System.out.println("add:::::::::------:::::"+map.get("board"));
		tx.write(map);
		//brdmapper.insert(board);
		return map;
	}
	
	@PostMapping("/boards/modify")
	public @ResponseBody Map<String,Object> modify(@RequestBody Board board) {
		logger.info("BoardController ::: modify ");
		map.clear();
		Util.log.accept(" modify 넘어온 정보 : "+board.getBno()+" , "+board.getWriter()+" , "+board.getTitle()+" , "+board.getContent());
		map.put("id", board.getWriter());
		map.put("pageNo", 1);
		brdmapper.update(board);
		//그ㅇㅇ
		return map;
	}
	@RequestMapping("/boards/remove/{id}/{pageNo}")
	public @ResponseBody Map<String,Object> remove(
			@PathVariable String id,
			@PathVariable String pageNo) {
		logger.info("BoardController ::: remove ::: pageNo "+pageNo);
		Util.log.accept("remove 넘어온 정보 : "+id+" , "+pageNo);
		map.clear();
		brdmapper.delete(pageNo);
		map.put("id", id);
		map.put("deleteNum", pageNo);
		map.put("pageNo", 1);
		return map;
	}
	
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String,Object> list(@PathVariable String pageNo) {
		logger.info("BoardController ::: list ::: pageNo "+pageNo);
		map.clear();
		map.put("pageNum", pageNo);
		map.put("count", brdmapper.count(map));
		page.carryOut(map);
		Util.log.accept("brdmapper.countAll:"+brdmapper.count(map));
		Util.log.accept("count:"+page.getCount());
		Util.log.accept("existPrev:"+page.isExistPrev());
		Util.log.accept("prevBlock:"+page.getPrevBlock());
		Util.log.accept("beginPage:"+page.getBeginPage());
		Util.log.accept("existNext:"+page.isExisNext());
		Util.log.accept("nextBlock:"+page.getNextBlock());
		Util.log.accept("BeginRow :: EndRow:"+page.getBeginRow()+"::"+page.getEndRow());
		List<Board> list = brdmapper.list(page);
		Util.log.accept("게시글 리스트:"+list);
		map.clear();
		map.put("list", list);
		map.put("page", page);
		return map;
	}
	
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String,Object> myList(
			@PathVariable String id
			,@PathVariable String pageNo) {
		logger.info("BoardController ::: myList :::ID {} pageNo {}",id,pageNo);
		map.clear();
		map.put("writer", id);
		Util.log.accept("writer:"+map.get("writer"));
		map.put("pageNum", pageNo);
		map.put("count", brdmapper.count(map));
		page.carryOut(map);
		Util.log.accept("brdmapper.count:"+brdmapper.count(map));
		Util.log.accept("count:"+page.getCount());
		Util.log.accept("existPrev:"+page.isExistPrev());
		Util.log.accept("prevBlock:"+page.getPrevBlock());
		Util.log.accept("beginPage:"+page.getBeginPage());
		Util.log.accept("existNext:"+page.isExisNext());
		Util.log.accept("nextBlock:"+page.getNextBlock());
		Util.log.accept("BeginRow :: EndRow:"+page.getBeginRow()+"::"+page.getEndRow());
		List<Board> list = brdmapper.list(page);
		Util.log.accept("게시글 리스트:"+list);
		map.clear();
		map.put("list", list);
		map.put("page", page);
		map.put("id", id);
		return map;
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
	
	@PostMapping("/boards/fileupload")
	public void fileupload(MultipartFile file) throws IOException {
		logger.info("BoardController ::: fileupload ");
		UUID uid = UUID.randomUUID();
		String saveName = uid.toString()+"_"+file.getOriginalFilename();
		File f = new File(uploadPath,saveName);
		FileCopyUtils.copy(file.getBytes(), f);
		
	}
	
	
	@PostMapping("/uploadAjax")
	public ResponseEntity<String> uploadAjax(MultipartFile file) throws Exception {
		Util.log.accept("originalName ::::"+file.getOriginalFilename());
		Util.log.accept("size ::::"+file.getSize());
		Util.log.accept("contentType ::::"+file.getContentType());
		return new ResponseEntity<>(file.getOriginalFilename(),HttpStatus.CREATED);
	}
	
	
	
}