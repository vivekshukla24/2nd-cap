<!DOCTYPE html>
<html>
<head>
<title>
Interest Calculator</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {background-color:#ffffff;background-repeat:no-repeat;background-position:top left;background-attachment:fixed;}
h1{font-family:Arial, sans-serif;color:#000000;background-color:#ffffff;}
p {font-family:Georgia, serif;font-size:14px;font-style:normal;font-weight:normal;color:#000000;background-color:#ffffff;}
</style>
</head>
<body>
<h1>Interest Calcuator</h1>
<p>Enter the principle amount, interest rate and years below</p>
<form method="post" action="/index">
  Principle Amount in Rupees: <input name="Prin" type="number" /> 
  Years : <input name="years" type="number" />
  Interest Rate : <input name="interest" type="number" /> 
  <input type="submit" value="Calculate" />
</form>
</body>
</html>