<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String [] array = request.getParameterValues("array");
	int [] number = new int[100];
	String a = null;
	int s = 0;

	for( int i=0; i<array.length; i++ ){
		s = Integer.parseInt(array[i]);
		number[i] = s;
	}

	RequestDispatcher req = request.getRequestDispatcher("MonList.jsp");
	req.forward(request, response);
%>
