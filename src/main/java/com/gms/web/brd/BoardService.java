package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public interface BoardService {
	public void add(Board p);
	public List<?> list(Map<?,?> p);
	public List<?> search(Map<?,?> p);
	public Member retrieve(Board p);
	public int count(Map<?,?> p);
	public void modify(Board p);
	public void remove(Board p);
}
