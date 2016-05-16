<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

require_once '../vendor/autoload.php';

// init Silex app
$app = new Silex\Application();

//configure database connection
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver' => 'pdo_mysql',
        'host' => '127.0.0.1',
        'dbname' => 'selfie',
        'user' => 'root',
        'password' => '',
        'charset' => 'utf8',
    ),
));

// route for "/users" URI: load users list and return it in JSON format
$app->get('/users', function () use ($app) {
	$sql = "SELECT * FROM user ORDER BY userid DESC;";
	$users = $app['db']->fetchAll($sql);
	
	return $app->json($users);
});

$app->post('/user', function (Request $request) use ($app) {
	$post  = $request->getContent();
	$user = json_decode($post, true);
	
	$app['db']->insert('user', array(
		'firstname' => $user['firstname'],
		'lastname' => $user['lastname'],
		'email' => $user['email'],
		'tel' => $user['tel'],
		'notes' => $user['notes'],
		'selfie' => $user['selfie']
	));
	
	return new Response('New user was added!', 201);	
});

/*
$app->put('/{stockcode}', function (Silex\Application $app, $stockcode) use ($toys) {
   //...
});

$app->delete('/{stockcode}', function (Silex\Application $app, $stockcode) use ($toys) {
   //...
});
*/

// default route
$app->get('/', function () {
		require_once 'index.html';
		return "";
});

$app->run();

?>