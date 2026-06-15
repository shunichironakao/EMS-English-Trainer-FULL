# EMS English Trainer 🚑
**救急英語トレーナー — 音声認識で「通じる」を体感する Web アプリ**

A browser-based, speech-recognition training application that helps emergency medical
service (EMS) providers practice speaking the short English expressions needed to obtain
essential prehospital information (patient information, symptoms, situation, and physical
assessment) from English-speaking patients. Successful speech recognition is treated as
"the message got through" (*tsūjita*), so learners experience that **minor pronunciation
differences still communicate**.

---

## Author / 作成者
**Shunichiro Nakao, MD, MSc, PhD** — Emergency physician (救急医)
Department of Traumatology and Acute Critical Medicine
The University of Osaka

This application and its underlying corpus were developed by Dr. Shunichiro Nakao with
the assistance of **Anthropic's Claude Code**.

## Funding / 助成
> **This project was supported by a grant from The Mitsubishi Foundation.**

---

## 1. Overview / 概要
EMS English Trainer presents short, evidence-based English expressions selected from a
purpose-built corpus of paramedic speech. For each item the learner is shown what
information to obtain (in Japanese), presses 🎤, and speaks the English. The app uses the
browser's speech recognition to transcribe the utterance and judges success with a
**tolerant keyword + fuzzy-match** algorithm: if the key content words are conveyed, it is
marked **✅ 通じました！(Got through!)** even when word order or pronunciation differs.

Key features:
- 🎤 **Speech recognition** of the learner's spoken English (browser Web Speech API)
- ✅ **"Got-through" judgment = successful recognition**, tolerant of accent/pronunciation
- 🔊 **Model pronunciation playback** (text-to-speech)
- ⏱ **Manual-stop + auto-extend recording** (up to 20 s) so multi-sentence answers are not cut off
- 🎚 Adjustable judgment strictness, recognition locale (US / UK / AU), hide-English challenge mode
- 📈 Progress tracking (saved locally in the browser)
- 📝 Optional in-app post-practice survey (5-point Likert)

---

## 2. The Corpus / コーパス

The training expressions are drawn from a specialized corpus of **emergency-scene speech by
paramedics addressing patients**. It was built directly from the original source scripts and
cleaned so that it contains **only paramedic utterances** — personal names are removed,
hospital/medical-control radio communication is excluded, and only patient-facing
conversation is retained.

### Scale (語数を含む規模)
| Item | Value |
|---|---|
| Total utterances / 総発話数 | **6,185** |
| Total running words (tokens) / 総語数 | **≈ 68,000** (68,063) |
| Vocabulary (types) / 語彙数 | **3,300** |
| Source A — collected EMS expressions / 収集データ | 3,228 utterances / **38,761 words** |
| Source B — symptom scenarios / 症候別シナリオ | 2,957 utterances / **29,371 words** |
| Significant collocations (MI/Effect ≥ 2) / 有意共起 | **2,025 pairs** |

### Composition by symptom (10 症候)
| File | Symptom (症候) | Utterances | Words |
|---|---|---:|---:|
| 01_Chest_Pain | 胸痛 Chest pain | 617 | 6,958 |
| 02_Respiratory_Distress | 呼吸困難 Respiratory distress | 882 | 9,780 |
| 03_Dizziness | めまい Dizziness | 517 | 6,002 |
| 04_Headache | 頭痛 Headache | 589 | 6,632 |
| 05_Back_Pain | 背部痛 Back pain | 436 | 4,362 |
| 06_Altered_Consciousness | 意識障害 Altered consciousness | 618 | 8,030 |
| 07_Abdominal_Pain | 腹痛 Abdominal pain | 425 | 3,927 |
| 08_Nausea_Vomiting | 悪心・嘔吐 Nausea / vomiting | 836 | 8,976 |
| 09_Weakness | 脱力 Weakness | 640 | 7,433 |
| 10_General_Fatigue | 全身倦怠感 General fatigue | 625 | 5,963 |

### Characteristics (特徴)
- **Speaker:** paramedic (救急隊員) utterances only; patient/family-facing speech.
- **Two data streams:** (A) collected EMS expressions and (B) AI-assisted symptom scenarios,
  kept separable by source.
- **Privacy-cleaned:** all personal names removed (denylist + context-based removal); residual
  proper names = 0. Hospital radio reports and crew-only instructions excluded.
- **Coverage:** 10 representative chief-complaint categories for hospital selection.

### Expression-selection methodology
Expressions were selected as the *shortest forms that are attested and natural*, using:
1. **Frequency** of attested variants (the most frequent form is treated as the natural one).
2. **Collocation strength** measured by **Mutual Information (MI), an effect-size measure
   (AntConc's "Effect" statistic), with threshold MI ≥ 2** (window ±4, co-occurrence ≥ 3,
   each word frequency ≥ 3). 2,025 significant collocations were identified.
3. **Junior-high-school-level English grammar/vocabulary** as a comprehensibility criterion
   (approximated by a core word list; can be replaced with an official list).

> MI (Effect) = log₂( O × N / (f_x × f_y × S) ), where O = window co-occurrence count,
> N = total tokens, f = word frequencies, S = window span (8 for ±4).

---

## 3. How the "got-through" judgment works
1. The browser transcribes the spoken English (`SpeechRecognition`).
2. The transcript is normalized and compared to the target expression by
   (a) **keyword coverage** (each key content word matched exactly or via fuzzy/Levenshtein
   similarity ≥ 0.78) and (b) **whole-sentence similarity** to accepted corpus variants.
3. If the combined score ≥ the chosen strictness threshold (0.5 / 0.6 / 0.8), the answer is
   judged **通じた (got through)**. This deliberately tolerates minor pronunciation and
   word-order differences, reflecting real-world intelligibility.

---

## 4. Technology, dependencies, licensing & intellectual property

This section is provided for transparency in research/academic use. *(It is technical
disclosure, not legal advice.)*

### Runtime (what the app uses in the browser)
The application is **pure HTML/CSS/JavaScript** with **no third-party libraries, frameworks,
SDKs, fonts, images, or audio files bundled**. It relies only on **open, standardized Web
platform APIs** provided by the user's browser:

| Function | API used | Provider | Notes |
|---|---|---|---|
| Speech recognition (音声認識) | **Web Speech API** `SpeechRecognition` (`webkitSpeechRecognition`) — W3C specification | The user's **browser** | In Google Chrome, recognition is performed by Google's cloud speech service; audio is sent to the browser vendor, **not** to this app. |
| Speech synthesis / voice output (音声出力) | **Web Speech API** `SpeechSynthesis` — W3C specification | The user's **browser / OS** | Uses the operating-system / browser TTS voices. |
| Progress storage | **Web Storage API** (`localStorage`) | The user's browser | Data stays on the user's device. |
| Icons | **Unicode emoji** (code points only) | Rendered by the OS | No image assets are bundled or copied. |
| Typography | System fonts | The user's OS | No web fonts are downloaded. |

**Intellectual-property statement.** The application does **not** implement, bundle, or
redistribute any proprietary or patented speech-recognition / speech-synthesis algorithm,
nor any licensed dataset, font, icon, sound, or image. Speech recognition and synthesis are
carried out entirely by the end user's own web browser through standardized, openly published
Web APIs. To the best of the author's knowledge, **no patent license is required of this
application or its author** for calling these standard browser APIs, and **no third-party
free/stock asset is embedded** in the app. The only external functionality is the browser's
native speech service, whose use is governed by the **browser vendor's own terms of service
and privacy policy** (a dependency/privacy disclosure, not a licensing obligation of this app).

### Build / analysis pipeline (not shipped in the app)
The corpus and analysis deliverables were produced with open-source, permissively licensed
tools: **Python** (PSF License), **openpyxl** (MIT), **python-docx** (MIT). Concordance
concepts follow **AntConc** (Laurence Anthony; used as a reference tool, not redistributed).

### Privacy
- The app stores no audio. Recognition/synthesis are handled by the browser.
- Progress and (if submitted) survey responses are stored in the browser's `localStorage`;
  survey responses are additionally sent to a researcher-configured endpoint only if one is set.
- Note that Chrome's speech recognition transmits audio to Google for processing; institutions
  with data-handling requirements should review the browser vendor's policy.

---

## 5. Requirements & running

- **Browser:** Google Chrome or Microsoft Edge (Web Speech API support required).
- **Context:** must be served over **`localhost` or HTTPS** (microphone access requirement).
- **Microphone** permission must be granted.

### Run locally
```bash
python3 serve.py     # then open http://localhost:8000 in Chrome/Edge
```
### Publish on GitHub Pages
Push the contents of this folder to a repository and enable **GitHub Pages** (HTTPS is
provided automatically, satisfying the microphone requirement).

Files: `index.html` (app), `app_data.js` (expression data), `serve.py` (local server), `README.md`.

---

## 6. Post-practice survey / アンケート

An optional 5-point Likert survey appears automatically after one practice round
(after several expressions are completed) and can be reopened anytime via the **📝 アンケート**
button. Designed to be short and conference-ready. Items:

**Background:** experience living in an English-speaking country (yes / no); role (optional).
**Likert (1 = strongly disagree … 5 = strongly agree):**
1. The app was easy to use. / 操作は簡単だった
2. The recognition (“got-through”) judgment was reasonable. / 認識判定は妥当だった
3. I experienced getting my message across despite minor pronunciation differences. / 多少の発音差でも通じる体験ができた
4. I learned English expressions needed at emergency scenes. / 救急現場で必要な表現を学べた
5. This app would be useful for actual EMS practice. / 実際の救急活動に役立つと思う
6. My confidence in handling patients in English improved. / 英語対応の自信が高まった
7. I would keep using it / recommend it. / 今後も使いたい・勧めたい

Plus an optional free-text comment.

### Collecting responses (researcher)
By default responses are saved in the browser and can be exported to CSV (📥 button in the
survey). To collect responses centrally from public users, set `SURVEY_ENDPOINT` near the top
of the `<script>` in `index.html` to a form endpoint URL:
- **Formspree** — create a form, paste its endpoint URL.
- **Google Apps Script Web App** — deploy a script that appends `POST`ed JSON to a Google Sheet.

Submitted fields: timestamp, app version, English-residence experience, role, Q1–Q7, comment,
number of expressions completed.

---

## 7. How to cite

> Nakao S. *EMS English Trainer: a speech-recognition web application for prehospital English
> communication training.* Developed with Anthropic's Claude Code. Supported by a grant from
> The Mitsubishi Foundation. 2026.

---

## 8. License (suggested)
- **Code:** MIT License (recommended) — see `LICENSE`.
- **Corpus / expression data:** the author may release under CC BY 4.0 or retain rights;
  confirm before publication.

*(Choose and add a LICENSE file before public release.)*

## Acknowledgments
Developed with **Anthropic's Claude Code**. Corpus analysis informed by **AntConc**
(Laurence Anthony). Supported by a grant from **The Mitsubishi Foundation**.
