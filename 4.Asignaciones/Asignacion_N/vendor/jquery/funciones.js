//Funcion concatenacion
function concat(){

    var text1= document.getElementById("text1").value;
    var text2= document.getElementById("text2").value;
    var r= text1+" "+text2;

        document.getElementById("resp").innerHTML=r;
};


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

    var aleatorio;
    for(f=0; f<n1; f++){
        for(c=0; c<n1; c++){
            if(f==c)
            {
                matriz[f][c] =random();            
            }
            else
            matriz[f][c] = Math.floor((Math.random() * 1000)+1);
            str = str + "  " + matriz[f][c];
        }
     str = str + "<br>";
    }
      document.getElementById("resp").innerHTML=str;
}


function random(){
    while(true){
        aleatorio = Math.floor((Math.random() * 1000) + 1);
        if(aleatorio % 3 == 0){
            return aleatorio;
            break;
            }else continue;
    }
}