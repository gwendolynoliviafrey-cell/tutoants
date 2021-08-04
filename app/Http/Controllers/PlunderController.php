<?php

namespace App\Http\Controllers;

use App\Models\Plunder;
use App\Models\PlunderProcess;
use App\Models\PlunderResult;
use Illuminate\Http\Request;

class PlunderController extends Controller
{
    public function index()
    {
        return view("layouts.app-angular");
    }

    private function processPlunder(Plunder $p, $d = 0) {
        if (!$p->hasScout) {
            $cargaReal = $p->carga * Plunder::FATOR_CARGA_REAL * ($p->getPlunderExtractTotal()/100) * ($p->getPenalidadeNivel()/100);
            $cargaMeat = $cargaReal / 4 / Plunder::PESO_MEAT;
            $cargaPlant = $cargaReal / 4 / Plunder::PESO_PLANT;
            $cargaSoil = $cargaReal / 4 / Plunder::PESO_SOIL;
            $cargaSand = $cargaReal / 4 / Plunder::PESO_SAND;
            //$cargaHoneydew = $cargaReal / Plunder::PESO_HONEYDEW;
            return new PlunderResult($cargaMeat, $cargaPlant, $cargaSoil, $cargaSand/*, $cargaHoneydew*/);
        }

        $activeResources = ($p->scoutMeat > 0 ? 1 : 0) + ($p->scoutPlant > 0 ? 1 : 0) + ($p->scoutSoil > 0 ? 1 : 0) + ($p->scoutSand > 0 ? 1 : 0);
        if ($activeResources == 0)
            return new PlunderResult(0, 0, 0, 0/*, $cargaHoneydew*/);

        $cargaReal = $p->carga * Plunder::FATOR_CARGA_REAL;
        $cargaExtra = 0;
        $plunderProcess = new PlunderProcess($cargaReal / $activeResources,$p->getPlunderExtractTotal()/100);

        $processMeat = $plunderProcess->process($p->scoutMeat,Plunder::PESO_MEAT);
        $processPlant = $plunderProcess->process($p->scoutPlant,Plunder::PESO_PLANT, $processMeat->cargaExtra);
        $processSoil = $plunderProcess->process($p->scoutSoil,Plunder::PESO_SOIL, $processPlant->cargaExtra);
        $processSand = $plunderProcess->process($p->scoutSand,Plunder::PESO_SAND, $processSoil->cargaExtra);
        $cargaExtra = $processSand->cargaExtra;

        /*$cargaHoneydew = $p->scoutHoneydew > 0 ? $cargaReal / Plunder::PESO_HONEYDEW : 0;
        $newScoutHoneydew = $p->scoutHoneydew - $cargaHoneydew;
        if ($p->scoutHoneydew < $cargaHoneydew) {
            $cargaExtra += ($cargaHoneydew - $p->scoutHoneydew) * Plunder::PESO_HONEYDEW;
            $cargaHoneydew = $p->scoutHoneydew;
            $newScoutHoneydew = 0;
        }
        $cargaHoneydew =  $cargaHoneydew * ($p->getPenalidadeNivel()/100);*/
        if ($cargaExtra == 0 || ( $processMeat->newScoutProduto == 0 && $processPlant->newScoutProduto == 0 && $processSoil->newScoutProduto == 0 && $processSand->newScoutProduto == 0 ))
            return new PlunderResult($processMeat->cargaProduto, $processPlant->cargaProduto, $processSoil->cargaProduto, $processSand->cargaProduto/*, $cargaHoneydew*/);

        $cargaExtra = ($cargaExtra / ($p->getPlunderExtractTotal()/100)) / Plunder::FATOR_CARGA_REAL;
        $prn = $this->processPlunder(new Plunder($p->classeAtk, $p->classeDef, $p->diffLevel, $cargaExtra, true, $processMeat->newScoutProduto, $processPlant->newScoutProduto, $processSoil->newScoutProduto, $processSand->newScoutProduto, 0), $d+1);
        
        $penalidadeNivel = $p->getPenalidadeNivel()/100;
        return new PlunderResult(($processMeat->cargaProduto + $prn->meat) * $penalidadeNivel, 
                ($processPlant->cargaProduto + $prn->plant) * $penalidadeNivel, 
                ($processSoil->cargaProduto + $prn->soil) * $penalidadeNivel, 
                ($processSand->cargaProduto + $prn->sand) * $penalidadeNivel,
                //$cargaHoneydew + $prn->honeydew
            );
    }

    public function calcPlunder(Request $request) {
        $p = new Plunder( $request->all() );

        $pr = [$this->processPlunder($p)];

        return  json_encode($pr);
    }
}
