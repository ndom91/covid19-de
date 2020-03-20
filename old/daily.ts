import { NowResponse } from "@now/node";
import { fetchFeatures, attributeSpreader, normalizeKeys } from "../util/data";
import { endpoints } from "../util/endpoints";

export default async (_, response: NowResponse) => {
  response.json(
    (await fetchFeatures(endpoints.casesTimeSeries))
      .map(attributeSpreader)
      .map(normalizeKeys)
  );
};
