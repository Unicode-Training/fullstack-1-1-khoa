<?php
require './services/UserService.php';
require './classes/Request.php';
require './classes/Session.php';
Session::start();
$userService = new UserService();
$request = new Request();
$searchTerm = '';
if ($request->query('search')) {
    $searchTerm = $request->query('search');
}
if ($request->query('status') && in_array($request->query('status'), ['active', 'inactive'])) {
    $status = $request->query('status');
}
$page = $request->query('page') ?? 1;
$allUsers = $userService->getAllUsers([
    'search' => $searchTerm,
    'status' => $status ?? null
], $page);
$users = $allUsers['data'];
$count = $allUsers['count'];
$message = Session::flash('message');

//Tính số trang
$maxPage = ceil($count / 3);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="/pdo_crud/create.php">Thêm mới</a>
    <?php if ($message): ?>
        <p style="color: green;"><?php echo $message; ?></p>
    <?php endif; ?>
    <form style="display: block; width: 80%; margin-inline: auto; margin-bottom: 10px;">
        <select name="status">
            <option value="all">Tất cả</option>
            <option value="active" <?php echo $request->query('status') === 'active' ? 'selected' : '' ?>>Kích hoạt</option>
            <option value="inactive" <?php echo $request->query('status') === 'inactive' ? 'selected' : '' ?>>Chưa kích hoạt</option>
        </select>
        <input type="search" name="search" placeholder="Tìm kiếm..." value="<?php echo $request->query('search') ?>">
        <button>Tìm</button>
    </form>
    <table width="80%" style="margin-inline: auto;" border="1" cellspacing="0" cellpadding="8">
        <thead>
            <tr>
                <th width="5%">STT</th>
                <th>Tên</th>
                <th>Email</th>
                <th width="5%">Sửa</th>
                <th width="5%">Xóa</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($users as $key => $value):
            ?>
                <tr>
                    <td><?php echo $key + 1; ?></td>
                    <td><?php echo $value['name']; ?></td>
                    <td><?php echo $value['email']; ?></td>
                    <td><a href="/pdo_crud/edit.php?id=<?php echo $value['id']; ?>">Sửa</a></td>
                    <td><a onclick="return confirm('Bạn có chắc?')" href="/pdo_crud/action/delete.php?id=<?php echo $value['id']; ?>">Xóa</a></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <hr>
    <div style="display: flex; justify-content: center; gap: 10px;">
        <?php for ($page = 1; $page <= $maxPage; $page++): ?>
            <a href="?page=<?php echo $page; ?>"><?php echo $page; ?></a>
        <?php endfor; ?>
    </div>
</body>

</html>