<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlunderSave extends Model
{
    use HasFactory;

    protected $table = "plunder_saves";

    protected $fillable = [
        'classe_atk',
        'classe_def',
        'diff_level',
        'carga',
        'has_scout',
        'scout_meat',
        'scout_plant',
        'scout_soil',
        'scout_sand',
        'scout_honeydew',
        'meat_result',
        'plant_result',
        'soil_result',
        'sand_result',
        'honeydew_result',
        'client'
    ];

    protected $visible = [
        'id',
        'classe_atk',
        'classe_def',
        'diff_level',
        'carga',
        'has_scout',
        'scout_meat',
        'scout_plant',
        'scout_soil',
        'scout_sand',
        'scout_honeydew',
        'meat_result',
        'plant_result',
        'soil_result',
        'sand_result',
        'honeydew_result',
        'client'
    ];

    static function convertAndSave (Plunder $plunder, PlunderResult $result) {
        $ps = new PlunderSave();
        $ps->classe_atk = $plunder->classeAtk;
        $ps->classe_def = $plunder->classeDef;
        $ps->diff_level = $plunder->diffLevel;
        $ps->carga = $plunder->carga;
        $ps->has_scout = $plunder->hasScout;
        $ps->scout_meat = $plunder->scoutMeat;
        $ps->scout_plant = $plunder->scoutPlant;
        $ps->scout_soil = $plunder->scoutSoil;
        $ps->scout_sand = $plunder->scoutSand;
        $ps->scout_honeydew = $plunder->scoutHoneydew;
        $ps->meat_result = floor($result->meat);
        $ps->plant_result = floor($result->plant);
        $ps->soil_result = floor($result->soil);
        $ps->sand_result = floor($result->sand);
        $ps->honeydew_result = floor($result->honeydew);
        $ps->client = $_SERVER["REMOTE_ADDR"];
        $ps->save();
    }
}
