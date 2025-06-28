import React, { useEffect, useRef } from "react";
import Link from "@docusaurus/Link";
import { gsap } from "gsap";
import styles from "./styles.module.css";

export default function Hero() {
  const appScreenshotRef = useRef<HTMLImageElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);
  const screenshotContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const appImage = appScreenshotRef.current;
    if (!appImage) return;

    // 初期位置を設定（右下に配置）
    gsap.set(appImage, {
      x: "20%",
      y: "20%",
      opacity: 0,
    });

    // 繰り返しアニメーションのタイムライン
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(appImage, {
      duration: 1,
      x: "0%",
      y: "0%",
      opacity: 0.7,
      ease: "power2.out",
    })
      .to(appImage, {
        duration: 2,
        // 位置をキープ
      })
      .to(appImage, {
        duration: 1,
        x: "20%",
        y: "20%",
        opacity: 0,
        ease: "power2.in",
      })
      .to(appImage, {
        duration: 1,
        // 待機時間
      });

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (timelineRef.current) {
      timelineRef.current.pause();
      gsap.to(appScreenshotRef.current, {
        duration: 0.5,
        x: "0%",
        y: "0%",
        opacity: 0.7,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (timelineRef.current) {
      timelineRef.current.play();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const screenshotContainer = screenshotContainerRef.current;
    const appImage = appScreenshotRef.current;
    if (!screenshotContainer || !appImage) return;

    const rect = screenshotContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 移動範囲を制限（適度な範囲に調整）
    const maxMoveX = 50; // px単位で制限
    const maxMoveY = 50; // px単位で制限

    const deltaX = Math.max(
      -maxMoveX,
      Math.min(maxMoveX, (mouseX - centerX) / 8)
    );
    const deltaY = Math.max(
      -maxMoveY,
      Math.min(maxMoveY, (mouseY - centerY) / 8)
    );

    gsap.to(appImage, {
      duration: 0.3,
      x: `${deltaX}px`,
      y: `${deltaY}px`,
      ease: "power2.out",
    });
  };

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
      <div className={styles.imageSection} ref={imageSectionRef}>
        <div
          className={styles.screenshotContainer}
          ref={screenshotContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <img
            src={require("/hero/safari04.png").default}
            alt="Safari browser screenshot"
            className={styles.safariScreenshot}
          />
          <img
            ref={appScreenshotRef}
            src={require("/hero/app04.png").default}
            alt="MockLay app screenshot"
            className={styles.appScreenshot}
          />
        </div>
      </div>
    </section>
  );
}
