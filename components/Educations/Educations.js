import Markup from "preact-markup";
import css from "../Experiences/Experiences.scss";

const Educations = ({ ...props }) => {
  const { education } = props;

  const content = (
    <ul class={css.dashInner}>
      {education.map(line => {
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

export default Educations;
