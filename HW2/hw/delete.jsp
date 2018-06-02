<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String[] selectedArray = request.getParameterValues("selected");

	
	String filePath = null;
	String fileName = null;
	String fileDay = null;
	String fileDir = request.getRealPath("wp/hw/file/");

	for( int i=0; i < selectedArray.length; i++) {
		fileDay = selectedArray[i].substring(0,3);
		fileName = selectedArray[i].substring(4,selectedArray[i].length())+".txt";
		fileDir = fileDir+fileDay+"/"+fileName;
	
		out.print(fileDir);
		File f = new File(fileDir);
		if(f.exists()) {
			f.delete();
		}
		else {
			out.print("<script>alert('파일 없음');</script>");
		}

	}

%>
