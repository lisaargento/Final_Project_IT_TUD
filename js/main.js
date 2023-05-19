// VARIABLES
var btn_join = document.getElementById('btn_join');
const weatherDataElement = document.getElementById('weatherData');

// alert("Welcome on the Vert Issy website page !");


// ADD BUTTON TO JOIN ASSOCIATION
if (btn_join !== null){
  btn_join.addEventListener('click', function() {
    let name = prompt('What is your name?');
    if (name != 0){alert('Hi ' + name + ', thank you for your motivation!');}
    else alert('Something happened. Can you register again, please.');
    
});
}


// Fetch weather data from the API
fetch('https://api.open-meteo.com/v1/forecast?latitude=53.33&longitude=-6.25&current_weather=true')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Update the HTML with weather conditions   
    const weather = data.current_weather;
    const temperature = weather.temperature;
    const wind = weather.winddirection;
    const windspeed = weather.windspeed;
    const time = weather.time;

    const weatherHTML = `
      <p class="text-warning bg-dark">Time: ${time}</p>
      <p class="text-warning bg-dark">Temperature: ${temperature}°C</p>
      <p class="text-warning bg-dark">Wind direction: ${wind}%</p>
      <p class="text-warning bg-dark">Wind speed: ${windspeed}km/h</p>
      
    `;

    weatherDataElement.innerHTML = weatherHTML;
  })
  // .catch(error => {
  //   console.log('Error:', error);
  // });