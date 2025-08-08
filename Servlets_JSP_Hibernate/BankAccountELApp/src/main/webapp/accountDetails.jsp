<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.example.model.Account" %>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>

<jsp:useBean id="acc" class="com.example.model.Account" scope="request" />
<jsp:setProperty property="*" name="acc"/>

<%
    String accType = request.getParameter("accountType");
    session.setAttribute("accountType", accType);
    request.setAttribute("acc", acc);
%>

<html>
<head><title>Account Details</title></head>
<body>
    <h2>Bank Account Details</h2>
    <p><strong>Account No:</strong> ${acc.accountNo}</p>
    <p><strong>Name:</strong> ${acc.name}</p>
    <p><strong>Balance:</strong> ${acc.balance}</p>
    <p><strong>Account Type:</strong> ${sessionScope.accountType}</p>

    <h3>Balance Status:</h3>
    <c:choose>
        <c:when test="${acc.balance >= 1000}">
            <p style="color:green;">Sufficient Balance</p>
        </c:when>
        <c:otherwise>
            <p style="color:red;">Insufficient Balance</p>
        </c:otherwise>
    </c:choose>
</body>
</html>
