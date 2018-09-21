package com.gms.web.exam;
import java.sql.*;

public class MariadbConn {
	public static void main(String[] args) {
			Connection conn;
			Statement stmt;
			String value = "";
			try {
				Class.forName("org.mariadb.jdbc.Driver");
				conn = DriverManager
						.getConnection(
								"jdbc:mariadb://localhost:3306/mariadb"
								, "mariadb"
								, "mariadb");
				stmt = conn.createStatement();
				ResultSet rs = stmt.executeQuery(String.format("SELECT content FROM board "));
				value = (rs.next()) ? rs.getString("content") : "ERROR :: NOT FOUND" ;
				System.out.println("value :::"+value);
			} catch (Exception e) {
				e.printStackTrace();
			}
	}
}