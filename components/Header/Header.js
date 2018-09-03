import { Component } from "preact";
import css from "./Header.scss";

class Header extends Component {
  render(props) {
    const {
      enName,
      cnName,
      mobile,
      email,
      address,
      cnNameBase64,
    } = props.header;
    const { minify } = props;

    const partial = (
      <header class={[css.partial, css.headerBg].join(" ")}>
        <div>
          <img class={css.cname} src={cnNameBase64} alt={cnName} />
          <span class={"fontFullName"}> &nbsp;&nbsp;-&nbsp;&nbsp; </span>
          <span class="fontFullName">Henry Kwan</span>
        </div>
      </header>
    );

    const full = (
      <header class={[css.full, css.headerBg, css.grid].join(" ")}>
        <div class="fontFullName">{enName}</div>
        <div class="fontContact">
          <a
            class={css.link}
            href={"tel:" + mobile.replace(/-/g, "")}
            target="_blank"
          >
            {mobile}
          </a>{" "}
          |{" "}
          <a
            class={css.link}
            href={"mailto:" + email + "?Subject=Let's meet!"}
            target="_blank"
          >
            {email}
          </a>
        </div>
        <div class="fontContact">{address}</div>
      </header>
    );

    return (
      <div>
        {minify ? partial : null}
        {full}
      </div>
    );
  }
}

export default Header;
