import React from "react";

export default function Paginado({ charsPerPage, allChars, paginado }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(allChars / charsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.length <= 1 ? (
        <></>
      ) : (
        <nav>
          <ul>
            {pages?.map((p) => (
              <button key={p} onClick={() => paginado(p)}>
                {p}
              </button>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
