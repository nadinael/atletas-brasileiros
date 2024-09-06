//console.log(dados);

function buscar() {
    let section = document.getElementById("resultados-pesquisa");
    let textoPesquisa = document.getElementById("entrada").value;
    //alert(texto);
    textoPesquisa = textoPesquisa.toLowerCase();
    let conteudo = "";
    let nome = "";
    let desc = "";
    let marcas = "";
    
    if(textoPesquisa==""){
        conteudo = `<div class="item-resultado">
        <p>Busca vazia. Informe o nome do seu atleta favorito.</p>
        </div>
        `;
        section.innerHTML = conteudo;   
        return;
    }

    for(let item of dados){
        nome = item.nome.toLowerCase();
        desc = item.descricao.toLowerCase();
        marcas = item.tags.toLowerCase();
        console.log(marcas);

        if (nome.includes(textoPesquisa) ||
        desc.includes(textoPesquisa) ||
            marcas.includes(textoPesquisa) ){
            conteudo += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank" >${item.nome}</a>
                </h2>
                    <p class="descricao-meta">${item.descricao}</p>
                    
                    <a href="${item.wiki}" target="_blank">Saiba mais</a>
            </div>`;
        }

        if (!conteudo) {
            conteudo = `<div class="item-resultado"> <p>Nenhuma informação encontrada.</p> </div>
        `;;
        }
     
    
    }
    
    section.innerHTML = conteudo;   
}