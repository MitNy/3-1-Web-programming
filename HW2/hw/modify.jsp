<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String day = request.getParameter("day");
	String title = request.getParameter("title");
	String filePath = request.getRealPath("wp/hw/file/"+day+"/"+title+".txt");
	String fileContent = null;
	try {
		FileReader fr = new FileReader(filePath);
		BufferedReader br = new BufferedReader(fr);

		while((fileContent = br.readLine()) != null) {
			out.print(fileContent);
		}
	}
	catch(IOException e) {
	
	}

%>
