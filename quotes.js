const quotes = [
  {
    quote: `"Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you."`,
    writer: `- Princess Diana`,
  },
  {
    quote: `"Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence."`,
    writer: `- Franz Kafka`,
  },
  {
    quote: `"Together we can change the world, just one random act of kindness at a time."`,
    writer: `- Ron Hall`,
  },
  {
    quote: `"Life isn’t about getting and having, it’s about giving and being."`,
    writer: `- Kevin Kruse`,
  },
  {
    quote: `"Whatever the mind of man can conceive and believe, it can achieve."`,
    writer: `- Napoleon Hill`,
  },
  {
    quote: `"Strive not to be a success, but rather to be of value."`,
    writer: `- Albert Einstein`,
  },
  {
    quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`,
    writer: `- Robert Frost`,
  },
  {
    quote: `"I attribute my success to this: I never gave or took any excuse."`,
    writer: `- Florence Nightingale`,
  },
  {
    quote: `"You miss 100% of the shots you don’t take."`,
    writer: `- Wayne Gretzky`,
  },
  {
    quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
    writer: `- Amelia Earhart`,
  },
  {
    quote: `"Every strike brings me closer to the next home run."`,
    writer: `- Babe Ruth`,
  },
  {
    quote: `"Definiteness of purpose is the starting point of all achievement."`,
    writer: `- W. Clement Stone`,
  },
  {
    quote: `"We must balance conspicuous consumption with conscious capitalism."`,
    writer: `- Kevin Kruse`,
  },
  {
    quote: `"Life is what happens to you while you’re busy making other plans."`,
    writer: `- John Lennon`,
  },
  { quote: `"We become what we think about."`, writer: `- Earl Nightingale` },
  {
    quote: `"The most common way people give up their power is by thinking they don’t have any."`,
    writer: `- Alice Walker`,
  },
  {
    quote: `"The mind is everything. What you think you become."`,
    writer: `- Buddha`,
  },
  {
    quote: `"The best time to plant a tree was 20 years ago. The second best time is now."`,
    writer: `- Chinese Proverb`,
  },
  { quote: `"An unexamined life is not worth living."`, writer: `- Socrates` },
  {
    quote: `"Eighty percent of success is showing up."`,
    writer: `- Woody Allen`,
  },
];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
});
