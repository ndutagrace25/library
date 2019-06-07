<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BooksController extends Controller
{
    public function store()
    {
        $attributes = request()->validate([
            'title'=>'required',
            'author'=>'required'
        ]);
        Book::create($attributes);
    }

    public function update(Book $book)
    {
        $attributes = request()->validate([
            'title'=>'required',
            'author'=>'required'
        ]);

        $book->update($attributes);
    }
}
