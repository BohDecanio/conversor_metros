
function converterValor(valor, unidade) {
        switch (unidade) {
            case "jarda":
                return valor * 1.094; // 1 metro = 1.094 jardas
            case "pe":
                return valor * 3.281; // 1 metro = 3.281 pés
            case "polegada":
                return valor * 39.370; // 1 metro = 39.370 polegadas
            case "milha":
                return valor * 0.000621; // 1 metro = 0.000621 milhas
            default:
                return 0;
        }
    }

    document.getElementById("btn_converter").addEventListener("click", () => {
        const valor = parseFloat(document.getElementById("valor").value);
        const unidade = document.getElementById("menu_suspenso").value;
        const resultado = converterValor(valor, unidade);

        if (!isNaN(resultado)) {
            document.getElementById("resultado").innerHTML = `Resultado: ${resultado.toFixed(3)} ${unidade}(s)`;
        } else {
            document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido. Separe o inteiro por ponto.";
        }
    });

