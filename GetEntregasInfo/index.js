const cors = require("cors")();
const { exec } = require("child_process");

module.exports = async function (context, req) {
  cors(req, context.res, () => {
    const destinations = req.body.destinations || "6.84,-75.46";
    const origins = req.body.origins || "7.83,-75.46";
    const mode = "driving";
    const key = "AIzaSyAEXeXklXIIQ1L8RdL2i4YKFC5hNF2b9R4"; // Reemplaza esto con tu propia API key
    const urlMaps = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinations}&origins=${origins}&mode=${mode}&key=${key}`;

    exec(`curl ${urlMaps}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar el comando: ${error}`);
        context.res = {
          status: 500,
          body: "Error al hacer la solicitud a la API de Google Maps",
          headers: {
            "Content-Type": "text/plain",
          },
        };
        context.done();
        return;
      }
      const data = JSON.parse(stdout);
      context.res = {
        status: 200,
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      };
      context.done();
    });
  });
};
