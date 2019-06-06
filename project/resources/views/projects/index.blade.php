@extends('master.layout')
@section('title','All Projects')
@section('content')
    
    <div class="container form-group" style="margin-top: 15px;">
        <div class="card" style="margin-top: 15px;">
            <h1>Projects</h1>
            <div class="form-group">
                <a class="btn btn-primary" href="/projects/create" role="button">Add Project</a>
            </div>            
            <table class="table table-dark">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th colspan="3">Actions</th>
                </tr>
                </thead>
                <tbody>
                    @foreach($projects as $project)
                        <tr>
                            <td>{{$project->title}}</td>
                            <td>{{$project->description}}</td>
                            <td><a class="btn btn-primary btn-sm" href="/projects/{{ $project->id }}" role="button">View</a></td>
                            <td><a class="btn btn-info btn-sm" href="/projects/{{$project->id}}/edit" role="button">Edit</a></td>
                            <td>
                                <form method="POST" action="/projects/{{ $project->id }}">
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                </form>
                            </td> 
                        </tr>            
                    @endforeach
                </tbody>
            </table>  
            {{ $projects->links() }}
        </div>
    </div>
@endsection