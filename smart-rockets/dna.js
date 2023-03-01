class DNA {
  constructor(genes = []) {
    this.genes = [];
    if (genes.length) {
      this.genes = genes;
    } else {
      for (let i = 0; i < LIFESPAN; i++) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(0.1);
      }
    }
    this.mutationRate = 3;
  }

  crossover(partner) {
    let genes = [];
    let mid = floor(random(partner.genes.length));
    for (let i = 0; i < partner.genes.length; i++) {
      if (i > mid) {
        genes[i] = this.genes[i];
      } else {
        genes[i] = partner.genes[i];
      }

      if (random(1, 100) < this.mutationRate) {
        genes[i] = p5.Vector.random2D();
        genes[i].setMag(0.1);
      }
    }

    return new DNA(genes);
  }
}
