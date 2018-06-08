<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String fn = request.getParameter("fName");
	String fileDay = request.getParameter("day");
	String originalDay = null;
	String fileName = null;

try{
	originalDay = fn.substring(0,3);
	fileName = fn.substring(4,fn.length());
}
catch(Exception e) {

}
	// 옮긴 곳 주소
	String originalPath = "wp/hw/file/"+originalDay+"/"+fileName+".txt";

	String originalDir = request.getRealPath(originalPath);
	String originalContent = null;
	String fileContent = null;
	File of = new File(originalDir);
	// 옮길 곳 주소
	String filePath = "wp/hw/file/"+fileDay+"/"+fileName+".txt";
        String fileDir = request.getRealPath(filePath);
	File f = new File(fileDir);


	if( of.exists() ){
		of.renameTo(f);
	}

%>
