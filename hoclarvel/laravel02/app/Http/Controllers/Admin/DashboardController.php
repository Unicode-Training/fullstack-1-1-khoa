<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $pageTitle = 'Trang tổng quan';
        return view('admin.dashboard.index', compact('pageTitle'));
    }
}
