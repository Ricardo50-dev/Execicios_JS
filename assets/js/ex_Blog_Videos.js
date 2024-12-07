// Chamada de funções
pegarDados()

// Função para abrir o modal com o video em questão
function abrirModal(videoId) {
    let iframeVideo = document.querySelector('#iframeVideo')
    location.href="#abrirModal"
    iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
}
function fecharModal() {
    let iframeVideo = document.querySelector('#iframeVideo')
    iframeVideo.setAttribute('src', `https://www.youtube.com/embed/`)
}

function show(indice, indiceLista) {
    // selecionar a lista com base no nome #lista + numero da lista
    let listaUl = document.querySelector('#lista'+indiceLista)
    
    let mover = 100
    let posicaoXDireita  = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) listaUl.scrollBy(posicaoXDireita, 0)
    if(indice == -1) listaUl.scrollBy(posicaoXEsquerda, 0)
}

function pegarDados() {
    // ENDERECO DO ARQUIVO JSON
    const url = 'assets/json/videos.json'
    fetch(url).then(response =>{   
        return response.json();
    }).then(data => {
        if(data.erro) {
          console.log("Erro ao acessar o JSON")
          return
        }    
        // passe o valor de i no parametro
        atribuirTitulos(data)
        atribuirVideos(data)
    })    
} // fim pegarDados

function atribuirTitulos(data){
    let titulos = document.getElementsByClassName('conteudos');
    for(let i=0; i<titulos.length; i++){
        titulos[i].textContent = data.categorias[i].titulo
    }
}

function atribuirVideos(data){
    let lista1 = document.querySelector('#lista1');
    let lista2 = document.querySelector('#lista2');
    let lista3 = document.querySelector('#lista3');
    let lista4 = document.querySelector('#lista4');
    let lista5 = document.querySelector('#lista5');
    let lista6 = document.querySelector('#lista6');

    for(let i=0; i<36; i++){
        let idVideo = data.videos[i].videoId
        let titulo = data.videos[i].titulo 
        if(data.videos[i].categoriaId == 1){
            atibuirLiIMG(idVideo, lista1)
        }else if(data.videos[i].categoriaId == 2){
            atibuirLiIMG(idVideo, lista2)
        }else if(data.videos[i].categoriaId == 3){
            atibuirLiIMG(idVideo, lista3)
        }else if(data.videos[i].categoriaId == 4){
            atibuirLiIMG(idVideo, lista4)
        }else if(data.videos[i].categoriaId == 5){
            atibuirLiIMG(idVideo, lista5)
        }else{
            atibuirLiIMG(idVideo, lista6)
        }  
    }

}

function atibuirLiIMG(idVideo, ulTag){
    
    let item = document.createElement("li")
    let itemIMG = document.createElement("img") 
    ulTag.appendChild(item)

    itemIMG.setAttribute('class', 'capa-thumb')
    itemIMG.setAttribute('src', 'https://img.youtube.com/vi/'+idVideo+'/maxresdefault.jpg')
    itemIMG.setAttribute('onClick', `abrirModal("${idVideo}")`)
    item.appendChild(itemIMG)

}