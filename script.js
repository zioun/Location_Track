// script.js

let map;
let userMarker;
let storeMarker;

// Fixed Store Location 
const storeLocation = { lat: 23.8103, lng: 90.4125 }; // Dhaka coordinates


// Initialize the map
function initMap() {
  // Create a map centered on Dhaka
  map = new google.maps.Map(document.getElementById("map"), {
    center: storeLocation,
    zoom: 12,
  });

  // Create a marker for the store
  storeMarker = new google.maps.Marker({
    position: storeLocation,
    map: map,
    title: "Store Location",
  });

  // Add click event to the "Buy Now" button to track user's location
  document.getElementById("buy-button").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(trackUserLocation, handleGeolocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
}

// Function to track user's location
function trackUserLocation(position) {
  const userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  // Create a marker for the user's location
  if (userMarker) {
    userMarker.setMap(null); // Remove previous marker if it exists
  }
  userMarker = new google.maps.Marker({
    position: userLocation,
    map: map,
    title: "Your Location",
  });

  map.setCenter(userLocation); // Center map on user's location

  // Calculate and show distance from store
  const distance = calculateDistance(storeLocation, userLocation);
  if (distance > 100) {
    showPopup(); // Show the popup if the distance is greater than 100 km
  } else {
    alert("You are within 100 km range.");
  }
}

// Function to calculate distance between two points (Haversine formula)
function calculateDistance(loc1, loc2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of Earth in km
  const dLat = toRad(loc2.lat - loc1.lat);
  const dLng = toRad(loc2.lng - loc1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

// Function to handle geolocation errors
function handleGeolocationError(error) {
  alert("Error occurred: " + error.message);
}

// Function to show the popup
function showPopup() {
  document.getElementById("distance-popup").classList.remove("hidden");
}

// Function to close the popup
function closePopup() {
  document.getElementById("distance-popup").classList.add("hidden");
}
