function saludo() 
{
    let nombre1=document.getElementById("Nombres").value; 
    let apellido1=document.getElementById("Apellidos").value;
    document.getElementById("mensaje").textContent = "hola, " +nombre1+" "+apellido1+" Buenas tardes";

}   
function calculo_nota(){
    let teoria=parseFloat(document.getElementById("Nota_teorica").value);
    let practica=parseFloat(document.getElementById("nota_practica").value);
    let suma =teoria + practica;
    document.getElementById("Nota_sumada").innerHTML = "El promedio es.." + suma;
 
}