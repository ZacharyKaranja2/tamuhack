function mapthings(data) {

    console.log("in map") 
    console.log(data)

    var cities = []
    var jsonInfo = []

    for (var airport of data) {
        // console.log(airport.city)

        // let long = airport.location.latitude;
        // let lat  = airport.location.longitude;
        // if (long < 25 || long > 50) {
        //     break
        // }
        // if (lat < 125 || lat > 65) {
        //     break
        // }

        var c = JSON.stringify(airport.code + " - " + airport.city, null, 1);
        var l = JSON.stringify(airport.location.latitude, null, 1);
        var l2 = JSON.stringify(airport.location.longitude, null, 1);

        jsonInfo.push(JSON.parse(c), {
            'latitude' : JSON.parse(l),
            'longitude' : JSON.parse(l2),
            'tooltip' : {content: JSON.parse(c)},
            'value' : JSON.parse(JSON.stringify("Value 1"))
            }
        );
   }

    $(".mapcontainer").mapael({
        map: {
            name: "usa_states"
            , defaultArea: {
                attrs: {
                    fill: "#f4f4e8"
                    , stroke: "#ced8d0"
                }
                , attrsHover: {
                    fill: "#5F5F5F"
                }
            }
        },


        legend: {
            plot: {
                title: "American cities",
                slices: [{
                    label: "Value 1",
                    sliceValue: "Value 1",
                    type: "image",
                    url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                    width: 18,
                    height: 60,
                    attrsHover: {
                        transform: "s1.5"
                    }
                }, {
                    label: "Value 2",
                    sliceValue: "Value 2",
                    type: "image",
                    url: "http://www.neveldo.fr/mapael/assets/img/marker1.png",
                    width: 18,
                    height: 60,
                    attrsHover: {
                        transform: "s1.5"
                    }
                }]
            }
        },

        plots: jsonInfo,
        
        // plots: {
        //     'ny': {
        //         latitude: 40.717079,
        //         longitude: -74.00116,
        //         tooltip: {content: "New York"},
        //         value: "Value 1"
        //     },
            
        //     // testing
        //     'tx': {
        //         latitude: 29.9902,
        //         longitude: -95.3368,
        //         tooltip: {content: "Texas"},
        //         value: "Value 1"
        //     },

        // }

    });
}



async function mainMap() {
      
    fetch('https://hjfdfdfs.herokuapp.com/airports/all')
    .then(res => res.json())
    .then(data => mapthings(data))
    .catch(err => console.log(err));

}