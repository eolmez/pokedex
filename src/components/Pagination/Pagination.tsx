import Link from "next/link";
interface PaginationProps {
  pageNumber: number;
}

const Pagination = ({ pageNumber }: PaginationProps) => {
  const previousPage = `/pokemon-list?page=${pageNumber - 1}`;
  const nextPage = `/pokemon-list?page=${pageNumber + 1}`;
  const disabledClass = pageNumber === 1 ? "page-item disabled" : "page-item";
  return (
    <nav
      aria-label="Page navigation"
      className="d-flex justify-content-center mt-5 mb-5"
    >
      <ul className="pagination">
        <li className={disabledClass}>
          <Link
            className="page-link"
            href={pageNumber > 1 ? previousPage : ""}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        <li className="page-item active">
          <span className="page-link">{pageNumber}</span>
        </li>
        <li className="page-item">
          <Link className="page-link" href={nextPage}>
            {pageNumber + 1}
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link"
            href={`/pokemon-list?page=${pageNumber + 2}`}
          >
            {pageNumber + 2}
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href={nextPage} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
