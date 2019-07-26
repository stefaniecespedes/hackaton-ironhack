let markers = [];

window.onload = () => {
  const superFood = {
    lat: -23.5617326,
    lng: -46.6623271
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: superFood,
    mapTypeId: "roadmap"
  });

  //gets restaurants info from API
  function getStores() {
    axios
      .get("/api")
      .then(response => {
        console.log(response.data);
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
        title: store.name
      });
      markers.push(pin);
    });
  }
  getStores();
};
