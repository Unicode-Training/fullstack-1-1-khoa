<?php

namespace App\Cache;

class CacheVersion
{
    public const COURSE = "v1";
    public const USER = "v1";
}

//Đánh phiên bản cho cache -> Khi thay đổi logic chỉ cần thay đổi phiên bản cache -> Dữ liệu được làm mới (Không cần phải xóa cache)