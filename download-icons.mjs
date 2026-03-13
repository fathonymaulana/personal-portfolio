import https from "node:https";
import fs from "node:fs";
import path from "node:path";

const icons = {
  nodedotjs: "node-logo.svg",
  prisma: "prisma-logo.svg",
  mongodb: "mongodb-logo.svg",
  redux: "redux-logo.svg",
  d3dotjs: "d3js-logo.svg",
  mui: "mui-logo.svg",
  angular: "angular-logo.svg",
  express: "express-logo.svg",
  firebase: "firebase-logo.svg",
  mapbox: "mapbox-logo.svg",
  chartdotjs: "chartjs-logo.svg",
};

const dir = "public/images/icons";
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Object.entries(icons).forEach(([name, filename]) => {
  const url = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${name}.svg`;
  https
    .get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode === 200) {
          fs.writeFileSync(path.join(dir, filename), data);
          console.log("Downloaded", filename);
        } else {
          console.log("Failed", name, res.statusCode);
        }
      });
    })
    .on("error", (err) => console.error("Error fetching", name, err));
});
