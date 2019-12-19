class UserCtl{
  getUserList(ctx){
    a.b
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
