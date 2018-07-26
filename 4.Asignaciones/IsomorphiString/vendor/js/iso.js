// function hola(){
//     var p1 = document.getElementById("text1").value;
//     var p2 = document.getElementById("text2").value;
//     var p3 = text1.length;
//     var p4 = text2.length;
//     var res="";


//         if (p3 !== p4) {                
//            return false;
//         }
//         else{           
//            return true;
//         }    
                                     
// };
function isomorphic(){
    var str1 = document.getElementById("text1").value;
    var str2 = document.getElementById("text2").value;

    if (str1.length !== str2.length) {
        return false;
    }
    var map = {};
    for(var i = 0; i < str1.length; i++) {
        var a = str1[i]; 
        var b = str2[i];
        if (typeof map[a] === "undefined") {
            map[a] = b;

        // check for error in first tuple ("ABB", "XYZ")
        } else if (map[a] !== b) {
            return false;
        }

        // check for error in second tuple ("ABC", "XYY")
        for (var key in map) {
            if (key !== a && b === map[key]) {
                return false;
            }
        }
    }
    return true;
};


  if (isomorphic()){
    
      res="Si es isometrica";
      document.getElementById("resp").innerHTML=res;
             
  }
  else{
      res="No es isometrica";
      document.getElementById("resp").innerHTML=res;
  }