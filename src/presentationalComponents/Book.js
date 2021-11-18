const Book = ({bookId, title, category}) => {
    return (
        <div>
           <table>
                <tbody>
                <tr>
                <td>{bookId}</td>
                <td>{title}</td>
                <td>{category}</td>
                </tr>
                </tbody>
            </table> 
        </div>
    )
}

export default Book
