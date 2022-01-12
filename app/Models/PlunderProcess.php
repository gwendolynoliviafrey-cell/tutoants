<?php

namespace App\Models;

class PlunderProcess
{
    public $cargaDisponivel;
    public $plunderExtract;

    public $cargaProduto;
    public $cargaExtra;
    public $newScoutProduto;

    function __construct($cargaDisponivel, $plunderExtract, $cargaProduto = 0, $cargaExtra = 0, $newScoutProduto = 0)
    {
        $this->cargaDisponivel = $cargaDisponivel;//$cargaReal / $activeResources;
        $this->plunderExtract = $plunderExtract;
        $this->cargaExtra = $cargaExtra;
        $this->cargaProduto = $cargaProduto;
        $this->newScoutProduto = $newScoutProduto;
    }


    public function process($scoutProduto, $pesoProduto, $consolidadoProduto, $cargaExtra = 0) {
        $newScoutProduto = 0;
        $cargaProduto = $scoutProduto > 0 ? $this->cargaDisponivel / $pesoProduto : 0;
        if (floor($consolidadoProduto) <= floor($cargaProduto)) {
            $cargaExtra += ($cargaProduto - $consolidadoProduto) * $pesoProduto;
            $cargaProduto = $consolidadoProduto;
            $newScoutProduto = 0;
        }
        else {
            $cargaProduto = $cargaProduto * $this->plunderExtract;//($p->getPlunderExtractTotal()/100);
            if (floor($consolidadoProduto) <= floor($cargaProduto)) {
                $cargaProduto = $consolidadoProduto;
                $newScoutProduto = 0;
            }
            else 
                $newScoutProduto = $scoutProduto - $cargaProduto;
        }
        echo $cargaProduto . " - " . $consolidadoProduto . " - " . $newScoutProduto. "\n";
        return new PlunderProcess($this->cargaDisponivel, $this->plunderExtract, $cargaProduto, $cargaExtra, $newScoutProduto);
    }
}
