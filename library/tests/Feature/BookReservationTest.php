<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Book;

class BookReservationTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function a_book_can_be_added_to_the_library()
    {
        $this->withoutExceptionHandling();
       $response = $this->post('/books',[
           'title'=>'Nice book title',
           'author'=>'Grace'
       ]);

       $response->assertOk();
       $this->assertCount(1, Book::all());
    }

    /** @test */
    public function a_title_is_required()
    {
        // $this->withoutExceptionHandling();

        $response = $this->post('/books',[
            'title'=> '',
            'author'=>'Grace'
        ]);

        $response->assertSessionHasErrors('title');
    }

    /** @test */
    public function an_author_is_required()
    {
        // $this->withoutExceptionHandling();
        $response = $this->post('/books', [
            'title'=>'Nice book',
            'author'=>''
        ]);

        $response->assertSessionHasErrors('author');
    }

    /** @test */
    public function a_book_can_be_updated()
    {
        $this->withoutExceptionHandling();
        $this->post('/books', [
            'title'=>'Nice Book',
            'author'=>'grace'
        ]);

        $book = Book::first();
        $response = $this->patch('/books/'.$book->id,[
            'title'=>'New Title',
            'author'=>'nduta'
        ]);

        $this->assertEquals('New Title', Book::first()->title);
        $this->assertEquals('nduta', Book::first()->author);
    }
}
