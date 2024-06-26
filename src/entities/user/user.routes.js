import { Router } from "express";
import { auth } from "../../middlewares/auth.middleware.js";
import { follow, getUsers, getOwnProfile, unFollow, updateOwnProfile, getUserbyEmail, deleteUserbyId, updateRole, getPostsbyUserId, getUserById } from "./user.controller.js";
import { isSuperadmin } from "../../middlewares/isSuperadmin.middleware.js";

const router = Router();

router.get('/', auth, isSuperadmin, getUsers)
router.get('/email', auth, isSuperadmin, getUserbyEmail)
router.get('/profile', auth, getOwnProfile)
router.get('/posts/:id', auth, getPostsbyUserId)
router.get('/:id', auth, getUserById)
router.put('/profile', auth, updateOwnProfile)
router.put('/follow/:id', auth, follow)
router.put('/:id/role', auth, isSuperadmin, updateRole)
router.delete('/:id', auth, isSuperadmin, deleteUserbyId)


export default router










