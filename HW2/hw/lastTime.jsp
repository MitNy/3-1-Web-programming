<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*,java.util.*" %>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html;charset=UTF-8");  %>
<%
	String fileDir = request.getRealPath("wp/hw/file");
	File f = new File(fileDir);
	File [] files = f.listFiles();

	java.text.DateFormat df = new java.text.SimpleDateFormat("yyyyMMddHHmmss");

	String[] dir = new String[50];
	String[] lastDate = new String[500];
	long longDate = 0;
	for( int i=0; i<files.length; i++){
		dir[i] = files[i].getName();
		String dirPath = request.getRealPath("wp/hw/file/"+dir[i]);
		File d = new File(dirPath);
		lastDate[i] = df.format(d.lastModified());
		//out.print(df.format(d.lastModified()));
	}
try {
	for( int j=0; j<files.length; j++) {
		long j1 = Long.parseLong(lastDate[j]);
		long j2 = Long.parseLong(lastDate[j+1]);
		if( j1 < j2 ) {
			longDate = j2;
		}
	}


}
catch(Exception e){

}
String strDate = Long.toString(longDate);
String year = strDate.substring(0,4);
String month = strDate.substring(4,6);
String day = strDate.substring(6,8);
String hour = strDate.substring(8,10);
String minute = strDate.substring(10,12);
String second = strDate.substring(12,14);
String fmStr = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
out.print(fmStr);

%>
