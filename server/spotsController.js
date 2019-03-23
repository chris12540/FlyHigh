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
  },
  getSpot(req, res) {
    req.app
      .get("db")
      .getSpot({ id: req.params.id })
      .then(spot => {
        res.json(spot);
      })
      .catch(error => {
        console.log("Error getting spot with id", error);
      });
  }
};
