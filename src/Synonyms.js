import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
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
