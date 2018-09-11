package com.gms.web.mbr;

import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired MemberService memberService;
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		logger.info("MemberController ::: add ");
		System.out.println("name is "+member.getName());
		
		System.out.println("--------------------------------------");
		System.out.println(member.getUserId());
		System.out.println(member.getPassword());
		System.out.println(member.getName());
		System.out.println(member.getSsn());
		System.out.println(member.getTeamId());
		System.out.println(member.getRoll());
		System.out.println(member.getSubject());
		memberService.add(member);
		return "auth:member/login.tiles";
	}
	@RequestMapping("/list")
	public void list() {
		
	}
	@RequestMapping("/search")
	public void search() {
		
	}
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute("member") Member member) {
		
	}
	@RequestMapping("/count")
	public void count() {
		
	}
	@RequestMapping("/modify")
	public String modify(@ModelAttribute("member") Member member,
			@ModelAttribute("user") Member user) {
		logger.info("MemberController ::: modify ");
		System.out.println("---userId : "+member.getUserId());
		System.out.println("---password : "+member.getPassword());
		System.out.println("---name : "+member.getName());
		System.out.println("---teamId : "+member.getTeamId());
		System.out.println("---roll : "+member.getRoll());
		memberService.modify(member);
		user = memberService.retrieve(member);
		
		return "user:member/retrieve.tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute("member") Member member,
			HttpSession session) {
		logger.info("MemberController ::: remove ");
		System.out.println("---userId : "+member.getUserId());
		System.out.println("---password : "+member.getPassword());
		System.out.println("session 제거 전 user : "+session.getAttribute("user"));
		session.removeAttribute("user");
		System.out.println("session 제거 후 user : "+session.getAttribute("user"));
		memberService.remove(member);
		return "redirect:/";
	}
	@RequestMapping("/login")
	public String login(@ModelAttribute("member") Member member,			
						Model model) {
		logger.info("MemberController ::: login ");
		System.out.println("---userId : "+member.getUserId());
		System.out.println("---password : "+member.getPassword());
		String path = "auth:member/login.tiles";
		
		if(memberService.login(member)) {
			System.out.println("로긴 성공");
			model.addAttribute("user", memberService.retrieve(member));
			System.out.println("-------------");
			System.out.println("userId : "+member.getUserId());
			System.out.println("password : "+member.getPassword());
			System.out.println("-------------");
			path = "user:member/retrieve.tiles";
		}else{
			System.out.println("로긴실패");
		};
		return path;
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("MemberController ::: logout ");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {
		
	}
}
