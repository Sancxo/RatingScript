class Movie {
  constructor (title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.sumOfStars = 0;
    this.numberOfVotes = 0;
  }
  rate(userRating) {
    if (userRating > 5 || userRating < 0) {
      console.log("Error ! You voted " + userRating + " stars on 5 ...")
    } else {
      this.numberOfVotes++;
      this.sumOfStars += userRating;
      console.log("You rated this movie " + userRating + ' on 5.');
      this.showRatings();
    }
  }
  showRatings() {
    console.log("This movie is rated " + this.sumOfStars / this.numberOfVotes  + " stars on 5.");
  }
}

const repoMan = new Movie("Repo Man", "Alex Cox", "1984");
console.log(repoMan);
repoMan.rate(4);
repoMan.rate(5);
repoMan.rate(6);
repoMan.rate(4);
repoMan.showRatings();
