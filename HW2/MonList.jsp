<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<%
        String fileDir = request.getRealPath("wp/hw2/file/Mon/");

        File f = new File(fileDir);
        File [] files = f.listFiles();
        String[] weekDir = new String[100];

        for( int i=0; i< files.length; i++ ) {
                weekDir[i] = files[i].getName();
		out.print("<tr>");
		out.print("<div class='doContent'>");	
		out.print("<a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'>");
		out.print("<span style='float:right;'>&times;</span>");
		out.print("</a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'>");
		out.print("<p class='wedP'>"+weekDir[i]+"</p></a></div></tr>");
	}

%>

