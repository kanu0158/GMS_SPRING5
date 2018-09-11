package com.gms.web.generic;

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
	public static void main(String[] args) {
		
		
	}
	class Box{
		Object item;

		public Object getItem() {
			return item;
		}

		public void setItem(Object item) {
			this.item = item;
		}
	}

}
