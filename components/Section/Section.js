import css from "./Section.scss";

const Section = ({ children, ...props }) => {
  return (
    <section class={css.section} {...props}>
      <h1 class="fontHeader"> {props.heading} </h1>
      {children}
    </section>
  );
};

export default Section;
