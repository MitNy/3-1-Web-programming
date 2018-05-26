<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<%
        String TueDir = request.getRealPath("wp/hw2/file/Tue/");

        File tue_f = new File(TueDir);
        File [] tue_file = tue_f.listFiles();
        String[] tue_files = new String[100];
        for( int i=0; i< tue_file.length; i++ ) {
		tue_files[i] = tue_file[i].getName();
		out.print("<tr>");
		out.print("<div class='doContent'>");
		out.print("<a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'>");
		out.print("<span style='float:right;'>&times;</span>");
		out.print("</a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'>");
		out.print("<p>"+tue_files[i]+"</p></a></div></tr>");
        }

%>

