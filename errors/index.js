function errorHandler(app){
  app.use((err, req, res, next) => {
    const response = {errors: [err]};

    res.status(err.status).json(response);
  });
}

module.exports = errorHandler;
