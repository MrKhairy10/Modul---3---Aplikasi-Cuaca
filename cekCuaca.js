const request = require("postman-request");
const urlCuaca =
  "http://api.weatherstack.com/current?access_key=5a50afb1a61b747b850e39f68f29e80d&query=-0.897688,100.349424&units=f";

request({ url: urlCuaca, json: true }, (error, response) => {
  if (error) {
    console.error("Terjadi kesalahan:", error);
  } else {
    const temperature = response.body.current.temperature;
    const precipProbability = response.body.current.precip;
    const weatherDescriptions = response.body.current.weather_descriptions;

    console.log(
      `Saat ini suhu diluar mencapai ${temperature} derajat Celsius.`
    );

    if (weatherDescriptions.length > 0) {
      console.log(
        `Deskripsi cuaca saat ini: ${weatherDescriptions.join(", ")}.`
      );
    } else {
      console.log("Tidak ada data deskripsi cuaca.");
    }

    console.log(`Kemungkinan terjadinya hujan adalah ${precipProbability}%`);
  }
});
