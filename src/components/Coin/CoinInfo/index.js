import React, { useState } from "react";
import "./styles.css";
function CoinInfo({ name, desc }) {
  const [flag, setFlag] = useState(false);
  const shortDesc =
    desc.slice(0, 400) + "<p style=color:var(--gray)> Read More..</p>";
  const LongDesc = desc + "<p style=color:var(--gray)> Read Less..</p>";
  return (
    <div className="gray-wrapper">
      <h2 className="coin-info-name">{name}</h2>
      {desc.length > 400 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : LongDesc }}
        />
      ) : (
        <p>{desc}</p>
      )}
    </div>
  );
}

export default CoinInfo;
