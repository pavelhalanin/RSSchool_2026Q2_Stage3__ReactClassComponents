import { useArrayFormData } from "../../store/array-form-data/hook";
import styles from "./FormArray.module.css";

export default function FormArray() {
  const arrayFormData = useArrayFormData();

  return (
    <ul className={styles.array}>
      {arrayFormData.map((e, i) => {
        return (
          <li key={`${i}-${e.name}`} className={styles.element}>
            {Object.keys(e).map((key) => {
              const VALUE = e[key as keyof typeof e];
              const RENDER_VALUE =
                typeof VALUE == "boolean" ? (VALUE ? "yes" : "no") : VALUE;

              return (
                <div key={key} className={styles.key_value_block}>
                  <div>{key}:</div>
                  <div>{RENDER_VALUE}</div>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}
