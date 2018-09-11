package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
@Controller
@SessionAttributes("context") 
public class HomeCtrl {
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)//get방식을 생략할수있고 생략하면 value도 생략할수있어
	public String home(HttpSession session, HttpServletRequest request) {//request가 모델안에 있게된다.(pom.xml에서 정의된(전역으로) 모델이 돌아다닌다)
		String context = request.getContextPath();
		logger.info("Welcome home! The Context Path is {}.", context);
		session.setAttribute("context", context);
		//model.addAttribute("context", context);
		//모델
		return "public:common/content.tiles";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(
			@PathVariable String prefix,
			@PathVariable String dir,
			@PathVariable String page
			) {
		logger.info("HomeControllers ::: move() {}.", "ENTER");
		String ret = prefix+":"+dir+"/"+page+".tiles";
		logger.info("HomeControllers ::: ret {}.", ret );
		return ret;
	}
	
}
