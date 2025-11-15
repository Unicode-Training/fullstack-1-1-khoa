<?php

namespace App\Http\Services;

use App\Models\Course;

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
        return Course::find($id);
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
        $query = Course::with('users')->withCount('users')->withCount('process as users_process_count')->with('process');
        if ($request->query('users_count')) {
            $query->having('users_count', '>=', $request->query('users_count'));
        }
        return $query->orderBy('users_count', 'asc')->get();
    }
}
