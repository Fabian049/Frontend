import("./service/service.js");

const forecasts = [
  {
    "Partido": " Lens - Clermont ",
    "Pronostico": " Más de 1.5 goles ",
    "cuota": 1.44
  },
  {
    "Partido": "  Bayer Leverkusen – VfB Stuttgart ",
    "Pronostico": " Gana Bayer Leverkuse ",
    "cuota": 1.79
  },
  {
    "Partido": " Sampdoria - Lecce ",
    "Pronostico": " Más de 0.5 goles de Sampdoria ",
    "cuota": 1.37
  },
  {
    "Partido": " Los Angeles Clippers - Brooklyn Nets  ",
    "Pronostico": " Handicap Brooklyn Nets +7",
    "cuota": 1.44
  },
  {
    "Partido": " Washington Wizards - Utah Jazz ",
    "Pronostico": " Más de 213 puntos total ",
    "cuota": 1.40
  },
  {
    "Partido": " Detroit Pistons - Boston Celtics ",
    "Pronostico": " Handicap Detroit Pistons +16",
    "cuota": 1.41
  },
  {
    "Partido": " Indiana Pacers - Toronto Raptors ",
    "Pronostico": " Más de 221.5 total puntos ",
    "cuota": 1.40
  },
  {
    "Partido": " Philadelphia Flyers - Ottawa Senators ",
    "Pronostico": " Ottawa Senators +1 Hándicap - Tiempo reglamentario ",
    "cuota": 1.38
  },
  {
    "Partido": " New Jersey Devils - Arizona Coyotes ",
    "Pronostico": " Ambos Equipos Marcarán al menos 2 goles - Tiempo reglamentario ",
    "cuota": 1.47
  },
  {
    "Partido": " Montreal Canadiens - Pittsburgh Penguins ",
    "Pronostico": " Ambos Equipos Marcarán al menos 2 goles - Tiempo reglamentario ",
    "cuota": 1.44
  }
]

const yesterday = [
  {
    "Partido": " Boyacá Chicó - Atlético Huila ",
    "Pronostico": " Más de 1.5 goles ",
    "cuota": 1.44,
    "resultado": 0
  },
  {
    "Partido": "Lyon - Niza ",
    "Pronostico": " Más de 7.5 Tiros de Esquina ",
    "cuota": 1.40,
    "resultado": 1
  },
  {
    "Partido": " Birmingham - Sunderland ",
    "Pronostico": " Más de 3.5 Tiros de Esquina ",
    "cuota": 1.40,
    "resultado": 1
  },
  {
    "Partido": " Torreense - Vilafranquense ",
    "Pronostico": " Torreense o Vilafranquense s ",
    "cuota": 1.37,
    "resultado": 1
  },
  {
    "Partido": " Boston Celtics - Denver Nuggets ",
    "Pronostico": " Boston Celtics ",
    "cuota": 1.55,
    "resultado": 1
  },
  {
    "Partido": " San Antonio Spurs - Milwaukee Bucks ",
    "Pronostico": " Más de 212.5 total puntos ",
    "cuota": 1.45,
    "resultado": 0
  },
  {
    "Partido": " Oklahoma City Thunder - Toronto Raptors ",
    "Pronostico": " Menos de 227 total puntos ",
    "cuota": 1.43,
    "resultado": 0
  },
  {
    "Partido": " Toronto Maple Leafs - Pittsburgh Penguins ",
    "Pronostico": " Ambos Equipos Marcarán al menos 2 goles - Tiempo reglamentario ",
    "cuota": 1.40,
    "resultado": 1
  },
  {
    "Partido": " Washington Capitals - Tampa Bay Lightning ",
    "Pronostico": " Más de 5 Total de goles ",
    "cuota": 1.40,
    "resultado": 1
  },
  {
    "Partido": " Seattle Kraken- Minnesota Wild",
    "Pronostico": " Menos de 7.5 goles",
    "cuota": 1.50,
    "resultado": 1
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




