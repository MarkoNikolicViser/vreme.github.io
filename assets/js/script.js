$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=44.8&lon=20.47&units=metric&appid=59021a59254dc38de83f299e615ede17",function(data1){

console.log(data1);


var icon="https://openweathermap.org/img/w/"+data1.weather[0].icon + ".png";
var temp=Math.floor(data1.main.temp);
var weather=data1.weather[0].main;
var name=data1.name;
var feels_like=Math.floor(data1.main.feels_like);
var description=data1.weather[0].description;
var temp_min=Math.floor(data1.main.temp_min);
var temp_max=Math.floor(data1.main.temp_max);

$('.name').append(name);
$('.icon').attr('src', icon);
$('.weather').append(weather);
$('.description').append(description);
$('.temp').append(temp);
$('.feels_like').append(feels_like);
$('.temp_min').append(temp_min);
$('.temp_max').append(temp_max);

});


$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=45.25&lon=19.84&units=metric&appid=59021a59254dc38de83f299e615ede17",function(data1){

console.log(data1);


var icon1="https://openweathermap.org/img/w/"+data1.weather[0].icon + ".png";
var temp1=Math.floor(data1.main.temp);
var weather1=data1.weather[0].main;
var name1=data1.name;
var feels_like1=Math.floor(data1.main.feels_like);
var description1=data1.weather[0].description;
var temp_min1=Math.floor(data1.main.temp_min);
var temp_max1=Math.floor(data1.main.temp_max);

$('.name1').append(name1);
$('.icon1').attr('src', icon1);
$('.weather1').append(weather1);
$('.description1').append(description1);
$('.temp1').append(temp1);
$('.feels_like1').append(feels_like1);
$('.temp_min1').append(temp_min1);
$('.temp_max1').append(temp_max1);

});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=43.32&lon=21.9&units=metric&appid=59021a59254dc38de83f299e615ede17",function(data1){

console.log(data1);


var icon1="https://openweathermap.org/img/w/"+data1.weather[0].icon + ".png";
var temp1=Math.floor(data1.main.temp);
var weather1=data1.weather[0].main;
var name1=data1.name;
var feels_like1=Math.floor(data1.main.feels_like);
var description1=data1.weather[0].description;
var temp_min1=Math.floor(data1.main.temp_min);
var temp_max1=Math.floor(data1.main.temp_max);

$('.name2').append(name1);
$('.icon2').attr('src', icon1);
$('.weather2').append(weather1);
$('.description2').append(description1);
$('.temp2').append(temp1);
$('.feels_like2').append(feels_like1);
$('.temp_min2').append(temp_min1);
$('.temp_max2').append(temp_max1);

});


$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=44.02&lon=20.92&units=metric&appid=59021a59254dc38de83f299e615ede17",function(data1){

console.log(data1);


var icon1="https://openweathermap.org/img/w/"+data1.weather[0].icon + ".png";
var temp1=Math.floor(data1.main.temp);
var weather1=data1.weather[0].main;
var name1=data1.name;
var feels_like1=Math.floor(data1.main.feels_like);
var description1=data1.weather[0].description;
var temp_min1=Math.floor(data1.main.temp_min);
var temp_max1=Math.floor(data1.main.temp_max);

$('.name3').append(name1);
$('.icon3').attr('src', icon1);
$('.weather3').append(weather1);
$('.description3').append(description1);
$('.temp3').append(temp1);
$('.feels_like3').append(feels_like1);
$('.temp_min3').append(temp_min1);
$('.temp_max3').append(temp_max1);

});