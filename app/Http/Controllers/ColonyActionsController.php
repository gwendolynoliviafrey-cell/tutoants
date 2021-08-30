<?php

namespace App\Http\Controllers;

use App\Models\ColonyAction;
use Illuminate\Http\Request;

class ColonyActionsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('authdev:admin');
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view("layouts.app-angular");
    }

    public function getColonyActionsList()
    {
        return ColonyAction::all();
    }
}
