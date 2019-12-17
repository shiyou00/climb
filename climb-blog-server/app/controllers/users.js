class UserCtl{
  getUserList(ctx){
    ctx.set("Allow","GET, POST")
    console.log(ctx.query); // {q: 'abc'}
    ctx.body = [];
  }

  getUser(ctx) {
    console.log(ctx.params); // {id: 'abc'}
    ctx.body = {};
  }

  createUser(ctx){
    console.log(ctx.request.body); // { name: 'frank' }
  }

  deleteUser(ctx){
    ctx.status = 204;
  }

}

module.exports = new UserCtl();
