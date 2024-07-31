const apikey = "ccdf875006493f27bfe2946f8811c079";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const caixaPesquisa = document.querySelector(".pesquisa input");
const pesquisaBtn = document.querySelector(".pesquisa button");
const aguaIcon = document.querySelector(".agua-icon");


async function checarTempo(cidade) {
  const response = await fetch(apiUrl + cidade + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".erro").style.display = "block";
    document.querySelector(".agua").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".umidade").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") {
      aguaIcon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
      aguaIcon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
      aguaIcon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
      aguaIcon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
      aguaIcon.src = "img/mist.png";
    }

    document.querySelector(".agua").style.display = "block";
    document.querySelector(".erro").style.display = "none";
  }


}

pesquisaBtn.addEventListener("click", () => {
  checarTempo(caixaPesquisa.value);
})