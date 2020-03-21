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
        referrer:
          "https://npgeo-de.maps.arcgis.com/apps/opsdashboard/index.html",
        referrerPolicy: "no-referrer-when-downgrade",
        body: null,
        method: "GET",
        mode: "cors"
      }
    ).then(resp => resp.json())
  ])
    .then(([date, rate]) => {
      console.log(date, rate);
      const lastEditDateRaw = new Date(date.editingInfo.lastEditDate);
      const lastEditDate = lastEditDateRaw.toUTCString();

      const results = [];
      rate.features.forEach(county => {
        results.push({
          rate: county.attributes.value,
          county: county.attributes.county
        });
      });
      response.json({
        lastUpdate: lastEditDate,
        rate: results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
