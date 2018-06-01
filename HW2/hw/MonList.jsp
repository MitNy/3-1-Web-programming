<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<%
        String fileDir = request.getRealPath("wp/hw/file/Mon/");

        File f = new File(fileDir);
        File [] files = f.listFiles();
        String[] weekDir = new String[100];

	String splitData = null;
        for( int i=0; i< files.length; i++ ) {
                weekDir[i] = files[i].getName();
		splitData = weekDir[i].substring(0,weekDir[i].length()-4);

		out.print("<tr><div class='doContent'><input type='checkbox' id='chk' style='float:left;'><a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'><span style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p class='wedP'>"+splitData+"</p></a></div></tr>");
	}


%>

