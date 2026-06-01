import { useState, type JSX } from 'react';
import styles from './RemoveCacheButtons.module.css';
import { useRemoveQueryCache } from '../../../hook/useRemoveQueryCache/useRemoveQueryCache';
import { useParams } from 'react-router-dom';

export default function RemoveCacheButtons(): JSX.Element {
  const { page, details } = useParams();
  const {
    removeAllQueryCache,
    removeAllQueryCardCache,
    removeQueryCardCacheForDetails,
    removeAllQueryCardsCache,
    removeAllQueryCardsCacheForPage,
  } = useRemoveQueryCache();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <span className={styles.menu}>
      <button
        className="btn btn-success"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Cache
      </button>
      <ul className={isOpen ? '' : styles.close}>
        <li>
          <button className="btn btn-danger" onClick={removeAllQueryCache}>
            Remove all query cache
          </button>
        </li>
        <li>
          <button className="btn btn-danger" onClick={removeAllQueryCardCache}>
            Remove all query Card details cache
          </button>
        </li>
        <li>
          <button
            className="btn btn-danger"
            onClick={removeQueryCardCacheForDetails}
          >
            Remove query Card cache for details = {details}
          </button>
        </li>
        <li>
          <button className="btn btn-danger" onClick={removeAllQueryCardsCache}>
            Remove all query CardList cache
          </button>
        </li>
        <li>
          <button
            className="btn btn-danger"
            onClick={removeAllQueryCardsCacheForPage}
          >
            Remove query CardList cache for page = {page}
          </button>
        </li>
      </ul>
    </span>
  );
}
