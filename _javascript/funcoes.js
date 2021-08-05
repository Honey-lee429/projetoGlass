// javascript da pag. mídia

function mudaFoto(foto) {
    document.getElementById('oculos').src = foto;
}

// javascript da pag. fale-conosco.html

function calc_total() {
    let qtd = parseInt (document.getElementById('quantidade').value);
    tot = qtd * 1500;
    document.getElementById('preco').value = tot;
}