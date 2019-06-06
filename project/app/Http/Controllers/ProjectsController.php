<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\Mail\ProjectCreated;

class ProjectsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
       
        $projects = Project::where('user_id', auth()->id())->paginate(5);
        // $projects = Project::paginate(5);
        // dump($projects);      
        return view('projects.index', compact('projects'));
    }

    public function create()
    {
        return view('/projects.create');
    }

    public function store()
    {
        $attributes = request()->validate([
            'title'=>'required',
            'description'=>'required'
        ]);
        $project = Project::create($attributes + ['user_id'=>auth()->id()]);

        \Mail::to('ndutagrace25@gmail.com')->send(
            new ProjectCreated()
        );
       
        return redirect ('/projects');
    }

    public function edit(Project $project)
    {
        return view('/projects.edit', compact('project'));
    }

    public function update(Project $project)
    {
        $this->authorize('update', $project);
        $project->update(request(['title', 'description']));
       

        return redirect('/projects');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return redirect('/projects');
    }

    public function show(Project $project)
    {
        
        $this->authorize('update', $project);
        $project = Project::first();
        $project->setRelation('tasks',$project->tasks()->paginate(3));
        // $tasks = $project->tasks()->paginate(3);
       return view('/projects.show', compact('project', 'tasks'));
    }
    
}
