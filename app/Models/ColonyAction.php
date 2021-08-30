<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColonyAction extends Model
{
    use HasFactory;

    protected $table = "colony_actions";

    protected $fillable = [
        'descricao',
        'dia_semana_id',
        'sequencial'
    ];

    protected $visible = [
        'id',
        'descricao',
        'dia_semana_id',
        'sequencial'
    ];
}
