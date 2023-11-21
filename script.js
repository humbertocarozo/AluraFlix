var listaFilmesFavoritos = []
var listaNomesFilmesFavoritos = []

function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value 
    var nomeFilmeFavorito = document.getElementById('nome-filme').value

    if(filmeFavorito && nomeFilmeFavorito) {
        // adicionar valores ao arrays
        listaFilmesFavoritos.push(filmeFavorito)
        listaNomesFilmesFavoritos.push(nomeFilmeFavorito)

        // limpar os campos de entrada
        document.getElementById('filme').value = ""
        document.getElementById('nome-filme').value = ""

        //chamar funcao para exibir a lista de filmes
        exibirListaFilmes()

    } else {
        alert('Por favor, preencha ambos os campos.')
    }
}

function exibirListaFilmes() {
    var listaFilmesDiv = document.getElementById('listaFilmes')

    listaFilmesDiv.innerHTML = ''

    var listaUl = document.createElement('ul')

    for(var i = 0; i < listaFilmesFavoritos.length; i++) {
        var filmeLi = document.createElement('li')

        var imgElement = document.createElement('img')
        imgElement.src = listaFilmesFavoritos[i]
        imgElement.alt = listaNomesFilmesFavoritos[i]

        filmeLi.appendChild(imgElement)
        filmeLi.appendChild(document.createTextNode(listaNomesFilmesFavoritos[i]))

        listaUl.appendChild(filmeLi)

        
    }

    listaFilmesDiv.appendChild(listaUl)
}