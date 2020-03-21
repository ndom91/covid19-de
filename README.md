# 🦠 German COVID-19 JSON API

Part of the #wirvsvirushackathon  

DevPost Project: https://devpost.com/software/covid19-de#updates

> Serving data primarily from Robert Koch Institut as a [JSON API](https://covid19-de.ndo.dev)

**Example Deployment**: https://covid19-de.now.sh/

## 🏗️ Usage

1. Clone

2. Install deps (`yarn`, `npm install`)

3. Install and register to ZEIT Now if you haven't. This project is exclusively made for the platform.

4. `now dev` to run a local dev deployment, `now` to publish.

## 🛣️ Routes

1. `/api/confirmed100k`

Returns:

```
{
"description":"Infection Rate per 100k Residents",
"lastUpdate":"Fri, 20 Mar 2020 11:43:54 GMT",
"rate":[
  {"rate":317.314270884941,"county":"LK Heinsberg"},
  {"rate":138.380501740916,"county":"LK Hohenlohekreis"},
  {"rate":61.7013330735382,"county":"LK Cochem-Zell"}
  ...
]
```

2. `/api/landkreis`

Returns:
```
{
"description":"Details per County",
"lastUpdate":"Fri, 20 Mar 2020 11:43:54 GMT",
"data":[
  {
    "county":"LK Heinsberg",
    "bundesland":"Nordrhein-Westfalen",
    "death_rate":0.619578686493185,
    "cases":807,
    "deaths":5,
    "cases_per_100k":317.314270884941,
    "cases_per_population":0.317314270884941
  },
  {
    "county":"SK Hamburg",
    "bundesland":"Hamburg",
    "death_rate":0,
    "cases":586,
    "deaths":0,
    "cases_per_100k":31.8274323137511,
    "cases_per_population":0.0318274323137511
  }
  ...
]
```

3. `/api/agegroup`

Returns:
```
{
"description":"Cases per Age Group / Gender",
"lastUpdate":"Fri, 20 Mar 2020 11:43:54 GMT",
"M":[
  "attributes":{
    "value":70,
    "Altersgruppe":"A00-A04",
    "Geschlecht":"M"
  }
  },{
  "attributes":{
    "value":161,
    "Altersgruppe":"A05-A14",
    "Geschlecht":"M"
  }
  ...
 ]
,
```

## 📝 License

MIT License 2020, [ndom91](https://github.com/ndom91)

Forked from [@mathdroid/covid19](https://github.com/mathdroid/covid19) 🙏
