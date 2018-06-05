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

		out.print("<div class='doContent'><input type='checkbox' id='chk' style='float:left;' value='Mon_"+splitData+"'>");
		out.print("<a id='conBtn' href=javascript:openModify('"+splitData+"','Mon'); style='text-decoration:none; color:black;'>");
		out.print("<p class='monP'>"+splitData+"</p></a></div>");
	}
%>

