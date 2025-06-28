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
          <div className={styles.imageSection}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockupWindow}>
                <div className={styles.windowHeader}>
                  <div className={styles.windowControls}>
                    <div className={styles.windowButton}></div>
                    <div className={styles.windowButton}></div>
                    <div className={styles.windowButton}></div>
                  </div>
                  <div className={styles.windowTitle}>MockLay</div>
                </div>
                <div className={styles.windowContent}>
                  <div className={styles.placeholder}>
                    製品スクリーンショット
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
