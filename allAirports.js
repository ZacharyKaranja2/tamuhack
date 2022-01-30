//function getAllAirports() {
    var request = new XMLHttpRequest()

    request.open('GET', "https://american-airlines-tamuhack.herokuapp.com/airports/all", true)
    request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        //console.log(data)
        element = document.getElementById("airports")
        data.forEach(airport => {
            row = element.insertRow()

            code = row.insertCell(0)
            code.innerHTML = airport.code

            city = row.insertCell(1)
            city.innerHTML = airport.city

            state = row.insertCell(2)

            timezone = row.insertCell(3)
            timezone.innerHTML = airport.timezone.replace("_"," ")

            latitude = row.insertCell(4)
            latitude.innerHTML = airport.location.latitude

            longitude = row.insertCell(5)
            longitude.innerHTML = airport.location.longitude

            
            //element.insertRow(row)
        })
    } else {
        console.log('error')
    }
    }

    request.send()
    //console.log("A")
//}

//export {getAllAirports}