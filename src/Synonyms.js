import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h4>Synonyms:</h4>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul>
              <li key={index}>
                <em>{synonym}</em>
              </li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
