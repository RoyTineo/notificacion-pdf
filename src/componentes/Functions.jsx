
// Función para formatear la fecha en el formato deseado
export const formatFecha = (fecha) => {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    // Obtenemos el día, mes y año de la fecha
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
  
    // Construimos la cadena de texto con el formato deseado
    const fechaFormateada = `${dia} de ${mes} del ${año}`;
  
    return fechaFormateada;
  };

  export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
  };