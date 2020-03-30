class Movie {
  constructor (title, dir, year) {
    this.title = title;
    this.dir = dir;
    this.year = year;
    this.ratings = 0;
    this.votes = 0;
  }
  rate(numberOfStars) {
    if (numberOfStars > 5 || numberOfStars < 0) {
      console.log("Error ! You voted " + numberOfStars + " stars on 5 ...")
    } else {
      this.votes++;
      this.ratings += numberOfStars;
      console.log("You rated this movie " + numberOfStars + ' on 5.');
      this.showRatings();
    }
  }
  showRatings() {
    console.log("This movie is rated " + this.ratings / this.votes  + " stars on 5.");
  }
}

const repoMan = new Movie("Repo Man", "Alex Cox", "1984");
console.log(repoMan);
repoMan.rate(4);
repoMan.rate(5);
repoMan.rate(6);
repoMan.rate(4);
