import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div className="bg-white mb-3 text-secondary d-flex align-items-center justify-content-between p-3 pe-5">
      <table className="w-50">
        <tbody>
          <tr>
            <td>{book.category}</td>
          </tr>
          <tr>
            <td className="d-flex flex-column justify-content-center">
              <h4 className="text-dark m-0">{book.text}</h4>
              <p className="text-info author-p mb-0">{book.author}</p>
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn ps-0 text-info">Comment</button>
              <button
                className="btn rm-btn text-primary py-0"
                type="button"
                onClick={() => handleRemoveBook(book)}
              >
                Remove Book
              </button>
              <button className="btn text-info">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2>{book.progress}</h2>
        <p>Completed</p>
        <progress className="px-5" max={100} value={70}>
          70%
        </progress>
      </div>
      <div className="bg-white current-chapter-div d-flex flex-column ms-3 justify-content-between">
        <p className="m-0 p-0">CURRENT CHAPTER</p>
        <span className="my-2 p-0">Chapter 17</span>
        <Button className="w-100" type="button" variant="primary" size="sm">
          UPDATE PROGRESS
        </Button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleRemoveBook: PropTypes.func,
};

export default Book;
