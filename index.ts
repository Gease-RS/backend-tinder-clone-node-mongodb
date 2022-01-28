import { App } from "./app";

const port = process.env.PORT || 3333;

new App().server.listen(port, () =>
  console.log(`Application started successfully on port ${port}!`)
);
