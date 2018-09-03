import css from "./Footer.scss";

const Footer = () => {
  const copy = (
    <small>&copy; {new Date().getFullYear()} Kwan Pien Geng (Henry)</small>
  );
  return <footer class={css.footer}>{copy}</footer>;
};

export default Footer;
