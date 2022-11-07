const forecasts = [{
  "partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82 }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32 }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40 }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80 }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60 }]

const yesterday = [{
  "Partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82 }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32 }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40 }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80 }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60 }]


parlay = [{
  "Partido": "Barcelona Vs Real Madrid", "Pronostico": "+3.5 goles totales", "cuota": 1.45
}, { "Partido": "Colombia Vs Alemania", "Pronostico": "+3.5 tarjetas totales", "cuota": 1.82 }, { "Partido": "Betis Vs Chelsea", "Pronostico": "+1.5 tiros a puerta por parte de Salah", "cuota": 2.32 }, { "Partido": "Nacional Vs Millonarios", "Pronostico": "+1.5 goles totales", "cuota": 1.40 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Bucaramanga Vs Jaguares", "Pronostico": "Dayro Moreno marcara", "cuota": 2.0 }, { "Partido": "Palmeiras Vs botafogo", "Pronostico": "-2.5 goles totales", "cuota": 1.65 }, { "Partido": "Cali Vs Medellin", "Pronostico": "+0.5 tarjetas por parte de Medellin", "cuota": 1.40 }, { "Partido": "Junior Vs Millonarios", "Pronostico": "Gana Junior", "cuota": 1.80 }, { "Partido": "Cucuta Vs Cali", "Pronostico": "Gana Cali", "cuota": 1.60 }]


const todayList = document.getElementById('responsive-table');
const yesterdayList = document.getElementById('responsive-table-yesterday');


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


function getEarning() {
  bet = document.getElementById('bet-amount').value
  const earningElement = document.getElementById('earning')
  var earning = 0
  bet = Number(bet)

  parlay.map(item => {

    earning = earning + item.cuota
  })

  earningElement.innerHTML = `${formatter.format(earning * bet)}`
}


function mapParley() {



  var parlayList = document.getElementById('parlay-list')

  parlayList.innerHTML = '';

  parlay.map((item, index) => {
    parlayList.innerHTML += `
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">${item.Pronostico}</h6>
      <small class="cuota" >${item.cuota}</small>
    </div>
    <div class="d-flex w-100 justify-content-between">
    <small>${item.Partido}</small>
    <button type="button" onClick="removeCuota(${index})" class="btn"><i class="fa-solid fa-trash"></i></button>
    </div>
    </a>`
  })
}

function removeCuota(index) {

  parlay.splice(index, 1)
  getEarning()
  mapParley()
}


function addCuota(index, id) {

  document.getElementById(id).disabled = true
  parlay.push(forecasts[index])

}

function CrearLista() {


  forecasts.map((cuota, index) => {
    todayList.innerHTML += `

<li class="table-row " id="${index + 1}">
          
          <div class="col col-2" >${cuota.Partido}<p class="card-subtitle mb-2 text-muted">Partido</p></div></div>
          <div class="col col-3" >${cuota.Pronostico}<p class="card-subtitle mb-2 text-muted">Pronostico</p></div></div>
          <div class="col col-4" >${cuota.cuota}<p class="card-subtitle mb-2 text-muted">Cuota</p></div></div>
          <div class="col col-5"><button id="btn${index}" onclick="addCuota(${index}, 'btn${index}' )" class="btn head-btns shadow add-hover">Agregar Cuota</button></div>
  </li>

`

  }
  );

  yesterday.map((cuota, index) => {

    if (index % 2 == 0) {
      cuota.resultado = 1
    } else {
      cuota.resultado = 0
    }

    yesterdayList.innerHTML += `

<li class="table-row" id="${index + 1}">
          <div class="col col-2" >${cuota.Partido}<p class="card-subtitle mb-2 text-muted">Partido</p></div>
          <div class="col col-3" >${cuota.Pronostico}<p class="card-subtitle mb-2 text-muted">Partido</p></div>
          <div class="col col-4" >${cuota.cuota}<p class="card-subtitle mb-2 text-muted">Partido</p></div>
          <div class="col col-4" style='color: ${cuota.resultado ? 'Green' : 'Red'}' >${cuota.resultado ? 'Win' : 'Lose'}<p class="card-subtitle mb-2 text-muted">Resultado</p></div>      
  </li>

`

  }
  );

}

function openModal() {
  getEarning();
}

CrearLista();
mapParley();




