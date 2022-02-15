import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import AvatarImageUrl from "@site/static/img/avatar.png";
import { BsGithub } from "react-icons/bs";
import { SiKeybase } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { ImMail4 } from "react-icons/im";

export const Author = () => {
  const context = useDocusaurusContext();

  return (
    <div class="col padding-bottom--lg">
      <div className={clsx("row ", styles.horizontalAlign)}>
        <div className={clsx("col ", styles.fitContent)}>
          <h3>Author</h3>
        </div>
      </div>
      <div className={clsx("row margin-bottom--md", styles.horizontalAlign)}>
        <div class="col">
          <div class="avatar avatar--vertical">
            <img src={AvatarImageUrl} height="200" width="200" />
            <div class="avatar__intro">
              <div class="avatar__name margin-top--md">Patrick Sullivan</div>
              <small class="avatar__subtitle">
                A person with a passion for learning new things.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("row margin-bottom--sm", styles.horizontalAlign)}>
        <a className={styles.iconLink} href="https://github.com/sullivanpj">
          <BsGithub size="3em" />
        </a>

        <a
          className={clsx("margin-left--md", styles.iconLink)}
          href="https://keybase.io/sullivanp">
          <SiKeybase size="3em" />
        </a>

        <a
          className={clsx("margin-left--md", styles.iconLink)}
          href="http://sullypat.com">
          <CgWebsite size="3em" />
        </a>

        <a
          className={clsx("margin-left--md", styles.iconLink)}
          href={`mailto:patrick.joseph.sullivan@protonmail.com?subject=${encodeURIComponent(
            "I want to talk about Log-More!"
          )}`}>
          <ImMail4 size="3em" />
        </a>
      </div>

      <div
        className={clsx(
          "row margin-bottom--md",
          styles.horizontalAlign,
          styles.fingerPrint
        )}>
        <p>Finger Print: 1BD2 7192 7770 2549 F4C9 F238 E6AD C420 DA5C 4C2D</p>
      </div>
    </div>
  );
};
