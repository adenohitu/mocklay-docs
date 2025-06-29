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
      icon: "🎨",
      title: "デザインオーバーレイ",
      description:
        "Figmaなどのデザインファイルを実際の画面に重ねて表示し、デザインと実装の差異を一目で確認できます",
      features: [
        "デザインファイルの半透明表示",
        "透明度調整で細かな比較が可能",
        "ドラッグ&ドロップで簡単読み込み",
      ],
    },
    {
      icon: "📐",
      title: "精密な位置調整",
      description: "デザインを正確な位置に配置し、ピクセル単位での比較を実現",
      features: [
        "9つのアンカーポイントで柔軟な配置",
        "サイズとスケールの調整",
        "オフセット設定で微調整",
      ],
    },
    {
      icon: "⚡",
      title: "効率的なワークフロー",
      description: "デザインチェック作業を効率化する便利な機能",
      features: [
        "最近使用したファイルの履歴管理",
        "常に最前面表示でスムーズな作業",
        "ワンクリックでの設定リセット",
      ],
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>主な機能</h2>
          <p className={styles.subtitle}>
            デザインファイルを実際の画面に重ねて表示し、デザインと実装の差異を簡単に確認
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
