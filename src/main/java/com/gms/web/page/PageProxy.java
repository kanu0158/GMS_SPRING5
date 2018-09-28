package com.gms.web.page;
import java.util.Map;

import lombok.Data;
@Data
public class PageProxy implements Proxy{
	private Pagination pagination;
	
	@Override
	public void carryOut(Map<String,Object> m) {
		this.pagination = new Pagination();
		pagination.carryOut(m);
	}
}