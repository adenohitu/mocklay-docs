import React from "react";
import styles from "./styles.module.css";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function FeatureItem({ icon, title, description, features }: FeatureItemProps) {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureListItem}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: "📸",
      title: "画像オーバーレイ表示",
      description:
        "デザインファイルを半透明で表示し、実装との比較を簡単に行えます",
      features: [
        "ドラッグ&ドロップで簡単読み込み",
        "透明度調整（20%〜100%）",
        "ブラウザ画面との重ね合わせ比較",
      ],
    },
    {
      icon: "🔧",
      title: "表示制御",
      description: "細かな位置調整とサイズ調整で正確なデザインチェックが可能",
      features: [
        "ウィンドウサイズの手動調整",
        "スケール調整（拡大・縮小）",
        "9つのアンカーポイント + オフセット",
        "ワンクリック元サイズ復元",
      ],
    },
    {
      icon: "📜",
      title: "履歴機能",
      description: "使用した画像の履歴を保存し、効率的な作業をサポート",
      features: [
        "最近使用した画像の自動保存",
        "履歴からの素早い再読み込み",
        "よく使う画像のお気に入り登録",
      ],
    },
    {
      icon: "🎯",
      title: "ウィンドウ制御",
      description: "デザインチェックに最適化されたウィンドウ操作",
      features: [
        "常に最前面表示",
        "画像なしでの位置固定",
        "タイトルバーでの最小化・閉じる操作",
      ],
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>主な機能</h2>
          <p className={styles.subtitle}>
            MockLayは、デザインの校正・チェック作業を効率化する様々な機能を提供します
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
