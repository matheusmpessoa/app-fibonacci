(function() {
	"use strict";

    angular.module("myApp").controller("initCtrl", function($scope){
		$scope.home = "Home";
		$scope.calculo = "Cálculo";
		$scope.sobre = "Sobre";
		$scope.info = "Informações";
    });

})();

function SomenteNumero(e){
    var tecla = (window.event)?event.keyCode:e.which;

    if((tecla>47 && tecla<58)) return true;
    else{
    if (tecla==8 || tecla==0) return true;
    else  return false;
    }
}

function fiboCalc(){
    var form = document.getElementById('form');
    var num = form.numero.value;

    if (num.match(/([1-9]+)/)){
      var lista = 0;
      var quant = parseInt(num);
      var ant = 0;
      var atual = 1;
      var result = 1;
      var zero = 0;

    if(quant==1){
            document.getElementById('p1').innerHTML = "0";
        }else{
            for (var i = 1; i < quant; i++){
                lista = lista + result + ", ";
                result = atual + ant;
                ant = atual;
                atual = result;
            }
            //document.write("<br><p>Numeros da série de Fibonacci: <br>" + zero + ", " + lista + "</p>");
            document.getElementById('p1').innerHTML = zero + ", " + lista;
        }
    }else{
         document.getElementById('#numero').innerHTML = "0";
    }
}
