<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String day = request.getParameter("day");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	String filePath = request.getRealPath("wp/hw/file/"+day+"/"+title+".txt");

	String this_title = request.getParameter("this_title");
	String newPath = request.getRealPath("wp/hw/file/"+day+"/"+this_title+".txt");	
	out.print(this_title);
	File f = new File(newPath);
	File r = new File(filePath);

	try {
		f.renameTo(r);
		BufferedWriter bw = new BufferedWriter(new FileWriter(newPath));
		bw.write(content);
		bw.flush();
		bw.close();
		response.sendRedirect("hw.html");
	}
	catch(IOException e) {

	}
	finally{
		if(!(this_title.equals(title))){
			f.delete();
		}
	}
%>	
