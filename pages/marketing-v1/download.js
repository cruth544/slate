import * as React from "react";
import * as Constants from "~/common/constants";
import * as Actions from "~/common/actions";

import { css } from "@emotion/react";

import WebsitePrototypeWrapper from "~/components/core/WebsitePrototypeWrapper";
import WebsitePrototypeHeader from "~/components/core/NewWebsitePrototypeHeader";
import WebsitePrototypeFooter from "~/components/core/NewWebsitePrototypeFooter";

const STYLES_ROOT = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 80px 0;
`;

const STYLES_H1 = css`
  font-size: ${Constants.typescale.lvl5};
  font-family: ${Constants.font.medium};
  font-weight: 400;
  line-height: 1.3;
  padding: 0px 0px 16px 0px;
  letter-spacing: -0.021rem;
  width: 100%;
  color: ${Constants.system.slate};

  @media (max-width: ${Constants.sizes.mobile}px) {
    font-size: ${Constants.typescale.lvl3};
  }
`;

const STYLES_H2 = css`
  font-size: ${Constants.typescale.lvl3};
  font-family: ${Constants.font.medium};
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.019rem;
  padding: 0 0 16px 0;
  width: 100%;
  color: ${Constants.system.slate};

  @media (max-width: ${Constants.sizes.mobile}px) {
    font-size: ${Constants.typescale.lvl2};
  }
`;

const STYLES_H3 = css`
  font-size: ${Constants.typescale.lvl2};
  font-family: ${Constants.font.text};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.014rem;
  padding: 0 0 8px 0;
  color: ${Constants.system.slate};
  opacity: 0.7;

  @media (max-width: ${Constants.sizes.mobile}px) {
    font-size: ${Constants.typescale.lvl1};
  }
`;

const STYLES_BLOCK = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 56vw;
  width: 100%;
  align-self: center;
  margin-bottom: 16px;

  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 100%;
    max-width: 100vw;
  }
`;

const STYLES_IMG = css`
  margin: 0px auto 48px auto;
  width: 40%;
  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 60%;
  }
`;

const STYLES_ANNOTATION = css`
  margin-top: 4px;
  font-size: ${Constants.typescale.lvl0};
  color: ${Constants.system.moonstone};
`;

const STYLES_BUTTON_PRIMARY = css`
  box-sizing: border-box;
  border-radius: 2px;
  outline: 0;
  border: 0;
  min-height: 48px;
  padding: 0px 24px 0px 24px;
  margin: 24px 0 16px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  letter-spacing: 0.2px;
  font-family: ${Constants.font.semiBold};
  transition: 200ms ease all;
  user-select: none;
  cursor: pointer;
  background-color: ${Constants.system.brand};
  color: ${Constants.system.white};
  box-shadow: -4px -4px 10px #ffffff, 4px 4px 10px #d4d4d4;

  :hover {
    color: ${Constants.system.foreground};
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: ${Constants.system.pitchBlack};
    color: ${Constants.system.wall};
    outline: 0;
    border: 0;
  }
`;

const STYLES_BUTTON_SECONDARY = css`
  box-sizing: border-box;
  border-radius: 2px;
  outline: 0;
  border: 0;
  min-height: 48px;
  padding: 0px 24px 0px 24px;
  margin: 24px 0 16px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  letter-spacing: 0.2px;
  font-family: ${Constants.font.semiBold};
  transition: 200ms ease all;
  user-select: none;
  cursor: pointer;
  background-color: ${Constants.system.foreground};
  color: ${Constants.system.brand};
  box-shadow: -4px -4px 10px #ffffff, 4px 4px 10px #d4d4d4;

  :hover {
    background-color: ${Constants.system.white};
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: ${Constants.system.pitchBlack};
    color: ${Constants.system.wall};
    outline: 0;
    border: 0;
  }
`;

const STYLES_LINK_WHITE = css`
  color: ${Constants.system.pitchBlack};
  text-decoration: none;
  transition: 200ms ease color;
  padding: 24px 0 0 0;

  :hover {
    color: ${Constants.system.moonstone};
  }

  @media (max-width: ${Constants.sizes.mobile}px) {
    font-size: 0.78rem;
  }
`;

const STYLES_SECTION_HERO = css`
  width: 100vw;
  padding: 0 88px 88px 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -88px 0px px 0px;
  background: ${Constants.system.foreground};

  @media (max-width: ${Constants.sizes.mobile}px) {
    padding: 16vh 24px 48px 24px;
    display: block;
  }
`;

const STYLES_SECTION_WRAPPER = css`
  width: 100vw;
  padding: 32px 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Constants.system.foreground};

  @media (max-width: ${Constants.sizes.mobile}px) {
    padding: 64px 24px;
    display: block;
  }
`;

const STYLES_TABLE = css`
  width: 100%;
  font-size: ${Constants.typescale.lvl0};
  border-collapse: collapse;
  text-align: left;
`;

const STYLES_TH = css`
  font-family: ${Constants.font.semiBold};
  font-weight: 400;
  border: 1px solid ${Constants.system.lightBorder};
  padding: 12px;
`;

const STYLES_TD = css`
  font-family: ${Constants.font.text};
  font-weight: 400;
  border: 1px solid ${Constants.system.lightBorder};
  padding: 12px;
`;

const STYLES_LINK = css`
  color: ${Constants.system.moonstone};
  text-decoration: none;
  transition: 200ms ease color;

  :visited {
    color: ${Constants.system.slate};
  }

  :hover {
    color: ${Constants.system.slate};
  }
`;

export const getServerSideProps = async (context) => {
  return {
    props: { ...context.query },
  };
};

export default class IndexPage extends React.Component {
  async componentDidMount() {
    const response = await Actions.health();
    console.log("HEALTH_CHECK", response);
  }
  getOs = () => {
    const os = ["Windows", "Linux", "Mac"]; // add your OS values
    return os.find((v) => navigator.appVersion.indexOf(v) >= 0);
  };
  render() {
    const title = `Slate Download`;
    const description = "Donwload Slate app and web extenstion";
    const url = "https://slate.host/download";

    return (
      <WebsitePrototypeWrapper
        title={title}
        description={description}
        url={url}
      >
        <WebsitePrototypeHeader color="dark" />
        <div css={STYLES_ROOT}>
          <div css={STYLES_SECTION_HERO}>
            <div css={STYLES_BLOCK}>
              <img
                css={STYLES_IMG}
                src="https://slate.textile.io/ipfs/bafkreidpydbatkl4rqf5bbim5qr3ottb2ibifazd2art4too5bmppp3rqm"
                alt="Slate browser extension"
              />
              <h1 css={STYLES_H1}>Slate for Chrome</h1>
              <h3 css={STYLES_H3}>
                Take any image on the web and save it to Slate right from your
                browser tab.
              </h3>
              <div>
                <button
                  css={STYLES_BUTTON_PRIMARY}
                  onClick={() =>
                    window.open(
                      "https://chrome.google.com/webstore/detail/slate/gloembacbehhbfbkcfjmloikeeaebnoc"
                    )
                  }
                >
                  Get Slate Chrome extension
                </button>
              </div>
              <p css={STYLES_ANNOTATION}>
                Currently avaible for{" "}
                <a
                  css={STYLES_LINK_WHITE}
                  href="https://www.google.com/chrome/"
                  target="_blank"
                >
                  Chrome
                </a>
                .
              </p>
            </div>
          </div>
          <div css={STYLES_SECTION_WRAPPER}>
            <div css={STYLES_BLOCK}>
              <h2 css={STYLES_H2}>Contribute</h2>
              <h3 css={STYLES_H3}>
                We would love for you to join us. You're welcomed to file an
                issue or submit a pull request on Github.
              </h3>
              <div>
                <button
                  css={STYLES_BUTTON_SECONDARY}
                  onClick={() =>
                    window.open(
                      "https://chrome.google.com/webstore/detail/slate/gloembacbehhbfbkcfjmloikeeaebnoc"
                    )
                  }
                >
                  View Github
                </button>
              </div>
            </div>
          </div>
          <div css={STYLES_SECTION_WRAPPER}>
            <div css={STYLES_BLOCK}>
              <h2 css={STYLES_H2}>Releases</h2>
              <h3 css={STYLES_H3}>
                Slate is built in public and all past releases are always
                avaible for download.
              </h3>
            </div>
            <div css={STYLES_BLOCK}>
              <table css={STYLES_TABLE}>
                <tr>
                  <th css={STYLES_TH}>Version</th>
                  <th css={STYLES_TH}>Product</th>
                  <th css={STYLES_TH}>Date</th>
                  <th css={STYLES_TH}>Download</th>
                </tr>
                <tr>
                  <td css={STYLES_TD}>0.4</td>
                  <td css={STYLES_TD}>Slate Chrome extension</td>
                  <td css={STYLES_TD}>2020-09-07</td>
                  <td css={STYLES_TD}>
                    <a
                      css={STYLES_LINK}
                      href="/public/static/slate-for-chrome-V0.4.zip"
                      download="Slate Chrome extension V0.4"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <WebsitePrototypeFooter />
      </WebsitePrototypeWrapper>
    );
  }
}
