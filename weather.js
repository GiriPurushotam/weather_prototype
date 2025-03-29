const apiKey = "071b7ec6ddd1b7c6169502a2ba2e6e78";
let city = "Kathmandu"; // default city

async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    try {
        
        const data = await response.json();
        
        console.log(data);
        
        document.getElementById("cityName").innerText =  city;
        document.getElementById("myParagraph").innerHTML = data.weather[0].description;

        // Additional information for weather
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById("windSpeed").innerText = data.wind.speed;

        // Displaying Weather Icon 
        document.getElementById("weatherIcon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        document.getElementById("weatherIcon").style.display = "block";
    } catch (err) {
        // Display errors in console
        console.log("Error fetching data:", err);
        document.getElementById("myParagraph").innerText = "Failed to fetch Weather Data";
    }
}

fetchWeatherData(city);

// Event listener for search button
document.getElementById("searchButton").addEventListener("click", () => {
            const searchForm = document.getElementById("searchForm");
            const userCity = searchForm.value.trim();
            
            // If input is not empty, fetch weather data
            if (userCity) {
                fetchWeatherData(userCity);
                searchForm.value = ""; 
            }
        });

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Balkot&appid=071b7ec6ddd1b7c6169502a2ba2e6e78') 
// .then(response => response.json())
//  .then(response => { 
//  console.log(response);
//  document.getElementById("myParagraph").innerHTML = response.weather[0].description; }) 
// .catch(err => { 
//  console.log(err); });