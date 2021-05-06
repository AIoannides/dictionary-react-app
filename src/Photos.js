import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos-main">
        <h3>Gallery</h3>
        <section className="Photos">
          <div className="row">
            {props.photos.map(function (photos, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photos.src.original}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={photos.src.landscape}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
