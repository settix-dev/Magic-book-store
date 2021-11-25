import PropTypes from "prop-types";

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{book.id}</td>
            <td>{book.text}</td>
            <td>{book.category}</td>
            <td>
              <button type="button" onClick={() => handleRemoveBook(book)}>
                Remove Book
              </button>
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
