const Router = require('koa-router');
const router = new Router({
  prefix:"/users"
});
const {getUserList,getUser,createUser,deleteUser} = require('../controllers/users');

router.get("/",getUserList);
router.get("/:id",getUser);
router.post("/",createUser);
router.delete("/",deleteUser);

module.exports = router;
