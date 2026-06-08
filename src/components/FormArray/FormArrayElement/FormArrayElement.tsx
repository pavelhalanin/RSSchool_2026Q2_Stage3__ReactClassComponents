import type { IArrayFormDataSlice } from "../../../store/array-form-data/types";
import styles from "./../FormArray.module.css";
import useTemporaryFlag from "../../../hook/useTemporyFlag/useTemporyFlag";

interface IPropsFormArrayElement {
  element: IArrayFormDataSlice["arrayFormData"][number];
  index: number;
}

export default function FormArrayElement(props: IPropsFormArrayElement) {
  const element = props.element;

  const isNew = useTemporaryFlag(new Date(element.id).getTime());

  return (
    <li className={styles.element} data-is-new={isNew ? "1" : "0"}>
      {Object.keys(element).map((key) => {
        const VALUE = element[key as keyof typeof element];

        if (typeof VALUE === "string" && `${VALUE}`.startsWith("data:image")) {
          return (
            <div key={key} className={styles.key_value_block_for_image}>
              <div>{key}:</div>
              <div>
                <img src={VALUE} alt="no image" />
              </div>
            </div>
          );
        }

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
}
