<?php
require './classes/Request.php';
require './classes/Response.php';
require './classes/Session.php';
require './services/UserService.php';
Session::start();
$userService = new UserService();
$request = new Request();
$id = $request->query('id');
$user = $userService->getUserById($id);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post" action="./action/update.php?id=<?php echo $id; ?>">
        <div>
            <label for="">Name</label>
            <input type="text" name="name" placeholder="Name..." value="<?php echo $user['name'] ?? ''; ?>" required>
        </div>
        <div>
            <label for="">Email</label>
            <input type="email" name="email" placeholder="Email..." value="<?php echo $user['email'] ?? ''; ?>" required>
        </div>
        <div>
            <label for="">Status</label>
            <select name="status">
                <option value="0" <?php echo $user['status'] == 0 ? 'selected' : ''; ?>>Inactive</option>
                <option value="1" <?php echo $user['status'] == 1 ? 'selected' : ''; ?>>Active</option>
            </select>
        </div>
        <button>Submit</button>
    </form>
</body>

</html>