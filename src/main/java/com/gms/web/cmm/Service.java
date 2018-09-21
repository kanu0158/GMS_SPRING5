package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public class Service {
	public Function<Member, Member> ageGdr = m->{
		String age = String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) -1899 - Integer.parseInt(m.getSsn().substring(0,2)));
		String gender = "";
		
		switch(m.getSsn().substring(7, 8)){
		case "1":
		case "3":
		case "5":
		case "7":
			gender = "남자";
			break;
		case "2":
		case "4":
		case "6":
		case "8":
			gender = "여자";
			break;
		}
		m.setAge(age);
		m.setGender(gender);
		return m;
	};

}
