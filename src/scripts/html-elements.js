const main = document.querySelector(".main");
const animationDiv = document.querySelector(".animation-div");

const startLoadingAnimation = () => {
    main.style.display = "none";
    animationDiv.style.display = "flex";
  }

  const endLoadingAnimation = () => {
    setTimeout(() => {
        main.style.display = "grid";
        animationDiv.innerHTML = "";
        animationDiv.style.display = "none";
    }, 1000);
  }

const buildCurrentSection = (cityName, temp, description, iconUrl) => {
  main.innerHTML = "";

  const conditions = buildElement("h1", { textContent: "Current Conditions:" });
  main.append(conditions);

  const currentResults = buildElement("div", { className: "current-results" });
  const nameEl = buildElement("h2", { id: "city-name", textContent: cityName });
  const tempDiv = buildElement('div', { className: 'icon-temp-div' });
  const tempEl = buildElement("h3", { id: "current-temp", textContent: temp });
  const iconEl = buildElement("img", { id: "current-icon", src: iconUrl });
  tempDiv.append(tempEl, iconEl);
  const descriptionEl = buildElement("p", {
    id: "current-description",
    textContent: description,
  });
  currentResults.append(nameEl, tempDiv, descriptionEl);
  main.append(currentResults);
};

const buildForecastSection = () => {
  const tmwDiv = buildElement("div", { className: "tomorrow" });
  const tmwH2 = buildElement("h2", { id: "tomorrow-h2", textContent: "Tomorrow:" });
  const tmwSection = buildElement("div", { className: "tomorrow-forecasts" });

  tmwDiv.append(tmwH2, tmwSection);

  main.append(tmwDiv);
};

const buildTomorrowSection = (timeName, temp, description, iconUrl) => {
  const tmwSection = document.querySelector(".tomorrow-forecasts");
  const forecastResults = buildElement("div", {
    className: "forecast-results",
  });
  const nameEl = buildElement("h4", {
    className: "forecast-name",
    textContent: timeName,
  });
  const tempDiv = buildElement('div', { className: 'icon-temp-div' });
  const tempEl = buildElement("h5", {
    className: "forecast-temp",
    textContent: temp,
  });
  const descriptionEl = buildElement("p", {
    className: "forecast-description",
    textContent: description,
  });
  const iconEl = buildElement("img", {
    className: "current-icon",
    src: iconUrl,
  });
  tempDiv.append(tempEl, iconEl);
  forecastResults.append(nameEl, tempDiv, descriptionEl);
  tmwSection.append(forecastResults);
  endLoadingAnimation();
};

const buildElement = (type, args) => {
  const element = document.createElement(type);

  for (const key in args) {
    element[key] = args[key];
  }

  return element;
};

export {
    startLoadingAnimation,
    endLoadingAnimation,
    buildCurrentSection,
    buildForecastSection,
    buildTomorrowSection
}
