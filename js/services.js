'use strict';
angular.module('myAppServices', []).factory('elementAreaCalculator',
    function(){
        return function(height,width){
            return height*width;
        }
    });

