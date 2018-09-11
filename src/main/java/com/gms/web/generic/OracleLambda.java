package com.gms.web.generic;

import java.util.function.Predicate;

/*
 Consumer<T>	void accept(T t)	->C U D
 Function<T,R>	R apply(T t)		->R
 Predicate<T>	boolean test(T t)	->LOGIN
 Supplier<T>	T get()				->COUNT
 UnaryOperator<T>	static <T> UnaryOperator<T> identity() ..... unary(우너리 단항연산자)
 * */
public class OracleLambda {

	public static void main(String[] args) {
		Predicate<String> p = s -> s.length()==0;
		String x = "";
		String y = "hello";
		System.out.println((p.test(y))?"NULL":"NON NULL");

	}

}
