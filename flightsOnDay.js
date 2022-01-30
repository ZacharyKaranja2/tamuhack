function sortbyColumn(origin, column) {
  clearTable();
  getFlightsOnDay("", origin, column);
}

function clearTable() {
  element = document.getElementById("airports")
  children_ =  Array.from(element.children)
  children_.forEach(child => child.remove())
}

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
  
  console.log(data[0].origin.code)
  headerRow = element.insertRow()
  headerList.forEach(title => {
    cell = headerRow.insertCell()
    cell.innerHTML = title
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