package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.page.Pagination;
@Repository
public interface BoardMapper {
	public void insert(Board p);
	public List<?> selectList(Map<?,?> p);
	public List<?> selectSome(Map<?,?> p);
	public Board selectOne(Board p);
	public void update(Board p);
	public void delete(String pageNo);
	public int countPaging();
	public Board listCriteria();
	public Board listPage();
	public List<Board> list(Pagination p);
	public int count(Map<String,Object> p);
}
