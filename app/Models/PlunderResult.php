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

    function consolidar(Plunder $plunder) {
        $plunderExtractClass = $plunder->getPlunderExtractTotal()/100;
        $this->meat = $this->meat * $plunderExtractClass;
        $this->plant = $this->plant * $plunderExtractClass;
        $this->soil = $this->soil * $plunderExtractClass;
        $this->sand = $this->sand * $plunderExtractClass;
        $this->honeydew = $this->honeydew * $plunderExtractClass;
        if ($plunder->hasScout) {
            if ($this->meat > $plunder->scoutMeat)
                $this->meat = $plunder->scoutMeat;
            if ($this->plant > $plunder->scoutPlant)
                $this->plant = $plunder->scoutPlant;
            if ($this->soil > $plunder->scoutSoil)
                $this->soil = $plunder->scoutSoil;
            if ($this->sand > $plunder->scoutSand)
                $this->sand = $plunder->scoutSand;
            //if ($this->honeydew > $plunder->scoutHoneydew)
            //    $this->honeydew = $plunder->scoutHoneydew;
        }
        $penalidade = $plunder->getPenalidadeNivel()/100;
        $this->meat = $this->meat * $penalidade;
        $this->plant = $this->plant * $penalidade;
        $this->soil = $this->soil * $penalidade;
        $this->sand = $this->sand * $penalidade;
        $this->honeydew = $this->honeydew * $penalidade;
    }

}
