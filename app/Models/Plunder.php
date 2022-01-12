<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plunder 
{

    const CLASSE_CULTIVATOR = "CULTIVATOR";
    const CLASSE_RAIDER = "RAIDER";
    const CLASSE_HERDER = "HERDER";

    /*const RSS_MEAT = "MEAT";
    const RSS_PLANT = "PLANT";
    const RSS_SOIL = "SOIL";
    const RSS_SAND = "SAND";
    const RSS_HONEYDEW = "HONEYDEW";*/

    const FATOR_CARGA_REAL = 7/11 * 0.99;
    const PESO_MEAT = 1.4;
    const PESO_PLANT = 1.4;
    const PESO_SOIL = 2.1;
    const PESO_SAND = 2.8;
    const PESO_HONEYDEW = 26.5;

	public $classeAtk;
	public $classeDef;
	public $diffLevel;
	public $carga;

    public $hasScout;
	public $scoutMeat;
	public $scoutPlant;
	public $scoutSoil;
	public $scoutSand;
	public $scoutHoneydew;

    public $meatConsolidado;
    public $plantConsolidado;
    public $soilConsolidado;
    public $sandConsolidado;
    public $honeydewConsolidado;

    public function __construct($data, $classeDef = NULL, $diffLevel = NULL, $carga = NULL, 
                $hasScout = NULL, $scoutMeat = NULL, $scoutPlant = NULL, $scoutSoil = NULL, $scoutSand = NULL, $scoutHoneydew = NULL)
    {
        if (is_string($data)) {
            $this->classeAtk = $data;
            $this->classeDef = $classeDef;
            $this->diffLevel = $diffLevel;
            $this->carga = $carga;
            $this->hasScout = $hasScout;
            $this->scoutMeat = $scoutMeat;
            $this->scoutPlant = $scoutPlant;
            $this->scoutSoil = $scoutSoil;
            $this->scoutSand = $scoutSand;
            $this->scoutHoneydew = $scoutHoneydew;
        }
        else {
            $this->classeAtk = $data['classeAtk'];
            $this->classeDef = $data['classeDef'];
            $this->diffLevel = (int) $data['diffLevel'];
            $this->carga = (int) $data['carga'];
            $this->hasScout = $data['hasScout'] ? true : false;
            $this->scoutMeat = (int) $data['scoutMeat'];
            $this->scoutPlant = (int) $data['scoutPlant'];
            $this->scoutSoil = (int) $data['scoutSoil'];
            $this->scoutSand = (int) $data['scoutSand'];
            $this->scoutHoneydew = (int) $data['scoutHoneydew'];
        }
        $this->consolidar();
    }

    public function getPlunderExtractTotal() {
        if ($this->classeAtk == self::CLASSE_CULTIVATOR) {
            if ($this->classeDef == self::CLASSE_CULTIVATOR) {
                return 100;
            }
            if ($this->classeDef == self::CLASSE_RAIDER) {
                return 100;
            }
            if ($this->classeDef == self::CLASSE_HERDER) {
                return 200;
            }
        }
        if ($this->classeAtk == self::CLASSE_RAIDER) {
            if ($this->classeDef == self::CLASSE_CULTIVATOR) {
                return 146.15;
            }
            if ($this->classeDef == self::CLASSE_RAIDER) {
                return 146.15;
            }
            if ($this->classeDef == self::CLASSE_HERDER) {
                return 292.252525;
            }
        }
        if ($this->classeAtk == self::CLASSE_HERDER) {
            if ($this->classeDef == self::CLASSE_CULTIVATOR) {
                return 100;
            }
            if ($this->classeDef == self::CLASSE_RAIDER) {
                return 100;
            }
            if ($this->classeDef == self::CLASSE_HERDER) {
                return 200;
            }
        }
        return 100;
    }

    public function getPenalidadeNivel () {
        switch ($this->diffLevel) {
            case 2: 
                return 100;
            case 3:
                return 80;
            case 4: 
                return 65;
            case 5:
                return 50;
            case 6:
                return 30;
            default:
                return 100;
        }
    }

    public function getMenorCarga() {
        $menor = PHP_INT_MAX;
        if ($this->scoutMeat > 0) 
            $menor = $this->meatConsolidado * self::PESO_MEAT;
        if ($this->scoutPlant > 0 && $menor > $this->plantConsolidado * self::PESO_PLANT)
            $menor = $this->plantConsolidado * self::PESO_PLANT;
        if ($this->scoutSoil > 0 && $menor > $this->soilConsolidado * self::PESO_SOIL)
            $menor = $this->soilConsolidado * self::PESO_SOIL;
        if ($this->scoutSand > 0 && $menor > $this->sandConsolidado * self::PESO_SAND)
            $menor = $this->sandConsolidado * self::PESO_SAND;
        return $menor;
    }

    function consolidar() {
        $penalidade = $this->getPenalidadeNivel()/100;
        $this->meatConsolidado = $this->scoutMeat * $penalidade;
        $this->plantConsolidado = $this->scoutPlant * $penalidade;
        $this->soilConsolidado = $this->scoutSoil * $penalidade;
        $this->sandConsolidado = $this->scoutSand * $penalidade;
        $this->honeydewConsolidado = $this->scoutHoneydew * $penalidade;

        $plunderExtractClass = $this->getPlunderExtractTotal()/100;
        $this->meatConsolidado = $this->meatConsolidado * $plunderExtractClass;
        $this->plantConsolidado = $this->plantConsolidado * $plunderExtractClass;
        $this->soilConsolidado = $this->soilConsolidado * $plunderExtractClass;
        $this->sandConsolidado = $this->sandConsolidado * $plunderExtractClass;
        $this->honeydewConsolidado = $this->honeydewConsolidado * $plunderExtractClass;
        if ($this->hasScout) {
            if ($this->meatConsolidado > $this->scoutMeat)
                $this->meatConsolidado = $this->scoutMeat;
            if ($this->plantConsolidado > $this->scoutPlant)
                $this->plantConsolidado = $this->scoutPlant;
            if ($this->soilConsolidado > $this->scoutSoil)
                $this->soilConsolidado = $this->scoutSoil;
            if ($this->sandConsolidado > $this->scoutSand)
                $this->sandConsolidado = $this->scoutSand;
            //if ($this->honeydewConsolidado > $this->scoutHoneydew)
            //    $this->honeydewConsolidado = $this->scoutHoneydew;
        }
    }

}
