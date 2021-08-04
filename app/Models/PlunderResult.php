<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlunderResult 
{
    public $meat;
    public $plant;
    public $soil;
    public $sand;
    public $honeydew;

    function __construct($meat, $plant, $soil, $sand, $honeydew = 0)
    {
        $this->meat = $meat;
        $this->plant = $plant;
        $this->soil = $soil;
        $this->sand = $sand;
        $this->honeydew = $honeydew;
    }
}
