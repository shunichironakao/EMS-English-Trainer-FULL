// 自動生成: 救急英語 10症候別×8フェーズ 学習データ (動画台本の救急隊員セリフ由来)
const PHASES = [{"n": 1, "name": "初期接触", "en": "Initial Contact"}, {"n": 2, "name": "主訴聴取", "en": "Chief Complaint"}, {"n": 3, "name": "痛みの評価", "en": "Pain Assessment"}, {"n": 4, "name": "病歴聴取", "en": "SAMPLE History"}, {"n": 5, "name": "身体評価", "en": "Physical Assessment"}, {"n": 6, "name": "指示", "en": "Instructions"}, {"n": 7, "name": "安心づけ", "en": "Reassurance"}, {"n": 8, "name": "搬送", "en": "Transport"}];
const EXPRESSIONS = [
 {
  "id": "01_Chest_Pain__1",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 1,
  "phase": 1,
  "tag": "挨拶",
  "adopted": false,
  "prompt_ja": "こんにちは、救急隊員です。",
  "target": "Hello, I'm a paramedic.",
  "acceptable": [
   "Hello, I'm a paramedic."
  ],
  "keywords": [
   "hello",
   "paramedic"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__2",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "どうしましたか？",
  "target": "What happened?",
  "acceptable": [
   "What happened?"
  ],
  "keywords": [
   "what",
   "happened"
  ],
  "freq": 13
 },
 {
  "id": "01_Chest_Pain__3",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "どのくらい前ですか？",
  "target": "How long ago?",
  "acceptable": [
   "How long ago?"
  ],
  "keywords": [
   "how",
   "long",
   "ago"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__4",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 4,
  "phase": 3,
  "tag": "部位",
  "adopted": true,
  "prompt_ja": "痛みはどこですか？",
  "target": "Where is the pain?",
  "acceptable": [
   "Where is the pain?"
  ],
  "keywords": [
   "where",
   "pain"
  ],
  "freq": 4
 },
 {
  "id": "01_Chest_Pain__5",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 5,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "痛みはどのくらい？(0〜10)",
  "target": "How bad is the pain, zero to ten?",
  "acceptable": [
   "How bad is the pain, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "pain",
   "zero",
   "ten"
  ],
  "freq": 3
 },
 {
  "id": "01_Chest_Pain__6",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 6,
  "phase": 3,
  "tag": "性状",
  "adopted": true,
  "prompt_ja": "鋭い・鈍い・圧迫感・灼熱感、どれですか？",
  "target": "Is it sharp, dull, pressure, or burning?",
  "acceptable": [
   "Is it sharp, dull, pressure, or burning?"
  ],
  "keywords": [
   "sharp",
   "dull",
   "pressure",
   "burning"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__7",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 7,
  "phase": 3,
  "tag": "放散",
  "adopted": true,
  "prompt_ja": "どこかに広がりますか？",
  "target": "Does it go anywhere?",
  "acceptable": [
   "Does it go anywhere?"
  ],
  "keywords": [
   "anywhere"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__8",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 8,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気や息切れはありますか？",
  "target": "Any nausea or shortness of breath?",
  "acceptable": [
   "Any nausea or shortness of breath?"
  ],
  "keywords": [
   "nausea",
   "shortness",
   "breath"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__9",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 9,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__10",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 10,
  "phase": 4,
  "tag": "既往エピソード",
  "adopted": true,
  "prompt_ja": "以前にもありましたか？",
  "target": "Have you had this before?",
  "acceptable": [
   "Have you had this before?"
  ],
  "keywords": [
   "before"
  ],
  "freq": 4
 },
 {
  "id": "01_Chest_Pain__11",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 11,
  "phase": 4,
  "tag": "心疾患既往",
  "adopted": true,
  "prompt_ja": "心臓の問題はありますか？",
  "target": "Do you have any heart problems?",
  "acceptable": [
   "Do you have any heart problems?"
  ],
  "keywords": [
   "heart",
   "problems"
  ],
  "freq": 4
 },
 {
  "id": "01_Chest_Pain__12",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 12,
  "phase": 4,
  "tag": "抗凝固薬",
  "adopted": true,
  "prompt_ja": "抗凝固薬は飲んでいますか？",
  "target": "Any blood thinners?",
  "acceptable": [
   "Any blood thinners?"
  ],
  "keywords": [
   "blood",
   "thinners"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__13",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 13,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "01_Chest_Pain__14",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 14,
  "phase": 4,
  "tag": "内服薬",
  "adopted": true,
  "prompt_ja": "どんな薬を飲んでいますか？",
  "target": "What medications do you take?",
  "acceptable": [
   "What medications do you take?"
  ],
  "keywords": [
   "what",
   "medications",
   "take"
  ],
  "freq": 23
 },
 {
  "id": "01_Chest_Pain__15",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 15,
  "phase": 4,
  "tag": "最終飲食",
  "adopted": true,
  "prompt_ja": "最後に食べたのはいつ？",
  "target": "When did you last eat?",
  "acceptable": [
   "When did you last eat?"
  ],
  "keywords": [
   "when",
   "last",
   "eat"
  ],
  "freq": 21
 },
 {
  "id": "01_Chest_Pain__16",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 16,
  "phase": 5,
  "tag": "処置(EKG)",
  "adopted": true,
  "prompt_ja": "心電図で心臓を確認します。",
  "target": "Let me check your heart with an EKG.",
  "acceptable": [
   "Let me check your heart with an EKG."
  ],
  "keywords": [
   "let",
   "check",
   "heart",
   "with",
   "ekg"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__17",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 17,
  "phase": 6,
  "tag": "処置(酸素)",
  "adopted": false,
  "prompt_ja": "酸素を投与します。",
  "target": "I'm going to give you some oxygen.",
  "acceptable": [
   "I'm going to give you some oxygen."
  ],
  "keywords": [
   "going",
   "give",
   "oxygen"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__18",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 18,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "01_Chest_Pain__19",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 19,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__1",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。息がしづらいですか？",
  "target": "Hi, I'm a paramedic. Are you having trouble breathing?",
  "acceptable": [
   "Hi, I'm a paramedic. Are you having trouble breathing?"
  ],
  "keywords": [
   "paramedic",
   "having",
   "trouble",
   "breathing"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__2",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "02_Respiratory_Distress__3",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "いつから始まりましたか？",
  "target": "How long ago did it start?",
  "acceptable": [
   "How long ago did it start?"
  ],
  "keywords": [
   "how",
   "long",
   "ago",
   "start"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__4",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 4,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "息苦しさはどのくらい？(0〜10)",
  "target": "How bad is your breathing, zero to ten?",
  "acceptable": [
   "How bad is your breathing, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "breathing",
   "zero",
   "ten"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__5",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 5,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "胸の痛みは？",
  "target": "Any chest pain?",
  "acceptable": [
   "Any chest pain?"
  ],
  "keywords": [
   "chest",
   "pain"
  ],
  "freq": 6
 },
 {
  "id": "02_Respiratory_Distress__6",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 6,
  "phase": 3,
  "tag": "処置",
  "adopted": true,
  "prompt_ja": "呼吸の音を聴きます。",
  "target": "Let me listen to your breathing.",
  "acceptable": [
   "Let me listen to your breathing."
  ],
  "keywords": [
   "let",
   "listen",
   "breathing"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__7",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 7,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__8",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 8,
  "phase": 4,
  "tag": "処置/既往",
  "adopted": true,
  "prompt_ja": "吸入器は使いましたか？",
  "target": "Did you use your inhaler?",
  "acceptable": [
   "Did you use your inhaler?"
  ],
  "keywords": [
   "use",
   "inhaler"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__9",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 9,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "02_Respiratory_Distress__10",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 10,
  "phase": 4,
  "tag": "内服薬",
  "adopted": true,
  "prompt_ja": "どんな薬を飲んでいますか？",
  "target": "What medications do you take?",
  "acceptable": [
   "What medications do you take?"
  ],
  "keywords": [
   "what",
   "medications",
   "take"
  ],
  "freq": 23
 },
 {
  "id": "02_Respiratory_Distress__11",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 11,
  "phase": 5,
  "tag": "身体評価/指示",
  "adopted": true,
  "prompt_ja": "ゆっくり深呼吸してください。",
  "target": "Try to take slow, deep breaths.",
  "acceptable": [
   "Try to take slow, deep breaths."
  ],
  "keywords": [
   "try",
   "take",
   "slow",
   "deep",
   "breaths"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__12",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 12,
  "phase": 6,
  "tag": "処置(酸素)",
  "adopted": false,
  "prompt_ja": "酸素を投与します。",
  "target": "I'm going to give you some oxygen.",
  "acceptable": [
   "I'm going to give you some oxygen."
  ],
  "keywords": [
   "going",
   "give",
   "oxygen"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__13",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 13,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "02_Respiratory_Distress__14",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 14,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "03_Dizziness__1",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 1,
  "phase": 1,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。今日はどうされましたか？",
  "target": "Hello, I'm a paramedic. What's going on today?",
  "acceptable": [
   "Hello, I'm a paramedic. What's going on today?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "what",
   "going",
   "today"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__2",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "03_Dizziness__3",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "めまいはいつ始まりましたか？",
  "target": "When did this dizziness start?",
  "acceptable": [
   "When did this dizziness start?"
  ],
  "keywords": [
   "when",
   "dizziness",
   "start"
  ],
  "freq": 8
 },
 {
  "id": "03_Dizziness__4",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 4,
  "phase": 3,
  "tag": "性状",
  "adopted": true,
  "prompt_ja": "周りが回る感じは？",
  "target": "Do you feel the room spinning?",
  "acceptable": [
   "Do you feel the room spinning?"
  ],
  "keywords": [
   "feel",
   "room",
   "spinning"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__5",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 5,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "めまいはどのくらい？(0〜10)",
  "target": "How bad is the dizziness, zero to ten?",
  "acceptable": [
   "How bad is the dizziness, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "dizziness",
   "zero",
   "ten"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__6",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 6,
  "phase": 3,
  "tag": "状況/外傷",
  "adopted": true,
  "prompt_ja": "今日、転んだり頭を打ちましたか？",
  "target": "Did you fall or hit your head today?",
  "acceptable": [
   "Did you fall or hit your head today?"
  ],
  "keywords": [
   "fall",
   "hit",
   "head",
   "today"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__7",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 7,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気や嘔吐は？",
  "target": "Any nausea or vomiting?",
  "acceptable": [
   "Any nausea or vomiting?"
  ],
  "keywords": [
   "nausea",
   "vomiting"
  ],
  "freq": 27
 },
 {
  "id": "03_Dizziness__8",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 8,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__9",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 9,
  "phase": 4,
  "tag": "内服薬",
  "adopted": true,
  "prompt_ja": "良いですね、正常です。お薬は飲んでいますか？",
  "target": "Good — that looks normal. Do you take any medications?",
  "acceptable": [
   "Good — that looks normal. Do you take any medications?"
  ],
  "keywords": [
   "good",
   "looks",
   "normal",
   "take",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__10",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 10,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "03_Dizziness__11",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 11,
  "phase": 5,
  "tag": "身体評価(脳卒中)",
  "adopted": true,
  "prompt_ja": "笑ってみてください。",
  "target": "Can you give me a big smile?",
  "acceptable": [
   "Can you give me a big smile?"
  ],
  "keywords": [
   "give",
   "big",
   "smile"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__12",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 12,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "私の手を握って。両腕を上げて。",
  "target": "Squeeze my hands. Now raise both arms.",
  "acceptable": [
   "Squeeze my hands. Now raise both arms."
  ],
  "keywords": [
   "squeeze",
   "hands",
   "now",
   "raise",
   "both",
   "arms"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__13",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 13,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "03_Dizziness__14",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 14,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "03_Dizziness__15",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 15,
  "phase": 8,
  "tag": "処置(EKG)/搬送",
  "adopted": true,
  "prompt_ja": "心臓を確認し、病院へ搬送します。",
  "target": "We'll check your heart. Then take you to the hospital.",
  "acceptable": [
   "We'll check your heart. Then take you to the hospital."
  ],
  "keywords": [
   "check",
   "heart",
   "then",
   "take",
   "hospital"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__1",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 1,
  "phase": 1,
  "tag": "挨拶",
  "adopted": false,
  "prompt_ja": "救急隊員です。",
  "target": "Hi, I'm a paramedic.",
  "acceptable": [
   "Hi, I'm a paramedic."
  ],
  "keywords": [
   "paramedic"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__2",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "どうしましたか？",
  "target": "What happened?",
  "acceptable": [
   "What happened?"
  ],
  "keywords": [
   "what",
   "happened"
  ],
  "freq": 13
 },
 {
  "id": "04_Headache__3",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "いつ起きましたか？",
  "target": "When did this happen?",
  "acceptable": [
   "When did this happen?"
  ],
  "keywords": [
   "when",
   "happen"
  ],
  "freq": 4
 },
 {
  "id": "04_Headache__4",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 4,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "頭痛はどのくらい？(0〜10)",
  "target": "How bad is the headache, zero to ten?",
  "acceptable": [
   "How bad is the headache, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "headache",
   "zero",
   "ten"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__5",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 5,
  "phase": 3,
  "tag": "随伴/外傷",
  "adopted": true,
  "prompt_ja": "その後気を失いましたか？",
  "target": "Did you pass out afterward?",
  "acceptable": [
   "Did you pass out afterward?"
  ],
  "keywords": [
   "pass",
   "out",
   "afterward"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__6",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 6,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気・嘔吐・見え方の変化は？",
  "target": "Any nausea, vomiting, or vision changes?",
  "acceptable": [
   "Any nausea, vomiting, or vision changes?"
  ],
  "keywords": [
   "nausea",
   "vomiting",
   "vision",
   "changes"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__7",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 7,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__8",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 8,
  "phase": 4,
  "tag": "抗凝固薬",
  "adopted": true,
  "prompt_ja": "抗凝固薬は飲んでいますか？",
  "target": "Do you take any blood thinners?",
  "acceptable": [
   "Do you take any blood thinners?"
  ],
  "keywords": [
   "take",
   "blood",
   "thinners"
  ],
  "freq": 5
 },
 {
  "id": "04_Headache__9",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 9,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "04_Headache__10",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 10,
  "phase": 5,
  "tag": "身体評価(脳卒中)",
  "adopted": true,
  "prompt_ja": "笑ってみてください。",
  "target": "Can you give me a big smile?",
  "acceptable": [
   "Can you give me a big smile?"
  ],
  "keywords": [
   "give",
   "big",
   "smile"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__11",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 11,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "両腕を上げてください。",
  "target": "Raise both your arms.",
  "acceptable": [
   "Raise both your arms."
  ],
  "keywords": [
   "raise",
   "both",
   "arms"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__12",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 12,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "04_Headache__13",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 13,
  "phase": 7,
  "tag": "処置/配慮",
  "adopted": true,
  "prompt_ja": "なるべく揺れないように搬送します。",
  "target": "We'll give you a smooth, gentle ride.",
  "acceptable": [
   "We'll give you a smooth, gentle ride."
  ],
  "keywords": [
   "give",
   "smooth",
   "gentle",
   "ride"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__14",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 14,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "05_Back_Pain__1",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。どうしましたか？",
  "target": "Hello, I'm a paramedic. What happened?",
  "acceptable": [
   "Hello, I'm a paramedic. What happened?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "what",
   "happened"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__2",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "05_Back_Pain__3",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "背中の痛みはいつ始まりましたか？",
  "target": "When did your back pain start?",
  "acceptable": [
   "When did your back pain start?"
  ],
  "keywords": [
   "when",
   "back",
   "pain",
   "start"
  ],
  "freq": 5
 },
 {
  "id": "05_Back_Pain__4",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 4,
  "phase": 3,
  "tag": "部位",
  "adopted": true,
  "prompt_ja": "痛むところを指さしてください。",
  "target": "Can you point to where it hurts?",
  "acceptable": [
   "Can you point to where it hurts?"
  ],
  "keywords": [
   "point",
   "where",
   "hurts"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__5",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 5,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "痛みはどのくらい？(0〜10)",
  "target": "How bad is the pain, zero to ten?",
  "acceptable": [
   "How bad is the pain, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "pain",
   "zero",
   "ten"
  ],
  "freq": 3
 },
 {
  "id": "05_Back_Pain__6",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 6,
  "phase": 3,
  "tag": "放散",
  "adopted": true,
  "prompt_ja": "脚に広がりますか？",
  "target": "Does it spread to your legs?",
  "acceptable": [
   "Does it spread to your legs?"
  ],
  "keywords": [
   "spread",
   "legs"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__7",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 7,
  "phase": 3,
  "tag": "随伴/神経",
  "adopted": true,
  "prompt_ja": "脚のしびれや力の入りにくさは？",
  "target": "Any numbness or weakness in your legs?",
  "acceptable": [
   "Any numbness or weakness in your legs?"
  ],
  "keywords": [
   "numbness",
   "weakness",
   "legs"
  ],
  "freq": 1
 },
 {
  "id": "05_Back_Pain__8",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 8,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "排尿・排便の障害は？",
  "target": "Any bladder or bowel problems?",
  "acceptable": [
   "Any bladder or bowel problems?"
  ],
  "keywords": [
   "bladder",
   "bowel",
   "problems"
  ],
  "freq": 1
 },
 {
  "id": "05_Back_Pain__9",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 9,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__10",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 10,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__11",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 11,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "押すと痛いですか？",
  "target": "Does it hurt when I press here?",
  "acceptable": [
   "Does it hurt when I press here?"
  ],
  "keywords": [
   "hurt",
   "when",
   "press",
   "here"
  ],
  "freq": 1
 },
 {
  "id": "05_Back_Pain__12",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 12,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "05_Back_Pain__13",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 13,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "05_Back_Pain__14",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 14,
  "phase": 8,
  "tag": "処置/搬送",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We'll take you to the hospital.",
  "acceptable": [
   "We'll take you to the hospital."
  ],
  "keywords": [
   "take",
   "hospital"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__1",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 1,
  "phase": 1,
  "tag": "意識",
  "adopted": true,
  "prompt_ja": "聞こえますか？目を開けてください。",
  "target": "Can you hear me? Open your eyes.",
  "acceptable": [
   "Can you hear me? Open your eyes."
  ],
  "keywords": [
   "hear",
   "open",
   "eyes"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__2",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 2,
  "phase": 1,
  "tag": "意識/baseline",
  "adopted": true,
  "prompt_ja": "普段ははっきり話せますか？",
  "target": "Is she usually alert and talking?",
  "acceptable": [
   "Is she usually alert and talking?"
  ],
  "keywords": [
   "she",
   "usually",
   "alert",
   "talking"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__3",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 3,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "06_Altered_Consciousness__4",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 4,
  "phase": 3,
  "tag": "状況",
  "adopted": true,
  "prompt_ja": "今日はどうされましたか？",
  "target": "What happened today?",
  "acceptable": [
   "What happened today?"
  ],
  "keywords": [
   "what",
   "happened",
   "today"
  ],
  "freq": 25
 },
 {
  "id": "06_Altered_Consciousness__5",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 5,
  "phase": 3,
  "tag": "状況/外傷",
  "adopted": true,
  "prompt_ja": "最近の転倒やけがは？",
  "target": "Any recent falls or injuries?",
  "acceptable": [
   "Any recent falls or injuries?"
  ],
  "keywords": [
   "recent",
   "falls",
   "injuries"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__6",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 6,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "Does she have any medical problems?",
  "acceptable": [
   "Does she have any medical problems?"
  ],
  "keywords": [
   "she",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__7",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 7,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーは？どんな薬を飲んでいますか？",
  "target": "Any allergies? What medications does she take?",
  "acceptable": [
   "Any allergies? What medications does she take?"
  ],
  "keywords": [
   "allergies",
   "what",
   "medications",
   "she",
   "take"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__8",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 8,
  "phase": 5,
  "tag": "処置(酸素/血糖)",
  "adopted": false,
  "prompt_ja": "酸素と血糖を確認します。",
  "target": "We'll give oxygen and check blood sugar.",
  "acceptable": [
   "We'll give oxygen and check blood sugar."
  ],
  "keywords": [
   "give",
   "oxygen",
   "check",
   "blood",
   "sugar"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__9",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 9,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "06_Altered_Consciousness__10",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 10,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "06_Altered_Consciousness__11",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 11,
  "phase": 8,
  "tag": "処置(EKG)/搬送",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We'll take her to the hospital.",
  "acceptable": [
   "We'll take her to the hospital."
  ],
  "keywords": [
   "take",
   "her",
   "hospital"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__1",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。今日はどうされましたか？",
  "target": "Hi, I'm a paramedic. What's going on today?",
  "acceptable": [
   "Hi, I'm a paramedic. What's going on today?"
  ],
  "keywords": [
   "paramedic",
   "what",
   "going",
   "today"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__2",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "07_Abdominal_Pain__3",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "腹痛はいつ始まりましたか？",
  "target": "When did your stomach pain start?",
  "acceptable": [
   "When did your stomach pain start?"
  ],
  "keywords": [
   "when",
   "stomach",
   "pain",
   "start"
  ],
  "freq": 9
 },
 {
  "id": "07_Abdominal_Pain__4",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 4,
  "phase": 3,
  "tag": "部位",
  "adopted": true,
  "prompt_ja": "痛むところを指さしてください。",
  "target": "Can you point to where it hurts?",
  "acceptable": [
   "Can you point to where it hurts?"
  ],
  "keywords": [
   "point",
   "where",
   "hurts"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__5",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 5,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "痛みはどのくらい？(0〜10)",
  "target": "How bad is the pain, zero to ten?",
  "acceptable": [
   "How bad is the pain, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "pain",
   "zero",
   "ten"
  ],
  "freq": 3
 },
 {
  "id": "07_Abdominal_Pain__6",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 6,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気や嘔吐は？",
  "target": "Any nausea or vomiting?",
  "acceptable": [
   "Any nausea or vomiting?"
  ],
  "keywords": [
   "nausea",
   "vomiting"
  ],
  "freq": 27
 },
 {
  "id": "07_Abdominal_Pain__7",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 7,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "吐物や便に血は？",
  "target": "Any blood in your vomit or stool?",
  "acceptable": [
   "Any blood in your vomit or stool?"
  ],
  "keywords": [
   "blood",
   "vomit",
   "stool"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__8",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 8,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "熱はありますか？",
  "target": "Any fever?",
  "acceptable": [
   "Any fever?"
  ],
  "keywords": [
   "fever"
  ],
  "freq": 16
 },
 {
  "id": "07_Abdominal_Pain__9",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 9,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__10",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 10,
  "phase": 4,
  "tag": "最終飲食",
  "adopted": true,
  "prompt_ja": "最後に飲食したのはいつ？",
  "target": "When did you last eat or drink?",
  "acceptable": [
   "When did you last eat or drink?"
  ],
  "keywords": [
   "when",
   "last",
   "eat",
   "drink"
  ],
  "freq": 7
 },
 {
  "id": "07_Abdominal_Pain__11",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 11,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__12",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 12,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "腹部を触診する",
  "target": "I'm going to gently feel your stomach.",
  "acceptable": [
   "I'm going to gently feel your stomach."
  ],
  "keywords": [
   "going",
   "gently",
   "feel",
   "stomach"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__13",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 13,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "07_Abdominal_Pain__14",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 14,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "07_Abdominal_Pain__15",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 15,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "08_Nausea_Vomiting__1",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。具合はいかがですか？",
  "target": "Hello, I'm a paramedic. How are you feeling?",
  "acceptable": [
   "Hello, I'm a paramedic. How are you feeling?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "how",
   "feeling"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__2",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "08_Nausea_Vomiting__3",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "吐き気はいつ始まりましたか？",
  "target": "When did your nausea start?",
  "acceptable": [
   "When did your nausea start?"
  ],
  "keywords": [
   "when",
   "nausea",
   "start"
  ],
  "freq": 5
 },
 {
  "id": "08_Nausea_Vomiting__4",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 4,
  "phase": 3,
  "tag": "随伴/評価",
  "adopted": true,
  "prompt_ja": "何回吐きましたか？",
  "target": "How many times have you vomited?",
  "acceptable": [
   "How many times have you vomited?"
  ],
  "keywords": [
   "how",
   "many",
   "times",
   "vomited"
  ],
  "freq": 12
 },
 {
  "id": "08_Nausea_Vomiting__5",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 5,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "吐物に血は混じっていましたか？",
  "target": "Any blood in your vomit?",
  "acceptable": [
   "Any blood in your vomit?"
  ],
  "keywords": [
   "blood",
   "vomit"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__6",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 6,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "腹痛や胸の痛みは？",
  "target": "Any stomach pain or chest pain?",
  "acceptable": [
   "Any stomach pain or chest pain?"
  ],
  "keywords": [
   "stomach",
   "pain",
   "chest",
   "pain"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__7",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 7,
  "phase": 3,
  "tag": "増悪寛解",
  "adopted": true,
  "prompt_ja": "楽になる・悪化することはありますか？",
  "target": "Does anything make the nausea better or worse?",
  "acceptable": [
   "Does anything make the nausea better or worse?"
  ],
  "keywords": [
   "anything",
   "make",
   "nausea",
   "better",
   "worse"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__8",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 8,
  "phase": 3,
  "tag": "状況/外傷",
  "adopted": true,
  "prompt_ja": "頭を打ちましたか？",
  "target": "Did you hit your head?",
  "acceptable": [
   "Did you hit your head?"
  ],
  "keywords": [
   "hit",
   "head"
  ],
  "freq": 4
 },
 {
  "id": "08_Nausea_Vomiting__9",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 9,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__10",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 10,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__11",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 11,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "08_Nausea_Vomiting__12",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 12,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "08_Nausea_Vomiting__13",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 13,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "これから病院へ搬送します。",
  "target": "We'll take you to the hospital now.",
  "acceptable": [
   "We'll take you to the hospital now."
  ],
  "keywords": [
   "take",
   "hospital",
   "now"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__1",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 1,
  "phase": 1,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。どうされましたか？",
  "target": "Hello, I'm a paramedic. What's going on?",
  "acceptable": [
   "Hello, I'm a paramedic. What's going on?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "what",
   "going"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__2",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "09_Weakness__3",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "脱力はいつ始まりましたか？",
  "target": "When did this weakness start?",
  "acceptable": [
   "When did this weakness start?"
  ],
  "keywords": [
   "when",
   "weakness",
   "start"
  ],
  "freq": 6
 },
 {
  "id": "09_Weakness__4",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 4,
  "phase": 3,
  "tag": "発症(last known well)",
  "adopted": true,
  "prompt_ja": "最後に全く普通だったのはいつ？",
  "target": "When were you last completely normal?",
  "acceptable": [
   "When were you last completely normal?"
  ],
  "keywords": [
   "when",
   "last",
   "completely",
   "normal"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__5",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 5,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "頭痛や見え方の変化は？",
  "target": "Any headache or vision changes?",
  "acceptable": [
   "Any headache or vision changes?"
  ],
  "keywords": [
   "headache",
   "vision",
   "changes"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__6",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 6,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__7",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 7,
  "phase": 4,
  "tag": "抗凝固薬",
  "adopted": true,
  "prompt_ja": "抗凝固薬は飲んでいますか？",
  "target": "Do you take any blood thinners?",
  "acceptable": [
   "Do you take any blood thinners?"
  ],
  "keywords": [
   "take",
   "blood",
   "thinners"
  ],
  "freq": 5
 },
 {
  "id": "09_Weakness__8",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 8,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "09_Weakness__9",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 9,
  "phase": 5,
  "tag": "身体評価(脳卒中)",
  "adopted": true,
  "prompt_ja": "笑ってみてください。",
  "target": "Can you give me a big smile?",
  "acceptable": [
   "Can you give me a big smile?"
  ],
  "keywords": [
   "give",
   "big",
   "smile"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__10",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 10,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "両腕を上げて保ってください。",
  "target": "Raise both arms and hold them.",
  "acceptable": [
   "Raise both arms and hold them."
  ],
  "keywords": [
   "raise",
   "both",
   "arms",
   "hold",
   "them"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__11",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 11,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "09_Weakness__12",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 12,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "09_Weakness__13",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 13,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "脳卒中センターへ搬送します。",
  "target": "We're taking you to the stroke center now.",
  "acceptable": [
   "We're taking you to the stroke center now."
  ],
  "keywords": [
   "taking",
   "stroke",
   "center",
   "now"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__1",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。具合はいかがですか？",
  "target": "Hello, I'm a paramedic. How are you feeling?",
  "acceptable": [
   "Hello, I'm a paramedic. How are you feeling?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "how",
   "feeling"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__2",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "状況を尋ねる",
  "target": "Can you tell me what's going on?",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "10_General_Fatigue__3",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 3,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "倦怠感はいつ始まりましたか？",
  "target": "When did this fatigue start?",
  "acceptable": [
   "When did this fatigue start?"
  ],
  "keywords": [
   "when",
   "fatigue",
   "start"
  ],
  "freq": 4
 },
 {
  "id": "10_General_Fatigue__4",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 4,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "胸痛や息切れは？",
  "target": "Any chest pain or shortness of breath?",
  "acceptable": [
   "Any chest pain or shortness of breath?"
  ],
  "keywords": [
   "chest",
   "pain",
   "shortness",
   "breath"
  ],
  "freq": 8
 },
 {
  "id": "10_General_Fatigue__5",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 5,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "体重減少や寝汗は？",
  "target": "Any weight loss or night sweats?",
  "acceptable": [
   "Any weight loss or night sweats?"
  ],
  "keywords": [
   "weight",
   "loss",
   "night",
   "sweats"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__6",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 6,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "異常な出血はありますか？",
  "target": "Any unusual bleeding?",
  "acceptable": [
   "Any unusual bleeding?"
  ],
  "keywords": [
   "unusual",
   "bleeding"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__7",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 7,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "Do you have any medical problems?",
  "acceptable": [
   "Do you have any medical problems?"
  ],
  "keywords": [
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__8",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 8,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__9",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 9,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "血圧を確認する",
  "target": "Let me check your blood pressure.",
  "acceptable": [
   "Let me check your blood pressure."
  ],
  "keywords": [
   "let",
   "check",
   "blood",
   "pressure"
  ],
  "freq": 1
 },
 {
  "id": "10_General_Fatigue__10",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 10,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないよう伝える",
  "target": "Please stay still.",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "10_General_Fatigue__11",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 11,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "安心させる",
  "target": "We're going to take good care of you.",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "10_General_Fatigue__12",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 12,
  "phase": 8,
  "tag": "処置(EKG)/搬送",
  "adopted": true,
  "prompt_ja": "心臓と血圧を確認します。",
  "target": "We'll check your heart and blood pressure.",
  "acceptable": [
   "We'll check your heart and blood pressure."
  ],
  "keywords": [
   "check",
   "heart",
   "blood",
   "pressure"
  ],
  "freq": 0
 }
];
