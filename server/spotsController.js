module.exports = {
  read(req, res) {
    req.app
      .get("db")
      .getSpots()
      .then(spots => {
        res.json(spots);
      })
      .catch(error => {
        console.log("Error getting spots", error);
      });
  }
};
