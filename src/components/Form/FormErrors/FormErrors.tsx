import AlertDanger from "../../AlertDanger/AlertDanger";

interface IPropsFormErrors {
  errors: Array<string>;
}

export default function FormErrors(props: IPropsFormErrors) {
  if (props.errors.length == 0) {
    return <></>;
  }

  return (
    <AlertDanger>
      {props.errors.map((e, i) => (
        <div key={`${e}${i}`}>{e}</div>
      ))}
    </AlertDanger>
  );
}
