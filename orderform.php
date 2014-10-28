<html>
<head>
	<title>Форма оформлення замовлення</title>
</head>
<body>
	<form action="saveorder.php" method="post">
	   <table>
		<tr>
		<td><p>Замовник:</td> <td><input type="text" name="name" size="50"></td>
		</tr>
		<tr>
		<td><p>Email замовника:</td> <td><input type="text" name="email" 
					size="50"></td>
		</tr>
        <tr>		
		<td><p>Телефон для зв'язку:</td> <td><input type="text" name="phone" 
						size="50"></td>
	    <tr>
	    <td><p>Адреса доставки:</td> <td><br><textarea name="address" 
                                     cols="50" rows="5"></textarea></td>
		</tr>
		<td>
		<td></td><td><p><input type="submit" value="Замовити"></td>
        </tr>    
	</form>
</body>
</html>