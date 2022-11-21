// let map;
// let marker;
// const TGU_COOR = { lat: 14.064587598165161, lng: -87.1704708098588 };

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//     center: TGU_COOR,
//     zoom: 12,
//     });

//     marker = new google.maps.Marker({
//         position: TGU_COOR,
//         map: map
//     })

// }

// window.initMap = initMap;

let map, infoWindow, marker ;
const TGU_COOR = { lat: 14.064587598165161, lng: -87.1704708098588 };

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: TGU_COOR,
        zoom: 13,
    });

    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");
    
    locationButton.classList.add('btn-success','btn-mapa' );
    // locationButton.style.width = '150px';
    // locationButton.style.fontSize = '15px';
    // locationButton.style.left = '211px';
    // locationButton.style.top = '-13px';


    locationButton.textContent = "Ubicacion actual";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // infoWindow.setPosition(pos);
                    // infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                    marker = new google.maps.Marker({
                        position: pos,
                        map: map
                    })


                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });

    
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}



window.initMap = initMap;