package com.gms.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class MemberServiceImpl implements MemberService{
	@Autowired MemberMapper mapper;
	@Override
	public void add(Member p) {
		System.out.println("p.getssn : "+p.getSsn());
		System.out.println("p.getSsn().substring(0,2)"+ p.getSsn().substring(0,2));
		System.out.println("날짜 : "+new SimpleDateFormat("yyyy").format(new Date()));
		String age = String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) -1899 - Integer.parseInt(p.getSsn().substring(0,2)));
		System.out.println("age : "+ age);
		String flag = p.getSsn().substring(7, 8);
		System.out.println("flag : " + flag);
		String gender = "";
		
		switch(flag){
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
		p.setAge(age);
		p.setGender(gender);
		mapper.insert(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member retrieve(Member p) {
		return mapper.selectOne(p);
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modify(Member p) {
		mapper.update(p);
	}

	@Override
	public void remove(Member p) {
		mapper.delete(p);
		
	}

	@Override
	public boolean login(Member p) {
		System.out.println("service login memberDTO :" +mapper.login(p));
		return (mapper.login(p)!=null);
	}

}
