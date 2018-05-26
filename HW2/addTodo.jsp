<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*" %>
<%
        request.setCharacterEncoding("UTF-8");
        String week = request.getParameter("addDay");
        String title = request.getParameter("title");
        String content = request.getParameter("contents");
	if( week.equals("0") || title.equals("") || content.equals("") ){
		out.println("<script>alert('빈 칸을 채워주세요.');history.go(-1);</script>");
	}
	else {
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
	}

	String fileName = week+"_Todo_"+title+".txt";
	String filePath = request.getRealPath("wp/hw2/file/"+week+"/"+fileName);	
	try {
		BufferedWriter bw = new BufferedWriter(new FileWriter(filePath,true));
		PrintWriter w = new PrintWriter(bw,true);

		w.println(week);
		w.println(title);
		w.println(content);
		w.flush();
		w.close();
		out.println("<script>alert('성공적으로 등록하였습니다.');</script>");
		response.sendRedirect("hw2.jsp");
	}
	catch(IOException e) {
		
	}
%>
