Pronosticos = [{
    "Partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82 }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32 }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40 }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80 }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60 }]

PronosticosAyer = [{
  "Partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45,"resultado":"win"
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82,"resultado":"win" }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32,"resultado":"win" }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40,"resultado":"win" }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65,"resultado":"win" }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0,"resultado":"win" }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65,"resultado":"win" }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40,"resultado":"win" }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80,"resultado":"win" }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60,"resultado":"win" }]

const listaCuotas = document.getElementById('body');
const listaCuotasSmooth = document.getElementById('responsive-table');

function CrearLista() {
    Pronosticos.map((cuota, index)=>{
        listaCuotas.innerHTML += `        
          <tr id="${index+1}">
        <td>${index+1}</td>
        <td>${cuota.Partido}</td>
        <td>${cuota.Pronostico}</td>
        <td>${cuota.cuota}</td>
      </tr> `
    })

    Pronosticos.map((cuota, index)=>{
listaCuotasSmooth.innerHTML += `

<li class="table-row" id="${index+1}">
          <div class="col col-1" >${index+1}</div>
          <div class="col col-2" >${cuota.Partido}</div>
          <div class="col col-3" >${cuota.Pronostico}</div>
          <div class="col col-4" >${cuota.cuota}</div>
          <div class="col col-5"><button class="btn btn-success">Add</button></div>
  </li>

`

    }
    );

}


const listaCuotasAyer = document.getElementById('bodyAyer');
const listaCuotasSmoothAyer = document.getElementById('responsive-tableAyer');
function CrearListAyer() {
  PronosticosAyer.map((cuotas, index)=>{
      listaCuotasAyer.innerHTML += `        
        <tr id="${index+1}">
      <td>${index+1}</td>
      <td>${cuotas.Partido}</td>
      <td>${cuotas.Pronostico}</td>
      <td>${cuotas.cuota}</td>
      <td>${cuotas.resultado}</td>
    </tr> `
  })



}
CrearLista();
CrearListAyer();

