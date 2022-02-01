const PORT = 8080;
//Creating general middleware for all routes to overide cors and help send response to any server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //second param is name of domain
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // console.log('got request ')
  next();
});
