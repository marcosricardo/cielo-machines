const express = require("express");
const routes = express.Router();

const MachineControllers = require("./controllers/MachineControllers");

routes.get("/machines", MachineControllers.index);
routes.get("/machines/:id", MachineControllers.show);
routes.post("/machines", MachineControllers.store);
routes.put("/machines/:id", MachineControllers.update);
routes.delete("/machines/:id", MachineControllers.destroy);
routes.get("/graphic", MachineControllers.showGraphic);

module.exports = routes;
