import hapi from "hapi";

const server = hapi.server();

const init = async () => {
  await server.start();
  console.log("Server running...");
};

init();
