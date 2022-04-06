class TideMan extends CondorcetVotingMethod {
  count_votes() {
    this.calc_relative_strength_matrix();
    console.log(this.locked);
    console.log(this.relative_strength_matrix);
    this.add_pairs();
    console.log(this.locked);
    this.sort_pairs();
    console.log(this.locked);
    console.log(this.pairs);
    this.create_graph();
    console.log(this.locked);
    let winner;
    for (let i = 0; i < this.candidates.length; i++) {
      for (let j = 0; j < this.candidates.length; j++) {
        if (this.locked[j][i] == false) {
          if (j == this.candidates.length - 1) {
            winner = this.candidates[i];
          }
        } else {
          break;
        }
      }
    }
    return [
      [winner],
      this.candidates.filter(function (c) {
        c = !winner;
      }),
    ];
  }
}
