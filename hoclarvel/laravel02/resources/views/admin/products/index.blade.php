@extends('layouts.admin')

@section('content')
    <h1 class="mt-4">{{ $pageTitle }}</h1>
    <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">{{ $pageTitle }}</li>
    </ol>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th width="5%">STT</th>
                <th>Tên</th>
                <th>Giá</th>
                <th width="5%">Sửa</th>
                <th width="5%">Xóa</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($products as $index => $product)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $product->name }}</td>
                    <td>{{ number_format($product->price) }}</td>
                    <td><a href="#" class="btn btn-warning btn-sm">Sửa</a></td>
                    <td><a href="#" class="btn btn-danger btn-sm">Xóa</a></td>
                </tr>
            @endforeach

        </tbody>
    </table>
    {{ $products->links() }}
@endsection
