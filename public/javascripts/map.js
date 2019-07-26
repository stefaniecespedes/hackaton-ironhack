let markers = [];
let infowindow;

window.onload = () => {

   // Displays info box above marker
   infowindow = new google.maps.InfoWindow();

  const superFood = {
    lat: -23.5617326,
    lng: -46.6623271
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: superFood,
    mapTypeId: "roadmap"
  });


  //gets store info from API
  function getStores() {
    axios
      .get("/api")
      .then(response => {
        placeStores(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  //place markers
  function placeStores(stores) {
    stores.forEach(function(store) {
      const center = {
        lat: store.location.coordinates[1],
        lng: store.location.coordinates[0]
      };

      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: store.storeName
      });
      markers.push(pin);
      // Adds info box above marker
      google.maps.event.addListener(pin, "click", function() {
        var contentString = `<h6> ${store.storeName} </h6>
                              <p> ${store.address} </p>`
          infowindow.setContent(contentString);
          infowindow.open(map, this);
        });
    });
    
      
  }
  
  getStores();
};
