function isomorphic(a,b){
    var str1 = a;
    var str2 = b;


    if (str1.length !== str2.length) {
        return false;
    }
    var map = {};
    for(var i = 0; i < str1.length; i++) {
        var a = str1[i]; 
        var b = str2[i];
        if (typeof map[a] === "undefined") {
            map[a] = b;

        } else if (map[a] !== b) {
            return false;
        }

        for (var key in map) {
            if (key !== a && b === map[key]) {
                return false;
            }
        }
    }
       return true;
};


function mainn(){
    var str1 = document.getElementById("text1").value;
    var str2 = document.getElementById("text2").value;
    var str3 = document.getElementById("text3").value;
    
    var aux1=isomorphic(str1,str2);
    var aux2=isomorphic(str1,str3);
    var aux3=isomorphic(str2,str1);
    var aux4=isomorphic(str3,str1);

    if (aux1 && aux2 && aux3 && aux4 == true){   
        res="Si es isometrica";
        document.getElementById("resp").innerHTML=res;              
    }
    else {
        res="No es isometrica";
        document.getElementById("resp").innerHTML=res;
    }
};