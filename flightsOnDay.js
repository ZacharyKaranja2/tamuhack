function sortbyColumn(column) {
  clearTable();
  getFlightsOnDay("", "", "", column);
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

  if (!ascending) {
    data = data.reverse()
  }
  //data.sort((a,b)=> (a.flightNumber > b.flightNumber ? 1 : -1))
  /*<th onclick="sortbyColumn('flightNumber')">Code</th>
    <th>City</th>
    <th>State</th>
    <th>Timezone</th>
    <th>Latitude</th>
    <th>Longitude</th>*/
  children_ =  Array.from(element.children)
  children_.forEach(child => child.remove())
  
  headerList = ["Flight Number", "Origin", "Destination", "Distance", "Duration", "Departure Time", "Arrival Time"]
  
  headerRow = element.insertRow()
  headerList.forEach(title => {
    console.log(title)
    cell = headerRow.insertCell()
    cell.innerHTML = title
    cell.setAttribute("tag","th")
    cell.setAttribute("onClick", `sortbyColumn('${title}')`)
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

        
        //element.insertRow(row)
    })

}

function getFlightsOnDay(date="", origin="", destination="", sortingMethod) {
  date = "2021-01-30"
  origin = "DFW"
  destination = "JFK"
  var request = new XMLHttpRequest()
  
  request.open('GET', `https://american-airlines-tamuhack.herokuapp.com/flights?date=1111-11-11&origin=DFW`, true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      console.log(data)
      element = document.getElementById("airports")

      createFlightTable(data, sortingMethod, true, element)
      flightData = data
      
    } else {
      console.log('error')
    }
  }

  request.send()
}