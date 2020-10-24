const { calcularPrecoPrazo } = require("correios-brasil");

module.exports = {
  async getPrice(req, res) {
    try {
      calcularPrecoPrazo(req.body).then((response) => {
        return res.status(200).send(response);
      });        
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};