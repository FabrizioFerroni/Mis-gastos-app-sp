function obtenerFechaPersonalizada() {
  const fecha = new Date();

  const anio = fecha.getFullYear();
  const mes = agregarCeroDelante(fecha.getMonth() + 1);
  const dia = agregarCeroDelante(fecha.getDate());
  const horas = agregarCeroDelante(fecha.getHours());
  const minutos = agregarCeroDelante(fecha.getMinutes());
  const segundos = agregarCeroDelante(fecha.getSeconds());
  const milisegundos = fecha.getMilliseconds();
  const zonaHorariaOffset = fecha.getTimezoneOffset();
  const zonaHoraria = obtenerZonaHorariaConOffset(zonaHorariaOffset);

  const fechaFormateada = `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}.${milisegundos}${zonaHoraria}`;

  return fechaFormateada;
}

function agregarCeroDelante(numero) {
  return numero < 10 ? "0" + numero : numero;
}

function obtenerZonaHorariaConOffset(offset) {
  const signo = offset > 0 ? "-" : "+";
  const horas = agregarCeroDelante(Math.abs(Math.floor(offset / 60)));
  const minutos = agregarCeroDelante(Math.abs(offset % 60));
  return `${signo}${horas}:${minutos}`;
}

export const fechaPersonalizada = obtenerFechaPersonalizada();
