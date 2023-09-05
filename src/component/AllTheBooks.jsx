import books from "../data/book/horror.json";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-xl-5 gy-3">
          {books.map((book) => (
            <div key={book.asin} className="col">
              <div className="card">
                <img src={book.img} className="card-img-fluid" style={{ objectFit: "cover" }} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">$ {book.price} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default AllTheBooks;