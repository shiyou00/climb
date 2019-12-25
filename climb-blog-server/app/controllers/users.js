class UserCtl{
  getUserList(ctx){}

  getUser(ctx) {
    ctx.body = {};
  }

  createUser(ctx){
    ctx.verifyParams({
      name: {type:'string',required: true},
      password: {type: 'string', required: true}
    });
    ctx.body = ctx.request.body;
  }

  deleteUser(ctx){
    ctx.status = 204;
  }

}

module.exports = new UserCtl();
