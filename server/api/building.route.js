const router = require("express").Router();
const { Building, Landlord, Apartment } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const buildingApi = await Building.findAll({
      include: [{ model: Landlord }]
    });
    res.json(buildingApi);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
