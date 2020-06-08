document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-parse-application-id": "unAFkcaNDeXajurGB7LChj8SgQYS2ptm",
      },
      referrer: "https://covid.saude.gov.br/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  )
    .then((a) => a.json())
    .then((a) => a.results[0].arquivo.url)
    .then((url) => {
      const a = document.getElementById("link");
      a.href = url;
      a.innerHTML = "link dos dados";
    });
});
