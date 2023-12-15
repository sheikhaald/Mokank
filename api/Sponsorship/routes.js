const express = require("express");
const upload = require("../../middleware/multer");

const router = express.Router();
const {
  getAllsponsorships,
  sponsorshipUpdate,
  sponsorshipDelete,
  sponsorshipCreate,
  sponsorshipFind,
  getLasSponsor,
} = require("./controllers");

router.param("sponsorId", async (req, res, next, sponsorId) => {
  const sponsor = await sponsorshipFind(sponsorId, next);
  req.sponsor = sponsor;
  next();
});
router.get("/", getAllsponsorships);

router.get("/last", getLasSponsor);

router.post("/", upload.single("image"), sponsorshipCreate);

router.delete("/:sponsorId", sponsorshipDelete);

router.put("/:sponsorId", sponsorshipUpdate);

module.exports = router;
