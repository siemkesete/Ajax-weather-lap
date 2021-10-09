
const $weatherFor = $('#weatherFor');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $form = $('form')
let weatherData, userInput;
const $input = $('input[type="text"]');


// step attach an event listener

// Event Listeners
// event handler functions are passed an object containing data representing the event
$('form').on('submit', handleGetData);
function handleGetData(event) {
    event.preventDefault();
    // Set up a request to our api using Javascript
    cityName = $input.val();

    console.log($weatherFor)

    // $.ajax() returns a Promise object that is used to resolve the request
    const promise = $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=9a231be55213fe3ebe183ac38b0c0d7c`})
    promise.then(data => {
            //weatherData = data;
            console.log('MAININFO:',data)
            render(data);
        })
    .catch(error => {
            console.log('bad request', error);
        })
 };

// the success callback
// instead visualizing our data in the console here
function render(data) {
    $weatherFor.text(data.name);
    $temperature.text(data.main.temp);
    $feelsLike.text(data.main.feels_like);
    $weather.text(data.weather[0].description);

    // console.log('FEELSCHECK:',data.main.feels_like)

// console.log($('#delete'))
// $("#delete").click (function() {
//     console.log('delete')
//     $("remove").children().last().remove()

// })
 }