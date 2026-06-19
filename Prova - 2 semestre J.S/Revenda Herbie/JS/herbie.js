function mostrarDados(){
    //cria referencia aos elementos da página
    let inModelo = document.getElementById('inModelo');
    let inAno = document.getElementById('inAno');
    let inPreco  = document.getElementById('inPreco');
    let outClassif = document.getElementById('outClassif')
    let outPrecoVenda = document.getElementById('outPrecoVenda')

    //obtém o conteudo dos campos de entrada de dados
    let modelo = inModelo.value;
    let ano = Number(inAno.value);
    let preco = Number(inPreco.value);

    //valida p preenchimento dos campos
    if(modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)){
        alert('Informe corretamente os dados do veículo');
        inModelo.focus();
        return;
    }

    // chama e atribui o retorne das funções às variaveis
    let classificacao = classificarVeiculo(ano);
    let precoVenda = calcularVenda(preco, classificacao);

    //exibe as respostas
    outClassif.textContent = modelo + " - " + classificacao;
    outPrecoVenda.textContent = "Preço de venda R$: " + precoVenda.toFixed(2);
}

//cria a referencia do botão
let btCalcular =  document.getElementById('btCalcular');
btCalcular.addEventListener('click', mostrarDados);

// função recebe o ano do veiculo como parâmetro
function classificarVeiculo(ano){
    let anoAtual = new Date().getFullYear(); //obtem o ano atual
    let classif;
// condição para definir a classificação do veiculo
    if (ano ==  anoAtual){
        classif = 'Novo';
    } else if (ano == anoAtual-1 || ano == anoAtual - 2){
        classif = 'Semi-Novo';
    } else{
        classif = 'Usado';
    }
    return classif;
}

function calcularVenda(valor, status) {
    let prVenda = (status == 'Novo') ? valor * 1.08 : valor * 1.10;
    return prVenda;
}