@extends('master.layout')
@section('title','Edit Project')
@section('content')
<div class="container form-group" style="margin-top: 15px;">

        <h1>Edit Project</h1>
        <form method="POST" action="/projects/{{ $project->id }}">
            @csrf
            @method('PATCH')
            <div class="form-group">
                <label for="title">Project Title</label>
                <input type="text" class="form-control" name="title" value="{{ $project->title }}" placeholder="Project Title">
            </div>

            <div class="form-group">
                <label for="description">Project Description</label>
                <textarea class="form-control" name="description" rows="3" placeholder="Project Description">{{ $project->description }}</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Update Project</button>
        </form>
    </div>
@endsection