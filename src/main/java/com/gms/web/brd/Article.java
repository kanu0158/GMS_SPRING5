package com.gms.web.brd;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Lazy
@Data
public class Article {
	private String bno, title, content, writer, regdate, viewcnt;

}
