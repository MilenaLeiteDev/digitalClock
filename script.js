
function automatizarRelogio() {
    //horas, minutos, segundos
    let dataAtual = new Date();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    //data 
    let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // adiciona zero na frente dos meses menores que 10
    let dia = dataAtual.getDate().toString().padStart(2, '0'); // adiciona zero na frente dos dias menores que 10
    let ano = dataAtual.getFullYear();
    let data = mes + '/' + dia + '/' + ano;

    //Para adicionar zero na frente das horas, minutos e segundos
    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    // Para salvar os valores atualizados nos elementos HTML
    let hr = document.getElementById('h');
    let mn = document.getElementById('m');
    let sg = document.getElementById('s');
    let dt = document.getElementById('date');

    hr.textContent = horas;
    mn.textContent = minutos;
    sg.textContent = segundos;
    dt.textContent = data;
}

setInterval(automatizarRelogio, 1000);


