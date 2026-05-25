import type { JSX } from 'react';
import image404 from './404.jpg';
import styles from './Error404.module.css';
import ContainerSection from '../../components/ContainerSection/ContainerSection';

export default function Error404(): JSX.Element {
  return (
    <ContainerSection>
      <h1 className="h1">Error 404</h1>

      <div className={styles.two_block}>
        <div className={styles.image_block}>
          <img className={styles.image} src={image404} alt="" />
        </div>
        <div className={styles.text_block}>
          <p>
            Welcome to the 404 page! You are here because you entered the
            address of a page that no longer exists.
          </p>

          <p>Most likely, this happened for one of the following reasons:</p>

          <ul>
            <li>
              The page has been deleted (due to information becoming outdated);
            </li>
            <li>The page has been moved to another location;</li>
            <li>
              Perhaps you missed a letter when entering the address (honestly,
              this happens to us quite often too);
            </li>
            <li>You simply enjoy exploring 404 pages.</li>
          </ul>
        </div>
      </div>
    </ContainerSection>
  );
}
