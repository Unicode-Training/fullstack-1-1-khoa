<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post" action="./action/store.php">
        <div>
            <label for="">Name</label>
            <input type="text" name="name" placeholder="Name..." required>
        </div>
        <div>
            <label for="">Email</label>
            <input type="email" name="email" placeholder="Email..." required>
        </div>
        <div>
            <label for="">Password</label>
            <input type="password" name="password" placeholder="Password..." required>
        </div>
        <div>
            <label for="">Status</label>
            <select name="status">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
            </select>
        </div>
        <button>Submit</button>
    </form>
</body>

</html>