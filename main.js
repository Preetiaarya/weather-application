// fetch("https://api.openweathermap.org/data/2.5/weather?lat=32.1154&lon=76.5806&appid=9e83fc13a75116b32593ac118a2f2062")
// .then(response=> {response.json().then(result=> {console.log(result)})})

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition)

// } else {
//     alert("GeoLocation is not defined on this browser")

// }
// function showPosition(position){
//     console.log(position)
// }


// function getTemperature(){
//     "https://api.openweathermap.org/data/2.5/weather?lat=32.1154&lon=76.5806&appid=9e83fc13a75116b32593ac118a2f2062https://api.openweathermap.org/data/2.5/weather?lat=32.1154&lon=76.5806&appid=9e83fc13a75116b32593ac118a2f2062https://api.openweathermap.org/data/2.5/weather?lat=32.1154&lon=76.5806&appid=9e83fc13a75116b32593ac118a2f2062"
// }
function getCurrentPosition() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }
}
async function getTemperature() {
    const position = await getCurrentPosition();
    const lat = position.coords.latitude
    const long = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9e83fc13a75116b32593ac118a2f2062`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data.main.temp
}
async function newUpdates() {
    const temp = await getTemperature();
    const h2 = document.querySelector("h2");
    h2.textContent = temp - 273.15 + " °C"
    const icon = document.querySelector("img")
    icon.src = icon 

}
newUpdates()
getCurrentPosition().then(position => {
    console.log(position);
})
