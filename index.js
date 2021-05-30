function initMap() {
    const carlingford = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: carlingford,
    });
    const marker = new google.maps.Marker({
      position: carlingford,
      map: map,
    });
  }