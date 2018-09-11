package com.gms.web.generic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GenericIntro {
/*
 Generic 타입을 생성하는데
 class Member{} -> static 상태로 Member 타입을 생성
 List<Member>
 <-> Dynamic한 타입생성
  왜쓰냐?
   캐스팅 안하려고
   장점. 타입의 안전성 제공, 형변환 생략
 * **/
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		System.out.println("===============[1]=================");
		Item<String> itName = new Item<>();
		itName.setOne("갤노트");
		Item<Integer> itVers = new Item<>();
		itVers.setOne(9);
		System.out.println("삼성 신상폰 이름은 :: \n"+itName.getOne()+itVers.getOne());
		System.out.println("================[2]=================");
		Item<List<String>> it = new Item<>();
		it.setSome(Arrays.asList(new String[]{"Hello","World","Generic"}));
		System.out.println(it.getSome());
		System.out.println("================[3]=================");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Apple> abox = new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));
	}
}
