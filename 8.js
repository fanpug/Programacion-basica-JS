//Programa 8. Hacer un programa que solo nos permita introducir S o N
onsole.log("Introduce 'S' o 'N' ");

var char;

process.stdin.on('data', function(data){
    char = data.toString().trim();

    if(char == 'S' || char == 's')
    {
        console.log("Bien hecho! Escribiste S");
    }
    else if(char == 'N' || char == 'n')
    {
        console.log("Bien hecho! Escribiste N");
    }
    else
    {
        console.log("Vuelve a intentarlo.");
    }
    process.exit();
});
