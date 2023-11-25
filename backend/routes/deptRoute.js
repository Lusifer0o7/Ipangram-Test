const express = require("express");
const {
  createDept,
  updateDept,
  getAllDept,
  deleteDept
} = require("../controllers/deptController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router
  .route("/admin/dept")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllDept);

router
  .route("/admin/dept/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createDept);

router
  .route("/admin/dept/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateDept)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteDept);

module.exports = router;