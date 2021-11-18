<!DOCTYPE html>
<html>
<head>
<title>The Auth Page</title>
</head>
<body>
	-> ${message}
    <form action="/login" method="POST">
        Name : <input name="name" type="text" /> Password : <input name="password" type="password" />
        Enter your Email : <input name="email" type="text" />
        <input type="submit" Value="Login"/>
    </form>

<p>New User ?</p>
<form method="get" action="/register">
    <button type="submit">Register</button>
    </form>
</body>
</html>