import PropTypes from "prop-types";

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="id" hidden={true}>
              {book.id}
            </td>
            {/* <td>{book.text}</td> */}
          </tr>
          <tr>
            <td>{book.category}</td>
          </tr>
          <tr>
            <td>{book.text}</td>
          </tr>
          <tr>
            <td>
              <button className="btn">Comment</button>
              <button
                className="btn"
                type="button"
                onClick={() => handleRemoveBook(book)}
              >
                Remove Book
              </button>
              <button className="btn">Edit</button>
            </td>
            <td>
              <progress
                className="progress-bar"
                max={100}
                value={70}
                placeholder="UPDATE PROGRESS"
              >
                70%
              </progress>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleRemoveBook: PropTypes.func,
};

export default Book;
