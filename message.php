<?php
	$servername = 'localhost';
	$username = 'root';
	$password = 'root';
	$dbname = 'KniteBoston';
	
	try{
		$conn = new PDO("mysql:host=$servername;dbname=$dbname",$username, $password);
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    
	    // sql to create table
	    $sql = "CREATE TABLE USERS (
	    id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	    name VARCHAR(65) NOT NULL,
	    email VARCHAR(50) NOT NULL,
	    phone CHAR,
		newsletter BOOLEAN DEFAULT 'false'
	    )";

	    // use exec() because no results are returned
	    $conn->exec($sql);
	    echo "Table MyGuests created successfully";
		
		// begin the transaction
	   /* $conn->beginTransaction();
	    // our SQL statememtns
	    $conn->exec("INSERT INTO USERS (name, email, phone, newsletter) 
	    VALUES ($name, $email, $phone, $newsletter)");
		
	    // commit the transaction
	    $conn->commit();
	    echo "Message Successful<br>";*/
	} catch(PDOException $e){
		
		
	}




?>