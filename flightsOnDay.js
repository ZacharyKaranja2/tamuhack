function sortbyColumn(origin, column) {
  clearTable();
  getFlightsOnDay("", origin, column);
}

function clearTable() {
  element = document.getElementById("airports")
  children_ =  Array.from(element.children)
  children_.forEach(child => child.remove())
}

var flightData;

function createFlightTable(data=flightData, sortingMethod, ascending=true, element) {
  switch(sortingMethod) {
    case "Flight Number":
      data.sort((a,b)=> (a.flightNumber > b.flightNumber ? 1 : -1))
      break;
    case "Origin":
      data.sort((a,b)=> (a.origin.code > b.origin.code ? 1 : -1))
      break;
    case "Destination":
      data.sort((a,b)=> (a.destination.code > b.destination.code ? 1 : -1))
      console.log("A")
      break;
    case "Distance":
      data.sort((a,b)=> (a.distance > b.distance ? 1 : -1))
      break
    case "Duration":
      data.sort((a,b)=> (a.duration.locale > b.duration.locale ? 1 : -1))
      break
    case "Departure Time":
      data.sort((a,b)=> (a.flightNumber > b.flightNumber ? 1 : -1))
      break
    case "Arrival Time":
      data.sort((a,b)=> (a.departureTime > b.departureTime ? 1 : -1))
      break
    default:
      break
  }
  
  children_ =  Array.from(element.children)
  children_.forEach(child => child.remove())
  
  headerList = ["Flight Number", "Origin", "Destination", "Distance", "Duration", "Departure Time", "Arrival Time"]
  
  headerRow = element.insertRow()
  headerList.forEach(title => {
    cell = headerRow.insertCell()
    cell.innerHTML = title
    cell.setAttribute("tag","th")
    cell.setAttribute("onClick", "sortbyColumn(" + `'${data[0].origin.code}','${title}'`+")")
  })

  data.forEach(flight => {
        row = element.insertRow()

        flightNumber = row.insertCell(0)
        flightNumber.innerHTML = flight.flightNumber

        originCode = row.insertCell(1)
        originCode.innerHTML = flight.origin.code

        destinationCode = row.insertCell(2)
        destinationCode.innerHTML = flight.destination.code

        distance = row.insertCell(3)
        distance.innerHTML = flight.distance + " km"

        duration = row.insertCell(4)
        duration.innerHTML = flight.duration.locale
        
        departureTime = row.insertCell(5)
        date = new Date(flight.departureTime)
        departureTime.innerHTML = date

        arrivalTime = row.insertCell(6)
        date = new Date(flight.arrivalTime)
        arrivalTime.innerHTML = date
    })

}

function getFlightsOnDay(date="", origin="DFW", sortingMethod) {
  date = new Date().toISOString().slice(0, 10)
  console.log(origin)
  var request = new XMLHttpRequest()
  
  request.open('GET', `https://american-airlines-tamuhack.herokuapp.com/flights?date=${date}&origin=${origin}`, true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      element = document.getElementById("airports")

      createFlightTable(data, sortingMethod, true, element)
      flightData = data
      
    } else {
      console.log('error')
    }
  }

  request.send()
}
console.log("open")

function mouseClick(event) {
  let x = event.clientX
  let y = event.clientY
  console.log(x +" - " + y)

  if (325 < x && x < 375 && 25 < y && y < 75) {
    clearTable()
    getFlightsOnDay("2021-01-30", "SEA", true)
    document.getElementById("airports").scrollIntoView();
    console.log("SEA")
  } else if (240 < x && x < 280 && 350 < y && y < 400) {
      console.log("SFO")
      clearTable()
      getFlightsOnDay("2021-01-30", "SFO", true)
      document.getElementById("airports").scrollIntoView();
  } else if (330 < x && x < 390 && 540 < y && y < 580) {
      console.log("SAN") 
      clearTable()
      getFlightsOnDay("2021-01-30", "SAN", true)
      document.getElementById("airports").scrollIntoView();
  } else if (420 < x && x < 480 && 460 < y && y < 500) {
      console.log("LAS")
      
      clearTable()
      getFlightsOnDay("2021-01-30", "LAS", true)
      document.getElementById("airports").scrollIntoView();
  } else if (525 < x && x < 575 && 300 < y && y < 360) {
      console.log("SLC")
      
    clearTable()
    getFlightsOnDay("2021-01-30", "SLC", true)
    document.getElementById("airports").scrollIntoView();
  } else if (700 < x && x < 740 && 360 < y && y < 420) {
      console.log("DEN")
      
    clearTable()
    getFlightsOnDay("2021-01-30", "DEN", true)
    document.getElementById("airports").scrollIntoView();
  } else if (940 < x && x < 980 && 700 < y && y < 750) {
      console.log("IAH")
      
    clearTable()
    getFlightsOnDay("2021-01-30", "IAH", true)
    document.getElementById("airports").scrollIntoView();
  } else if (980 < x && x < 1020 && 220 < y && y < 260) {
      console.log("MSP")
      
    clearTable()
    getFlightsOnDay("2021-01-30", "MSP", true)
    document.getElementById("airports").scrollIntoView();
  } else if (1520 < x && x < 1580 && 225 < y && y < 275) {
      console.log("BOS")
      clearTable()
      getFlightsOnDay("2021-01-30", "BOS", true)
      document.getElementById("airports").scrollIntoView();
  } else if (1470 < x && x < 1490 && 300 < y && y < 320) {
      console.log("EWR")
      clearTable()
      getFlightsOnDay("2021-01-30", "EWR", true)
      document.getElementById("airports").scrollIntoView();
  } else if (1450 < x && x < 1470 && 325 < y && y < 370) {
      console.log("PHL")
      clearTable()
      getFlightsOnDay("2021-01-30", "PHL", true)
      document.getElementById("airports").scrollIntoView();
  } else if (1400 < x && x < 1450 && 350 < y && y < 400) {
      console.log("BWI")
      clearTable()
      getFlightsOnDay("2021-01-30", "BWI", true)
      document.getElementById("airports").scrollIntoView();
  } else if (1350 < x && x < 1375 && 450 < y && y < 500) {
      console.log("TPA")
      clearTable()
      getFlightsOnDay("2021-01-30", "TPA", true)
      document.getElementById("airports").scrollIntoView();
  } else if (1225 < x && x < 1275 && 550 < y && y < 600) {
      console.log("ATL")
      clearTable()
      getFlightsOnDay("2021-01-30", "ATL", true)
      document.getElementById("airports").scrollIntoView();
  } else if (1350 < x && x < 1400 && 600 < y && y < 650) {
      console.log("MCO")
      clearTable()
      getFlightsOnDay("2021-01-30", "MCO", true)
      document.getElementById("airports").scrollIntoView();
  }  else if (1390 < x && x < 1440 && 675 < y && y < 725) {
      console.log("FLL")
      clearTable()
      getFlightsOnDay("2021-01-30", "FLL", true)
      document.getElementById("airports").scrollIntoView();
  }

}

document.addEventListener("click", mouseClick)
