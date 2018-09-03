import css from "../Experiences/Experiences.scss";

const Computing = ({ ...props }) => {
  const { computing } = props;

  const content = (
    <ul class={css.dashInner}>
      {computing.map(uno => {
        return (
          <li>
            <div>
              {uno.main !== "" ? <b>{uno.main}: </b> : null}
              {uno.list.join(", ")}
            </div>
          </li>
        );
      })}
    </ul>
  );
  return content;
};

export default Computing;
