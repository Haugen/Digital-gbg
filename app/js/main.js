var studios = {
  'cpb' : {
    'title'   : 'CP+B',
    'website' : 'http://www.cpbgroup.com/',
    'lat'     : 57.7003216,
    'lng'     : 11.9552149
  },
  'dear-friends' : {
    'title'   : 'Dear Friends',
    'website' : 'http://dearfriends.se/',
    'lat'     : 57.7086734,
    'lng'     : 11.9631469
  },
  'fullyflared' : {
    'title'   : 'Fully Flared',
    'website' : 'http://fullyflared.se/',
    'lat'     : 57.7035561,
    'lng'     : 11.9651989
  },
  'humblebee' : {
    'title'   : 'Humblebee',
    'website' : 'http://humblebee.se/',
    'lat'     : 57.6995669,
    'lng'     : 11.9368491
  },
  'inserve' : {
    'title'   : 'Inserve',
    'website' : 'http://www.inserve.se/',
    'lat'     : 57.703735,
    'lng'     : 11.962217
  },
  'itiden' : {
    'title'   : 'Itiden',
    'website' : 'http://www.itiden.se/',
    'lat'     : 57.7038956,
    'lng'     : 11.9688672
  },
  'kodamera' : {
    'title'   : 'Kodamera',
    'website' : 'http://www.kodamera.se/',
    'lat'     : 57.6997764,
    'lng'     : 11.9487528
  },
  'lineducation' : {
    'title'   : 'Lin Education',
    'website' : 'http://lineducation.se/',
    'lat'     : 57.708201,
    'lng'     : 11.944475
  },
  'lexicon' : {
    'title'   : 'Lexicon',
    'website' : 'http://www.lexicon.se/',
    'lat'     : 57.705857,
    'lng'     : 11.964815
  },
  'monocl' : {
    'title'   : 'Monocl',
    'website' : 'http://2014.monocl.com/',
    'lat'     : 57.7063865,
    'lng'     : 11.9614117
  },
  'netrelations' : {
    'title'   : 'NetRelations',
    'website' : 'https://www.netrelations.com/sv/',
    'lat'     : 57.7061879,
    'lng'     : 11.9686219
  },
  'ottoboni' : {
    'title'   : 'Ottoboni',
    'website' : 'http://www.ottoboni.se/',
    'lat'     : 57.713406,
    'lng'     : 11.9676541
  },
  'rapidimages' : {
    'title'   : 'RapidImages',
    'website' : 'https://www.rapidimages.se/',
    'lat'     : 57.688637,
    'lng'     : 11.906477
  },
  'schimpanz' : {
    'title'   : 'Schimpanz',
    'website' : 'http://schimpanz.com/',
    'lat'     : 57.6978569,
    'lng'     : 11.9510456
  },
  'semcon' : {
    'title'   : 'Semcon',
    'website' : 'http://www.semcon.com/',
    'lat'     : 57.7127473,
    'lng'     : 11.9479666
  },
  'understandit' : {
    'title'   : 'UnderstandIt',
    'website' : 'https://understandit.se/',
    'lat'     : 57.7029101,
    'lng'     : 11.9617290
  },
  'valentin-byhr' : {
    'title'   : 'Valentin&Byhr',
    'website' : 'http://valentin.se/',
    'lat'     : 57.7040412,
    'lng'     : 11.9671915
  },
  'vaimo' : {
    'title'   : 'Vaimo',
    'website' : 'http://www.raketwebbyra.se/',
    'lat'     : 57.7031889,
    'lng'     : 11.9885221
  },
};

$(document).ready(function() {
  // Create the map, center it on Gothenburg and add it to our canvas in the
  // DOM.
  var mapOptions = {
    center: { lat: 57.7063539, lng: 11.9619285 },
    zoom: 14
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var overlay = new google.maps.OverlayView();
  overlay.draw = function() {};
  overlay.setMap(map);
  var markers = {};
  var i = 0;

  // For each studio, add a marker to our local markers object.
  $.each(studios, function(id, meta) {
    var currLatlng = new google.maps.LatLng(meta.lat, meta.lng);
    var marker = new google.maps.Marker({
      position: currLatlng,
      map: map,
      title: meta.title,
    });
    markers[id] = marker;
    i++;
  });

  function drawMarkers() {
    $.each(markers, function(id, meta) {
      // Draw a tooltip placeholder if it isn't already drawn.
      var tooltipID = id + '-tooltip';
      if ($('#map-canvas').find($("#" + tooltipID + "")).length == 0) {
        $('#map-canvas').append('<div class="tooltip" id="' + tooltipID + '">');
      }

      // Get the x and y position of each marker on the map.
      var pos = this.getPosition();
      var proj = overlay.getProjection();
      var p = proj.fromLatLngToContainerPixel(pos);
      var markerX = Math.round(p.x);
      var markerY = Math.round(p.y);

      google.maps.event.addListener(this, 'mouseover', function() {
        $("#" + tooltipID)
          .css("left", markerX + "px")
          .css("top", (markerY - 40) + "px")
          .attr("title", this.title).tooltip('show');
      });

      google.maps.event.addListener(this, 'mouseout', function() {
        $("#" + tooltipID).tooltip('hide');
      });
    });
  }

  google.maps.event.addDomListener(window, 'load', drawMarkers);
  google.maps.event.addDomListener(map, 'idle', drawMarkers);
});
