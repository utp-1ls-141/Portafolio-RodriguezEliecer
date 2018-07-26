//Matriz
function matriz()
{
    var str='';
    var n1 = Number(document.getElementById("num").value);
    var matriz  = new Array(n1);
    for(i=0; i<n1; i++)
    {
        matriz[i] = new Array(n1);
    }

   // var aleatorio;
    for(f=0; f<n1; f++){
        for(c=0; c<n1; c++){
            if(f==c)
            {
                matriz[f][c] =random();                  
                     
                    if ((n1 % 2)!=0){
                        if (f%c ==0){
                            matriz[f][c] ='23';
                        }
                    }
            }    

            else 
           // matriz[f][c] = Math.floor((Math.random() * 99)+1); 
            while(true){
                var numero=otrorandom();
                if(esPrimo(numero)){
                    matriz[f][c] = numero;
                    break;
                }              
            }
    
            str = str + "  " + matriz[f][c];
        }
     str = str + "<br>";
    }

      document.getElementById("resp").innerHTML=str;
}


function random(){
    while(true){
        aleatorio = Math.floor((Math.random() * 99) + 1);
        if(aleatorio % 23 == 0){
            return aleatorio;
            break;
            }else continue;
    }
};

function otrorandom(){
    while(true){
        num = Math.floor((Math.random() * 99) + 1);
        if(num > 1){
            return num;
            break;
            }else continue;
    }
};

function esPrimo(numero){
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0)
            return false;
        }
            return true; 
};