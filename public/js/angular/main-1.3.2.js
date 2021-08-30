(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/abstract-component.ts":
/*!***************************************!*\
  !*** ./src/app/abstract-component.ts ***!
  \***************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent() {
        this.editavel = false;
        this.LOADING = 0;
        this.COMPLETE = 1;
        this.ERROR = 2;
        this.status = this.LOADING;
        this.aviso = "";
    }
    AbstractComponent.prototype.erroHttp = function (response) {
        var mensagem;
        if (response.status == 0) {
            mensagem = "Falha na Conexão!";
        }
        else {
            try {
                mensagem = response.json().message;
            }
            catch (e) {
                if (response.message)
                    mensagem = response.message;
                else
                    mensagem = response;
            }
        }
        return mensagem;
    };
    return AbstractComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\n\t\t\t<!-- Collapsed Hamburger -->\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n\t\t\t\tdata-target=\"#app-navbar-collapse\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"sr-only\">Toggle Navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\n\t\t\t<!-- Branding Image -->\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\" style=\"padding: 2px 15px;\">\n\t\t\t\t<img src=\"img/logo.png\" alt=\"Logo\" style=\"width: 75px;\">\n\t\t\t</a>\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t\t\t{{ appName }}\n\t\t\t</a>\n\t\t</div>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"app-navbar-collapse\">\n\t\t\t<!-- Left Side Of Navbar -->\n\n\t\t\t<app-menu>Loading Menus...</app-menu>\n\n\t\t\t<!-- Right Side Of Navbar -->\n\n\t\t</div>\n\t</div>\n</nav>\n\n\n<div id=\"app\">\n\n\t<div class=\"container\">\n\t\t<router-outlet></router-outlet>\n\t\t<footer class=\"footer\">\n\t\t\t<div class=\"container\" style=\"width: 100%;\">\n\t\t\t\t<p>\"The Ants: Underground Kingdom\" are copyright of StarUnion. All trademarked images and names are\n\t\t\t\t\tproperty of their respective owners, and any such material is used on this site for educational\n\t\t\t\t\tand helping players purposes only. TutoAnts has no affiliation with StarUnion.</p>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ants-wiki';
    }
    AppComponent.prototype.ngOnInit = function () {
        var divHiddens = document.getElementById('hiddens');
        var hAppName = document.getElementById('hidden-app-name');
        var hPermissao = document.getElementById('hidden-permissao');
        var hUsuarioHackAdmin = document.getElementById('hidden-usuario-hack-admin');
        var hUsername = document.getElementById('hidden-username');
        var hIsLogado = document.getElementById('hidden-is-logado');
        this.appName = hAppName ? hAppName.value : null;
        this.permissao = hPermissao ? hPermissao.value : null;
        this.usuarioHackAdmin = hUsuarioHackAdmin ? hUsuarioHackAdmin.value == "1" : false;
        this.username = hUsername ? hUsername.value : null;
        this.isLogado = hIsLogado ? hIsLogado.value == "1" : false;
        //divHiddens.remove();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _users_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/filtro-usuario.pipe */ "./src/app/users/filtro-usuario.pipe.ts");
/* harmony import */ var _redimensionar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./redimensionar.directive */ "./src/app/redimensionar.directive.ts");
/* harmony import */ var _formatador_data_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formatador-data.pipe */ "./src/app/formatador-data.pipe.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/painel/painel.component.ts");
/* harmony import */ var _zeros_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./zeros.pipe */ "./src/app/zeros.pipe.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _colony_actions_colony_actions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./colony-actions/colony-actions.component */ "./src/app/colony-actions/colony-actions.component.ts");
/* harmony import */ var _colony_actions_colony_actions_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./colony-actions/colony-actions.service */ "./src/app/colony-actions/colony-actions.service.ts");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contribute/contribute.component */ "./src/app/contribute/contribute.component.ts");
/* harmony import */ var _plunder_plunder_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./plunder/plunder.component */ "./src/app/plunder/plunder.component.ts");
/* harmony import */ var _plunder_plunder_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./plunder/plunder.service */ "./src/app/plunder/plunder.service.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");
/* harmony import */ var _tables_special_ant_exp_special_ant_exp_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tables/special-ant-exp/special-ant-exp.component */ "./src/app/tables/special-ant-exp/special-ant-exp.component.ts");
/* harmony import */ var _tables_special_ant_exp_special_ant_exp_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tables/special-ant-exp/special-ant-exp.service */ "./src/app/tables/special-ant-exp/special-ant-exp.service.ts");
/* harmony import */ var _tables_zone_develop_creature_remains_zone_develop_creature_remains_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tables/zone-develop-creature-remains/zone-develop-creature-remains.component */ "./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.ts");
/* harmony import */ var _tables_t9_creature_remains_t9_creature_remains_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tables/t9-creature-remains/t9-creature-remains.component */ "./src/app/tables/t9-creature-remains/t9-creature-remains.component.ts");
/* harmony import */ var _upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./upgrades/upgrades.component */ "./src/app/upgrades/upgrades.component.ts");






























var appRoutes = [
    { path: 'painel', component: _painel_painel_component__WEBPACK_IMPORTED_MODULE_16__["PainelComponent"] },
    { path: 'colony-actions', component: _colony_actions_colony_actions_component__WEBPACK_IMPORTED_MODULE_19__["ColonyActionsComponent"] },
    { path: 'tables', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_24__["TablesComponent"] },
    { path: 'plunder-calculator', component: _plunder_plunder_component__WEBPACK_IMPORTED_MODULE_22__["PlunderComponent"] },
    { path: 'contribute', component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_21__["ContributeComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"] },
    /*{ path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },*/
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                _users_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_12__["FiltroUsuarioPipe"],
                _redimensionar_directive__WEBPACK_IMPORTED_MODULE_13__["RedimensionarDirective"],
                _formatador_data_pipe__WEBPACK_IMPORTED_MODULE_14__["FormatadorDataPipe"],
                _painel_painel_component__WEBPACK_IMPORTED_MODULE_16__["PainelComponent"],
                _zeros_pipe__WEBPACK_IMPORTED_MODULE_17__["ZerosPipe"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"],
                _colony_actions_colony_actions_component__WEBPACK_IMPORTED_MODULE_19__["ColonyActionsComponent"],
                _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_21__["ContributeComponent"],
                _tables_special_ant_exp_special_ant_exp_component__WEBPACK_IMPORTED_MODULE_25__["SpecialAntExpComponent"],
                _plunder_plunder_component__WEBPACK_IMPORTED_MODULE_22__["PlunderComponent"],
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_24__["TablesComponent"],
                _tables_zone_develop_creature_remains_zone_develop_creature_remains_component__WEBPACK_IMPORTED_MODULE_27__["ZoneDevelopCreatureRemainsComponent"],
                _tables_t9_creature_remains_t9_creature_remains_component__WEBPACK_IMPORTED_MODULE_28__["T9CreatureRemainsComponent"],
                _upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_29__["UpgradesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes
                //{ enableTracing: true } // <-- debugging purposes only
                ),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ],
            providers: [
                _dados_service__WEBPACK_IMPORTED_MODULE_15__["DadosService"],
                _colony_actions_colony_actions_service__WEBPACK_IMPORTED_MODULE_20__["ColonyActionsService"],
                _tables_special_ant_exp_special_ant_exp_service__WEBPACK_IMPORTED_MODULE_26__["SpecialAntExpService"],
                _plunder_plunder_service__WEBPACK_IMPORTED_MODULE_23__["PlunderService"],
                _users_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/array-indexador.ts":
/*!************************************!*\
  !*** ./src/app/array-indexador.ts ***!
  \************************************/
/*! exports provided: ArrayIndexador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayIndexador", function() { return ArrayIndexador; });
var ArrayIndexador = /** @class */ (function () {
    function ArrayIndexador(lista, chavePersonalizada) {
        this.listaOrigin = [];
        this.indices = {};
        this.chave = "id";
        if (chavePersonalizada)
            this.chave = chavePersonalizada;
        for (var i = 0; i < lista.length; i++) {
            this.indices[lista[i][this.chave]] = i;
        }
        this.listaOrigin = lista;
    }
    ArrayIndexador.prototype.get = function (chave) {
        var ret = this.listaOrigin[this.indices[chave]];
        return ret ? ret : null;
    };
    ArrayIndexador.prototype.append = function (lista) {
        this.listaOrigin = this.listaOrigin.slice(0);
        this.listaOrigin = this.listaOrigin.concat(lista);
        for (var i = this.listaOrigin.length - lista.length; i < this.listaOrigin.length; i++) {
            this.indices[this.listaOrigin[i][this.chave]] = i;
        }
    };
    ArrayIndexador.prototype.add = function (elem) {
        this.indices[elem[this.chave]] = this.listaOrigin.length;
        this.listaOrigin.push(elem);
    };
    /*update(elem) {
        this.listaOrigin[this.indices[elem[this.chave]]];
    }*/
    ArrayIndexador.prototype.remove = function (chave) {
        this.listaOrigin.splice(this.indices[chave], 1);
        this.indices = {};
        for (var i = 0; i < this.listaOrigin.length; i++) {
            this.indices[this.listaOrigin[i][this.chave]] = i;
        }
    };
    ArrayIndexador.prototype.getListaOrigin = function () {
        return this.listaOrigin;
    };
    return ArrayIndexador;
}());



/***/ }),

/***/ "./src/app/colony-actions/colony-action.ts":
/*!*************************************************!*\
  !*** ./src/app/colony-actions/colony-action.ts ***!
  \*************************************************/
/*! exports provided: ColonyAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColonyAction", function() { return ColonyAction; });
var ColonyAction = /** @class */ (function () {
    function ColonyAction(id, descricao, dia_semana_id, sequencial) {
        if (typeof id == "number") {
            this.id = id;
            this.descricao = descricao;
            this.dia_semana_id = dia_semana_id;
            this.sequencial = sequencial;
        }
        else {
            this.id = parseInt(id['id']);
            this.descricao = id['descricao'];
            this.dia_semana_id = id['dia_semana_id'];
            this.sequencial = id['sequencial'];
        }
    }
    ColonyAction.generate = function () {
        return new ColonyAction(0, "", 0, 0);
    };
    ColonyAction.convertList = function (arr) {
        var list = [];
        for (var i in arr) {
            list.push(new ColonyAction(arr[i]));
        }
        return list;
    };
    ColonyAction.prototype.clone = function () {
        return new ColonyAction(this.id, this.descricao, this.dia_semana_id, this.sequencial);
    };
    return ColonyAction;
}());



/***/ }),

/***/ "./src/app/colony-actions/colony-actions.component.html":
/*!**************************************************************!*\
  !*** ./src/app/colony-actions/colony-actions.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">Colony Action Event Schedule</div>\n\t<div class=\"row\" style=\"margin-right: 0px; margin-left: 0px;\">\n\t\t<div style=\"width: 100%; padding: 10px; border-right: 1px solid #ddd\">\n\t\t\t<label>Day of Week:</label><br>\n\t\t\t<select class=\"form-control\" name=\"dia-selecionado\" [(ngModel)]=\"diaSelecionadoId\" (change)=\"selecionaDia()\" style=\"max-width: 410px;\" [disabled]=\"!editavel\">   \n\t\t\t\t<option hidden disabled [value]=\"0\" selected> -- Select -- </option>  \n\t\t\t\t<option *ngFor=\"let d of dias\" [value]=\"d.id\">Day {{d.id}}: {{d.day}} - Warzone Event: {{d.event}}</option>       \n\t\t\t</select><br>\n\t\t\t<label>Timezone:</label><br>\n\t\t\t<select class=\"form-control\" name=\"timezone\" [(ngModel)]=\"timezoneOffset\" (change)=\"selecionaTimezone()\" style=\"max-width: 410px;\" [disabled]=\"!editavel\">   \n\t\t\t\t<option hidden disabled value selected> -- Select -- </option>  \n\t\t\t\t<option [value]=\"LOCAL_TIMEZONE_OFFSET\">{{LOCAL_TIMEZONE_STRING}}</option>\n\t\t\t\t<option [value]=\"0\">UTC (Universal / Greenwich)</option>      \n\t\t\t</select><br>\n\t\t\t<div *ngIf=\"diaSelecionado.colonyActionsIndex\">\n\t\t\t\t<div style=\"overflow-x: auto;\">\n\t\t\t\t\t<table class=\"table\" data-toggle=\"table\" style=\"table-layout: auto;\">\n\t\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t\t<col width=\"120px\"/>\n\t\t\t\t\t\t\t<col />\n\t\t\t\t\t\t</colgroup>\n\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th style=\"text-align: center\">SCHEDULE</th>\n\t\t\t\t\t\t\t\t<th title=\"EVENT\">EVENT</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<!--tr *ngFor=\"let evento of diaSelecionado.colonyActionsIndex.getListaOrigin()\" class=\"clickable-row\" (click)=\"selecionarEvento(evento)\" [ngClass]=\"{'linha-selecionada': evento.id == eventoSelecionado.id}\"-->\n\t\t\t\t\t\t\t<tr *ngFor=\"let evento of diaSelecionado.colonyActionsIndex.getListaOrigin()\" [ngClass]=\"{'linha-selecionada': isInnerEvent(evento.sequencial)}\">\n\t\t\t\t\t\t\t\t<td style=\"text-align: center; white-space: nowrap;\">\n\t\t\t\t\t\t\t\t\t{{getDateLine(evento.sequencial)}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td style=\"white-space: nowrap;\" title=\"{{evento.descricao}}\">\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"isInnerEvent(evento.sequencial)\"><label style=\"font-weight: bold; text-transform: initial;\">(Event in Progress)</label><br></ng-container>\n\t\t\t\t\t\t\t\t\t{{evento.descricao}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr *ngFor=\"let evento of diaSelecionado.colonyActionsIndex.getListaOrigin()\" [ngClass]=\"{'linha-selecionada': isInnerEvent(evento.sequencial + 8)}\">\n\t\t\t\t\t\t\t\t<td style=\"text-align: center; white-space: nowrap;\">\n\t\t\t\t\t\t\t\t\t{{getDateLine(evento.sequencial + 8)}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td style=\"white-space: nowrap;\" title=\"{{evento.descricao}}\">\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"isInnerEvent(evento.sequencial + 8)\"><label style=\"font-weight: bold; text-transform: initial;\">(Event in Progress)</label><br></ng-container>\n\t\t\t\t\t\t\t\t\t{{evento.descricao}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr *ngFor=\"let evento of diaSelecionado.colonyActionsIndex.getListaOrigin()\" [ngClass]=\"{'linha-selecionada': isInnerEvent(evento.sequencial + 16)}\">\n\t\t\t\t\t\t\t\t<td style=\"text-align: center; white-space: nowrap;\">\n\t\t\t\t\t\t\t\t\t{{getDateLine(evento.sequencial + 16)}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td style=\"white-space: nowrap;\" title=\"{{evento.descricao}}\">\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"isInnerEvent(evento.sequencial + 16)\"><label style=\"font-weight: bold; text-transform: initial;\">(Event in Progress)</label><br></ng-container>\n\t\t\t\t\t\t\t\t\t{{evento.descricao}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<!--tfoot class=\"status-tabela\">\n\t\t\t\t\t\t\t<tr *ngIf=\"status == LOADING\"><td colspan=\"6\"><i>Carregando Macros...</i></td></tr>\n\t\t\t\t\t\t\t<tr *ngIf=\"macros != null && macros.length == 0 && status == COMPLETE\"><td colspan=\"6\"><i>Não Há Macros para serem listadas</i></td></tr>\n\t\t\t\t\t\t\t<tr *ngIf=\"status == ERROR\"><td class=\"erro\" colspan=\"6\"><i>Falha na obtenção das Macros!</i></td></tr>\n\t\t\t\t\t\t</tfoot-->\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/colony-actions/colony-actions.component.less":
/*!**************************************************************!*\
  !*** ./src/app/colony-actions/colony-actions.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbG9ueS1hY3Rpb25zL2NvbG9ueS1hY3Rpb25zLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/colony-actions/colony-actions.component.ts":
/*!************************************************************!*\
  !*** ./src/app/colony-actions/colony-actions.component.ts ***!
  \************************************************************/
/*! exports provided: ColonyActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColonyActionsComponent", function() { return ColonyActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _colony_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colony-action */ "./src/app/colony-actions/colony-action.ts");
/* harmony import */ var _colony_actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colony-actions.service */ "./src/app/colony-actions/colony-actions.service.ts");
/* harmony import */ var _dia_semana__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dia-semana */ "./src/app/colony-actions/dia-semana.ts");






var ColonyActionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ColonyActionsComponent, _super);
    function ColonyActionsComponent(colonyActionsService) {
        var _this = _super.call(this) || this;
        _this.colonyActionsService = colonyActionsService;
        _this.TIME_NOW = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 0);
        _this.TIMESTAMP_PLUS = 60 * 60 * 1000;
        _this.TIME_05 = 5 * 60 * 1000;
        _this.TIME_59 = 59 * 60 * 1000 + 59 * 1000;
        _this.LOCAL_TIMEZONE_STRING = new Date().toTimeString().substr(new Date().toTimeString().search('GMT'));
        _this.LOCAL_TIMEZONE_OFFSET = -new Date().getTimezoneOffset() * 60 * 1000;
        _this.diaSelecionadoId = "";
        _this.timezoneOffset = "";
        _this.eventoSelecionadoId = "";
        _this.diaSelecionado = _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"].generate();
        _this.eventoSelecionado = _colony_action__WEBPACK_IMPORTED_MODULE_3__["ColonyAction"].generate();
        _this.timezoneSelecionado = 0;
        return _this;
    }
    Object.defineProperty(ColonyActionsComponent.prototype, "dias", {
        get: function () {
            return this.colonyActionsService.dias;
        },
        enumerable: true,
        configurable: true
    });
    ColonyActionsComponent.prototype.selecionaDia = function () {
        this.diaSelecionado = this.colonyActionsService.diasIndex.get(this.diaSelecionadoId);
    };
    ColonyActionsComponent.prototype.selecionarEvento = function (evento) {
        this.eventoSelecionado = evento.clone();
    };
    ColonyActionsComponent.prototype.selecionaTimezone = function () {
        this.timezoneSelecionado = this.timezoneOffset ? parseInt(this.timezoneOffset) : 0;
    };
    ColonyActionsComponent.prototype.getDateLine = function (sequencial) {
        var start = new Date(this.TIME_NOW.getTime() + this.timezoneSelecionado + (sequencial * this.TIMESTAMP_PLUS) + this.TIME_05).toTimeString().slice(0, 5);
        var end = new Date(this.TIME_NOW.getTime() + this.timezoneSelecionado + (sequencial * this.TIMESTAMP_PLUS) + this.TIME_59).toTimeString().slice(0, 5);
        return start + " ~ " + end;
    };
    ColonyActionsComponent.prototype.getDiaIdAtual = function () {
        var d = new Date(new Date().getTime() - this.LOCAL_TIMEZONE_OFFSET).getDay();
        if (d > 0)
            return d;
        return 7;
    };
    ColonyActionsComponent.prototype.isInnerEvent = function (sequencial) {
        if (this.diaSelecionadoId != this.getDiaIdAtual())
            return false;
        var start = new Date(this.TIME_NOW.getTime() + this.LOCAL_TIMEZONE_OFFSET + (sequencial * this.TIMESTAMP_PLUS));
        var end = new Date(this.TIME_NOW.getTime() + this.LOCAL_TIMEZONE_OFFSET + (sequencial * this.TIMESTAMP_PLUS) + this.TIME_59);
        return new Date().getTime() >= start.getTime() && new Date().getTime() <= end.getTime();
    };
    ColonyActionsComponent.prototype.posInicializa = function () {
        this.editavel = true;
        this.diaSelecionadoId = this.getDiaIdAtual();
        this.selecionaDia();
        console.log(this.colonyActionsService.diasIndex);
    };
    ColonyActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timezoneOffset = this.LOCAL_TIMEZONE_OFFSET;
        this.selecionaTimezone();
        if (this.colonyActionsService.flagDadosObtidos) {
            this.posInicializa();
        }
        else {
            this.colonyActionsService.getColonyActionsList()
                .then(function (r) {
                _this.posInicializa();
            })
                .catch(function (r) {
                alert("Failed to get the Colony Actions list");
                var erro = _this.erroHttp(r);
            });
        }
    };
    ColonyActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colony-actions',
            template: __webpack_require__(/*! ./colony-actions.component.html */ "./src/app/colony-actions/colony-actions.component.html"),
            styles: [__webpack_require__(/*! ./colony-actions.component.less */ "./src/app/colony-actions/colony-actions.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_colony_actions_service__WEBPACK_IMPORTED_MODULE_4__["ColonyActionsService"]])
    ], ColonyActionsComponent);
    return ColonyActionsComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/colony-actions/colony-actions.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/colony-actions/colony-actions.service.ts ***!
  \**********************************************************/
/*! exports provided: ColonyActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColonyActionsService", function() { return ColonyActionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _colony_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colony-action */ "./src/app/colony-actions/colony-action.ts");
/* harmony import */ var _dia_semana__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dia-semana */ "./src/app/colony-actions/dia-semana.ts");






var ColonyActionsService = /** @class */ (function () {
    function ColonyActionsService(http) {
        this.http = http;
        this.dias = [
            new _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"](1, "Monday", "Upgrade Building"),
            new _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"](2, "Tuesday", "Gather Resource"),
            new _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"](3, "Wednesday", "Research Evolution"),
            new _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"](4, "Thursday", "Strengthen Special Ant"),
            new _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"](5, "Friday", "Hatch Soldier"),
            new _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"](6, "Saturday", "Free Development"),
            new _dia_semana__WEBPACK_IMPORTED_MODULE_5__["DiaSemana"](7, "Sunday", "Warzone Expedition")
        ];
        this.colonyActions = [
        /*new ColonyAction(1,"Building + Building Speedup",1,0),
        new ColonyAction(2,"Building",1,1),
        new ColonyAction(3,"Hatching Speedup",1,2),
        new ColonyAction(4,"Building + Hatching Troops",1,3),
        new ColonyAction(5,"Building Speedup + Evolution Speedup + Hatching Speedup",1,4),
        new ColonyAction(6,"Building + Evolution + Hatching Speedup",1,5),
        new ColonyAction(7,"Building + Evolution + Hatching Troops",1,6),
        new ColonyAction(8,"Building",1,7),
        new ColonyAction(9,"Building",2,0),
        new ColonyAction(10,"Evolution + Evolution Speedups",2,1),
        new ColonyAction(11,"Building",2,2),
        new ColonyAction(12,"Use Any Speedup",2,3),
        new ColonyAction(13,"Building + Evolution",2,4),
        new ColonyAction(14,"Building + Building Speedup",2,5),
        new ColonyAction(15,"Building + Evolution + Hatching Troops",2,6),
        new ColonyAction(16,"Building + Evolution + Hatching Troops",2,7),
        new ColonyAction(17,"Building + Building Speedup",3,0),
        new ColonyAction(18,"Evolution + Evolution Speedup + Creature Remains",3,1),
        new ColonyAction(19,"Hatching Speedup",3,2),
        new ColonyAction(20,"Building + Evolution + Creature Remains",3,3),
        new ColonyAction(21,"Building + Hatching Troops",3,4),
        new ColonyAction(22,"Building Speedup + Evolution Speedup + Hatching Speedup + Creature Remains",3,5),
        new ColonyAction(23,"Building + Evolution + Hatching Speedup",3,6),
        new ColonyAction(24,"Building Speedup + Evolution Speedup + Hatching Speedup + Creature Remains",3,7),
        new ColonyAction(25,"Building + Building Speedup",4,0),
        new ColonyAction(26,"All Special Ant Development",4,1),
        new ColonyAction(27,"Building Speedup + Evolution Speedup + Hatching Speedup",4,2),
        new ColonyAction(28,"All Special Ant Development",4,3),
        new ColonyAction(29,"Use Any Speedup",4,4),
        new ColonyAction(30,"All Special Ant Development",4,5),
        new ColonyAction(31,"Building + Evolution + Hatching Speedup",4,6),
        new ColonyAction(32,"All Special Ant Development",4,7),
        new ColonyAction(33,"Use Any Speedup",5,0),
        new ColonyAction(34,"Building Speedup + Evolution Speedup + Hatching Speedup",5,1),
        new ColonyAction(35,"Building + Evolution + Hatching Speedup",5,2),
        new ColonyAction(36,"Hatching Speedup",5,3),
        new ColonyAction(37,"Building + Evolution + Hatching Speedup",5,4),
        new ColonyAction(38,"Building + Hatching Troops",5,5),
        new ColonyAction(39,"Evolution + Hatching Troops",5,6),
        new ColonyAction(40,"Use Any Speedup",5,7),
        new ColonyAction(41,"Use Any Speedup",6,0),
        new ColonyAction(42,"Evolution + Evolution Speedup",6,1),
        new ColonyAction(43,"Building + Building Speedup",6,2),
        new ColonyAction(44,"Use Hatching Speedup",6,3),
        new ColonyAction(45,"Building + Evolution + Hatching Speedup",6,4),
        new ColonyAction(46,"Building + Evolution + Hatching Speedup",6,5),
        new ColonyAction(47,"Building + Hatching Troops",6,6),
        new ColonyAction(48,"Evolution + Hatching Troops",6,7),
        new ColonyAction(49,"Building + Building Speedup",7,0),
        new ColonyAction(50,"All Insect Development + Use Any Speedup",7,1),
        new ColonyAction(51,"Building + Evolution + Hatching Speedup",7,2),
        new ColonyAction(52,"All Insect Development + Evolution + Evolution Speedup",7,3),
        new ColonyAction(53,"Use Any Speedup",7,4),
        new ColonyAction(54,"All Insect Development + Hatching Speedup",7,5),
        new ColonyAction(55,"Building + Evolution + Hatching Speedup",7,6),
        new ColonyAction(56,"All Insect Development + Use Any Speedup",7,7),*/
        ];
        this.diasIndex = null;
        this.flagDadosObtidos = false;
    }
    ColonyActionsService.prototype.getColonyActionsList = function () {
        var _this = this;
        return this.http.get("/colony-actions/list")
            .toPromise()
            .then(function (response) {
            _this.colonyActions = _colony_action__WEBPACK_IMPORTED_MODULE_4__["ColonyAction"].convertList(response.json());
            _this.obtemDias();
            _this.flagDadosObtidos = true;
            return _this.colonyActions;
        });
    };
    ColonyActionsService.prototype.obtemDias = function () {
        this.diasIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](this.dias);
        for (var i = 0; i < this.colonyActions.length; i++) {
            var ca = this.colonyActions[i];
            var di = this.diasIndex.get(ca.dia_semana_id);
            if (di) {
                if (di.colonyActionsIndex) {
                    di.colonyActionsIndex.add(ca);
                }
                else {
                    di.colonyActionsIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"]([ca], 'sequencial');
                }
            }
        }
    };
    ColonyActionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ColonyActionsService);
    return ColonyActionsService;
}());



/***/ }),

/***/ "./src/app/colony-actions/dia-semana.ts":
/*!**********************************************!*\
  !*** ./src/app/colony-actions/dia-semana.ts ***!
  \**********************************************/
/*! exports provided: DiaSemana */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaSemana", function() { return DiaSemana; });
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array-indexador */ "./src/app/array-indexador.ts");

var DiaSemana = /** @class */ (function () {
    function DiaSemana(id, day, event) {
        this.colonyActionsIndex = null;
        if (typeof id == "number") {
            this.id = id;
            this.day = day;
            this.event = event;
        }
        else {
            this.id = parseInt(id['id']);
            this.day = id['day'];
            this.event = id['event'];
        }
    }
    DiaSemana.prototype.setColonyActions = function (colonyActions) {
        this.colonyActionsIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_0__["ArrayIndexador"](colonyActions, 'sequencial');
    };
    DiaSemana.generate = function () {
        return new DiaSemana(0, "", "");
    };
    DiaSemana.prototype.clone = function () {
        return new DiaSemana(this.id, this.day, this.event);
    };
    return DiaSemana;
}());



/***/ }),

/***/ "./src/app/contribute/contribute.component.html":
/*!******************************************************!*\
  !*** ./src/app/contribute/contribute.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Contribute</div>\n    <div class=\"row\" style=\"margin-right: 0px; margin-left: 0px;\">\n        <div class=\"home\" style=\"width: 100%; padding: 10px; border-right: 1px solid #ddd\">\n            <label style=\"font-size: larger;\">This project is run by and for The Ant's fans! \n\t\t\t\tHelp support us so we can keep it running and develop new resources and features.</label>\n            <div class=\"div-bt-home\" style=\"background-image: url(/img/ant-like.png);\">\n                <a href=\"https://www.paypal.com/donate?hosted_button_id=BMAB3B483L7NN\" class=\"button\">\n                    <h2 class=\"icon-battle\">Paypal</h2>\n                    <p>Donate and make an ant happy!</p>\n                </a>\n            </div>\n            <div class=\"div-bt-home\" style=\"background-image: url(/img/ant-honey.png);\">\n                <a href=\"https://www.patreon.com/tutoants\" class=\"button\">\n                    <h2 class=\"icon-battle\">Patreon</h2>\n                    <p>Check out our Patreon page, where you can lend your support and receive some potential perks like a callout on the site and access to site library</p>\n                </a>\n            </div>\n\n            <label style=\"font-size: larger;\">Send your question, suggestion, compliment and/or complaint to us via email: <a href=\"mailto:contato@tutoants.online\">contato@tutoants.online</a></label>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contribute/contribute.component.less":
/*!******************************************************!*\
  !*** ./src/app/contribute/contribute.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyaWJ1dGUvY29udHJpYnV0ZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/contribute/contribute.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contribute/contribute.component.ts ***!
  \****************************************************/
/*! exports provided: ContributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeComponent", function() { return ContributeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContributeComponent = /** @class */ (function () {
    function ContributeComponent() {
    }
    ContributeComponent.prototype.ngOnInit = function () {
    };
    ContributeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contribute',
            template: __webpack_require__(/*! ./contribute.component.html */ "./src/app/contribute/contribute.component.html"),
            styles: [__webpack_require__(/*! ./contribute.component.less */ "./src/app/contribute/contribute.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContributeComponent);
    return ContributeComponent;
}());



/***/ }),

/***/ "./src/app/dados.service.ts":
/*!**********************************!*\
  !*** ./src/app/dados.service.ts ***!
  \**********************************/
/*! exports provided: DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return DadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var DadosService = /** @class */ (function () {
    function DadosService(http) {
        this.http = http;
        this.componentesHeight = [];
        this.componentesWidth = [];
        this.componentesPersonalizados = [];
        var _this = this;
        window.onresize = function () {
            _this.resizeFull();
        };
        jQuery(document).ready(function () {
            _this.resizeFull();
        });
    }
    DadosService.prototype.resizeTabelaLinhaFullHeight = function (redimensionavel) {
        var width = jQuery(window).height() - redimensionavel.base;
        if (redimensionavel.min != null && width < redimensionavel.min)
            width = redimensionavel.min;
        if (redimensionavel.max != null && width > redimensionavel.max)
            width = redimensionavel.max;
        if (jQuery(redimensionavel.elemento).hasClass('modal-body'))
            jQuery(redimensionavel.elemento).css('max-height', width);
        else
            jQuery(redimensionavel.elemento).css('height', width);
    };
    DadosService.prototype.resizeTabelaLinhaFullWidth = function (redimensionavel) {
        if (jQuery(window).width() >= 1200) {
            jQuery(redimensionavel.elemento).css('width', 780 - redimensionavel.base);
        }
        else if (jQuery(window).width() > 990) {
            jQuery(redimensionavel.elemento).css('width', 646 - redimensionavel.base);
        }
        else if (jQuery(window).width() > 748) {
            jQuery(redimensionavel.elemento).css('width', 750 - redimensionavel.base);
        }
        else
            jQuery(redimensionavel.elemento).css('width', jQuery(window).width() - redimensionavel.base);
    };
    DadosService.prototype.resizePersonalizado = function (redimensionavel) {
        var width = jQuery(window).height() - redimensionavel.base;
        if (redimensionavel.min != null && width < redimensionavel.min)
            width = redimensionavel.min;
        if (redimensionavel.max != null && width > redimensionavel.max)
            width = redimensionavel.max;
        redimensionavel.personalizado.parametros.tamanho = width;
        redimensionavel.executarPersonalizado();
    };
    DadosService.prototype.resizeFull = function () {
        var i;
        for (i = 0; i < this.componentesHeight.length; i++) {
            this.resizeTabelaLinhaFullHeight(this.componentesHeight[i]);
        }
        for (i = 0; i < this.componentesWidth.length; i++) {
            this.resizeTabelaLinhaFullWidth(this.componentesWidth[i]);
        }
        for (i = 0; i < this.componentesPersonalizados.length; i++) {
            this.resizePersonalizado(this.componentesPersonalizados[i]);
        }
    };
    DadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DadosService);
    return DadosService;
}());



/***/ }),

/***/ "./src/app/formatador-data.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/formatador-data.pipe.ts ***!
  \*****************************************/
/*! exports provided: FormatadorDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatadorDataPipe", function() { return FormatadorDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatadorDataPipe = /** @class */ (function () {
    function FormatadorDataPipe() {
    }
    FormatadorDataPipe.prototype.transform = function (value, time) {
        var date = new Date(value);
        return date.toLocaleDateString() + (time ? " " + date.toLocaleTimeString().substring(0, 5) : '');
    };
    FormatadorDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatadorData'
        })
    ], FormatadorDataPipe);
    return FormatadorDataPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\t<div class=\"row\" style=\"margin-right: 0px; margin-left: 0px;\">\n\t\t<div class=\"home\" style=\"width: 100%; padding: 10px; border-right: 1px solid #ddd\">\n\t\t\t<label style=\"font-size: larger;\">Welcome to TutoAnts site! We're an tool for helping on play the game \"The\n\t\t\t\tAnts: Underground Kingdom\".\n\t\t\t\tCheck out the links below to get started</label>\n\n\t\t\t<div class=\"div-bt-home\" style=\"background-image: url(/img/b-colony.jpg);\">\n\t\t\t\t<a routerLink=\"/colony-actions\" class=\"button\">\n\t\t\t\t\t<h2 class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\"><span>Colony Action Event Schedule</span></h2>\n\t\t\t\t\t<p>See all Colony Action Events of Week </p>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"div-bt-home\" style=\"background-image: url(/img/b-tables.jpg);\">\n\t\t\t\t<a routerLink=\"/tables\" class=\"button\">\n\t\t\t\t\t<h2 class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"><span>Information Tables</span></h2>\n\t\t\t\t\t<p>See a list with some tables that contain useful information on the game</p>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"div-bt-home\" style=\"background-image: url(/img/b-plunder.jpg);\">\n\t\t\t\t<a routerLink=\"/plunder-calculator\" class=\"button\">\n\t\t\t\t\t<h2 class=\"glyphicon glyphicon-leaf\" aria-hidden=\"true\"><span>Plunder Calculator [BETA]</span></h2>\n\t\t\t\t\t<p>Simulate the amount of resources plundered in attacks</p>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"div-bt-home\" style=\"background-image: url(/img/b-contribute.jpg);\">\n\t\t\t\t<a routerLink=\"/contribute\" class=\"button\">\n\t\t\t\t\t<h2 class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"><span>Contribute</span></h2>\n\t\t\t\t\t<p>Help us grow!</p>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.less":
/*!******************************************!*\
  !*** ./src/app/home/home.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\n\t<li class=\"dropdown\">\n\t\t<a routerLink=\"/colony-actions\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\tColony Actions\n\t\t</a>\n\t</li>\n\t<li class=\"dropdown\">\n\t\t<a routerLink=\"/tables\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\tInformation Tables\n\t\t</a>\n\t</li>\n\t<li class=\"dropdown\">\n\t\t<a routerLink=\"/plunder-calculator\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\tPlunder Calculator [BETA]\n\t\t</a>\n\t</li>\n\t<li class=\"dropdown\">\n\t\t<a routerLink=\"/contribute\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\tContribute\n\t\t</a>\n\t</li>\n\t<ng-container *ngIf=\"permissao && permissao != 'INATIVO'\">\n\t\t<li class=\"dropdown\">\n\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\tLinks\n\t\t\t</a>\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t<ng-container *ngIf=\"permissao == 'USUARIO' || permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a routerLink=\"/\">\n\t\t\t\t\t\t\tPara User\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a routerLink=\"/\">\n\t\t\t\t\t\t\tPara Admin\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</li>\n\t</ng-container>\n\t<ng-container *ngIf=\"permissao && permissao == 'ADMINISTRADOR'\">\n\t\t<li class=\"dropdown\">\n\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\tAdministração \n\t\t\t</a>\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t<li>\n\t\t\t\t\t<a routerLink=\"/users\">\n\t\t\t\t\t\tUsuários\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ng-container>\n\t&nbsp;\n</ul>"

/***/ }),

/***/ "./src/app/menu/menu.component.less":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        var divHiddens = document.getElementById('hiddens');
        var hAppName = document.getElementById('hidden-app-name');
        var hPermissao = document.getElementById('hidden-permissao');
        var hUsuarioHackAdmin = document.getElementById('hidden-usuario-hack-admin');
        var hUsername = document.getElementById('hidden-username');
        var hIsLogado = document.getElementById('hidden-is-logado');
        this.appName = hAppName ? hAppName.value : null;
        this.permissao = hPermissao ? hPermissao.value : null;
        this.usuarioHackAdmin = hUsuarioHackAdmin ? hUsuarioHackAdmin.value == "1" : false;
        this.username = hUsername ? hUsername.value : null;
        this.isLogado = hIsLogado ? hIsLogado.value == "1" : false;
        divHiddens.remove();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.less */ "./src/app/menu/menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/painel/painel.component.html":
/*!**********************************************!*\
  !*** ./src/app/painel/painel.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Painel do Usuário</div>\n\t\t\t<div style=\"margin: 15px;\">\t\n\t\t\t\t<div class=\"alert alert-info  alert-dismissible show\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"top: -9px;\" (click)=\"aviso = '';\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<label for=\"login-edit\">Login</label>\n\t\t\t\t<input id=\"login-edit\" type=\"text\" [value]=\"usuario.login\" class=\"form-control\" name=\"login-edit\" autocomplete=\"login\" size=\"60\" disabled>\n\t\t\t\t<p></p>\t\n\n\t\t\t\t<label for=\"name-edit\">Nome</label>\n\t\t\t\t<input id=\"name-edit\" type=\"text\" [(ngModel)]=\"usuario.name\" class=\"form-control\" name=\"name-edit\" autocomplete=\"name\" size=\"60\" [disabled]=\"!editandoFlag || !editavel\">\n\t\t\t\t<p></p>\t\t\n\n\t\t\t\t<label for=\"email-edit\">Endereço de E-Mail</label>\n\t\t\t\t<input id=\"email-edit\" type=\"email\" [(ngModel)]=\"usuario.email\" class=\"form-control\" name=\"email-edit\" autocomplete=\"email\" size=\"60\" [disabled]=\"!editandoFlag || !editavel\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button *ngIf=\"!editandoFlag\" type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"editandoFlag = true;\"  [disabled]=\"!editavel\">Editar</button>\n\t\t\t\t<button *ngIf=\"editandoFlag\" type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"editarUsuario()\" [disabled]=\"!editavel\">Confirmar</button>\n\t\t\t\t<button *ngIf=\"editandoFlag\" type=\"button\" class=\"btn btn-secondary botao-barra\" (click)=\"editandoFlag = false;\"  [disabled]=\"!editavel\">Cancelar</button>\n\t\t\t\t<button *ngIf=\"!editandoFlag\" type=\"button\" class=\"btn btn-warning\" [disabled]=\"!editavel\" style=\"float: right;\" data-toggle=\"modal\" data-target=\"#dialogResetSenha\">Redefinir Senha</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogResetSenha\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogResetSenhaTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden; width: 330px;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Redefinir Senha</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" >\n\t\t\t\t<label for=\"password-edit\">Senha</label>\n\t\t\t\t<input id=\"password-edit\" type=\"password\" [(ngModel)]=\"usuario.password\" class=\"form-control\"\n\t\t\t\t\tname=\"password\" autocomplete=\"nova-senha\">\n\n\t\t\t\t<label for=\"password-confirm-edit\">Confirmar Senha</label>\n\t\t\t\t<input id=\"password-confirm-edit\" type=\"password\" [(ngModel)]=\"usuario.password_confirmation\"\n\t\t\t\t\tclass=\"form-control\" name=\"password_confirmation\" autocomplete=\"nova-senha\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"redefinirSenha()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Confirmar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/painel/painel.component.less":
/*!**********************************************!*\
  !*** ./src/app/painel/painel.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC9wYWluZWwuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _users_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/user */ "./src/app/users/user.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/users.service */ "./src/app/users/users.service.ts");





var PainelComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PainelComponent, _super);
    function PainelComponent(usuarioService) {
        var _this = _super.call(this) || this;
        _this.usuarioService = usuarioService;
        _this.usuario = _users_user__WEBPACK_IMPORTED_MODULE_3__["User"].generate();
        _this.editandoFlag = false;
        return _this;
    }
    PainelComponent.prototype.editarUsuario = function () {
        var _this = this;
        this.editavel = false;
        this.usuarioService.editarUsuario(this.usuario)
            .then(function (user) {
            _this.editandoFlag = false;
            _this.editavel = true;
            _this.usuario = user;
            _this.aviso = "Usuário Atualizado!";
            _this.erroAviso = false;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    PainelComponent.prototype.redefinirSenha = function () {
        var _this = this;
        if (this.usuario.password == null || this.usuario.password_confirmation == null) {
            alert("Uma senha deve ser informada!");
            return;
        }
        if (this.usuario.password != this.usuario.password_confirmation) {
            alert("Senhas não Conferem!");
            return;
        }
        this.editavel = false;
        this.usuarioService.redefinirSenha(this.usuario)
            .then(function (response) {
            jQuery('#dialogResetSenha').modal('hide');
            _this.editavel = true;
            alert("Senha Alterada!");
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    PainelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.usuarioLogado()
            .then(function (user) {
            _this.usuario = user;
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            _this.aviso = _this.erroHttp(response);
            alert(_this.erroHttp(response));
            _this.erroAviso = true;
            console.log(response);
        });
    };
    PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel',
            template: __webpack_require__(/*! ./painel.component.html */ "./src/app/painel/painel.component.html"),
            styles: [__webpack_require__(/*! ./painel.component.less */ "./src/app/painel/painel.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], PainelComponent);
    return PainelComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/plunder/classe.ts":
/*!***********************************!*\
  !*** ./src/app/plunder/classe.ts ***!
  \***********************************/
/*! exports provided: Classe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classe", function() { return Classe; });
var Classe;
(function (Classe) {
    Classe["CULTIVATOR"] = "CULTIVATOR";
    Classe["RAIDER"] = "RAIDER";
    Classe["HERDER"] = "HERDER";
})(Classe || (Classe = {}));


/***/ }),

/***/ "./src/app/plunder/plunder-result.ts":
/*!*******************************************!*\
  !*** ./src/app/plunder/plunder-result.ts ***!
  \*******************************************/
/*! exports provided: PlunderResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlunderResult", function() { return PlunderResult; });
var PlunderResult = /** @class */ (function () {
    function PlunderResult(meat, plant, soil, sand, honeydew) {
        if (typeof meat == "number") {
            this.meat = meat;
            this.plant = plant;
            this.soil = soil;
            this.sand = sand;
            this.honeydew = honeydew ? honeydew : 0;
        }
        else {
            this.meat = parseInt(meat['meat']);
            this.plant = parseInt(meat['plant']);
            this.soil = parseInt(meat['soil']);
            this.sand = parseInt(meat['sand']);
            this.honeydew = meat['honeydew'] ? parseInt(meat['honeydew']) : 0;
        }
    }
    PlunderResult.generate = function () {
        return new PlunderResult(0, 0, 0, 0, 0);
    };
    PlunderResult.prototype.clone = function () {
        return new PlunderResult(this.meat, this.plant, this.soil, this.sand, this.honeydew);
    };
    return PlunderResult;
}());



/***/ }),

/***/ "./src/app/plunder/plunder.component.html":
/*!************************************************!*\
  !*** ./src/app/plunder/plunder.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        Plunder Calculator [BETA]\n        <button style=\"float: right;\" title=\"Help?\" data-toggle=\"modal\" data-target=\"#dialogAjuda\" class=\"btn btn-info botao-tooltip\"><span class=\"glyphicon glyphicon-question-sign\"></span></button>\n    </div>\n    <div class=\"row\" style=\"margin-right: 0px; margin-left: 0px;\">\n        <div style=\"width: 100%; padding: 10px; border-right: 1px solid #ddd\">\n            <div>\n                <div class=\"row\">\n                    <div class=\"col-md-4\" style=\"margin: auto;\">\n                        <label for=\"classeAtk\" class=\"form-label\">Attacking Class:</label>\n                        <select id=\"classeAtk\" [(ngModel)]=\"plunder.classeAtk\" class=\"form-control\">\n\t\t\t\t\t\t\t<option [value]=\"null\"> -- Select -- </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let classe of classes\" [value]=\"classe\">{{classe}}</option>\n\t\t\t\t\t\t</select>\n                    </div>\n                </div>\n                <p></p>\n                <div class=\"row\">\n                    <div class=\"col-md-4\" style=\"margin: auto;\">\n                        <label for=\"classeDef\" class=\"form-label\">Defending Class:</label>\n                        <select id=\"classeDef\" [(ngModel)]=\"plunder.classeDef\" class=\"form-control\">\n\t\t\t\t\t\t\t<option [value]=\"null\"> -- Select -- </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let classe of classes\" [value]=\"classe\">{{classe}}</option>\n\t\t\t\t\t\t</select>\n                    </div>\n                </div>\n                <p></p>\n                <div class=\"row\">\n                    <div class=\"col-md-4\" style=\"margin: auto;\">\n                        <label for=\"diffLevel\" class=\"form-label\">Level Difference:</label>\n                        <select id=\"diffLevel\" [(ngModel)]=\"plunder.diffLevel\" class=\"form-control\">\n\t\t\t\t\t\t\t<option [value]=\"0\"> -- Select -- </option>\n\t\t\t\t\t\t\t<option [value]=\"2\">&le; 2</option>\n\t\t\t\t\t\t\t<option [value]=\"3\">= 3</option>\n\t\t\t\t\t\t\t<option [value]=\"4\">= 4</option>\n\t\t\t\t\t\t\t<option [value]=\"5\">= 5</option>\n\t\t\t\t\t\t\t<option [value]=\"6\">&ge; 6</option>\n\t\t\t\t\t\t</select>\n                    </div>\n                </div>\n                <p></p>\n                <div class=\"row\">\n                    <div class=\"col-md-4\" style=\"margin: auto;\">\n                        <label for=\"carga\" class=\"form-label\">Storage Capacity of March Unit:</label>\n                        <input type=\"number\" class=\"form-control\" id=\"carga\" [(ngModel)]=\"plunder.carga\" placeholder=\"00000000\">\n                    </div>\n                </div>\n                <p></p>\n                <div class=\"row\">\n                    <div class=\"col-md-4\" style=\"margin: auto;\">\n                        <label for=\"scout-check\" class=\"form-label\">Scout?</label>\n                        <input id=\"scout-check\" [(ngModel)]=\"plunder.hasScout\" style=\"margin-left: 10px;\" type=\"checkbox\">\n                    </div>\n                </div>\n                <p></p>\n                <div *ngIf=\"plunder.hasScout\" style=\"overflow-x: auto;\">\n                    <table class=\"table\">\n                        <colgroup>\n                            <col width=\"115px\" />\n                            <col width=\"115px\" />\n                            <col width=\"115px\" />\n                            <col width=\"115px\" />\n                            <col width=\"130px\" *ngIf=\"honeydewEnable\" />\n                        </colgroup>\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th>SC. MEAT</th>\n                                <th>SC. PLANT</th>\n                                <th>SC. WET SOIL</th>\n                                <th>SC. SAND</th>\n                                <th *ngIf=\"honeydewEnable\">SC. HONEYDEW</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td><input type=\"number\" class=\"form-control\" [(ngModel)]=\"plunder.scoutMeat\" placeholder=\"00000000\"></td>\n                                <td><input type=\"number\" class=\"form-control\" [(ngModel)]=\"plunder.scoutPlant\" placeholder=\"00000000\"></td>\n                                <td><input type=\"number\" class=\"form-control\" [(ngModel)]=\"plunder.scoutSoil\" placeholder=\"00000000\"></td>\n                                <td><input type=\"number\" class=\"form-control\" [(ngModel)]=\"plunder.scoutSand\" placeholder=\"00000000\"></td>\n                                <td *ngIf=\"honeydewEnable\"><input type=\"number\" class=\"form-control\" [(ngModel)]=\"plunder.scoutHoneydew\" placeholder=\"00000000\"></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <p></p>\n                </div>\n                <div style=\"text-align: center;\">\n                    <button style=\"width: 150px;\" class=\"btn\" [ngClass]=\"{'btn-success': isValid() == '', 'btn-danger': isValid() != ''}\" (click)=\"calcPlunder()\">Calculate</button>\n                </div>\n            </div>\n            <p></p>\n            <div *ngIf=\"plunderResults.length\">\n                <label class=\"form-label\">Plunder Result:</label>\n                <table class=\"table\" style=\"table-layout: auto;\">\n                    <colgroup>\n                        <col />\n                        <col />\n                        <col />\n                        <col />\n                        <col *ngIf=\"honeydewEnable\" />\n                    </colgroup>\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th>MEAT</th>\n                            <th>PLANT</th>\n                            <th>WET SOIL</th>\n                            <th>SAND</th>\n                            <th *ngIf=\"honeydewEnable\">HONEYDEW</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let pr of plunderResults\">\n                            <td>{{pr.meat}}</td>\n                            <td>{{pr.plant}}</td>\n                            <td>{{pr.soil}}</td>\n                            <td>{{pr.sand}}</td>\n                            <td *ngIf=\"honeydewEnable\">{{pr.honeydew}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <label>* these values ​​are approximate</label>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogAjuda\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <b>Help Me (Plunder Calculator [BETA])</b>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <b>Attacking Class</b><br> Your class <br><br>\n                <b>Defending Class</b><br> class of the anthill you are attacking <br><br>\n                <b>Level Difference</b><br> difference in levels between attacking and defending anthill <br><br>\n                <b>Storage Capacity of March Unit</b> <br> Enter your Storage capacity number in full<br> examples: <br>\n                <ul>\n                    <li>if in game you see <b>18.5K</b>, then enter <b>18500</b></li>\n                    <li>if in game you see <b>6.2M</b>, then enter <b>6200000</b></li>\n                </ul><br>\n                <b>Scout</b> <br> If \"scout\" is selected, then enter the number of each resource that appears in the Scout Report;<br> If \"scout\" is not selected, it will be considered as the maximum possible looting capacity of each resource.\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plunder/plunder.component.less":
/*!************************************************!*\
  !*** ./src/app/plunder/plunder.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdW5kZXIvcGx1bmRlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/plunder/plunder.component.ts":
/*!**********************************************!*\
  !*** ./src/app/plunder/plunder.component.ts ***!
  \**********************************************/
/*! exports provided: PlunderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlunderComponent", function() { return PlunderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _classe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classe */ "./src/app/plunder/classe.ts");
/* harmony import */ var _plunder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plunder */ "./src/app/plunder/plunder.ts");
/* harmony import */ var _plunder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plunder.service */ "./src/app/plunder/plunder.service.ts");






var PlunderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlunderComponent, _super);
    function PlunderComponent(plunderService) {
        var _this = _super.call(this) || this;
        _this.plunderService = plunderService;
        _this.plunder = _plunder__WEBPACK_IMPORTED_MODULE_4__["Plunder"].generate();
        _this.honeydewEnable = false;
        return _this;
    }
    Object.defineProperty(PlunderComponent.prototype, "classes", {
        get: function () {
            return [_classe__WEBPACK_IMPORTED_MODULE_3__["Classe"].CULTIVATOR, _classe__WEBPACK_IMPORTED_MODULE_3__["Classe"].RAIDER, _classe__WEBPACK_IMPORTED_MODULE_3__["Classe"].HERDER];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlunderComponent.prototype, "plunderResults", {
        get: function () {
            return this.plunderService.plunderResults;
        },
        set: function (plunderResults) {
            this.plunderService.plunderResults = plunderResults;
        },
        enumerable: true,
        configurable: true
    });
    PlunderComponent.prototype.calcPlunder = function () {
        var isValid = this.isValid();
        if (isValid != "") {
            alert("Fill in the following fields:" + isValid);
            return;
        }
        this.plunderService.calcPlunder(this.plunder)
            .then(function (r) {
            console.log(r);
        })
            .catch(function (r) {
            console.log(r);
        });
    };
    PlunderComponent.prototype.isValid = function () {
        var ret = "";
        if (!this.plunder.classeAtk)
            ret += "\n- Attacking Class";
        if (!this.plunder.classeDef)
            ret += "\n- Defending Class";
        if (!this.plunder.diffLevel)
            ret += "\n- Level Difference";
        if (!this.plunder.carga)
            ret += "\n- Storage Capacity of March Unit";
        if (this.plunder.hasScout && this.plunder.scoutMeat === null)
            ret += "\n- Sc. Meat";
        if (this.plunder.hasScout && this.plunder.scoutPlant === null)
            ret += "\n- Sc. Plant";
        if (this.plunder.hasScout && this.plunder.scoutSoil === null)
            ret += "\n- Sc. Wet Soil";
        if (this.plunder.hasScout && this.plunder.scoutSand === null)
            ret += "\n- Sc. Sand";
        if (this.honeydewEnable && this.plunder.hasScout && this.plunder.scoutHoneydew === null)
            ret += "\n- Sc. Honeydew";
        return ret;
    };
    PlunderComponent.prototype.resetaCampos = function () {
        this.plunder = _plunder__WEBPACK_IMPORTED_MODULE_4__["Plunder"].generate();
        this.plunder.carga = null;
        this.plunder.scoutMeat = null;
        this.plunder.scoutPlant = null;
        this.plunder.scoutSoil = null;
        this.plunder.scoutSand = null;
        this.plunder.scoutHoneydew = null;
        this.plunderResults = [];
    };
    PlunderComponent.prototype.ngOnInit = function () {
        this.resetaCampos();
    };
    PlunderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plunder',
            template: __webpack_require__(/*! ./plunder.component.html */ "./src/app/plunder/plunder.component.html"),
            styles: [__webpack_require__(/*! ./plunder.component.less */ "./src/app/plunder/plunder.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_plunder_service__WEBPACK_IMPORTED_MODULE_5__["PlunderService"]])
    ], PlunderComponent);
    return PlunderComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/plunder/plunder.service.ts":
/*!********************************************!*\
  !*** ./src/app/plunder/plunder.service.ts ***!
  \********************************************/
/*! exports provided: PlunderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlunderService", function() { return PlunderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _plunder_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plunder-result */ "./src/app/plunder/plunder-result.ts");




var PlunderService = /** @class */ (function () {
    function PlunderService(http) {
        this.http = http;
        this.plunderResults = [];
    }
    PlunderService.prototype.calcPlunder = function (p) {
        var _this = this;
        return this.http.post('/plunder-calculator', p).toPromise()
            .then(function (r) {
            var arr = r.json();
            _this.plunderResults = [];
            for (var i = 0; i < arr.length; i++) {
                _this.plunderResults.push(new _plunder_result__WEBPACK_IMPORTED_MODULE_3__["PlunderResult"](arr[i]));
            }
            return _this.plunderResults;
        });
    };
    PlunderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PlunderService);
    return PlunderService;
}());



/***/ }),

/***/ "./src/app/plunder/plunder.ts":
/*!************************************!*\
  !*** ./src/app/plunder/plunder.ts ***!
  \************************************/
/*! exports provided: Plunder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plunder", function() { return Plunder; });
var Plunder = /** @class */ (function () {
    function Plunder(classeAtk, classeDef, diffLevel, carga, hasScout, scoutMeat, scoutPlant, scoutSoil, scoutSand, scoutHoneydew) {
        if (typeof classeAtk == "object" && classeAtk != null) {
            this.classeAtk = classeAtk['classeAtk'];
            this.classeDef = classeAtk['classeDef'];
            this.diffLevel = parseInt(classeAtk['diffLevel']);
            this.carga = parseInt(classeAtk['carga']);
            this.hasScout = classeAtk['hasScout'] ? classeAtk['hasScout'] : false;
            this.scoutMeat = parseInt(classeAtk['scoutMeat']);
            this.scoutPlant = parseInt(classeAtk['scoutPlant']);
            this.scoutSoil = parseInt(classeAtk['scoutSoil']);
            this.scoutSand = parseInt(classeAtk['scoutSand']);
            this.scoutHoneydew = parseInt(classeAtk['scoutHoneydew']);
        }
        else {
            this.classeAtk = classeAtk;
            this.classeDef = classeDef;
            this.diffLevel = diffLevel;
            this.carga = carga;
            this.hasScout = hasScout;
            this.scoutMeat = scoutMeat;
            this.scoutPlant = scoutPlant;
            this.scoutSoil = scoutSoil;
            this.scoutSand = scoutSand;
            this.scoutHoneydew = scoutHoneydew ? scoutHoneydew : 0;
        }
    }
    Plunder.generate = function () {
        return new Plunder(null, null, 0, 0, false, 0, 0, 0, 0);
    };
    Plunder.prototype.clone = function () {
        return new Plunder(this.classeAtk, this.classeDef, this.diffLevel, this.carga, this.hasScout, this.scoutMeat, this.scoutPlant, this.scoutSoil, this.scoutSand, this.scoutHoneydew);
    };
    return Plunder;
}());



/***/ }),

/***/ "./src/app/redimensionar.directive.ts":
/*!********************************************!*\
  !*** ./src/app/redimensionar.directive.ts ***!
  \********************************************/
/*! exports provided: RedimensionarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedimensionarDirective", function() { return RedimensionarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _redimensionavel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redimensionavel */ "./src/app/redimensionavel.ts");




var RedimensionarDirective = /** @class */ (function () {
    function RedimensionarDirective(el, dadosService) {
        this.el = el;
        this.dadosService = dadosService;
        this.redimensionavel = null;
        jQuery(this.el.nativeElement).addClass('linha-full-height');
    }
    Object.defineProperty(RedimensionarDirective.prototype, "redimensionar", {
        get: function () {
            return this._redimensionar;
        },
        set: function (value) {
            this._redimensionar = value;
            this.processa();
        },
        enumerable: true,
        configurable: true
    });
    RedimensionarDirective.prototype.processa = function () {
        if (this.redimensionavel == null) {
            this.redimensionavel = new _redimensionavel__WEBPACK_IMPORTED_MODULE_3__["Redimensionavel"](this.el.nativeElement, this.redimensionar);
            this.dadosService.componentesHeight.push(this.redimensionavel);
        }
        else
            this.redimensionavel.base = this.redimensionar;
        this.dadosService.resizeFull();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], RedimensionarDirective.prototype, "redimensionar", null);
    RedimensionarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[redimensionar]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _dados_service__WEBPACK_IMPORTED_MODULE_2__["DadosService"]])
    ], RedimensionarDirective);
    return RedimensionarDirective;
}());



/***/ }),

/***/ "./src/app/redimensionavel.ts":
/*!************************************!*\
  !*** ./src/app/redimensionavel.ts ***!
  \************************************/
/*! exports provided: Redimensionavel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redimensionavel", function() { return Redimensionavel; });
var Redimensionavel = /** @class */ (function () {
    function Redimensionavel(elemento, base, min, max, personalizado) {
        this.elemento = elemento;
        this.base = parseInt(base);
        this.min = min != null ? parseInt(min) : null;
        this.max = max != null ? parseInt(max) : null;
        this.personalizado = personalizado;
    }
    Redimensionavel.prototype.executarPersonalizado = function () {
        this.personalizado.funcao(this.personalizado.parametros);
    };
    return Redimensionavel;
}());



/***/ }),

/***/ "./src/app/tables/special-ant-exp/special-ant-exp.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/tables/special-ant-exp/special-ant-exp.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\t<!--div class=\"panel-heading\">Special Ant Exp Table</div-->\n\t<div class=\"row\" style=\"margin-right: 0px; margin-left: 0px;\">\n\t\t<div style=\"width: 100%; padding: 10px; border-right: 1px solid #ddd\">\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<div style=\"overflow-x: auto;\">\n\t\t\t\t\t<table class=\"table\" data-toggle=\"table\" style=\"table-layout: auto;\">\n\t\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t\t<col />\n\t\t\t\t\t\t\t<col />\n\t\t\t\t\t\t\t<col />\n\t\t\t\t\t\t</colgroup>\n\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>LVL</th>\n\t\t\t\t\t\t\t\t<th title=\"XP\">XP</th>\n\t\t\t\t\t\t\t\t<th title=\"TOTAL XP\">TOTAL XP</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let xp of specialAntExpTable\">\n\t\t\t\t\t\t\t\t<td>{{xp.id}} &gt;&gt; {{xp.id+1}} </td>\n\t\t\t\t\t\t\t\t<td>{{xp.xp}}</td>\n\t\t\t\t\t\t\t\t<td>{{xp.xp_total}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t</div>\n</div>\n<p></p>\n<div>\n\t<label class=\"table-infos\" style=\"float: right; padding: 5px;\">© [PYM]RubensM S37, [PYM]Arthor S37</label>\n</div>"

/***/ }),

/***/ "./src/app/tables/special-ant-exp/special-ant-exp.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/tables/special-ant-exp/special-ant-exp.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9zcGVjaWFsLWFudC1leHAvc3BlY2lhbC1hbnQtZXhwLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/tables/special-ant-exp/special-ant-exp.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tables/special-ant-exp/special-ant-exp.component.ts ***!
  \*********************************************************************/
/*! exports provided: SpecialAntExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialAntExpComponent", function() { return SpecialAntExpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _special_ant_exp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-ant-exp.service */ "./src/app/tables/special-ant-exp/special-ant-exp.service.ts");



var SpecialAntExpComponent = /** @class */ (function () {
    function SpecialAntExpComponent(specialAntExpService) {
        this.specialAntExpService = specialAntExpService;
    }
    Object.defineProperty(SpecialAntExpComponent.prototype, "specialAntExpTable", {
        get: function () {
            return this.specialAntExpService.specialAntExpTable;
        },
        enumerable: true,
        configurable: true
    });
    SpecialAntExpComponent.prototype.ngOnInit = function () {
    };
    SpecialAntExpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-special-ant-exp',
            template: __webpack_require__(/*! ./special-ant-exp.component.html */ "./src/app/tables/special-ant-exp/special-ant-exp.component.html"),
            styles: [__webpack_require__(/*! ./special-ant-exp.component.less */ "./src/app/tables/special-ant-exp/special-ant-exp.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_special_ant_exp_service__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExpService"]])
    ], SpecialAntExpComponent);
    return SpecialAntExpComponent;
}());



/***/ }),

/***/ "./src/app/tables/special-ant-exp/special-ant-exp.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tables/special-ant-exp/special-ant-exp.service.ts ***!
  \*******************************************************************/
/*! exports provided: SpecialAntExpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialAntExpService", function() { return SpecialAntExpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-ant-exp */ "./src/app/tables/special-ant-exp/special-ant-exp.ts");



var SpecialAntExpService = /** @class */ (function () {
    function SpecialAntExpService() {
        this.specialAntExpTable = [
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](1, 20, 20),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](2, 40, 60),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](3, 420, 480),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](4, 2660, 3140),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](5, 5130, 8270),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](6, 8040, 16310),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](7, 9060, 25370),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](8, 10170, 35540),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](9, 12530, 48070),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](10, 13360, 61430),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](11, 14660, 76090),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](12, 48830, 124920),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](13, 54220, 179140),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](14, 62180, 241320),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](15, 70040, 311360),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](16, 87510, 398870),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](17, 93330, 492200),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](18, 101140, 593340),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](19, 109000, 702340),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](20, 223140, 925480),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](21, 320650, 1246130),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](22, 479440, 1725570),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](23, 619060, 2344630),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](24, 698990, 3043620),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](25, 903440, 3947060),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](26, 952130, 4899190),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](27, 1027060, 5926250),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](28, 1080810, 7007060),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](29, 1144080, 8151140),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](30, 1207000, 9358140),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](31, 1281430, 10639570),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](32, 1415660, 12055230),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](33, 1542920, 13598150),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](34, 2176870, 15775020),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](35, 2473840, 18248860),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](36, 2692620, 20941480),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](37, 3002570, 23944050),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](38, 3262050, 27206100),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](39, 3633020, 30839120),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](40, 3945070, 34784190),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](41, 4331060, 39115250),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](42, 4768210, 43883460),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](43, 5326300, 49209760),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](44, 5865180, 55074940),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](45, 6444040, 61518980),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](46, 7074760, 68593740),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](47, 7681540, 76275280),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](48, 8582730, 84858010),
            new _special_ant_exp__WEBPACK_IMPORTED_MODULE_2__["SpecialAntExp"](49, 9427100, 94285110)
        ];
    }
    SpecialAntExpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecialAntExpService);
    return SpecialAntExpService;
}());



/***/ }),

/***/ "./src/app/tables/special-ant-exp/special-ant-exp.ts":
/*!***********************************************************!*\
  !*** ./src/app/tables/special-ant-exp/special-ant-exp.ts ***!
  \***********************************************************/
/*! exports provided: SpecialAntExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialAntExp", function() { return SpecialAntExp; });
var SpecialAntExp = /** @class */ (function () {
    function SpecialAntExp(id, xp, xp_total) {
        if (typeof id == "number") {
            this.id = id;
            this.xp = xp;
            this.xp_total = xp_total;
        }
        else {
            this.id = parseInt(id['id']);
            this.xp = id['xp'];
            this.xp_total = id['xp_total'];
        }
    }
    SpecialAntExp.generate = function () {
        return new SpecialAntExp(0, 0, 0);
    };
    SpecialAntExp.prototype.clone = function () {
        return new SpecialAntExp(this.id, this.xp, this.xp_total);
    };
    return SpecialAntExp;
}());



/***/ }),

/***/ "./src/app/tables/t9-creature-remains/t9-creature-remains.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/tables/t9-creature-remains/t9-creature-remains.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;\" dir=\"ltr\">\n\t<div style=\"width: 160px; overflow-x: scroll;\">\n\t\t<table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\"\n\t\t\tstyle=\"table-layout: auto; white-space: nowrap;\">\n\t\t\t<thead class=\"thead-light\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"s3\"><span>Reserarch levels</span></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Precision Hatch</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Precision Mutation</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Ripping Crush</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Carrier Ant Mutation III</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Field Battle</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Sturdy Body</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>T-9 Carrier Ant</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5 total\">TOTAL</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\t<div style=\"overflow-x: scroll; width: calc(100% - 160px);\">\n\t\t<table class=\"table table-bordered\" style=\"table-layout: auto; white-space: nowrap;\">\n\t\t\t<thead class=\"thead-light\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"s3\">1</th>\n\t\t\t\t\t<th class=\"s3\">2</th>\n\t\t\t\t\t<th class=\"s3\">3</th>\n\t\t\t\t\t<th class=\"s3\">4</th>\n\t\t\t\t\t<th class=\"s3\">5</th>\n\t\t\t\t\t<th class=\"s3\">6</th>\n\t\t\t\t\t<th class=\"s3\">7</th>\n\t\t\t\t\t<th class=\"s3\">8</th>\n\t\t\t\t\t<th class=\"s3\">9</th>\n\t\t\t\t\t<th class=\"s3\">10</th>\n\t\t\t\t\t<th class=\"s3\">11</th>\n\t\t\t\t\t<th class=\"s3\">12</th>\n\t\t\t\t\t<th class=\"s3\">13</th>\n\t\t\t\t\t<th class=\"s3\">14</th>\n\t\t\t\t\t<th class=\"s3\">15</th>\n\t\t\t\t\t<th class=\"s3\">16</th>\n\t\t\t\t\t<th class=\"s3\">17</th>\n\t\t\t\t\t<th class=\"s3\">18</th>\n\t\t\t\t\t<th class=\"s3\">19</th>\n\t\t\t\t\t<th class=\"s3\">20</th>\n\t\t\t\t\t<th class=\"s3\"><span>Min Sum</span></th>\n\t\t\t\t\t<th class=\"s3\"><span>Sum</span></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">180</td>\n\t\t\t\t\t<td class=\"s3 min\">190</td>\n\t\t\t\t\t<td class=\"s3 min\">200</td>\n\t\t\t\t\t<td class=\"s3 min\">210</td>\n\t\t\t\t\t<td class=\"s3 min\">230</td>\n\t\t\t\t\t<td class=\"s3 min\">250</td>\n\t\t\t\t\t<td class=\"s3 min\">280</td>\n\t\t\t\t\t<td class=\"s3 min\">330</td>\n\t\t\t\t\t<td class=\"s3 min\">400</td>\n\t\t\t\t\t<td class=\"s3 min\">480</td>\n\t\t\t\t\t<td class=\"s3\">620</td>\n\t\t\t\t\t<td class=\"s3\">810</td>\n\t\t\t\t\t<td class=\"s3\">1050</td>\n\t\t\t\t\t<td class=\"s3\">1470</td>\n\t\t\t\t\t<td class=\"s3\">2060</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">2750</td>\n\t\t\t\t\t<td class=\"s3\">8760</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">180</td>\n\t\t\t\t\t<td class=\"s3 min\">190</td>\n\t\t\t\t\t<td class=\"s3 min\">200</td>\n\t\t\t\t\t<td class=\"s3 min\">210</td>\n\t\t\t\t\t<td class=\"s3 min\">230</td>\n\t\t\t\t\t<td class=\"s3 min\">250</td>\n\t\t\t\t\t<td class=\"s3 min\">280</td>\n\t\t\t\t\t<td class=\"s3 min\">330</td>\n\t\t\t\t\t<td class=\"s3 min\">400</td>\n\t\t\t\t\t<td class=\"s3 min\">480</td>\n\t\t\t\t\t<td class=\"s3\">620</td>\n\t\t\t\t\t<td class=\"s3\">810</td>\n\t\t\t\t\t<td class=\"s3\">1050</td>\n\t\t\t\t\t<td class=\"s3\">1470</td>\n\t\t\t\t\t<td class=\"s3\">2060</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">2750</td>\n\t\t\t\t\t<td class=\"s3\">8760</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">180</td>\n\t\t\t\t\t<td class=\"s3 min\">220</td>\n\t\t\t\t\t<td class=\"s3 min\">260</td>\n\t\t\t\t\t<td class=\"s3\">340</td>\n\t\t\t\t\t<td class=\"s3\">450</td>\n\t\t\t\t\t<td class=\"s3\">640</td>\n\t\t\t\t\t<td class=\"s3\">940</td>\n\t\t\t\t\t<td class=\"s3\">1500</td>\n\t\t\t\t\t<td class=\"s3\">2550</td>\n\t\t\t\t\t<td class=\"s3\">4590</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">660</td>\n\t\t\t\t\t<td class=\"s3\">11670</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">0</td>\n\t\t\t\t\t<td class=\"s3\">0</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">600</td>\n\t\t\t\t\t<td class=\"s3 min\">630</td>\n\t\t\t\t\t<td class=\"s3 min\">660</td>\n\t\t\t\t\t<td class=\"s3 min\">690</td>\n\t\t\t\t\t<td class=\"s3 min\">730</td>\n\t\t\t\t\t<td class=\"s3 min\">800</td>\n\t\t\t\t\t<td class=\"s3 min\">880</td>\n\t\t\t\t\t<td class=\"s3 min\">970</td>\n\t\t\t\t\t<td class=\"s3 min\">1060</td>\n\t\t\t\t\t<td class=\"s3 min\">1170</td>\n\t\t\t\t\t<td class=\"s3 min\">1290</td>\n\t\t\t\t\t<td class=\"s3 min\">1540</td>\n\t\t\t\t\t<td class=\"s3 min\">1850</td>\n\t\t\t\t\t<td class=\"s3 min\">2220</td>\n\t\t\t\t\t<td class=\"s3 min\">2670</td>\n\t\t\t\t\t<td class=\"s3 min\">3200</td>\n\t\t\t\t\t<td class=\"s3 min\">4160</td>\n\t\t\t\t\t<td class=\"s3 min\">5410</td>\n\t\t\t\t\t<td class=\"s3 min\">7030</td>\n\t\t\t\t\t<td class=\"s3 min\">9140</td>\n\t\t\t\t\t<td class=\"s3 min\">46700</td>\n\t\t\t\t\t<td class=\"s3\">46700</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">600</td>\n\t\t\t\t\t<td class=\"s3 min\">630</td>\n\t\t\t\t\t<td class=\"s3 min\">660</td>\n\t\t\t\t\t<td class=\"s3 min\">690</td>\n\t\t\t\t\t<td class=\"s3 min\">730</td>\n\t\t\t\t\t<td class=\"s3 min\">800</td>\n\t\t\t\t\t<td class=\"s3 min\">880</td>\n\t\t\t\t\t<td class=\"s3 min\">970</td>\n\t\t\t\t\t<td class=\"s3 min\">1060</td>\n\t\t\t\t\t<td class=\"s3 min\">1170</td>\n\t\t\t\t\t<td class=\"s3 min\">1290</td>\n\t\t\t\t\t<td class=\"s3 min\">1540</td>\n\t\t\t\t\t<td class=\"s3 min\">1850</td>\n\t\t\t\t\t<td class=\"s3 min\">2220</td>\n\t\t\t\t\t<td class=\"s3 min\">2670</td>\n\t\t\t\t\t<td class=\"s3 min\">3200</td>\n\t\t\t\t\t<td class=\"s3 min\">4160</td>\n\t\t\t\t\t<td class=\"s3 min\">5410</td>\n\t\t\t\t\t<td class=\"s3 min\">7030</td>\n\t\t\t\t\t<td class=\"s3 min\">9140</td>\n\t\t\t\t\t<td class=\"s3 min\">46700</td>\n\t\t\t\t\t<td class=\"s3\">46700</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">17500</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">17500</td>\n\t\t\t\t\t<td class=\"s3\">17500</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 total\" colspan=\"20\"></td>\n\t\t\t\t\t<td class=\"s3 total\">117060</td>\n\t\t\t\t\t<td class=\"s3 total\">140090</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\n\n</div>\n<p></p>\n<div>\n\t<label class=\"table-infos min\">Follow yellow path to unlock T9 asap</label>\n\t<label class=\"table-infos\">* Same requirements for Shooters and Guardians</label>\n\t<label class=\"table-infos\" style=\"float: right; padding: 5px;\">© [OTL]Grinch S102</label>\n</div>"

/***/ }),

/***/ "./src/app/tables/t9-creature-remains/t9-creature-remains.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/tables/t9-creature-remains/t9-creature-remains.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90OS1jcmVhdHVyZS1yZW1haW5zL3Q5LWNyZWF0dXJlLXJlbWFpbnMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/tables/t9-creature-remains/t9-creature-remains.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tables/t9-creature-remains/t9-creature-remains.component.ts ***!
  \*****************************************************************************/
/*! exports provided: T9CreatureRemainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T9CreatureRemainsComponent", function() { return T9CreatureRemainsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var T9CreatureRemainsComponent = /** @class */ (function () {
    function T9CreatureRemainsComponent() {
    }
    T9CreatureRemainsComponent.prototype.ngOnInit = function () {
    };
    T9CreatureRemainsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-t9-creature-remains',
            template: __webpack_require__(/*! ./t9-creature-remains.component.html */ "./src/app/tables/t9-creature-remains/t9-creature-remains.component.html"),
            styles: [__webpack_require__(/*! ./t9-creature-remains.component.less */ "./src/app/tables/t9-creature-remains/t9-creature-remains.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], T9CreatureRemainsComponent);
    return T9CreatureRemainsComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.component.html":
/*!**********************************************!*\
  !*** ./src/app/tables/tables.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion\">\n    <div class=\"card\">\n        <div id=\"collapse0\" class=\"collapse\" [ngClass]=\"{show : showLegend }\">\n            <div class=\"card-body\">\n                Select and see one of the options below:\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" title=\"See the list off all necessary Exp for leveling special ants\" style=\"cursor: pointer;\" id=\"heading1\" data-toggle=\"collapse\" data-target=\"#collapse1\" aria-expanded=\"true\" aria-controls=\"collapse1\">\n            #1 Special Ant Exp Table\n        </div>\n        <div id=\"collapse1\" class=\"collapse\" aria-labelledby=\"heading1\" data-parent=\"#accordion\">\n            <div class=\"card-body\">\n                <app-special-ant-exp></app-special-ant-exp>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" style=\"cursor: pointer;\" id=\"heading2\" data-toggle=\"collapse\" data-target=\"#collapse2\" aria-expanded=\"true\" aria-controls=\"collapse2\">\n            #2 Zone Develop Creature Remains\n        </div>\n        <div id=\"collapse2\" class=\"collapse\" aria-labelledby=\"heading2\" data-parent=\"#accordion\" aria-expanded=\"false\">\n            <div class=\"card-body\">\n                <app-zone-develop-creature-remains></app-zone-develop-creature-remains>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" style=\"cursor: pointer;\" id=\"heading3\" data-toggle=\"collapse\" data-target=\"#collapse3\" aria-expanded=\"true\" aria-controls=\"collapse3\">\n            #3 T9 Carrier Ant* Evolution Research Creature Remains\n        </div>\n        <div id=\"collapse3\" class=\"collapse\" aria-labelledby=\"heading3\" data-parent=\"#accordion\" aria-expanded=\"false\">\n            <div class=\"card-body\">\n                <app-t9-creature-remains></app-t9-creature-remains>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/tables/tables.component.less":
/*!**********************************************!*\
  !*** ./src/app/tables/tables.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/*!********************************************!*\
  !*** ./src/app/tables/tables.component.ts ***!
  \********************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
        this.showLegend = true;
    }
    TablesComponent.prototype.hideAll = function () {
        jQuery('#accordion .collapse').collapse("hide");
    };
    TablesComponent.prototype.testShowLegend = function () {
        var showLegend = true;
        jQuery(".collapse.in").each(function (i, e) {
            showLegend = false;
        });
        this.showLegend = showLegend;
    };
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(".card-header").click(function () {
            _this.hideAll();
            setTimeout(function () {
                _this.testShowLegend();
            }, 380);
        });
    };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.less */ "./src/app/tables/tables.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;\" dir=\"ltr\">\n\t<div style=\"width: 140px; overflow-x: scroll;\">\n\t\t<table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\"\n\t\t\tstyle=\"table-layout: auto; white-space: nowrap;\">\n\t\t\t<thead class=\"thead-light\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"s3\"><span>Reserarch levels</span></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Zone Gatherer</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Extra Resource</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Secondary rewards</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Points Bonus I\t</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Pack Light</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Rapid Hatch</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Zone Transporter</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Mixed Meduim</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Tertriary Rewards</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Gathering points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Hunting Points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Building Points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Spore Points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Evolving Points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Exp Points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Defeating Points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Hatching Points</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Points Bonus II</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5\"><span>Double Rewards</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s5 total\">TOTAL</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div style=\"overflow-x: scroll; width: calc(100% - 140px);\">\n\t\t<table class=\"table table-bordered\" style=\"table-layout: auto; white-space: nowrap;\">\n\t\t\t<thead class=\"thead-light\">\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<th class=\"s3\">1</th>\n\t\t\t\t\t<th class=\"s3\">2</th>\n\t\t\t\t\t<th class=\"s3\">3</th>\n\t\t\t\t\t<th class=\"s3\">4</th>\n\t\t\t\t\t<th class=\"s3\">5</th>\n\t\t\t\t\t<th class=\"s3\">6</th>\n\t\t\t\t\t<th class=\"s3\">7</th>\n\t\t\t\t\t<th class=\"s3\">8</th>\n\t\t\t\t\t<th class=\"s3\">9</th>\n\t\t\t\t\t<th class=\"s3\">10</th>\n\t\t\t\t\t<th class=\"s3\">11</th>\n\t\t\t\t\t<th class=\"s3\">12</th>\n\t\t\t\t\t<th class=\"s3\">13</th>\n\t\t\t\t\t<th class=\"s3\">14</th>\n\t\t\t\t\t<th class=\"s3\">15</th>\n\t\t\t\t\t<th class=\"s3\" dir=\"ltr\">16</th>\n\t\t\t\t\t<th class=\"s3\">17</th>\n\t\t\t\t\t<th class=\"s3\">18</th>\n\t\t\t\t\t<th class=\"s3\">19</th>\n\t\t\t\t\t<th class=\"s3\">20</th>\n\t\t\t\t\t<th class=\"s3\"><span>Min Sum</span></th>\n\t\t\t\t\t<th class=\"s3\" dir=\"ltr\">Total Sum</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">70</td>\n\t\t\t\t\t<td class=\"s3 min\">70</td>\n\t\t\t\t\t<td class=\"s3 min\">90</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3 min\">170</td>\n\t\t\t\t\t<td class=\"s3 min\">230</td>\n\t\t\t\t\t<td class=\"s3 min\">350</td>\n\t\t\t\t\t<td class=\"s3 min\">530</td>\n\t\t\t\t\t<td class=\"s3 min\">790</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">2540</td>\n\t\t\t\t\t<td class=\"s3\">2540</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">70</td>\n\t\t\t\t\t<td class=\"s3 min\">70</td>\n\t\t\t\t\t<td class=\"s3 min\">90</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3 min\">170</td>\n\t\t\t\t\t<td class=\"s3 min\">230</td>\n\t\t\t\t\t<td class=\"s3 min\">350</td>\n\t\t\t\t\t<td class=\"s3 min\">530</td>\n\t\t\t\t\t<td class=\"s3 min\">790</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3\"></td>\n\t\t\t\t\t<td class=\"s3\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">2540</td>\n\t\t\t\t\t<td class=\"s3\">2540</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">1190</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">1190</td>\n\t\t\t\t\t<td class=\"s3\">1190</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">90</td>\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">140</td>\n\t\t\t\t\t<td class=\"s3 min\">170</td>\n\t\t\t\t\t<td class=\"s3 min\">220</td>\n\t\t\t\t\t<td class=\"s3 min\">310</td>\n\t\t\t\t\t<td class=\"s3 min\">470</td>\n\t\t\t\t\t<td class=\"s3 min\">700</td>\n\t\t\t\t\t<td class=\"s3 min\">1060</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">3380</td>\n\t\t\t\t\t<td class=\"s3\">3380</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">170</td>\n\t\t\t\t\t<td class=\"s3 min\">180</td>\n\t\t\t\t\t<td class=\"s3 min\">200</td>\n\t\t\t\t\t<td class=\"s3\">220</td>\n\t\t\t\t\t<td class=\"s3\">240</td>\n\t\t\t\t\t<td class=\"s3\">290</td>\n\t\t\t\t\t<td class=\"s3\">350</td>\n\t\t\t\t\t<td class=\"s3\">420</td>\n\t\t\t\t\t<td class=\"s3\">540</td>\n\t\t\t\t\t<td class=\"s3\">700</td>\n\t\t\t\t\t<td class=\"s3\">920</td>\n\t\t\t\t\t<td class=\"s3\">1280</td>\n\t\t\t\t\t<td class=\"s3\">1790</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">870</td>\n\t\t\t\t\t<td class=\"s3\">7620</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">170</td>\n\t\t\t\t\t<td class=\"s3 min\">180</td>\n\t\t\t\t\t<td class=\"s3 min\">200</td>\n\t\t\t\t\t<td class=\"s3\">220</td>\n\t\t\t\t\t<td class=\"s3\">240</td>\n\t\t\t\t\t<td class=\"s3\">290</td>\n\t\t\t\t\t<td class=\"s3\">350</td>\n\t\t\t\t\t<td class=\"s3\">420</td>\n\t\t\t\t\t<td class=\"s3\">540</td>\n\t\t\t\t\t<td class=\"s3\">700</td>\n\t\t\t\t\t<td class=\"s3\">920</td>\n\t\t\t\t\t<td class=\"s3\">1280</td>\n\t\t\t\t\t<td class=\"s3\">1790</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">870</td>\n\t\t\t\t\t<td class=\"s3\">7620</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">170</td>\n\t\t\t\t\t<td class=\"s3 min\">180</td>\n\t\t\t\t\t<td class=\"s3 min\">200</td>\n\t\t\t\t\t<td class=\"s3 min\">220</td>\n\t\t\t\t\t<td class=\"s3 min\">240</td>\n\t\t\t\t\t<td class=\"s3 min\">290</td>\n\t\t\t\t\t<td class=\"s3 min\">350</td>\n\t\t\t\t\t<td class=\"s3 min\">420</td>\n\t\t\t\t\t<td class=\"s3 min\">540</td>\n\t\t\t\t\t<td class=\"s3 min\">700</td>\n\t\t\t\t\t<td class=\"s3 min\">920</td>\n\t\t\t\t\t<td class=\"s3 min\">1280</td>\n\t\t\t\t\t<td class=\"s3 min\">1790</td>\n\t\t\t\t\t<td class=\"s3\"></td>\n\t\t\t\t\t<td class=\"s3\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">7620</td>\n\t\t\t\t\t<td class=\"s3\">7620</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">170</td>\n\t\t\t\t\t<td class=\"s3 min\">180</td>\n\t\t\t\t\t<td class=\"s3 min\">200</td>\n\t\t\t\t\t<td class=\"s3 min\">220</td>\n\t\t\t\t\t<td class=\"s3 min\">240</td>\n\t\t\t\t\t<td class=\"s3 min\">290</td>\n\t\t\t\t\t<td class=\"s3 min\">350</td>\n\t\t\t\t\t<td class=\"s3 min\">420</td>\n\t\t\t\t\t<td class=\"s3 min\">540</td>\n\t\t\t\t\t<td class=\"s3 min\">700</td>\n\t\t\t\t\t<td class=\"s3 min\">920</td>\n\t\t\t\t\t<td class=\"s3 min\">1280</td>\n\t\t\t\t\t<td class=\"s3 min\">1790</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">7620</td>\n\t\t\t\t\t<td class=\"s3\">7620</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">1350</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">1350</td>\n\t\t\t\t\t<td class=\"s3\">1350</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3\">150</td>\n\t\t\t\t\t<td class=\"s3\">160</td>\n\t\t\t\t\t<td class=\"s3\">190</td>\n\t\t\t\t\t<td class=\"s3\">230</td>\n\t\t\t\t\t<td class=\"s3\">280</td>\n\t\t\t\t\t<td class=\"s3\">360</td>\n\t\t\t\t\t<td class=\"s3\">470</td>\n\t\t\t\t\t<td class=\"s3\">610</td>\n\t\t\t\t\t<td class=\"s3\">850</td>\n\t\t\t\t\t<td class=\"s3\">1200</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">570</td>\n\t\t\t\t\t<td class=\"s3\">5070</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3\">150</td>\n\t\t\t\t\t<td class=\"s3\">160</td>\n\t\t\t\t\t<td class=\"s3\">190</td>\n\t\t\t\t\t<td class=\"s3\">230</td>\n\t\t\t\t\t<td class=\"s3\">280</td>\n\t\t\t\t\t<td class=\"s3\">360</td>\n\t\t\t\t\t<td class=\"s3\">470</td>\n\t\t\t\t\t<td class=\"s3\">610</td>\n\t\t\t\t\t<td class=\"s3\">850</td>\n\t\t\t\t\t<td class=\"s3\">1200</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">570</td>\n\t\t\t\t\t<td class=\"s3\">5070</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3\">150</td>\n\t\t\t\t\t<td class=\"s3\">160</td>\n\t\t\t\t\t<td class=\"s3\">190</td>\n\t\t\t\t\t<td class=\"s3\">230</td>\n\t\t\t\t\t<td class=\"s3\">280</td>\n\t\t\t\t\t<td class=\"s3\">360</td>\n\t\t\t\t\t<td class=\"s3\">470</td>\n\t\t\t\t\t<td class=\"s3\">610</td>\n\t\t\t\t\t<td class=\"s3\">850</td>\n\t\t\t\t\t<td class=\"s3\">1200</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">570</td>\n\t\t\t\t\t<td class=\"s3\">5070</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3\">150</td>\n\t\t\t\t\t<td class=\"s3\">160</td>\n\t\t\t\t\t<td class=\"s3\">190</td>\n\t\t\t\t\t<td class=\"s3\">230</td>\n\t\t\t\t\t<td class=\"s3\">280</td>\n\t\t\t\t\t<td class=\"s3\">360</td>\n\t\t\t\t\t<td class=\"s3\">470</td>\n\t\t\t\t\t<td class=\"s3\">610</td>\n\t\t\t\t\t<td class=\"s3\">850</td>\n\t\t\t\t\t<td class=\"s3\">1200</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">570</td>\n\t\t\t\t\t<td class=\"s3\">5070</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3\">150</td>\n\t\t\t\t\t<td class=\"s3\">160</td>\n\t\t\t\t\t<td class=\"s3\">190</td>\n\t\t\t\t\t<td class=\"s3\">230</td>\n\t\t\t\t\t<td class=\"s3\">280</td>\n\t\t\t\t\t<td class=\"s3\">360</td>\n\t\t\t\t\t<td class=\"s3\">470</td>\n\t\t\t\t\t<td class=\"s3\">610</td>\n\t\t\t\t\t<td class=\"s3\">850</td>\n\t\t\t\t\t<td class=\"s3\">1200</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">570</td>\n\t\t\t\t\t<td class=\"s3\">5070</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">40</td>\n\t\t\t\t\t<td class=\"s3 min\">40</td>\n\t\t\t\t\t<td class=\"s3 min\">40</td>\n\t\t\t\t\t<td class=\"s3 min\">50</td>\n\t\t\t\t\t<td class=\"s3 min\">60</td>\n\t\t\t\t\t<td class=\"s3\">70</td>\n\t\t\t\t\t<td class=\"s3\">100</td>\n\t\t\t\t\t<td class=\"s3\">130</td>\n\t\t\t\t\t<td class=\"s3\">180</td>\n\t\t\t\t\t<td class=\"s3\">250</td>\n\t\t\t\t\t<td class=\"s3\">340</td>\n\t\t\t\t\t<td class=\"s3\">520</td>\n\t\t\t\t\t<td class=\"s3\">770</td>\n\t\t\t\t\t<td class=\"s3\">1080</td>\n\t\t\t\t\t<td class=\"s3\">1410</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">230</td>\n\t\t\t\t\t<td class=\"s3\">5080</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3 min\">150</td>\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">190</td>\n\t\t\t\t\t<td class=\"s3 min\">230</td>\n\t\t\t\t\t<td class=\"s3 min\">280</td>\n\t\t\t\t\t<td class=\"s3\">360</td>\n\t\t\t\t\t<td class=\"s3\">470</td>\n\t\t\t\t\t<td class=\"s3\">610</td>\n\t\t\t\t\t<td class=\"s3\">850</td>\n\t\t\t\t\t<td class=\"s3\">1200</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">1580</td>\n\t\t\t\t\t<td class=\"s3\">5070</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">100</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">110</td>\n\t\t\t\t\t<td class=\"s3 min\">120</td>\n\t\t\t\t\t<td class=\"s3 min\">130</td>\n\t\t\t\t\t<td class=\"s3 min\">150</td>\n\t\t\t\t\t<td class=\"s3 min\">160</td>\n\t\t\t\t\t<td class=\"s3 min\">190</td>\n\t\t\t\t\t<td class=\"s3 min\">230</td>\n\t\t\t\t\t<td class=\"s3 min\">280</td>\n\t\t\t\t\t<td class=\"s3\">360</td>\n\t\t\t\t\t<td class=\"s3\">470</td>\n\t\t\t\t\t<td class=\"s3\">610</td>\n\t\t\t\t\t<td class=\"s3\">850</td>\n\t\t\t\t\t<td class=\"s3\">1200</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">1580</td>\n\t\t\t\t\t<td class=\"s3\">5070</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 19px\">\n\t\t\t\t\t<td class=\"s3 min\">260</td>\n\t\t\t\t\t<td class=\"s3 min\">270</td>\n\t\t\t\t\t<td class=\"s3 min\">290</td>\n\t\t\t\t\t<td class=\"s3 min\">300</td>\n\t\t\t\t\t<td class=\"s3 min\">320</td>\n\t\t\t\t\t<td class=\"s3 min\">350</td>\n\t\t\t\t\t<td class=\"s3 min\">380</td>\n\t\t\t\t\t<td class=\"s3 min\">420</td>\n\t\t\t\t\t<td class=\"s3 min\">460</td>\n\t\t\t\t\t<td class=\"s3 min\">510</td>\n\t\t\t\t\t<td class=\"s3 min\">560</td>\n\t\t\t\t\t<td class=\"s3 min\">670</td>\n\t\t\t\t\t<td class=\"s3 min\">810</td>\n\t\t\t\t\t<td class=\"s3 min\">970</td>\n\t\t\t\t\t<td class=\"s3 min\">1160</td>\n\t\t\t\t\t<td class=\"s3 min\">1390</td>\n\t\t\t\t\t<td class=\"s3 min\">1810</td>\n\t\t\t\t\t<td class=\"s3 min\">2350</td>\n\t\t\t\t\t<td class=\"s3 min\">3060</td>\n\t\t\t\t\t<td class=\"s3 min\">3980</td>\n\t\t\t\t\t<td class=\"s3 min\">20320</td>\n\t\t\t\t\t<td class=\"s3\">20320</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 20px\">\n\t\t\t\t\t<td class=\"s3 min\">2540</td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s4\"></td>\n\t\t\t\t\t<td class=\"s3 min\">2540</td>\n\t\t\t\t\t<td class=\"s3\">2540</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"height: 20px\">\n\t\t\t\t\t<td class=\"s3 total\" colspan=\"20\"></td>\n\t\t\t\t\t<td class=\"s3 total\">57080</td>\n\t\t\t\t\t<td class=\"s3 total\">104910</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\n</div>\n<p></p>\n<div>\n\t<label class=\"min table-infos\">Follow yellow path to unlock Double rewards asap</label>\n\t<label class=\"table-infos\" style=\"float: right; padding: 5px;\">© [OTL]Grinch S102</label>\n</div>"

/***/ }),

/***/ "./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.less":
/*!***************************************************************************************************!*\
  !*** ./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy96b25lLWRldmVsb3AtY3JlYXR1cmUtcmVtYWlucy96b25lLWRldmVsb3AtY3JlYXR1cmUtcmVtYWlucy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ZoneDevelopCreatureRemainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneDevelopCreatureRemainsComponent", function() { return ZoneDevelopCreatureRemainsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZoneDevelopCreatureRemainsComponent = /** @class */ (function () {
    function ZoneDevelopCreatureRemainsComponent() {
    }
    ZoneDevelopCreatureRemainsComponent.prototype.ngOnInit = function () {
    };
    ZoneDevelopCreatureRemainsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zone-develop-creature-remains',
            template: __webpack_require__(/*! ./zone-develop-creature-remains.component.html */ "./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.html"),
            styles: [__webpack_require__(/*! ./zone-develop-creature-remains.component.less */ "./src/app/tables/zone-develop-creature-remains/zone-develop-creature-remains.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ZoneDevelopCreatureRemainsComponent);
    return ZoneDevelopCreatureRemainsComponent;
}());



/***/ }),

/***/ "./src/app/upgrades/upgrades.component.html":
/*!**************************************************!*\
  !*** ./src/app/upgrades/upgrades.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe width=\"100%\" height=\"500px\" src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vSZvViL89hKuChE760gKsL3WAVKam-faU38b7vMjQuuAVbsx_WkNx3kxxww3mDpn9QlueUxI9mQoqOZ/pubhtml?widget=true&amp;headers=false\">\n</iframe>"

/***/ }),

/***/ "./src/app/upgrades/upgrades.component.less":
/*!**************************************************!*\
  !*** ./src/app/upgrades/upgrades.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZ3JhZGVzL3VwZ3JhZGVzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/upgrades/upgrades.component.ts":
/*!************************************************!*\
  !*** ./src/app/upgrades/upgrades.component.ts ***!
  \************************************************/
/*! exports provided: UpgradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradesComponent", function() { return UpgradesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpgradesComponent = /** @class */ (function () {
    function UpgradesComponent() {
    }
    UpgradesComponent.prototype.ngOnInit = function () {
    };
    UpgradesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upgrades',
            template: __webpack_require__(/*! ./upgrades.component.html */ "./src/app/upgrades/upgrades.component.html"),
            styles: [__webpack_require__(/*! ./upgrades.component.less */ "./src/app/upgrades/upgrades.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpgradesComponent);
    return UpgradesComponent;
}());



/***/ }),

/***/ "./src/app/users/filtro-usuario.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/users/filtro-usuario.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroUsuarioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroUsuarioPipe", function() { return FiltroUsuarioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltroUsuarioPipe = /** @class */ (function () {
    function FiltroUsuarioPipe() {
    }
    FiltroUsuarioPipe.prototype.transform = function (value, criteria) {
        if (criteria == "")
            return value;
        var usuarios = [];
        for (var i in value) {
            if (this.filtro(value[i], criteria.toUpperCase()))
                usuarios.push(value[i]);
        }
        return usuarios;
    };
    FiltroUsuarioPipe.prototype.filtro = function (usuario, criteria) {
        if (usuario.name.toUpperCase().search(criteria) >= 0 ||
            usuario.email.toUpperCase().search(criteria) >= 0 ||
            usuario.permissao.startsWith(criteria))
            return true;
        return false;
    };
    FiltroUsuarioPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filtroUsuario'
        })
    ], FiltroUsuarioPipe);
    return FiltroUsuarioPipe;
}());



/***/ }),

/***/ "./src/app/users/user.ts":
/*!*******************************!*\
  !*** ./src/app/users/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, name, email, login, permissao) {
        if (typeof id == 'number') {
            this.id = id;
            this.name = name;
            this.login = login;
            this.email = email;
            this.permissao = permissao;
        }
        else {
            this.id = parseInt(id['id']);
            this.name = id['name'];
            this.login = id['login'];
            this.email = id['email'];
            this.permissao = id['permissao'];
        }
    }
    User.generateList = function (list) {
        var usuarioList = [];
        list.forEach(function (usuarioAny) {
            var usuario = new User(usuarioAny);
            usuarioList.push(usuario);
        });
        return usuarioList;
    };
    ;
    User.generate = function () {
        return new User(0, "", "", "", "");
    };
    User.prototype.aply = function (user) {
        this.id = user.id;
        this.name = user.name;
        this.login = user.login;
        this.email = user.email;
        this.permissao = user.permissao;
    };
    User.prototype.clone = function () {
        return new User(this);
    };
    return User;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Usuários</div>\n\t\t\t<table class=\"table\">\n\t\t\t\t<caption>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"col-md-1\"><label for=\"filtro\" class=\"col-md-1 control-label\">Buscar:</label></td>\n\t\t\t\t\t\t\t<td class=\"col-md-8\"><input id=\"filtro\" type=\"text\" class=\"form-control\" name=\"filtro\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"criteria\" autofocus></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</caption>\n\t\t\t\t<colgroup>\n\t\t\t\t\t<col width=\"50px\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"170px\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t<col width=\"15px\" />\n\t\t\t\t</colgroup>\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">#</th>\n\t\t\t\t\t\t<th scope=\"col\">Nome</th>\n\t\t\t\t\t\t<th scope=\"col\">Login</th>\n\t\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t\t<th scope=\"col\">Permissão</th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t</table>\n\t\t\t<div redimensionar=\"310\" style=\"overflow-y:scroll\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"50px\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"170px\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let u of (usuarios | filtroUsuario:criteria)\">\n\t\t\t\t\t\t\t<td>{{u.id}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{u.name}}\">{{u.name}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{u.login}}\">{{u.login}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{u.email}}\">{{u.email}}</td>\n\t\t\t\t\t\t\t<td *ngIf=\"usuarioTemp.id != u.id || !setPermissaoFlag\">{{u.permissao}}</td>\n\t\t\t\t\t\t\t<td *ngIf=\"usuarioTemp.id != u.id || !setPermissaoFlag\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-reduzido\" title=\"Alterar Permissão\"\n\t\t\t\t\t\t\t\t\t(click)=\"habilitarEdicaoPermissao(u.clone())\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" *ngIf=\"usuarioTemp.id == u.id && setPermissaoFlag\">\n\t\t\t\t\t\t\t\t<select id=\"selectPermissao\" class=\"form-control form-control-micro\"\n\t\t\t\t\t\t\t\t\t(change)=\"alterarPermissao()\" (blur)=\"resetEdit()\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usuarioTemp.permissao\">\n\t\t\t\t\t\t\t\t\t<option value=\"ADMINISTRADOR\">ADMINISTRADOR</option>\n\t\t\t\t\t\t\t\t\t<option value=\"USUARIO\">USUARIO</option>\n\t\t\t\t\t\t\t\t\t<option value=\"INATIVO\">INATIVO</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button (click)=\"selecionarUsuario(u)\" class=\"btn btn-primary botao-reduzido\"\n\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\" data-target=\"#dialogEditarUsuario\" title=\"Editar\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button (click)=\"selecionarUsuario(u)\" class=\"btn btn-primary botao-reduzido\"\n\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\" data-target=\"#dialogResetSenha\" title=\"Redefinir Senha\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-list-alt\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"padding-left: 2px;\">\n\t\t\t\t\t\t\t\t<form name=\"form-logar-como-{{u.id}}\" action=\"/users/logarcomo/{{u.id}}\" method=\"GET\">\n\t\t\t\t\t\t\t\t\t<button (click)=\"submeterLogarComo(u.id)\" class=\"btn btn-primary botao-reduzido\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"width: 125px;\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-education\"></span>\n\t\t\t\t\t\t\t\t\t\tLOGAR COMO\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot class=\"status-tabela\">\n\t\t\t\t\t\t<tr *ngIf=\"status == LOADING\">\n\t\t\t\t\t\t\t<td colspan=\"6\"><i>Carregando Usuários...</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"usuarios != null && (usuarios).length == 0 && status == COMPLETE\">\n\t\t\t\t\t\t\t<td colspan=\"6\"><i>Não Há Usuários para serem listadas</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"status == ERROR\">\n\t\t\t\t\t\t\t<td class=\"erro\" colspan=\"6\"><i>Falha na obtenção de Usuários!</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\"\n\t\t\t\t\tdata-target=\"#dialogNovoUsuario\" (click)=\"resetEdit()\" [disabled]=\"!editavel\">Novo</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogNovoUsuario\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogNovoUsuarioTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Novo Usuário</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 500px;\">\n\n\t\t\t\t<label for=\"login\">Login</label>\n\t\t\t\t<input id=\"login\" type=\"text\" [(ngModel)]=\"usuarioTemp.login\" class=\"form-control\" name=\"login\"\n\t\t\t\t\tvalue=\"login\" autocomplete=\"login\" size=\"60\" autofocus>\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"name\">Nome</label>\n\t\t\t\t<input id=\"name\" type=\"text\" [(ngModel)]=\"usuarioTemp.name\" class=\"form-control\" name=\"name\"\n\t\t\t\t\tvalue=\"name\" autocomplete=\"name\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"email\">Endereço de E-Mail</label>\n\t\t\t\t<input id=\"email\" type=\"email\" [(ngModel)]=\"usuarioTemp.email\" class=\"form-control\" name=\"email\"\n\t\t\t\t\tvalue=\"email\" autocomplete=\"email\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"password\">Senha</label>\n\t\t\t\t<input id=\"password\" type=\"password\" [(ngModel)]=\"usuarioTemp.password\" class=\"form-control\"\n\t\t\t\t\tname=\"password\" autocomplete=\"new-password\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"password-confirm\">Confirmar Senha</label>\n\t\t\t\t<input id=\"password-confirm\" type=\"password\" [(ngModel)]=\"usuarioTemp.password_confirmation\"\n\t\t\t\t\tclass=\"form-control\" name=\"password_confirmation\" autocomplete=\"new-password\" size=\"60\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"novoUsuario()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Criar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogEditarUsuario\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogEditarUsuarioTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Editar Usuário</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 500px;\">\n\t\t\t\t<label for=\"login-edit\">Login</label>\n\t\t\t\t<input id=\"login-edit\" type=\"text\" [(ngModel)]=\"usuarioTemp.login\" class=\"form-control\"\n\t\t\t\t\tname=\"login-edit\" autocomplete=\"login\" size=\"60\" autofocus>\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"name-edit\">Nome</label>\n\t\t\t\t<input id=\"name-edit\" type=\"text\" [(ngModel)]=\"usuarioTemp.name\" class=\"form-control\" name=\"name-edit\"\n\t\t\t\t\tautocomplete=\"name\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"email-edit\">Endereço de E-Mail</label>\n\t\t\t\t<input id=\"email-edit\" type=\"email\" [(ngModel)]=\"usuarioTemp.email\" class=\"form-control\"\n\t\t\t\t\tname=\"email-edit\" autocomplete=\"email\" size=\"60\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"editarUsuario()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Editar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogResetSenha\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogResetSenhaTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden; width: 330px;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Redefinir Senha</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" >\n\t\t\t\t<label for=\"password-edit\">Senha</label>\n\t\t\t\t<input id=\"password-edit\" type=\"password\" [(ngModel)]=\"usuarioTemp.password\" class=\"form-control\"\n\t\t\t\t\tname=\"password\" autocomplete=\"nova-senha\">\n\n\t\t\t\t<label for=\"password-confirm-edit\">Confirmar Senha</label>\n\t\t\t\t<input id=\"password-confirm-edit\" type=\"password\" [(ngModel)]=\"usuarioTemp.password_confirmation\"\n\t\t\t\t\tclass=\"form-control\" name=\"password_confirmation\" autocomplete=\"nova-senha\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"redefinirSenha()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Confirmar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.less":
/*!********************************************!*\
  !*** ./src/app/users/users.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/users/user.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");





var UsersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersComponent, _super);
    function UsersComponent(usuarioService) {
        var _this = _super.call(this) || this;
        _this.usuarioService = usuarioService;
        _this.criteria = "";
        _this.usuarioTemp = _user__WEBPACK_IMPORTED_MODULE_3__["User"].generate();
        _this.setPermissaoFlag = false;
        return _this;
    }
    Object.defineProperty(UsersComponent.prototype, "usuarios", {
        get: function () {
            return this.usuarioService.usuarios;
        },
        set: function (usuarios) {
            this.usuarioService.usuarios = usuarios;
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.alterarPermissao = function () {
        var _this = this;
        this.usuarioService.alteraPermissao(this.usuarioTemp)
            .then(function (response) {
            if (response)
                alert(_this.erroHttp(response));
            else {
                _this.resetEdit();
            }
            _this.setPermissaoFlag = false;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.setPermissaoFlag = false;
        });
    };
    UsersComponent.prototype.habilitarEdicaoPermissao = function (usuario) {
        this.usuarioTemp = usuario.clone();
        this.setPermissaoFlag = true;
        setTimeout(function () {
            document.getElementById('selectPermissao').focus();
        }, 300);
    };
    UsersComponent.prototype.resetEdit = function () {
        this.usuarioTemp = _user__WEBPACK_IMPORTED_MODULE_3__["User"].generate();
    };
    UsersComponent.prototype.novoUsuario = function () {
        var _this = this;
        this.editavel = false;
        this.usuarioService.novoUsuario(this.usuarioTemp)
            .then(function (response) {
            jQuery('#dialogNovoUsuario').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    UsersComponent.prototype.selecionarUsuario = function (user) {
        this.usuarioTemp = user.clone();
        this.setPermissaoFlag = false;
    };
    UsersComponent.prototype.editarUsuario = function () {
        var _this = this;
        this.editavel = false;
        this.usuarioService.editarUsuario(this.usuarioTemp)
            .then(function (response) {
            jQuery('#dialogEditarUsuario').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    UsersComponent.prototype.redefinirSenha = function () {
        var _this = this;
        if (this.usuarioTemp.password == null || this.usuarioTemp.password_confirmation == null) {
            alert("Uma senha deve ser informada!");
            return;
        }
        if (this.usuarioTemp.password != this.usuarioTemp.password_confirmation) {
            alert("Senhas não Conferem!");
            return;
        }
        this.editavel = false;
        this.usuarioService.redefinirSenha(this.usuarioTemp)
            .then(function (response) {
            jQuery('#dialogResetSenha').modal('hide');
            _this.editavel = true;
            alert("Senha Alterada!");
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    UsersComponent.prototype.submeterLogarComo = function (uid) {
        document.forms["form-logar-como-" + uid].submit();
        //$('meta[name="csrf-token"]').attr('content')
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetEdit();
        this.usuarioService.listaUsuarios()
            .then(function (response) {
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.less */ "./src/app/users/users.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], UsersComponent);
    return UsersComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/users/user.ts");





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.usuariosIndex = null;
    }
    UsersService.prototype.listaUsuarios = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('users/lista')
                            .toPromise()];
                    case 1:
                        response = _a.sent();
                        this.usuarios = _user__WEBPACK_IMPORTED_MODULE_4__["User"].generateList(response.json());
                        this.usuariosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](this.usuarios);
                        return [2 /*return*/, this.usuarios];
                }
            });
        });
    };
    UsersService.prototype.novoUsuario = function (usuario) {
        var _this = this;
        return this.http.post('users', usuario).toPromise()
            .then(function (response) {
            _this.usuarios = _user__WEBPACK_IMPORTED_MODULE_4__["User"].generateList(response.json());
            _this.usuariosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.usuarios);
            return _this.usuarios;
        });
    };
    UsersService.prototype.editarUsuario = function (usuario) {
        var _this = this;
        return this.http.put('users/' + usuario.id, usuario).toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            if (_this.usuariosIndex != null)
                _this.usuariosIndex.get(u.id).aply(u);
            return u;
        });
    };
    UsersService.prototype.redefinirSenha = function (usuario) {
        var _this = this;
        return this.http.put('users/password/' + usuario.id, usuario).toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            if (_this.usuariosIndex != null)
                _this.usuariosIndex.get(u.id).aply(u);
            return u;
        });
    };
    UsersService.prototype.alteraPermissao = function (usuario) {
        var _this = this;
        return this.http.put("users/permissao/" + usuario.id, usuario).toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            /*for (var i in this.usuarios) {
                if (this.usuarios[i].id == u.id)
                    this.usuarios[i].permissao = u.permissao;
            }*/
            if (_this.usuariosIndex != null)
                _this.usuariosIndex.get(u.id).aply(u);
            return null;
        })
            .catch(function (response) {
            return response;
        });
    };
    UsersService.prototype.usuarioLogado = function () {
        return this.http.get("/logado").toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            return u;
        });
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/zeros.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/zeros.pipe.ts ***!
  \*******************************/
/*! exports provided: ZerosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZerosPipe", function() { return ZerosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZerosPipe = /** @class */ (function () {
    function ZerosPipe() {
        this.ZERO = "0";
    }
    ZerosPipe.prototype.transform = function (value, casas) {
        var s = String(value);
        while (s.length < casas || s.length < 2) {
            s = this.ZERO + s;
        }
        return s;
    };
    ZerosPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'zeros'
        })
    ], ZerosPipe);
    return ZerosPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\ants-wiki-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map