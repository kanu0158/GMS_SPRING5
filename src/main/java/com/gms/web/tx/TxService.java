package com.gms.web.tx;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.brd.Board;
import com.gms.web.brd.BoardMapper;
import com.gms.web.cmm.Util;
import com.gms.web.point.PointMapper;
@Service
@Transactional
public class TxService {/*@Transactional는 속도가 느려져 ex/공인인증서 우리는 여기에 트랜잭션 모아뒀으니 저렇게 해도 되지만
							만약 회사에서 멤버서비스 랑 트랜잭션 함수랑 합쳐져있는 경우에는 
							@Transactional을 트랜잭션 메소드 위에 각각 걸어줘야한다.*/
	@Autowired BoardMapper brdMapper;
	@Autowired PointMapper poMapper;
	@Autowired Board brd;
	@Autowired HashMap<String, Object> map;
	public Map<?,?> write(Map<?,?> p) {
		/*트랜잭션 === 한 서비스에 매퍼 두방 이상*/
		Util.log.accept(" write : "+p);
		//map.clear();
		map.put("userId", p.get("id"));
		brdMapper.insert((Board) p.get("board"));
		poMapper.update(map);
		//map.clear();
		return map;
	}
	public Map<?,?> delete(Map<?,?> p) {
		/*트랜잭션 === 한 서비스에 매퍼 두방 이상*/
		map.clear();
		brdMapper.delete(p.get("pageNo").toString());
		poMapper.update(map);
		map.clear();
		return map;
	}
}
