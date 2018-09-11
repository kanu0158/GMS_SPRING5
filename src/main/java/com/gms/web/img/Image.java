package com.gms.web.img;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/*@Bean* 옛날꺼 3이전버전꺼, 지금은 component로 바뀜*/ 
@Component // 이러면 스프링에서 빈으로 쓴다는 의미
@Lazy
@Data	
public class Image {
	private String imgSeq,
	imgName,
	extension,
	userId;
}
