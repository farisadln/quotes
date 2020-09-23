import React from "react";


class QuoteAndAuthor extends React.Component {
  render() {

    
      

    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div key={Math.random()} >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>

        <div key={Math.random()} >
          <h1 id="quote" key={Math.random()}>"{this.props.quote}"</h1>
          <h5 id="author"
          >
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>


        <div key={Math.random()} >
          <h1 id="quote" key={Math.random()}>"{this.props.quote}"</h1>
          <h5 id="author"
          >
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>

        <div key={Math.random()} >
          <h1 id="quote" key={Math.random()}>"{this.props.quote}"</h1>
          <h5 id="author"
          >
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>

        <div key={Math.random()} >
          <h1 id="quote" key={Math.random()}>"{this.props.quote}"</h1>
          <h5 id="author"
          >
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>

        <div key={Math.random()} >
          <h1 id="quote" key={Math.random()}>"{this.props.quote}"</h1>
          <h5 id="author"
          >
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;
