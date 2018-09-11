package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Lazy
@Data
public class Member {
	private String userId,
	ssn, 
	name,
	gender,
	age,
	roll, 
	teamId,
	password,
	subject;
}
