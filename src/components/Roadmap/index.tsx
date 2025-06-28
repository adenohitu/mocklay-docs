import React, { useState } from "react";
import styles from "./styles.module.css";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  timeline: string;
  features: string[];
}

export default function Roadmap() {
  const [selectedItem, setSelectedItem] = useState("auto-resize");

  const roadmapItems: RoadmapItem[] = [
    {
      id: "auto-resize",
      title: "自動リサイズ機能",
      description:
        "ブラウザのウィンドウサイズに合わせて画像を自動でリサイズする機能",
      status: "in-progress",
      timeline: "2025 Q3",
      features: [
        "ブラウザサイズの自動検出",
        "画像の自動スケール調整",
        "レスポンシブデザイン対応",
      ],
    },
    {
      id: "multi-layer",
      title: "マルチレイヤー対応",
      description:
        "複数の画像を同時にオーバーレイ表示し、レイヤー管理機能を提供",
      status: "planned",
      timeline: "2025 Q4",
      features: [
        "複数画像の同時表示",
        "レイヤー順序の管理",
        "個別透明度設定",
        "レイヤーグループ化",
      ],
    },
    {
      id: "annotation",
      title: "アノテーション機能",
      description:
        "画像上に注釈やコメントを追加し、チーム間でのフィードバック共有",
      status: "planned",
      timeline: "2026 Q1",
      features: [
        "マークアップツール",
        "コメント機能",
        "フィードバック共有",
        "PDF出力",
      ],
    },
    {
      id: "cloud-sync",
      title: "クラウド同期",
      description: "クラウドストレージとの連携により、設定やプロジェクトの同期",
      status: "planned",
      timeline: "2026 Q2",
      features: [
        "Google Drive連携",
        "Dropbox連携",
        "設定の自動同期",
        "プロジェクト管理",
      ],
    },
    {
      id: "browser-extension",
      title: "ブラウザ拡張機能",
      description: "ブラウザ拡張として直接Webページ上でデザイン比較",
      status: "planned",
      timeline: "2026 Q3",
      features: [
        "Chrome拡張機能",
        "Firefox拡張機能",
        "ワンクリック起動",
        "ページキャプチャ機能",
      ],
    },
  ];

  const selectedRoadmapItem =
    roadmapItems.find((item) => item.id === selectedItem) || roadmapItems[0];

  return (
    <section className={styles.roadmap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>今後の予定</h2>
          <p className={styles.subtitle}>
            MockLayの進化を続ける機能開発ロードマップ
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            {roadmapItems.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.timelineItem} ${
                  selectedItem === item.id ? styles.active : ""
                }`}
                onClick={() => setSelectedItem(item.id)}
              >
                <div
                  className={`${styles.timelinePoint} ${styles[item.status]}`}
                >
                  <div className={styles.timelinePointInner}></div>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTimestamp}>
                    {item.timeline}
                  </div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <div
                    className={`${styles.timelineStatus} ${
                      styles[item.status]
                    }`}
                  >
                    {item.status === "completed" && "完了"}
                    {item.status === "in-progress" && "開発中"}
                    {item.status === "planned" && "予定"}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.details}>
            <div className={styles.detailsCard}>
              <div className={styles.detailsHeader}>
                <h3 className={styles.detailsTitle}>
                  {selectedRoadmapItem.title}
                </h3>
                <div
                  className={`${styles.detailsStatus} ${
                    styles[selectedRoadmapItem.status]
                  }`}
                >
                  {selectedRoadmapItem.status === "completed" && "完了"}
                  {selectedRoadmapItem.status === "in-progress" && "開発中"}
                  {selectedRoadmapItem.status === "planned" && "予定"}
                </div>
              </div>
              <p className={styles.detailsDescription}>
                {selectedRoadmapItem.description}
              </p>
              <div className={styles.detailsFeatures}>
                <h4 className={styles.detailsFeaturesTitle}>主な機能</h4>
                <ul className={styles.detailsFeaturesList}>
                  {selectedRoadmapItem.features.map((feature, index) => (
                    <li key={index} className={styles.detailsFeaturesItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailsMockup}>
                <div className={styles.mockupPlaceholder}>
                  機能イメージ画像
                  <br />
                  <small>{selectedRoadmapItem.title}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
