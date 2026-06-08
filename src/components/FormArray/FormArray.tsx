import { useArrayFormData } from "../../store/array-form-data/hook";
import styles from "./FormArray.module.css";
import FormArrayElement from "./FormArrayElement/FormArrayElement";

export default function FormArray() {
  const arrayFormData = useArrayFormData();

  return (
    <ul className={styles.array}>
      {arrayFormData.map((e, i) => {
        return (
          <FormArrayElement key={`${i}-${e.name}`} element={e} index={i} />
        );
      })}
    </ul>
  );
}
