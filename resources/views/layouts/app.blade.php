<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>TutoAnts | An tool for helping on play the game "The Ants: Underground Kingdom"</title>

    <link rel="shortcut icon" href="/favicon.ico" />

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <script src="/js/jquery.min.js"></script>
    <!--script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script-->

    <script type="text/javascript" src="{{ asset('js/browser-detect.js') }}"></script>

    @yield('innerhead')

    <link href="{{ asset('css/style-1.3.1.css')  }}" rel="stylesheet"/>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="/js/gtag.js"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-3YH9DYNQ4T');
    </script>

    @inject('resources', 'App\Services\ResourcesService')
</head>
<body style="background-image: url(/img/fundo-home.png); background-size: cover; background-position: center;">
    <div id="hiddens">
        <input type="hidden" id="hidden-app-name" name="app-name" value="{{ config('app.name') }}">
        <input type="hidden" id="hidden-permissao" name="permissao" value="{{ $resources->permissao }}">
        <input type="hidden" id="hidden-usuario-hack-admin" name="usuario-hack-admin" value="{{ $resources->usuarioHackAdmin }}">
        @guest
            <input type="hidden" id="hidden-is-logado" name="is-logado" value="0">
            <input type="hidden" id="hidden-username" name="username" value="">
        @else
            <input type="hidden" id="hidden-is-logado" name="is-logado" value="1">
            <input type="hidden" id="hidden-username" name="username" value="{{ Auth::user()->name }}">
        @endguest
    </div>
    <div style="display: none; position: absolute; background-image: url(/img/fundo-home.png); background-size: cover; background-position: center; width: 100%; height: 100%;"></div>
    <div style="height: 100px; 
        width: 100%; 
        background-image: url(/img/cabecalho-repeat.png);
        position: absolute;
        background-repeat-x: repeat;
        background-repeat-y: no-repeat;">
    </div>
    <div style="height: 100px; 
        width: 100%; 
        background-image: url(/img/cabecalho.png);
        position: absolute;
        background-repeat: no-repeat;">
    </div>
    <div style="height: 100px; 
        width: 100%; 
        margin: 2px 0px 0px -10px;
        background-image: url(/img/logo-ants.png);
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;">
    </div>
    <div style="height: 100%; background-image: url(/img/rodape-repeat.png);  background-repeat-x: repeat; background-repeat-y: no-repeat; background-position-y: bottom;">
        <div style="height: 100%; background-image: url(/img/rodape.png); background-repeat: no-repeat; background-position-y: bottom;">
            <div style="height: calc(100% - 32px);" >
                @yield('content')
            </div>
        </div>
    </div>
    

    <form id="logout-form" action="/logout" method="POST" style="display: none;">
        {{ csrf_field() }}
    </form>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('postscripts')
</body>
</html>
