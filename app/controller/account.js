'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {
  async login() {
    // const result=await this.app.mysql.insert('daily',{
    //   count:'123'
    // })
    const { ctx } = this;
    const result = await ctx.service.data.getData();
    ctx.body = result;
    console.log(result.affectedRows);
  }
}

module.exports = AccountController;
