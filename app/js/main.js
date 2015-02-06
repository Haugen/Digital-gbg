$(document).ready(function() {

  function initialize() {
    // Create the map, center it on Gothenburg and add it to our canvas in the
    // DOM.
    var mapOptions = {
      center: { lat: 57.7063539, lng: 11.9619285 },
      zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    $.each(markers, function(name, meta) {
      // Create a marker for the current object.
      var currLatlng = new google.maps.LatLng(meta.lat, meta.lng);

      // Add the marker to the map.
      var marker = new google.maps.Marker({
          position: currLatlng,
          map: map,
          title: name,
      });
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  var markers = {
    '2Creative' : {
        'website' : 'http://www.2creative.se/',
        'lat'     : 57.7076072,
        'lng'     : 11.9812482
    },
    'Cordovan' : {
        'website' : 'http://www.cordovan.se/',
        'lat'     : 57.703723,
        'lng'     : 11.9678293
    },
    'CP+B' : {
        'website' : 'http://www.cpbgroup.com/',
        'lat'     : 57.7003216,
        'lng'     : 11.9552149
    },
    'Creuna' : {
        'website' : 'http://www.creuna.se/',
        'lat'     : 57.7042,
        'lng'     : 11.9709
    },
    'Dear Friends' : {
        'website' : 'http://dearfriends.se/',
        'lat'     : 57.710033,
        'lng'     : 11.937117
    },
    'Fully Flared' : {
        'website' : 'http://fullyflared.se/',
        'lat'     : 57.7035561,
        'lng'     : 11.9651989
    },
    'HiQ' : {
        'website' : 'http://www.hiq.se/',
        'lat'     : 57.7072301,
        'lng'     : 11.9691746
    },
    'Humblebee' : {
        'website' : 'http://humblebee.se/',
        'lat'     : 57.6995669,
        'lng'     : 11.9368491
    },
    'Inserve' : {
        'website' : 'http://www.inserve.se/',
        'lat'     : 57.703735,
        'lng'     : 11.962217
    },
    'Inuse' : {
        'website' : 'http://www.inuse.se/',
        'lat'     : 57.7039047,
        'lng'     : 11.9693537
    },
    'Itiden' : {
        'website' : 'http://www.itiden.se/',
        'lat'     : 57.7038956,
        'lng'     : 11.9688672
    },
    'Kodamera' : {
        'website' : 'http://www.kodamera.se/',
        'lat'     : 57.6997764,
        'lng'     : 11.9487528
    },
    'DigitasLBi' : {
        'website' : 'http://www.digitaslbi.com/se',
        'lat'     : 57.7051801,
        'lng'     : 11.9713869
    },
    'Mogul' : {
        'website' : 'http://www.mogul.com/',
        'lat'     : 57.7010836,
        'lng'     : 11.9759599
    },
    'Monocl' : {
        'website' : 'http://2014.monocl.com/',
        'lat'     : 57.7063865,
        'lng'     : 11.9614117
    },
    'NetRelations' : {
        'website' : 'https://www.netrelations.com/sv/',
        'lat'     : 57.7061879,
        'lng'     : 11.9686219
    },
    'Nute' : {
        'website' : 'http://www.nute.se/',
        'lat'     : 57.7029201,
        'lng'     : 11.9617392
    },
    'Ottoboni' : {
        'website' : 'http://www.ottoboni.se/',
        'lat'     : 57.713406,
        'lng'     : 11.9676541
    },
    'Rabash' : {
        'website' : 'http://rabash.se/',
        'lat'     : 57.7003845,
        'lng'     : 11.954508
    },
    'Raket' : {
        'website' : 'http://www.raketwebbyra.se/',
        'lat'     : 57.699575,
        'lng'     : 11.9650444
    },
    'Schimanz' : {
        'website' : 'http://schimpanz.com/',
        'lat'     : 57.6978569,
        'lng'     : 11.9510456
    },
    'Semcon' : {
        'website' : 'http://www.semcon.com/',
        'lat'     : 57.7127473,
        'lng'     : 11.9479666
    },
    'Spiro' : {
        'website' : 'http://spiro.se/',
        'lat'     : 57.7037982,
        'lng'     : 11.9661591
    },
    'Squeed' : {
        'website' : 'http://www.squeed.com/',
        'lat'     : 57.70263,
        'lng'     : 11.9634389
    },
    'Stendahls' : {
        'website' : 'http://www.stendahls.se/',
        'lat'     : 57.6976337,
        'lng'     : 11.9643261
    },
    'UnderstandIt' : {
        'website' : 'https://understandit.se/',
        'lat'     : 57.7028201,
        'lng'     : 11.9616390
    },
    'Valentin&Byhr' : {
        'website' : 'http://valentin.se/',
        'lat'     : 57.7040412,
        'lng'     : 11.9671915
    },
    'We Made You Look' : {
        'website' : 'http://www.wmyl.se/',
        'lat'     : 57.699688,
        'lng'     : 11.966011
    },
    'Webbhuset' : {
        'website' : 'http://www.webbhuset.se/',
        'lat'     : 57.7047095,
        'lng'     : 11.9677988
    },
    'Wipcore' : {
        'website' : 'http://www.wipcore.se/',
        'lat'     : 57.7142578,
        'lng'     : 11.9728844
    },
    'Xelera' : {
        'website' : 'http://www.xelera.se/',
        'lat'     : 57.704975,
        'lng'     : 11.969246
    },
    'Zooma' : {
        'website' : 'http://www.zooma.se/',
        'lat'     : 57.7063754,
        'lng'     : 11.9444496
    }
};

});
