if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === item){return i;}
        }
        return -1;
    },

    sum : function(arr) {
        var cont = 0;
        for(var i = 0; i < arr.length; i++) {
            cont += arr[i];
        }
        return cont;
    },

    remove : function(arr, item) {
        var c = arr.filter(function(value){ return value !== item;});
        //console.log(c.join(' '));
        return c;
    },
    
    removeWithoutCopy : function(arr, item) {
        //console.log(arr.join(' '));
        var idx = arr.indexOf(item);
        while (idx !== -1) {
            arr.splice(idx,1);
            idx = arr.indexOf(item);
        }
        //console.log(arr.join(' '));
        return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function(value){ return value === item; }).length;
    },

    duplicates : function(arr) {
        var ret = [];
        arr.forEach(function(element, index){ 
            var find = arr.indexOf(element, index+1);
            var exist = ret.indexOf(element);
            if(exist === -1 && find !== -1){
                ret.push(element);
            }
        });
        //console.log(ret.join(' '));
        return ret;
    },

    square : function(arr) {
        var c = arr.map(function(value){ return Math.pow(value,2);});
        //console.log(c.join(' '));
        return c;
    },

    findAllOccurrences : function(arr, target) {
        var indices = [];
        var idx = arr.indexOf(target);
        while (idx !== -1) {
            indices.push(idx);
            idx = arr.indexOf(target, idx + 1);
        }
        return indices;
    }
  };
});
