package com.gms.web.page;
import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data @Lazy
public class Pagination implements Proxy{
	int pageNum,count,pageSize,blockSize,beginPage,endPage,beginRow,endRow,prevBlock,nextBlock;
	boolean existPrev,exisNext; 
	
	@Override
	public void carryOut(Map<String,Object> m) {
		pageNum = Integer.parseInt(m.get("pageNum").toString()); 
		pageSize = 5; 
		blockSize = 5;
		count = Integer.parseInt(m.get("count").toString());
		beginPage = Math.floorDiv(pageNum-1, pageSize)*pageSize+1;
		endPage = (count>(beginPage+(blockSize-1))*pageSize)?
				beginPage+(blockSize-1):(int)(Math.ceil(count/(double)pageSize));
		beginRow = (pageNum-1)*pageSize+1;
		endRow = (count>pageNum*pageSize)?pageNum*pageSize:count;
		prevBlock = beginPage -1;
		nextBlock = endPage +1;
		existPrev = (beginPage>1);
		exisNext = (count>endPage*5);
		
	}
}