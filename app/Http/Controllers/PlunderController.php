<?php

namespace App\Http\Controllers;

use App\Models\Plunder;
use App\Models\PlunderProcess;
use App\Models\PlunderResult;
use App\Models\PlunderSave;
use Illuminate\Http\Request;

class PlunderController extends Controller
{
    public function index()
    {
        return view("layouts.app-angular");
    }

    private function processPlunder(Plunder $p, $d = 0) {
        $cargaReal = $p->carga * Plunder::FATOR_CARGA_REAL;
        if (!$p->hasScout) {
            $cargaCalculada = $cargaReal * $p->getPlunderExtractTotal()/100 * $p->getPenalidadeNivel()/100;
            $cargaMeat = $cargaCalculada / 4 / Plunder::PESO_MEAT;
            $cargaPlant = $cargaCalculada / 4 / Plunder::PESO_PLANT;
            $cargaSoil = $cargaCalculada / 4 / Plunder::PESO_SOIL;
            $cargaSand = $cargaCalculada / 4 / Plunder::PESO_SAND;
            //$cargaHoneydew = $cargaCalculada / Plunder::PESO_HONEYDEW;
            $plunderResult = new PlunderResult($cargaMeat, $cargaPlant, $cargaSoil, $cargaSand/*, $cargaHoneydew*/);
            //$plunderResult->consolidar($p);
            return $plunderResult;
        }

        $activeResources = ($p->scoutMeat > 0 ? 1 : 0) + ($p->scoutPlant > 0 ? 1 : 0) + ($p->scoutSoil > 0 ? 1 : 0) + ($p->scoutSand > 0 ? 1 : 0);
        if ($activeResources == 0)
            return new PlunderResult(0, 0, 0, 0/*, $cargaHoneydew*/);
        
        $menorCarga = $p->getMenorCarga() * $activeResources; 
        $cargaExtra = $cargaReal >= $menorCarga ? $cargaReal - $menorCarga : 0;                 
        $plunderProcess = new PlunderProcess(($cargaReal - $cargaExtra) / $activeResources,1);
        echo "Carga Real: ". $cargaReal . "\n";
        echo "Menor Carga: ". $menorCarga . "\n";
        echo "Carga Extra: ". $cargaExtra . "\n";

        $processMeat = $plunderProcess->process($p->scoutMeat,Plunder::PESO_MEAT, $p->meatConsolidado);
        $processPlant = $plunderProcess->process($p->scoutPlant,Plunder::PESO_PLANT, $p->plantConsolidado, $processMeat->cargaExtra);
        $processSoil = $plunderProcess->process($p->scoutSoil,Plunder::PESO_SOIL, $p->soilConsolidado, $processPlant->cargaExtra);
        $processSand = $plunderProcess->process($p->scoutSand,Plunder::PESO_SAND, $p->sandConsolidado, $processSoil->cargaExtra);
        $cargaExtra += $processSand->cargaExtra;
        /*$cargaHoneydew = $p->scoutHoneydew > 0 ? $cargaReal / Plunder::PESO_HONEYDEW : 0;
        $newScoutHoneydew = $p->scoutHoneydew - $cargaHoneydew;
        if ($p->scoutHoneydew < $cargaHoneydew) {
            $cargaExtra += ($cargaHoneydew - $p->scoutHoneydew) * Plunder::PESO_HONEYDEW;
            $cargaHoneydew = $p->scoutHoneydew;
            $newScoutHoneydew = 0;
        }
        $cargaHoneydew =  $cargaHoneydew * ($p->getPenalidadeNivel()/100);*/
        if ($cargaExtra == 0 || ( $processMeat->newScoutProduto == 0 && $processPlant->newScoutProduto == 0 && $processSoil->newScoutProduto == 0 && $processSand->newScoutProduto == 0 )) {
            $plunderResult = new PlunderResult($processMeat->cargaProduto, $processPlant->cargaProduto, $processSoil->cargaProduto, $processSand->cargaProduto/*, $cargaHoneydew*/);
            //if ($d == 0 || $p->classeAtk == Plunder::CLASSE_RAIDER)
                //$plunderResult->consolidar($p);
            return $plunderResult;
        }

        $cargaExtra = $cargaExtra / Plunder::FATOR_CARGA_REAL;
        $prn = $this->processPlunder(new Plunder($p->classeAtk, $p->classeDef, $p->diffLevel, $cargaExtra, true, $processMeat->newScoutProduto, $processPlant->newScoutProduto, $processSoil->newScoutProduto, $processSand->newScoutProduto, 0), $d+1);
        
        $plunderResult = new PlunderResult(($processMeat->cargaProduto + $prn->meat), 
            ($processPlant->cargaProduto + $prn->plant), 
            ($processSoil->cargaProduto + $prn->soil), 
            ($processSand->cargaProduto + $prn->sand),
            //$cargaHoneydew + $prn->honeydew
        );
        //$plunderResult->consolidar($p);
        return $plunderResult;
    }

    public function calcPlunder(Request $request) {
        $plunder = new Plunder( $request->all() );

        $plunderResult = $this->processPlunder($plunder);
        //$plunderResult->consolidar($plunder);

        //PlunderSave::convertAndSave($plunder, $plunderResult);

        return  json_encode([$plunderResult]);
    }
}
