const forecasts = [{
  "Partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82 }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32 }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40 }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80 }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60 }]

const yesterday = [{
  "Partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82 }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32 }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40 }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80 }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60 }]


yesterday.map((e, index) => {

  e.resultado = 'Win'
});



const todayList = document.getElementById('responsive-table');
const yesterdayList = document.getElementById('responsive-table-yesterday');

function CrearLista() {


  forecasts.map((cuota, index) => {
    todayList.innerHTML += `

<li class="table-row " id="${index + 1}">
          
          <div class="col col-2" >${cuota.Partido}<p class="card-subtitle mb-2 text-muted">Partido</p></div></div>
          <div class="col col-3" >${cuota.Pronostico}<p class="card-subtitle mb-2 text-muted">Pronostio</p></div></div>
          <div class="col col-4" >${cuota.cuota}<p class="card-subtitle mb-2 text-muted">Cuota</p></div></div>
          <div class="col col-5"><button class="btn head-btns shadow">Agregar Cuota</button></div>
  </li>

`

  }
  );

  yesterday.map((cuota, index) => {

    if (index %2 == 0){
cuota.resultado = 1
    }else{
      cuota.resultado = 0
    }

    yesterdayList.innerHTML += `

<li class="table-row" id="${index + 1}">
          <div class="col col-2" >${cuota.Partido}</div>
          <div class="col col-3" >${cuota.Pronostico}</div>
          <div class="col col-4" >${cuota.cuota}</div>
          <div class="col col-4" style='color: ${cuota.resultado ? 'Green' : 'Red'}' >${cuota.resultado ? 'Win' : 'Lose'}</div>      
  </li>

`

  }
  );

}

CrearLista();


