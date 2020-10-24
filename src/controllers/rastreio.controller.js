const { rastrearEncomendas } = require("correios-brasil");

module.exports = {
  async getShippingInfo(req, res) {
    try {
      rastrearEncomendas(req.body.codRastreio).then((response) => {
        return res.status(200).send(response);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};