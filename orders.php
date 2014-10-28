<?php
/*Запускаем сессии*/
//session_start();
/*Подключаем библиотеки*/
require "eshop_db.inc.php";
require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>Поступлені замовлення</title>
</head>
<body>
<h2>Поступлені замовлення:</h2>
<?php
$orders = getOrders();
/*проверяем, в переменную $orders пришел массив или нет*/
if(is_array($orders)){
	foreach($orders as $order){
?>
<hr>
<p><b>Замовник</b>: <?=$order["name"]?></p>
<p><b>Email</b>: <?=$order["email"]?></p>
<p><b>Телефон</b>: <?=$order["phone"]?></p>
<p><b>Адреса доставки</b>: <?=$order["address"]?></p>
<p><b>Дата разміщення замовлення</b>: <?=date("d-m-Y H:i:s", $order["datetime"])?></p>
<h3>Куплені товари:</h3>
<table border="1" cellpadding="5" cellspacing="0" width="90%">
<tr>
	<th>N п/п</th>
	<th>Назва</th>
	<th>Тара</th>
	<th>Кількість</th>
	<th>Ціна, грн.</th>
	<th>Кількість</th>
</tr>
<?php
$i = 1;
$sum = 0;
foreach($order["goods"] as $item){
?>
	<tr>
		<td><?=$i?></td>
		<td><?=$item["author"]?></td>
		<td><?=$item["title"]?></td>
		<td><?=$item["publicyear"]?></td>
		<td><?=$item["price"]?></td>
		<td><?=$item["quantity"]?></td>
	</tr>
<?php
	$i++;
	$sum += $item["price"] * $item["quantity"]; 
}
?>
</table>
<p>Всього товарів в замовленні на суму: <?=$sum?>грн.

<?php
	}
}
?>
</body>
</html>