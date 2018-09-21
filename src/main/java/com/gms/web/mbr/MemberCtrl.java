package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.cmm.Util;

@RestController
@RequestMapping("/member")

public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	
	@Autowired MemberMapper mbrmapper;
	@Autowired Member m;
	
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
		//memberService.add(member);
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
		//memberService.modify(member);
		//user = memberService.retrieve(member);
		
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
		//memberService.remove(member);
		return "redirect:/";
	}
	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(@RequestBody Member member) {
		logger.info("MemberController ::: login ");
		Util.log.accept("넘어온 로그인 정보 : "+member.getUserId()+" , "+member.getPassword());
		String passValid = "WRONG";
		String idValid = "WRONG";
		Map<String,Object> rmap = new HashMap<>();
		//p.test(mbrmapper.exist(member.getUserId()))
		if(mbrmapper.count(member) != 0) {
			idValid = "CORRECT";
			Util.log.accept("ID 유효성체크결과 : "+idValid);
			Function<Member,Member> f = (t)->{
				return mbrmapper.get(t);
			};
			m = f.apply(member);
			passValid = m == null?passValid:"CORRECT";
			m = m==null? new Member():m;
			Util.log.accept("password 유효성체크결과 : "+passValid);
			Util.log.accept(m.toString());
		}
		rmap.put("ID", idValid);
		rmap.put("PW", passValid);
		rmap.put("MBR", m);
		return rmap;
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
