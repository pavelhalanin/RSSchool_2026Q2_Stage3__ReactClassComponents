import {
  useCsvCardListActions,
  useCsvCardListItems,
} from '../../store/slices/useCsvCardList/hook';
import ContainerSection from '../ContainerSection/ContainerSection';
import styles from './CsvPanel.module.css';

export default function CsvPanel() {
  const csvItems = useCsvCardListItems();
  const { unselectAll, downloadCsvItems } = useCsvCardListActions();

  if (csvItems.length === 0) {
    return null;
  }

  return (
    <div className={styles.csv_panel__sticky}>
      <ContainerSection>
        <ul>
          <li>Selected {csvItems.length}</li>
          <li>
            <button className="btn btn-danger" onClick={unselectAll}>
              Unselect all
            </button>
          </li>
          <li>
            <button className="btn btn-success" onClick={downloadCsvItems}>
              Download CSV
            </button>
          </li>
        </ul>
      </ContainerSection>
    </div>
  );
}
