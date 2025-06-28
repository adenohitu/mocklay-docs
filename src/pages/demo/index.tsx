import React from "react";
import styles from "./index.module.css";

export default function Demo() {
  return (
    <>
      <head>
        <title>MockLay E-commerce デモ</title>
        <meta
          name="description"
          content="MockLayでの比較用E-commerceサンプルページ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div className={styles.demoContainer}>
        {/* Navigation */}
        <nav className={styles.navbar}>
          <div className={styles.logo}>🛍️ ShopMock</div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">ホーム</a>
            </li>
            <li>
              <a href="#">商品</a>
            </li>
            <li>
              <a href="#">カテゴリ</a>
            </li>
            <li>
              <a href="#">セール</a>
            </li>
            <li>
              <a href="#">サポート</a>
            </li>
          </ul>
          <button className={styles.cartIcon}>
            🛒
            <span className={styles.cartBadge}>3</span>
          </button>
        </nav>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>最新コレクション</h1>
            <p className={styles.subtitle}>
              高品質な商品を厳選してお届け。今なら全商品30%オフのキャンペーン実施中！
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>今すぐ購入</button>
              <button className={styles.secondaryBtn}>カタログを見る</button>
            </div>
          </div>
        </section>

        <main className={styles.main}>
          {/* Product Grid */}
          <section className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productImage}>👕</div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>プレミアムTシャツ</h3>
                <p className={styles.productDescription}>
                  高品質なオーガニックコットンを使用した快適な着心地のTシャツです。
                </p>
                <div className={styles.productPrice}>¥3,980</div>
                <button className={styles.addToCartBtn}>カートに追加</button>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImage}>👟</div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>ランニングシューズ</h3>
                <p className={styles.productDescription}>
                  軽量で通気性に優れた、毎日のランニングに最適なシューズです。
                </p>
                <div className={styles.productPrice}>¥12,800</div>
                <button className={styles.addToCartBtn}>カートに追加</button>
              </div>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImage}>🎒</div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>ビジネスバッグ</h3>
                <p className={styles.productDescription}>
                  ビジネスシーンに最適な機能性とデザインを兼ね備えたバッグです。
                </p>
                <div className={styles.productPrice}>¥8,500</div>
                <button className={styles.addToCartBtn}>カートに追加</button>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImage}>⌚</div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>スマートウォッチ</h3>
                <p className={styles.productDescription}>
                  健康管理からスマート通知まで、多機能なウェアラブルデバイスです。
                </p>
                <div className={styles.productPrice}>¥24,800</div>
                <button className={styles.addToCartBtn}>カートに追加</button>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImage}>📱</div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>スマートフォンケース</h3>
                <p className={styles.productDescription}>
                  耐衝撃性に優れ、ワイヤレス充電にも対応したプロテクティブケースです。
                </p>
                <div className={styles.productPrice}>¥2,980</div>
                <button className={styles.addToCartBtn}>カートに追加</button>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImage}>🎧</div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>ワイヤレスイヤホン</h3>
                <p className={styles.productDescription}>
                  ノイズキャンセリング機能付きの高音質ワイヤレスイヤホンです。
                </p>
                <div className={styles.productPrice}>¥15,800</div>
                <button className={styles.addToCartBtn}>カートに追加</button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={styles.featuresSection}>
            <div className={styles.main}>
              <h2 className={styles.sectionTitle}>なぜShopMockを選ぶのか</h2>
              <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                  <span className={styles.featureIcon}>🚚</span>
                  <h3 className={styles.featureTitle}>送料無料</h3>
                  <p className={styles.featureDescription}>
                    5,000円以上のご購入で全国送料無料でお届けします。
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <span className={styles.featureIcon}>🔒</span>
                  <h3 className={styles.featureTitle}>安心セキュリティ</h3>
                  <p className={styles.featureDescription}>
                    SSL暗号化通信により、お客様の個人情報を安全に保護します。
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <span className={styles.featureIcon}>📞</span>
                  <h3 className={styles.featureTitle}>24/7サポート</h3>
                  <p className={styles.featureDescription}>
                    いつでもお気軽にお問い合わせください。専門スタッフが対応します。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50,000+</span>
                <span className={styles.statLabel}>満足したお客様</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1,000+</span>
                <span className={styles.statLabel}>取り扱い商品</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>アップタイム</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24h</span>
                <span className={styles.statLabel}>配送時間</span>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className={styles.newsletterSection}>
            <h2 className={styles.newsletterTitle}>特別オファーを受け取る</h2>
            <p className={styles.newsletterDescription}>
              新商品情報や限定セールのお知らせをいち早くお届けします。
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                className={styles.emailInput}
                placeholder="メールアドレスを入力"
              />
              <button type="submit" className={styles.subscribeBtn}>
                登録する
              </button>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>会社情報</h3>
              <ul>
                <li>
                  <a href="#">会社概要</a>
                </li>
                <li>
                  <a href="#">採用情報</a>
                </li>
                <li>
                  <a href="#">ニュース</a>
                </li>
                <li>
                  <a href="#">投資家情報</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>カスタマーサービス</h3>
              <ul>
                <li>
                  <a href="#">お問い合わせ</a>
                </li>
                <li>
                  <a href="#">よくある質問</a>
                </li>
                <li>
                  <a href="#">配送について</a>
                </li>
                <li>
                  <a href="#">返品・交換</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>ショッピング</h3>
              <ul>
                <li>
                  <a href="#">商品一覧</a>
                </li>
                <li>
                  <a href="#">カテゴリ</a>
                </li>
                <li>
                  <a href="#">セール</a>
                </li>
                <li>
                  <a href="#">ギフトカード</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>フォローする</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              &copy; 2024 ShopMock. All rights reserved. |{" "}
              <a href="#">プライバシーポリシー</a> | <a href="#">利用規約</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
