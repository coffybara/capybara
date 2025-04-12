// ------------------------------------------------------------------------------------------------
// > ROUTES INDEX < //
// ------------------------------------------------------------------------------------------------
import express from 'express';
// ie.
// import authRoutes from "./authRoutes";
// import userRoutes from "./userRoutes";

const router = express.Router();

// ------------------------------------------------------------------------------------------------
// * ATTACH EACH SUB-ROUTER UNDER ITS OWN PATH
// ------------------------------------------------------------------------------------------------
// ie.
// router.use("/auth", authRoutes);
// router.use("/users", userRoutes);

// ------------------------------------------------------------------------------------------------
// * MODULE EXPORT
// ------------------------------------------------------------------------------------------------
export default router;
