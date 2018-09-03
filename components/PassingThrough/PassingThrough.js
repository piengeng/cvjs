import Markup from "preact-markup";
import css from "../Experiences/Experiences.scss";

const PassingThrough = ({ ...props }) => {
  const { lines } = props;

  const content = (
    <ul class={css.dashInner}>
      {lines.map(line => {
        return (
          <li>
            <Markup markup={line} type="html" trim={false} />
          </li>
        );
      })}
    </ul>
  );
  return content;
};

export default PassingThrough;
