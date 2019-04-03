const b_connect = document.querySelector('#connect');
const b_disconnect = document.querySelector('#disconnect');
const b_send = document.querySelector('#send');
const i_address = document.querySelector('#address');
const i_port = document.querySelector('#port');
const i_message = document.querySelector('#message');

var ws = null;

b_connect.addEventListener('click', () => {
  var url = 'ws://' + i_address.value + ':' + i_port.value + '/';
  console.log('Connect to', url);
  ws = new WebSocket(url, ['arduino']);
  ws.onopen = function () {
  console.log('WebSocket connection opened');
    ws.send('Connect ' + new Date());
    b_connect.setAttribute('disabled', '');
    b_disconnect.removeAttribute('disabled', '');
  };
  ws.onerror = function (error) {
    console.log('WebSocket Error ', error);
  };
  ws.onmessage = function (e) {
    console.log('Received', e.data);
  };
  ws.onclose = function () {
    console.log('WebSocket connection closed');
    b_connect.removeAttribute('disabled', '');
    b_disconnect.setAttribute('disabled', '');
  };
});

b_disconnect.addEventListener('click', () => {
  console.log('Disconnect');
  ws.close();
  ws = null;
});

b_send.addEventListener('click', () => {
  if (ws) {
    if (i_message.value) {
      console.log('Send', i_message.value);
      ws.send(i_message.value);
    } else {
      console.log('Message is empty');
    }
  } else {
    console.log('WebSocket connection is not opened', i_message.value);
  }
});
