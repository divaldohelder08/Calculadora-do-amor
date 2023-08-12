let cantadas = "E o amor... Esse foi só reservado para você!-Alguns amam o poder outros têm o poder de amar-São pouca, mas ainda existem pessoas que valem a pena-Você é euro ou dolar? Porque você é muito linda para ser Kwanza-Meu porto seguro é você minha vida-cada um escolhe um destino, então preferi seguir o meu-O amor não precisa ser perfeito, apenas precisa ser verdadeiro-Se um minuto perto de você fico feliz, imagina a vida toda-O amor é uma viagem, valeu pela corona-Que meu infinito seja ao teu lado-O homem é do tamanho do seu sonho que é voçề-O mais engraçado foi que não precisava de um primeiro beijo pra eu gostar tanto de você-sentimento verdadeiro, tão puro e especial, o meu aor por você é ssim-Porque que o meu coração é mais seu do que meu?-Nos meios dos meu erros, meu certo foi você-Tenho comigo uma única certeza: Deus te fez para mim"
cantadas = cantadas.split("-")
let apre = document.querySelector("div#resultado")
function espe(vet) {
    const especiais = /\W|_/;
    return especiais.test(vet.toLowerCase())
}
document.querySelector("input#ran").addEventListener("click", () => {
    var res = Math.round(Math.random() * 100)
    const mull = document.getElementById("m").value;
    const hom = document.getElementById("ho").value;
    mull.trim();
    hom.trim();
    const cantadasran = Math.round(Math.random() * (cantadas.length - 1))
    if (mull.split("").pop() == "a" || mull.split("").pop() == "e" || mull.split("").pop() == "i") {
        if (hom.split("").pop() == "o" || hom.split("").pop() == "s" || hom.split("").pop() == "y") {
            if (res < 50) {
                document.getElementById("ran").value = res + "%"
                alert("O vosso amor não tem chanse")
            }
            else {
                document.getElementById("ran").value = res + "%"
                apre.textContent = cantadas[cantadasran]
                setTimeout(() => {
                    alert("Por favor cuidem do vosso amor")
                }, 100);
            }
        }
        else
            alert("Nomes invalidos")
    }
    else
        alert("Nomes invalidos")
})
document.querySelector("input#cal").addEventListener("click", () => {
    const cantadasran = Math.round(Math.random() * (cantadas.length - 1))
    const mull = document.getElementById("m").value;
    const hom = document.getElementById("ho").value;
    mull.trim();
    hom.trim();
    if (mull.split("").pop() == "a" || mull.split("").pop() == "e" || mull.split("").pop() == "i") {
        if (hom.split("").pop() == "o" || hom.split("").pop() == "s" || hom.split("").pop() == "y") {
            if (espe(mull) != true && espe(hom) != true) {
                let lovepri = amor(document.getElementById("m").value)
                let lovesec = amor(document.getElementById("ho").value)
                let res = lovepri + lovesec
                if (res < 90) {
                    document.getElementById("cal").value = res + "%"
                    alert("O vosso amor não tem chanse")
                }
                else {
                    document.getElementById("cal").value = res + "%"
                    apre.textContent = cantadas[cantadasran]
                    setTimeout(() => {
                        alert("Por favor cuidem do vosso amor")
                    }, 100);
                }
            }
        }
        else
            alert("Nomes invalidos")
    }
    else
        alert("Nomes invalidos")
})
function amor(nome) {
    let todosval = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
    let todos = "abcdefghijklmnopqrstuvwxyz "
    todos = todos.split("")
    let love = 0
    for (let i = 0; i < todos.length; i++) {
        for(let c of nome){
            if (c == todos[i]) {
                todos[i] = todos[i].replace(todos[i], todosval[i])
                love += parseInt(todos[i])
            }
        }
    }
    
    return love
}