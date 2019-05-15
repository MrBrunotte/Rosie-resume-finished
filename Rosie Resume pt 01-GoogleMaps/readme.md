# Description of code order in maps.js file

Add a Google map in the left-hand panel. We use the Google Maps API to generate the map

## Google Maps API Authentication

Getting the API key:

[GoogleMapsPlattform](https://developers.google.com/maps/documentation/javascript/get-api-key)

Limit the map loads to 25000 per day in APIs -- Quotas

Set the key and copy the key

## interest.html

Add the key in a script tag at the bottom of the page (temporarily) above closing body tag.

Set the id for the map in a div in the section that you want to have the map!

(div #id="map")
line 71

Go back to Google Maps API page:
[MarkerClustersTutorial](https://developers.google.com/maps/documentation/javascript/marker-clustering)

Copy the scripts at the bottom of the code example:

    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>

(we will create the initMap later!)

Paste them below our API key at the bottom of the interest.html file

Now we paste in our API key where it says "YOUR_API_KEY" and then delete the first API key script tag.

Add a script tag that points to the maps.js file! Add this script at teh bottom.

## maps.js

function initMap()
Line 1 - 8

Adding markers to the map
Lines 10 - 24

Add marker images from Google Maps API page in the marker cluster code example:
    // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }

DONT FORGET TO SAVE AND COMMIT TO GITHUB!
