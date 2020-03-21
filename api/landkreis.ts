import { NowResponse } from "@now/node";
import fetch from "isomorphic-unfetch";

export default async (_, response: NowResponse) => {
  Promise.all([
    fetch(
      "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0?f=json",
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
        referrer:
          "https://npgeo-de.maps.arcgis.com/apps/opsdashboard/index.html",
        referrerPolicy: "no-referrer-when-downgrade",
        body: null,
        method: "GET",
        mode: "cors"
      }
    ).then(resp => resp.json()),
    fetch(
      "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=cases%20desc&resultOffset=0&resultRecordCount=1000&cacheHint=true",
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
        referrer:
          "https://npgeo-de.maps.arcgis.com/apps/opsdashboard/index.html",
        referrerPolicy: "no-referrer-when-downgrade",
        body: null,
        method: "GET",
        mode: "cors"
      }
    ).then(resp => resp.json())
  ])
    .then(([date, data]) => {
      const lastEditDateRaw = new Date(date.editingInfo.lastEditDate);
      const lastEditDate = lastEditDateRaw.toUTCString();

      const results = [];
      data.features.forEach(county => {
        results.push({
          county: county.attributes.county,
          bundesland: county.attributes.BL,
          death_rate: county.attributes.death_rate,
          cases: county.attributes.cases,
          deaths: county.attributes.deaths,
          cases_per_100k: county.attributes.cases_per_100k,
          cases_per_population: county.attributes.cases_per_population
        });
      });
      response.json({
        description: "Details per County",
        lastUpdate: lastEditDate,
        data: results,
        source: "https://github.com/ndom91/covid19-de"
      });
    })
    .catch(err => {
      console.log(err);
    });
};
