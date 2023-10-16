import React from "react";


const Sentiment = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="sentiment-card red-card">
            <h2>Negative</h2>
           {props.data?.most_negative && <p>"{props.data?.most_negative}"</p>}
          </div>
          <div className="sentiment-card gray-card">
            <h2>Neutral</h2>
           {props.data?.most_neutral && <p>"{props.data?.most_neutral}"</p>}
          </div>
          <div className="sentiment-card green-card">
            <h2>Positive</h2>
            {props.data?.most_positive && <p>"{props.data?.most_positive}"</p>}
          </div>
        </div>
      );
}

export default Sentiment;

