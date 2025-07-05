import React from 'react';

const Gallery = () => (
  <section className="container my-5">
    <h1>My Work</h1>
    <div className="row">
      {[1, 2, 3, 4, 5, 6].map((img, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card">
            <img
              src={`https://picsum.photos/seed/${img}/600/400`}
              className="card-img-top"
              alt={`Gallery image ${img}`}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
