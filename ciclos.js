let cantidad = Number(prompt("Cuantas monedas necesito para comprar una hamburgueza?"));

  while (cantidad != 15) {
    cantidad = Number(prompt("Intenta con un numero entre el 10 y el 20 :)"));
}   if (cantidad == 15) {
    alert("Correcto!")
}

const monedas = Number(prompt("Y si queres un postre, cuantas monedas necesito para comprar un helado?"))
    for (let i = monedas; i <= 23;  i++) {
        document.write(`${i}, `)
    } if (monedas > 23) {
        document.write(`Creo que es muy caro`)
    } 

