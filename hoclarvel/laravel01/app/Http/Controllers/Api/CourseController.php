<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Services\CourseService;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    private $courseService = null;
    public function __construct(CourseService $courseService)
    {
        $this->courseService = $courseService;
    }
    public function index(Request $request)
    {
        return $this->courseService->getAll($request);
    }

    public function create(Request $request)
    {
        return $this->courseService->create($request);
    }

    public function detail($id)
    {
        return $this->courseService->getOne($id);
    }

    public function update($id, Request $request)
    {
        return $this->courseService->update($id, $request);
    }
}
