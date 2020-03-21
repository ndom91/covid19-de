# 🦠 German COVID-19 JSON API

Part of the #wirvsvirushackathon  

DevPost Project: https://devpost.com/software/covid19-de#updates

> Serving data primarily from Robert Koch Institut as a [JSON API](https://covid19-de.ndo.dev)

## 🏗️ Usage

1. Clone

2. Install deps (`yarn`, `npm install`)

3. Install and register to ZEIT Now if you haven't. This project is exclusively made for the platform.

4. `now dev` to run a local dev deployment, `now` to publish.

## 🛣️ Routes

Working Example:

`/api/confirmed100k`

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

## 📝 License

MIT License 2020, [ndom91](https://github.com/ndom91)

Forked from [@mathdroid/covid19](https://github.com/mathdroid/covid19) 🙏
