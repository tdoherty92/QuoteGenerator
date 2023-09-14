import React, {useState} from "react";
import './App.css'

var quotes = [
  [
    "You have power over your mind – not outside events. Realize this, and you will find strength.",
    "Marcus Aurelius"
  ],
  [
    "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love…",
    "Marcus Aurelius"
  ],
  [
    "If it is not right, do not do it. if it is not true, do not say it.",
    "Marcus Aurelius"
  ],
  [
    "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.",
    "Marcus Aurelius"
  ],
  [
    "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
    "Epictetus"
  ],
  [
    "Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him.",
    "Epictetus"
  ],
  [
    "He who laughs at himself never runs out of things to laugh at.",
    "Epictetus"
  ],
  [
    "I'll consider it a compliment if you actually inspect my code in enough detail to find this.",
    "Thomas Doherty"
  ],
  [
    "It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult.",
    "Seneca"
  ],
  [
    "Hang on to your youthful enthusiasms – you’ll be able to use them better when you’re older.",
    "Seneca"
  ],
  ["Associate with people who are likely to improve you.", "Seneca"],
  ["The whole future lies in uncertainty: live immediately.", "Seneca"],
  [
    "The person who says it cannot be done should not interrupt the person who is doing it.",
    "Chinese Proverb"
  ]
];

// at next commit add this image as background not the random colour https://miro.medium.com/v2/resize:fit:500/1*bJQ3_EwhKwpgQ31gqZ1_pg.jpeg

function QuoteParent() {
  
  const [quote, setQuote] = useState(quotes[0]);
      

  const getQuote = () => {
    let key = Math.floor(Math.random() * 13);
    setQuote(quotes[key]);
  }
  // need to add onClick into the JSX

  // const randomQuote = () => {
  // }this.getQuote();
  //  this.setState({
  //    quote: randomQuote
  //  });
  

/* next commit:  
remove the box and put the new quote below the skull; quote sits on top of the skull so no box disrupting it anymore.

*/


  const randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
    const title = "Stoic Quote Generator";

    return (
      <div className="container">
        <div id="background">
          <img src="https://miro.medium.com/v2/resize:fit:500/1*bJQ3_EwhKwpgQ31gqZ1_pg.jpeg" className="stretch" alt=""/>
        </div>
        <div className="content" id="quote-box">
          <h1>{title}</h1>
          <p>
            {
              <Quote
                displayColor={randomColor}
                quote={quote}
                newQuote={getQuote}
              />
            }
          </p>
        </div>
      </div>
    );
  
}

function Quote({displayColor, quote, newQuote}) {
  
  const createTweetLink = () => {
    let ahref = ["https://twitter.com/intent/tweet?text=", quote];
    return ahref.join("");
  }
  
  var randomColor = displayColor;
  const html = document.documentElement;
  html.style.backgroundColor = randomColor;

    return (
      <div>
        <h1 id="text">"{quote[0]}"</h1>
        <h3 id="author">{quote[1]}</h3>
        <button id="new-quote" onClick={newQuote}>
          More Wisdom
        </button>
        <br />
        <a
          href={createTweetLink()}
          target="_blank"
          className="checkbox"
          id="tweet-quote"
        >
          Tweet This
        </a>
      </div>
    );
  
}

export default QuoteParent;
