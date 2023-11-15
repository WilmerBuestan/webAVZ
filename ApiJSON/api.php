<?php
header("Content-Type: application/json");

$usersFile = 'users.json';
$users = json_decode(file_get_contents($usersFile), true);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        echo json_encode($users);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $data['id'] = uniqid(); // Asignar un ID único
        $users[] = $data;
        file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT));
        echo json_encode(['message' => 'Usuario creado con éxito']);
        break;

    case 'PATCH':
        $userId = $_GET['id'];
        $data = json_decode(file_get_contents('php://input'), true);

        $userIndex = array_search($userId, array_column($users, 'id'));

        if ($userIndex !== false) {
            $users[$userIndex]['name'] = $data['name'];
            $users[$userIndex]['email'] = $data['email'];
            file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT));
            echo json_encode(['message' => 'Usuario actualizado con éxito']);
        } else {
            echo json_encode(['error' => 'Usuario no encontrado']);
        }
        break;

    case 'DELETE':
        $userId = $_GET['id'];

        $users = array_filter($users, function ($user) use ($userId) {
            return $user['id'] != $userId;
        });

        file_put_contents($usersFile, json_encode(array_values($users), JSON_PRETTY_PRINT));
        echo json_encode(['message' => 'Usuario eliminado con éxito']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Método no permitido']);
        break;
}
