function tablas(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(`  ${numero} x ${i} = ${numero * i} `);
        document.write(`  ${numero} x ${i} = ${numero * i} <br>`)
    }
}
function factoriales(numero) {
    for (let i = 1; i <= numero; i++) {
        let res = 1;
        for (let j = 1; j <= i; j++) {
            res = res * j
        }
        console.log("el factorial de " + i + " es: " + res);
        document.write(` el factorial de ${i} es: ${res} <br>`)
    }
}





let definirNumero = () => {
    let numero = parseInt(prompt("Favor ingresar un numero entre 1 y 20"))
    if (numero < 1 || numero >= 20) {
        console.log(` Numero fuera de rango `)
        document.write(` Numero fuera de rango `)
        return numero
    } else {
        tablas(numero)
        factoriales(numero)
    }

}

let numero = definirNumero()

