import css from "./Engage.scss";

const Engage = ({ ...props }) => {
  const { mobile, email } = props.header;
  return (
    <div class={css.sticky}>
      <a
        class={css.encircle}
        href={"mailto:" + email + "?Subject=Let's meet!"}
        target="_blank"
      >
        📧
      </a>

      <a
        class={css.encircle}
        href={"tel:" + mobile.replace(/-/g, "")}
        target="_blank"
      >
        🤙
      </a>
    </div>
  );
};

export default Engage;
