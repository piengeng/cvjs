import "./style";
import { Component } from "preact";
import {
  header,
  objective,
  history,
  education,
  computing,
  languages,
  extra,
  downloadables,
} from "./json/henry";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import Experiences from "./components/Experiences/Experiences";
import Educations from "./components/Educations/Educations";
import Computing from "./components/Computing/Computing";
import PassingThrough from "./components/PassingThrough/PassingThrough";
import Engage from "./components/Engage/Engage";

export default class App extends Component {
  state = { engage: false, minify: false };

  componentDidMount() {
    document.title = "Henry's Profile";
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const maxY = this.getScrollMaxY();
    const minify = window.scrollY > 38 ? true : false;
    const engage = window.scrollY > maxY / 3 ? true : false;
    this.setState({ minify, engage });
  };
  // https://stackoverflow.com/questions/1091048/alternatives-to-window-scrollmaxy
  getScrollMaxY = () => {
    let innerh, yWithScroll;

    if (window.innerHeight) {
      innerh = window.innerHeight;
    } else {
      innerh = document.body.clientHeight;
    }

    if (window.innerHeight && window.scrollMaxY) {
      // Firefox
      yWithScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) {
      // all but Explorer Mac
      yWithScroll = document.body.scrollHeight;
    } else {
      // works in Explorer 6 Strict, Mozilla (not FF) and Safari
      yWithScroll = document.body.offsetHeight;
    }
    return yWithScroll - innerh;
  };

  render() {
    const { engage, minify } = this.state;
    return (
      <div>
        <Header header={header} minify={minify} />
        {engage ? <Engage header={header} /> : null}
        <div class="contentGrid">
          <aside />
          <main>
            <Section heading="Objective">
              <div>{objective}</div>
            </Section>
            <hr class="simple" />
            <Section heading="Experiences">
              <Experiences history={history} />
            </Section>
            <hr class="simple" />
            <Section heading="Educations, Trainings &amp; Certifications">
              <Educations education={education} />
            </Section>
            <hr class="simple" />
            <Section heading="IT Skills">
              <Computing computing={computing} />
            </Section>
            <hr class="simple" />
            <Section heading="Read, Write &amp; Speak In">
              <PassingThrough lines={languages} />
            </Section>
            <hr class="simple" />
            <Section heading="Other Information">
              <PassingThrough lines={extra} />
            </Section>
            <hr class="simple" />
            <Section heading="Downloadables">
              <PassingThrough lines={downloadables} />
            </Section>
          </main>
          <aside />
        </div>
        <Footer />
      </div>
    );
  }
}
