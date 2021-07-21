import Link from 'next/link';
import { PER_PAGE } from '@/config/index';
import styles from '@/styles/Pagination.module.css';

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div className={styles.paginationBar}>
      <div className={styles.paginationRow}>
        {page > 1 && (
          <Link href={`/events?page=${page - 1}`}>
            <a className="btn-secondary">Prev</a>
          </Link>
        )}
      </div>

      <div className={styles.paginationRow}>
        {page < lastPage && (
          <Link href={`/events?page=${page + 1}`}>
            <a className="btn-secondary">Next</a>
          </Link>
        )}
      </div>
    </div>
  );
}
