import { useCardListState } from '../../store/useCardListState/useCardListState';
import styles from './CsvPanel.module.css';

export default function CsvPanel() {
  const { csvItems, unselectAllCsvItems, downloadCsvItems } =
    useCardListState();

  if (csvItems.length === 0) {
    return <></>;
  }

  return (
    <div className={styles.csv_panel__sticky}>
      <div className="container">
        <section className="section">
          <ul>
            <li>Selected {csvItems.length}</li>
            <li>
              <button className="btn btn-danger" onClick={unselectAllCsvItems}>
                Unselect all
              </button>
            </li>
            <li>
              <button className="btn btn-success" onClick={downloadCsvItems}>
                Download CSV
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
