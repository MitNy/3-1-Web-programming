<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
        String week = request.getParameter("day");
        String title = request.getParameter("title");
        String content = request.getParameter("content");
	if(week.equals("1")) {
		week = "Mon";
	}
	else if(week.equals("2")) {
		week = "Tue";
	}
	else if(week.equals("3")) {
		week = "Wed";
	}
	else if(week.equals("4")) {
		week = "Thu";
	}
	else if(week.equals("5")) {
		week = "Fri";
	}

	String fileName = title+".txt";
	String filePath = request.getRealPath("wp/hw/file/"+week+"/"+fileName);	
	try {
		BufferedWriter bw = new BufferedWriter(new FileWriter(filePath));
		bw.write(content);
		bw.close();

		response.sendRedirect("hw.html");
	}
	catch(IOException e) {
		
	}
%>

