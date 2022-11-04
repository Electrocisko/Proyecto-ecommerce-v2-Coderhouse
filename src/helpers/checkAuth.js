
let admin = false;

function checkAdmin(req, res, next) {
    if (admin === false) {
      next();
    } else {
      res.status(401).send({
        message: "Does not have authorization",
      });
    }
  };

  export default checkAdmin;