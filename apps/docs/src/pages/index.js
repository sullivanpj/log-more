import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Author } from "../components/Author";
import { HeroLogo } from "../components/HeroLogo";
import Admonition from "@theme/Admonition";
import { SiTypescript } from "react-icons/si";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsSpeedometer, BsFillGearFill } from "react-icons/bs";
import { FaPlug, FaLightbulb } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { ImPencil2, ImNewspaper } from "react-icons/im";
import CodeBlock from "@theme/CodeBlock";

function Feature({ imageUrl, title, description, Icon }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl ? (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      ) : (
        Icon && (
          <div className="text--center">
            <Icon className={styles.iconLink} size="8em" />
          </div>
        )
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Log-Right - typescript logging API">
      <header className={clsx("hero hero--primary ", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col", styles.heroBannerCol)}>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h1 className="hero__title fadeIn">{siteConfig.title}</h1>
                    </div>
                  </div>
                  <div className="row slideUp">
                    <div className="col">
                      <p
                        className={clsx(
                          "hero__subtitle ",
                          styles.heroSubtitle
                        )}>
                        {siteConfig.tagline}
                      </p>
                    </div>
                  </div>
                  <div className={clsx("row slideUp", styles.heroButtons)}>
                    <div className={clsx("col", styles.button)}>
                      <Link
                        className={clsx(
                          "button button--primary button--lg padding--md margin-vert--lg",
                          styles.getStarted
                        )}
                        to={useBaseUrl("docs/log-right/")}>
                        Get Started
                      </Link>
                    </div>
                    <div className={clsx("col", styles.button)}>
                      <Link
                        className={clsx(
                          "button button--outline button--secondary button--lg padding--md margin-vert--lg",
                          styles.getStarted
                        )}
                        to="https://github.com/sullivanpj/log-right">
                        View in GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <HeroLogo />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.sectionDark}>
          <div className="container">
            <div className={clsx("row padding-top--lg", styles.sectionTitle)}>
              <h3>Simplified logging with plug and play event processing</h3>
            </div>
          </div>
          <div className={clsx("container", styles.section)}>
            <div className="row">
              <Feature
                title="Error Handling"
                description={
                  <>
                    Log-Right's `Result` class provides a standard way to handle
                    returning errors (or any other value) from a function or
                    external process. By using the Result object as your go-to
                    method of returning from a function, you are organizing all
                    of your code's function types, keeping to a consistent and
                    predicable error handling principle, and enabling your code
                    to use the rest of the Log-Right event handling flow.
                  </>
                }
                Icon={MdOutlineError}
              />
              <Feature
                title="Formatting"
                description={
                  <>
                    Log-Right will first format Result objects using a method
                    provided by the user (or the default methods if not
                    provided), so that the data is in a form that can be
                    captured to the logs. Log-Right also has various build-in
                    methods of formatting this data that the user can select
                    from.
                  </>
                }
                Icon={ImPencil2}
              />
              <Feature
                title="Logging"
                description={
                  <>
                    Logging in JavaScript/TypeScript can unfortunately tend to
                    be much more difficult than just writing a string to the
                    console. Log-Right has plenty of built in functionality to
                    support various methods of capturing this data to the source
                    of your choice - but if you just want to write a string to
                    the console, Log-Right has you covered there too!
                  </>
                }
                Icon={ImNewspaper}
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionLight}>
          <div className={clsx("container", styles.section)}>
            <div className={clsx("row", styles.verticalAlign)}>
              <div className="col margin-right--lg">
                <div
                  className={clsx("row margin-top--lg", styles.sectionTitle)}>
                  <div className="col">
                    <h3>The Result Handler Flow</h3>
                  </div>
                </div>

                <div className="row">
                  <p>
                    Log-Right introduces the Result object which can be returned
                    from any function or process to indicate if it was
                    successful (and if not, what failed). The verification
                    function can then be called to do the following:
                  </p>
                  <ol>
                    <li>
                      Check if the Result should be logged/reported (based on
                      it's severity).
                    </li>
                    <li>
                      Format the Result data into something that can be provided
                      to the logs.
                    </li>
                    <li>
                      Capture the formatted Result data to the configured
                      logging method.
                    </li>
                    <li>Call a user defined callback function.</li>
                    <li>
                      Check if the Result is considered an Error (based on it's
                      severity).
                    </li>
                  </ol>
                </div>
              </div>
              <div className="col margin-left--lg">
                <img
                  src={useBaseUrl("img/flow.svg")}
                  height="700"
                  width="603"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={clsx("container", styles.section)}>
            <div className={clsx("row", styles.verticalAlign)}>
              <div className="col margin-right--lg">
                <CodeBlock language="ts" title="/src/utils/greaterThanFive.ts">
                  {`
import { Result } from "log-result";

export type GreaterThanFiveReturn = {
    a: string;
    b: boolean;
}
                  
export const greaterThanFive(param: number): Result<GreaterThanFiveReturn> {
  try {
      if (param =< 5) {
        return Result.error("param is not greater than 5");
      }

      const returnValues: GreaterThanFiveReturn = {
        a: "some string",
        b: false
      }

      return Result.success(returnValues);
  } catch (e) {
      return Result.error(e);
  }
}`}
                </CodeBlock>
              </div>

              <div
                className={clsx(
                  "col row margin-left--lg",
                  styles.sectionTitle
                )}>
                <div
                  className={clsx(
                    "row margin-top--lg",
                    styles.horizontalAlign
                  )}>
                  <div className="col">
                    <h3>Using Log-Right Return Types</h3>
                  </div>
                </div>

                <div className="row">
                  <p>
                    Log-Right aims to standardize returning values and/or errors
                    from functions. The success and error static functions in
                    the Result class can be used to quickly generate a Result
                    object instance. The success function also accepts return
                    values as a parameter that can be used in the calling
                    function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionLight}>
          <div className={clsx("container", styles.section)}>
            <div className={clsx("row", styles.verticalAlign)}>
              <div
                className={clsx(
                  "col row margin-right--lg",
                  styles.sectionTitle
                )}>
                <div
                  className={clsx(
                    "row margin-top--lg",
                    styles.horizontalAlign
                  )}>
                  <div className="col">
                    <h3>Handling Result Objects</h3>
                  </div>
                </div>

                <div className="row">
                  <p>
                    In the calling function, it is very simple to handle the
                    Result object that was passed up from the returning
                    function. The Result class has a method `validate` that will
                    return true if the returning function succeeded and false if
                    it failed. The validate function will also trigger the rest
                    of the Result handler flow (formatting and capturing the
                    logs, invoking callbacks, etc.).
                  </p>
                </div>
                <div className={clsx("row margin-top--lg", styles.leftAlign)}>
                  <Admonition type="info">
                    The validate function will only start the calls to the the
                    Result handler flow the first time it is called for that
                    object. This is to prevent duplicate logging events and
                    callbacks.
                  </Admonition>
                </div>
              </div>

              <div className="col margin-left--lg">
                <CodeBlock language="ts" title="/src/app/numberProcessing.ts">
                  {`
import { Result } from "log-result";
import { greaterThanFive, GreaterThanFiveReturn } from "../../utils/greaterThanFive.ts";

export const numberProcessing(param: number): Result<GreaterThanFiveReturn> {
  try {
    const result: Result<GreaterThanFiveReturn> = greaterThanFive(param);
      if (!result.validate()) {
        // greaterThanFive failed to execute
        return result;
      }

      // greaterThanFive was successful
      const returnValues: GreaterThanFiveReturn = result.data;

      // returnValues = { a: "some string", b: false }

      return Result.success(returnValues);
  } catch (e) {
      return Result.error(e);
  }
}`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={clsx("container", styles.section)}>
            <div className="row">
              <Feature
                title="Simple"
                description={
                  <>
                    The library's APIs are extremely easy to use and learn.
                    Plus, everything you need to know is included in our
                    detailed documentation.
                  </>
                }
                Icon={FaLightbulb}
              />
              <Feature
                title="Modular"
                description={
                  <>
                    Aside from the core functionality that comes with the
                    log-right package, additional functionality can be added
                    through our growing list of plugin packages.
                  </>
                }
                Icon={FaPlug}
              />
              <Feature
                title="TypeScript Support"
                description="Log-Right is created using TypeScript, so all the types associated with the package are fully supported, available for use, and up to date."
                Icon={SiTypescript}
              />
              <Feature
                title="Performance"
                description={
                  <>
                    The async-process package calls all event handling and
                    logging modules in a separate web worker thread, so that
                    main thread is free to continue processing without the
                    additional overhead.
                  </>
                }
                Icon={BsSpeedometer}
              />

              <Feature
                title="Light-Weight"
                description={
                  <>
                    Package modules are separated by functionality/utility, so
                    the imports are very light-weight and work great with
                    webpack, Browserify, or Rollup and also supports
                    tree-shaking!
                  </>
                }
                Icon={VscFileSubmodule}
              />
              <Feature
                title="Configuration"
                description={
                  <>
                    Log-Right can be configuration as little or as much as the
                    user desires. All handlers, events, and logs are
                    customizable; however, we defined various default
                    configurations sets, so this is not required.
                  </>
                }
                Icon={BsFillGearFill}
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionLight}>
          <div
            className={clsx(
              "container padding-bottom--lg",
              styles.horizontalAlign,
              styles.section
            )}>
            <div className="col">
              <div
                className={clsx(
                  "row",

                  styles.sectionTitle
                )}>
                <h3>Are you ready to get started with Log-Right?</h3>
              </div>

              <div className={clsx("row", styles.horizontalAlign)}>
                <Link
                  className={clsx(
                    "button button--secondary button--outline  button--lg padding--md margin-vert--lg margin-right--sm margin-left--sm",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/learning/introduction")}>
                  Learn More
                </Link>
                <Link
                  className={clsx(
                    "button button--secondary button--outline button--lg padding--md margin-vert--lg margin-right--sm margin-left--sm",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/log-right")}>
                  View Documentation
                </Link>
                <Link
                  className={clsx(
                    "button button--secondary button--outline button--lg padding--md margin-vert--lg margin-right--sm margin-left--sm",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/learning/installation")}>
                  Installation
                </Link>
                <Link
                  className={clsx(
                    "button button--secondary button--outline button--lg padding--md margin-vert--lg margin-right--sm margin-left--sm",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/learning/getting-started")}>
                  Getting Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div
            className={clsx(
              "container padding-vert--lg",
              styles.section,
              styles.sectionTitle,
              styles.horizontalAlign
            )}>
            <Author />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
