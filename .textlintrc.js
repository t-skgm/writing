module.exports = {
  plugins: {},
  filters: {},
  rules: {
    // それぞれのルールのデフォルト値
    "preset-japanese": {
      // https://github.com/textlint-ja/textlint-rule-max-ten
      // 一文で使える"、"の数
      "max-ten": {
        max: 3,
      },
      // https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
      // 逆接の接続助詞「が」が、同一文中に複数回出現していないかどうか
      // e.g.) 今日は早朝から出発したが、定刻には間に合わなかったが、無事会場に到着した。
      "no-doubled-conjunctive-particle-ga": true,
      // https://github.com/takahashim/textlint-rule-no-doubled-conjunction
      // 同じ接続詞が連続して出現していないかどうか
      "no-doubled-conjunction": true,
      // https://github.com/textlint-ja/textlint-rule-no-double-negative-ja
      // 二重否定の検出
      "no-double-negative-ja": true,
      // https://github.com/textlint-ja/textlint-rule-no-doubled-joshi
      // 二重助詞の検出
      // 連続して同じ助詞が出た場合のみを検出
      "no-doubled-joshi": {
        min_interval: 1,
      },
      // https://github.com/azu/textlint-rule-sentence-length
      // 一文の最大の長さ
      "sentence-length": {
        max: 150,
      },
      // https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra
      // ら抜き言葉を使用しない
      "no-dropping-the-ra": true,
      // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
      // 文の敬体(ですます調)、常体(である調)のチェック
      "no-mix-dearu-desumasu": true,
      // https://github.com/azu/textlint-rule-no-nfd
      // ホ゜ケット エンシ゛ン
      // のような、Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック
      "no-nfd": true,
      // https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
      // 制御文字の検出
      "no-invalid-control-character": true,
      // https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces
      // ゼロ幅スペースの検出
      "no-zero-width-spaces": true,
      // https://github.com/xl1/textlint-rule-no-kangxi-radicals
      // 康煕部首の検出
      "no-kangxi-radicals": true,
    },
    "preset-ja-spacing": {
      "ja-space-between-half-and-full-width": {
        space: ["alphabets"],
      },
    },
    "ja-no-redundant-expression": true,
    "ja-no-abusage": true,
    "ja-hiragana-keishikimeishi": true,
    "ja-hiragana-fukushi": true,
    "ja-hiragana-hojodoushi": true,
  },
};
