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

  function drawMarkers() {
    $.each(markers, function(id, meta) {
      // Draw a tooltip placeholder if it isn't already drawn.
      var tooltipID = id + '-tooltip';
      if ($('#map-canvas').find($("#" + tooltipID + "")).length == 0) {
        $('#map-canvas').append('<div class="tooltip" id="' + tooltipID + '">');
      }

      // Create a marker for the current object.
      var currLatlng = new google.maps.LatLng(meta.lat, meta.lng);

      // Add the marker to the map.
      var marker = new google.maps.Marker({
        position: currLatlng,
        map: map,
        title: meta.title,
      });

      // Get the x and y position of each marker on the map.
      var pos = marker.getPosition();
      var proj = overlay.getProjection();
      var p = proj.fromLatLngToContainerPixel(pos);
      var markerX = Math.round(p.x);
      var markerY = Math.round(p.y);

      google.maps.event.addListener(marker, 'mouseover', function() {
        $("#" + tooltipID + "")
          .css("left", markerX + "px")
          .css("top", (markerY - 40) + "px")
          .attr("title", marker.title).tooltip('show');
      });

      google.maps.event.addListener(marker, 'mouseout', function() {
        $("#" + tooltipID + "").tooltip('hide');
      });
    });
  }

  google.maps.event.addDomListener(window, 'load', drawMarkers);
  google.maps.event.addDomListener(map, 'idle', drawMarkers);

  var markers = {
    '2creative' : {
      'title'   : '2Creative',
      'website' : 'http://www.2creative.se/',
      'lat'     : 57.7076072,
      'lng'     : 11.9812482
    },
    'cordovan' : {
      'title'   : 'Cordovan',
      'website' : 'http://www.cordovan.se/',
      'lat'     : 57.703723,
      'lng'     : 11.9678293
    },
    'cpb' : {
      'title'   : 'CP+B',
      'website' : 'http://www.cpbgroup.com/',
      'lat'     : 57.7003216,
      'lng'     : 11.9552149
    },
    'creuna' : {
      'title'   : 'Creuna',
      'website' : 'http://www.creuna.se/',
      'lat'     : 57.7042,
      'lng'     : 11.9709
    },
    'dear-friends' : {
      'title'   : 'Dear Friends',
      'website' : 'http://dearfriends.se/',
      'lat'     : 57.710033,
      'lng'     : 11.937117
    },
    'fully-flared' : {
      'title'   : 'Fully Flared',
      'website' : 'http://fullyflared.se/',
      'lat'     : 57.7035561,
      'lng'     : 11.9651989
    },
    'hiq' : {
      'title'   : 'HiQ',
      'website' : 'http://www.hiq.se/',
      'lat'     : 57.7072301,
      'lng'     : 11.9691746
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
    'inuse' : {
      'title'   : 'Inuse',
      'website' : 'http://www.inuse.se/',
      'lat'     : 57.7039047,
      'lng'     : 11.9693537
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
    'digitaslbi' : {
      'title'   : 'DigitasLBi',
      'website' : 'http://www.digitaslbi.com/se',
      'lat'     : 57.7051801,
      'lng'     : 11.9713869
    },
    'mogul' : {
      'title'   : 'Mogul',
      'website' : 'http://www.mogul.com/',
      'lat'     : 57.7010836,
      'lng'     : 11.9759599
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
    'nute' : {
      'title'   : 'Nute',
      'website' : 'http://www.nute.se/',
      'lat'     : 57.7029201,
      'lng'     : 11.9617392
    },
    'ottoboni' : {
      'title'   : 'Ottoboni',
      'website' : 'http://www.ottoboni.se/',
      'lat'     : 57.713406,
      'lng'     : 11.9676541
    },
    'rabash' : {
      'title'   : 'Rabash',
      'website' : 'http://rabash.se/',
      'lat'     : 57.7003845,
      'lng'     : 11.954508
    },
    'raket' : {
      'title'   : 'Raket',
      'website' : 'http://www.raketwebbyra.se/',
      'lat'     : 57.699575,
      'lng'     : 11.9650444
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
    'spiro' : {
      'title'   : 'Spiro',
      'website' : 'http://spiro.se/',
      'lat'     : 57.7037982,
      'lng'     : 11.9661591
    },
    'squeed' : {
      'title'   : 'Squeed',
      'website' : 'http://www.squeed.com/',
      'lat'     : 57.70263,
      'lng'     : 11.9634389
    },
    'stendahls' : {
      'title'   : 'Stendahls',
      'website' : 'http://www.stendahls.se/',
      'lat'     : 57.6976337,
      'lng'     : 11.9643261
    },
    'understandit' : {
      'title'   : 'UnderstandIt',
      'website' : 'https://understandit.se/',
      'lat'     : 57.7028201,
      'lng'     : 11.9616390
    },
    'valentin-byhr' : {
      'title'   : 'Valentin&Byhr',
      'website' : 'http://valentin.se/',
      'lat'     : 57.7040412,
      'lng'     : 11.9671915
    },
    'we-made-you-look' : {
      'title'   : 'We Made You Look',
      'website' : 'http://www.wmyl.se/',
      'lat'     : 57.699688,
      'lng'     : 11.966011
    },
    'webbhuset' : {
      'title'   : 'Webbhuset',
      'website' : 'http://www.webbhuset.se/',
      'lat'     : 57.7047095,
      'lng'     : 11.9677988
    },
    'wipcore' : {
      'title'   : 'Wipcore',
      'website' : 'http://www.wipcore.se/',
      'lat'     : 57.7142578,
      'lng'     : 11.9728844
    },
    'xelera' : {
      'title'   : 'Xelera',
      'website' : 'http://www.xelera.se/',
      'lat'     : 57.704975,
      'lng'     : 11.969246
    },
    'zooma' : {
      'title'   : 'Zooma',
      'website' : 'http://www.zooma.se/',
      'lat'     : 57.7063754,
      'lng'     : 11.9444496
    }
  };

});
