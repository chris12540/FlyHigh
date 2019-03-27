module.exports = {
  read(req, res) {
    req.app
      .get("db")
      .get_spots()
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
      .get_spot({ id: req.params.id })
      .then(spot => {
        res.json(spot);
      })
      .catch(error => {
        console.log("Error getting spot with id", error);
      });
  },
  addSpot(req, res) {
    const { name, lat, lng, description } = req.body;
    req.app
      .get("db")
      .add_spot({ name, lat, lng, description })
      .then(response => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log("Problem adding spot", error);
      });
  }
};
