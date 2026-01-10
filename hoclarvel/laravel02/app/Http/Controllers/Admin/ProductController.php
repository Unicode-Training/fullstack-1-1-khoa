<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Auth;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $pageTitle = 'Sản phẩm';
        $products = Product::orderBy('created_at', 'desc')->paginate(10);
        $user = Auth::user();

        return view('admin.products.index', compact('pageTitle', 'products'));
    }
}
