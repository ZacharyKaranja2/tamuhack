//export function getFlightsOnDay(date, origin, destination) {
  date = "2021-01-30"
  origin = "DFW"
  var request = new XMLHttpRequest()
  //console.log("A")

  request.open('GET', `https://american-airlines-tamuhack.herokuapp.com/flights?date=${date}&origin=${origin}`, true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      console.log(data)
      element = document.getElementById("airports")
      
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

            arrivalTime = row.insertCell(5)
            date = new Date(flight.arrivalTime)
            arrivalTime.innerHTML = date

            
            //element.insertRow(row)
        })
    } else {
      console.log('error')
    }
  }

  request.send()
