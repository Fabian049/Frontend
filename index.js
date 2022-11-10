import("./service/service.js");

const forecasts = [
  {
    "Partido": " Rayo Vallecano – Celta Vigo ",
    "Pronostico": "Más de 1.5 goles ",
    "cuota": 1.36
  },
  {
    "Partido": " Real Madrid – Cadiz ",
    "Pronostico": "Más de 2.5 goles ",
    "cuota": 1.42
  },
  {
    "Partido": " Lazio – Monza ",
    "Pronostico": "Gana Lazio ",
    "cuota": 1.62
  },
  {
    "Partido": " Hellas Verona – Juventus ",
    "Pronostico": "Gana Juventus ",
    "cuota": 1.75
  },
  {
    "Partido": " Valencia – Real Betis ",
    "Pronostico": "Valencia o Empate ",
    "cuota": 1.33
  },
  {
    "Partido": " Atlético Mineiro-MG - Cuiabá-MT ",
    "Pronostico": " Más de 1.5 goles ",
    "cuota": 1.34
  },
  {
    "Partido": " Botafogo-RJ - Santos-SP ",
    "Pronostico": "Más de 0.5 goles de Santos-SP ",
    "cuota": 1.50
  },
  {
    "Partido": " FC Magdeburg - Darmstadt 98",
    "Pronostico": "Ambos Equipos Marcarán(si)",
    "cuota": 1.48
  },
  {
    "Partido": " SK Beveren - Royal Antwerp FC ",
    "Pronostico": " Menos de 3.5 goles ",
    "cuota": 1.38
  },
  {
    "Partido": " Alashkert - FC Urartu ",
    "Pronostico": " Más de 1.5 goles ",
    "cuota": 1.41
  }
]

const yesterday = [
  {
    "partido": " Osasuna – FC Barcelona ",
    "Pronostico": "Gana FC Barcelona ",
    "cuota": 1.49,
    "resultado": 1
  },
  {
    "Partido": " Athletic Bilbao - Valladolid ",
    "Pronostico": "Gana Athletic Bilbao ",
    "cuota": 1.45,
    "resultado": 1
  },
  {
    "Partido": " Junior Barranquila - Millonarios ",
    "Pronostico": "Millonarios FC o Empate ",
    "cuota": 1.63,
    "resultado": 1
  },
  {
    "Partido": " Inter - Bolonia ",
    "Pronostico": "Gana Inter ",
    "cuota": 1.40,
    "resultado": 1
  },
  {
    "Partido": " Eintracht Frankfurt – TSG Hoffenheim ",
    "Pronostico": "Gana Eintracht Frankfurt ",
    "cuota": 1.70,
    "resultado": 1
  },
  ,
  {
    "Partido": " FC Schalke 04 – Mainza 05",
    "Pronostico": " Ambos Equipos Marcarán ",
    "cuota": 1.64,
    "resultado": 0
  },
  {
    "Partido": " Fluminense-RJ – Goiás-GO ",
    "Pronostico": " Gana Fluminense-RJ ",
    "cuota": 1.42,
    "resultado": 1
  },
  {
    "Partido": " Coritiba-PR  - Corinthians-SP ",
    "Pronostico": "Ambos Equipos Marcarán ",
    "cuota": 2.00,
    "resultado": 1
  },
  {
    "Partido": " Lecce - Atalanta ",
    "Pronostico": "Más de 2.5 tiros a puerta por parte de Lecce ",
    "cuota": 1.50,
    "resultado": 1
  },
  {
    "Partido": " Palmeiras-SP - América-MG ",
    "Pronostico": " Gana Palmeiras-SP ",
    "cuota": 1.55,
    "resultado": 1
  }
]

parlay = []

const todayDate = new Date()
const yesterdayDate = new Date(todayDate)

yesterdayDate.setDate(yesterdayDate.getDate() - 1)

document.getElementById('date').innerHTML = todayDate.toLocaleDateString()
document.getElementById('yesterday-date').innerHTML = yesterdayDate.toDateString();
document.querySelector(".badge").style.display = 'none' 
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
  if (parlay.length == 0){
    parlayList.innerHTML = '<p class="no-forecast"> No hay cuotas añadidas </p>'
  }else{
    parlayList.innerHTML = '';

    parlay.map((item, index) => {
      parlayList.innerHTML += `
      <div class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1">${item.Pronostico}</h6>
        <small class="cuota" >${item.cuota}</small>
      </div>
      <div class="d-flex w-100 justify-content-between">
      <small>${item.Partido}</small>
      <button type="button" onClick="removeCuota(${index})" class="btn trash"><i class="fa-solid fa-trash"></i></button>
      </div>
      </div>`
    })
  }
  
}

function removeCuota(index) {

  parlay.splice(index, 1)
  getEarning()
  mapParley()

  if (parlay.length == 0){
    document.querySelector(".badge").style.display = 'none' 
  }else{
    document.querySelector(".badge").innerHTML = parlay.length;
  }
}


function addCuota(index) {
  parlay.push(forecasts[index])
  console.log(parlay)
  openModal()
}

function CrearLista() {


  forecasts.map((cuota, index) => {
    todayList.innerHTML += `

<li class="table-row " id="${index + 1}">
          
          <div class="col col-2" >${cuota.Partido}<p class="card-subtitle mb-2 text-muted">Partido</p></div></div>
          <div class="col col-3" >${cuota.Pronostico}<p class="card-subtitle mb-2 text-muted">Pronostico</p></div></div>
          <div class="col col-4" >${cuota.cuota}<p class="card-subtitle mb-2 text-muted">Cuota</p></div></div>
          <div class="col col-5"><button id="btn${index}" onclick="addCuota(${index})" class="btn head-btns shadow add-hover">Agregar Cuota</button></div>
  </li>

`

  }
  );

  yesterday.map((cuota, index) => {

 

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
  mapParley();
  if( parlay.length == 0){
    document.querySelector(".badge").style.display = 'none' 
  }else{
    document.querySelector(".badge").style.display = 'block' 
    document.querySelector(".badge").innerHTML = parlay.length;
  }
 

}

CrearLista();
mapParley();




