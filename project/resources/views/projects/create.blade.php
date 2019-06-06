@extends('master.layout')
@section('title','Create Project')
@section('content')

    <div class="container form-group" style="margin-top: 15px;">

        <h1>Create a New Project</h1>
       @include('master.errors')
        <form method="POST" action="/projects">
            @csrf
            <div class="form-group">
                <label for="title">Project Title</label>
                <input type="text" class="form-control {{ $errors->has('title')? 'border-danger' : '' }}" name="title" placeholder="Project Title" value="{{ old('title') }}">
            </div>

            <div class="form-group">
                <label for="description">Project Description</label>
                <textarea class="form-control {{ $errors->has('description') ? 'border-danger' : '' }}" name="description" rows="3" placeholder="Project Description">{{ old('description') }}</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Create Project</button>
        </form>
    </div>

</body>

@endsection