# Location-Based Product Purchase Alert

## Overview

This project is a **location-based product purchasing system** that calculates the distance between the user's current location and a store. If the user is more than 100 km away from the store, a popup will appear to alert them.

The system uses **Google Maps API** to track the user's location and calculate the distance. It helps users know if they are eligible to purchase based on their proximity to the store location.

---

## Features

- **Track User Location**: The system tracks the user's current location using browser geolocation.
- **Distance Calculation**: The distance between the user and the store is calculated using the Haversine formula.
- **Popup Notification**: If the user is more than 100 km from the store, a popup will appear with a notification.
- **Store Location**: The store's location is fixed (for example, in **Dhaka**), but can be customized.

---

## Technologies Used

- **HTML**: Structure of the page and product details.
- **CSS**: Styling of the product page and popup.
- **JavaScript**: For location tracking, distance calculation, and managing the popup.
- **Google Maps API**: To display the store's location and track the user's location.

---

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- **Google Maps API Key**: You need to have a valid **Google Maps API key** to load the map and use the geolocation service. Get your API key from [Google Cloud Console](https://console.cloud.google.com/).

### Steps to Set Up

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
