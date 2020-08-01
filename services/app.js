const GoogleImages = require("google-images");
const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper({
  APPID: process.env.WEATHER_API_ID,
  units: "imperial"
});

const client = new GoogleImages(
process.env.GI_ENGINE_ID,  process.env.GI_API_KEY
);


module.exports = {
  getMessageReply: (text) =>{
    if(text){
      return text + " , it's good";
    }
  }
}



 function gg(echo) {

  if (echo.includes("weather")) {
    helper.getCurrentWeatherByCityName("Bhopal", (err, currentWeather) => {
      if (err) {
        console.log(err);
      } else {
        let data = JSON.stringify(currentWeather);
        fs.writeFileSync("weather.json", data);
      }
    });
    fs.readFile("weather.json", (err, data) => {
      if (err) throw err;
      let mainData = JSON.parse(data);
      console.log(mainData);

      console.log(mainData.main.temp);
      console.log(mainData.weather[0].description);

      var x = mainData.main.temp;
      var y = mainData.weather[0].description;
      bot.sendMessage(
        id,
        "The Temprature of Bhopal is  " + x + ". \n other info is: \n" + y
      );
    });
  } else if (echo.includes("call")) {
    console.log("need to find call apis");

    bot.sendPhoto(
      id,
      "https://static1.squarespace.com/static/53e29b74e4b0d1dab65f7762/t/5ada2de2575d1ffe151c69cf/favicon.ico"
    );
  } else if (echo == "Sahil") {
    bot.getMessages(id);
  } else if (echo) {
    client.search(echo).then(images => {
      var pic = images[0].url;

      bot.sendPhoto(id, pic);
    });
  }
}
