const nomecpl = prompt("Informe o seu nome completo:")
document.body.innerHTML = `Seu nome completo é: ${nomecpl}<br>`

document.body.innerHTML+= `Seu nome tem: ${nomecpl.length} letras <br>`

document.body.innerHTML += `A primeira letra do seu nome é: ${nomecpl[0]}<br>`

document.body.innerHTML += `O primeiro indíce da letra "a" no seu nome: ${nomecpl.indexOf("a")}<br>`

document.body.innerHTML += `As 3 ultimas letras do seu nome é: ${nomecpl.slice(-3,nomecpl.length)}<br>`

document.body.innerHTML += `Seu nome em letras maiúsculas: ${nomecpl.toUpperCase()}<br>`

document.body.innerHTML += `Seu nome me letras minúsculas: ${nomecpl.toLowerCase()}<br>`