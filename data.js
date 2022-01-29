// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://american-airlines-tamuhack.herokuapp.com/airports?code=DFW', true)

request.onload = function () {
  // Begin accessing JSON data here
  console.log()
}

// Send request
request.send()

// Begin accessing JSON data here
var data = JSON.parse(this.response)

console.log(data)
