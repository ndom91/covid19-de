import { NowResponse } from "@now/node";
const nowFetch = require("now-fetch")();

export default async (_, response: NowResponse) => {
  // const [confirmed, recovered, deaths, lastUpdate] = await Promise.all([
  //   getConfirmed(),
  //   getRecovered(),
  //   getDeaths(),
  //   getLastUpdate()
  // ]);

  nowFetch(
    "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=county&orderByFields=value%20desc&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22cases_per_100k%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true",
    {
      credentials: "omit",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
      },
      referrer: "https://npgeo-de.maps.arcgis.com/apps/opsdashboard/index.html",
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "cors"
    }
  )
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    });

  // response.json({
  //   confirmed: {
  //     value: deaths,
  //     detail: "https://covid19.mathdro.id/api/deaths"
  //   },
  //   daily: "https://covid19.mathdro.id/api/daily",
  //   image: "https://covid19.mathdro.id/api/og",
  //   source: "https://github.com/mathdroid/covid19",
  //   lastUpdate
  // });
};
