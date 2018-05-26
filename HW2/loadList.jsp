<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<%
	String fileDir = request.getRealPath("wp/hw2/file/");
	
	File f = new File(fileDir);
	File [] files = f.listFiles();
	String[] weekDir = new String[5];

	for( int i=0; i< files.length; i++ ) {
		weekDir[i] = files[i].getName();
		//out.println(files[i].getName());
	}
	out.print(weekDir[0]);


%>
