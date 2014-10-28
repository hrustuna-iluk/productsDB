<html>
<head>
	<title>Форма додавання товару в каталог</title>
</head>
<body>
	<form action="save2cat.php" method="post">
	  <table>
	   <tr>
		<td><p>Назва:</td> <td><input type="text" name="author" size="50"></p></td>
	   </tr>
	   <tr>
		<td><p>Тара:</td> <td><input type="text" name="title" size="50"></p></td>
	   </tr>
	   <tr>
		<td><p>Кількість:</td> <td><input type="text" name="publicyear" size="6"></p></td>
	   </tr>
       <tr>	   
		<td><p>Ціна:</td> <td><input type="text" name="price" size="6"> грн.</p></td>
	   </tr>
	   <tr>
		<td><td><td><p><input type="submit" value="Додати"></p></td>
	   </tr>
	</table>
	</form>
<p>Переглянути <a href="catalog.php">Каталог</a></p>
</body>
</html>