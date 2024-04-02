const trackItem = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  trackItem,
};
