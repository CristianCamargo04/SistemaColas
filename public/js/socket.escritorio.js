// Comando para establecer la conexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesesario')
}
var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);
$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {
        if (res === 'No hay tickets') {
            label.text(res);
            alert(res);
            return;
        }
        label.text('Ticket ' + res.numero);
    })
});