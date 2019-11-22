<%@tag trimDirectiveWhitespaces="true" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@tag description="Page Layout" pageEncoding="UTF-8"%>
<%@attribute name="title" fragment="true" %>
<%@attribute name="head" fragment="true" %>
<%@attribute name="body" fragment="true" %>
<%@attribute name="javascript" fragment="true" %>

<!DOCTYPE html>
<html>
  <head>
    <!-- current page: ${pageContext.request.requestURI} -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title><c:choose><c:when test="${title == null}">Hello Boot</c:when><c:otherwise><jsp:invoke fragment="title" /></c:otherwise></c:choose></title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha256-YLGeXaapI0/5IgZopewRJcFXomhRMlYYjugPLSyNjTY=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href='<c:url value="/assets/css/style.css"/>' />

    <jsp:invoke fragment="head" />

  </head>
  <body style="padding-top: 62px;">
    <div class="container">

      <nav class="navbar fixed-top navbar-dark bg-primary py-2">
        <a class="navbar-brand display-8" href="<c:url value="/"/>"><i class="fas fa-thumbs-up"></i> Hello Boot</a>

        <c:if test="${not empty user}">
          <div class="ml-auto form-inline">
            <c:if test="${profiles.contains('dev')}">
              <a href="<c:url value="/h2-console"/>" class="btn btn-sm btn-secondary mr-2"><i class="fas fa-database"></i> H2 Console</a>
            </c:if>
            
            <a href="<c:url value="/widgets"/>" class="btn btn-sm btn-secondary"><i class="fas fa-cogs"></i> Widgets</a>
          </div>

          <form class="form-inline ml-2" action="<c:url value="/logout"/>" method="POST">
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            <button type="submit" class="btn btn-sm btn-secondary"><i class="fas fa-sign-out-alt"></i> Logout</button>
          </form>
        </c:if>

      </nav>
          
      <%@include file="includes/messages.jspf" %>

      <jsp:invoke fragment="body" />

    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha256-fzFFyH01cBVPYzl16KT40wqjhgPtq6FFUB6ckN2+GGw=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="<c:url value="/assets/js/cjis.js"/>"></script>
    <jsp:invoke fragment="javascript" />
  </body>
</html>
