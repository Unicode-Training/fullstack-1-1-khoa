<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Services\UserService;
use App\Http\Controllers\Controller;
use App\Http\Services\CourseService;

class UserCourseController extends Controller
{
    private $userService = null;
    private $courseService = null;
    public function __construct(UserService $userService, CourseService $courseService)
    {
        $this->userService = $userService;
        $this->courseService = $courseService;
    }
    public function courses($id, Request $request)
    {
        $user = $this->userService->getOne($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }
        return $this->courseService->getCoursesByUser($user, $request);
    }

    public function addCourse($id, Request $request)
    {
        $user = $this->userService->getOne($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }
        $this->courseService->addCourseForUser($user, $request->all());
        return [
            'success' => true
        ];
    }

    public function removeCourse($id, Request $request)
    {
        $user = $this->userService->getOne($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }
        return $this->courseService->removeCourseForUser($user, $request->all());
    }

    public function updateCourse($id, Request $request)
    {
        $user = $this->userService->getOne($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }
        return $this->courseService->updateCourseForUser($user, $request->all());
    }

    public function createCourse($id, Request $request)
    {
        $user = $this->userService->getOne($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }
        return $this->courseService->createCourse($user, $request->all());
    }

    public function users($id, Request $request)
    {
        $course = $this->courseService->getOne($id);
        if (!$course) {
            return response()->json([
                'message' => "Course not found",
                'success' => false
            ], 404);
        }
        return $this->userService->getUsersByCourse($course);
    }
}
