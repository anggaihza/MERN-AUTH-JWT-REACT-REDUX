const router = require("express").Router()
const { authUser, getUserProfile, logoutUser, updateUserProfile, registerUser } = require("../controllers/userController")
const protect = require("../middleware/authMiddleware")

router.post("/", registerUser)
router.post("/auth", authUser)
router.post("/logout", logoutUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)

module.exports = router