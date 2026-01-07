<?php

namespace App\Cache;

use Illuminate\Support\Facades\Cache;


class CourseCacheKey
{
    public static function versionList()
    {
        //Tự động tạo cache nếu chưa có
        return Cache::rememberForever('version:course:list', function () {
            return 1;
        });;
    }
    public static function bumpVersionList()
    {
        Cache::increment('version:course:list');
    }
    public static function list($params = [])
    {
        return CacheVersion::COURSE . ":course:list:" . self::versionList() . ($params ? ':' . http_build_query($params, '', ':') : '');
    }

    public static function detail($id)
    {
        return CacheVersion::COURSE . ":course:" . $id;
    }
}
