import Markup from "preact-markup";
import css from "./Experiences.scss";

const Experiences = ({ ...props }) => {
  const { history } = props;

  const content = (
    <ul class={css.dash}>
      {history.map(uno => {
        return (
          <li>
            <b>{uno.title}</b> @ {uno.companyName}, {uno.companyLocation}{" "}
            {uno.duration}
            <ul class={[css.dashInner, css.smaller].join(" ")}>
              {uno.details.map(item => {
                return (
                  <li>
                    <Markup markup={item} type="html" trim={false} />
                  </li>
                );
              })}
              <div class={css.spacing} />
            </ul>
          </li>
        );
      })}
    </ul>
  );
  return content;
};

export default Experiences;
