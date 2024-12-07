'use strict'
// armazenar em constante array function que retorna os valores da chave 'todoList'
const getBanco = () => JSON.parse(localStorage.getItem('DbClient')) ?? []
// armazenar em constante array function que define um valor da chave 'tarefa' do nosso 'todoList'
const setBanco = (banco) => localStorage.setItem('DbClient', JSON.stringify(banco))


// Chamada de funções
atualizarTabela()

function criarCliente(cliente, index) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.telefone}</td>
        <td>${cliente.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(tr)
}
// Ações do CRUD no banco
function criarClienteBanco(client) {
    const dbClient = getBanco()
    dbClient.push(client)
    setBanco(dbClient)
}
function deletaClienteBanco(index) {
    const dbClient = getBanco()
    dbClient.splice(index, 1)
    setBanco(dbClient)
}
function atualizaClienteBanco(client, index) {
    const dbClient = getBanco()
    dbClient[index] = client
    setBanco(dbClient)
}
function editarClienteBanco(index){
    const client = getBanco()[index]
    client.index = index
    document.getElementById('nome-cliente').value = client.nome
    document.getElementById('email-cliente').value = client.email
    document.getElementById('telefone-cliente').value = client.telefone
    document.getElementById('cidade-cliente').value = client.cidade
    document.getElementById('nome-cliente').dataset.index = client.index
    abrirModal()
}
function salvarCliente() {
    if (document.getElementById('form').reportValidity()) {
        const client = {
            nome: document.getElementById('nome-cliente').value,
            email: document.getElementById('email-cliente').value,
            telefone: document.getElementById('telefone-cliente').value,
            cidade: document.getElementById('cidade-cliente').value
        }
        const index = document.getElementById('nome-cliente').dataset.index
        if (index == 'new') {
            criarClienteBanco(client)
            atualizarTabela()
            closeModal()
        } else {
            atualizaClienteBanco(client, index)
            atualizarTabela()
            closeModal()
        }
    }
}


function atualizarTabela() {
    const dbClient = getBanco()
    limparTabela()
    dbClient.forEach(criarCliente)
}
function limparTabela() {
    const tbody = document.querySelectorAll('#tableClient>tbody tr')
    tbody.forEach(row => row.parentNode.removeChild(row))
}

function abrirModal() {
    let modal = document.getElementById('modal1')
    modal.classList.add('active')
    modal.addEventListener('click', (e) => {
        if (e.target.id == 'modal-fechar' || e.target.id == 'modal1' || e.target.id == 'cancelar') {
            let form = document.getElementById('form')
            form.reset()
            modal.classList.remove('active')
        }
    })
}
function abrirModal3() {
    let modal = document.getElementById('modal2')
    modal.classList.add('active')
    modal.addEventListener('click', (e) => {
        if (e.target.id == 'modal-fechar2' || e.target.id == 'modal2' || e.target.id == 'cancelar2') {
            modal.classList.remove('active')
        }
    })
}
function closeModal() {
    let modal = document.getElementById('modal1')
    let form = document.getElementById('form')
    form.reset()
    modal.classList.remove('active')
}

function closeModal2() {
    let modal = document.getElementById('modal2')
    modal.classList.remove('active')
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editarClienteBanco(index)
        } else {
            const client = getBanco()[index]
            let avisoDelete = document.querySelector('.modal-aviso')

            avisoDelete.textContent = `Deseja realmente excluir o cliente ${client.nome}`
            abrirModal3()

        // APAGAR O REGISTRO
            document.getElementById('apagar').addEventListener('click', () => {
                deletaClienteBanco(index)
                atualizarTabela()
                closeModal2()
            })
        }
    }
}

document.querySelector('#tableClient>tbody').addEventListener('click', editDelete)