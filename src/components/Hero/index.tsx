import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>MockLay</h1>
            <p className={styles.subtitle}>
              デザインの校正・チェック作業をサポートするアプリケーション
            </p>
            <p className={styles.description}>
              画像を半透明のオーバーレイとして表示し、ブラウザやアプリ上のコンテンツと比較しながらデザインの確認を行うことができます。
            </p>
            <div className={styles.buttons}>
              <Link
                className={`${styles.button} ${styles.primaryButton}`}
                to="#download"
              >
                ダウンロード
              </Link>
              <Link
                className={`${styles.button} ${styles.secondaryButton}`}
                to="/docs/intro"
              >
                ドキュメント
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.screenshotContainer}>
          <img
            src={require("/hero/safari04.png").default}
            alt="Safari browser screenshot"
            className={styles.safariScreenshot}
          />
          <img
            src={require("/hero/app03.png").default}
            alt="MockLay app screenshot"
            className={styles.appScreenshot}
          />
        </div>
      </div>
    </section>
  );
}
