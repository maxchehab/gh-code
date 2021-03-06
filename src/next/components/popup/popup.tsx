import { Component, Fragment } from "react";
import { Pane } from "evergreen-ui";
import Head from "next/head";

import { DataProvider } from "../data-provider";
import { Footer } from "../footer";

interface PopupProps {
  children: JSX.Element | JSX.Element[];
  [key: string]: any;
}

export class Popup extends Component<PopupProps> {
  componentDidMount() {
    const fromTab = window.location.href.match(/from=tab/);

    if (!fromTab) {
      browser.runtime.sendMessage({ subject: "close-popup" });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Head>
          <script
            type={"application/javascript"}
            src={"/common/utils/polyfill.util.js"}
          ></script>
          <style>{`
            body {
              margin: 0px;
            }
          `}</style>
        </Head>
        <DataProvider>
          <Pane
            height={400}
            width={325}
            overflowX={"hidden"}
            display={"flex"}
            alignItems={"vertical"}
            flexFlow={"column"}
          >
            <Pane
              {...this.props}
              flexGrow={1}
              display={"flex"}
              alignItems={"vertical"}
              flexFlow={"column"}
              minHeight={0}
            >
              {children}
            </Pane>
            <Footer />
          </Pane>
        </DataProvider>
      </Fragment>
    );
  }
}
