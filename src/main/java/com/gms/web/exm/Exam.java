package com.gms.web.exm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Lazy
@Data
public class Exam {
	String exmSeq, sbjSeq, term, score, userId;
}
