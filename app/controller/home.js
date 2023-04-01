'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render("single", {title: "首页"});
  }
  async single() {
    await this.ctx.render("single", {title: "单账号"});
  }
  async multiple() {
    await this.ctx.render("multiple", {title: "多账号"});
  }
}

module.exports = HomeController;
