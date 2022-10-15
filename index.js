Pronosticos = [{
    "Partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82 }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32 }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40 }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80 }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60 }]






const listaCuotas = document.getElementById('body');

function CrearLista() {
    Pronosticos.map((cuota, index)=>{
        listaCuotas.innerHTML += `        
          <tr id="${index+1}">
        <td>${index+1}</td>
        <td>${cuota.Partido}</td>
        <td>${cuota.Pronostico}</td>
        <td>${cuota.cuota}</td>
        <td><button id="1" onclick="agregarStack(${index+1})" type="button" class="btn btn-primary">Agregar</button></td>
      </tr> `
    })


}
CrearLista();
