function initMap() {
        var uluru = {lat: 34.196348, lng: -118.383783 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      };

$('#carouselExampleIndicators').carousel();


