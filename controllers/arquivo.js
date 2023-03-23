const axios = require("axios");

class Arquivo {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  exibir() {
    let arquivo = this.req.body.arquivo;

    axios
      .get("http://localhost:3000/arquivo/" + arquivo)
      .then((response) => {
        console.log(response.data);
        this.res.render("arquivo/exibir", {
          datetime: response.data.datetime,
          value: response.data.value,
        });
      })
      .catch((e) => {
        this.res.render("arquivo/erro");
      });
  }

  cadastrar() {
    let arquivo = this.req.body.arquivo;
    let texto = this.req.body.texto;

    axios
      .post("http://localhost:3000/arquivo", {
        arquivo: arquivo,
        texto: texto,
      })
      .then((response) => {
        this.res.render("arquivo/sucesso");
      })
      .catch((e) => {
        this.res.render("arquivo/erro");
      });
  }
}
module.exports = Arquivo;
