const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers["token"];
  
    if (!token) {
      return res.status(401).send("Unauthorized");
    }
    try {
      const decodedToken = jwt.verify(token, "key");
  
      req.user = decodedToken;
  
      next();
    } catch (err) {
      console.log(err.message);
    }
};