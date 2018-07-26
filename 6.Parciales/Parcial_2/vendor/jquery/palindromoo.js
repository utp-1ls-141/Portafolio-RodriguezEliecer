function main(){
    var num = Number(document.getElementById("palin").value);
    var num2=(+num).toString(2);

    var aux1=(num.toString());
    var aux2=(num2.toString());
    
    var b=(palindromo(aux1));
    var d=(palindromo(aux2));
     

    if(b && d == true){
        document.getElementById("resp").innerHTML=("\n El numero es Palindromo\n");
    }
    else{
        document.getElementById("resp").innerHTML=("\n El numero no es Palindromo\n");
    }
};


 function palindromo(cadena){
     /*eliminar caracteres especiales, espacios y hacer minúsculas*/
     var removeChar = cadena.replace(/[^A-Z0-9]/ig, "").toLowerCase();
     var removeChar2 = (+removeChar).toString(2);
    
     var checkPalindrome = removeChar.split('').reverse().join('');

     /*Compruebe si la cadena es un Palíndromo*/
     if(removeChar === checkPalindrome){
         return true;
     }
     else{  
         return false;
     }
 }

