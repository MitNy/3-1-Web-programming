<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String day = request.getParameter("day");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	String filePath = request.getRealPath("wp/hw/file/"+day+"/"+title+".txt");

	out.print(filePath);
	try {
		BufferedWriter bw = new BufferedWriter(new FileWriter(filePath));
		bw.write(content);
		bw.flush();
		bw.close();
		response.sendRedirect("hw.html");
	}
	catch(IOException e) {

	}
%>	