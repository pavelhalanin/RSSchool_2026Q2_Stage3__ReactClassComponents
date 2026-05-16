import type { JSX } from 'react';
import image404 from './404.jpg';
import styles from './Error404.module.css';

export default function Error404(): JSX.Element {
  return (
    <div className="container">
      <section className="section">
        <div className={styles.image_block}>
          <h1 className="h1">Error 404</h1>
          <img className={styles.image} src={image404} alt="" />
        </div>
      </section>
    </div>
  );
}
