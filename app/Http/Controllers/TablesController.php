<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TablesController extends Controller
{
    public function index()
    {
        return view("layouts.app-angular");
    }
}
