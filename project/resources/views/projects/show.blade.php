@extends('master.layout')
@section('title','View Project')
@section('content')
<div class='container' style="margin-top:15px; margin-bottom:20px;">
    <div class="card" style="padding: 6px;">
        <h3>{{ $project->title }}</h3>
        <div class="container"><p>{{ $project->description }}</p></div>
    </div>
</div>
@if($project->tasks->count())
<div class="container">
    
    <h4>Tasks under this project</h4>

    <table class="table table-dark table-sm">
        <th>Task</th>
        <th>Status</th>
        @foreach ($project->tasks as $task)
        <form method="POST" action="/tasks/{{ $task->id }}">
            @method('PATCH')
            @csrf
            
                <tr>
                    <td>
                        <label for="completed">
                            <input type="checkbox" name="completed" onchange="this.form.submit()" {{ $task->completed ? 'checked' : '' }}>
                            {{ $task->description }}
                        </label>
                    </td>
                    <td>
                        @if($task->completed)
                            <span class="badge badge-success">Completed</span>
                        @else 
                            <span class="badge badge-primary">In Progress</span>
                        @endif                     
                    </td>
                </tr>           
        </form> 
        @endforeach
    </table>  
    @endif
    {!! $project->tasks->render() !!}        
    
    <div class="card" style="padding: 6px;">
        <form method="POST" action="/projects/{{ $project->id }}/tasks">
            @csrf
            <div class="form-group">
                <h4>Add New Task</h4>
                @include('master.errors')
                <label for="description">Task Description</label>
                <input type="text" class="form-control {{ $errors->has('description') ? 'border-danger' : '' }}" name="description">
                <div style="margin-top: 5px;">
                    <button class="btn btn-info btn-sm" type="submit">Add Task</button>
                </div>  
            </div>   
        </form>
        
    </div> 

<div style="margin-top: 8px;">
    <a href="/projects" role="button" class="btn btn-primary btn-sm">Back to Projects</a>
</div>
</div>
@endsection