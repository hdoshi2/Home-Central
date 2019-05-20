const router = require("express").Router();
const { Building, Landlord, Apartment } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const apartmentApi = await Apartment.findAll({
      include: [{ model: Building }]
    });
    res.json(apartmentApi);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
