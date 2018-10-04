package com.gms.web.brd;


import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;

import lombok.Data;
@Component
@Data
@Lazy
public class Board {
	private Integer bno;
	private String title;
	private String content;
	private String writer;
	private String regdate;
	private int viewcnt;
	private int replycnt;
	private Member mbr;
	private List<Attach> attaches;//첨부
}
