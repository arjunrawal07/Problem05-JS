class EuclidsAlgorithm {
  gcd(a, b) {
    //base cases
    if (a === 0) {
      return b;
    }
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }
}

module.exports = EuclidsAlgorithm;
