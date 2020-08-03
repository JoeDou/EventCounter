function* indexGenartor(max) {
  let index = 0;
  while (true) {
    index++;
    if (index >= max) {
      index = 0;
    }
    yield index;
  }
}

module.exports = {
  indexGenartor,
};
