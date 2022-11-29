import("./service/service.js");

const forecasts = [
  {
    "Partido": " Portugal - Uruguay ",
    "Pronostico": " Más de 1.5 Total de goles ",
    "cuota": 1.38
  },
  {
    "Partido": "  Portugal - Uruguay ",
    "Pronostico": " Más de 8.5 Total de Tiros de Esquina ",
    "cuota": 1.50
  },
  {
    "Partido": " Philadelphia 76ers - Atlanta Hawks ",
    "Pronostico": " Philadelphia 76ers +7 Hándicap - Prórroga incluida ",
    "cuota": 1.40
  },
  {
    "Partido": " Washington Wizards - Minnesota Timberwolves ",
    "Pronostico": " Más de 219 Total de puntos - Prórroga incluida ",
    "cuota": 1.38
  },
  {
    "Partido": " Boston Celtics - Charlotte Hornets ",
    "Pronostico": " Más de 217 Total de puntos - Prórroga incluida ",
    "cuota": 1.40
  },
  {
    "Partido": " Denver Nuggets - Houston Rockets ",
    "Pronostico": " Más de 221 Total de puntos - Prórroga incluida ",
    "cuota": 1.40
  },
  {
    "Partido": " New York Rangers - New Jersey Devils ",
    "Pronostico": " Más de 5.5 Número total de goles - Prórroga y tanda de penaltis incluida ",
    "cuota": 1.68
  },
  {
    "Partido": " Buffalo Sabres - Tampa Bay Lightning ",
    "Pronostico": " Tampa Bay Lightning Cuotas del partido - Tiempo reglamentario ",
    "cuota": 2.05
  },
  {
    "Partido": " Columbus Blue Jackets - Vegas Golden Knights ",
    "Pronostico": " Ambos Equipos Marcarán al menos 2 goles - Tiempo reglamentario ",
    "cuota": 1.48
  },
  {
    "Partido": " St Louis Blues - Dallas Stars ",
    "Pronostico": "Menos de 7 Total de goles - Tiempo reglamentario ",
    "cuota": 1.35
  }
]


const yesterday =[
  {
    "Partido": " Millonarios FC - Junior Barranquilla ",
    "Pronostico": "Millonarios FC Final del partido ",
    "cuota": 1.50,
    "resultado": 1
  },
  {
    "Partido": "  Millonarios FC - Junior Barranquilla ",
    "Pronostico": "Más de 8.5 Total de Tiros de Esquina ",
    "cuota": 1.60,
    "resultado": 0
  },
  {
    "Partido": " España - Alemania ",
    "Pronostico": " Ambos Equipos Marcarán ",
    "cuota": 1.68,
    "resultado": 1
  },
  {
    "Partido": " Minnesota Wild - Arizona Coyotes ",
    "Pronostico": "Gana Minnesota Wild ",
    "cuota": 1.58,
    "resultado": 1
  },
  {
    "Partido": " Chicago Blackhawks - Winnipeg Jets ",
    "Pronostico": " Winnipeg Jets Apuesta sin empate - Tiempo reglamentario ",
    "cuota": 1.53,
    "resultado": 1
  },
  {
    "Partido": " Anaheim Ducks - Seattle Kraken ",
    "Pronostico": " Ambos Equipos Marcarán al menos 2 goles - Tiempo reglamentario ",
    "cuota": 1.50,
    "resultado": 1
  },
  {
    "Partido": " San José Sharks - Vancouver Canucks ",
    "Pronostico": " Menos de 7.5 Total de goles - Tiempo reglamentario ",
    "cuota": 1.34,
    "resultado": 1
  },
  {
    "Partido": " Brooklyn Nets - Portland Trail Blazers ",
    "Pronostico": " Menos de 231.5 Total de puntos - Prórroga incluida ",
    "cuota": 1.41,
    "resultado": 1
  },
  {
    "Partido": " Minnesota Timberwolves - Golden State Warriors ",
    "Pronostico": " Menos de 244.5 Total de puntos - Prórroga incluida ",
    "cuota": 1.42,
    "resultado": 0
  },
  {
    "Partido": " Los Angeles Clippers - Indiana Pacers ",
    "Pronostico": " Los Angeles Clippers +8 Hándicap - Prórroga incluida ",
    "cuota": 1.40,
    "resultado": 0
  }
]

parlay = []

const todayDate = new Date()
const yesterdayDate = new Date(todayDate)

yesterdayDate.setDate(yesterdayDate.getDate() - 1)

document.getElementById('date').innerHTML = todayDate.toDateString()
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

    earning = earning * item.cuota
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

// Get the container element
var btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

function toggle(day){
var todayView = document.getElementById('today')
var yesterdaView = document.getElementById('yesterday')
var articlesView = document.getElementById('article')
var brands = document.getElementById('banner')




if (day === 'today'){

  todayView.style.display = 'block'
  yesterdaView.style.display = 'none'
  articlesView.style.display = 'none'
  brands.style.display = 'block'
}else if (day === 'yesterday' ){
  todayView.style.display = 'none'
  articlesView.style.display = 'none'
  yesterdaView.style.display = 'block'
  brands.style.display = 'none'
}else if (day === 'article' ){
  todayView.style.display = 'none'
  yesterdaView.style.display = 'none'
  articlesView.style.display = 'block'
  brands.style.display = 'none'
}else{
  todayView.style.display = 'block'
  yesterdaView.style.display = 'none'
  brands.style.display = 'block'
}
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




