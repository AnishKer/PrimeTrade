export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    msg: err.message || "Server error",
  });
};

import { errorHandler } from "./middleware/errorMiddleware.js";

app.use(errorHandler);