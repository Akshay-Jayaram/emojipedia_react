import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createEmoji(em) {
  return <Card key={em.id} img={em.emoji} name={em.name} desc={em.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
