let total = {total: 1812.53};

module.exports = {
  getTotal: (req, res) => {
    res.status(200).send(total);
  },
  putTotal: (req, res) => {

    const {type, amount} = req.body;

    switch(type){
      case ('-'): total["total"] -= +amount; break;
      case ('+'): total["total"] += +amount; break;
      default: total["total"] = total["total"];
    }

    res.status(200).send(total);
  }
}
