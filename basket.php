<?php
/*Запускаем сессию*/
//session_start();
/*Подключаем библиотеки*/
require "eshop_db.inc.php";
require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>Корзина користувача</title>
</head>
<body>
<?php
if($count){
	echo "<p>Повернутися в <a href='catalog.php'>каталог</a></p>";
}else{
	echo "<p>Корзина пуста. Поверніться в <a href='catalog.php'>каталог</a></p>";
}
?>
<table border="1" cellpadding="5" cellspacing="0" width="100%">
<tr>
	<th>N п/п</th>
	<th>Назва</th>
	<th>Тара</th>
	<th>Кількість</th>
	<th>Ціна, грн.</th>
	<th>Кількість</th>
	<th>Удалить</th>
</tr>
<?php
$goods = myBasket();// myBasket() -  функция из eshop_lib.inc.php
$i = 1;
$sum = 0;
foreach($goods as $item){
?>
	<tr>
		<td><?=$i?></td>
		<td><?=$item["author"]?></td>
		<td><?=$item["title"]?></td>
		<td><?=$item["publicyear"]?></td>
		<td><?=$item["price"]?></td>
		<td><?=$item["quantity"]?></td>
		<td><a href="delete_from_basket.php?id=<?=$item["id"]?>">Видалити</td>
	</tr>
<?php
	$i++;
	$sum += $item["price"]*$item["quantity"]; 
}
?>
</table>

<p>Всього товарів в корзині на суму: <?=$sum?> грн.

<div align="center">
   <input type="button" value="Оформити замовлення!"
    onClick="location.href='orderform.php'">
</div>

</body>
</html>