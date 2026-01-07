<?php

namespace App\Http\Services;

use App\Cache\CourseCacheKey;
use App\Models\Course;
use Illuminate\Support\Facades\Cache;

class CourseService
{
    public function getCoursesByUser($user, $request)
    {
        $query = $user->courses();
        if ($request->query('keyword')) {
            $keyword = $request->query('keyword');
            $query->where('name', 'like', '%' . $keyword . '%');
        }
        return $query->get();
    }

    public function getOne($id)
    {
        $key = CourseCacheKey::detail($id);
        return Cache::remember($key, 3600, function () use ($id) {
            return Course::find($id);
        });
    }

    public function addCourseForUser($user, $body)
    {
        return $user->courses()->attach($body);
    }

    public function removeCourseForUser($user, $body)
    {
        if (!empty($body)) {
            return $user->courses()->detach($body);
        }
        return $user->courses()->detach();
    }

    public function updateCourseForUser($user, $body)
    {
        return $user->courses()->sync($body);
    }

    public function createcourse($user, $body)
    {
        return $user->courses()->create($body);
    }

    public function getAll($request)
    {
        $key = CourseCacheKey::list($request->query());

        return Cache::remember($key, 3600, function () use ($request) {
            $query = Course::with('users')->withCount('users')->withCount('process as users_process_count')->with('process');
            if ($request->query('users_count')) {
                $query->having('users_count', '>=', $request->query('users_count'));
            }
            if ($request->query('keyword')) {
                $query->where('name', 'like', "%" . $request->query('keyword') . "%");
            }
            return $query->orderBy('users_count', 'asc')->get();
        });
    }

    public function create($request)
    {
        $course =  Course::create([
            'name' => $request->name,
            'price' => $request->price
        ]);
        CourseCacheKey::bumpVersionList();
        return $course;
    }

    public function update($id, $request)
    {
        $course = Course::find($id);
        if ($request->name) {
            $course->name = $request->name;
        }
        if ($request->price) {
            $course->price = $request->price;
        }
        $course->save();
        CourseCacheKey::bumpVersionList();
        Cache::forget(CourseCacheKey::detail($id));
        return $course;
    }
}
