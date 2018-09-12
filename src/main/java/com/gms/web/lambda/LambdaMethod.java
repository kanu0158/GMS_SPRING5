package com.gms.web.lambda;

import java.util.function.Consumer;
import java.util.function.Function;

public class LambdaMethod {
/*
 Consumer<T>	void accept(T t)	->C U D
 Function<T,R>	R apply(T t)		->R
 Predicate<T>	boolean test(T t)	->LOGIN
 Supplier<T>	T get()				->COUNT
 UnaryOperator<T>	static <T> UnaryOperator<T> identity() ..... unary(우너리 단항연산자)
 * */
	public static void main(String[] args) {
		//		파라미터타입,리턴타입
		/*Function<String, Integer> f = s -> Integer.parseInt(s);
		int a = f.apply("1");
		System.out.println(a);*/
		Function<String, Integer> f = Integer::parseInt;
		System.out.println(f.apply("2"));
		/*Consumer<String> c = s -> System.out.println(s);
		c.accept("Hello lambda");*/
		Consumer<String> c = System.out::println;
		
		c.accept("Hello lambda");
	}

}
