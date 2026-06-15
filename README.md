# EMS English Trainer 🚑
**救急英語トレーナー — 音声で「通じる」を体感する Web アプリ**

救急現場で外国語対応が必要な救急隊員のための **英語スピーキング練習ツール**です。
コーパス言語学の手法（共起分析・MI スコア＝相互情報量）と救急専門医の監修で選定した、
臨床的に妥当な英語表現を、**ブラウザの音声認識（Web Speech API）で練習**できます。
完全一致は不要で、**意味（キーワード）が伝われば「通じた！」**と判定するため、多少の発音差でも
「伝わる」体験ができます。

A browser-based speaking-practice tool for emergency medical service (EMS) providers who must
communicate in English. Clinically grounded expressions — selected with corpus-linguistic methods
(co-occurrence / mutual information) and curated by an emergency physician — are practiced with the
browser's real-time speech recognition. Exact wording is not required: if the key content is
recognized, it counts as "getting through."

---

## Author / 作成者
**Shunichiro Nakao, MD, MSc, PhD** (Emergency physician)
Department of Traumatology and Acute Critical Medicine, The University of Osaka

This application and its underlying corpus were developed by Dr. Shunichiro Nakao with the
assistance of **Anthropic's Claude Code**.

## Funding / 助成
> **This project was supported by a grant from The Mitsubishi Foundation.**

---

## 主な機能 / Features
- 🎤 **音声認識**：Web Speech API によるリアルタイム認識。完全一致は不要で、**キーワードのファジーマッチング**で判定。
- 🔤 **単語別フィードバック**：発話後、各キーワードの認識可否を **緑（✓）・赤（?）** で即時表示。
- 🔊 **お手本の音声合成**：各表現の手本を**北米英語音声（例：Samantha / Microsoft Zira）**で再生（英語ネイティブ音声を明示選択）。
- ⏱ **無音で自動停止**：話し終えて約2秒の無音で確定。文中の短いポーズでは切れず、2文でも続けて言えます。
- 🎚 **調整機能**：判定のゆるさ（やさしい/標準/きびしい）、発音の地域（米/英/豪）、英語を隠して挑戦、未通過のみ表示。
- 📈 **進捗管理**：症候・フェーズごとの達成状況をブラウザに保存（localStorage）。
- 🏥 **10症候 × 📋 8フェーズ**：救急現場で頻度の高い10症候を、初期接触から搬送告知までの流れで練習。
- 📊 **選定根拠の明示**：教材採用表現にタグを付与し、**コーパス出現頻度**を表示（MI 等の詳細根拠は付属の研究データ Excel に収載）。
- 📋 **ご利用後アンケート**：1症候を終えると自動表示（5段階 Likert、匿名）。
- 📱 **レスポンシブ対応**：PC・タブレット・スマートフォン（Android / Chrome）。

> 推奨ブラウザ：**Google Chrome / Microsoft Edge**（Web Speech API 対応）。マイク利用には **localhost または https** が必要です。

---

## 対応症候 / Chief Complaints
| # | 症候（日本語） | Chief Complaint |
|---|---|---|
| 1 | 胸痛 | Chest Pain 🫀 |
| 2 | 呼吸困難 | Respiratory Distress 🫁 |
| 3 | めまい | Dizziness 💫 |
| 4 | 頭痛 | Headache 🤕 |
| 5 | 背部痛 | Back Pain 🧍 |
| 6 | 意識障害 | Altered Consciousness 😴 |
| 7 | 腹痛 | Abdominal Pain 😣 |
| 8 | 悪心・嘔吐 | Nausea & Vomiting 🤮 |
| 9 | 脱力 | Weakness 🪫 |
| 10 | 全身倦怠感 | General Fatigue 😵 |

---

## トレーニングフェーズ（全症候共通） / Training Phases
各症候につき、現場の流れに沿って以下の8フェーズを順に練習します（画面がフェーズごとに切り替わります）。

1. **Initial Contact** — 初期接触
2. **Chief Complaint** — 主訴聴取
3. **Pain Assessment** — 痛みの評価
4. **SAMPLE History** — 病歴聴取
5. **Physical Assessment** — 身体評価
6. **Instructions** — 指示
7. **Reassurance** — 安心づけ
8. **Transport** — 搬送

---

## 「通じた」判定のしくみ / How judgment works
1. ブラウザが発話を文字起こし（`SpeechRecognition`）。
2. 正規化後、(a) **キーワード被覆**（各キーワードを完全一致または **Levenshtein 距離**による近似一致で照合）と
   (b) **文全体の類似度** を計算。
3. 合計スコアがしきい値（やさしい/標準/きびしい）以上なら **「✅ 通じました！」**。語順や軽微な発音差を許容します。

---

## 使用技術 / Technology
| 技術 | 用途 |
|---|---|
| Web Speech API（SpeechRecognition） | リアルタイム音声認識 |
| Web Speech API（SpeechSynthesis） | お手本（手本表現）の音声再生 |
| Levenshtein 距離（公開アルゴリズム, 1965） | 単語のファジーマッチング |
| HTML / CSS / Vanilla JavaScript | フロントエンド（第三者ライブラリ・外部素材なし） |

知的財産・プライバシーの詳細は本リポジトリ下部の「Intellectual property / Privacy」を参照。

---

## 表現選出の言語学的根拠 / Linguistic basis
- 救急隊員（paramedic）の患者向け発話のみで構成した専門コーパスを独自構築：
  **6,185 発話 / 約 68,000 語（68,063 トークン）／語彙 3,300 種**。
  個人情報保護のため**氏名を除去**し、**病院への無線連絡を除外**（患者との会話のみ）。10症候をカバー。
- コーパスの**出現頻度**と**共起分析**を解析。共起の有意性は **相互情報量 MI = log₂(観測共起 / 期待共起)** で評価し、
  **MI ≥ 2.0** の結びつきを重視（AntConc 形式の解析。本リポジトリには AntConc 投入用テキストも同梱）。
- 語彙・文法は**中学校レベルの平易な英語**を基準（基本語リストによる近似。公式の語彙リストへ差し替え可能）。
- 原則 **1文・8語以内** に整理し、**性別限定語（sir / ma'am）を排除**、臨床現場での即時発話を優先。
- 上記の分析を**基盤**に、**救急専門医が現場の流れ（8フェーズ）に沿って表現を作成・調整**しています
  （表現の一部はコーパス由来、一部は臨床的妥当性のために編集・補筆）。

> 注：MI スコア・頻度・全異形などの詳細な選定根拠は、付属の研究データ
> `EMS_Corpus_MI_Shortest_Expressions.xlsx` および研究レポートに収載しています。

---

## 実行 / Running
```bash
python3 serve.py   # → http://localhost:8000 を Chrome / Edge で開く
```
**GitHub Pages** で公開すると HTTPS で配信され、マイク要件を満たします。
公開対象ファイル：`index.html` / `app_data.js` / `README.md`（`serve.py` はローカル起動用）。

---

## アンケートの収集 / Survey (researchers)
回答は既定でブラウザに保存され、CSV 書き出しが可能です。公開環境で集約する場合は、`index.html` 内の
`SURVEY_ENDPOINT` に送信先 URL（Formspree / Google Apps Script など）を設定してください。
項目：英語圏居住経験（あり/なし）、職種（任意）、5段階 Likert 7問、自由記述。

---

## Intellectual property / 知的財産（技術開示・法的助言ではありません）
本アプリは **純粋な HTML/CSS/JavaScript** で、**第三者ライブラリ・SDK・フォント・画像・音声を一切同梱していません**。
音声認識・音声合成は利用者のブラウザが提供する **標準の Web Speech API（W3C 仕様）** を呼び出すのみで、
専有・特許のアルゴリズムやライセンス素材は使用していません。アイコンは Unicode 絵文字、書体はシステムフォントです。
（Chrome の音声認識は音声を Google のクラウドへ送信します。組織のデータ規程はブラウザ提供元の規約をご確認ください。）
コーパス構築・解析のツール：Python（PSF）、openpyxl（MIT）、python-docx（MIT）、AntConc（Anthony, 参照ツール）。

## Privacy / プライバシー
音声データはアプリに保存しません（認識・合成はブラウザが処理）。進捗・アンケート回答はブラウザの
`localStorage` に保存され、エンドポイントを設定した場合のみ送信されます。

## How to cite
> Nakao S. *EMS English Trainer: a speech-recognition web application for prehospital English
> communication training.* Department of Traumatology and Acute Critical Medicine, The University of
> Osaka. Developed with Anthropic's Claude Code. Supported by a grant from The Mitsubishi Foundation. 2026.

## License（推奨）
- コード：MIT License を推奨（公開前に `LICENSE` を追加）。
- コーパス／表現データ：CC BY 4.0 等、著者の判断で。

## Acknowledgments
Developed with **Anthropic's Claude Code**. Corpus analysis informed by **AntConc**
(Laurence Anthony). Supported by a grant from **The Mitsubishi Foundation**.
