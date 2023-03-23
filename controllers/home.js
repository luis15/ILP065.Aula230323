class Home {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  index() {
    this.res.render("home/index");
  }
  exibir() {
    this.res.render("home/exibir");
  }
  cadastrar() {
    this.res.render("home/cadastrar");
  }
}

module.exports = Home;
