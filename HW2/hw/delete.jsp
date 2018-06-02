<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String[] selectedArray = request.getParameterValues("selectedArray");

	
	String filePath = null;
	String fileName = null;
	String fileDay = null;
	String fileDir = null;

	for( int i=0; i < selectedArray.length; i++) {

		fileDay = selectedArray[i].substring(0,3);
		fileName = selectedArray[i].substring(4,selectedArray[i].length());
		filePath = "wp/hw/file/"+fileDay+"/"+fileName+".txt";
		
		fileDir = request.getRealPath(filePath);	

		out.print(fileDir);
		File f = new File(fileDir);

		if(f.exists()) {
			f.delete();
		}
		else {

		}

	}
%>
