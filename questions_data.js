const QUESTIONS_DATA = [
  {
    "id": 1,
    "category": "outline-1",
    "type": "single",
    "question": "哪一種人工智慧 (AI) 工作負載的主要用途是讓大量數據可供搜尋？",
    "options": [
      "A. 物件偵測 (Object Detection)",
      "B. Azure Machine Learning",
      "C. 知識採礦",
      "D. Azure AI 語言 (Language Service)"
    ],
    "subQuestions": null,
    "answer": "C. 知識採礦",
    "rationale": "知識採礦 (Knowledge Mining) 是一種 AI 工作負載，專門用於從大量非結構化資料（如 PDF、Word 文件、影像等）中提取可搜尋的知識。Azure 提供 Azure AI 搜尋服務 (Azure AI Search) 來實現此功能，結合認知技能可自動擷取、豐富和組織內容。",
    "examTip": "看到「大量資料可供搜尋」、「文件索引」、「非結構化資料擷取」等關鍵字，答案就是知識採礦。",
    "source": 1
  },
  {
    "id": 2,
    "category": "outline-1",
    "type": "single",
    "question": "您正在探索可改善員工文件搜尋和編製索引服務的解決方案。您需要人工智慧 (AI) 搜尋解決方案，其中包含各種文件類型中的搜尋文字，例如影像。這是哪種類型的 AI 工作負載？",
    "options": [
      "A. Azure AI 語言 (Language Service)",
      "B. Azure AI 翻譯工具 (Translator)",
      "C. 情感分析 (Sentiment Analysis)",
      "D. 數據採礦 (Data Mining/Knowledge Mining)"
    ],
    "subQuestions": null,
    "answer": "D. 數據採礦 (Data Mining/Knowledge Mining)",
    "rationale": "此題考察 AI 工作負載類型或負責任 AI 原則的理解。",
    "examTip": "記住六大負責任 AI 原則：公平、可靠、隱私、包容、透明、問責。",
    "source": 1
  },
  {
    "id": 3,
    "category": "outline-1",
    "type": "single",
    "question": "哪個負責任人工智慧 (AI) 原則的目標是確保 AI 解決方案有利於社會的所有部分，無論性別或種族為何？",
    "options": [
      "A. 透明度 (Transparency)",
      "B. 問責性 (Accountability)",
      "C. 包容 (Inclusiveness)",
      "D. 公平性 (Fairness)"
    ],
    "subQuestions": null,
    "answer": "C. 包容 (Inclusiveness)",
    "rationale": "包容性 (Inclusiveness) 是負責任 AI 六大原則之一。此原則確保 AI 系統能夠公平地服務於社會所有群體，不因性別、種族、年齡、殘疾或其他因素而產生歧視或排斥。Microsoft 強調 AI 應該為每個人帶來益處。",
    "examTip": "題目提到「有利於社會所有部分」、「無論性別或種族」時，答案是包容性。記住：包容 = 讓每個人都能受益。",
    "source": 1
  },
  {
    "id": 4,
    "category": "outline-1",
    "type": "single",
    "question": "設計 AI 系統來管理醫療保健數據時，哪兩個負責任人工智慧 (AI) 原則最為重要？(每個正確答案都代表解決方案的一部分)",
    "options": [
      "A. 問責 (Accountability)、隱私權和安全性 (Privacy and Security)",
      "B. 公平性",
      "C. 透明度",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "A. 問責 (Accountability)、隱私權和安全性 (Privacy and Security)",
    "rationale": "問責性 (Accountability) 確保人們對 AI 系統的設計和運作負責。這包括：建立治理架構、定義角色職責、確保遵守法律和道德標準、建立申訴和補救機制。組織必須能夠解釋 AI 決策並承擔後果。",
    "examTip": "看到「法律」、「道德標準」、「治理」、「組織原則架構」等關鍵字，答案是問責性。",
    "source": 1
  },
  {
    "id": 5,
    "category": "outline-1",
    "type": "single",
    "question": "負責任人工智慧 (AI) 的哪一個原則會提高對 AI 型解決方案限制的認識？(確保使用者瞭解 AI 的限制)",
    "options": [
      "A. 公平性",
      "B. 可靠性與安全性",
      "C. 隱私權與安全性",
      "D. 透明度 (Transparency)"
    ],
    "subQuestions": null,
    "answer": "D. 透明度 (Transparency)",
    "rationale": "透明度 (Transparency) 要求 AI 系統的運作方式對使用者清晰可理解。這包括：說明 AI 如何做出決策、揭露 AI 的能力限制、讓使用者知道他們正在與 AI 互動、提供足夠資訊讓人做出知情決策。",
    "examTip": "題目提到「瞭解限制」、「可理解性」、「解釋決策」時，答案是透明度。",
    "source": 1
  },
  {
    "id": 6,
    "category": "outline-1",
    "type": "single",
    "question": "哪一項負責任人工智慧原則 (AI) 涉及評估和減輕模型特徵所引入的偏差？",
    "options": [
      "A. 公平性 (Fairness)",
      "B. 可靠性與安全性",
      "C. 隱私權與安全性",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "A. 公平性 (Fairness)",
    "rationale": "公平性 (Fairness) 著重於識別和減輕 AI 模型中的偏差，確保系統對所有群體做出公正決策。這特別重要於貸款審批、招聘、醫療診斷等高風險決策場景。需要評估訓練資料是否存在歷史偏見。",
    "examTip": "看到「偏差」、「偏見」、「貸款」、「種族/性別考量」時，答案是公平性。",
    "source": 1
  },
  {
    "id": 7,
    "category": "outline-1",
    "type": "single",
    "question": "一家銀行正在開發新的人工智慧 (AI) 系統，以支援接受或拒絕抵押貸款申請的程式。應該將哪兩個問題視為負責任 AI 公平原則的一部分，以避免做出有偏見的決策？",
    "options": [
      "A. 種族、性別",
      "B. 可靠性與安全性 (Reliability and Safety)",
      "C. 包容性 (Inclusiveness)",
      "D. 透明度 (Transparency)"
    ],
    "subQuestions": null,
    "answer": "A. 種族、性別",
    "rationale": "公平性 (Fairness) 著重於識別和減輕 AI 模型中的偏差，確保系統對所有群體做出公正決策。這特別重要於貸款審批、招聘、醫療診斷等高風險決策場景。需要評估訓練資料是否存在歷史偏見。",
    "examTip": "看到「偏差」、「偏見」、「貸款」、「種族/性別考量」時，答案是公平性。",
    "source": 1
  },
  {
    "id": 8,
    "category": "outline-1",
    "type": "single",
    "question": "實作符合商務貸款核准資格的 AI 解決方案時，哪一項負責任人工智慧 (AI) 原則扮演主要角色？",
    "options": [
      "A. 公平性 (Fairness)",
      "B. 可靠性與安全性",
      "C. 隱私權與安全性",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "A. 公平性 (Fairness)",
    "rationale": "公平性 (Fairness) 著重於識別和減輕 AI 模型中的偏差，確保系統對所有群體做出公正決策。這特別重要於貸款審批、招聘、醫療診斷等高風險決策場景。需要評估訓練資料是否存在歷史偏見。",
    "examTip": "看到「偏差」、「偏見」、「貸款」、「種族/性別考量」時，答案是公平性。",
    "source": 1
  },
  {
    "id": 9,
    "category": "outline-1",
    "type": "single",
    "question": "一家公司目前正在開發無人駕駛的農業車輛，以幫助收穫作物。這些車輛將與在作物田裡工作的人一起部署。在此情況下，哪一項負責任人工智慧 (AI) 原則最為重要？",
    "options": [
      "A. 包容性 (Inclusiveness)",
      "B. 可靠性和安全性 (Reliability and Safety)",
      "C. 公平性 (Fairness)",
      "D. 可靠性與安全性 (Reliability and Safety)"
    ],
    "subQuestions": null,
    "answer": "B. 可靠性和安全性 (Reliability and Safety)",
    "rationale": "可靠性和安全性 (Reliability and Safety) 確保 AI 系統在各種情況下都能安全且一致地運作。這對於自動駕駛車輛、醫療設備、工業機器人等涉及人身安全的應用特別重要。系統必須能處理意外情況並最小化潛在傷害。",
    "examTip": "題目涉及「人身安全」、「自動駕駛」、「與人一起工作的機器」時，答案是可靠性和安全性。",
    "source": 1
  },
  {
    "id": 10,
    "category": "outline-1",
    "type": "single",
    "question": "哪一項負責任人工智慧 (AI) 原則可確保 AI 系統符合其必須遵守的任何法律和道德標準？(定義治理和組織原則架構)",
    "options": [
      "A. 隱私權與安全性 (Privacy and Security)",
      "B. 公平性 (Fairness)",
      "C. 可靠性與安全性 (Reliability and Safety)",
      "D. 問責 (Accountability)"
    ],
    "subQuestions": null,
    "answer": "D. 問責 (Accountability)",
    "rationale": "問責性 (Accountability) 確保人們對 AI 系統的設計和運作負責。這包括：建立治理架構、定義角色職責、確保遵守法律和道德標準、建立申訴和補救機制。組織必須能夠解釋 AI 決策並承擔後果。",
    "examTip": "看到「法律」、「道德標準」、「治理」、「組織原則架構」等關鍵字，答案是問責性。",
    "source": 1
  },
  {
    "id": 11,
    "category": "outline-2",
    "type": "single",
    "question": "哪一種機器學習演算法會根據該專案的功能預測與專案相關聯的數值標籤？",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 12,
    "category": "outline-2",
    "type": "single",
    "question": "哪一種機器學習演算法會將專案指派給一組預先定義的類別？(或預測輸入值所屬的類別)",
    "options": [
      "A. 迴歸",
      "B. 分類 (Classification)",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "B. 分類 (Classification)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 13,
    "category": "outline-2",
    "type": "single",
    "question": "哪一種機器學習演算法會尋找將數據集分割成群組的最佳方法，而不需要依賴定型和驗證卷標預測？(根據特徵的相似性來分組觀察)",
    "options": [
      "A. 超參數調整 (Hyperparameter Tuning)",
      "B. K-Means 叢集 (K-Means Clustering)",
      "C. 實驗 (Experiment)",
      "D. 聚類 (Clustering)"
    ],
    "subQuestions": null,
    "answer": "D. 聚類 (Clustering)",
    "rationale": "聚類/叢集 (Clustering) 是非監督式學習演算法，無需預先定義的標籤，根據資料的相似性自動分組。常見應用：客戶分群、市場區隔、異常偵測。K-Means 是最常見的聚類演算法。",
    "examTip": "看到「分組」、「相似屬性」、「無標籤」、「市場區隔」時，答案是聚類。聚類 = 找相似的放一起。",
    "source": 1
  },
  {
    "id": 14,
    "category": "outline-2",
    "type": "single",
    "question": "醫療保健組織有一個數據集，其中包含使用預先定義的骨折類型分類的骨骨折掃描。組織想要使用機器學習來偵測新掃描的不同類型骨骨折。這是哪種類型的機器學習服務？",
    "options": [
      "A. 迴歸",
      "B. 叢集",
      "C. 分類",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "C. 分類",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 15,
    "category": "outline-2",
    "type": "single",
    "question": "電力公用事業公司想要使用機器學習服務，利用客戶先前的能源使用數據，提供未來能源使用量 (數值) 的合理準確預測。這是哪種類型的機器學習服務？",
    "options": [
      "A. 迴歸",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 16,
    "category": "outline-2",
    "type": "single",
    "question": "一家零售商希望將具有類似屬性的在線購物者聚集在一起，以便其營銷團隊為新產品推出建立有針對性的營銷活動。這是哪種類型的機器學習服務？",
    "options": [
      "A. 線性迴歸 (Linear Regression)",
      "B. 實驗 (Experiment)",
      "C. 推斷管線 (Inference Pipeline)",
      "D. 聚類"
    ],
    "subQuestions": null,
    "answer": "D. 聚類",
    "rationale": "聚類/叢集 (Clustering) 是非監督式學習演算法，無需預先定義的標籤，根據資料的相似性自動分組。常見應用：客戶分群、市場區隔、異常偵測。K-Means 是最常見的聚類演算法。",
    "examTip": "看到「分組」、「相似屬性」、「無標籤」、「市場區隔」時，答案是聚類。聚類 = 找相似的放一起。",
    "source": 1
  },
  {
    "id": 17,
    "category": "outline-2",
    "type": "single",
    "question": "預測特定地理位置的降雨量是哪一種機器學習類型的範例？",
    "options": [
      "A. 迴歸",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 18,
    "category": "outline-2",
    "type": "single",
    "question": "您必須根據年齡和身體脂肪百分比來識別代表人類患糖尿病的機率的數值 (或布林值)。您應該使用哪種類型的機器學習模型？",
    "options": [
      "A. 叢集",
      "B. 強化學習",
      "C. 羅吉斯迴歸 (Logistic Regression) 或 多重線性迴歸 (視題目強調機率分類還是數值而定，AI900中通常羅吉斯迴歸用於二元分類)",
      "D. 監督式學習"
    ],
    "subQuestions": null,
    "answer": "C. 羅吉斯迴歸 (Logistic Regression) 或 多重線性迴歸 (視題目強調機率分類還是數值而定，AI900中通常羅吉斯迴歸用於二元分類)",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 19,
    "category": "outline-2",
    "type": "single",
    "question": "您計劃使用機器學習來預測人類根據年齡和身體脂肪百分比發展糖尿病的可能性。模型應該包含哪些專案？",
    "options": [
      "A. 特徵",
      "B. 參數",
      "C. 兩個功能 (Features) 和一個標籤 (Label)",
      "D. 輸出層"
    ],
    "subQuestions": null,
    "answer": "C. 兩個功能 (Features) 和一個標籤 (Label)",
    "rationale": "此題考察機器學習基本概念。",
    "examTip": "迴歸=預測數值、分類=預測類別、聚類=自動分組（無標籤）。特徵=輸入、標籤=輸出。",
    "source": 1
  },
  {
    "id": 20,
    "category": "outline-2",
    "type": "single",
    "question": "應該滿足多重線性回歸模型的哪一個假設，以避免產生誤導性的預測？",
    "options": [
      "A. 遷移學習 (Transfer Learning)",
      "B. 功能 (Features) 彼此獨立",
      "C. 自動化機器學習 (AutoML)",
      "D. 監督式學習 (Supervised Learning)"
    ],
    "subQuestions": null,
    "answer": "B. 功能 (Features) 彼此獨立",
    "rationale": "此題考察機器學習基本概念。",
    "examTip": "迴歸=預測數值、分類=預測類別、聚類=自動分組（無標籤）。特徵=輸入、標籤=輸出。",
    "source": 1
  },
  {
    "id": 21,
    "category": "outline-2",
    "type": "single",
    "question": "在迴歸機器學習演算法中，訓練數據集中特徵和標籤的特性為何？",
    "options": [
      "A. 標籤",
      "B. 參數",
      "C. 超參數",
      "D. 已知特徵和標籤"
    ],
    "subQuestions": null,
    "answer": "D. 已知特徵和標籤",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 22,
    "category": "outline-2",
    "type": "single",
    "question": "在迴歸機器學習演算法中，驗證數據集中特徵和標籤的特性為何？",
    "options": [
      "A. 標籤",
      "B. 已知特徵和標籤 (用於與預測結果比對)",
      "C. 參數",
      "D. 超參數"
    ],
    "subQuestions": null,
    "answer": "B. 已知特徵和標籤 (用於與預測結果比對)",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 23,
    "category": "outline-2",
    "type": "single",
    "question": "公司正使用機器學習來根據適當的房屋屬性預測房價。針對機器學習模型，標籤是哪一個屬性？",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 強化學習 (Reinforcement Learning)",
      "C. 房子的價格",
      "D. 監督式學習 (Supervised Learning)"
    ],
    "subQuestions": null,
    "answer": "C. 房子的價格",
    "rationale": "此題考察機器學習基本概念。",
    "examTip": "迴歸=預測數值、分類=預測類別、聚類=自動分組（無標籤）。特徵=輸入、標籤=輸出。",
    "source": 1
  },
  {
    "id": 24,
    "category": "outline-2",
    "type": "single",
    "question": "一家公司希望根據房屋中的人數、天氣溫度和年份時間來預測家庭用水。此使用案例中的標籤為何？",
    "options": [
      "A. 用水",
      "B. 分類 (Classification)",
      "C. 自監督學習 (Self-Supervised Learning)",
      "D. 時間序列預測 (Time Series Forecasting)"
    ],
    "subQuestions": null,
    "answer": "A. 用水",
    "rationale": "此題考察機器學習基本概念。",
    "examTip": "迴歸=預測數值、分類=預測類別、聚類=自動分組（無標籤）。特徵=輸入、標籤=輸出。",
    "source": 1
  },
  {
    "id": 25,
    "category": "outline-2",
    "type": "single",
    "question": "公司正使用機器學習來預測其電子滑板車租用服務。功能 (Features) 有哪些兩個屬性？",
    "options": [
      "A. 學習率",
      "B. 天氣溫度、工作日或週末 (這些是輸入變數)",
      "C. 批次大小",
      "D. 迭代次數"
    ],
    "subQuestions": null,
    "answer": "B. 天氣溫度、工作日或週末 (這些是輸入變數)",
    "rationale": "此題考察機器學習基本概念。",
    "examTip": "迴歸=預測數值、分類=預測類別、聚類=自動分組（無標籤）。特徵=輸入、標籤=輸出。",
    "source": 1
  },
  {
    "id": 26,
    "category": "outline-2",
    "type": "single",
    "question": "在準備數據集和定型機器學習模型之前，您應該怎麼做？",
    "options": [
      "A. 將數據分割成定型和驗證數據集",
      "B. 監督式學習 (Supervised Learning)",
      "C. 遷移學習 (Transfer Learning)",
      "D. 聚類/叢集 (Clustering)"
    ],
    "subQuestions": null,
    "answer": "A. 將數據分割成定型和驗證數據集",
    "rationale": "此題考察機器學習基本概念。",
    "examTip": "迴歸=預測數值、分類=預測類別、聚類=自動分組（無標籤）。特徵=輸入、標籤=輸出。",
    "source": 1
  },
  {
    "id": 27,
    "category": "outline-2",
    "type": "single",
    "question": "作為機器學習模型開發一部分的驗證數據集用途為何？",
    "options": [
      "A. 分類 (Classification)",
      "B. 評估已定型的模型",
      "C. 監督式學習 (Supervised Learning)",
      "D. 非監督式學習 (Unsupervised Learning)"
    ],
    "subQuestions": null,
    "answer": "B. 評估已定型的模型",
    "rationale": "此題考察機器學習基本概念。",
    "examTip": "迴歸=預測數值、分類=預測類別、聚類=自動分組（無標籤）。特徵=輸入、標籤=輸出。",
    "source": 1
  },
  {
    "id": 28,
    "category": "outline-2",
    "type": "single",
    "question": "您必須建立自動化機器學習 (AutoML) 模型。您應該先在 Azure Machine Learning Studio 中建立哪一個資源？",
    "options": [
      "A. 端點 (Endpoint)",
      "B. 數據集 (Dataset) (注意：需先有工作區，但在Studio內的操作通常始於數據集或作業)",
      "C. 線性迴歸 (Linear Regression)",
      "D. 隨機森林 (Random Forest)"
    ],
    "subQuestions": null,
    "answer": "B. 數據集 (Dataset) (注意：需先有工作區，但在Studio內的操作通常始於數據集或作業)",
    "rationale": "自動化機器學習 (AutoML) 自動化了模型選擇、超參數調整、特徵工程等繁瑣工作。在 Azure Machine Learning Studio 中使用 AutoML 時，需要先建立資料集 (Dataset)，然後建立作業 (Job) 來執行訓練。",
    "examTip": "AutoML 支援三種任務：分類、迴歸、時間序列預測。不支援聚類（非監督式學習）！",
    "source": 1
  },
  {
    "id": 29,
    "category": "outline-2",
    "type": "single",
    "question": "您必須使用 Azure Machine Learning 來定型迴歸模型。您應該在 Machine Learning Studio 中建立什麼？",
    "options": [
      "A. 訓練管線 (Training Pipeline)",
      "B. 資料集 (Dataset)",
      "C. K-Means 叢集 (K-Means Clustering)",
      "D. 作業 (Job)"
    ],
    "subQuestions": null,
    "answer": "D. 作業 (Job)",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 30,
    "category": "outline-2",
    "type": "single",
    "question": "您必須使用 Azure Machine Learning 設計工具 (Designer) 來定型機器學習模型。您應該先在 Machine Learning 設計工具中執行什麼動作？",
    "options": [
      "A. 計算叢集 (Compute Cluster)",
      "B. 超參數調整 (Hyperparameter Tuning)",
      "C. 建立管線 (Pipeline)",
      "D. 資料集 (Dataset)"
    ],
    "subQuestions": null,
    "answer": "C. 建立管線 (Pipeline)",
    "rationale": "Azure Machine Learning 設計工具 (Designer) 提供拖放式視覺化介面來建立機器學習管線。使用流程：1) 建立管線 (Pipeline) 2) 訓練模型 3) 建立推斷管線 (Inference Pipeline) 4) 部署為端點。",
    "examTip": "設計工具 = 拖放式 UI；管線 = 訓練流程；推斷管線 = 部署用的流程。",
    "source": 1
  },
  {
    "id": 31,
    "category": "outline-2",
    "type": "single",
    "question": "您必須使用 Azure Machine Learning 設計工具，從新定型的模型部署預測服務。您應該先在 Machine Learning 設計工具中執行什麼動作？",
    "options": [
      "A. 線性迴歸 (Linear Regression)",
      "B. 訓練管線 (Training Pipeline)",
      "C. 建立推斷管線 (Inference Pipeline)",
      "D. 隨機森林 (Random Forest)"
    ],
    "subQuestions": null,
    "answer": "C. 建立推斷管線 (Inference Pipeline)",
    "rationale": "Azure Machine Learning 設計工具 (Designer) 提供拖放式視覺化介面來建立機器學習管線。使用流程：1) 建立管線 (Pipeline) 2) 訓練模型 3) 建立推斷管線 (Inference Pipeline) 4) 部署為端點。",
    "examTip": "設計工具 = 拖放式 UI；管線 = 訓練流程；推斷管線 = 部署用的流程。",
    "source": 1
  },
  {
    "id": 32,
    "category": "outline-2",
    "type": "single",
    "question": "您可以在 Azure Machine Learning Studio 中使用自動化機器學習 (AutoML) 來定型哪三個受監督機器學習模型？",
    "options": [
      "A. 叢集",
      "B. 強化學習",
      "C. 分類、迴歸、時間序列預測",
      "D. 監督式學習"
    ],
    "subQuestions": null,
    "answer": "C. 分類、迴歸、時間序列預測",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 33,
    "category": "outline-2",
    "type": "single",
    "question": "Azure Machine Learning 設計工具中的哪一個機器學習演算法模組可用來定型模型？(範例)",
    "options": [
      "A. 分類",
      "B. 叢集",
      "C. 線性迴歸 (Linear Regression)",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "C. 線性迴歸 (Linear Regression)",
    "rationale": "迴歸 (Regression) 是監督式學習演算法，用於預測連續數值。常見應用：房價預測、溫度預測、銷售額預測、能源消耗預測。模型學習特徵與標籤之間的數學關係來進行預測。",
    "examTip": "看到預測「數值」、「數量」、「金額」、「價格」等連續值時，答案是迴歸。記住：迴歸 = 預測數字。",
    "source": 1
  },
  {
    "id": 34,
    "category": "outline-2",
    "type": "single",
    "question": "什麼是 Azure Machine Learning 設計工具中訓練模型的未監督機器學習演算法模組？",
    "options": [
      "A. K-Means 叢集",
      "B. 迴歸",
      "C. 分類",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. K-Means 叢集",
    "rationale": "Azure Machine Learning 設計工具 (Designer) 提供拖放式視覺化介面來建立機器學習管線。使用流程：1) 建立管線 (Pipeline) 2) 訓練模型 3) 建立推斷管線 (Inference Pipeline) 4) 部署為端點。",
    "examTip": "設計工具 = 拖放式 UI；管線 = 訓練流程；推斷管線 = 部署用的流程。",
    "source": 1
  },
  {
    "id": 35,
    "category": "outline-2",
    "type": "single",
    "question": "Azure Machine Learning 設計工具中有哪三個數據轉換模組？",
    "options": [
      "A. 超參數調整 (Hyperparameter Tuning)",
      "B. 清除遺漏的資料、將資料標準化、選取資料集中的資料行",
      "C. 實驗 (Experiment)",
      "D. 決策樹 (Decision Tree)"
    ],
    "subQuestions": null,
    "answer": "B. 清除遺漏的資料、將資料標準化、選取資料集中的資料行",
    "rationale": "Azure Machine Learning 設計工具 (Designer) 提供拖放式視覺化介面來建立機器學習管線。使用流程：1) 建立管線 (Pipeline) 2) 訓練模型 3) 建立推斷管線 (Inference Pipeline) 4) 部署為端點。",
    "examTip": "設計工具 = 拖放式 UI；管線 = 訓練流程；推斷管線 = 部署用的流程。",
    "source": 1
  },
  {
    "id": 36,
    "category": "outline-3",
    "type": "single",
    "question": "哪種類型的人工智慧 (AI) 工作負載可讓您產生周框方塊 (Bounding Boxes)，以識別影像中不同類型的車輛位置？",
    "options": [
      "A. 影像分類",
      "B. 物件偵測 (Object Detection)",
      "C. 語意分割",
      "D. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "B. 物件偵測 (Object Detection)",
    "rationale": "物件偵測 (Object Detection) 不僅能識別影像中的物體類型，還能提供物體的位置資訊（周框方塊座標）。與影像分類不同，物件偵測可以識別同一影像中的多個物體並標示它們的位置。",
    "examTip": "看到「位置」、「座標」、「周框方塊 (Bounding Box)」、「追蹤物體」時，答案是物件偵測。",
    "source": 1
  },
  {
    "id": 37,
    "category": "outline-3",
    "type": "single",
    "question": "根據影像中代表的物件，哪一種人工智慧 (AI) 工作負載能夠分類影像中的個別圖元 (Pixels)？",
    "options": [
      "A. 語意分割 (Semantic Segmentation)",
      "B. 影像分類",
      "C. 物件偵測",
      "D. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "A. 語意分割 (Semantic Segmentation)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 38,
    "category": "outline-3",
    "type": "single",
    "question": "哪一種人工智慧 (AI) 技術可作為新式影像分類解決方案的基礎？",
    "options": [
      "A. 語意分割 (Semantic Segmentation)",
      "B. 實例分割 (Instance Segmentation)",
      "C. 空間分析 (Spatial Analysis)",
      "D. 深度學習 (Deep Learning)"
    ],
    "subQuestions": null,
    "answer": "D. 深度學習 (Deep Learning)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 39,
    "category": "outline-3",
    "type": "single",
    "question": "哪兩個人工智慧 (AI) 工作負載功能是 Azure AI 視覺服務的一部分？",
    "options": [
      "A. 影像分類",
      "B. 物件偵測",
      "C. 光學字元辨識 (OCR)、空間分析",
      "D. 語意分割"
    ],
    "subQuestions": null,
    "answer": "C. 光學字元辨識 (OCR)、空間分析",
    "rationale": "光學字元辨識 (OCR, Optical Character Recognition) 能夠從影像中讀取印刷和手寫文字。Azure AI 視覺服務的 OCR 功能可處理各種文件、收據、名片等。支援多種語言和字體。",
    "examTip": "看到「從圖片讀取文字」、「手寫辨識」、「文件數位化」時，答案是 OCR。OCR 屬於電腦視覺！",
    "source": 1
  },
  {
    "id": 40,
    "category": "outline-3",
    "type": "single",
    "question": "Azure AI 視覺可消除機器學習程式的哪三個部分？(因使用預建模型)",
    "options": [
      "A. 影像描述 (Image Captioning)",
      "B. 深度估計 (Depth Estimation)",
      "C. 語意分割 (Semantic Segmentation)",
      "D. 選擇模型、評估模型、定型模型"
    ],
    "subQuestions": null,
    "answer": "D. 選擇模型、評估模型、定型模型",
    "rationale": "此題考察電腦視覺服務。",
    "examTip": "Azure AI 視覺服務包含 OCR、影像分析、空間分析。自訂視覺用於訓練專屬模型。",
    "source": 1
  },
  {
    "id": 41,
    "category": "outline-3",
    "type": "single",
    "question": "Azure AI 視覺影像描述工作所傳回的每個片語會包含哪些額外資訊？",
    "options": [
      "A. 影像分析 (Image Analysis)",
      "B. 信賴分數 (Confidence score)",
      "C. 實例分割 (Instance Segmentation)",
      "D. 空間分析 (Spatial Analysis)"
    ],
    "subQuestions": null,
    "answer": "B. 信賴分數 (Confidence score)",
    "rationale": "此題考察電腦視覺服務。",
    "examTip": "Azure AI 視覺服務包含 OCR、影像分析、空間分析。自訂視覺用於訓練專屬模型。",
    "source": 1
  },
  {
    "id": 42,
    "category": "outline-3",
    "type": "single",
    "question": "計算機視覺的哪個功能牽涉到將影像與摘要影像屬性的元數據產生關聯？",
    "options": [
      "A. 標記 (Tagging)",
      "B. 深度估計 (Depth Estimation)",
      "C. 實例分割 (Instance Segmentation)",
      "D. 物件偵測 (Object Detection)"
    ],
    "subQuestions": null,
    "answer": "A. 標記 (Tagging)",
    "rationale": "此題考察電腦視覺服務。",
    "examTip": "Azure AI 視覺服務包含 OCR、影像分析、空間分析。自訂視覺用於訓練專屬模型。",
    "source": 1
  },
  {
    "id": 43,
    "category": "outline-3",
    "type": "single",
    "question": "哪個程式可讓您使用光學字元辨識 (OCR)？",
    "options": [
      "A. 自訂模型 (Custom Model)",
      "B. 數位化醫療記錄 (從紙張文檔擷取文字)、可掃描手寫簽章的出席系統",
      "C. 稅務文件模型 (Tax Form Model)",
      "D. 收據模型 (Receipt Model)"
    ],
    "subQuestions": null,
    "answer": "B. 數位化醫療記錄 (從紙張文檔擷取文字)、可掃描手寫簽章的出席系統",
    "rationale": "光學字元辨識 (OCR, Optical Character Recognition) 能夠從影像中讀取印刷和手寫文字。Azure AI 視覺服務的 OCR 功能可處理各種文件、收據、名片等。支援多種語言和字體。",
    "examTip": "看到「從圖片讀取文字」、「手寫辨識」、「文件數位化」時，答案是 OCR。OCR 屬於電腦視覺！",
    "source": 1
  },
  {
    "id": 44,
    "category": "outline-3",
    "type": "single",
    "question": "應該使用哪一種人工智慧 (AI) 技術，從顯示商店正面的照片中擷取商店的名稱？",
    "options": [
      "A. 影像分類",
      "B. 光學字元辨識 (OCR)",
      "C. 物件偵測",
      "D. 語意分割"
    ],
    "subQuestions": null,
    "answer": "B. 光學字元辨識 (OCR)",
    "rationale": "光學字元辨識 (OCR, Optical Character Recognition) 能夠從影像中讀取印刷和手寫文字。Azure AI 視覺服務的 OCR 功能可處理各種文件、收據、名片等。支援多種語言和字體。",
    "examTip": "看到「從圖片讀取文字」、「手寫辨識」、「文件數位化」時，答案是 OCR。OCR 屬於電腦視覺！",
    "source": 1
  },
  {
    "id": 45,
    "category": "outline-3",
    "type": "single",
    "question": "您有一組影像。每個影像顯示一種類型的骨骨折 (或X光)。什麼可讓您識別不同 X 光影像中的骨折？",
    "options": [
      "A. 影像分類 (Image Classification)",
      "B. 迴歸",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 影像分類 (Image Classification)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 46,
    "category": "outline-3",
    "type": "single",
    "question": "您有一組影像。每個影像都會顯示多輛車。什麼可讓您識別相同交通監視影像中的不同車輛類型 (並傳回座標)？",
    "options": [
      "A. 影像分類",
      "B. 物件偵測 (Object Detection)",
      "C. 語意分割",
      "D. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "B. 物件偵測 (Object Detection)",
    "rationale": "物件偵測 (Object Detection) 不僅能識別影像中的物體類型，還能提供物體的位置資訊（周框方塊座標）。與影像分類不同，物件偵測可以識別同一影像中的多個物體並標示它們的位置。",
    "examTip": "看到「位置」、「座標」、「周框方塊 (Bounding Box)」、「追蹤物體」時，答案是物件偵測。",
    "source": 1
  },
  {
    "id": 47,
    "category": "outline-3",
    "type": "single",
    "question": "哪一個程式可讓您使用物件偵測？",
    "options": [
      "A. 語意分割 (Semantic Segmentation)",
      "B. 光學字元辨識 (OCR)",
      "C. 實例分割 (Instance Segmentation)",
      "D. 在欄位中追蹤牲畜"
    ],
    "subQuestions": null,
    "answer": "D. 在欄位中追蹤牲畜",
    "rationale": "物件偵測 (Object Detection) 不僅能識別影像中的物體類型，還能提供物體的位置資訊（周框方塊座標）。與影像分類不同，物件偵測可以識別同一影像中的多個物體並標示它們的位置。",
    "examTip": "看到「位置」、「座標」、「周框方塊 (Bounding Box)」、「追蹤物體」時，答案是物件偵測。",
    "source": 1
  },
  {
    "id": 48,
    "category": "outline-3",
    "type": "single",
    "question": "分類影像時，Azure AI 視覺支援哪兩個特製化領域模型？",
    "options": [
      "A. 實例分割 (Instance Segmentation)",
      "B. 名人 (Celebrities)、地標 (Landmarks)",
      "C. 臉部辨識 (Face Recognition)",
      "D. 深度估計 (Depth Estimation)"
    ],
    "subQuestions": null,
    "answer": "B. 名人 (Celebrities)、地標 (Landmarks)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 49,
    "category": "outline-3",
    "type": "single",
    "question": "哪一種電腦視覺解決方案可讓您根據相片識別個人的年齡？",
    "options": [
      "A. 臉部屬性 (Face Attributes)",
      "B. 臉部偵測 (Face Detection)",
      "C. 活體偵測 (Liveness Detection)",
      "D. 臉部辨識 (Face Recognition)"
    ],
    "subQuestions": null,
    "answer": "B. 臉部偵測 (Face Detection)",
    "rationale": "Azure AI 臉部服務 提供：1) 臉部偵測（找出臉的位置）2) 臉部屬性（年齡、情緒、眼鏡、頭飾等）3) 臉部驗證（一對一比對）4) 臉部識別（一對多比對）。",
    "examTip": "年齡/情緒偵測 = 臉部屬性；確認是否同一人 = 臉部驗證；從資料庫找人 = 臉部識別。",
    "source": 1
  },
  {
    "id": 50,
    "category": "outline-3",
    "type": "single",
    "question": "使用 Azure AI 臉部服務的臉部偵測 API 時，哪一項功能有助於識別人臉是否有眼鏡或頭飾？",
    "options": [
      "A. 情緒偵測 (Emotion Detection)",
      "B. 年齡估計 (Age Estimation)",
      "C. 臉部屬性 (Face Attributes)",
      "D. 臉部驗證 (Face Verification)"
    ],
    "subQuestions": null,
    "answer": "C. 臉部屬性 (Face Attributes)",
    "rationale": "Azure AI 臉部服務 提供：1) 臉部偵測（找出臉的位置）2) 臉部屬性（年齡、情緒、眼鏡、頭飾等）3) 臉部驗證（一對一比對）4) 臉部識別（一對多比對）。",
    "examTip": "年齡/情緒偵測 = 臉部屬性；確認是否同一人 = 臉部驗證；從資料庫找人 = 臉部識別。",
    "source": 1
  },
  {
    "id": 51,
    "category": "outline-3",
    "type": "single",
    "question": "使用 Azure AI 臉部服務時，您應該使用什麼來執行一對多或一對一臉部比對？",
    "options": [
      "A. 活體偵測 (Liveness Detection)",
      "B. 臉部屬性 (Face Attributes)",
      "C. 臉部識別 (Face Identification)、臉部驗證 (Face Verification)",
      "D. 語意分割 (Semantic Segmentation)"
    ],
    "subQuestions": null,
    "answer": "C. 臉部識別 (Face Identification)、臉部驗證 (Face Verification)",
    "rationale": "Azure AI 臉部服務 提供：1) 臉部偵測（找出臉的位置）2) 臉部屬性（年齡、情緒、眼鏡、頭飾等）3) 臉部驗證（一對一比對）4) 臉部識別（一對多比對）。",
    "examTip": "年齡/情緒偵測 = 臉部屬性；確認是否同一人 = 臉部驗證；從資料庫找人 = 臉部識別。",
    "source": 1
  },
  {
    "id": 52,
    "category": "outline-3",
    "type": "single",
    "question": "您可以使用哪一項服務來定型「您自己的」影像分類模型？",
    "options": [
      "A. Azure AI 自訂視覺 (Custom Vision)",
      "B. 空間分析 (Spatial Analysis)",
      "C. 實例分割 (Instance Segmentation)",
      "D. 語意分割 (Semantic Segmentation)"
    ],
    "subQuestions": null,
    "answer": "A. Azure AI 自訂視覺 (Custom Vision)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 53,
    "category": "outline-3",
    "type": "single",
    "question": "哪兩個預先建置的模型可讓您使用 Azure AI 文件智慧服務來掃描來自國際護照和銷售帳戶的資訊？",
    "options": [
      "A. 身份證件模型 (ID document)、發票模型 (Invoice)",
      "B. 語意分割 (Semantic Segmentation)",
      "C. 名片模型 (Business Card Model)",
      "D. 健康保險模型 (Health Insurance Model)"
    ],
    "subQuestions": null,
    "answer": "A. 身份證件模型 (ID document)、發票模型 (Invoice)",
    "rationale": "Azure AI 文件智慧 (Document Intelligence)（前身為表單辨識器）專門從文件中擷取結構化資料。提供預建模型：發票、收據、身份證件、名片、稅務文件等。也可訓練自訂模型處理特定表單格式。",
    "examTip": "從「發票」、「護照」、「名片」等文件擷取資料 → 文件智慧服務。",
    "source": 1
  },
  {
    "id": 54,
    "category": "outline-3",
    "type": "single",
    "question": "哪兩個 Azure AI 文件智慧模型包含識別通用數據欄位 (如名稱、Email) 作為其數據擷取功能的一部分？",
    "options": [
      "A. 通用文件模型 (General Document Model)",
      "B. 健康保險模型 (Health Insurance Model)",
      "C. 語意分割 (Semantic Segmentation)",
      "D. 名片模型 (Business card)、發票模型"
    ],
    "subQuestions": null,
    "answer": "D. 名片模型 (Business card)、發票模型",
    "rationale": "Azure AI 文件智慧 (Document Intelligence)（前身為表單辨識器）專門從文件中擷取結構化資料。提供預建模型：發票、收據、身份證件、名片、稅務文件等。也可訓練自訂模型處理特定表單格式。",
    "examTip": "從「發票」、「護照」、「名片」等文件擷取資料 → 文件智慧服務。",
    "source": 1
  },
  {
    "id": 55,
    "category": "outline-4",
    "type": "single",
    "question": "哪一個人工智慧 (AI) 工作負載案例是自然語言處理 (NLP) 的範例？",
    "options": [
      "A. 實體辨識",
      "B. 關鍵片語擷取",
      "C. 從商務深入解析報表擷取關鍵片語、在社交媒體數據上執行情感分析、翻譯不同語言與產品評論之間的文字",
      "D. 語言翻譯"
    ],
    "subQuestions": null,
    "answer": "C. 從商務深入解析報表擷取關鍵片語、在社交媒體數據上執行情感分析、翻譯不同語言與產品評論之間的文字",
    "rationale": "情感分析 (Sentiment Analysis) 分析文字內容並判斷其情感傾向：正面、負面或中性。常用於分析客戶評論、社交媒體貼文、調查回饋等。Azure AI 語言服務可提供文件和句子層級的情感分數。",
    "examTip": "判斷「正面/負面」、「喜歡/不喜歡」、「滿意度」時，使用情感分析。",
    "source": 1
  },
  {
    "id": 56,
    "category": "outline-4",
    "type": "single",
    "question": "哪些自然語言處理 (NLP) 技術會將值指派給植物和花卉等字組，以便它們彼此比飛機等單字更接近？(語意關聯性)",
    "options": [
      "A. 分類標籤",
      "B. 特徵值",
      "C. 超參數",
      "D. 向量化 (Vectorization/Embeddings)"
    ],
    "subQuestions": null,
    "answer": "D. 向量化 (Vectorization/Embeddings)",
    "rationale": "向量化/嵌入 (Vectorization/Embeddings) 將文字轉換為數值向量。語意相似的文字在向量空間中距離較近（如「植物」和「花卉」比「飛機」更接近）。這使得文字可被搜尋、比較和分類。",
    "examTip": "文字→數值向量 = 嵌入技術。用於語意搜尋、相似度比較。",
    "source": 1
  },
  {
    "id": 57,
    "category": "outline-4",
    "type": "single",
    "question": "哪些自然語言處理 (NLP) 技術會在計算文字之前將單字正規化？",
    "options": [
      "A. 情感分析 (Sentiment Analysis)",
      "B. 詞幹分析/字幹 (Stemming)",
      "C. 文字摘要 (Text Summarization)",
      "D. 具名實體辨識 (Named Entity Recognition)"
    ],
    "subQuestions": null,
    "answer": "B. 詞幹分析/字幹 (Stemming)",
    "rationale": "詞幹分析 (Stemming) 將單字正規化為其基本形式（詞幹）。例如：running, runs, ran → run。這幫助模型理解不同形式的同一個字其實是相同的概念。",
    "examTip": "詞幹分析 = 把不同形式的字轉換成基本形式。",
    "source": 1
  },
  {
    "id": 58,
    "category": "outline-4",
    "type": "single",
    "question": "自然語言處理內容中文字詞彙統計分析的第一個步驟是什麼？",
    "options": [
      "A. 情感分析 (Sentiment Analysis)",
      "B. 具名實體辨識 (Named Entity Recognition)",
      "C. 詞幹分析 (Stemming)",
      "D. 拿掉停用字詞 (Removing Stop Words)"
    ],
    "subQuestions": null,
    "answer": "D. 拿掉停用字詞 (Removing Stop Words)",
    "rationale": "停用字詞 (Stop Words) 是文字處理中被過濾掉的常見字詞（如 the, a, is, 的, 是等）。這些字詞出現頻率高但語意價值低，移除它們可提高分析效率和準確度。",
    "examTip": "文字詞彙統計分析的第一步 = 移除停用字詞。",
    "source": 1
  },
  {
    "id": 59,
    "category": "outline-4",
    "type": "single",
    "question": "Azure AI Services 的哪兩個功能可讓您識別支援問題數據的問題，以及識別提及的任何人員與產品？",
    "options": [
      "A. 情感分析",
      "B. 語言翻譯",
      "C. 關鍵片語擷取 (Key Phrase Extraction)、具名實體辨識 (Named Entity Recognition, NER)",
      "D. 語音辨識"
    ],
    "subQuestions": null,
    "answer": "C. 關鍵片語擷取 (Key Phrase Extraction)、具名實體辨識 (Named Entity Recognition, NER)",
    "rationale": "具名實體辨識 (Named Entity Recognition, NER) 識別文字中的特定實體類別：人名、地點、組織、日期、時間、金額、產品等。可用於自動擷取文件中的關鍵資訊並進行分類。",
    "examTip": "NER 回答「誰、什麼、哪裡、何時」。看到「擷取人名/地點/日期」時，答案是 NER。",
    "source": 1
  },
  {
    "id": 60,
    "category": "outline-4",
    "type": "single",
    "question": "哪一項適用於語言的 Azure AI 服務功能可讓您分析撰寫的文章，以擷取資訊和概念，例如人員與位置，以便進行分類？",
    "options": [
      "A. 情感分析",
      "B. 關鍵片語擷取",
      "C. 語言翻譯",
      "D. 具名實體辨識 (NER)"
    ],
    "subQuestions": null,
    "answer": "D. 具名實體辨識 (NER)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 61,
    "category": "outline-4",
    "type": "single",
    "question": "Azure AI 語言服務的哪一項功能包含可傳回外部網站連結的功能，以釐清文字中識別的字詞？",
    "options": [
      "A. 情感分析",
      "B. 關鍵片語擷取",
      "C. 語言翻譯",
      "D. 實體辨識 (含實體連結 Entity Linking)"
    ],
    "subQuestions": null,
    "answer": "D. 實體辨識 (含實體連結 Entity Linking)",
    "rationale": "實體連結 (Entity Linking) 在 NER 基礎上進一步提供外部知識庫連結（如維基百科），幫助釐清文字中識別的實體。例如：「蘋果」可能是水果或公司，實體連結會根據上下文提供正確的參考連結。",
    "examTip": "需要「外部網站連結」來釐清詞義時，使用實體連結功能。",
    "source": 1
  },
  {
    "id": 62,
    "category": "outline-4",
    "type": "single",
    "question": "哪些 Azure AI Service for Language 功能可用來分析在線用戶評論，以識別使用者是否正面或負面檢視產品？",
    "options": [
      "A. 實體辨識",
      "B. 關鍵片語擷取",
      "C. 情感分析 (Sentiment Analysis)",
      "D. 語言翻譯"
    ],
    "subQuestions": null,
    "answer": "C. 情感分析 (Sentiment Analysis)",
    "rationale": "情感分析 (Sentiment Analysis) 分析文字內容並判斷其情感傾向：正面、負面或中性。常用於分析客戶評論、社交媒體貼文、調查回饋等。Azure AI 語言服務可提供文件和句子層級的情感分數。",
    "examTip": "判斷「正面/負面」、「喜歡/不喜歡」、「滿意度」時，使用情感分析。",
    "source": 1
  },
  {
    "id": 63,
    "category": "outline-4",
    "type": "single",
    "question": "Azure 中 Azure AI 語言服務的語言偵測功能會傳回哪三個值？",
    "options": [
      "A. ISO 639-1 程式代碼、語言名稱、分數 (Score)",
      "B. 文字摘要 (Text Summarization)",
      "C. 具名實體辨識 (Named Entity Recognition)",
      "D. 情感分析 (Sentiment Analysis)"
    ],
    "subQuestions": null,
    "answer": "A. ISO 639-1 程式代碼、語言名稱、分數 (Score)",
    "rationale": "語言偵測 (Language Detection) 識別輸入文字的語言。回傳三個值：1) ISO 639-1 語言代碼（如 en, zh）2) 語言名稱 3) 信賴分數（0-1）。未知語言的分數為 NaN。",
    "examTip": "語言偵測回傳：代碼 + 名稱 + 分數。未知語言分數 = NaN。",
    "source": 1
  },
  {
    "id": 64,
    "category": "outline-4",
    "type": "single",
    "question": "Azure AI 語言偵測服務針對未知語言名稱傳回的信賴分數為何？",
    "options": [
      "A. Token 化 (Tokenization)",
      "B. 語言偵測 (Language Detection)",
      "C. NaN (Not a Number)",
      "D. 關鍵片語擷取 (Key Phrase Extraction)"
    ],
    "subQuestions": null,
    "answer": "C. NaN (Not a Number)",
    "rationale": "語言偵測 (Language Detection) 識別輸入文字的語言。回傳三個值：1) ISO 639-1 語言代碼（如 en, zh）2) 語言名稱 3) 信賴分數（0-1）。未知語言的分數為 NaN。",
    "examTip": "語言偵測回傳：代碼 + 名稱 + 分數。未知語言分數 = NaN。",
    "source": 1
  },
  {
    "id": 65,
    "category": "outline-4",
    "type": "single",
    "question": "哪些自然語言處理 (NLP) 工作負載可用來產生即時簡報的隱藏式輔助字幕文字？",
    "options": [
      "A. Azure Machine Learning",
      "B. Azure Cognitive Services",
      "C. Azure AI 語音 (Azure AI Speech)",
      "D. Azure Bot Service"
    ],
    "subQuestions": null,
    "answer": "C. Azure AI 語音 (Azure AI Speech)",
    "rationale": "此題考察自然語言處理功能。",
    "examTip": "NER=找實體、關鍵片語=找主題、情感分析=判斷正負面。",
    "source": 1
  },
  {
    "id": 66,
    "category": "outline-4",
    "type": "single",
    "question": "自然語言處理中的語音合成 (Text-to-Speech) 哪個部分涉及將文字分解成個別單字，讓每個單字都能被指派語音音效？",
    "options": [
      "A. 具名實體辨識 (Named Entity Recognition)",
      "B. 文字分類 (Text Classification)",
      "C. 語言偵測 (Language Detection)",
      "D. Token 化 (Tokenization)"
    ],
    "subQuestions": null,
    "answer": "D. Token 化 (Tokenization)",
    "rationale": "Token 化 (Tokenization) 是 NLP 的基礎步驟，將文字分解成個別單字或符號 (tokens)。這是進行進一步分析（如情感分析、NER）前的必要預處理。在文字轉語音中，每個 token 會被指派對應的語音音效。",
    "examTip": "Token 化 = 把文字切成小塊（單字/符號）。這是 NLP 處理的第一步。",
    "source": 1
  },
  {
    "id": 67,
    "category": "outline-4",
    "type": "single",
    "question": "哪兩個 Azure AI 服務功能可用來在多種語言之間啟用文字到文字和語音轉換文字？",
    "options": [
      "A. 文字摘要 (Text Summarization)",
      "B. 語音服務 (Speech Service)、翻譯工具服務 (Translator)",
      "C. 文字分類 (Text Classification)",
      "D. 對話式語言理解 (CLU)"
    ],
    "subQuestions": null,
    "answer": "B. 語音服務 (Speech Service)、翻譯工具服務 (Translator)",
    "rationale": "Azure AI 語音服務 提供：1) 語音轉文字 (STT) - 即時轉錄 2) 文字轉語音 (TTS) - 合成語音 3) 語音翻譯 4) 說話者辨識 - 識別說話人身份。STT 已針對對話和聽寫場景優化。",
    "examTip": "「語音→文字」、「文字→語音」、「即時字幕」、「說話者識別」都是語音服務功能。",
    "source": 1
  },
  {
    "id": 68,
    "category": "outline-4",
    "type": "single",
    "question": "Azure AI Translator 服務支援哪種類型的翻譯？",
    "options": [
      "A. 停用字詞移除 (Stop Words Removal)",
      "B. 詞幹分析 (Stemming)",
      "C. 對話式語言理解 (CLU)",
      "D. 文字到文字 (Text-to-text)"
    ],
    "subQuestions": null,
    "answer": "D. 文字到文字 (Text-to-text)",
    "rationale": "此題考察自然語言處理功能。",
    "examTip": "NER=找實體、關鍵片語=找主題、情感分析=判斷正負面。",
    "source": 1
  },
  {
    "id": 69,
    "category": "outline-4",
    "type": "single",
    "question": "Azure AI Translator 服務的哪個功能僅適用於自定義翻譯工具？",
    "options": [
      "A. 具名實體辨識 (Named Entity Recognition)",
      "B. 文字摘要 (Text Summarization)",
      "C. 使用字典進行模型定型",
      "D. 對話式語言理解 (CLU)"
    ],
    "subQuestions": null,
    "answer": "C. 使用字典進行模型定型",
    "rationale": "Azure AI 翻譯工具 (Translator) 支援 100+ 種語言的文字到文字翻譯。提供自訂翻譯工具 (Custom Translator) 功能，可使用字典和平行語料進行模型定型，建立專屬術語的翻譯模型。",
    "examTip": "純文字翻譯使用 Translator；語音即時翻譯使用語音服務。自訂翻譯需要「字典」進行定型。",
    "source": 1
  },
  {
    "id": 70,
    "category": "outline-4",
    "type": "single",
    "question": "哪三項功能是 Azure AI 語音服務的元素？",
    "options": [
      "A. 問答系統 (Question Answering)",
      "B. Token 化 (Tokenization)",
      "C. 語言識別、人聲辨識 (Speaker Recognition)、語音助理、語音轉文字",
      "D. 關鍵片語擷取 (Key Phrase Extraction)"
    ],
    "subQuestions": null,
    "answer": "C. 語言識別、人聲辨識 (Speaker Recognition)、語音助理、語音轉文字",
    "rationale": "Azure AI 語音服務 提供：1) 語音轉文字 (STT) - 即時轉錄 2) 文字轉語音 (TTS) - 合成語音 3) 語音翻譯 4) 說話者辨識 - 識別說話人身份。STT 已針對對話和聽寫場景優化。",
    "examTip": "「語音→文字」、「文字→語音」、「即時字幕」、「說話者識別」都是語音服務功能。",
    "source": 1
  },
  {
    "id": 71,
    "category": "outline-4",
    "type": "single",
    "question": "針對哪兩個案例，語音轉換文字 (Speech-to-Text) API 使用的通用語言模型已優化？",
    "options": [
      "A. 問答系統 (Question Answering)",
      "B. 對話 (Conversational)、聽寫 (Dictation)",
      "C. 語言偵測 (Language Detection)",
      "D. 具名實體辨識 (Named Entity Recognition)"
    ],
    "subQuestions": null,
    "answer": "B. 對話 (Conversational)、聽寫 (Dictation)",
    "rationale": "此題考察自然語言處理功能。",
    "examTip": "NER=找實體、關鍵片語=找主題、情感分析=判斷正負面。",
    "source": 1
  },
  {
    "id": 72,
    "category": "outline-4",
    "type": "single",
    "question": "哪一個 Azure 資源可透過單一端點和驗證密鑰直接存取 Azure AI Translator 和 Azure AI 語音服務？",
    "options": [
      "A. 情感分析 (Sentiment Analysis)",
      "B. 詞幹分析 (Stemming)",
      "C. Token 化 (Tokenization)",
      "D. Azure AI 服務 (Azure AI Services)"
    ],
    "subQuestions": null,
    "answer": "D. Azure AI 服務 (Azure AI Services)",
    "rationale": "Azure AI 語音服務 提供：1) 語音轉文字 (STT) - 即時轉錄 2) 文字轉語音 (TTS) - 合成語音 3) 語音翻譯 4) 說話者辨識 - 識別說話人身份。STT 已針對對話和聽寫場景優化。",
    "examTip": "「語音→文字」、「文字→語音」、「即時字幕」、「說話者識別」都是語音服務功能。",
    "source": 1
  },
  {
    "id": 73,
    "category": "outline-4",
    "type": "single",
    "question": "哪一種服務提供對話式人工智慧 (AI) 的平臺？",
    "options": [
      "A. Azure AI 搜尋 (AI Search)",
      "B. Azure AI 語音 (Speech Service)",
      "C. Azure AI Bot Service",
      "D. Azure OpenAI Service"
    ],
    "subQuestions": null,
    "answer": "C. Azure AI Bot Service",
    "rationale": "Azure AI Bot Service 是建立交談式 AI 的平台。機器人可連接多種通道 (Channels)：Teams、網頁聊天、Facebook、LINE 等。結合知識庫（如 QnA）可回答常見問題。Facebook 通道需要在該平台註冊應用程式。",
    "examTip": "交談式 AI = Bot Service + 知識庫。記住：Facebook 通道需要額外註冊憑證。",
    "source": 1
  },
  {
    "id": 74,
    "category": "outline-4",
    "type": "single",
    "question": "哪三個來源可用來產生知識庫 (Knowledge Base) 的問題和答案？",
    "options": [
      "A. 文字分類 (Text Classification)",
      "B. 關鍵片語擷取 (Key Phrase Extraction)",
      "C. 情感分析 (Sentiment Analysis)",
      "D. 網頁、現有的常見問題檔 (如 Doc, PDF)、手動輸入的數據"
    ],
    "subQuestions": null,
    "answer": "D. 網頁、現有的常見問題檔 (如 Doc, PDF)、手動輸入的數據",
    "rationale": "此題考察自然語言處理功能。",
    "examTip": "NER=找實體、關鍵片語=找主題、情感分析=判斷正負面。",
    "source": 1
  },
  {
    "id": 75,
    "category": "outline-4",
    "type": "single",
    "question": "對話式人工智慧 (AI) 解決方案的兩個主要組成部分是什麼？",
    "options": [
      "A. 機器人服務 (Bot Service)、知識庫 (Knowledge Base)",
      "B. Azure Video Indexer",
      "C. Azure AI 異常偵測工具 (Anomaly Detector)",
      "D. Azure AI 內容安全 (Content Safety)"
    ],
    "subQuestions": null,
    "answer": "A. 機器人服務 (Bot Service)、知識庫 (Knowledge Base)",
    "rationale": "Azure AI Bot Service 是建立交談式 AI 的平台。機器人可連接多種通道 (Channels)：Teams、網頁聊天、Facebook、LINE 等。結合知識庫（如 QnA）可回答常見問題。Facebook 通道需要在該平台註冊應用程式。",
    "examTip": "交談式 AI = Bot Service + 知識庫。記住：Facebook 通道需要額外註冊憑證。",
    "source": 1
  },
  {
    "id": 76,
    "category": "outline-4",
    "type": "single",
    "question": "哪個機器人通訊頻道需要應用程式在該頻道上註冊 (例如使用憑證)？",
    "options": [
      "A. Azure Cognitive Services",
      "B. Azure AI 異常偵測工具 (Anomaly Detector)",
      "C. 臉書 (Facebook)",
      "D. Azure Video Indexer"
    ],
    "subQuestions": null,
    "answer": "C. 臉書 (Facebook)",
    "rationale": "此題考察自然語言處理功能。",
    "examTip": "NER=找實體、關鍵片語=找主題、情感分析=判斷正負面。",
    "source": 1
  },
  {
    "id": 77,
    "category": "outline-4",
    "type": "single",
    "question": "Azure AI 機器人服務原生支援哪兩項功能？",
    "options": [
      "A. Azure Machine Learning",
      "B. Azure AI 翻譯工具 (Translator)",
      "C. Azure AI 語言 (Language Service)",
      "D. 回覆電子郵件問題、回覆常見問題 (FAQ)"
    ],
    "subQuestions": null,
    "answer": "D. 回覆電子郵件問題、回覆常見問題 (FAQ)",
    "rationale": "此題考察自然語言處理功能。",
    "examTip": "NER=找實體、關鍵片語=找主題、情感分析=判斷正負面。",
    "source": 1
  },
  {
    "id": 78,
    "category": "outline-5",
    "type": "single",
    "question": "哪些 AI 服務可以整合到聊天應用程式中，並以文字形式產生內容？",
    "options": [
      "A. Azure Machine Learning",
      "B. Azure Cognitive Services",
      "C. Azure OpenAI",
      "D. Azure Bot Service"
    ],
    "subQuestions": null,
    "answer": "C. Azure OpenAI",
    "rationale": "Azure OpenAI 服務提供 OpenAI 的強大模型：GPT（文字生成、對話）、DALL-E（影像生成）、Embeddings（文字向量化）。可整合到應用程式中生成內容、回答問題、撰寫程式碼等。",
    "examTip": "需要「生成文字/影像/程式碼」的 AI 功能 → Azure OpenAI。",
    "source": 1
  },
  {
    "id": 79,
    "category": "outline-5",
    "type": "single",
    "question": "[填空] 可以根據自然語言輸入傳回回應，例如自然語言、影像或程式碼。",
    "options": [
      "A. GPT (Generative Pre-trained Transformer)",
      "B. 生成式 AI (Generative AI)",
      "C. Whisper (語音辨識模型)",
      "D. 內容篩選器 (Content Filter)"
    ],
    "subQuestions": null,
    "answer": "B. 生成式 AI (Generative AI)",
    "rationale": "生成式 AI (Generative AI) 能夠根據輸入提示創建新內容：文字、影像、音樂、程式碼等。不同於傳統 AI 只能分析或分類，生成式 AI 可以創造前所未有的內容。GPT 和 DALL-E 都是生成式 AI 模型。",
    "examTip": "生成式 AI = 創造新內容的 AI。看到「產生」、「創建」、「生成」時選擇它。",
    "source": 1
  },
  {
    "id": 80,
    "category": "outline-5",
    "type": "single",
    "question": "GPT 模型的範例有哪些兩項功能？",
    "options": [
      "A. DALL-E (影像生成模型)",
      "B. 安全系統 (Safety System)",
      "C. 建立自然語言、瞭解自然語言",
      "D. GPT (Generative Pre-trained Transformer)"
    ],
    "subQuestions": null,
    "answer": "C. 建立自然語言、瞭解自然語言",
    "rationale": "GPT (Generative Pre-trained Transformer) 是強大的語言模型，具備兩大能力：1) 理解自然語言（comprehend）2) 生成自然語言（generate）。可用於對話、摘要、翻譯、問答、程式碼生成等廣泛任務。",
    "examTip": "GPT 的兩大功能：理解語言 + 生成語言。",
    "source": 1
  },
  {
    "id": 81,
    "category": "outline-5",
    "type": "single",
    "question": "哪一種生成式 AI 模型是用來根據自然語言提示產生影像？",
    "options": [
      "A. Whisper",
      "B. DALL-E",
      "C. GPT-4",
      "D. Codex"
    ],
    "subQuestions": null,
    "answer": "B. DALL-E",
    "rationale": "生成式 AI (Generative AI) 能夠根據輸入提示創建新內容：文字、影像、音樂、程式碼等。不同於傳統 AI 只能分析或分類，生成式 AI 可以創造前所未有的內容。GPT 和 DALL-E 都是生成式 AI 模型。",
    "examTip": "生成式 AI = 創造新內容的 AI。看到「產生」、「創建」、「生成」時選擇它。",
    "source": 1
  },
  {
    "id": 82,
    "category": "outline-5",
    "type": "single",
    "question": "哪三項功能是生成 AI 模型的影像產生功能的範例？",
    "options": [
      "A. 基礎模型 (Foundation Model)",
      "B. Copilot (副駕駛員)",
      "C. 微調 (Fine-tuning)",
      "D. 建立影像的變化、編輯影像、建立新影像"
    ],
    "subQuestions": null,
    "answer": "D. 建立影像的變化、編輯影像、建立新影像",
    "rationale": "此題考察生成式 AI 功能。",
    "examTip": "GPT=文字生成、DALL-E=影像生成、Embeddings=向量化。系統訊息設定規則。",
    "source": 1
  },
  {
    "id": 83,
    "category": "outline-5",
    "type": "single",
    "question": "您計劃開發將 DALL-E 作為生成 AI 模型的影像處理解決方案。DALL-E 模型 不支援 哪些功能？",
    "options": [
      "A. GPT (Generative Pre-trained Transformer)",
      "B. 生成式 AI (Generative AI)",
      "C. 內容篩選器 (Content Filter)",
      "D. 影像說明 (Image Captioning/Description) (這是電腦視覺的功能，非生成式繪圖)"
    ],
    "subQuestions": null,
    "answer": "D. 影像說明 (Image Captioning/Description) (這是電腦視覺的功能，非生成式繪圖)",
    "rationale": "DALL-E 是影像生成模型，能夠：1) 根據文字描述創建新影像 2) 編輯現有影像 3) 建立影像變體。注意：DALL-E 不支援影像說明（Image Captioning）—那是電腦視覺的功能。",
    "examTip": "DALL-E = 文字→影像。不能做影像→文字（影像說明）！",
    "source": 1
  },
  {
    "id": 84,
    "category": "outline-5",
    "type": "single",
    "question": "[填空] 可以搜尋、分類及比較文字來源的相似度 (將文字轉換成數值向量)。",
    "options": [
      "A. 嵌入技術 (Embeddings)",
      "B. 提示工程 (Prompt Engineering)",
      "C. Copilot (副駕駛員)",
      "D. RAG (Retrieval Augmented Generation)"
    ],
    "subQuestions": null,
    "answer": "A. 嵌入技術 (Embeddings)",
    "rationale": "分類 (Classification) 是監督式學習演算法，用於將資料分配到預先定義的類別。二元分類（是/否、正/負）和多類別分類（A/B/C/D 等）。常見應用：垃圾郵件偵測、疾病診斷、影像識別。",
    "examTip": "看到「類型」、「類別」、「分類」、「診斷」、「偵測」等詞時，答案是分類。分類 = 放入預定義的盒子。",
    "source": 1
  },
  {
    "id": 85,
    "category": "outline-5",
    "type": "single",
    "question": "[填空] 使用外掛程式為使用者提供從生成 AI 模型取得常見工作的協助的能力。",
    "options": [
      "A. 副駕駛員 (Copilot)",
      "B. Whisper (語音辨識模型)",
      "C. 嵌入技術 (Embeddings)",
      "D. 基礎模型 (Foundation Model)"
    ],
    "subQuestions": null,
    "answer": "A. 副駕駛員 (Copilot)",
    "rationale": "Copilot 是 Microsoft 的 AI 助手，使用外掛程式 (Plugins) 整合各種服務和資料來源，協助使用者完成日常任務。Copilot 為使用者提供便捷的方式來存取生成式 AI 的能力。",
    "examTip": "Copilot = AI 助手 + 外掛程式。看到「外掛程式協助工作」時選 Copilot。",
    "source": 1
  },
  {
    "id": 86,
    "category": "outline-5",
    "type": "single",
    "question": "[填空] 可用來識別生成 AI 模型回應的條件約束和樣式 (設定模型的內容)。",
    "options": [
      "A. DALL-E (影像生成模型)",
      "B. GPT (Generative Pre-trained Transformer)",
      "C. 安全系統 (Safety System)",
      "D. 系統訊息 (System Message)"
    ],
    "subQuestions": null,
    "answer": "D. 系統訊息 (System Message)",
    "rationale": "系統訊息 (System Message) 用於設定生成式 AI 模型的行為規範、回應風格和內容限制。它定義模型的「人設」和約束條件，例如：「你是一位專業的客服人員，回答要簡潔有禮」。",
    "examTip": "系統訊息 = 設定 AI 的「規則」和「風格」。看到「條件約束」時選系統訊息。",
    "source": 1
  },
  {
    "id": 87,
    "category": "outline-5",
    "type": "single",
    "question": "您可以在哪一層套用內容篩選來隱藏負責任生成 AI 解決方案的提示和回應 (例如仇恨、暴力)？",
    "options": [
      "A. 內容篩選器 (Content Filter)",
      "B. 嵌入技術 (Embeddings)",
      "C. 安全系統 (Safety System)",
      "D. 提示工程 (Prompt Engineering)"
    ],
    "subQuestions": null,
    "answer": "C. 安全系統 (Safety System)",
    "rationale": "安全系統 (Safety System) 是負責任生成式 AI 解決方案中的關鍵層，用於內容篩選，過濾有害內容（仇恨、暴力、色情、自殘等）。Azure OpenAI 提供內建的內容篩選器，可在提示和回應兩端進行過濾。",
    "examTip": "過濾「仇恨/暴力/有害內容」→ 安全系統的內容篩選功能。",
    "source": 1
  },
  {
    "id": 88,
    "category": "outline-5",
    "type": "single",
    "question": "根據 NIST AI 風險管理架構，開發負責任的生成 AI 解決方案時，要考慮的第一個階段為何？",
    "options": [
      "A. 識別潛在的危害 (Identify)",
      "B. RAG (Retrieval Augmented Generation)",
      "C. 提示工程 (Prompt Engineering)",
      "D. 嵌入技術 (Embeddings)"
    ],
    "subQuestions": null,
    "answer": "A. 識別潛在的危害 (Identify)",
    "rationale": "根據 NIST AI 風險管理架構，開發負責任生成式 AI 的第一階段是識別潛在的危害 (Identify)。完整流程：識別 → 評估 → 緩解 → 監控。先了解可能的風險，才能有效管理。",
    "examTip": "NIST 風險管理第一步 = 識別（Identify）潛在危害。",
    "source": 1
  },
  {
    "id": 89,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 具名實體辨識可用來擷取文字字串中的日期與時間。",
        "answer": "是"
      },
      {
        "text": "2. 關鍵片語擷取可用來擷取文件字串中的重要片語。",
        "answer": "是"
      },
      {
        "text": "3. 關鍵片語擷取可用來擷取文件字串中的所有城市名稱。",
        "answer": "否"
      }
    ],
    "answer": "1. 是2. 是3. 否",
    "rationale": "1. 具名實體辨識 (NER) 的功能是識別和分類文字中預先定義的類別，例如人物、地點、組織、日期、時間等。 2. 關鍵片語擷取 的功能是評估文字並找出主要討論點或核心概念。 3. 要擷取特定類別的實體（如「城市名稱」），應該使用具名實體辨識 (NER)。",
    "examTip": "請記住兩者的區別：NER 是找出「誰、什麼、哪裡、何時」；關鍵片語擷取是找出「主要在談論什麼」。",
    "source": 2
  },
  {
    "id": 90,
    "category": "outline-3",
    "type": "single",
    "question": "使用 Azure AI 電腦視覺服務可以執行哪一項動作？",
    "options": [
      "1. 識別直播影片中的動物品種",
      "2. 建立訓練影片的縮圖",
      "3. 擷取手寫信件中的資料",
      "4. 擷取文件中的關鍵片語"
    ],
    "subQuestions": null,
    "answer": "3. 擷取手寫信件中的資料",
    "rationale": "Azure AI 電腦視覺服務包含光學字元辨識 (OCR) 功能，此功能專門用於從影像中讀取印刷和手寫文字。 1, 2：處理直播影片或建立縮圖通常會使用 Azure Video Indexer。 4：擷取關鍵片語是自然語言處理 (NLP) 的工作。",
    "examTip": "只要看到「從圖片/文件/手寫中讀取文字」，就要馬上想到 OCR，它隸屬於電腦視覺。",
    "source": 2
  },
  {
    "id": 91,
    "category": "outline-4",
    "type": "single",
    "question": "下列何種情況應該使用關鍵片語擷取？",
    "options": [
      "1. 將一些文件從英文翻譯成德文",
      "2. 辨識那些文件提供相同主題的資訊",
      "3. 辨識餐廳的評論為正面或負面",
      "4. 根據音軌為影片產生字幕"
    ],
    "subQuestions": null,
    "answer": "2. 辨識那些文件提供相同主題的資訊",
    "rationale": "關鍵片語擷取的功能是從文件中找出主要論點或核心主題。透過比較不同文件的關鍵片語，我們可以判斷它們是否在討論相同的主題。 1: 翻譯文件使用翻譯工具。 3: 辨識評論是情感分析。 4: 從音軌產生字幕是語音轉換文字。",
    "examTip": "關鍵片語擷取的核心用途是「摘要」和「主題分類」。",
    "source": 2
  },
  {
    "id": 92,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 下列服務呼叫將接受英文文字做為輸入並且輸出法文和義大利文文字：`/translate?from=it&to=fr&to=en`",
        "answer": "否"
      },
      {
        "text": "2. 下列服務呼叫將接受英文文字做為輸入並且輸出法文和義大利文文字：`/translate?from=en&to=fr&to=it`",
        "answer": "是"
      },
      {
        "text": "3. 翻譯服務可用來將文件從英文翻譯為法文。",
        "answer": "是"
      }
    ],
    "answer": "1. 否2. 是3. 是",
    "rationale": "1. `from=it` 表示輸入是義大利文，不符。 2. `from=en` 表示輸入是英文，`to=fr&to=it` 表示輸出到法文和義大利文，正確。 3. 這是翻譯服務的基本功能。",
    "examTip": "請記住 REST API 呼叫中的參數意義：`from` 代表來源語言，`to` 代表目標語言。",
    "source": 2
  },
  {
    "id": 93,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 聊天機器人只能使用自訂程式碼來建置。",
        "answer": "否"
      },
      {
        "text": "2. Azure Bot Service 提供用於裝載交談式機器人的服務。",
        "answer": "是"
      },
      {
        "text": "3. 使用 Azure Bot Service 建置的機器人可與 Microsoft Teams 使用者交流。",
        "answer": "是"
      }
    ],
    "answer": "1. 否2. 是3. 是",
    "rationale": "1. 錯誤。Azure 提供了低程式碼/無程式碼的平台，例如 Power Virtual Agents。 2. Azure Bot Service 的核心功能就是提供平台來開發、部署和管理聊天機器人。 3. Azure Bot Service 支援多種「通道」(Channels)，包括 Microsoft Teams。",
    "examTip": "記住 Azure Bot Service 的三大特點：1) 提供開發框架和託管服務；2) 支援多種通道；3) 可整合其他 AI 服務。",
    "source": 2
  },
  {
    "id": 94,
    "category": "outline-4",
    "type": "single",
    "question": "您需要建立一套客戶支援解決方案，協助客戶存取資訊。該解決方案必須支援電話、電子郵件與即時聊天式管道。您應該使用下列哪一種 AI 解決方案？",
    "options": [
      "1. 自然語言處理 (NLP)",
      "2. 聊天機器人",
      "3. 機器學習",
      "4. 電腦視覺"
    ],
    "subQuestions": null,
    "answer": "2. 聊天機器人",
    "rationale": "題目描述了一個需要跨多個交談式管道的系統，這正是聊天機器人 (Chatbot) 的典型應用場景。NLP 是聊天機器人背後的技術，但聊天機器人是具體的解決方案。",
    "examTip": "當題目提到「交談」、「互動式問答」、「跨多個訊息管道」時，答案通常是「聊天機器人」。",
    "source": 2
  },
  {
    "id": 95,
    "category": "outline-4",
    "type": "single",
    "question": "自然語言處理可用於：",
    "options": [
      "1. 將 E-Mail 分類為工作郵件或個人郵件。",
      "2. 預測未來的租車數。",
      "3. 顯示溫度過高時停止工廠作業。",
      "4. 預測哪個網站的瀏覽者會執行交易。"
    ],
    "subQuestions": null,
    "answer": "1. 將 E-Mail 分類為工作郵件或個人郵件。",
    "rationale": "自然語言處理 (NLP) 的核心是理解和處理人類語言。將電子郵件根據其內容進行分類是一個典型的 NLP 任務，稱為文字分類。",
    "examTip": "看到處理「文字內容」或「語音」的場景，就要聯想到 NLP。",
    "source": 2
  },
  {
    "id": 96,
    "category": "outline-4",
    "type": "single",
    "question": "您可以使用下列哪一種 AI 服務，擷取使用者輸入的意圖 (例如「稍後請回電」)？",
    "options": [
      "1. Azure 認知搜尋",
      "2. Azure AI 語音",
      "3. Azure AI 翻譯工具",
      "4. Azure AI 語言"
    ],
    "subQuestions": null,
    "answer": "4. Azure AI 語言",
    "rationale": "從使用者語句中擷取意圖 (Intent) 是交談語言理解 (CLU) 的核心功能，而 CLU 是 Azure AI 語言服務的一部分。",
    "examTip": "理解使用者「想做什麼」(意圖) 的任務由 Azure AI 語言服務中的 CLU 功能負責。",
    "source": 2
  },
  {
    "id": 97,
    "category": "outline-4",
    "type": "single",
    "question": "您要使用自然語言處理來處理 Microsoft 新聞報導的文字。您收到如下所示輸出。請問您執行了下列何種類型的自然語言處理？[註：此題附有一張圖片，左側為一段新聞文字，右側將文字中的「現在」、「學生」、「教師」等詞彙標記為 [DateTime]、[PersonType] 等實體。]",
    "options": [
      "1. 翻譯",
      "2. 關鍵片語擷取",
      "3. 情感分析",
      "4. 實體辨識"
    ],
    "subQuestions": null,
    "answer": "4. 實體辨識",
    "rationale": "圖片顯示的過程是從文字中找出特定類別的詞彙（如日期時間、人物類型）並加以標記。這正是具名實體辨識 (NER) 的定義。",
    "examTip": "看到文字被加上 [地點]、[人名]、[組織]、[日期] 等標籤，就是實體辨識。",
    "source": 2
  },
  {
    "id": 98,
    "category": "outline-4",
    "type": "single",
    "question": "圖中顯示下列哪一種類型的 AI 解決方案？[註：此題附有一張顯示知識庫問答管理介面的圖片。]",
    "options": [
      "1. 機器學習模型",
      "2. 聊天機器人",
      "3. 情感分析解決方案",
      "4. 電腦視覺應用程式"
    ],
    "subQuestions": null,
    "answer": "2. 聊天機器人",
    "rationale": "圖片顯示的是一個知識庫 (Knowledge Base) 問答管理介面，這是建立聊天機器人的核心元件之一。知識庫用於儲存問答配對，讓機器人可以根據使用者的問題找到對應的答案。",
    "examTip": "看到「知識庫」、「問答配對 (QnA)」等介面，就要聯想到這是為了支援「聊天機器人」而建置的。",
    "source": 2
  },
  {
    "id": 99,
    "category": "outline-4",
    "type": "single",
    "question": "您建置一套自訂問題解答解決方案。並建立了一個使用知識庫回應客戶要求的機器人。您需要確認在不新增額外技能的情況下，該機器人可以執行的工作。您應該指定何者？",
    "options": [
      "1. 同時回答多位使用者的問題",
      "2. 登記客戶購買的商品",
      "3. 為客戶提供退貨授權 (RMA) 號",
      "4. 登記客訴內容"
    ],
    "subQuestions": null,
    "answer": "1. 同時回答多位使用者的問題",
    "rationale": "基於Azure Bot Service建立的機器人，其底層平台天生就具備延展性，能夠處理來自多位使用者的並行請求。其他選項都需要額外的邏輯和後端系統整合，屬於「新增的額外技能」。",
    "examTip": "雲端服務的一個核心優勢就是可擴展性。基礎的問答機器人就能處理大量併發請求。",
    "source": 2
  },
  {
    "id": 100,
    "category": "outline-4",
    "type": "single",
    "question": "您可以在下列哪兩種情況中使用語音合成解決方案？每個正確答案都呈現一個完整的解決方案。",
    "options": [
      "1. 使用電話鍵盤將信用卡號碼輸入到電話時，可以朗讀輸入號碼的自動語音。",
      "2. 可以用語音與玩家交談的電腦遊戲 AI 角色。",
      "3. 為新聞廣播產生即時字幕。",
      "4. 從會議錄音中擷取關鍵片語。"
    ],
    "subQuestions": null,
    "answer": "1, 2",
    "rationale": "語音合成 (Speech Synthesis) 也稱為文字轉換語音 (Text-to-Speech)，是將文字資料轉換為語音。 1 & 2: 都是將文字（號碼、台詞）轉換成語音。 3: 產生字幕是將語音轉成文字 (Speech-to-Text)。 4: 擷取關鍵片語是自然語言處理。",
    "examTip": "記住方向性：文字 -> 語音 是「語音合成」；語音 -> 文字 是「語音辨識」。",
    "source": 2
  },
  {
    "id": 101,
    "category": "outline-4",
    "type": "single",
    "question": "您計劃使用 Azure AI 服務來開發語音控制的個人助理應用程式。請將 Azure AI 服務與適當的工作配對。 服務 (Service) A. Azure AI 語言 B. Azure AI 語音服務 C. Azure AI 翻譯工具 工作 (Task) 將使用者的語音轉換為文字 識別使用者的意圖 向使用者提供口語回應",
    "options": [
      "A. Token 化 (Tokenization)",
      "B. 向量化/嵌入技術 (Embeddings)",
      "C. 詞幹分析 (Stemming)",
      "D. 1. (B. Azure AI 語音服務) - 將使用者的語音轉換為文字 2. (A. Azure AI 語言) - 識別使用者的意圖 3. (B. Azure AI 語音服務) - 向使用者提供口語回應"
    ],
    "subQuestions": null,
    "answer": "D. 1. (B. Azure AI 語音服務) - 將使用者的語音轉換為文字 2. (A. Azure AI 語言) - 識別使用者的意圖 3. (B. Azure AI 語音服務) - 向使用者提供口語回應",
    "rationale": "語音轉文字 是 Azure AI 語音服務的核心功能。 識別意圖 是 Azure AI 語言服務中 CLU 的功能。 提供口語回應 (文字轉語音) 也是 Azure AI 語音服務的核心功能。",
    "examTip": "一個完整的語音助理流程：使用者說話 -> 語音服務 (Speech-to-Text) -> 取得文字 -> 語言服務 (CLU) -> 理解意圖 -> 系統產生回覆文字 -> 語音服務 (Text-to-Speech) -> 助理說話。",
    "source": 2
  },
  {
    "id": 102,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 聊天機器人可以支援語音輸入。",
        "answer": "是"
      },
      {
        "text": "2. 每一種溝通管道都需要一個不同聊天機器人。",
        "answer": "否"
      },
      {
        "text": "3. 聊天機器人可以結合自然語言及受限的回應選項來管理交談程序。",
        "answer": "是"
      }
    ],
    "answer": "1. 是2. 否3. 是",
    "rationale": "1. 是。透過整合 Azure AI 語音服務，聊天機器人可以處理語音輸入和輸出。 2. 否。Azure Bot Service 的設計理念是「建置一次，部署到多個通道」，一個機器人可以同時服務於網站、Teams、Messenger等多個管道。 3. 是。良好的對話設計通常混合使用開放式的自然語言理解和引導式的選項（如按鈕、快速回覆），以提升使用者體驗和對話效率。",
    "examTip": "記住 Bot Service 的「多通道支援」是一個關鍵特性。",
    "source": 2
  },
  {
    "id": 103,
    "category": "outline-4",
    "type": "single",
    "question": "您管理一個包含客戶評論的網站。您需要儲存這些評論的英文版，然後辨識每位使用者的地理位置，並以當地語言向使用者展示評論。您應該使用下列何種類型的自然語言處理工作負載？",
    "options": [
      "1. 語言模組化",
      "2. 翻譯",
      "3. 語音辨識",
      "4. 關鍵片語擷取"
    ],
    "subQuestions": null,
    "answer": "2. 翻譯",
    "rationale": "題目的核心需求是將儲存的英文評論，以使用者的「當地語言」來展示。這個過程就是將文字從一種語言（英文）轉換成另一種語言（當地語言），這正是翻譯 (Translation) 工作負載的功能。",
    "examTip": "當題目涉及到將內容從一種語言變成另一種語言時，答案幾乎總是「翻譯」。",
    "source": 2
  },
  {
    "id": 104,
    "category": "outline-4",
    "type": "single",
    "question": "您計劃將 Azure AI 語言服務 API 功能套用至技術支援報修系統。請將 Azure AI 語言服務 API 功能與適當的自然語言處理案例配對。 功能 (Feature) 1. 實體辨識 2. 關鍵片語擷取 3. 語言偵測 4. 情感分析 案例 (Scenario) A. 根據支援報修中所包含文字了解客戶的不滿意程度。 B. 彙總支援報修中重要資訊。 C. 從支援報修中擷取關鍵日期。",
    "options": [
      "A. 語言翻譯",
      "B. 語音辨識",
      "C. 語音合成",
      "D. A. (4. 情感分析) B. (2. 關鍵片語擷取) C. (1. 實體辨識)"
    ],
    "subQuestions": null,
    "answer": "D. A. (4. 情感分析) B. (2. 關鍵片語擷取) C. (1. 實體辨識)",
    "rationale": "A. 了解「不滿意程度」是判斷文字情緒（正面、負面、中性），這正是情感分析的功能。 B. 「彙總重要資訊」或找出文章重點是關鍵片語擷取的典型應用。 C. 「關鍵日期」是一種特定類別的資訊（時間實體），需要用實體辨識來擷取。",
    "examTip": "情感分析→情緒；關鍵片語→重點；實體辨識→特定名詞（人、事、時、地、物）。",
    "source": 2
  },
  {
    "id": 105,
    "category": "outline-4",
    "type": "single",
    "question": "您需要為商務聊天機器人提供內容，以協助其為使用者解答簡單的查詢。下列哪三種方式是使用語言服務的問題解答來建立問與答文字？",
    "options": [
      "1. 從預先定義的資料來源匯入閒聊內容。",
      "2. 手動輸入問題與答案。",
      "3. 將機器人連線到 Cortana 頻道，並們用 Cortana 提問。",
      "4. 從現有的網頁產生問題與答案。",
      "5. 使用 Azure Machine Learning 自動化 ML，根據包含問題與答案組的檔案來定型模型。"
    ],
    "subQuestions": null,
    "answer": "1, 2, 4",
    "rationale": "Azure AI 語言服務的問題解答功能 (前身為 QnA Maker) 建立知識庫主要有三種方式： 從現有資料來源匯入：例如 FAQ 網頁、PDF、Word 文件。選項 4 符合。 手動編輯：直接在入口網站中新增或編輯問答配對。選項 2 符合。 匯入閒聊內容：服務提供預設的閒聊集（如專業、友善風格）來讓機器人更具人性化。選項 1 符合。 Cortana 是使用者通道，不是內容來源。AutoML 用於訓練複雜的機器學習模型，不是用來建立問答知識庫。",
    "examTip": "記住建立知識庫的三大來源：URL/檔案、手動輸入、內建閒聊。",
    "source": 2
  },
  {
    "id": 106,
    "category": "outline-4",
    "type": "single",
    "question": "可以用來建置使用內建自然語言處理模型的無程式碼應用程式。",
    "options": [
      "1. Azure Health Bot",
      "2. Microsoft Bot Framework",
      "3. Power Virtual Agents"
    ],
    "subQuestions": null,
    "answer": "2. Microsoft Bot Framework",
    "rationale": "Microsoft Bot Framework 提供了完整的開發工具和 SDK，可以用來建置使用內建自然語言處理模型的應用程式。它整合了 Azure AI 服務（如 LUIS、QnA Maker）來處理自然語言理解。 Power Virtual Agents 雖然是無程式碼工具，但主要用於建置對話式機器人，而非一般的 NLP 應用程式。 Azure Health Bot 是專為醫療保健產業設計的特殊服務。",
    "examTip": "Bot Framework 提供完整的 NLP 整合能力，適合建置各種使用自然語言處理的應用程式。",
    "source": 2
  },
  {
    "id": 107,
    "category": "outline-4",
    "type": "single",
    "question": "識別電話號碼時，會使用哪種類型的自然語言處理 (NLP) 實體？",
    "options": [
      "1. 規則運算式",
      "2. Pattern.any",
      "3. machine-learned",
      "4. 清單"
    ],
    "subQuestions": null,
    "answer": "1. 規則運算式",
    "rationale": "電話號碼、電子郵件地址、產品ID 等具有固定格式或模式的文字，最適合使用規則運算式 (Regular Expression, Regex) 實體來擷取。這比機器學習實體更精確且不需要訓練。 machine-learned 用於上下文相關的實體。 清單 (List) 用於已知的同義字詞組。 Pattern.any 是模式中的萬用字元，不是實體類型。",
    "examTip": "當需要擷取的資訊有明確的「格式」或「模式」（如電話、郵遞區號、Email），首選就是規則運算式實體。",
    "source": 2
  },
  {
    "id": 108,
    "category": "outline-4",
    "type": "single",
    "question": "您有一個 Azure 機器人。您要新增常見問題集 (FAQ) 的支援。您該使用哪項 Azure AI 服務以支援常見問題集？",
    "options": [
      "1. Azure AI 翻譯工具",
      "2. Azure AI 語音",
      "3. Azure AI 語言",
      "4. Azure AI 文件智慧服務"
    ],
    "subQuestions": null,
    "answer": "3. Azure AI 語言",
    "rationale": "支援常見問題集 (FAQ) 的功能是 Azure AI 語言服務中的問題解答 (Question Answering) 功能。它可以讓您建立一個知識庫，機器人可以查詢該知識庫來回答使用者的問題。",
    "examTip": "記住：FAQ、知識庫、問答配對 (QnA) 都指向 Azure AI 語言服務的「問題解答」功能。",
    "source": 2
  },
  {
    "id": 109,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 您可以使用 Azure AI 語言服務的問題解答查詢 Azure SQL 資料庫。",
        "answer": "否"
      },
      {
        "text": "2. 若您希望知識庫針對詢問類似問題的不同使用者，提供相同答案，則應該使用 Azure AI 語言服務的問題解答。",
        "answer": "是"
      },
      {
        "text": "3. Azure AI 語言服務的問題解答可以判斷使用者語句的意圖。",
        "answer": "否"
      }
    ],
    "answer": "1. 否2. 是3. 否",
    "rationale": "1. 問題解答功能是基於其自身的知識庫，而不是直接查詢 SQL 資料庫。它處理的是非結構化的問答配對。 2. 這是問題解答的核心價值。它使用 NLP 來理解問題的語意，因此即使問題的措辭略有不同（例如「如何重設密碼？」和「我忘了密碼怎麼辦？」），也能對應到同一個標準答案。 3. 判斷使用者語句的意圖 (Intent) 是 Azure AI 語言服務中的另一個功能——交談語言理解 (CLU) 的工作，而不是問題解答。",
    "examTip": "區分「問題解答」和「CLU」：問題解答是「問-答」配對；CLU 是分析「意圖」和「實體」以觸發複雜動作。",
    "source": 2
  },
  {
    "id": 110,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. Azure AI 語言服務可以識別文字是以何種語言撰寫。",
        "answer": "是"
      },
      {
        "text": "2. Azure AI 語言服務可以偵測文件中的手寫簽名。",
        "answer": "否"
      },
      {
        "text": "3. Azure AI 語言服務可以識別文件中所提及的公司和組織。",
        "answer": "是"
      }
    ],
    "answer": "1. 是2. 否3. 是",
    "rationale": "1. 是的，這是語言偵測功能，它是 Azure AI 語言服務的一部分。 2. 否。偵測影像或文件中的視覺元素（如手寫簽名）是電腦視覺或文件智慧服務的工作，而不是語言服務。 3. 是的，這是具名實體辨識 (NER) 功能，可以識別出「組織」這一類別的實體。",
    "examTip": "牢記各服務的界線：語言服務處理「文字的意義」，電腦視覺服務處理「影像的內容」。",
    "source": 2
  },
  {
    "id": 111,
    "category": "outline-4",
    "type": "single",
    "question": "您可以使用 Azure OpenAI 生成式 AI 應用程式產生哪兩種類型的內容？每個正確答案都呈現一個完整的解決方案。",
    "options": [
      "1. 影片",
      "2. 影像",
      "3. 文字",
      "4. 音訊"
    ],
    "subQuestions": null,
    "answer": "2, 3",
    "rationale": "Azure OpenAI 服務目前主要提供用於生成以下內容的模型： 文字：使用 GPT-4、GPT-3.5 等模型可以生成文章、程式碼、摘要、對話等。 影像：使用 DALL-E 模型可以根據文字描述生成新的影像。 目前，Azure OpenAI 服務不直接提供生成影片或音訊的模型。",
    "examTip": "Azure OpenAI = GPT (文字/程式碼) + DALL-E (影像)。",
    "source": 2
  },
  {
    "id": 112,
    "category": "outline-4",
    "type": "single",
    "question": "轉換器模型中的三個階段是什麼？每個正確答案都呈現一個完整的解決方案。",
    "options": [
      "1. 物件偵測",
      "2. 下一個 Token 預測",
      "3. Token 化",
      "4. 內嵌計算",
      "5. 匿名化"
    ],
    "subQuestions": null,
    "answer": "2, 3, 4",
    "rationale": "大型語言模型（如基於轉換器架構的 GPT）處理文字的流程大致如下： 1. Token 化 (Tokenization)：將輸入的文字分解成更小的單元（Token），如單詞或子詞。 2. 內嵌計算 (Embedding)：將每個 Token 轉換為一個數值向量，這個向量代表了該 Token 的語意。 3. 下一個 Token 預測 (Next Token Prediction)：模型的核心任務，根據前面的 Tokens 序列，預測最有可能出現的下一個 Token，並依此生成回應。 物件偵測是電腦視覺任務，匿名化是資料前處理步驟，但不是模型核心階段。",
    "examTip": "記住LLM生成文字的流程：文字 -> 碎塊(Token) -> 數字向量(Embedding) -> 預測下一個 -> 組合回文字。",
    "source": 2
  },
  {
    "id": 113,
    "category": "outline-4",
    "type": "single",
    "question": "以下何者可用來根據使用者提供的句子完成段落？",
    "options": [
      "1. Azure AI 視覺",
      "2. Azure AI 語言",
      "3. Azure OpenAI",
      "4. Azure Machine Learning"
    ],
    "subQuestions": null,
    "answer": "3. Azure OpenAI",
    "rationale": "根據提供的文字（提示）來完成段落、生成後續內容是生成式 AI (Generative AI) 的核心能力。在 Azure 服務中，這項功能由 Azure OpenAI 服務的 GPT 系列模型提供。這項任務被稱為「完成 (Completion)」。",
    "examTip": "看到「生成」、「創作」、「完成句子/段落」、「寫程式碼」等任務，就要想到 Azure OpenAI。",
    "source": 2
  },
  {
    "id": 114,
    "category": "outline-4",
    "type": "single",
    "question": "請將 Azure OpenAI 大型語言模型 (LLM) 程序與適當的工作配對。 程序 (Process) 1. 分類 (Classification) 2. 摘要 (Summarization) 3. 產生 (Generation) 4. 翻譯 (Translation) 工作 (Task) A. 偵測小說作品的類型。 B. 根據文字輸入建立重點清單。 C. 根據產品描述建立廣告標語。",
    "options": [
      "A. 迴歸",
      "B. A. (1. 分類) B. (2. 摘要) C. (3. 產生)",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "B. A. (1. 分類) B. (2. 摘要) C. (3. 產生)",
    "rationale": "A. 偵測作品屬於哪種「類型」（如科幻、愛情、懸疑），是將輸入分配到預定義類別中的分類任務。 B. 建立「重點清單」是從長篇文字中提取核心內容，這正是摘要任務。 C. 「建立廣告標語」是從無到有創造新的文字內容，這屬於產生任務。",
    "examTip": "分類=貼標籤；摘要=抓重點；產生=無中生有。",
    "source": 2
  },
  {
    "id": 115,
    "category": "outline-3",
    "type": "single",
    "question": "您需要產生用於摺頁冊的卡通。每個卡通都將以文字描述為基礎。您應該使用下列哪一個 Azure OpenAI 模型？",
    "options": [
      "1. GPT-3.5",
      "2. GPT-4",
      "3. DALL-E",
      "4. Codex"
    ],
    "subQuestions": null,
    "answer": "3. DALL-E",
    "rationale": "從文字描述生成影像（如卡通）是 DALL-E 模型的核心功能。GPT 系列模型主要用於生成文字和程式碼，Codex 是專門優化程式碼生成的模型。",
    "examTip": "文字生成影像 -> DALL-E。這是一對一的對應關係。",
    "source": 2
  },
  {
    "id": 116,
    "category": "outline-4",
    "type": "single",
    "question": "下列延伸模組 (適用於 Microsoft Visual Studio Code) 會使用 OpenAI Codex 模型。",
    "options": [
      "1. GitHub Copilot",
      "2. GitHub 原始檔控制",
      "3. IntelliSense",
      "4. Microsoft 365 Copilot"
    ],
    "subQuestions": null,
    "answer": "1. GitHub Copilot",
    "rationale": "GitHub Copilot 是一個 AI 程式碼助理，它背後的核心技術就是基於 OpenAI 的 Codex 模型（現在更多是基於更強大的 GPT-4 模型）。它可以在 VS Code 等編輯器中提供程式碼建議和補全。",
    "examTip": "程式碼生成助理 = GitHub Copilot。",
    "source": 2
  },
  {
    "id": 117,
    "category": "outline-4",
    "type": "single",
    "question": "您應該設定哪一個參數，才能在使用 Azure OpenAI GPT-3.5 模型之聊天解決方案的回應中產生更多樣化的 Token？",
    "options": [
      "1. 存在懲罰",
      "2. 停止序列",
      "3. 包含過去的訊息",
      "4. 回應上限"
    ],
    "subQuestions": null,
    "answer": "1. 存在懲罰",
    "rationale": "在 Azure OpenAI 參數中，存在懲罰 (Presence penalty) 是一個介於 -2.0 和 2.0 之間的數字，正值會懲罰已在文字中出現過的 Token，從而鼓勵模型談論新的主題，增加回應的多樣性。 停止序列：告訴模型在哪裡停止生成。 包含過去的訊息：提供對話歷史。 回應上限：限制生成長度。",
    "examTip": "想讓AI不重複、更有創意 -> 增加 `Temperature` 或 `Presence penalty`。想讓AI更專注、減少胡言亂語 -> 增加 `Frequency penalty`。",
    "source": 2
  },
  {
    "id": 118,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 轉換器模型架構會使用自我注意力。",
        "answer": "是"
      },
      {
        "text": "2. 轉換器模型架構包含編碼器區塊和解碼器區塊。",
        "answer": "是"
      },
      {
        "text": "3. 轉換器模型架構包含加密區塊或解密區塊。",
        "answer": "否"
      }
    ],
    "answer": "1. 是2. 是3. 否",
    "rationale": "1. 是。自我注意力 (Self-Attention) 機制是轉換器 (Transformer) 模型架構的革命性核心，它允許模型在處理一個詞時權衡句子中所有其他詞的重要性。 2. 是。原始的轉換器模型包含一個編碼器 (Encoder) 來理解輸入，和一個解碼器 (Decoder) 來生成輸出。後來的模型如 GPT 系列主要是基於解碼器架構。 3. 否。加密/解密是密碼學術語，與轉換器模型的 AI 架構無關。",
    "examTip": "Transformer = Attention is All You Need。記住「注意力機制」和「編碼器-解碼器」是其兩大關鍵詞。",
    "source": 2
  },
  {
    "id": 119,
    "category": "outline-1",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 您可以使用自己的資料微調 Azure OpenAI 模型。",
        "answer": "否"
      },
      {
        "text": "2. 預先訓練的生成式 AI 模型是 Azure OpenAI 的元件。",
        "answer": "是"
      },
      {
        "text": "3. 若要建置符合 Microsoft 負責任 AI 準則的解決方案，您必須建置和訓練自己的模型。",
        "answer": "否"
      }
    ],
    "answer": "答案 (根據題目來源)：1. 否2. 是3. 否(注意：第一題的答案可能與現況不符，請參考解析)",
    "rationale": "1. 根據題目提供的答案為「否」，但在實際情況中，Azure OpenAI 是支援使用自己的資料進行微調 (Fine-tuning) 的。這可能是一道舊題目或有爭議的題目。在考試中，如果遇到，需要根據當時的知識和題庫趨勢判斷。然而，從技術角度看，這個敘述是正確的。 2. 是的。Azure OpenAI 的核心就是提供強大的預先訓練模型（如 GPT-4, DALL-E）作為服務。 3. 否。Microsoft 提倡使用其經過負責任 AI 準則審核和調整的預訓練模型，使用者可以在此基礎上建置應用，而無需從頭訓練自己的模型。",
    "examTip": "注意題庫的時效性。第一題在現實中是「是」，但如果題庫答案是「否」，可能需要按題庫答案作答，同時理解其背後的技術事實。",
    "source": 2
  },
  {
    "id": 120,
    "category": "outline-3",
    "type": "single",
    "question": "您需要根據使用者提示產生影像。您應該使用下列哪一個 Azure OpenAI 模型？",
    "options": [
      "1. GPT-3",
      "2. GPT-4",
      "3. DALL-E",
      "4. Codex"
    ],
    "subQuestions": null,
    "answer": "3. DALL-E",
    "rationale": "DALL-E 是 OpenAI 開發的專門用於根據文字提示（prompt）生成影像的生成式 AI 模型。GPT 系列用於文字，Codex 用於程式碼。",
    "examTip": "這是一個重複的核心概念：影像生成 -> DALL-E。",
    "source": 2
  },
  {
    "id": 121,
    "category": "outline-3",
    "type": "single",
    "question": "您可以使用 Azure OpenAI DALL-E 模型執行下列兩個動作？每個正確答案都呈現一個完整的解決方案。",
    "options": [
      "1. 產生影像標題。",
      "2. 修改影像。",
      "3. 建立影像。",
      "4. 偵測影像中的物件。",
      "5. 使用光學字元辨識 (OCR)。"
    ],
    "subQuestions": null,
    "answer": "2, 3",
    "rationale": "DALL-E 模型主要有兩大功能： 建立影像 (Image Generation)：根據文字提示從頭開始創建新影像。 修改影像 (Image Editing/Inpainting/Outpainting)：根據提示編輯現有影像的特定區域。 產生影像標題是 Azure AI 視覺的「影像描述」功能。物件偵測和 OCR 也是 Azure AI 視覺的功能，不是 DALL-E 的。",
    "examTip": "DALL-E 不僅能「無中生有」，還能「錦上添花」或「改頭換面」（修改影像）。",
    "source": 2
  },
  {
    "id": 122,
    "category": "outline-4",
    "type": "single",
    "question": "您可以使用下列哪兩項工具來呼叫 Azure OpenAI 服務？每個正確答案都呈現一個完整的解決方案。",
    "options": [
      "1. 適用於 Python 的 Azure SDK",
      "2. 適用於 JavaScript 的 Azure SDK",
      "3. Azure REST API",
      "4. Azure 命令列介面 (CLI)"
    ],
    "subQuestions": null,
    "answer": "1, 3",
    "rationale": "與 Azure OpenAI 服務互動的主要程式設計方式有： REST API：這是最底層、最通用的方式，任何可以發送 HTTP 請求的語言都可以使用。 SDK (軟體開發套件)：Azure 為多種語言提供了 SDK 來簡化 API 的呼叫，其中 Python 和 .NET 是最主要支援的。 雖然 Azure CLI 可以用來管理 Azure OpenAI *資源*（如建立、刪除部署），但它不直接用於發送提示以*呼叫模型*進行推斷。JavaScript SDK 的支援可能不如 Python 完整或處於預覽階段。最標準的答案是 REST API 和 Python SDK。",
    "examTip": "呼叫 Azure 服務的標準方法永遠包括 REST API 和主要的 SDK (特別是 Python)。",
    "source": 2
  },
  {
    "id": 123,
    "category": "outline-4",
    "type": "single",
    "question": "請問哪一個 Azure OpenAI 模型可用於開發程式碼？",
    "options": [
      "1. Whisper",
      "2. GPT-4-32k",
      "3. microsoft-swinv2-base-patch4-window12-192-22k",
      "4. DALL-E"
    ],
    "subQuestions": null,
    "answer": "2. GPT-4-32k",
    "rationale": "GPT-4 和 GPT-3.5 系列模型都具備強大的自然語言和程式碼生成能力。它們是驅動 GitHub Copilot 等工具的基礎。 Whisper 是用於語音轉文字的模型。 選項3 是一個電腦視覺模型（Swin Transformer）。 DALL-E 用於影像生成。",
    "examTip": "看到程式碼開發/生成，就找 GPT 系列的模型。",
    "source": 2
  },
  {
    "id": 124,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. Azure OpenAI GPT-3.5 Turbo 模型可以將語音轉譯為文字。",
        "answer": "否"
      },
      {
        "text": "2. Azure OpenAI DALL-E 模型會根據文字提示產生影像。",
        "answer": "是"
      },
      {
        "text": "3. Azure OpenAI 內嵌文字模型可以根據文字相似性將文字轉換為數值向量。",
        "answer": "是"
      }
    ],
    "answer": "1. 否2. 是3. 是",
    "rationale": "1. 否。將語音轉譯為文字是 Whisper 模型的功能。GPT-3.5 Turbo 用於處理和生成文字。 2. 是。這是 DALL-E 模型的核心功能。 3. 是。這是內嵌 (Embedding) 模型的定義。它將文字轉換為向量，以便進行語意搜尋、相似性比較等任務。",
    "examTip": "精準記住每個模型的功能：GPT→文字，DALL-E→影像，Whisper→語音轉文字，Embedding→文字轉向量。",
    "source": 2
  },
  {
    "id": 125,
    "category": "outline-1",
    "type": "single",
    "question": "您有一個使用 Azure OpenAI GPT-3.5 大型語言模型 (LLM) 回答技術性問題的聊天機器人。下列哪兩個敘述正確描述了該聊天機器人？每個正確答案都呈現一個完整的解決方案。",
    "options": [
      "1. 該聊天機器人將一律提供準確的資料。",
      "2. 該聊天機器人可能會使用不準確的資料回應。",
      "3. 基礎知識資料可用來限制聊天機器人的輸出。",
      "4. 該聊天機器人適合用來執行醫療診斷。"
    ],
    "subQuestions": null,
    "answer": "2, 3",
    "rationale": "2. 正確。大型語言模型可能會產生「幻覺」(Hallucination)，即編造看似合理但不正確的資訊。這是 LLM 的一個固有風險，屬於可靠性的考量。 3. 正確。透過基礎知識 (Grounding) 或檢索增強生成 (RAG) 技術，可以將模型的回應限制在您提供的特定資料範圍內，從而提高準確性並減少幻覺。 1. 錯誤。由於幻覺的可能性，不能保證 LLM 一律準確。 4. 錯誤。由於可靠性和準確性的問題，將 LLM 直接用於高風險領域（如醫療診斷）是不負責任的，違反了可靠性與安全性以及權責的 AI 原則。",
    "examTip": "負責任 AI 的一個重要考點是 LLM 可能會出錯（產生幻覺），以及如何透過「提供您自己的資料」(Grounding) 來緩解這個問題。",
    "source": 2
  },
  {
    "id": 126,
    "category": "outline-4",
    "type": "single",
    "question": "您可以使用哪兩個資源來分析程式碼並產生程式碼函式的說明和程式碼註解？",
    "options": [
      "1. Azure OpenAI Whisper 模型",
      "2. Azure OpenAI DALL-E 模型",
      "3. Azure OpenAI GPT-4 模型",
      "4. GitHub Copilot 服務"
    ],
    "subQuestions": null,
    "answer": "3, 4",
    "rationale": "分析程式碼並生成說明/註解是程式碼理解和生成的任務。 Azure OpenAI GPT-4 模型：具有強大的程式碼處理能力，可以直接透過提示來完成這類任務。 GitHub Copilot 服務：這是一個專為程式開發設計的產品，其核心功能之一就是解釋和註解程式碼，它底層就是由 GPT 模型驅動的。 Whisper 用於語音，DALL-E 用於影像。",
    "examTip": "處理程式碼的任務，答案通常是 GPT 模型或基於它的產品 (GitHub Copilot)。",
    "source": 2
  },
  {
    "id": 127,
    "category": "outline-4",
    "type": "single",
    "question": "以下何者可用來建置為網站創作短篇文章的 AI 模型？",
    "options": [
      "1. Azure OpenAI Studio",
      "2. 文件智慧服務工作室",
      "3. ChatGPT",
      "4. GitHub Copilot"
    ],
    "subQuestions": null,
    "answer": "1. Azure OpenAI Studio",
    "rationale": "題目問的是「建置 AI 模型」的工具。在 Azure 生態系中，Azure OpenAI Studio 是一個圖形化介面，讓開發者可以探索、實驗、設定和部署 OpenAI 模型來完成如「創作短篇文章」這樣的任務。 文件智慧服務工作室用於處理表單和文件。 ChatGPT 是一個應用程式，而不是建置模型的平台。 GitHub Copilot 是程式碼助理。",
    "examTip": "Azure 中帶有 \"Studio\" 的服務通常是該服務的圖形化工作台。OpenAI Studio 用於實驗和部署 OpenAI 模型。",
    "source": 2
  },
  {
    "id": 128,
    "category": "outline-4",
    "type": "single",
    "question": "以下哪一個詞彙是用來描述上傳您自己的資料以自訂 Azure OpenAI 模型？",
    "options": [
      "1. 微調",
      "2. 完成",
      "3. 基礎知識",
      "4. 提示工程"
    ],
    "subQuestions": null,
    "answer": "1. 微調",
    "rationale": "微調 (Fine-tuning) 是指使用您自己的訓練資料來進一步訓練預先訓練好的模型，以使其在特定任務上表現更好或具備特定知識風格的過程。 完成 (Completion) 是指讓模型根據提示生成後續內容。 基礎知識 (Grounding) 是指在推斷時提供資料讓模型參考，而不是訓練模型。 提示工程 (Prompt Engineering) 是指設計有效的輸入提示。",
    "examTip": "用自己的資料「訓練」模型 -> 微調 (Fine-tuning)。在「使用」模型時提供資料給它參考 -> 基礎知識 (Grounding / RAG)。",
    "source": 2
  },
  {
    "id": 129,
    "category": "outline-4",
    "type": "single",
    "question": "請問如何才能確保 Azure OpenAI 模型會產生包含最近事件的準確回應？",
    "options": [
      "1. 新增基礎知識資料",
      "2. 新增訓練資料",
      "3. 新增小樣本學習",
      "4. 修改系統訊息"
    ],
    "subQuestions": null,
    "answer": "1. 新增基礎知識資料",
    "rationale": "預訓練模型的知識有其「截止日期」。要讓模型回應包含「最近事件」等模型訓練時沒有的資訊，最好的方法是使用基礎知識 (Grounding)，也就是所謂的檢索增強生成 (RAG)。這個方法會在使用者提問時，先從一個最新的資料來源（如 Bing 搜尋、文件庫）檢索相關資訊，然後將這些資訊連同原始問題一起發送給模型，讓模型基於這些最新資訊來產生回應。選項 2 的訓練資料指的是微調，成本高且不即時。",
    "examTip": "需要「最新資訊」或「特定領域知識」 -> 接上你自己的資料庫 (Grounding / RAG)。",
    "source": 2
  },
  {
    "id": 130,
    "category": "outline-1",
    "type": "single",
    "question": "您正在建置 AI 應用程式。您需要確保應用程式使用負責任 AI 的準則。請問您應該遵循下列哪兩個準則？",
    "options": [
      "1. 實作敏捷式軟體開發 (Agile Software Development) 方法",
      "2. 建立風險治理委員會，包括合法小組的成員、風險治理小組的成員、以及隱私保護專家。",
      "3. 防止洩漏使用 AI 演算法自動做出決策。",
      "4. 實作 AI 模型驗證的程序，做為軟體檢閱程序的一部分。"
    ],
    "subQuestions": null,
    "answer": "2, 4",
    "rationale": "實踐負責任 AI (Responsible AI) 涉及流程和治理： 2. 建立跨職能的治理委員會是權責 (Accountability) 原則的體現，確保決策過程中有來自不同領域的專家監督。 4. 將模型驗證納入開發流程是可靠性與安全性 (Reliability and Safety) 原則的體現，確保模型在部署前的品質和穩定性。 敏捷開發是軟體工程方法，不直接等同於 RAI。選項3的說法太絕對，「防止洩漏」應是「揭露」或「透明化」，且完全禁止自動決策並非 RAI 的要求，而是要求決策過程可解釋、公平。",
    "examTip": "負責任 AI 不僅是技術問題，更是「流程」和「治理」問題。建立委員會、實施驗證流程都是其重要實踐。",
    "source": 2
  },
  {
    "id": 131,
    "category": "outline-1",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 根據歷史資料預測房價為異常偵測範例。",
        "answer": "否"
      },
      {
        "text": "2. 在慣常模式中尋找偏差以識別可疑的登入為異常偵測範例。",
        "answer": "是"
      },
      {
        "text": "3. 根據患者的病歷預測患者是否會罹患糖尿病為異常偵測範例。",
        "answer": "否"
      }
    ],
    "answer": "1. 否2. 是3. 否",
    "rationale": "1. 否。預測一個連續的數值（房價）是迴歸 (Regression) 問題。 2. 是。在正常模式中找出不尋常的事件（偏差、可疑登入）是異常偵測 (Anomaly Detection) 的典型定義。 3. 否。預測一個分類結果（是/否會罹患糖尿病）是分類 (Classification) 問題。",
    "examTip": "異常偵測 = \"這個正常嗎？\" / \"這是特例嗎？\"。迴歸 = \"多少錢？\"。分類 = \"是哪一類？\"。",
    "source": 2
  },
  {
    "id": 132,
    "category": "outline-1",
    "type": "single",
    "question": "當重要欄位包含不尋常或缺少值時，確保 AI 系統不會提供預測，是負責任 AI 的什麼準則？",
    "options": [
      "1. 包容性",
      "2. 隱私權與安全性",
      "3. 可靠性與安全性",
      "4. 透明度"
    ],
    "subQuestions": null,
    "answer": "3. 可靠性與安全性",
    "rationale": "可靠性與安全性 (Reliability and Safety) 原則強調 AI 系統應在預期的和非預期的條件下都能穩定、安全地運作。當輸入資料有問題（不尋常或缺少）時，一個可靠的系統應該能識別這種情況並優雅地失敗（例如拒絕提供預測），而不是給出一個基於錯誤資料的、潛在有害的預測。",
    "examTip": "可靠性 = 系統在各種情況下（包括出錯時）的表現是否穩健、可預期。",
    "source": 2
  },
  {
    "id": 133,
    "category": "outline-4",
    "type": "single",
    "question": "您的網站有一個用來協助客戶的聊天機器人。您需要根據客戶在聊天機器人中鍵入的內容，偵測客戶何時感到沮喪。您應該使用下列哪一種類型的 AI 工作負載？",
    "options": [
      "1. 迴歸",
      "2. 自然語言處理",
      "3. 異常偵測",
      "4. 電腦視覺"
    ],
    "subQuestions": null,
    "answer": "2. 自然語言處理",
    "rationale": "偵測客戶的「沮喪」情緒，是從他們「鍵入的內容」（即文字）中分析其情感。這是一個典型的自然語言處理 (NLP) 任務，具體來說是情感分析 (Sentiment Analysis)。",
    "examTip": "分析文字/對話中的情緒、觀點、滿意度，都是情感分析的範疇，隸屬於 NLP。",
    "source": 2
  },
  {
    "id": 134,
    "category": "outline-3",
    "type": "single",
    "question": "貴公司想要打造瓶罐回收機。此回收機必須能夠自動識別正確形狀的瓶罐，拒收所有其他項目。公司應該使用哪種 AI 工作負載？",
    "options": [
      "1. 自然語言處理",
      "2. 電腦視覺",
      "3. 知識探礦",
      "4. 異常偵測"
    ],
    "subQuestions": null,
    "answer": "2. 電腦視覺",
    "rationale": "回收機需要「看」到投入的物品，並根據其「形狀」等視覺特徵來做判斷。這種處理和理解影像資訊的任務，屬於電腦視覺 (Computer Vision) 工作負載。具體來說，這可能是一個影像分類（這是瓶子/這不是瓶子）或物件偵測的應用。",
    "examTip": "凡是涉及到讓機器「看」和「理解」影像或影片的場景，都屬於電腦視覺。",
    "source": 2
  },
  {
    "id": 135,
    "category": "outline-2",
    "type": "single",
    "question": "預測貸款是否償還的銀行系統是哪個類型的機器學習範例。",
    "options": [
      "1. 分類",
      "2. 叢集",
      "3. 迴歸"
    ],
    "subQuestions": null,
    "answer": "1. 分類",
    "rationale": "這個問題的預測結果是離散的類別：「會償還」或「不會償還」。當模型需要將輸入分配到兩個或多個預先定義的類別中時，這個任務就是分類 (Classification)。",
    "examTip": "預測的答案是「是/否」、「類別A/B/C」、「通過/不通過」等，就是分類。如果預測的是一個數字，如價格或溫度，那就是迴歸。",
    "source": 2
  },
  {
    "id": 136,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 監視線上服務的評論是否包含不雅用語為一項自然語言處理範例。",
        "answer": "是"
      },
      {
        "text": "2. 辨識影像中品牌標誌為一項自然語言處理範例。",
        "answer": "否"
      },
      {
        "text": "3. 監視公開新聞網站是否包含產品負面陳述為一項自然語言處理範例。",
        "answer": "是"
      }
    ],
    "answer": "1. 是2. 否3. 是",
    "rationale": "1. 是。分析評論「文字」內容是否包含特定類型的用語（不雅用語），是 NLP 中的內容審核或文字分類任務。 2. 否。辨識「影像」中的品牌標誌是電腦視覺的任務（物件偵測或品牌偵測）。 3. 是。分析新聞網站的「文字」內容是否包含負面陳述，是 NLP 中的情感分析任務。",
    "examTip": "再次強調服務邊界：處理文字意義 -> NLP；處理影像內容 -> 電腦視覺。",
    "source": 2
  },
  {
    "id": 137,
    "category": "outline-1",
    "type": "single",
    "question": "Microsoft 責任 AI 的指導準則是哪三項？",
    "options": [
      "1. 決斷性",
      "2. 固執性",
      "3. 知識性",
      "4. 公平性",
      "5. 包容性",
      "6. 可靠性和安全性"
    ],
    "subQuestions": null,
    "answer": "4, 5, 6",
    "rationale": "Microsoft 定義了六項負責任 AI 的指導原則：公平性 (Fairness)、可靠性與安全性 (Reliability and Safety)、隱私權與安全性 (Privacy and Security)、包容性 (Inclusiveness)、透明度 (Transparency)，以及權責 (Accountability)。選項 4、5、6 都是這六大原則的一部分。",
    "examTip": "務必記住這六大原則，它們是 AI-900 的高頻考點。可以用首字縮寫來幫助記憶。",
    "source": 2
  },
  {
    "id": 138,
    "category": "outline-4",
    "type": "single",
    "question": "下列哪兩個案例是自然語言處理工作負載範例？每個正確答案都呈現一個完整的解決方案。",
    "options": [
      "1. 監控機器溫度，以在溫度達到特定閾值時打開風扇。",
      "2. 可以回答諸如「今天天氣如何？」等問題的家用智慧型裝置。",
      "3. 自動將車前燈插入汽車的生產線機械。",
      "4. 使用知識庫以互動方式回答使用者問題的網站。"
    ],
    "subQuestions": null,
    "answer": "2, 4",
    "rationale": "NLP 處理的是人類語言。 2. 家用智慧型裝置需要理解使用者的口語問題（如「今天天氣如何？」），這是典型的 NLP (語音辨識 + 意圖理解) 應用。 4. 網站使用知識庫進行互動式問答，需要理解使用者輸入的文字問題，並從知識庫中找到匹配的答案，這也是 NLP (問題解答) 的應用。 選項 1 是基於規則的自動化或異常偵測。選項 3 是機器人流程自動化或電腦視覺引導的機械操作。",
    "examTip": "尋找與「對話」、「文字理解」、「語音命令」相關的場景，這些都是 NLP 的範疇。",
    "source": 2
  },
  {
    "id": 139,
    "category": "outline-1",
    "type": "single",
    "question": "說明用以定型模型的資料來源是哪一項責任 AI 準則的範例？",
    "options": [
      "1. 隱私權與安全性",
      "2. 公平性",
      "3. 可靠性與安全性",
      "4. 透明度"
    ],
    "subQuestions": null,
    "answer": "4. 透明度",
    "rationale": "透明度 (Transparency) 原則強調 AI 系統的運作方式應該是可以被理解的。這包括了公開用來訓練模型的資料來源、模型的目的、它的能力和限制等。讓使用者和開發者知道模型是如何被建立的，是實現透明度的關鍵一步。",
    "examTip": "透明度 = 讓人們能夠「看穿」AI 系統，了解它是如何運作和做出決策的。包括解釋性（explainability）和文件記錄。",
    "source": 2
  },
  {
    "id": 140,
    "category": "outline-1",
    "type": "single",
    "question": "公司正在探索語音辨識技術在其智慧型家用裝置中的使用。公司想要找出可能無意間遺漏特定使用者群組的任何屏障。這是下列何者責任 AI 的 Microsoft 指導準則範例？",
    "options": [
      "1. 權責",
      "2. 公平性",
      "3. 隱私權與安全性",
      "4. 包容性"
    ],
    "subQuestions": null,
    "answer": "4. 包容性",
    "rationale": "包容性 (Inclusiveness) 原則旨在確保 AI 系統能夠服務於盡可能廣泛的人群，賦予人們力量，而不是設置障礙。題中提到的「找出可能無意間遺漏特定使用者群組的任何屏障」（例如，語音辨識可能對某些口音或方言的辨識效果不佳），正是包容性設計的核心考量。",
    "examTip": "公平性 (Fairness) 關注的是「不應對不同群體產生差別對待或偏見」；而包容性 (Inclusiveness) 關注的是「設計時是否考慮到了不同能力和背景的人群，確保所有人都能使用」。",
    "source": 2
  },
  {
    "id": 141,
    "category": "outline-1",
    "type": "single",
    "question": "AI 系統不應反映用於訓練系統的資料集偏差，是下列哪個 Microsoft 責任 AI 的準則。",
    "options": [
      "1. 權責性",
      "2. 公平性",
      "3. 包容性",
      "4. 透明度"
    ],
    "subQuestions": null,
    "answer": "2. 公平性",
    "rationale": "公平性 (Fairness) 原則的核心就是解決和緩解 AI 系統中的偏差 (Bias)。如果訓練資料本身存在偏差（例如，某個性別或種族的資料過多或過少），AI 模型就會學習到這種偏差，並在預測中體現出來，從而對不同群體產生不公平的影響。",
    "examTip": "看到「偏差 (Bias)」，第一個想到的就應該是「公平性 (Fairness)」。",
    "source": 2
  },
  {
    "id": 142,
    "category": "outline-1",
    "type": "single",
    "question": "請將左側資料行所列的適當準則，拖曳至右側對應的需求。 準則 (Principle) 1. 權責 2. 公平性 3. 包容性 4. 隱私權和安全性 5. 可靠性與安全性 6. 透明度 需求 (Requirement) 必須記錄決策流程，讓相關人員得以確認特定報償的根據。 只有決策流程相關人員可以看到客戶的個人資訊。 使用螢幕助讀程式或其他輔助技術的使用者必須能存取此系統。",
    "options": [
      "A. 1. (6. 透明度) 2. (4. 隱私權和安全性) 3. (3. 包容性)",
      "B. 公平性",
      "C. 可靠性與安全性",
      "D. 隱私權與安全性"
    ],
    "subQuestions": null,
    "answer": "A. 1. (6. 透明度) 2. (4. 隱私權和安全性) 3. (3. 包容性)",
    "rationale": "1. 「記錄決策流程」以便「確認根據」，這是為了讓人們理解系統為何做出某個決策，完全符合透明度的定義。 2. 「只有相關人員可以看到客戶個人資訊」，這是資料存取控制，是保護使用者隱私的核心措施，屬於隱私權和安全性原則。 3. 確保使用「螢幕助讀程式」等輔助技術的人也能使用系統，這是為了賦予不同能力的人同等的使用權利，是包容性的典型範例。",
    "examTip": "這是對六大原則核心定義的直接考察。透明度→可解釋；隱私→個資保護；包容→人人可用。",
    "source": 2
  },
  {
    "id": 143,
    "category": "outline-4",
    "type": "single",
    "question": "建立錄音的文字記錄是下列何者的範例：",
    "options": [
      "1. 電腦視覺工作負載。",
      "2. 知識採礦工作負載。",
      "3. 自然語言處理 (NLP) 工作負載。",
      "4. 生成式 AI 工作負載。"
    ],
    "subQuestions": null,
    "answer": "3. 自然語言處理 (NLP) 工作負載。",
    "rationale": "將「錄音」（語音）轉換成「文字記錄」的過程，稱為語音轉換文字 (Speech-to-Text) 或語音辨識。這項技術是自然語言處理 (NLP) 領域的一個核心部分，因為它處理的是人類的自然語言（語音形式）。",
    "examTip": "記住 NLP 包含處理文字和語音。語音轉文字 (Speech-to-Text) 和文字轉語音 (Text-to-Speech) 都是 NLP 的範疇。",
    "source": 2
  },
  {
    "id": 144,
    "category": "outline-1",
    "type": "single",
    "question": "您要建置 AI 系統。該包含哪項工作以協助服務符合 Microsoft 責任 AI 透明度準則？",
    "options": [
      "1. 確定定型資料集具有母體代表性。",
      "2. 啟用自動調整功能，以確保服務能根據需求調整。",
      "3. 提供文件以利開發人員偵錯程式碼。",
      "4. 確定所有視覺效果都有可供螢幕助讀程式讀取的相關聯文字。"
    ],
    "subQuestions": null,
    "answer": "3. 提供文件以利開發人員偵錯程式碼。",
    "rationale": "透明度 (Transparency) 準則要求 AI 系統的運作是可理解的。提供良好的文件 (Documentation)，解釋系統的設計、功能、限制，以及如何使用和偵錯，是實現透明度的重要手段。 1. 資料代表性主要關乎公平性。 2. 自動調整關乎可靠性和效能。 4. 輔助功能關乎包容性。",
    "examTip": "透明度 = 文件 + 解釋性。記住這兩點。",
    "source": 2
  },
  {
    "id": 145,
    "category": "outline-1",
    "type": "single",
    "question": "下列哪一項敘述是 Microsoft 責任 AI 準則的範例？",
    "options": [
      "1. AI 系統必須只能公開提供的資料。",
      "2. AI 系統必須保障公司的利益。",
      "3. AI 系統必須易於理解。",
      "4. AI 系統必須將個人詳細資料公開。"
    ],
    "subQuestions": null,
    "answer": "3. AI 系統必須易於理解。",
    "rationale": "「易於理解」直接對應到透明度 (Transparency) 原則。一個負責任的 AI 系統應該讓使用者和開發者能夠理解它為什麼會做出特定的決策。 選項1和2非 RAI 原則。 選項4完全違反了隱私權與安全性原則。",
    "examTip": "這是對六大原則基本概念的考察，將「易於理解」與「透明度」建立直接連結。",
    "source": 2
  },
  {
    "id": 146,
    "category": "outline-4",
    "type": "single",
    "question": "您有一些儲存成文字檔案的保險理賠報表。您需要從報表中擷取關鍵字詞以產生摘要。您應該使用下列哪一種類型的 AI 工作負載？",
    "options": [
      "1. 異常偵測",
      "2. 電腦視覺",
      "3. 知識採礦",
      "4. 自然語言處理"
    ],
    "subQuestions": null,
    "answer": "4. 自然語言處理",
    "rationale": "任務是從「文字檔案」中「擷取關鍵字詞」以「產生摘要」。這整個流程——處理文字、找出重點、生成摘要——都是自然語言處理 (NLP) 的核心任務。具體可能用到關鍵片語擷取和摘要功能。知識採礦是一個更廣泛的概念，通常涉及從大量非結構化和結構化資料中大規模地擷取洞見，而 NLP 是實現知識採礦的關鍵技術之一。在本題中，NLP 是更直接和精確的答案。",
    "examTip": "看到「從文字中擷取關鍵字/重點/摘要」，直接聯想到 NLP。",
    "source": 2
  },
  {
    "id": 147,
    "category": "outline-4",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 會回答諸如「我的下一場約會是何時？」等問題的家用智慧型裝置為交談式 AI 的範例。",
        "answer": "是"
      },
      {
        "text": "2. 公司網站上的互動式網路聊天功能可以使用 Azure Bot Service 實作。",
        "answer": "是"
      },
      {
        "text": "3. 為預先錄製影片自動產生字幕是交談式 AI 的範例。",
        "answer": "否"
      }
    ],
    "answer": "1. 是2. 是3. 否",
    "rationale": "1. 是。家用智慧型裝置透過語音進行問答互動，是交談式 AI (Conversational AI) 的典型應用。 2. 是。Azure Bot Service 正是為實作這類互動式網路聊天（聊天機器人）而設計的平台。 3. 否。自動產生字幕是將語音轉換為文字，這是一個單向的語音辨識任務，缺乏「交談」所需的互動性。交談式 AI 強調的是雙向的、來回的互動。",
    "examTip": "交談式 AI 的關鍵字是「互動 (Interaction)」、「對話 (Dialogue)」。單向的轉換不是交談。",
    "source": 2
  },
  {
    "id": 148,
    "category": "outline-2",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 您使用未標記的資料定型迴歸模型。",
        "answer": "否"
      },
      {
        "text": "2. 分類技術用來預測一段時間後的連續數值。",
        "answer": "否"
      },
      {
        "text": "3. 依共同特性分組項目為叢集範例。",
        "answer": "是"
      }
    ],
    "answer": "1. 否2. 否3. 是",
    "rationale": "1. 否。迴歸和分類都屬於監督式學習，需要使用包含「標籤」（已知答案）的資料來進行定型。使用未標記資料的是非監督式學習，如叢集。 2. 否。預測「連續數值」的技術是迴歸。分類用來預測離散的類別。 3. 是。這正是叢集 (Clustering) 的定義，它是一種非監督式學習，旨在根據資料點的相似性將它們自動分組。",
    "examTip": "這是對三種基本機器學習類型的核心定義的考察，務必牢記：迴歸→預測數值，分類→預測類別，叢集→自動分群。",
    "source": 2
  },
  {
    "id": 149,
    "category": "outline-1",
    "type": "single",
    "question": "開發 AI 自動駕駛汽車系統時，應套用哪個 Microsoft 責任 AI 的準則，以確保系統在生命週期內維持一致的作業。",
    "options": [
      "1. 公平性",
      "2. 可靠性與安全性",
      "3. 權責性",
      "4. 包容性"
    ],
    "subQuestions": null,
    "answer": "2. 可靠性與安全性",
    "rationale": "對於自動駕駛汽車這種高風險應用，「維持一致的作業」和確保其不會造成傷害是至關重要的。這直接對應到可靠性與安全性 (Reliability and Safety) 原則。該原則要求 AI 系統必須穩健、安全，並且在各種條件下都能如預期般運作。",
    "examTip": "看到高風險場景，如醫療、自動駕駛、金融交易，首先要考慮的就是「可靠性與安全性」。",
    "source": 2
  },
  {
    "id": 150,
    "category": "outline-4",
    "type": "single",
    "question": "可以回答「台積電股票價格是多少？」這種問題的智慧型裝置是哪一種 AI 工作負載的範例？",
    "options": [
      "1. 異常偵測",
      "2. 自然語言處理",
      "3. 電腦視覺",
      "4. 知識採礦"
    ],
    "subQuestions": null,
    "answer": "2. 自然語言處理",
    "rationale": "智慧型裝置需要先理解使用者用「自然語言」提出的問題（「台積電股票價格是多少？」），然後才能去查找答案。這個「理解問題」的過程就是自然語言處理 (NLP)。具體來說，它會用到語音辨識、實體辨識（識別出「台積電」）和意圖理解（理解使用者想查詢「股票價格」）。",
    "examTip": "與人類進行語言（語音或文字）互動的系統，其核心都離不開 NLP。",
    "source": 2
  },
  {
    "id": 151,
    "category": "outline-2",
    "type": "single",
    "question": "下列哪個模型可以用以預測拍賣品售價。",
    "options": [
      "1. 分類",
      "2. 叢集",
      "3. 迴歸"
    ],
    "subQuestions": null,
    "answer": "3. 迴歸",
    "rationale": "「售價」是一個連續的數值。當機器學習模型的目標是預測一個數值時，這個任務就屬於迴歸 (Regression)。",
    "examTip": "預測「多少錢？」、「多高？」、「多少度？」等數值 -> 迴歸。",
    "source": 2
  },
  {
    "id": 152,
    "category": "outline-2",
    "type": "single",
    "question": "請將工作與適當的機器學習模型配對。 模型 (Model) 1. 分類 2. 迴歸 3. 叢集 案例 (Scenario) 根據人口統計資料為乘客指派類別。 根據飛行距離預測消耗的燃油量。 根據人口統計資料預測乘客是否會錯過他們的航班。",
    "options": [
      "A. 1. (3. 叢集) 2. (2. 迴歸) 3. (1. 分類)",
      "B. 強化學習",
      "C. 監督式學習",
      "D. 非監督式學習"
    ],
    "subQuestions": null,
    "answer": "A. 1. (3. 叢集) 2. (2. 迴歸) 3. (1. 分類)",
    "rationale": "1. 「為乘客指派類別」且沒有預先定義的類別，是典型的叢集任務，目標是自動找出乘客中的自然群體。 2. 預測「消耗的燃油量」是一個數值，因此是迴歸任務。 3. 預測「是否會錯過航班」是一個二元（是/否）的結果，因此是分類任務。",
    "examTip": "這是對三種基本機器學習模型應用的經典考察。",
    "source": 2
  },
  {
    "id": 153,
    "category": "outline-2",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 若為迴歸模型，標籤必須是數值。",
        "answer": "是"
      },
      {
        "text": "2. 若為叢集模型，必須提供標籤。",
        "answer": "否"
      },
      {
        "text": "3. 若為分類模型，標籤必須為數值。",
        "answer": "否"
      }
    ],
    "answer": "1. 是2. 否3. 否",
    "rationale": "1. 是。迴歸模型的目標就是預測一個數值，所以它的標籤（要預測的目標）必須是數值。 2. 否。叢集是非監督式學習，它處理的是未標記的資料，模型會自動尋找資料中的結構和分組，不需要預先提供標籤。 3. 否。分類模型的標籤是類別（可以是文字，如\"貓\"、\"狗\"；或用數字代表的類別，如 0, 1），而不是必須為連續的數值。",
    "examTip": "監督式學習 (迴歸、分類) 需要標籤；非監督式學習 (叢集) 不需要標籤。",
    "source": 2
  },
  {
    "id": 154,
    "category": "outline-2",
    "type": "single",
    "question": "您想預測某國家公園內動物的數量，應該使用下列哪種類型的 Azure 機器學習模型類型？",
    "options": [
      "1. 分類",
      "2. 迴歸",
      "3. 叢集"
    ],
    "subQuestions": null,
    "answer": "2. 迴歸",
    "rationale": "預測「動物的數量」是在預測一個連續的數值。當機器學習的目標是預測一個數字時，這個任務屬於迴歸 (Regression)。",
    "examTip": "預測一個「數量」或「數值」（如價格、溫度、數量）-> 迴歸。",
    "source": 2
  },
  {
    "id": 155,
    "category": "outline-2",
    "type": "single",
    "question": "您需要預測某個區域的動物族群規模。您應該使用下列哪一種 Azure Machine Learning 類型？",
    "options": [
      "1. 分類",
      "2. 迴歸",
      "3. 叢集"
    ],
    "subQuestions": null,
    "answer": "2. 迴歸",
    "rationale": "與前一題相同，預測「動物族群規模」是在預測一個數值。這種預測數值的任務是迴歸 (Regression)。",
    "examTip": "這是迴歸概念的重複考察，加深記憶。",
    "source": 2
  },
  {
    "id": 156,
    "category": "outline-2",
    "type": "single",
    "question": "您該使用哪種機器學習類型預測下個月售出的禮品卡數量？",
    "options": [
      "1. 分類",
      "2. 迴歸",
      "3. 叢集"
    ],
    "subQuestions": null,
    "answer": "2. 迴歸",
    "rationale": "預測「售出的禮品卡數量」是在預測一個具體的數值。因此，這是一個迴歸 (Regression) 問題。",
    "examTip": "三種基本模型類型的區分是高頻考點，務必掌握。",
    "source": 2
  },
  {
    "id": 157,
    "category": "outline-2",
    "type": "single",
    "question": "您需要使用以下資料集來預測指定客戶的收入範圍，應該將下列哪兩個欄位用作特徵？[註：此題附有一張表格，包含「名字」、「姓氏」、「年齡」、「教育程度」、「收入範圍」等欄位及範例資料。]",
    "options": [
      "1. 名字",
      "2. 姓氏",
      "3. 教育程度",
      "4. 收入範圍",
      "5. 年齡"
    ],
    "subQuestions": null,
    "answer": "3, 5",
    "rationale": "在機器學習中，特徵 (Feature) 是用來進行預測的輸入變數。而要預測的目標變數稱為標籤 (Label)。本題要預測的是「收入範圍」，所以「收入範圍」是標籤。而「教育程度」和「年齡」是用來預測收入的有用資訊，因此它們是特徵。名字和姓氏通常是識別碼，不具有預測能力。",
    "examTip": "Feature = 輸入/依據；Label = 輸出/目標。",
    "source": 2
  },
  {
    "id": 158,
    "category": "outline-2",
    "type": "yesno",
    "question": "有一個 Azure 機器學習的定型資料集共有 45,000 筆記錄，該模型可以預測產品的品質。下表為其資料的範例：[註：此題附有一張表格，包含「日期」、「時間」、「質量(公斤)」、「溫度(C)」、「品質測試」等欄位，其中品質測試的結果為「通過」或「不通過」。]請根據上面資料回答下列敘述是否正確：",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 「質量(公斤)」為特徵。",
        "answer": "是"
      },
      {
        "text": "2. 「品質測試」為標籤。",
        "answer": "是"
      },
      {
        "text": "3. 「溫度(C)」為標籤。",
        "answer": "否"
      }
    ],
    "answer": "1. 是2. 是3. 否",
    "rationale": "1. 「質量」和「溫度」都是用來預測品質的輸入資訊，因此它們是特徵 (Feature)。所以敘述1正確。 2. 「品質測試」（通過/不通過）是模型要預測的目標結果，因此它是標籤 (Label)。所以敘述2正確。 3. 「溫度」是特徵，不是標籤。一個模型通常只有一個標籤。所以敘述3錯誤。",
    "examTip": "這是對特徵和標籤概念的再次考察，非常重要。",
    "source": 2
  },
  {
    "id": 159,
    "category": "outline-2",
    "type": "single",
    "question": "您該使用哪種機器學習類型找出有相似購物習慣的人員族群？",
    "options": [
      "1. 分類",
      "2. 迴歸",
      "3. 叢集"
    ],
    "subQuestions": null,
    "answer": "3. 叢集",
    "rationale": "任務是「找出...族群」，也就是將客戶根據「相似的購物習慣」進行分群。這裡沒有預先定義好的類別（如「高價值客戶」、「低價值客戶」），而是讓演算法自動發現資料中的自然群體。這正是叢集 (Clustering) 的定義，它是一種非監督式學習。",
    "examTip": "看到「分群」、「找出相似群體」、「客戶區隔」等，就要想到叢集。",
    "source": 2
  },
  {
    "id": 160,
    "category": "outline-2",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. Azure Machine Learning 設計工具提供拖放視覺效果畫布，以供建置、測試和部署機器學習模型。",
        "answer": "是"
      },
      {
        "text": "2. Azure Machine Learning 設計工具可將進度儲存為管線草稿。",
        "answer": "是"
      },
      {
        "text": "3. Azure Machine Learning 設計工具可併入自訂的 JavaScript 函式。",
        "answer": "否"
      }
    ],
    "answer": "1. 是2. 是3. 否",
    "rationale": "1. 是。這正是設計工具 (Designer) 的核心定義：一個拖放式的視覺化介面。 2. 是。您可以隨時將正在進行的管線儲存為草稿，以便稍後繼續編輯。 3. 否。設計工具允許您透過「執行 Python 指令碼」或「執行 R 指令碼」模組來併入自訂程式碼，但它不支援JavaScript。",
    "examTip": "設計工具 = 拖放 + 視覺化 + 管線。支援的自訂程式碼是 Python 和 R。",
    "source": 2
  },
  {
    "id": 161,
    "category": "outline-2",
    "type": "single",
    "question": "您計劃使用下面資料集，訓練一個預測房價類別的模型。請問家庭收入和房價類別分別屬於下列何者？[註：此題附有一張表格，包含「家庭收入」、「郵遞區號」、「房價類別」(低、中、高) 等欄位。] 項目 (Item) A. 家庭收入 B. 房價類別 類型 (Type) 1. 特徵(Feature) 2. 標籤(Label)",
    "options": [
      "A. 標籤",
      "B. 參數",
      "C. 超參數",
      "D. A. (1. 特徵) B. (2. 標籤)"
    ],
    "subQuestions": null,
    "answer": "D. A. (1. 特徵) B. (2. 標籤)",
    "rationale": "模型要「預測房價類別」，因此「房價類別」是要預測的目標，即標籤 (Label)。而「家庭收入」是用來進行預測的輸入資訊，因此是特徵 (Feature)。",
    "examTip": "反覆練習區分特徵和標籤，這是機器學習的基礎。",
    "source": 2
  },
  {
    "id": 162,
    "category": "outline-2",
    "type": "single",
    "question": "關於機器學習的過程，你該如何分割資料以供訓練及評估之用？",
    "options": [
      "1. 用特徵進行訓練，標籤則用來進行評估。",
      "2. 用標籤進行訓練，特徵則用來進行評估。",
      "3. 將資料隨機分割為訓練資料行和評估資料行。",
      "4. 將資料隨機分割為訓練資料列和評估資料列。"
    ],
    "subQuestions": null,
    "answer": "4. 將資料隨機分割為訓練資料列和評估資料列。",
    "rationale": "正確的資料分割方法是將整個資料集的資料列 (Rows) 進行隨機分割，一部分作為訓練集 (Training Set)，另一部分作為測試/評估集 (Test/Evaluation Set)。通常的比例是 70/30 或 80/20。每一筆資料列都包含特徵和標籤，訓練時模型從訓練集中學習特徵與標籤的關係，然後在評估集上測試其預測能力。分割資料行是錯誤的，因為這樣會破壞特徵和標籤之間的對應關係。",
    "examTip": "資料分割是按「列」分的，不是按「行」分的。",
    "source": 2
  },
  {
    "id": 163,
    "category": "outline-2",
    "type": "single",
    "question": "您使用 Azure Machine Learning 設計工具發佈推斷管線。您應該使用下列哪兩個參數來存取 Web 服務？",
    "options": [
      "1. 模型名稱",
      "2. REST 端點",
      "3. 驗證金鑰",
      "4. 定型端點"
    ],
    "subQuestions": null,
    "answer": "2, 3",
    "rationale": "當您將一個模型部署為 Web 服務後，外部應用程式需要兩個關鍵資訊來呼叫它： REST 端點 (REST Endpoint)：這是 Web 服務的唯一 URL 位址。 驗證金鑰 (Authentication Key)：這是一個秘密金鑰，用於驗證呼叫者的身份，確保只有授權的應用程式可以使用該服務。",
    "examTip": "呼叫已部署的 Web 服務 = 端點 (地址) + 金鑰 (鑰匙)。",
    "source": 2
  },
  {
    "id": 164,
    "category": "outline-2",
    "type": "single",
    "question": "應該如何使用 Azure Machine Learning 的設計工具建立叢集模型並評估該模型？",
    "options": [
      "1. 將原始資料集分割成特徵和標籤資料集，使用特徵資料集進行評估。",
      "2. 將原始資料集分割成定型和測試資料集，使用測試資料集進行評估。",
      "3. 將原始資料集分割成定型和測試資料集，使用定型資料集進行評估。",
      "4. 使用原始資料集進行定型和評估。"
    ],
    "subQuestions": null,
    "answer": "2. 將原始資料集分割成定型和測試資料集，使用測試資料集進行評估。",
    "rationale": "在 Azure Machine Learning 設計工具中，即使是叢集 (Clustering) 模型，也建議將資料集分割為定型資料集 (Training Set) 和測試資料集 (Test Set)。這樣做可以評估模型在未見過的資料上的表現，避免過度擬合。雖然叢集是非監督式學習，但使用測試集進行評估仍然可以幫助我們了解模型的分群效果是否具有一般性。",
    "examTip": "在 Azure ML 設計工具中，無論是監督式還是非監督式學習，都建議使用訓練/測試集分割來評估模型。",
    "source": 2
  },
  {
    "id": 165,
    "category": "outline-2",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 自動化機器學習讓您能夠將自訂 Python 程式碼包含在訓練管線中。",
        "answer": "否"
      },
      {
        "text": "2. 自動化機器學習實作機器學習解決方案無需程式設計經驗。",
        "answer": "是"
      },
      {
        "text": "3. 自動化機器學習使您能夠在互動式畫布中以視覺方式連接資料集和模組。",
        "answer": "否"
      }
    ],
    "answer": "1. 否2. 是3. 否",
    "rationale": "1. 否。自動化 ML (Automated ML) 的目的是自動化整個流程，不允許使用者插入自訂的訓練程式碼。需要自訂程式碼應使用 Notebooks 或 SDK。 2. 是。自動化 ML 的主要優勢之一就是讓沒有深厚程式設計或機器學習背景的使用者也能夠訓練出高效能的模型。 3. 否。「在互動式畫布中以視覺方式連接資料集和模組」是 Azure Machine Learning 設計工具 (Designer) 的描述，不是自動化 ML。",
    "examTip": "區分 AutoML 和 Designer：AutoML = 自動化，點幾下就好；Designer = 拖放，自己組裝管線。",
    "source": 2
  },
  {
    "id": 166,
    "category": "outline-2",
    "type": "single",
    "question": "使用上次的消費日期、消費頻率、消費金額 (RFM) 值，來識別客群中的客層，為下列何種機器學習模型的範例？",
    "options": [
      "1. 分類",
      "2. 迴歸",
      "3. 叢集",
      "4. 正規化"
    ],
    "subQuestions": null,
    "answer": "3. 叢集",
    "rationale": "RFM 分析的目的是「識別客群中的客層」，也就是將客戶分群。這是一個典型的叢集 (Clustering) 應用，模型會根據 RFM 這三個特徵的相似性將客戶自動分為不同的群組（如高價值客戶、潛在流失客戶等）。正規化是資料前處理的步驟，不是一種模型。",
    "examTip": "RFM 分析是叢集的一個經典商業應用案例。",
    "source": 2
  },
  {
    "id": 167,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個資料集，其中包含指定時間內發生的計程車行程訊息，如下列選項所示。您需要訓練一個模型來預測計程車行程的費用，應該用什麼選項作為特徵？",
    "options": [
      "1. 各計程車行程的車資",
      "2. 各計程車行程的單程距離",
      "3. 資料集中的計程車行程數",
      "4. 各計程車行程的單程 ID"
    ],
    "subQuestions": null,
    "answer": "2. 各計程車行程的單程距離",
    "rationale": "模型要預測的是「行程的費用」，所以「費用」是標籤 (Label)。而「單程距離」是影響費用的重要因素，因此是絕佳的特徵 (Feature)。行程 ID 是唯一識別碼，沒有預測價值。行程總數是整個資料集的統計值，不是單筆資料的特徵。",
    "examTip": "再次練習找出哪個是輸入(特徵)，哪個是輸出(標籤)。",
    "source": 2
  },
  {
    "id": 168,
    "category": "outline-2",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 根據不同使用量來統計資料分組文件為叢集範例。",
        "answer": "是"
      },
      {
        "text": "2. 根據症狀和診斷測試結果分組相似病患為叢集範例。",
        "answer": "是"
      },
      {
        "text": "3. 根據花粉計數預測某人會罹患輕度、中度還是嚴重的過敏症狀為叢集範例。",
        "answer": "否"
      }
    ],
    "answer": "1. 是2. 是3. 否",
    "rationale": "1. 是。「分組文件」是典型的叢集應用，例如將新聞文章自動分為體育、政治、娛樂等群組。 2. 是。「分組相似病患」也是叢集應用，可以在醫療上幫助發現具有相似特徵的病患群體。 3. 否。預測「輕度、中度、嚴重」這三個預先定義好的類別，是一個分類 (Classification) 問題，不是叢集。",
    "examTip": "沒有預設標籤，自動分群 -> 叢集。有預設標籤，預測屬於哪個 -> 分類。",
    "source": 2
  },
  {
    "id": 169,
    "category": "outline-2",
    "type": "single",
    "question": "您必須利用現有的資料集建立訓練資料集和驗證資料集。您應該使用 Azure Machine Learning 設計工具的哪些模組？",
    "options": [
      "1. 選取資料集中的資料行",
      "2. 合併資料",
      "3. 分割資料",
      "4. 新增資料列"
    ],
    "subQuestions": null,
    "answer": "3. 分割資料",
    "rationale": "在 Azure ML 設計工具中，用於將單一資料集分割成訓練集和驗證（或測試）集的標準模組是分割資料 (Split Data) 模組。您可以設定分割的比例，例如 70% 的資料列用於訓練，30% 的資料列用於驗證。",
    "examTip": "建立訓練集/測試集 = 分割資料 (Split Data) 模組。",
    "source": 2
  },
  {
    "id": 170,
    "category": "outline-2",
    "type": "single",
    "question": "在 Azure Machine Learning 設計工具中，您可以使用下列何者，以探索潛在特徵資料行中值的分佈。",
    "options": [
      "1. Normalize Data (正常化資料) 模組",
      "2. Select Columns in Dataset (選取資料集中的資料行) 模組",
      "3. 資料集輸出視覺化特徵",
      "4. 評估結果視覺化特徵"
    ],
    "subQuestions": null,
    "answer": "3. 資料集輸出視覺化特徵",
    "rationale": "在設計工具中，您可以右鍵點擊任何資料集模組的輸出點，然後選擇視覺化 (Visualize)。這會打開一個視窗，您可以在其中選取任何資料行，並查看其統計摘要（如平均值、中位數）和分佈直方圖。這是進行探索式資料分析 (EDA) 的主要方式。",
    "examTip": "想要「看」資料長什麼樣子（統計、圖表），就在模組輸出點上按「視覺化」。",
    "source": 2
  },
  {
    "id": 171,
    "category": "outline-2",
    "type": "single",
    "question": "您想要使用 Azure Machine Learning 設計工具部署 Azure Machine Learning 模型。您應該依序執行下列哪四項動作？(請將適當的動作按照正確順序排列。) 1. 內嵌及準備資料集。 2. 對驗證資料集評估模型。 3. 對原始資料集評估模型。 4. 定型模型。 5. 將資料隨機分割為訓練資料與驗證資料。",
    "options": [
      "A. 推斷管線 (Inference Pipeline)",
      "B. 訓練管線 (Training Pipeline)",
      "C. 超參數調整 (Hyperparameter Tuning)",
      "D. 答案順序： 1, 5, 4, 2"
    ],
    "subQuestions": null,
    "answer": "D. 答案順序： 1, 5, 4, 2",
    "rationale": "標準的監督式學習流程如下： (1) 內嵌及準備資料集：這是第一步，載入並清理資料。 (5) 將資料隨機分割為訓練資料與驗證資料：準備好資料後，將其分割。 (4) 定型模型：使用訓練資料集來訓練演算法。 (2) 對驗證資料集評估模型：使用從未見過的驗證資料集來評估模型的效能。 選項3是錯誤的，不應該用整個原始資料集來評估。",
    "examTip": "記住標準流程：準備資料 -> 分割資料 -> 訓練模型 -> 評估模型。",
    "source": 2
  },
  {
    "id": 172,
    "category": "outline-2",
    "type": "single",
    "question": "針對下列何者，您可使用資料集的其中一部分來準備機器學習模型並保持資料集平衡，以驗證結果。",
    "options": [
      "1. 時間限制",
      "2. 特徵工程",
      "3. MLflow 模型",
      "4. 模型定型"
    ],
    "subQuestions": null,
    "answer": "4. 模型定型",
    "rationale": "題目描述了機器學習的核心過程：使用「資料集的一部分」（即訓練集）來「準備機器學習模型」（即訓練）。這個過程的正式名稱就是模型定型 (Model Training)。而用另一部分資料來「驗證結果」則是模型評估。",
    "examTip": "用資料教電腦學東西的過程，就叫「定型」或「訓練」。",
    "source": 2
  },
  {
    "id": 173,
    "category": "outline-2",
    "type": "single",
    "question": "建置迴歸模型時，標籤的資料類型必須是？",
    "options": [
      "1. 布林值",
      "2. 日期時間",
      "3. 數值",
      "4. 文字"
    ],
    "subQuestions": null,
    "answer": "3. 數值",
    "rationale": "迴歸 (Regression) 模型的定義就是預測一個連續的數值。因此，它的標籤（要預測的目標）必須是數值類型（如整數或浮點數）。布林值或文字是分類問題的標籤。",
    "examTip": "迴歸 -> 數值標籤；分類 -> 類別標籤。",
    "source": 2
  },
  {
    "id": 174,
    "category": "outline-2",
    "type": "single",
    "question": "評估模型效能時，下列何者使用 0 和 1 值的網格顯示預測和實際的正負值。",
    "options": [
      "1. AUC 計量",
      "2. 混淆矩陣",
      "3. ROC 曲線",
      "4. 閾值"
    ],
    "subQuestions": null,
    "answer": "2. 混淆矩陣",
    "rationale": "混淆矩陣 (Confusion Matrix) 是評估分類模型效能的標準工具。它是一個網格（矩陣），顯示了模型的預測值（正/負）與實際值（正/負）之間的對應關係，包含四個象限：真陽性(TP)、假陽性(FP)、真陰性(TN)、假陰性(FN)。ROC 曲線和 AUC 是基於混淆矩陣計算出來的指標。",
    "examTip": "顯示 TP/FP/TN/FN 的 2x2 表格 -> 混淆矩陣。",
    "source": 2
  },
  {
    "id": 175,
    "category": "outline-2",
    "type": "single",
    "question": "資料集包含右圖資料行：[註：此題附有一張表格，顯示 ColumnA 到 ColumnE 皆為數值或整數類型。]您有一個根據其他數值資料行預測 ColumnE 值的機器學習模型。請問是下列哪一種模型？",
    "options": [
      "1. 迴歸",
      "2. 分析",
      "3. 叢集"
    ],
    "subQuestions": null,
    "answer": "1. 迴歸",
    "rationale": "題目指出要預測的目標 ColumnE 是一個數值。根據其他數值資料行來預測一個數值目標，這是迴歸 (Regression) 模型的標準定義。",
    "examTip": "輸入是數字，輸出也是數字 -> 迴歸。",
    "source": 2
  },
  {
    "id": 176,
    "category": "outline-2",
    "type": "single",
    "question": "下列何者會針對指定的計算目標執行工作，並且為實驗和工作流程進行系統化追蹤？",
    "options": [
      "1. 元件",
      "2. 資料集",
      "3. 管線",
      "4. Azure Machine Learning 作業"
    ],
    "subQuestions": null,
    "answer": "4. Azure Machine Learning 作業",
    "rationale": "在 Azure Machine Learning v2 的概念中，作業 (Job) 是指在指定的計算目標上執行單一訓練工作的執行個體。它可以是一個指令碼的單次執行，或是整個管線的執行。作業會被系統化地追蹤，記錄其輸入、輸出、記錄檔和計量，這正是題目所描述的「系統化追蹤」。",
    "examTip": "在 Azure ML v2 中，「作業 (Job)」是執行和追蹤訓練的基本單位。",
    "source": 2
  },
  {
    "id": 177,
    "category": "outline-2",
    "type": "single",
    "question": "Azure Machine Learning 設計工具可讓您建立機器學習模型，藉由：",
    "options": [
      "1. 在視覺效果畫布上新增與連結模組",
      "2. 自動執行一般資料準備工作",
      "3. 自動選取演算法以建置最精確的模型",
      "4. 使用 Code First 筆記本體驗"
    ],
    "subQuestions": null,
    "answer": "1. 在視覺效果畫布上新增與連結模組",
    "rationale": "這正是 Azure Machine Learning 設計工具 (Designer) 的核心定義。它提供一個視覺化畫布，使用者可以透過拖放和連結模組的方式來建構機器學習管線。選項 2 和 3 是自動化 ML (AutoML) 的特性。選項 4 是指使用 Notebooks。",
    "examTip": "設計工具 = 拖放 + 連結模組 + 畫布。",
    "source": 2
  },
  {
    "id": 178,
    "category": "outline-2",
    "type": "single",
    "question": "您使用自動化機器學習使用者介面 (UI) 建置機器學習模型。您必須確保此模型符合 Microsoft 責任 AI 的透明度準則。試問您應該如何做？",
    "options": [
      "1. 將並行反覆運算上限設為 [0]。",
      "2. 啟用最佳解釋模型。",
      "3. 將驗證類型設為 [自動]。",
      "4. 將主要計量設為 [精確度]。"
    ],
    "subQuestions": null,
    "answer": "2. 啟用最佳解釋模型。",
    "rationale": "透明度 (Transparency) 原則的一個關鍵實踐是可解釋性 (Explainability)。在自動化 ML 的設定中，您可以勾選「啟用最佳解釋模型 (Enable explain best model)」選項。當 AutoML 作業完成後，它會為效能最佳的模型產生一個解釋儀表板，顯示哪些特徵對預測的影響最大，從而提高模型的透明度。",
    "examTip": "透明度 -> 解釋性。在 AutoML 中，這對應到「解釋模型」這個選項。",
    "source": 2
  },
  {
    "id": 179,
    "category": "outline-2",
    "type": "single",
    "question": "請問您應該採取什麼措施以減少機器學習分類模型所產生的誤判為真之數目？",
    "options": [
      "1. 增加定型反覆運算的數目。",
      "2. 修改有利於錯誤否定的閾值。",
      "3. 修改有利於誤判為真的閾值。",
      "4. 在定型資料中納入測試資料。"
    ],
    "subQuestions": null,
    "answer": "3. 修改有利於誤判為真的閾值。",
    "rationale": "在分類模型中，誤判為真 (False Positive) 是指模型將負例錯誤地預測為正例。模型的預測通常基於一個機率分數和一個閾值 (Threshold)。要減少誤判為真，我們需要變得「更嚴格」，也就是提高閾值。例如，將原本 0.5 的閾值提高到 0.8，這樣只有機率非常高的樣本才會被預測為正例，從而減少了誤判為真的數量（但可能會增加漏判，即偽陰性）。因此，正確的做法是「修改有利於誤判為真的閾值」。",
    "examTip": "想減少誤判（把不是的當成是的），就要把標準提高（提高閾值）。想減少漏判（把是的當成不是的），就要把標準放寬（降低閾值）。",
    "source": 2
  },
  {
    "id": 180,
    "category": "outline-2",
    "type": "single",
    "question": "您想要使用 Azure Machine Learning 工作室與自動化機器學習 (自動化 ML)，建置一個模型並加以訓練？您應先建立下列哪一項？",
    "options": [
      "1. Jupyter Notebook",
      "2. 已註冊的資料集",
      "3. Machine Learning 工作區",
      "4. Machine Learning 設計工具管線"
    ],
    "subQuestions": null,
    "answer": "3. Machine Learning 工作區",
    "rationale": "Azure Machine Learning 工作區是 Azure 上進行所有機器學習活動的頂層資源和基礎容器。無論您是想使用自動化 ML、設計工具、Notebooks 或是 SDK，都必須先建立一個工作區。工作區會集中管理您所有的資產，如資料集、計算資源、模型、實驗等。",
    "examTip": "在 Azure ML 中，一切始於工作區 (Workspace)。它是所有 ML 活動的家。",
    "source": 2
  },
  {
    "id": 181,
    "category": "outline-3",
    "type": "single",
    "question": "您要籌辦一場慈善活動，其內容包含在 Twitter 上發佈人們帶著墨鏡的相片。您需要確保只轉推符合下列要求的相片：包含一或多張臉部、包含至少一名戴著墨鏡的人。您應該使用下列何者來分析影像？",
    "options": [
      "1. Azure AI 電腦視覺服務中的 [描述影像] 作業",
      "2. 臉部服務中的 [偵測] 作業",
      "3. Azure AI 電腦視覺服務中的 [分析影像] 作業",
      "4. 臉部服務中的 [驗證] 作業"
    ],
    "subQuestions": null,
    "answer": "2. 臉部服務中的 [偵測] 作業",
    "rationale": "本題的需求是「偵測臉部」以及臉部的「屬性」（是否戴墨鏡）。Azure AI 臉部服務的偵測 (Detect)作業正是專門用於這個目的。它不僅可以定位影像中的臉部，還能回傳多種臉部屬性，包括是否戴眼鏡（如太陽眼鏡）、情緒、年齡、頭部姿勢等。雖然 Azure AI 電腦視覺服務的 [分析影像] 作業也能偵測臉部，但臉部服務能提供更詳細且專業的臉部屬性資訊，特別適合本題需求。",
    "examTip": "當題目強調「臉部」及其「屬性」（如是否戴眼鏡、情緒、年齡等）時，首選 臉部服務 的 [偵測] 作業。",
    "source": 2
  },
  {
    "id": 182,
    "category": "outline-2",
    "type": "single",
    "question": "您需要使用 Azure 機器學習設計工具建置一個能預測單車價格的模型。請問圖 A、B、C 中應該使用哪種模組類型來完成此模型？[註：此題附有一張流程圖，A 指向資料集，B 在分割資料之後，C 在訓練模型之後。] 模組 (Module) 1. 轉換為 CSV 2. K 均值叢集 3. 線性迴歸 4. 選取資料集中的資料行 5. 分割資料 6. 評分模型 位置 (Location) A (指向資料集) B (在分割資料之後) C (在訓練模型之後)",
    "options": [
      "A. 分類",
      "B. A. (4. 選取資料集中的資料行) B. (3. 線性迴歸) C. (6. 評分模型) (注意：原始答案 B-5, C-6 有誤，已根據標準流程修正)",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "B. A. (4. 選取資料集中的資料行) B. (3. 線性迴歸) C. (6. 評分模型) (注意：原始答案 B-5, C-6 有誤，已根據標準流程修正)",
    "rationale": "一個標準的 Azure ML 設計工具迴歸模型流程如下： 載入資料集。 A: 選取資料集中的資料行：選擇用於訓練的特徵和標籤，去除不必要的欄位。 分割資料 (Split Data)：將資料分成訓練集和測試集。 B: 線性迴歸 (或其他迴歸演算法)：選擇要使用的學習演算法。 訓練模型 (Train Model)：將演算法和訓練集連接起來進行訓練。 C: 評分模型 (Score Model)：使用訓練好的模型對測試集進行預測。 評估模型 (Evaluate Model)：比較預測結果和真實標籤，評估模型效能。 原始答案 B-5 (分割資料) 有誤，因為圖中 B 的位置是在分割資料之後。",
    "examTip": "務必記住 Azure ML 設計工具的標準流程：資料準備 -> 分割 -> 選演算法 -> 訓練 -> 評分 -> 評估。",
    "source": 2
  },
  {
    "id": 183,
    "category": "outline-1",
    "type": "single",
    "question": "您使用自動化機器學習使用者介面 (UI) 建置機器學習模型。您必須確保此模型符合 Microsoft 責任 AI 的透明度準則。試問您應該如何做？",
    "options": [
      "1. 解釋模型。",
      "2. 註冊模型。",
      "3. 佈建推斷叢集。",
      "4. 註冊訓練資料。"
    ],
    "subQuestions": null,
    "answer": "1. 解釋模型。",
    "rationale": "透明度 (Transparency) 的一個核心是可解釋性 (Explainability)，即理解模型為何做出特定預測。在自動化 ML 中，您可以啟用「解釋最佳模型」的選項。這會產生一個儀表板，顯示特徵的重要性等資訊，幫助您了解模型的內部運作方式，從而符合透明度準則。",
    "examTip": "透明度 = 可解釋性。在 AutoML 中，這對應到「解釋模型」或「特徵重要性」的功能。",
    "source": 2
  },
  {
    "id": 184,
    "category": "outline-3",
    "type": "single",
    "question": "您需要為社交媒體建置影像標記解決方案，以便自動標記朋友的影像。您應該使用哪一個 Azure AI 服務？",
    "options": [
      "1. 臉部",
      "2. Azure AI 文件智慧服務",
      "3. Azure AI 電腦視覺",
      "4. Azure AI 語言"
    ],
    "subQuestions": null,
    "answer": "1. 臉部",
    "rationale": "「自動標記朋友」的任務，其核心是識別 (Identify) 影像中的臉部是誰。這是一個典型的 1:N (一對多) 比對，將影像中的臉部與一個已註冊的人員群組進行比對。這項功能由專門的 Azure AI 臉部服務提供。",
    "examTip": "需要辨識「這個人是誰？」時，使用臉部服務的「識別」功能。",
    "source": 2
  },
  {
    "id": 185,
    "category": "outline-3",
    "type": "single",
    "question": "下列何者用於在一個影像中識別多種項目。",
    "options": [
      "1. 影像分類",
      "2. 影像描述",
      "3. 物件偵測",
      "4. 光學字元辨識 (OCR)"
    ],
    "subQuestions": null,
    "answer": "3. 物件偵測",
    "rationale": "物件偵測 (Object Detection) 的任務不僅是識別影像中有哪些物件，還要找出它們在影像中的位置（通常用邊界方塊表示）。因此，它可以在一張影像中同時識別出「多個」不同或相同的項目，並標出它們各自的位置。影像分類只會給整個影像一個標籤。",
    "examTip": "分類 = 這張圖「是」什麼？ 物件偵測 = 這張圖裡「有」什麼，以及它們「在哪裡」？",
    "source": 2
  },
  {
    "id": 186,
    "category": "outline-3",
    "type": "single",
    "question": "下列何者可用於讀取輸送帶上的產品標籤。",
    "options": [
      "1. 影像分類",
      "2. 影像處理",
      "3. 物件偵測",
      "4. 光學字元辨識 (OCR)"
    ],
    "subQuestions": null,
    "answer": "4. 光學字元辨識 (OCR)",
    "rationale": "任務的核心是「讀取」產品「標籤」上的文字。從影像中讀取文字資訊，正是光學字元辨識 (Optical Character Recognition, OCR) 的功能。",
    "examTip": "看到「讀取文字」、「擷取文字」、「抄寫文字」從圖片或文件中，就是 OCR。",
    "source": 2
  },
  {
    "id": 187,
    "category": "outline-3",
    "type": "single",
    "question": "下列何項服務的功能可從手寫文件中擷取文字？",
    "options": [
      "1. 臉部辨識",
      "2. 物件偵測",
      "3. 光學字元辨識 (OCR)",
      "4. 影像分類"
    ],
    "subQuestions": null,
    "answer": "3. 光學字元辨識 (OCR)",
    "rationale": "與上一題類似，從「手寫文件」中「擷取文字」是光學字元辨識 (OCR) 的核心應用。Azure AI 視覺服務的 OCR 功能同時支援印刷體和手寫體。",
    "examTip": "OCR 不僅能讀印刷體，也能讀手寫體。",
    "source": 2
  },
  {
    "id": 188,
    "category": "outline-3",
    "type": "single",
    "question": "當您在處理馬拉松比賽的相片時，為辨識相片中的跑者身分，必須讀取跑者運動衫上的號碼。您應該使用哪種電腦視覺類型？",
    "options": [
      "1. 影像分類",
      "2. 物件偵測",
      "3. 光學字元辨識 (OCR)",
      "4. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "3. 光學字元辨識 (OCR)",
    "rationale": "任務的關鍵是「讀取」運動衫上的「號碼」（文字）。從影像中讀取文字/數字，正是光學字元辨識 (OCR) 的功能。雖然臉部辨識也可以識別跑者，但題目明確指出是透過讀取「號碼」來識別，因此 OCR 是最直接的答案。",
    "examTip": "仔細閱讀題目，找出執行的關鍵動作。這裡的動作是「讀取號碼」，而不是「辨識臉孔」。",
    "source": 2
  },
  {
    "id": 189,
    "category": "outline-3",
    "type": "single",
    "question": "請將電腦視覺工作負載類型與適當的案例配對。 工作負載類型 (Workload Type) 1. 影像分類 2. 物件偵測 3. 光學字元辨識 案例 (Scenario) A. 產生影像標題。 B. 擷取電影海報影像中的電影名稱。 C. 找到影像中的車輛。",
    "options": [
      "A. 迴歸",
      "B. 叢集",
      "C. 強化學習",
      "D. A. (1. 影像分類) B. (3. 光學字元辨識) C. (2. 物件偵測)"
    ],
    "subQuestions": null,
    "answer": "D. A. (1. 影像分類) B. (3. 光學字元辨識) C. (2. 物件偵測)",
    "rationale": "A. 產生影像標題（或描述）是Azure AI 視覺服務的一項功能，它綜合分析影像內容後給出一個整體的描述，概念上最接近對整個影像進行分類和理解。 B. 從電影海報中「擷取電影名稱」（文字），是典型的光學字元辨識 (OCR) 應用。 C. 「找到」影像中的車輛，不僅要識別出有車，還要標出其位置，這是物件偵測的任務。",
    "examTip": "這是對電腦視覺三大核心任務的經典考察。描述/標題 -> 分類；讀取文字 -> OCR；找東西+位置 -> 物件偵測。",
    "source": 2
  },
  {
    "id": 190,
    "category": "outline-3",
    "type": "yesno",
    "question": "下列各項敘述如果成立，請選取 [是]；否則請選取 [否]。",
    "options": null,
    "subQuestions": [
      {
        "text": "1. 物件偵測可以識別影像中受損產品的位置。",
        "answer": "是"
      },
      {
        "text": "2. 物件偵測可以識別影像中受損產品的多個實例。",
        "answer": "是"
      },
      {
        "text": "3. 物件偵測可以識別影像中多種類型的受損產品。",
        "answer": "否"
      }
    ],
    "answer": "答案 (根據題目來源)：1. 是2. 是3. 否(注意：第三題的答案可能有爭議，請參考解析)",
    "rationale": "1. 是。物件偵測的核心功能之一就是返回物件的位置（邊界方塊）。 2. 是。物件偵測可以在一張圖中找出同一類別的多個實例（例如，找出所有受損的產品）。 3. 否 (有爭議)。標準的物件偵測模型一次只能偵測一個類別（單類別分類器）。但是，使用自訂視覺服務時，您可以訓練一個多類別的物件偵測模型，該模型可以同時識別多種類型的物件（例如「刮傷的產品」和「凹陷的產品」）。題目的答案為「否」，可能是基於最基礎的單類別模型概念。",
    "examTip": "物件偵測的輸出 = 類別 + 位置 + 信賴度。它可以處理單張影像中的多個物件。對於多類別問題，雖然技術上可行，但考試題目可能基於簡化模型來提問。",
    "source": 2
  },
  {
    "id": 191,
    "category": "outline-3",
    "type": "single",
    "question": "下列哪一個範例是根據影片摘要計算某區域的動物數目？",
    "options": [
      "1. 預測",
      "2. 異常偵測",
      "3. 知識採礦",
      "4. 電腦視覺"
    ],
    "subQuestions": null,
    "answer": "4. 電腦視覺",
    "rationale": "任務是從「影片」中「計算動物數目」。這需要 AI 能夠「看懂」影片內容，識別出動物並進行計數。處理和理解視覺資訊（影像或影片）是電腦視覺工作負載的核心。這通常會使用物件偵測來完成。",
    "examTip": "只要任務涉及從影像或影片中提取資訊，答案幾乎總是電腦視覺。",
    "source": 2
  },
  {
    "id": 192,
    "category": "outline-3",
    "type": "single",
    "question": "您需要建置一個會識別影像中名人的應用程式。您應該使用哪一項服務？",
    "options": [
      "1. Azure OpenAI 服務",
      "2. Azure AI 視覺",
      "3. 交談語言理解 (CLU)",
      "4. Azure Machine Learning"
    ],
    "subQuestions": null,
    "answer": "2. Azure AI 視覺",
    "rationale": "Azure AI 視覺（舊稱電腦視覺）服務的影像分析功能中，包含一個網域特定模型，專門用於「識別名人」。您只需呼叫 API，它就能從影像中辨識出數千位全球知名的名人。",
    "examTip": "Azure AI 視覺服務內建了一些預訓練好的特定領域模型，如名人辨識和地標辨識，可以直接使用，無需自己訓練。",
    "source": 2
  },
  {
    "id": 193,
    "category": "outline-3",
    "type": "single",
    "question": "「判斷影像中汽車位置，並估計車與車之間的距離。」應該使用哪種電腦視覺類型？",
    "options": [
      "1. 臉部分析",
      "2. 物件偵測",
      "3. 影像分類",
      "4. 光學字元辨識"
    ],
    "subQuestions": null,
    "answer": "2. 物件偵測",
    "rationale": "任務要求「判斷汽車位置」，這正是物件偵測 (Object Detection) 的核心功能。物件偵測會回傳每個偵測到的物件（汽車）的類別和位置座標（邊界方塊）。有了這些座標，就可以進一步計算它們之間的距離。",
    "examTip": "需要知道物件「在哪裡」，就是物件偵測。",
    "source": 2
  },
  {
    "id": 194,
    "category": "outline-3",
    "type": "single",
    "question": "使用 Azure AI 電腦視覺可執行下列哪兩項工作？每個正確答案都是一個完整的解決方案。",
    "options": [
      "1. 將影像中的文字翻譯為不同語言。",
      "2. 辨識手寫文字。",
      "3. 訓練自訂影像分類模型。",
      "4. 偵測影像中臉部。"
    ],
    "subQuestions": null,
    "answer": "2, 4",
    "rationale": "Azure AI 電腦視覺 (現為 Azure AI 視覺) 是一個通用的視覺服務，其功能包括： 2. 辨識手寫文字：這是其 OCR 功能的一部分。 4. 偵測影像中臉部：這是其影像分析功能的一部分，可以返回臉部的位置。 選項 1 是一個兩步驟的過程：先用電腦視覺的 OCR 讀取文字，再用翻譯工具服務翻譯文字，單靠電腦視覺無法完成。選項 3 訓練「自訂」模型是 Azure AI 自訂視覺服務的工作。",
    "examTip": "區分通用服務和自訂服務：Azure AI 視覺提供「預訓練好的」通用能力；Azure AI 自訂視覺讓您用「自己的資料訓練」專屬模型。",
    "source": 2
  },
  {
    "id": 195,
    "category": "outline-3",
    "type": "single",
    "question": "您可以透過下列何項服務，使用自己的影像來定型物件偵測模型。",
    "options": [
      "1. Azure AI 電腦視覺",
      "2. Azure AI 自訂視覺服務",
      "3. Azure AI 文件智慧服務",
      "4. 媒體用影片分析器"
    ],
    "subQuestions": null,
    "answer": "2. Azure AI 自訂視覺服務",
    "rationale": "題目的關鍵字是「使用自己的影像」和「定型」。當需要使用自己的資料來訓練一個專門的視覺模型（無論是影像分類還是物件偵測）時，應該使用 Azure AI 自訂視覺 (Custom Vision) 服務。它提供了一個簡單的介面，讓您上傳、標記影像並訓練自己的模型。",
    "examTip": "看到「自訂」、「自己的影像」、「訓練特定物件」，就要想到自訂視覺 (Custom Vision)。",
    "source": 2
  },
  {
    "id": 196,
    "category": "outline-3",
    "type": "single",
    "question": "您的公司專門製造小工具。而您擁有 1,000 張小工具的數位相片。若您需要在這些相片中識別出小工具的位置，則您應該使用下列何者？",
    "options": [
      "1. Azure AI 電腦視覺空間分析",
      "2. Azure AI 自訂視覺物件偵測",
      "3. Azure AI 電腦視覺影像分析",
      "4. Azure AI 自訂視覺分類"
    ],
    "subQuestions": null,
    "answer": "2. Azure AI 自訂視覺物件偵測",
    "rationale": "這個場景有兩個關鍵點：1. 您的公司有自己「專門」的小工具，這意味著通用的視覺模型可能不認識它，需要用「自己的相片」來訓練。2. 您需要識別小工具的「位置」。結合這兩點，最適合的解決方案是使用 Azure AI 自訂視覺服務來訓練一個專門的物件偵測模型。",
    "examTip": "自訂的物件 + 需要位置 = 自訂視覺物件偵測。",
    "source": 2
  },
  {
    "id": 197,
    "category": "outline-3",
    "type": "single",
    "question": "您需要建置一個會識別影像中名人的應用程式。應該使用哪種電腦視覺工作負載類型？",
    "options": [
      "1. 臉部辨識",
      "2. 物件偵測",
      "3. 影像分類",
      "4. 光學字元辨識"
    ],
    "subQuestions": null,
    "answer": "1. 臉部辨識",
    "rationale": "「識別名人」是臉部辨識 (Face Recognition) 的一個特定應用。雖然 Azure AI 視覺服務本身提供了名人辨識功能，但從工作負載類型來看，這屬於臉部辨識的範疇，因為它需要分析臉部特徵並將其與已知的名人資料庫進行比對。",
    "examTip": "這題考察的是對工作負載的分類理解。識別「是誰」就是臉部辨識。",
    "source": 2
  },
  {
    "id": 198,
    "category": "outline-3",
    "type": "single",
    "question": "在下列哪兩種情況中可以使用 Azure AI 文件智慧服務？每個正確答案都是一個完整的解決方案。",
    "options": [
      "1. 從發票中擷取發票號碼",
      "2. 根據收據辨識零售商",
      "3. 在目錄中尋找產品影像",
      "4. 將表格從法文翻譯成英文"
    ],
    "subQuestions": null,
    "answer": "1, 2",
    "rationale": "Azure AI 文件智慧服務 (Document Intelligence) 專門用於從文件和表單中提取文字、鍵值對和表格結構。 1 & 2: 從發票或收據中提取特定欄位（如發票號碼、零售商名稱）是文件智慧服務的預建模型（如發票模型、收據模型）的核心功能。 選項 3 是影像搜尋或物件偵測的任務。選項 4 是翻譯任務，應使用翻譯工具服務。",
    "examTip": "看到「發票」、「收據」、「表單」、「W-2稅單」等標準化文件處理，就要想到文件智慧服務。",
    "source": 2
  },
  {
    "id": 199,
    "category": "outline-3",
    "type": "single",
    "question": "使用電腦視覺可執行下列哪兩項工作？每個正確答案都是一個完整的解決方案。",
    "options": [
      "1. 偵測影像中的色彩配置。",
      "2. 將文字翻譯為不同語言。",
      "3. 擷取關鍵詞組。",
      "4. 預測股票價格。",
      "5. 偵測影像中的商標。"
    ],
    "subQuestions": null,
    "answer": "1, 5",
    "rationale": "Azure AI 視覺的影像分析功能非常豐富，其中包括： 1. 色彩配置偵測：可以識別影像的主要色彩和輔助色彩。 5. 品牌偵測：可以從影像中識別出數千個全球知名品牌的商標。 選項 2 是翻譯任務，選項 3 是 NLP 任務，選項 4 是機器學習的迴歸任務。",
    "examTip": "除了物件偵測、OCR 等，也要了解電腦視覺還包含色彩分析、品牌偵測、影像類型判斷（如線條畫）等細分功能。",
    "source": 2
  },
  {
    "id": 200,
    "category": "outline-3",
    "type": "single",
    "question": "AI 解決方案可協助攝影師取得更佳人像相片，方法是提供下列哪一項臉部功能範例之曝光、雜訊與遮蔽的回饋。",
    "options": [
      "1. 分析",
      "2. 偵測",
      "3. 辨識"
    ],
    "subQuestions": null,
    "answer": "1. 分析",
    "rationale": "題目描述的「曝光、雜訊、遮蔽」等都屬於影像的「品質屬性」。臉部服務的偵測作業可以返回這些品質屬性，這個過程屬於對臉部影像的分析 (Analysis)。它不只是偵測到臉部的存在，更是深入分析其各種屬性以提供回饋。選項中的「分析」是最能概括這個過程的詞彙。",
    "examTip": "偵測(Detect)是找到它，辨識(Identify/Verify)是知道它是誰，分析(Analyze)是了解它的各種屬性。",
    "source": 2
  },
  {
    "id": 201,
    "category": "outline-3",
    "type": "single",
    "question": "哪一項 Azure AI 服務可用來找出包含敏感性資訊的文件？",
    "options": [
      "1. Azure AI 自訂視覺",
      "2. Azure AI 文件智慧服務",
      "3. 交談語言理解"
    ],
    "subQuestions": null,
    "answer": "3. 交談語言理解",
    "rationale": "交談語言理解服務提供了PII (個人識別資訊) 偵測功能，可以從文字內容中識別和標記出敏感資訊，如姓名、地址、社會安全號碼等。這個功能特別適合用於處理非結構化的文字內容，包括文件中的文字。",
    "examTip": "處理「文字」中的「敏感資訊/PII」，交談語言理解服務提供了專門的 PII 偵測功能，可以有效地識別和保護個人識別資訊。",
    "source": 2
  },
  {
    "id": 202,
    "category": "outline-3",
    "type": "single",
    "question": "下列哪項服務可用於擷取駕照上的資訊以填入資料庫中。",
    "options": [
      "1. Azure AI 電腦視覺",
      "2. 交談語言理解",
      "3. Azure AI 自訂視覺",
      "4. Azure AI 文件智慧服務"
    ],
    "subQuestions": null,
    "answer": "4. Azure AI 文件智慧服務",
    "rationale": "Azure AI 文件智慧服務提供了一個預建的識別文件 (ID) 模型，該模型專門用於從全球的護照和美國駕照等身份證件中提取關鍵資訊，如姓名、出生日期、證件號碼等。這比使用通用的 OCR 後再自己解析要高效和準確得多。",
    "examTip": "處理身份證件（駕照、護照） -> 文件智慧服務的預建 ID 模型。",
    "source": 2
  },
  {
    "id": 203,
    "category": "outline-3",
    "type": "single",
    "question": "您正在建置工具來處理零售商店的影像，使能夠識別競爭對手的產品。其解決方案是必須使用您公司提供的影像來定型。則您應該使用下列哪一項 Azure AI 服務？",
    "options": [
      "1. Azure AI 文件智慧服務",
      "2. Azure AI 電腦視覺",
      "3. 臉部",
      "4. Azure AI 自訂視覺"
    ],
    "subQuestions": null,
    "answer": "4. Azure AI 自訂視覺",
    "rationale": "關鍵字是「識別競爭對手的產品」（一個特定的、非通用的物件）和「必須使用您公司提供的影像來定型」。這清楚地表明需要一個自訂訓練的模型。在視覺領域，這項任務由 Azure AI 自訂視覺服務完成。",
    "examTip": "自訂物件 + 自有資料訓練 = 自訂視覺。",
    "source": 2
  },
  {
    "id": 204,
    "category": "outline-3",
    "type": "single",
    "question": "您需要建立一個模型，為個人數位相片加上標籤。您應該使用哪一項 Azure AI 服務？",
    "options": [
      "1. Azure AI 電腦視覺",
      "2. Azure AI 自訂視覺",
      "3. Azure AI 文件智慧服務",
      "4. Azure AI 語言"
    ],
    "subQuestions": null,
    "answer": "1. Azure AI 電腦視覺",
    "rationale": "為相片「加上標籤」(Tagging) 是 Azure AI 電腦視覺（現為 Azure AI 視覺）的一項核心功能。其影像分析 API 可以識別影像中的數千個可辨識物件、生物、風景和動作，並返回這些標籤。因為是處理通用的「個人數位相片」，使用預訓練好的通用模型是最高效的方式。",
    "examTip": "為一般照片自動生成描述性標籤（如 \"天空\", \"建築\", \"狗\"），使用通用的 Azure AI 視覺服務。",
    "source": 2
  },
  {
    "id": 205,
    "category": "outline-3",
    "type": "single",
    "question": "您需要建置一個會建立影像描述的應用程式。您應該使用哪一項服務？",
    "options": [
      "1. Azure OpenAI 服務",
      "2. Azure AI 視覺",
      "3. 交談語言理解 (CLU)",
      "4. Azure Machine Learning"
    ],
    "subQuestions": null,
    "answer": "2. Azure AI 視覺",
    "rationale": "「建立影像描述」（也稱為影像標題生成, Image Captioning）是 Azure AI 視覺服務的一項標準功能。它能分析影像內容並生成一句通順的人類可讀句子來描述影像。雖然 Azure OpenAI 的多模態模型也能做到，但在 AI-900 的範疇內，這項經典功能通常歸屬於 Azure AI 視覺服務。",
    "examTip": "為圖片生成一句話的描述 -> 影像描述/標題生成 (Image Captioning)，由 Azure AI 視覺提供。",
    "source": 2
  },
  {
    "id": 206,
    "category": "outline-3",
    "type": "single",
    "question": "電腦視覺功能可部署來？",
    "options": [
      "1. 為網站部署文字聊天機器人。",
      "2. 識別線上商店的異常客戶行為。",
      "3. 將臉部辨識功能整合到應用程式。",
      "4. 建議對內送電子郵件的自動化回覆。"
    ],
    "subQuestions": null,
    "answer": "3. 將臉部辨識功能整合到應用程式。",
    "rationale": "臉部辨識是電腦視覺領域的一個重要分支。Azure 提供的臉部服務就是一種電腦視覺功能，可以輕易地整合到應用程式中。 1 & 4: 是自然語言處理 (NLP) 的任務。 2: 是異常偵測的任務。",
    "examTip": "臉部辨識、物件偵測、OCR 都是電腦視覺的具體應用。",
    "source": 2
  },
  {
    "id": 207,
    "category": "outline-3",
    "type": "single",
    "question": "使用 Azure AI 文件智慧服務中預建收據模型可以處理影像大小上限為何？",
    "options": [
      "1. 5MB",
      "2. 10 MB",
      "3. 50 MB",
      "4. 100 MB"
    ],
    "subQuestions": null,
    "answer": "3. 50 MB",
    "rationale": "根據 Microsoft 的官方文件，Azure AI 文件智慧服務的輸入要求之一是，對於付費 (S0) 層，檔案大小必須小於 50 MB。對於免費 (F0) 層，檔案大小限制為 4 MB。題目沒有特別指明層級，但 50 MB 是該服務支援的上限。",
    "examTip": "雖然具體的數字限制在考試中較少出現，但了解服務的基本限制（如檔案大小、影像尺寸）有助於建立完整的知識體系。記住 50MB 這個常見的上限。",
    "source": 2
  },
  {
    "id": 208,
    "category": "outline-3",
    "type": "single",
    "question": "您應該使用下列哪種服務，從已掃描的檔中自動識取文字、索引鍵/值組以及資料表資料？",
    "options": [
      "A. 表格辨識器 (Form Recognizer / Document Intelligence)",
      "B. 文字分析",
      "C. 自訂視覺",
      "D. Language Understanding (LUIS)"
    ],
    "subQuestions": null,
    "answer": "A. 表格辨識器 (Form Recognizer / Document Intelligence)",
    "rationale": "從已掃描的檔中自動識別和提取文字、索引鍵/值組（例如表單欄位及其對應的值）以及表格資料，是 Azure AI 文件智慧（先前稱為表格辨識器）服務的核心功能。此服務專門用於處理各種文件類型，並將其內容轉換為結構化資料。 B. 文字分析（現為 Azure AI Language 的一部分）專注於理解文本的語義，如情感分析、實體辨識等，但不直接處理文件的版面配置和表格結構。 C. 自訂視覺用於影像分類和物件偵測。 D. Language Understanding (LUIS)（現為 CLU 的一部分）用於理解使用者意圖。",
    "examTip": "當任務涉及從掃描的文件、表單或包含表格的影像中提取結構化或半結構化資訊時，Azure AI 文件智慧（表格辨識器）是首選服務。",
    "source": 3
  },
  {
    "id": 209,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 根據 Microsoft 責任 AI 的 公平性 (Fairness) 準則，AI 系統不應反映用於為訓練系統的資料集偏差。",
    "options": [
      "A. 公平性 (Fairness)",
      "B. 可靠性與安全性",
      "C. 隱私權與安全性",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "A. 公平性 (Fairness)",
    "rationale": "Microsoft 負責任 AI 的公平性 (Fairness) 原則強調 AI 系統應該公平對待所有人，避免基於各種特徵（如性別、種族、年齡等）產生有偏見的結果。如果用於訓練 AI 系統的資料集本身就存在偏差（例如，某些群體的代表性不足或過度代表），那麼模型在學習過程中很可能會放大這些偏差，導致不公平的預測或決策。因此，確保 AI 系統不反映訓練資料中的偏差是實現公平性的重要方面。",
    "examTip": "資料偏差是導致 AI 系統不公平的主要原因之一。在負責任 AI 的公平性原則下，識別和緩解資料偏差至關重要。",
    "source": 3
  },
  {
    "id": 210,
    "category": "outline-1",
    "type": "single",
    "question": "您可以使用 Azure OpenAI 生成式 AI 應用程式產生哪兩種類型的內容？每個正確答案都呈現一個完整的解決方案。 注意：每個正確答案可得一分。",
    "options": [
      "A. 文字 (Text)",
      "B. 影片",
      "C. 影像 (Image)",
      "D. 音訊"
    ],
    "subQuestions": null,
    "answer": "A 和 C A. 文字 (Text) C. 影像 (Image)",
    "rationale": "Azure OpenAI 服務目前主要提供以下幾種類型的生成式 AI 模型： 文本生成模型 (如 GPT 系列)： 用於生成各種文字內容，如文章、摘要、程式碼、對話等。 影像生成模型 (如 DALL-E)： 用於根據文字提示生成影像。 雖然未來可能會擴展到影片和音訊生成，但目前 Azure OpenAI 服務的核心生成能力集中在文字和影像。",
    "examTip": "記住 Azure OpenAI 目前主要支援的生成內容類型是文字和影像。",
    "source": 3
  },
  {
    "id": 211,
    "category": "outline-1",
    "type": "single",
    "question": "您部署了 Foundry 模型中的 Azure OpenAI 以產生影像。您需要確保該服務會提供最高等級的保護能力，防範有害內容。您應該採取什麼措施？",
    "options": [
      "A. 設定內容篩選設定",
      "B. 自訂大型語言模型 (LLM)",
      "C. 變更 Azure OpenAI 服務使用的模型",
      "D. 設定系統提示"
    ],
    "subQuestions": null,
    "answer": "A. 設定內容篩選設定",
    "rationale": "Azure OpenAI 服務提供內容篩選功能，這是專門設計來防範有害內容的安全機制。內容篩選可以： 檢測和阻止有害、不當或違反政策的內容生成 提供多個嚴格程度的篩選級別 針對不同類型的有害內容（如暴力、仇恨言論等）進行分類篩選 在影像生成中特別重要，可防止生成不當圖像 其他選項的說明： B. 自訂 LLM 主要用於改善模型性能，而非安全防護 C. 變更模型可能影響功能，但不是專門的安全措施 D. 系統提示可以引導行為，但不如內容篩選來得全面和可靠",
    "examTip": "當題目涉及「防範有害內容」、「安全防護」時，內容篩選是 Azure OpenAI 的核心安全功能。",
    "source": 3
  },
  {
    "id": 212,
    "category": "outline-2",
    "type": "single",
    "question": "請問您應該使用哪種 Azure Machine Learning 功能來快速建置及部署預測模型，而無需進行大量編碼？",
    "options": [
      "A. Copilot",
      "B. ML 管線",
      "C. DALL-E",
      "D. 自動化機器學習 (自動 ML)"
    ],
    "subQuestions": null,
    "answer": "D. 自動化機器學習 (自動 ML)",
    "rationale": "自動化機器學習 (AutoML) 是 Azure Machine Learning 的核心功能，專門設計來讓使用者無需大量編碼就能建置和部署機器學習模型。AutoML 的特點包括： 自動選擇最佳的演算法和超參數 自動進行特徵工程和資料預處理 提供視覺化介面，降低技術門檻 自動評估多個模型並選擇最佳性能的模型 支援分類、迴歸和時間序列預測等多種任務 其他選項的說明： A. Copilot 是程式碼輔助工具，但仍需要編碼知識 B. ML 管線用於工作流程管理，但需要編程技能 C. DALL-E 是影像生成模型，與預測模型建置無關",
    "examTip": "當題目強調「無需大量編碼」、「快速建置模型」時，自動化機器學習 (AutoML) 是首選答案。",
    "source": 3
  },
  {
    "id": 213,
    "category": "outline-2",
    "type": "single",
    "question": "評估模型效能時，使用 0 和 1 值的網格顯示預測和實際的正負值。 [下拉選單，可見選項：AUC 計量、混淆矩陣、ROC 曲線、閾值]",
    "options": [
      "A. 混淆矩陣",
      "B. 準確度",
      "C. 精確度",
      "D. 召回率"
    ],
    "subQuestions": null,
    "answer": "A. 混淆矩陣",
    "rationale": "混淆矩陣 (Confusion Matrix) 是一個使用 0 和 1 值的網格，用來顯示分類模型的預測結果與實際結果的對比。混淆矩陣的結構： 真正例 (True Positive, TP)：正確預測為正例 真負例 (True Negative, TN)：正確預測為負例 偽正例 (False Positive, FP)：錯誤預測為正例 偽負例 (False Negative, FN)：錯誤預測為負例 其他選項的說明： AUC 計量：是一個數值，不是網格 ROC 曲線：是一條曲線圖，不是網格 閾值：是一個數值參數，不是網格",
    "examTip": "當題目提到「網格」、「0 和 1 值」、「預測和實際對比」時，答案就是混淆矩陣。",
    "source": 3
  },
  {
    "id": 214,
    "category": "outline-2",
    "type": "single",
    "question": "下列哪一項是機器學習中迴歸模型的範例？",
    "options": [
      "A. 透過檢查使用者標記的大量電子郵件來識別垃圾郵件的子類型",
      "B. 根據歷史資料、房屋大小和房屋的臥室數目預測房屋的銷售價格",
      "C. 根據學生的年齡及其教育成就資料集中學生的資料",
      "D. 透過分析影像來識別瀕危動物的數量"
    ],
    "subQuestions": null,
    "answer": "B. 根據歷史資料、房屋大小和房屋的臥室數目預測房屋的銷售價格",
    "rationale": "迴歸 (Regression) 是一種監督式學習，用於預測連續數值。房屋價格預測是典型的迴歸問題，因為： 目標變數（房屋價格）是連續的數值 使用多個特徵（房屋大小、臥室數目等）來預測 基於歷史資料進行訓練 其他選項的分析： A. 識別垃圾郵件子類型 → 分類問題（離散類別） C. 學生資料分析 → 描述不清楚，但不是明確的迴歸任務 D. 識別瀕危動物數量 → 可能是物件偵測或計數問題",
    "examTip": "迴歸問題的關鍵特徵：預測連續數值（如價格、溫度、銷量等）。",
    "source": 3
  },
  {
    "id": 215,
    "category": "outline-2",
    "type": "single",
    "question": "請問下列哪一項是不受監督機器學習的形式？",
    "options": [
      "A. 迴歸",
      "B. 二元分類",
      "C. 叢集",
      "D. 多類別分類"
    ],
    "subQuestions": null,
    "answer": "C. 叢集",
    "rationale": "不受監督學習 (Unsupervised Learning) 是指在沒有標籤資料的情況下進行學習。各選項的分類： A. 迴歸：監督式學習 - 需要標籤資料來預測連續數值 B. 二元分類：監督式學習 - 需要標籤資料來分類為兩個類別 C. 叢集：不受監督學習 - 不需要標籤，自動發現資料中的群組 D. 多類別分類：監督式學習 - 需要標籤資料來分類為多個類別 因此，C（叢集）是不受監督學習的形式。",
    "examTip": "記住：監督式學習需要標籤資料（分類、迴歸），不受監督學習不需要標籤（叢集、降維）。",
    "source": 3
  },
  {
    "id": 216,
    "category": "outline-3",
    "type": "single",
    "question": "哪一項 Azure 服務可以使用 Azure AI 文件智慧服務中的預建模型？",
    "options": [
      "A. Azure Machine Learning",
      "B. Azure AI 視覺",
      "C. Azure AI Foundry 服務",
      "D. Azure AI 自訂視覺"
    ],
    "subQuestions": null,
    "answer": "C. Azure AI Foundry 服務",
    "rationale": "Azure AI Foundry 是一個統合平台，可以整合和使用多種 Azure AI 服務的預建模型，包括： Azure AI 文件智慧服務的預建模型 其他 Azure AI 服務的模型 提供統一的介面來管理和部署這些模型 其他選項的說明： A. Azure Machine Learning 主要用於自訂模型開發 B. Azure AI 視覺是獨立的電腦視覺服務 D. Azure AI 自訂視覺專注於自訂影像分類和物件偵測",
    "examTip": "Azure AI Foundry 是整合多種 AI 服務的統合平台，可以使用各種預建模型。",
    "source": 3
  },
  {
    "id": 217,
    "category": "outline-1",
    "type": "single",
    "question": "以下何者是 Microsoft 負責任 AI 準則的範例？",
    "options": [
      "A. AI 系統應該保障開發人員的利益",
      "B. AI 系統應該使用單獨模型",
      "C. AI 系統應該公平待人",
      "D. AI 系統不應該透露其設計細節"
    ],
    "subQuestions": null,
    "answer": "C. AI 系統應該公平待人",
    "rationale": "Microsoft 負責任 AI 的六大核心準則包括： 公平性 (Fairness)：AI 系統應該公平對待所有人 可靠性和安全性 (Reliability & Safety)：AI 系統應該可靠且安全地運作 隱私權和安全性 (Privacy & Security)：AI 系統應該保護隱私和資料安全 包容性 (Inclusiveness)：AI 系統應該讓每個人都能受益 透明度 (Transparency)：AI 系統應該是可理解的 責任 (Accountability)：人們應該對 AI 系統負責 其他選項的問題： A. 只保障開發人員利益違反了包容性原則 B. 使用單獨模型不是負責任 AI 的核心準則 D. 不透露設計細節違反了透明度原則",
    "examTip": "記住 Microsoft 負責任 AI 的六大準則：公平、可靠、隱私、包容、透明、責任。",
    "source": 3
  },
  {
    "id": 218,
    "category": "outline-3",
    "type": "single",
    "question": "請問您應該使用下列哪一項，從合約的掃描影像中擷取詳細資料？",
    "options": [
      "A. Azure AI 沉浸式閱讀程式",
      "B. Azure OpenAI",
      "C. Azure AI 文件智慧服務",
      "D. Azure AI 搜尋服務"
    ],
    "subQuestions": null,
    "answer": "C. Azure AI 文件智慧服務",
    "rationale": "Azure AI 文件智慧服務（前身為 Form Recognizer）專門設計用於從掃描文件和影像中擷取結構化資訊，特別適合處理合約等複雜文件： 光學字元辨識 (OCR) 功能 表格和表單資料擷取 鍵值對識別 預建模型支援各種文件類型 自訂模型訓練能力 其他選項的說明： A. 沉浸式閱讀程式主要用於閱讀輔助，不是資料擷取 B. Azure OpenAI 是生成式 AI 服務，不專門處理文件擷取 D. Azure AI 搜尋服務用於搜尋和索引，不是文件資料擷取",
    "examTip": "當題目涉及從掃描文件、表單、合約中擷取資料時，答案通常是文件智慧服務。",
    "source": 3
  },
  {
    "id": 219,
    "category": "outline-2",
    "type": "single",
    "question": "您需要預測某個區域內特定動物種類的族群規模。您應該使用下列哪一種 Azure Machine Learning 類型？",
    "options": [
      "A. 分類",
      "B. 叢集",
      "C. 迴歸"
    ],
    "subQuestions": null,
    "answer": "C. 迴歸",
    "rationale": "預測動物族群規模是一個迴歸問題，因為： 目標變數（族群規模）是連續數值 需要預測具體的數量（如 1000 隻、1500 隻等） 可以使用歷史資料、環境因素等特徵來建立預測模型 其他選項的說明： A. 分類：用於預測離散類別（如「多」、「中」、「少」），不適合預測具體數量 B. 叢集：是不受監督學習，用於發現資料中的群組，不適合數值預測",
    "examTip": "當題目要求預測數量、價格、溫度等連續數值時，選擇迴歸。",
    "source": 3
  },
  {
    "id": 220,
    "category": "outline-1",
    "type": "single",
    "question": "在使用生成式 AI 的聊天解決方案中實作篩選以封鎖有害內容是 [下拉選單，可見選項：權責性、公平性、隱私權和安全性、透明度] Microsoft 負責任 AI 準則的範例。",
    "options": [
      "A. 公平性",
      "B. 透明度",
      "C. 隱私權和安全性",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "C. 隱私權和安全性",
    "rationale": "實作篩選以封鎖有害內容主要屬於隱私權和安全性 (Privacy & Security) 準則，因為： 保護使用者免受有害內容的影響 確保 AI 系統的安全運作 防止生成不當或危險的內容 維護使用者和社會的安全 其他選項的說明： 權責性：主要關注對 AI 系統決策的責任歸屬 公平性：主要關注避免偏見和歧視 透明度：主要關注 AI 系統的可解釋性",
    "examTip": "當題目涉及內容篩選、有害內容防護、安全措施時，通常屬於隱私權和安全性準則。",
    "source": 3
  },
  {
    "id": 221,
    "category": "outline-1",
    "type": "single",
    "question": "您可以修改 [下拉選單，可見選項：熱度、回應上限、停止序列、溫度] 參數，以透過使用 Azure OpenAI GPT-3.5 模型聊天解決方案產生更具確定性的回應。",
    "options": [
      "A. 學習率",
      "B. 溫度",
      "C. 批次大小",
      "D. 迭代次數"
    ],
    "subQuestions": null,
    "answer": "B. 溫度",
    "rationale": "溫度 (Temperature) 參數控制 AI 模型回應的隨機性和創造性： 低溫度值（接近 0）：產生更確定性、一致性的回應 高溫度值（接近 1）：產生更隨機、創造性的回應 要獲得更具確定性的回應，應該降低溫度值 其他參數的說明： 熱度：不是標準的 GPT 參數 回應上限 (Max Tokens)：控制回應長度，不影響確定性 停止序列 (Stop Sequences)：控制何時停止生成，不影響確定性",
    "examTip": "記住：溫度低 = 確定性高，溫度高 = 創造性高。",
    "source": 3
  },
  {
    "id": 222,
    "category": "outline-1",
    "type": "single",
    "question": "請問您該怎麼做，才能確保 Azure OpenAI 模型會包含最近事件的準確回應？",
    "options": [
      "A. 新增訓練資料",
      "B. 修改系統訊息",
      "C. 新增小樣本學習",
      "D. 新增基礎知識資料"
    ],
    "subQuestions": null,
    "answer": "D. 新增基礎知識資料",
    "rationale": "要讓 Azure OpenAI 模型包含最近事件的準確資訊，最有效的方法是新增基礎知識資料 (Grounding Data)，這通常透過以下技術實現： RAG (Retrieval-Augmented Generation)：結合外部知識庫 向量搜尋：即時檢索相關的最新資訊 知識庫整合：連接到包含最新資訊的資料源 其他選項的限制： A. 新增訓練資料：需要重新訓練模型，成本高且不實際 B. 修改系統訊息：無法提供具體的最新事件資訊 C. 小樣本學習：主要用於改善特定任務表現，不適合更新知識",
    "examTip": "當需要最新資訊或即時資料時，答案通常是基礎知識資料或 RAG。",
    "source": 3
  },
  {
    "id": 223,
    "category": "outline-1",
    "type": "single",
    "question": "[下拉選單，可見選項：內嵌、注意力、完成度、轉換器] 是指在大型語言模型 (LLM) 中指派給每個字詞或權重的多維度向量。",
    "options": [
      "A. 分類標籤",
      "B. 特徵值",
      "C. 超參數",
      "D. 內嵌"
    ],
    "subQuestions": null,
    "answer": "D. 內嵌",
    "rationale": "內嵌 (Embeddings) 是指在大型語言模型中，將每個字詞、詞彙或 token 轉換為多維度向量的技術： 將文字轉換為數值向量，讓機器能夠處理 相似意義的詞彙在向量空間中會比較接近 通常是高維度的向量（如 512、768、1024 維等） 是 LLM 理解和處理語言的基礎 其他選項的說明： 注意力 (Attention)：是一種機制，用於決定模型應該關注輸入的哪些部分 完成度 (Completion)：指模型生成文字的過程或結果 轉換器 (Transformer)：是一種神經網路架構",
    "examTip": "當題目提到多維度向量、字詞表示時，答案通常是內嵌 (Embeddings)。",
    "source": 3
  },
  {
    "id": 224,
    "category": "outline-4",
    "type": "single",
    "question": "下列哪兩個案例是自然語言處理工作負載範例？每個正確答案都呈現一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 自動將車前燈插入汽車的生產線機械",
      "B. 監控機器溫度，以在溫度達到特定閾值時打開風扇",
      "C. 使用知識庫以互動方式回答使用者問題的網站",
      "D. 可以回答諸如「今天天氣如何？」等問題的家用智慧型裝置"
    ],
    "subQuestions": null,
    "answer": "C 和 D C. 使用知識庫以互動方式回答使用者問題的網站 D. 可以回答諸如「今天天氣如何？」等問題的家用智慧型裝置",
    "rationale": "自然語言處理 (NLP) 工作負載涉及理解、處理和生成人類語言： C. 互動式問答網站：需要理解使用者的自然語言問題，並從知識庫中找到相關答案 D. 智慧型裝置語音助理：需要語音識別、自然語言理解和語音合成 不是 NLP 工作負載的選項： A. 汽車生產線機械：屬於工業自動化，不涉及語言處理 B. 溫度監控系統：屬於感測器監控，不涉及語言處理",
    "examTip": "NLP 工作負載的關鍵特徵：涉及文字理解、語音處理、對話互動。",
    "source": 3
  },
  {
    "id": 225,
    "category": "outline-4",
    "type": "single",
    "question": "請問哪一個 Azure OpenAI 模型可用於語音辨識任務？",
    "options": [
      "A. microsoft-swinv2-base-patch4-window12-192-22k",
      "B. Whisper",
      "C. DALL-E",
      "D. GPT-4-32k"
    ],
    "subQuestions": null,
    "answer": "B. Whisper",
    "rationale": "Whisper 是 Azure OpenAI 服務中專門用於語音辨識 (Speech-to-Text) 的模型： 可以將語音轉換為文字 支援多種語言 具有高準確度的語音識別能力 可以處理各種音訊格式 其他模型的用途： A. microsoft-swinv2：電腦視覺模型，用於影像處理 C. DALL-E：影像生成模型 D. GPT-4-32k：文字生成和理解模型",
    "examTip": "記住：Whisper = 語音辨識，DALL-E = 影像生成，GPT = 文字處理。",
    "source": 3
  },
  {
    "id": 226,
    "category": "outline-1",
    "type": "single",
    "question": "請將 AI 工作負載與其適用的工作配對。 說明：作答時，請將左側每個工作負載拖曳至右側的工作需求。每個工作負載會正確配對一項工作，每項工作負載僅可使用一次，完全配對才得分。 AI 工作負載 A. Azure AI 文件智慧擷取服務 B. 電腦視覺 C. 生成式 AI D. 知識探索 作答配對說明 擷取檔案格式及欄位資料 辨識來自多種檔案格式之圖像及可視資料的資訊 傳回撰寫完整段落文字的回應 擷取與主題最相關的資料",
    "options": [
      "A. 1. - 擷取檔案格式及欄位資料(A. Azure AI 文件智慧擷取服務) 2. - 辨識來自多種檔案格式之圖像及可視資料的資訊(B. 電腦視覺) 3. - 傳回撰寫完整段落文字的回應(C. 生成式 AI) 4. - 擷取與主題最相關的資料(D. 知識探索)",
      "B. 影像分類 (Image Classification)",
      "C. Azure AI 臉部服務 (Face Service)",
      "D. Azure OpenAI Service"
    ],
    "subQuestions": null,
    "answer": "A. 1. - 擷取檔案格式及欄位資料(A. Azure AI 文件智慧擷取服務) 2. - 辨識來自多種檔案格式之圖像及可視資料的資訊(B. 電腦視覺) 3. - 傳回撰寫完整段落文字的回應(C. 生成式 AI) 4. - 擷取與主題最相關的資料(D. 知識探索)",
    "rationale": "各 AI 工作負載的核心功能： Azure AI 文件智慧擷取服務：專門從文件中擷取結構化資料，如表單欄位、表格等 電腦視覺：分析和理解影像內容，識別物件、文字、場景等 生成式 AI：根據提示生成新內容，如文字、程式碼等 知識探索：從大量資料中搜尋和擷取相關資訊",
    "examTip": "記住各 AI 服務的核心用途：文件智慧→結構化擷取，電腦視覺→影像分析，生成式AI→內容創建，知識探索→資訊檢索。",
    "source": 3
  },
  {
    "id": 227,
    "category": "outline-3",
    "type": "single",
    "question": "請將臉部辨識工作與正確的問題配對。 作答時，請將左側資料行所列的適當工作負載類型，拖曳至右側對應的案例。 每種工作負載類型可能只使用一或多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 工作負載 (Workload) A. 識別 (Identify) B. 相似度 (Find Similar) C. 驗證 (Verify) 問題描述 (Description) 兩張臉部相片是同一個人嗎？ 這個人看起來像其他人嗎？ 這群人中的這個人是誰？",
    "options": [
      "A. 1. - 兩張臉部相片是同一個人嗎？(C. 驗證 Verify) 2. - 這個人看起來像其他人嗎？(B. 相似度 Find Similar) 3. - 這群人中的這個人是誰？(A. 識別 Identify)",
      "B. 臉部識別 (Face Identification)",
      "C. 語意分割 (Semantic Segmentation)",
      "D. 影像分類 (Image Classification)"
    ],
    "subQuestions": null,
    "answer": "A. 1. - 兩張臉部相片是同一個人嗎？(C. 驗證 Verify) 2. - 這個人看起來像其他人嗎？(B. 相似度 Find Similar) 3. - 這群人中的這個人是誰？(A. 識別 Identify)",
    "rationale": "Azure AI 臉部服務提供多種臉部辨識相關功能： 驗證 (Verify)：判斷兩張臉部是否屬於同一個人。這是一種一對一的比對。適用於問題「兩張臉部相片是同一個人嗎？」。 相似度 (Find Similar)：在一組臉部中，尋找與目標臉部相似的其他臉部。適用於問題「這個人看起來像其他人嗎？」。 識別 (Identify)：在一組已知的人員群組中，辨識出影像中的某個臉部是誰。這是一種一對多的比對。適用於問題「這群人中的這個人是誰？」。",
    "examTip": "理解臉部服務中「驗證」、「相似度」和「識別」的核心差異： 驗證 (Verify) = 是不是同一個人？(1:1) 相似度 (Find Similar) = 哪些臉長得像？(1:N，從臉找臉) 識別 (Identify) = 這個臉是誰？(1:N，從臉找已註冊的人)",
    "source": 3
  },
  {
    "id": 228,
    "category": "outline-1",
    "type": "single",
    "question": "您正在開發一套系統以預測英國駕駛的保險價格。 您需要盡量將系統的偏差 (bias)降至最低。 請問您該怎麼做？",
    "options": [
      "A. 取得完全隨機的定型樣本 (training sample)。",
      "B. 取得代表英國人口的定型樣本。",
      "C. 從資料中移除受保護特性 (protected characteristics) 的相關資料，然後再進行取樣。",
      "D. 使用全球保險公司的資料建立定型資料集 (training dataset)。"
    ],
    "subQuestions": null,
    "answer": "B. 取得代表英國人口的定型樣本。",
    "rationale": "為了降低AI系統的偏差 (bias)，並確保其公平性 (fairness)，定型資料必須能夠充分代表目標使用者群體。在此案例中，系統預測的是「英國駕駛」的保險價格，因此定型樣本應代表「英國人口」的特徵分佈。 A. 完全隨機的樣本不一定能代表目標群體，可能仍會引入偏差。 C. 移除受保護特性（如性別、種族）的相關資料，雖然出發點是好的，但可能導致模型無法學習到這些特性與結果之間的真實（非歧視性）關聯，甚至可能因為代理變數 (proxy variables) 的存在而間接引入偏差。更重要的是，這不是降低偏差的主要手段；主要手段是確保資料的代表性。 D. 使用全球保險公司的資料範圍太廣，可能不適用於特定預測英國駕駛的場景，反而會引入不相關的變異。",
    "examTip": "負責任 AI 的公平性原則強調AI系統不應對不同群體產生不公平的影響。達成此目標的關鍵之一是使用具代表性的訓練資料。如果資料本身存在偏差（例如某群體數據過少或過多），模型學習到的結果也可能帶有偏差。",
    "source": 3
  },
  {
    "id": 229,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "會回答諸如「我的下一場約會是何時?」等問題的家用智慧型裝置",
        "answer": "是"
      },
      {
        "text": "公司網站上的互動式網路聊天",
        "answer": "是"
      },
      {
        "text": "為預先錄製影片自動產生字幕",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 會回答諸如「我的下一場約會是何時?」等問題的家用智慧型裝置為交談式 AI (Conversational AI) 的範例。 2. 是 - 公司網站上的互動式網路聊天功能可以使用 Azure Bot Service 實作。 3. 否 - 為預先錄製影片自動產生字幕是交談式 AI 的範例。",
    "rationale": "第一句：家用智慧型裝置（如智慧音箱）能理解並回應使用者的語音指令或問題，進行互動式對話，這是交談式 AI 的典型應用。因此，敘述為「是」。 第二句：Azure Bot Service 是一個用於建置、測試、部署和管理智慧型機器人的平台。這些機器人可以透過多種管道（包括網站聊天）與使用者互動。因此，敘述為「是」。 第三句：為預先錄製影片自動產生字幕主要是語音轉換文字 (STT) 的功能，屬於Azure AI 語音服務的範疇，是自然語言處理 (NLP) 的一部分。雖然交談式 AI 也使用 NLP 和語音服務，但自動字幕本身並不構成互動式對話。因此，敘述為「否」。",
    "examTip": "交談式 AI 的核心是模擬人類對話，進行雙向互動。聊天機器人、虛擬助理是常見例子。而單向的任務，如語音轉文字（字幕）、文字轉語音，雖然是相關技術，但本身不代表完整的交談式 AI。",
    "source": 3
  },
  {
    "id": 230,
    "category": "outline-2",
    "type": "single",
    "question": "您使用自動化機器學習使用者介面 (Automated ML UI) 建置機器學習模型。 您必需確保此模型符合 Microsoft 責任 AI 的透明度 (Transparency) 準則。 請問您應該怎麼做？",
    "options": [
      "A. 將驗證類型 (validation type) 設置為 [Auto]。",
      "B. 將並行反覆運算上限設為 [0]。",
      "C. 將主要計量 (primary metric) 設為 [Accuracy]。",
      "D. 啟用最佳解釋模型 (Enable model explainability)。"
    ],
    "subQuestions": null,
    "answer": "D. 啟用最佳解釋模型 (Enable model explainability)。",
    "rationale": "Microsoft 責任 AI 的透明度 (Transparency) 原則強調人們應該了解 AI 系統如何運作以及為何做出特定決策。模型可解釋性 (Model explainability) 是實現透明度的關鍵技術，它有助於理解模型的行為、識別潛在偏差以及診斷問題。Azure Machine Learning 中的自動化機器學習 (Automated ML) 支援模型解釋功能，例如提供特徵重要性等資訊。啟用此功能有助於符合透明度準則。 A, B, C 選項是自動化機器學習的設定參數，與模型的性能或訓練過程有關，但與直接提升模型的透明度或可解釋性無直接關聯。",
    "examTip": "透明度原則與模型可解釋性密切相關。當題目問到如何使模型更透明或易於理解時，通常答案會涉及啟用或使用解釋模型的功能。",
    "source": 3
  },
  {
    "id": 231,
    "category": "outline-4",
    "type": "single",
    "question": "您有數份以文字格式儲存的保險理賠報表。 您需要從報表擷取關鍵字詞才能產生摘要。 您應該使用哪種 AI 工作負載？",
    "options": [
      "A. Azure Machine Learning",
      "B. Azure AI 翻譯工具 (Translator)",
      "C. Azure AI 內容安全 (Content Safety)",
      "D. 自然語言處理 (NLP)"
    ],
    "subQuestions": null,
    "answer": "D. 自然語言處理 (NLP)",
    "rationale": "題目描述的任務涉及處理文字格式的保險理賠報表，並從中擷取關鍵字詞以產生摘要。這些都是自然語言處理 (NLP) 的核心功能。 自然語言處理 (NLP)：專注於使電腦能夠理解、解釋和生成人類語言。常見任務包括關鍵片語擷取、情感分析、實體辨識、文本摘要等。 電腦視覺：處理和分析影像和影片。 交談式 AI：建立能夠與使用者進行自然對話的系統。 異常偵測：識別資料中不尋常的模式或離群值。 因此，此場景最適合使用 NLP。",
    "examTip": "當題目涉及分析或處理文字內容（例如文件、評論、報告）以提取資訊、理解含義或生成新文本時，通常答案會是自然語言處理 (NLP)。",
    "source": 3
  },
  {
    "id": 232,
    "category": "outline-2",
    "type": "single",
    "question": "將機器學習類型與適當的案例配對。 作答時，請將左側資料行所列機器學習類型，拖曳至右側對應的案例中。 每種機器學習類型可能只使用一或多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 機器學習類型 (Machine Learning Type) A. 迴歸 (Regression) B. 叢集 (Clustering) C. 分類 (Classification) 案例描述 (Scenario Description) 根據機場降雪量預測航班延誤時分數 將客戶劃分為不同群組以支援行銷部門 預測學生是否能完成大學課程",
    "options": [
      "A. 強化學習",
      "B. 1. - 根據機場降雪量預測航班延誤時分數 (A. 迴歸 Regression) 2. - 將客戶劃分為不同群組以支援行銷部門 (B. 叢集 Clustering) 3. - 預測學生是否能完成大學課程 (C. 分類 Classification)",
      "C. 監督式學習",
      "D. 非監督式學習"
    ],
    "subQuestions": null,
    "answer": "B. 1. - 根據機場降雪量預測航班延誤時分數 (A. 迴歸 Regression) 2. - 將客戶劃分為不同群組以支援行銷部門 (B. 叢集 Clustering) 3. - 預測學生是否能完成大學課程 (C. 分類 Classification)",
    "rationale": "迴歸 (Regression)：用於預測連續數值。航班延誤的「時分數」是一個數值（例如 30 分鐘、65.5 分鐘），因此屬於迴歸問題。 叢集 (Clustering)：用於將資料點分組，使得同一組內的資料點相似度較高，不同組之間的相似度較低，通常在沒有預先定義標籤的情況下使用。將客戶劃分為不同群組（例如高價值客戶、潛在流失客戶）是典型的叢集應用。 分類 (Classification)：用於預測項目屬於哪個預先定義的類別。預測學生「是否」能完成大學課程（例如「是」或「否」兩個類別，或者「完成」、「未完成」、「可能延畢」等多個類別）是分類問題。",
    "examTip": "區分三種主要機器學習類型： 預測一個數值 -> 迴歸 (例如：價格、溫度、數量) 預測一個類別或標籤 -> 分類 (例如：是/否、貓/狗、垃圾郵件/非垃圾郵件) 將資料分群 -> 叢集 (例如：客戶分群、文件主題分組)",
    "source": 3
  },
  {
    "id": 233,
    "category": "outline-4",
    "type": "single",
    "question": "您有一套自訂問題解答解決方案。 您建立了一個使用知識庫回應客戶要求的機器人。 您需要確認在不新增額外技能的情況下，該機器人可以執行的工作。 您應該指定何者？",
    "options": [
      "A. 同時回答多位使用者的問題。",
      "B. 登記客訴內容。",
      "C. 登記客戶購買的商品。",
      "D. 為客戶提供退貨授權 (RMA) 編號。"
    ],
    "subQuestions": null,
    "answer": "A. 同時回答多位使用者的問題。",
    "rationale": "基於知識庫的自訂問題解答機器人（例如使用 Azure AI Language 的自訂問題解答功能，前身為 QnA Maker）的核心功能是根據知識庫中的問答配對來回答使用者的問題。 A. 機器人通常被設計為可以同時處理多個使用者的請求，這是雲端服務和機器人框架的固有能力，不需要額外技能。 B, C, D 選項（登記客訴、登記購買、提供 RMA 編號）通常涉及交易處理、狀態追蹤或與後端系統整合，這些通常超出僅基於知識庫問答的機器人的預設能力範圍，需要額外開發技能（例如與 CRM 系統、訂單系統整合）。",
    "examTip": "自訂問題解答（或 QnA Maker）建立的機器人主要擅長回答資訊型問題，其答案來自預先建立的知識庫。而涉及執行動作、修改資料或與外部系統進行複雜互動的功能，通常需要更進階的機器人開發技能和整合。",
    "source": 3
  },
  {
    "id": 234,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 在指定日期預測將有多少車輛會通過橋樑，為下列何者的範例： 迴歸 (Regression)",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "預測「有多少車輛」會通過橋樑，是在預測一個數量，這是一個連續的數值（例如 1500 輛、2350 輛等）。預測連續數值的機器學習任務屬於迴歸 (Regression)。",
    "examTip": "再次強調，判斷機器學習類型時，關注預測目標的性質： 如果預測目標是一個數值（可以取小數或很大範圍的整數），那麼就是迴歸。 如果預測目標是從一組固定的類別中選擇一個，那麼就是分類。 如果目標是將未標記的資料分組，那麼就是叢集。",
    "source": 3
  },
  {
    "id": 235,
    "category": "outline-4",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 建立錄音的文字記錄是下列何者的範例： 自然語言處理 (NLP)...",
    "options": [
      "A. 對話式語言理解 (CLU)",
      "B. 機器翻譯 (Machine Translation)",
      "C. 自然語言處理 (NLP)",
      "D. 情感分析 (Sentiment Analysis)"
    ],
    "subQuestions": null,
    "answer": "C. 自然語言處理 (NLP)",
    "rationale": "建立錄音的文字記錄，即是將語音轉換為文字 (Speech-to-Text, STT)。這項技術是Azure AI 語音服務的核心功能之一，而語音服務本身以及處理和理解轉換後的文字都屬於更廣泛的自然語言處理 (NLP) 領域。NLP 涉及讓電腦能夠處理和理解人類語言，無論是文字還是語音。",
    "examTip": "語音轉文字 (STT) 和文字轉語音 (TTS) 都是自然語言處理的關鍵應用。Azure AI 語音服務提供了這些功能。",
    "source": 3
  },
  {
    "id": 236,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 傳回指出影像中車輛位置的定界框 (bounding box) 為下列範例之一： 物件偵測 (Object Detection)",
    "options": [
      "A. 影像分類",
      "B. 物件偵測 (Object Detection)",
      "C. 語意分割",
      "D. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "B. 物件偵測 (Object Detection)",
    "rationale": "電腦視覺中的物件偵測 (Object Detection) 任務不僅僅是識別影像中存在哪些物件（這是影像分類的工作），更重要的是定位這些物件在影像中的位置，通常以定界框 (bounding box) 的形式表示。題目描述的正是這種能力——指出車輛位置的定界框。",
    "examTip": "區分影像分類和物件偵測： 影像分類：回答「這張圖是什麼？」(例如：貓、狗、汽車)。 物件偵測：回答「圖中的物體是什麼？在哪裡？」(例如：這是一輛汽車，它的位置在座標 [x1,y1,x2,y2])。 當題目提到位置或定界框時，通常指向物件偵測。",
    "source": 3
  },
  {
    "id": 237,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 建置 K-Means 叢集模型時，所有特徵的資料類型都必須是 數值。",
    "options": [
      "A. 數值",
      "B. 類別",
      "C. 文字",
      "D. 布林值"
    ],
    "subQuestions": null,
    "answer": "A. 數值",
    "rationale": "K-Means 叢集演算法是一種基於距離的演算法。它計算資料點之間的距離（通常是歐幾里得距離）以將它們分組到不同的叢集中。為了能夠計算距離，輸入的特徵必須是數值類型。如果資料包含類別特徵，則需要先將其轉換為數值表示（例如使用獨熱編碼 one-hot encoding）才能用於 K-Means。",
    "examTip": "許多傳統的機器學習演算法，特別是那些依賴距離計算的演算法（如 K-Means, K-Nearest Neighbors），通常要求輸入特徵為數值。",
    "source": 3
  },
  {
    "id": 238,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "標記",
        "answer": "是"
      },
      {
        "text": "您應該使用訓練模型",
        "answer": "否"
      },
      {
        "text": "精確度 (Precision",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 標記是使用已知值標註訓練資料的過程。 2. 否 - 您應該使用訓練模型所用的相同資料來評估模型。 3. 否 - 精確度 (Precision) 一律為用以衡量模型性能的主要計量。",
    "rationale": "第一句：在監督式學習中，標記 (labeling) 指的是為訓練資料的每個樣本提供已知的輸出值或目標變數。模型將從這些帶有標籤的資料中學習。因此，敘述為「是」。 第二句：評估模型時，應該使用模型在訓練過程中未見過的資料（通常稱為測試資料集或驗證資料集）。如果使用訓練資料來評估，模型可能會因為過度擬合 (overfitting) 而表現出虛高的性能，無法真實反映其對新資料的泛化能力。因此，敘述為「否」。 第三句：精確度 (Precision) 是評估分類模型的指標之一，但並非一律是主要計量。主要計量的選擇取決於具體的業務問題和場景。例如，在某些情況下，召回率 (Recall)、F1-score、準確度 (Accuracy) 或 AUC 可能更重要。對於迴歸模型，則會使用如 RMSE、MAE 等指標。因此，敘述為「否」。",
    "examTip": "機器學習核心概念： 訓練資料 vs. 測試資料：務必分開，用測試資料評估模型泛化能力。 評估指標：沒有一體適用的最佳指標，需根據問題類型（分類、迴歸）和業務需求選擇。",
    "source": 3
  },
  {
    "id": 239,
    "category": "outline-2",
    "type": "single",
    "question": "若要補充語句，請在答案區域中選擇相應的選項。 Azure Machine Learning 設計工具可讓您建立機器學習模型，藉由 在視覺效果畫布新增元件",
    "options": [
      "A. 端點 (Endpoint)",
      "B. 隨機森林 (Random Forest)",
      "C. 決策樹 (Decision Tree)",
      "D. 在視覺效果畫布新增元件"
    ],
    "subQuestions": null,
    "answer": "D. 在視覺效果畫布新增元件",
    "rationale": "Azure Machine Learning 設計工具 (Designer) 提供了一個視覺化的拖放式介面。使用者可以從元件選擇區將代表資料集和機器學習演算法的元件 (components) 拖曳到畫布 (canvas) 上，然後將它們連接起來以建立管線 (pipeline) 來訓練和部署模型。這使得不具備深厚程式設計背景的使用者也能夠建置機器學習模型。",
    "examTip": "Azure Machine Learning 設計工具的關鍵特性是視覺化、拖放和無程式碼/低程式碼。",
    "source": 3
  },
  {
    "id": 240,
    "category": "outline-4",
    "type": "single",
    "question": "您有一個文件目錄。 您需要製作一套解決方案來根據這些檔回答使用者問題。此解決方案必須將開發工作量降至最低。 您應該執行哪兩動作？每個正確答案都是一個部分的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 使用 QnA Maker 擷取文件並建立知識庫。",
      "B. 使用知識庫部署機器人。",
      "C. 在 QnA Maker 入口網站中，建置機器人。",
      "D. 使用文字分析擷取檔並建立知識庫。"
    ],
    "subQuestions": null,
    "answer": "A 和 C A. 使用 QnA Maker 擷取文件並建立知識庫。 C. 在 QnA Maker 入口網站中，建置機器人。",
    "rationale": "QnA Maker（現已整合至 Azure AI Language 的自訂問題解答功能）專為從現有內容（如 FAQ 文件、手冊、文件）建立知識庫並快速建置問答機器人而設計，能將開發工作量降至最低。 A. QnA Maker 的核心功能之一就是從各種來源擷取資訊（包括文件目錄中的文件）來自動產生問答配對，從而建立知識庫。 C. QnA Maker 入口網站（或 Language Studio）提供了直接從已發佈的知識庫建立和測試機器人的功能，簡化了部署過程。 B. 雖然最終目標是部署機器人，但「使用知識庫部署機器人」描述的是結果而非動作，且選項 C 更具體地指出了在何處執行此操作以降低工作量。 D. 文字分析服務（現為 Azure AI Language 的一部分）提供如關鍵片語提取、情感分析等功能，但它本身不直接用於建立問答知識庫；QnA Maker 才是專为此設計的。",
    "examTip": "當題目提到需要從現有文件快速建立問答系統或機器人，並且強調降低開發工作量時，QnA Maker（或自訂問題解答）通常是正確的解決方案。",
    "source": 3
  },
  {
    "id": 241,
    "category": "outline-4",
    "type": "single",
    "question": "以下哪個案例為網頁聊天機器人的範例？",
    "options": [
      "A. 透過電子郵件接受問題，然後根據訊息內容將該電子郵件訊息路由傳送給正確人員。",
      "B. 計算在網站上輸入音樂會評論為正面或負面，然後在這些評論中加入讚或怒的表情圖示。",
      "C. 將客戶在 kiosk 輸入的問題翻譯成英文，以便相關人員可以回電給客戶。",
      "D. 在網站介面中，回答有關音樂節的預定活動與購票等常見問題。"
    ],
    "subQuestions": null,
    "answer": "D. 在網站介面中，回答有關音樂節的預定活動與購票等常見問題。",
    "rationale": "網頁聊天機器人 (Web Chatbot) 是一種在網站上與使用者進行互動式對話的AI應用程式。其主要目的是提供資訊、回答問題或引導使用者完成某些任務。 D. 在網站介面中回答常見問題，是聊天機器人最典型的應用場景之一，它透過模擬人類對話來提供即時支援。 A. 郵件路由是自動化任務，但不涉及即時互動對話。 B. 情感分析並加入表情圖示是自然語言處理和內容增強，不屬於聊天機器人的範疇。 C. 翻譯是語言翻譯服務，不直接構成聊天機器人。",
    "examTip": "聊天機器人的核心特徵是互動性和對話能力。尋找描述使用者與系統之間進行問答或指令式交流的選項。",
    "source": 3
  },
  {
    "id": 242,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "餐廳可以透過 Cortana",
        "answer": "是"
      },
      {
        "text": "餐廳可以利用聊天機器人",
        "answer": "是"
      },
      {
        "text": "餐廳可以利用聊天機器人",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 餐廳可以透過 Cortana 使用聊天機器人回答查詢。 2. 是 - 餐廳可以利用聊天機器人在網頁上回答有關營業時間的查詢。 3. 否 - 餐廳可以利用聊天機器人自動回應外部網站上客戶評論。",
    "rationale": "第一句：聊天機器人可以整合到多種通道 (channels)，包括語音助理如 Cortana。因此，餐廳可以開發一個聊天機器人技能，讓使用者透過 Cortana 查詢餐廳資訊。敘述為「是」。 第二句：在網頁上提供聊天機器人以回答常見問題（如營業時間）是非常普遍的應用。敘述為「是」。 第三句：雖然聊天機器人可以處理文字，但自動回應外部網站（如評論網站、社交媒體）上的客戶評論，通常需要更複雜的整合、情感分析、以及可能的人工審核流程，而不僅僅是標準的問答聊天機器人功能。直接用聊天機器人自動在外部網站上「回應」評論，可能存在風險和技術挑戰，通常不是其主要設計用途。敘述為「否」。",
    "examTip": "聊天機器人的核心是提供互動式服務。思考每個場景是否符合這種互動模式，以及技術上是否為聊天機器人的典型應用範圍。",
    "source": 3
  },
  {
    "id": 243,
    "category": "outline-4",
    "type": "single",
    "question": "您可以使用常見問題(FAQ)頁面建置 QnA Maker 機器人。 您需要新增專業的問候語集其他回應，使機器人能夠更友善地與使用者互動。 請問您該怎麼做？",
    "options": [
      "A. 建立多回合問題",
      "B. 新增閒聊 (Chit-chat)",
      "C. 提高回應的信賴等級閾值",
      "D. 啟用主動學習"
    ],
    "subQuestions": null,
    "answer": "B. 新增閒聊 (Chit-chat)",
    "rationale": "QnA Maker（現為 Azure AI Language 的自訂問題解答功能）提供了閒聊 (Chit-chat) 功能，允許開發者為機器人加入預設的、非特定於知識庫主題的對話能力。這包括了多種風格的問候語、道別語以及對常見社交性提問的回應（例如「你好嗎？」、「你是誰？」）。新增閒聊可以讓機器人的回應更自然、更友善，提升使用者體驗。 A. 多回合問題用於引導使用者 C. 提高信賴等級閾值會讓機器人更傾向於在不確定時不回答，而不是使其更友善。 D. 主動學習是讓機器人從使用者互動中學習並建議新的問答配對，以改進知識庫。",
    "examTip": "要讓機器人更「人性化」或「友善」，閒聊 (Chit-chat) 功能是 QnA Maker / 自訂問題解答中直接相關的設定。",
    "source": 3
  },
  {
    "id": 244,
    "category": "outline-1",
    "type": "single",
    "question": "您應該設定哪一個參數，才能在使用 Azure OpenAI GPT-3.5 模型聊天解決方案的回應中產生更多樣化的 Token？",
    "options": [
      "A. 回應上限 (max_tokens)",
      "B. 停止序列 (stop)",
      "C. 存在懲罰 (presence_penalty)",
      "D. 包含過去的訊息"
    ],
    "subQuestions": null,
    "answer": "C. 存在懲罰 (presence_penalty)",
    "rationale": "在使用 Azure OpenAI 模型（如 GPT-3.5）進行聊天或文本生成時，有幾個參數可以調整模型的輸出行為： 存在懲罰 (presence_penalty)：此參數介於 -2.0 和 2.0 之間。正值會懲罰已出現在文本中的新 Token，從而增加模型談論新主題的可能性，使得回應更加多樣化，減少重複。 Temperature：控制輸出的隨機性。較高的值（如 0.8）使輸出更隨機、更有創意；較低的值（如 0.2）使輸出更集中和確定。題目中沒有這個選項，但它是另一個影響多樣性的重要參數。 max_tokens：限制生成回應的最大長度。 stop：指定一個或多個序列，當模型生成這些序列時，將停止進一步生成 Token。 包含過去的訊息：這影響對話的上下文，但不直接控制 Token 的多樣性。 因此，要產生更多樣化的 Token（即談論新主題，減少重複），調整存在懲罰是一個有效的方法。",
    "examTip": "記住 Azure OpenAI 的幾個關鍵生成參數及其作用： Temperature：控制隨機性/創造性。 Presence Penalty：控制是否引入新主題/減少重複性。 Frequency Penalty：控制是否重複使用相同的詞語。 Top P (nucleus sampling)：另一種控制隨機性的方法，與 temperature 類似。",
    "source": 3
  },
  {
    "id": 245,
    "category": "outline-2",
    "type": "single",
    "question": "請將工具與 Azure Machine Learning 工作配對。 作答時，請將左側資料行所列的適當工具，拖曳至右側對應的工作。每種工具可能只使用一次，也可能使用多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 工具 (Tool) A. Azure 入口網站 (Azure portal) B. Machine Learning 設計工具 (Designer) C. 自動化機器學習 (Automated ML) 工作 (Task) 建立 Machine Learning 工作區 (Workspace) 使用專用的拖放功能介面來定型及部署模型 使用精靈來選取機器學習執行設定",
    "options": [
      "A. Azure Machine Learning Designer",
      "B. Azure Notebooks",
      "C. 1. - 建立 Machine Learning 工作區 (Workspace) (A. Azure 入口網站) 2. - 使用專用的拖放功能介面來定型及部署模型 (B. Machine Learning 設計工具) 3. - 使用精靈來選取機器學習執行設定 (C. 自動化機器學習)",
      "D. Azure ML SDK"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 建立 Machine Learning 工作區 (Workspace) (A. Azure 入口網站) 2. - 使用專用的拖放功能介面來定型及部署模型 (B. Machine Learning 設計工具) 3. - 使用精靈來選取機器學習執行設定 (C. 自動化機器學習)",
    "rationale": "建立 Machine Learning 工作區：Azure Machine Learning 工作區是 Azure 中的頂層資源，通常透過Azure 入口網站建立和管理，也可以使用 SDK 或 CLI。 使用專用的拖放功能介面來定型及部署模型：這描述的是 Azure Machine Learning 設計工具 (Designer)，它提供視覺化的拖放式畫布來建置機器學習管線。 使用精靈來選取機器學習執行設定：這描述的是自動化機器學習 (Automated ML) 的使用者介面，它提供了一個引導式精靈，讓使用者設定機器學習任務、選取資料、並自動嘗試多種演算法和超參數來找到最佳模型。",
    "examTip": "了解 Azure Machine Learning 中不同工具的用途： Azure 入口網站：用於管理 Azure 資源，包括建立工作區。 Machine Learning 設計工具：視覺化拖放建置模型。 自動化機器學習：自動化模型選擇和超參數調整，通常有精靈介面。 Notebooks / SDK：程式碼優先的方法。",
    "source": 3
  },
  {
    "id": 246,
    "category": "outline-1",
    "type": "single",
    "question": "下列哪一項敍述是 Microsoft 責任 AI 指南的例子？",
    "options": [
      "A. AI 系統必須只使用公開提供的資料。",
      "B. AI 系統必須保障公司的利益。",
      "C. AI 系統必須將個人詳細資料公開。",
      "D. AI 系統必須易於理解。"
    ],
    "subQuestions": null,
    "answer": "D. AI 系統必須易於理解。",
    "rationale": "Microsoft 責任 AI 的六大指導原則之一是透明度 (Transparency)。透明度原則指出，人們應該了解 AI 系統如何運作、其功能和限制為何，以便能夠做出明智的判斷並信任系統。因此，「AI 系統必須易於理解」是透明度原則的一個體現。 A. AI 系統可以使用非公開資料，但必須遵守隱私權與安全性原則。 B. AI 系統應造福社會，而不僅僅是公司利益，並需考慮公平性、包容性等。 C. AI 系統必須保護個人隱私，而非公開個人詳細資料，這違反了隱私權與安全性原則。",
    "examTip": "熟悉 Microsoft 責任 AI 的六大原則：公平性、可靠性與安全性、隱私權與安全性、包容性、透明度、權責。能夠將具體描述與這些原則對應起來。",
    "source": 3
  },
  {
    "id": 247,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 GitHub Copilot 延伸模組（適用於 Microsoft Visual Studio Code）會使用 OpenAI Codex 模型。",
    "options": [
      "A. DALL-E",
      "B. Whisper",
      "C. GPT-4",
      "D. OpenAI Codex"
    ],
    "subQuestions": null,
    "answer": "D. OpenAI Codex",
    "rationale": "GitHub Copilot 是由 GitHub 和 OpenAI 合作開發的 AI 程式碼完成工具。它的核心是基於 OpenAI 的 Codex 模型，該模型是 GPT-3 的一個變體，專門針對程式碼生成進行了微調和訓練。它能夠理解上下文並生成多種程式語言的程式碼片段。",
    "examTip": "GitHub Copilot 是生成式 AI 在軟體開發領域的典型應用。記住它背後的核心模型是 OpenAI Codex。",
    "source": 3
  },
  {
    "id": 248,
    "category": "outline-2",
    "type": "single",
    "question": "請將機器學習工作與適當的案例配對。 作答時，請將左側資料行所列的適當工作，拖曳至右側對應的案例。每項工作可能只使用一次，也可能使用多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 工作 (Task) A. 模型評估 (Model Evaluation) B. 特徵工程 (Feature Engineering) C. 特徵選取 (Feature Selection) 案例描述 (Scenario Description) 檢查混淆矩陣的值 將日期分割成 [年]、[月] 和 [日] 欄位 挑選訓練氣候模型的溫度和壓力",
    "options": [
      "A. 準確度",
      "B. 1. - 檢查混淆矩陣的值 (A. 模型評估) 2. - 將日期分割成 [年]、[月] 和 [日] 欄位 (B. 特徵工程) 3. - 挑選訓練氣候模型的溫度和壓力 (C. 特徵選取)",
      "C. 精確度",
      "D. 召回率"
    ],
    "subQuestions": null,
    "answer": "B. 1. - 檢查混淆矩陣的值 (A. 模型評估) 2. - 將日期分割成 [年]、[月] 和 [日] 欄位 (B. 特徵工程) 3. - 挑選訓練氣候模型的溫度和壓力 (C. 特徵選取)",
    "rationale": "模型評估 (Model Evaluation)：在模型訓練完成後，使用測試資料和各種評估指標來衡量模型性能的過程。混淆矩陣 (Confusion Matrix) 是評估分類模型性能的常用工具，用於視覺化模型的預測結果（真陽性、假陽性、真陰性、假陰性）。因此，檢查混淆矩陣屬於模型評估。 特徵工程 (Feature Engineering)：指從現有原始資料中創建新的、更有用的特徵，或轉換現有特徵使其更適合模型學習的過程。將日期欄位（通常是單一字串或日期時間物件）拆分成代表年、月、日的獨立數值欄位，是一種常見的特徵工程技術，可以讓模型更容易捕捉時間相關的模式。 特徵選取 (Feature Selection)：指從所有可用的特徵中，選擇一個子集來用於模型訓練的過程。目的是移除不相關或冗餘的特徵，以提高模型性能、降低複雜性或縮短訓練時間。挑選溫度和壓力這兩個特定的特徵來訓練氣候模型，就是一個特徵選取的例子。",
    "examTip": "機器學習流程中的關鍵步驟： 特徵工程：創造或轉換特徵（無中生有或改變現有）。 特徵選取：挑選特徵（從現有中選擇子集）。 模型訓練：使用演算法學習資料模式。 模型評估：使用指標（如混淆矩陣、準確率、RMSE）衡量模型好壞。",
    "source": 3
  },
  {
    "id": 249,
    "category": "outline-3",
    "type": "single",
    "question": "您需要分析高速公路上的汽車影像並測量車距。 您應該使用哪種電腦視覺模型？",
    "options": [
      "A. 臉部辨識",
      "B. 光學字元辨識(OCR)",
      "C. 物件偵測 (Object Detection)",
      "D. 影像分類"
    ],
    "subQuestions": null,
    "answer": "C. 物件偵測 (Object Detection)",
    "rationale": "要測量高速公路上汽車之間的距離，首先需要準確地找出每輛汽車在影像中的位置。這正是物件偵測 (Object Detection) 的核心功能。物件偵測不僅能識別出影像是汽車，還能提供汽車的定界框 (bounding box)，即其在影像中的座標。有了這些座標資訊，才能進一步計算汽車之間的距離。 A. 臉部辨識：用於識別人臉，與測量車距無關。 B. OCR：用於讀取影像中的文字，與測量車距無關。 D. 影像分類：只能判斷影像中是否有汽車，無法提供汽車的具體位置資訊，因此無法測量車距。",
    "examTip": "再次強調，當任務需要知道物體在影像中的確切位置（以便進行後續計算，如測距、計數特定區域內的物體等）時，通常需要使用物件偵測。",
    "source": 3
  },
  {
    "id": 250,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 在機器學習模型中，當做輸入使用的資料稱為 特徵 (Feature)",
    "options": [
      "A. 特徵 (Feature)",
      "B. 標籤",
      "C. 參數",
      "D. 超參數"
    ],
    "subQuestions": null,
    "answer": "A. 特徵 (Feature)",
    "rationale": "在機器學習中，用於訓練模型並讓模型從中學習模式以進行預測的輸入變數或屬性，被稱為特徵 (features)。例如，在預測房價的模型中，房屋的大小、房間數量、地點、建造年份等都是特徵。模型學習這些特徵與目標變數（房價）之間的關係。",
    "examTip": "記住機器學習中的基本術語： 特徵 (Feature)：模型的輸入變數。 標籤 (Label)：在監督式學習中，模型要預測的輸出或答案。",
    "source": 3
  },
  {
    "id": 251,
    "category": "outline-4",
    "type": "single",
    "question": "您的解決方案會分析社交媒體貼文以擷取提及城市名稱的內容以及最常討論的城市名稱。 該解決方案使用的是哪種類型的自然語言處理 (NLP) 工作負載？",
    "options": [
      "A. 情感分析",
      "B. 語音辨識",
      "C. 實體辨識 (Entity Recognition)",
      "D. 關鍵片語擷取"
    ],
    "subQuestions": null,
    "answer": "C. 實體辨識 (Entity Recognition)",
    "rationale": "從文本中識別並分類已知實體（例如人名、地名、組織名、日期、城市名稱等）的任務，稱為具名實體辨識 (Named Entity Recognition, NER) 或簡稱實體辨識。題目要求從社交媒體貼文中「擷取提及城市名稱的內容」，這正是 NER 的典型應用。 A. 情感分析：判斷文本的情緒傾向（正面、負面、中性）。 B. 語音辨識：將語音轉換為文字。 D. 關鍵片語擷取：提取文本中代表主要概念或主題的詞語或短語，不一定會特別分類實體類型。",
    "examTip": "當任務涉及從文本中找出特定類別的名詞或專有名詞（如人名、地名、組織、產品、時間等）時，應考慮實體辨識 (NER)。",
    "source": 3
  },
  {
    "id": 252,
    "category": "outline-2",
    "type": "single",
    "question": "您的資料集包括指定期間內發生的計程車行程資訊。 您需要訓練模型以預測計程車車資。 您應該使用哪一項作為特徵 (feature)？",
    "options": [
      "A. 資料集中的計程車行程數",
      "B. 個別計程車行程的單程距離",
      "C. 個別計程車行程的車資 (fare)",
      "D. 個別計程車行程的單程識別碼"
    ],
    "subQuestions": null,
    "answer": "B. 個別計程車行程的單程距離",
    "rationale": "模型要預測的是「計程車車資」，這是標籤 (label) 或目標變數。特徵 (features) 是用來預測標籤的輸入變數。在預測車資的場景中，以下是可能的特徵和標籤： A. 資料集中的計程車行程數：這是資料集的整體屬性，不是單一行程的特徵。 B. 個別計程車行程的單程距離：距離通常是影響車資的主要因素，是非常重要的特徵。 C. 個別計程車行程的車資：這是我們要預測的目標 (標籤)，不是輸入特徵。 D. 個別計程車行程的單程識別碼：識別碼通常對預測沒有幫助（除非它隱含了某些資訊），一般不作為特徵。 因此，單程距離是預測車資的合理特徵。",
    "examTip": "再次區分特徵和標籤。特徵是用來做預測的輸入，標籤是你要預測的輸出。題目問「哪一項作為特徵？」，就要找可以用來預測車資的因素。",
    "source": 3
  },
  {
    "id": 253,
    "category": "outline-2",
    "type": "single",
    "question": "根據天氣狀況及土壤品質測量結果來預測農作物產量（測量單位是公斤/公頃），這項作業是下列哪一種機學習模型的範例？",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 叢集",
      "C. 分類"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "題目要求預測「農作物產量」，其單位是「公斤/公頃」。產量是一個連續的數值（例如 5000 公斤/公頃、5500.5 公斤/公頃等）。預測連續數值的機器學習任務屬於迴歸 (Regression)。",
    "examTip": "判斷機器學習類型，看預測目標： 數字（產量、價格、溫度） -> 迴歸 類別（是/否、好/壞、貓/狗） -> 分類 分群（客戶群、文件主題） -> 叢集 農作物產量 (公斤/公頃) 是數字，所以是迴歸。",
    "source": 3
  },
  {
    "id": 254,
    "category": "outline-1",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "您可以使用自己的資料微調 Azure OpenAI",
        "answer": "是"
      },
      {
        "text": "預先訓練的生成式 AI",
        "answer": "是"
      },
      {
        "text": "若要建置符合 Microsoft 負責任 AI",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 您可以使用自己的資料微調 Azure OpenAI 模型。 2. 是 - 預先訓練的生成式 AI 模型是 Azure OpenAI 的元件。 3. 否 - 若要建置符合 Microsoft 負責任 AI 準則的解決方案，您必須建置和訓練自己的模型。",
    "rationale": "第一句：Azure OpenAI 服務支援使用自己的資料對基礎模型進行微調 (fine-tuning)，以使其更適應特定領域或任務。因此，敘述為「是」。(注意: PDF 第28頁的螢幕截圖將此題標為「否」，但這是對該服務功能的誤解，微調是 Azure OpenAI 的核心功能之一。) 第二句：Azure OpenAI 服務的核心就是提供對 OpenAI 強大預先訓練的大型語言模型（如 GPT-4, GPT-3.5-Turbo, Embeddings, DALL-E）的存取。這些模型是服務的基礎元件。因此，敘述為「是」。 第三句：Microsoft 負責任 AI 準則適用於所有 AI 應用，無論是使用預先訓練的模型（如 Azure OpenAI）還是自己建置訓練的模型。使用預先訓練的模型並不意味著不符合負責任 AI 準則，開發人員仍需在使用這些模型時考慮並實施相應的原則（例如內容過濾、監控、透明度說明等）。因此，敘述為「否」。",
    "examTip": "了解 Azure OpenAI 服務的關鍵特性：提供預先訓練的強大模型、支援微調、內建負責任 AI 功能（如內容過濾）。同時，要理解負責任 AI 原則是普適的，適用於所有類型的 AI 開發。",
    "source": 3
  },
  {
    "id": 255,
    "category": "outline-1",
    "type": "single",
    "question": "您的公司正在探索語音辨識技術在其智慧型家用裝置中使用。該公司想要找出可能無意間遺漏特定使用者群組的任何屏障。 這是下列哪一項負責任 AI 的 Microsoft 指導準則範例？",
    "options": [
      "A. 公平性",
      "B. 隱私權與安全性",
      "C. 包容性 (Inclusiveness)",
      "D. 權責"
    ],
    "subQuestions": null,
    "answer": "C. 包容性 (Inclusiveness)",
    "rationale": "負責任 AI 的包容性 (Inclusiveness) 原則，強調 AI 系統應該賦予每個人權力並吸引人們參與，不應排除或歧視任何群體。題目中提到要找出「可能無意間遺漏特定使用者群組的任何屏障」，例如語音辨識技術可能對某些口音、語速或殘疾人士的語音效果不佳，這直接關係到系統是否對所有使用者都同樣可用和有效，是包容性的核心考量。 A. 公平性：通常關注不同群體之間在結果分配上的偏差（例如貸款批准率）。 B. 隱私權與安全性：關注資料保護和系統安全。 D. 權責：關注由誰對系統的運作負責。 雖然公平性和包容性有關聯，但「避免遺漏群體屏障」更直接地體現了包容性的精神。",
    "examTip": "當題目描述關注確保系統適用於各種背景、能力和需求的使用者，避免因設計或資料缺陷導致排斥某些群體時，通常是在考查包容性原則。",
    "source": 3
  },
  {
    "id": 256,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "網路聊天機器人",
        "answer": "是"
      },
      {
        "text": "為預先錄製影片自動產生字幕",
        "answer": "否"
      },
      {
        "text": "可以回答諸如「今天天氣如何？」等問題的家用智慧型裝置",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 網路聊天機器人可以與瀏覽網站的使用者進行互動。 2. 否 - 為預先錄製影片自動產生字幕是自然語言處理的範例。 3. 是 - 可以回答諸如「今天天氣如何？」等問題的家用智慧型裝置是自然語言處理的範例。",
    "rationale": "第一句：網路聊天機器人的設計目的就是在網站上與使用者進行互動。因此，敘述為「是」。 第二句：為預先錄製影片自動產生字幕主要是語音轉換文字 (STT) 的功能，由Azure AI 語音服務提供。雖然語音服務和自然語言處理 (NLP) 密切相關且常一起使用 (例如，STT 的輸出是文本，然後可以由 NLP 進一步處理)，但在 AI-900 的分類中，STT 本身更直接歸類於語音服務的功能，而非單純的 NLP 工作負載。從考試角度看，若題目將「產生字幕」視為一種獨立的 AI 功能，而非強調後續的文本理解，則可能不將其直接等同於 NLP 的典型範例。根據 PDF 提供的答案，此處為「否」。 第三句：家用智慧型裝置理解使用者用自然語言提出的問題（例如「今天天氣如何？」），並作出回應，這涉及到自然語言理解 (NLU) 和可能的自然語言生成 (NLG)，這些都是自然語言處理的核心組成部分。因此，敘述為「是」。",
    "examTip": "自然語言處理 (NLP) 廣泛涵蓋了電腦對人類語言的理解和生成。而交談式 AI 則更側重於模擬互動式對話。有些技術（如語音轉文字）是這兩者的基礎，但題目可能會根據其主要應用場景進行區分。注意題目中對「範例」的提問方式。",
    "source": 3
  },
  {
    "id": 257,
    "category": "outline-1",
    "type": "single",
    "question": "下列哪一個機器學習技術可用於異常偵測?",
    "options": [
      "A. 根據使用者所提供影像，針對物件加以分類的機器學習技術。",
      "B. 根據影像內容，針對該影像加以分類的機器學習技術。",
      "C. 可隨時間分析資料並識別異常變化的機器學習技術。",
      "D. 能夠理解畫面及語音的機器學習技術。"
    ],
    "subQuestions": null,
    "answer": "C. 可隨時間分析資料並識別異常變化的機器學習技術。",
    "rationale": "異常偵測 (Anomaly Detection) 是一種AI工作負載，專門用於識別不符合預期模式的罕見事件或觀察結果。這些模式通常是基於時間序列資料分析得出的。 A 和 B 描述的是影像分類，屬於電腦視覺的範疇。 C 正確描述了異常偵測的核心能力：分析時間序列資料並找出不尋常的變化或模式。 D 描述的是電腦視覺和語音處理，可能涉及自然語言處理，但不是異常偵測的主要定義。",
    "examTip": "異常偵測的關鍵字是「不尋常」、「罕見事件」、「預期之外的模式」、「時間序列分析」。當題目描述需要找出系統、數據或事件中的「怪事」時，通常就是異常偵測。",
    "source": 3
  },
  {
    "id": 258,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "自動化機器學習",
        "answer": "是"
      },
      {
        "text": "自動化機器學習",
        "answer": "否"
      },
      {
        "text": "自動化機器學習",
        "answer": "是"
      },
      {
        "text": "自動化機器學習",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 自動化機器學習是將機器學習模型開發的耗時重複工作自動化的過程。 2. 否 - 自動化機器學習可自動從提供的使用案例中推斷出訓練資料。 3. 是 - 自動化機器學習是透過執行多項訓練反覆運算而運作，這些反覆運算是依您指定的計量所評分和分級。 4. 否 - 自動化機器學習可讓您指定資料集，並且會自動瞭解要預測的標籤。",
    "rationale": "第一句：自動化機器學習 (Automated ML) 的核心目標就是自動化模型選擇、特徵工程和超參數調整等耗時的步驟。敘述為「是」。 第二句：自動化機器學習需要使用者提供訓練資料集。它不能從「使用案例」中自動推斷出訓練資料。敘述為「否」。 第三句：自動化機器學習會嘗試多種不同的演算法和超參數組合，進行多次訓練反覆運算，並根據使用者指定的主要計量來評估和排序這些模型。敘述為「是」。 第四句：雖然使用者需要指定資料集，但自動化機器學習通常也需要使用者明確指定哪一欄是預測目標 (標籤)。它不會總是「自動瞭解」要預測的標籤，尤其是在資料集有多個潛在目標欄位時。敘述為「否」。",
    "examTip": "自動化機器學習並非完全「全自動」。它仍然需要使用者： 提供準備好的訓練資料。 指定預測目標 (標籤欄位)。 選擇主要評估計量。 設定執行限制 (如時間、反覆運算次數)。 它的「自動化」體現在模型選擇、特徵處理和超參數優化的過程中。",
    "source": 3
  },
  {
    "id": 259,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選擇 [是]。否則，請選擇 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "您可以使用語言服務",
        "answer": "否"
      },
      {
        "text": "若您希望知識庫",
        "answer": "是"
      },
      {
        "text": "語言服務",
        "answer": "否"
      }
    ],
    "answer": "1. 否 - 您可以使用語言服務的問題解答查詢 Azure SQL 資料庫。 2. 是 - 若您希望知識庫針對提交類似問題的不同使用者提供相同答案，則應該使用語言服務的問題解答。 3. 否 - 語言服務的問題解答可以判斷使用者語句的意圖 (intent)。",
    "rationale": "第一句：語言服務的問題解答（前身為 QnA Maker）是從非結構化或半結構化內容（如 FAQ 文件、網頁、手冊）建立知識庫。它不能直接查詢結構化的 Azure SQL 資料庫。敘述為「否」。 第二句：問題解答的設計目標就是提供一致性的答案。對於相似的問題，它會從知識庫中找到最匹配的問答組並返回預設的答案。敘述為「是」。 第三句：判斷使用者語句的意圖 (intent) 是交談語言理解 (Conversational Language Understanding, CLU)（前身為 LUIS）的核心功能，而不是問題解答。問題解答主要做問答配對。敘述為「否」。",
    "examTip": "區分 Azure AI Language 中的不同功能： 問題解答 (QnA Maker): 從現有內容建立問答知識庫。 交談語言理解 (CLU / LUIS): 理解使用者意圖和提取實體，用於更複雜的對話流程。 問題解答不直接查詢資料庫，也不主要負責判斷意圖。",
    "source": 3
  },
  {
    "id": 260,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個大型資料集，包含了汽車銷售資料。 您需要根據汽車類型訓練自動化機器學習 (Automated ML) 模型，以預測汽車銷售額。 您應該選取哪一項工作？作答時，請在作答區中選取適當的工作。",
    "options": [
      "A. 預測時間序列 => 使用多類別或多標籤分類，僅根據文字資料類型預測。",
      "B. 迴歸 (Regression) => 預測連續數值。",
      "C. 電腦視覺 (預覽) => 多類別或多標籤影像分類，物件偵測和執行個體分割。",
      "D. 分類 => 預測目標資料行中的數個類別之：是/否、藍色、紅色、綠色。",
      "E. 自然語言處理 (預覽) => 根據時間預測值。"
    ],
    "subQuestions": null,
    "answer": "B. 迴歸 (Regression) => 預測連續數值。",
    "rationale": "題目要求「預測汽車銷售額」。銷售額通常是一個連續的數值（例如 $25,000、$32,550.75 等）。在機器學習中，預測連續數值的任務屬於迴歸 (Regression)。 自動化機器學習 (Automated ML) 支援迴歸任務。 A, C, E 的描述與預測銷售額的數值型任務不符。 D 描述的是分類任務，用於預測離散的類別標籤，而不是連續的銷售額。",
    "examTip": "當自動化機器學習的題目要求選擇任務類型時，首先判斷預測目標（標籤）是連續數值還是離散類別。 預測目標是數值 (如價格、數量、溫度、銷售額) -> 選擇 迴歸。 預測目標是類別 (如 是/否、好/壞、產品類型) -> 選擇 分類。 預測目標是未來某時間點的數值 (基於歷史時間數據) -> 選擇 時間序列預測 (Forecasting)。",
    "source": 3
  },
  {
    "id": 261,
    "category": "outline-3",
    "type": "single",
    "question": "您可以使用下列哪一個電腦視覺功能為數位相片產生自動標題?",
    "options": [
      "A. 找出感興趣的區域。",
      "B. 偵測物件。",
      "C. 辨識文字。",
      "D. 描述影像 (Image Description / Captioning)。"
    ],
    "subQuestions": null,
    "answer": "D. 描述影像 (Image Description / Captioning)。",
    "rationale": "為數位相片產生自動標題，也稱為影像描述 (Image Description) 或影像字幕 (Image Captioning)，是電腦視覺的一項進階功能。它涉及到理解影像的內容並用自然語言生成一段描述性的文字。 Azure AI Vision 服務（以前的電腦視覺服務）提供了此功能。 A. 找出感興趣的區域 (Region of Interest, ROI) 通常是影像分析的一個步驟，但本身不是產生標題。 B. 偵測物件是識別影像中的物件及其位置，是產生描述的基礎之一，但不是最終的標題生成。 C. 辨識文字 (OCR) 是從影像中讀取文字，與生成影像內容的描述不同。",
    "examTip": "當題目要求「為影像產生一句話的描述」或「自動產生標題/字幕」時，這通常指的是影像描述或影像字幕功能。",
    "source": 3
  },
  {
    "id": 262,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "回應內部使用者查詢的機器人",
        "answer": "是"
      },
      {
        "text": "顯示與輸入搜尋字詞相關影像的應用程式為自然語言處理",
        "answer": "是"
      },
      {
        "text": "用來提交重設密碼要求的 web",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 回應內部使用者查詢的機器人為自然語言處理工作負載範例。 2. 是 - 顯示與輸入搜尋字詞相關影像的應用程式為自然語言處理工作負載範例。 3. 否 - 用來提交重設密碼要求的 web 表單為自然語言處理工作負載範例。",
    "rationale": "第一句：機器人（尤其是聊天機器人）需要理解使用者的自然語言查詢並作出回應，這直接運用了自然語言處理 (NLP) 技術。因此，敘述為「是」。 第二句：應用程式需要理解使用者輸入的「搜尋字詞」（自然語言），然後找出相關影像。這個「理解搜尋字詞」的過程屬於自然語言處理。因此，敘述為「是」。 第三句：Web 表單通常是結構化的輸入方式，使用者填寫固定的欄位。這不涉及對自由格式自然語言的理解或處理，因此不屬於自然語言處理工作負載範例。敘述為「否」。",
    "examTip": "自然語言處理的核心在於讓電腦「理解」和「處理」人類的語言。思考每個場景是否涉及對語言文字的語義分析、意圖理解、或從語言中提取資訊。",
    "source": 3
  },
  {
    "id": 263,
    "category": "outline-2",
    "type": "single",
    "question": "您需要追蹤數個使用 Azure Machine Learning 進行訓練的模型版本。 請問您該怎麼做？",
    "options": [
      "A. 佈建推斷叢集",
      "B. 解釋模型",
      "C. 註冊模型 (Register Model)",
      "D. 註冊訓練資料"
    ],
    "subQuestions": null,
    "answer": "C. 註冊模型 (Register Model)",
    "rationale": "在 Azure Machine Learning 中，當您訓練了一個模型並希望對其進行版本控制、管理和後續部署時，您應該將其註冊 (register)到您的工作區。註冊模型允許您追蹤模型的不同版本、中繼資料（如訓練腳本、參數、計量）以及來源。 A. 佈建推斷叢集是為了部署模型以進行預測，而不是追蹤版本。 B. 解釋模型是為了理解模型的行為，與版本追蹤不同。 D. 註冊訓練資料（通常作為資料資產）是管理資料集，而不是模型本身的版本。",
    "examTip": "在 Azure Machine Learning 中，模型註冊是模型生命週期管理 (MLOps) 的一個重要環節，用於版本控制和部署準備。",
    "source": 3
  },
  {
    "id": 264,
    "category": "outline-1",
    "type": "single",
    "question": "請將責任 AI 的準則與適當需求配對。 作答時，請將左側資料行所列的是當準則，拖曳至右側對應的需求。每項準則可能只使用一或多次，甚至完全用不到。您可能需要拖曳窗格之間的分隔列，或是捲動畫面以檢視內容。 注意；每答對一個選項，可得一分。 準則 A. 公平性 (Fairness) B. 隱私和安全性 (Privacy and security) C. 可靠性和安全性 (Reliability and safety) D. 透明度 (Transparency) 需求 系統不得基於性別、種族或年齡產生歧視。 只有已核准使用者可以看見個人資料。 自動決策程序必須加以記錄，以便已核准使用者可以識別決策制定原因。",
    "options": [
      "A. 可靠性與安全性",
      "B. 1. - 系統不得基於性別、種族或年齡產生歧視。 (A. 公平性) 2. - 只有已核准使用者可以看見個人資料。 (B. 隱私和安全性) 3. - 自動決策程序必須加以記錄，以便已核准使用者可以識別決策制定原因。 (D. 透明度)",
      "C. 隱私權與安全性",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "B. 1. - 系統不得基於性別、種族或年齡產生歧視。 (A. 公平性) 2. - 只有已核准使用者可以看見個人資料。 (B. 隱私和安全性) 3. - 自動決策程序必須加以記錄，以便已核准使用者可以識別決策制定原因。 (D. 透明度)",
    "rationale": "「系統不得基於性別、種族或年齡產生歧視」直接對應到公平性 (Fairness)原則，該原則要求 AI 系統應公平對待所有人，避免產生有害的偏見。 「只有已核准使用者可以看見個人資料」對應到隱私和安全性 (Privacy and security)原則，該原則強調保護資料隱私和系統安全。 「自動決策程序必須加以記錄，以便已核准使用者可以識別決策制定原因」對應到透明度 (Transparency)原則，該原則強調 AI 系統的決策過程應該是可理解和可解釋的。同時，這也部分觸及了權責 (Accountability)原則，但透明度在此更為直接相關，因為它關注的是「識別決策原因」。",
    "examTip": "再次熟悉 Microsoft 責任 AI 的六大原則，並能夠將具體的場景描述與相應的原則進行配對。 公平性：避免偏見和歧視。 可靠性和安全性：系統應按預期可靠運行且安全。 隱私和安全性：保護資料隱私，防止未經授權的存取。 包容性：賦予每個人權力，不排斥任何群體。 透明度：系統的運作和決策應易於理解。 權責：應有人對系統的運作負責。",
    "source": 3
  },
  {
    "id": 265,
    "category": "outline-4",
    "type": "single",
    "question": "您計畫開發機器人，讓使用者能夠使用自然語言處理來查詢知識庫。 您應該在解決方案中納入哪兩項服務？每個正確答案都是解決方案的一部分。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 語言服務 (Language service)",
      "B. Azure Bot Service",
      "C. 表格辨識器 (Form Recognizer)",
      "D. 異常偵測器 (Anomaly Detector)"
    ],
    "subQuestions": null,
    "answer": "A 和 B A. 語言服務 (Language service) B. Azure Bot Service",
    "rationale": "要開發一個能讓使用者透過自然語言查詢知識庫的機器人，您需要： 一個知識庫並提供查詢能力：Azure AI 語言服務中的自訂問題解答 (前身為 QnA Maker) 功能，允許您從現有內容建立知識庫，並透過自然語言進行查詢。 一個機器人框架來處理使用者互動和通道整合：Azure Bot Service 提供了建置、連接、測試和部署智慧型機器人的平台。 因此，語言服務 (用於知識庫和 NLP) 和 Azure Bot Service (用於機器人的建構與通道) 是必需的。 C. 表格辨識器用於從文件中提取表格式資料和鍵值對。 D. 異常偵測器用於識別資料中的異常模式。",
    "examTip": "建置問答機器人通常涉及兩個核心 Azure 服務： Azure AI 語言服務 (特別是其自訂問題解答功能) 用於建立和管理知識庫。 Azure Bot Service 用於建立機器人本身，處理使用者互動並連接到不同的通訊管道 (如網頁聊天、Teams 等)。",
    "source": 3
  },
  {
    "id": 266,
    "category": "outline-1",
    "type": "single",
    "question": "您正在建置 AI 應用程式。 您需要確保應用程式使用負責任 AI 的準則。 您應該遵循下列哪兩個準則？每個正確答案都是解決方案的一部分。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 建立風險治理委員會,包括合法小組的成員、風險治理小組的成員,以及隱私保護專員。",
      "B. 實作 AI 模型驗證的程式，做為軟體檢閱程式的一部分。",
      "C. 防止洩漏使用 AI 演算法自動做出決策。",
      "D. 實作敏捷式軟體開發 (Agile Software Development) 方法。"
    ],
    "subQuestions": null,
    "answer": "A 和 B A. 建立風險治理委員會,包括合法小組的成員、風險治理小組的成員,以及隱私保護專員。 B. 實作 AI 模型驗證的程式，做為軟體檢閱程式的一部分。",
    "rationale": "負責任 AI 的實踐需要組織層面的支持和技術層面的保障。 A. 建立風險治理委員會：這涉及到負責任 AI 的權責 (Accountability) 原則。有一個專門的委員會，包含法律、風險和隱私專家，可以幫助制定和監督 AI 道德準則的實施，確保有人對 AI 系統的影響負責。 B. 實作 AI 模型驗證的程式：這涉及到可靠性與安全性 (Reliability and Safety) 以及透明度 (Transparency) 原則。驗證模型確保其按預期工作，減少錯誤，並有助於理解模型的行為。將其納入軟體檢閱流程是確保品質和責任的良好實踐。 C. 「防止洩漏使用 AI 演算法自動做出決策」的表述有些模糊。「防止洩漏」可能指防止演算法細節外洩，或者指確保自動決策過程的透明和可控。如果是後者，它與透明度和權責相關，但 A 和 B 更直接且全面。如果指完全禁止自動決策，則不現實。 D. 敏捷式軟體開發是一種開發方法論，本身並非負責任 AI 準則，儘管它可以幫助團隊在開發過程中更好地融入負責任 AI 的考量。 選項 A 和 B 是更直接和核心的負責任 AI 實踐。 (注意: PDF 螢幕截圖顯示 A 和 B 被標記為錯誤，並提示 C 和 D。這很可能是一個錯誤的答案標記，因為 A 和 B 明顯更符合負責任 AI 的核心原則。)",
    "examTip": "負責任 AI 不僅僅是技術問題，也涉及組織流程和治理。尋找那些能夠從組織和技術層面確保 AI 系統符合道德和社會期望的措施。",
    "source": 3
  },
  {
    "id": 267,
    "category": "outline-4",
    "type": "single",
    "question": "哪一項 Azure 認知服務可用來找出包含敏感性資訊的檔？",
    "options": [
      "A. 自訂視覺 (Custom Vision)",
      "B. 交談語言理解 (CLU)",
      "C. 表格辨識器 (Form Recognizer)"
    ],
    "subQuestions": null,
    "answer": "B. 交談語言理解 (CLU)",
    "rationale": "找出文件中包含的敏感性資訊，例如個人識別資訊 (PII)，是 Azure AI 語言服務（其前身包含 Text Analytics）的功能之一。該服務可以偵測多種類型的 PII。 雖然交談語言理解 (CLU) 主要用於理解對話中的意圖和實體，但它屬於廣泛的Azure AI 語言服務家族。在 AI-900 考試選項中，如果沒有更精確的「Azure AI 語言服務」或「文字分析」選項，CLU 可能被視為代表性的 NLP 服務選項。 更準確地說，PII 偵測是 Azure AI 語言服務下的一項特定功能。 A. 自訂視覺用於影像分類和物件偵測。 C. 表格辨識器用於從文件中擷取表單和表格資料。",
    "examTip": "PII 偵測是負責任 AI 中隱私權與安全性原則的重要應用。知道 Azure AI 語言服務提供此功能。如果選項中出現「語言服務」或「文字分析」，通常是處理文本中敏感資訊的首選。",
    "source": 3
  },
  {
    "id": 268,
    "category": "outline-2",
    "type": "single",
    "question": "您想要使用 Machine Learning 設計工具部署 Azure Machine Learning 模型。 您應該依序執行下列四項動作？作答時，請將適當的動作清單移至作答區，並按照正確順序排列。 提供的動作選項 (請依正確順序排列至下方作答區)： 對原始資料集評估模型。 內嵌及準備資料集。 定型模型。 將資料隨機分割為訓練資料與驗證資料... 作答區 (正確順序應如下)： 內嵌及準備資料集。 將資料隨機分割為訓練資料與驗證資料... 定型模型。 對原始資料集評估模型。",
    "options": [
      "A. 答案 (正確順序)： 內嵌及準備資料集。 將資料隨機分割為訓練資料與驗證資料... 定型模型。 對原始資料集評估模型。 (更準確地說，是對「驗證/測試資料集」評估模型)",
      "B. 分類標籤",
      "C. 特徵值",
      "D. 超參數"
    ],
    "subQuestions": null,
    "answer": "A. 答案 (正確順序)： 內嵌及準備資料集。 將資料隨機分割為訓練資料與驗證資料... 定型模型。 對原始資料集評估模型。 (更準確地說，是對「驗證/測試資料集」評估模型)",
    "rationale": "使用 Azure Machine Learning 設計工具建立和部署模型的典型流程如下： 內嵌及準備資料集：首先，需要將資料載入到設計工具中，並進行必要的清理、轉換和特徵工程。 將資料隨機分割為訓練資料與驗證資料：將資料集分割成訓練集和測試集（或驗證集）是標準做法。模型在訓練集上學習，然後在測試集上評估其泛化能力。 定型模型：使用訓練資料集和選擇的演算法來訓練模型。 對原始資料集評估模型：更精確地說，應該是使用「測試/驗證資料集」（即模型未見過的資料部分）來評估模型的性能。題目中的「原始資料集」在此應理解為分割後的測試部分。",
    "examTip": "記住機器學習的標準工作流程：資料準備 -> 資料分割 -> 模型訓練 -> 模型評估 -> 模型部署。即使使用視覺化工具如設計工具，這個基本流程也是不變的。",
    "source": 3
  },
  {
    "id": 269,
    "category": "outline-2",
    "type": "single",
    "question": "請將機器學習模型與適當的描述配對。 作答時，請將左側資料行所列的適當模型，拖曳至右側對應的描述。每項模型可能只使用一次，也可能使用多次，甚至完全用不到。 注意:每答對一個選項，可得一分。 模型 (Model) A. 迴歸 (Regression) B. 分類 (Classification) C. 叢集 (Clustering) 描述 (Description) 用以預測數值的受監督機器學習模型 用以預測類別的受監督機器學習模型 用以根據特徵將相似實體分組的不受監督機器學習模型",
    "options": [
      "A. 1. - 用以預測數值的受監督機器學習模型 (A. 迴歸) 2. - 用以預測類別的受監督機器學習模型 (B. 分類) 3. - 用以根據特徵將相似實體分組的不受監督機器學習模型 (C. 叢集)",
      "B. 強化學習",
      "C. 監督式學習",
      "D. 非監督式學習"
    ],
    "subQuestions": null,
    "answer": "A. 1. - 用以預測數值的受監督機器學習模型 (A. 迴歸) 2. - 用以預測類別的受監督機器學習模型 (B. 分類) 3. - 用以根據特徵將相似實體分組的不受監督機器學習模型 (C. 叢集)",
    "rationale": "迴歸 (Regression)：是一種監督式學習，用於預測連續數值型的輸出（標籤）。 分類 (Classification)：是一種監督式學習，用於預測項目屬於哪個離散的類別（標籤）。 叢集 (Clustering)：是一種非監督式學習，用於根據資料點的特徵將它們分組成相似的群組，而不需要預先定義的標籤。",
    "examTip": "務必掌握三種主要機器學習類型的定義及其是監督式還是非監督式學習： 迴歸：監督式，預測數值。 分類：監督式，預測類別。 叢集：非監督式，資料分群。",
    "source": 3
  },
  {
    "id": 270,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "監視線上服務的評論是否包含不雅用語為一項自然語言處理",
        "answer": "是"
      },
      {
        "text": "辨識影像中品牌標誌為一項自然語言處理",
        "answer": "否"
      },
      {
        "text": "監視公用新聞網站是否包含產品負面陳述為一項自然語言處理",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 監視線上服務的評論是否包含不雅用語為一項自然語言處理範例。 2. 否 - 辨識影像中品牌標誌為一項自然語言處理範例。 3. 是 - 監視公用新聞網站是否包含產品負面陳述為一項自然語言處理範例。",
    "rationale": "第一句：監視評論是否包含不雅用語，涉及到對文字內容的分析和理解，這屬於內容仲裁或文本分類，是自然語言處理 (NLP) 的應用。因此，敘述為「是」。 第二句：辨識影像中的品牌標誌是電腦視覺的工作負載（具體來說是物件偵測或品牌偵測），與自然語言處理無關。因此，敘述為「否」。 第三句：監視新聞網站內容，判斷是否包含對產品的負面陳述，涉及到情感分析或文本分類，這些都是自然語言處理的典型應用。因此，敘述為「是」。",
    "examTip": "再次強調，自然語言處理是關於處理和理解人類語言（文字或語音）。如果任務涉及分析圖像或影片，則屬於電腦視覺。",
    "source": 3
  },
  {
    "id": 271,
    "category": "outline-1",
    "type": "single",
    "question": "下列哪一項是 Microsoft 負責任 AI 準則的透明度範例？",
    "options": [
      "A. 確保儲存使用者特殊權限資料的方式安全無虞",
      "B. 協助使用者瞭解 AI 系統所做的決定",
      "C. 確保開發人員為其建立的解決方案負責",
      "D. 確保所有申請人都有相同的機會"
    ],
    "subQuestions": null,
    "answer": "B. 協助使用者瞭解 AI 系統所做的決定",
    "rationale": "Microsoft 負責任 AI 的透明度 (Transparency) 原則強調 AI 系統的運作方式、其能力和限制應該是可理解的。這包括協助使用者瞭解系統為何做出特定決策。 A. 確保資料安全無虞屬於隱私權與安全性原則。 C. 確保開發人員負責屬於權責 (Accountability)原則。 D. 確保所有申請人都有相同的機會屬於公平性 (Fairness)原則。",
    "examTip": "透明度的核心是「可理解性」和「可解釋性」。當選項提到讓使用者明白系統如何運作或為何做出決策時，通常與透明度相關。",
    "source": 3
  },
  {
    "id": 272,
    "category": "outline-1",
    "type": "single",
    "question": "驗證機器學習模型並未展現種族或性別偏見，是哪一項 Microsoft 負責任 AI 準則的範例？",
    "options": [
      "A. 安全",
      "B. 可靠性",
      "C. 公平性 (Fairness)",
      "D. 隱私權和安全性"
    ],
    "subQuestions": null,
    "answer": "C. 公平性 (Fairness)",
    "rationale": "Microsoft 負責任 AI 的公平性 (Fairness) 原則旨在確保 AI 系統公平對待所有人，避免基於種族、性別、年齡或其他受保護特徵而產生歧視性或有偏見的結果。驗證模型沒有展現種族或性別偏見，正是實踐公平性原則的關鍵步驟。",
    "examTip": "當題目提到避免偏見 (bias)、歧視 (discrimination)，或確保對不同群體（如基於性別、種族）的待遇公當時，通常與公平性原則相關。",
    "source": 3
  },
  {
    "id": 273,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 詢問 Cortana 是否即將下雨並取得天氣預報是一種 預測 (Prediction / Forecasting)。",
    "options": [
      "A. Azure AI 翻譯工具 (Translator)",
      "B. 聚類/叢集 (Clustering)",
      "C. 臉部辨識 (Face Recognition)",
      "D. 預測 (Prediction / Forecasting)"
    ],
    "subQuestions": null,
    "answer": "D. 預測 (Prediction / Forecasting)",
    "rationale": "天氣預報是根據歷史數據和當前氣象條件來推斷未來天氣狀況的過程。這是一種典型的預測 (prediction) 或預報 (forecasting) 工作負載。Cortana 作為一個智慧助理，利用 AI 技術（包括自然語言處理和對預測模型的存取）來提供這類資訊。",
    "examTip": "預測/預報工作負載旨在根據現有數據推斷未來事件或數值。天氣預報、銷售預測、股票價格預測等都是常見例子。",
    "source": 3
  },
  {
    "id": 274,
    "category": "outline-1",
    "type": "single",
    "question": "請將 Azure OpenAI 大型語言模型 (LLM) 程式與適當的工作配對。 作答時，請將左側資料行所列的選程式，拖曳至右側對應的工作。每個程式可能只使用一次，也可能使用多次，甚至完全用不到。 注意：每答對一個配對，可得一分。 程式 (Program) A. 分類 (Classification) B. 產生 (Generation) C. 摘要 (Summarization) 工作 (Task) 檢測小說作品的類型。 根據文字輸入建立重點清單。 根據產品描述建立廣告標語。",
    "options": [
      "A. 迴歸",
      "B. 叢集",
      "C. 1. - 檢測小說作品的類型。 (A. 分類) 2. - 根據文字輸入建立重點清單。 (C. 摘要) 3. - 根據產品描述建立廣告標語。 (B. 產生)",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 檢測小說作品的類型。 (A. 分類) 2. - 根據文字輸入建立重點清單。 (C. 摘要) 3. - 根據產品描述建立廣告標語。 (B. 產生)",
    "rationale": "Azure OpenAI 的大型語言模型 (LLM) 能夠執行多種自然語言處理任務： 檢測小說作品的類型： 這是一個分類 (Classification) 任務，目標是將輸入文本（小說）分配到預定義的類別（類型，如科幻、愛情、懸疑等）中。 根據文字輸入建立重點清單： 這可以被視為摘要 (Summarization) 任務，目標是從較長的文本中提取關鍵資訊並以簡潔的形式（重點清單）呈現。 根據產品描述建立廣告標語： 這是一個內容產生 (Generation) 任務，目標是基於輸入的產品描述，創作出新的、有創意的廣告標語。",
    "examTip": "理解 LLM 的常見應用場景： 分類：將文本歸入特定類別。 摘要：將長文本濃縮為短摘要或要點。 產生：創造新的文本內容，如故事、詩歌、程式碼、廣告文案等。 問答：根據提供的上下文回答問題。 翻譯：在不同語言間轉換文本。",
    "source": 3
  },
  {
    "id": 275,
    "category": "outline-3",
    "type": "single",
    "question": "您需要實現一套預先建置的解決方案以識別數位相片中的知名品牌。 您應該使用下列哪一項 Azure 認知服務？",
    "options": [
      "A. 臉部偵測 (Face Detection)",
      "B. 電腦視覺 (Computer Vision)",
      "C. 年齡估計 (Age Estimation)",
      "D. 臉部驗證 (Face Verification)"
    ],
    "subQuestions": null,
    "answer": "B. 電腦視覺 (Computer Vision)",
    "rationale": "Azure AI Vision 服務（先前稱為電腦視覺服務）提供預先建置的模型來分析影像，其中包括偵測知名品牌的功能。這允許開發者快速整合品牌識別能力到應用程式中，而無需自行訓練模型。 D. 自訂視覺 (Custom Vision)：用於訓練自訂的影像分類和物件偵測模型。如果需要識別的品牌不在預建模型的範圍內，或者需要更高的特定性，則可以使用自訂視覺。但題目指明是「預先建置的解決方案」和「知名品牌」，這更符合 Azure AI Vision 的現成功能。 B. 表格辨識器：用於從文件中提取文字、表格和鍵值對。 C. 臉部服務：專門用於臉部偵測、分析和辨識。 (註：PDF 螢幕截圖的答案 D (自訂視覺) 可能基於對「預先建置的解決方案」的不同理解，或者服務功能在不同時間點的側重。然而，目前 Azure AI Vision 明確提供知名品牌偵測作為其分析影像功能的一部分。)",
    "examTip": "區分 Azure AI Vision (通用影像分析，包含品牌偵測) 和 自訂視覺 (訓練自訂模型)。如果題目強調「預先建置」、「通用」、「知名」等，通常指向 Azure AI Vision。如果強調「訓練自己的模型」、「特定物件」，則指向自訂視覺。",
    "source": 3
  },
  {
    "id": 276,
    "category": "outline-3",
    "type": "single",
    "question": "您需要開發一個行動應用程式，供員工差旅時掃描及儲存其費用。 您應該使用哪種電腦視覺類型？",
    "options": [
      "A. 物件偵測",
      "B. 臉部偵測",
      "C. 影像分類",
      "D. 光學字元辨識 (OCR)"
    ],
    "subQuestions": null,
    "answer": "D. 光學字元辨識 (OCR)",
    "rationale": "掃描費用單據並儲存其內容，關鍵在於從影像中提取文字資訊（如商家名稱、日期、金額等）。光學字元辨識 (OCR) 是專門用於從影像中讀取和識別文字的電腦視覺技術。 A. 物件偵測用於識別和定位影像中的物件。 B. 臉部偵測用於偵測和分析人臉。 C. 影像分類用於將整個影像歸類到特定類別。 這些都與從費用單據中提取文字資訊的需求不直接相關。",
    "examTip": "當任務涉及從影像（如掃描文件、照片中的標誌、收據）中「讀取文字」或「提取文字內容」時，答案幾乎總是光學字元辨識 (OCR)。",
    "source": 3
  },
  {
    "id": 277,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 定型分類模型之前先為影像指派類別，為下列何者的範例：標記 (Labeling)",
    "options": [
      "A. 監督式學習 (Supervised Learning)",
      "B. 強化學習 (Reinforcement Learning)",
      "C. 遷移學習 (Transfer Learning)",
      "D. 標記 (Labeling)"
    ],
    "subQuestions": null,
    "answer": "D. 標記 (Labeling)",
    "rationale": "在監督式學習（包括分類模型）中，標記 (labeling) 是指為訓練資料的每個樣本（在此案例中是影像）提供一個已知的輸出值或類別（在此案例中是影像的類別）。模型會從這些帶有標籤的資料中學習如何進行分類。",
    "examTip": "在監督式學習中，標籤是模型要預測的「答案」或「目標」。為訓練資料提供這些答案的過程就叫做標記。",
    "source": 3
  },
  {
    "id": 278,
    "category": "outline-4",
    "type": "single",
    "question": "您需要透過實作聊天機器人，以預先定義的答案來回答簡單的問題，藉此減輕電話接線員的負擔。 您應該使用下列哪兩種 AI 服務來達成目標？每個正確答案都是解決方案的一部分。 注意；每答對一個選項，可得一分。",
    "options": [
      "A. Azure Bot Service",
      "B. 文字分析",
      "C. 語言服務 (Language Service)",
      "D. 翻譯工具"
    ],
    "subQuestions": null,
    "answer": "A 和 C A. Azure Bot Service C. 語言服務 (Language Service)",
    "rationale": "要建立一個用預先定義答案回答簡單問題的聊天機器人，通常需要： 建立和管理知識庫： Azure AI 語言服務中的自訂問題解答功能 (前身為 QnA Maker) 允許您從現有內容 (如FAQ) 建立問答配對的知識庫。 建立和部署機器人： Azure Bot Service 提供了一個框架來建置機器人，處理使用者互動，並將機器人連接到不同的通訊通道。 B. 文字分析 (現為 Azure AI 語言服務的一部分) 提供情感分析、關鍵片語提取等功能，但不是直接用於建立問答知識庫。 D. 翻譯工具用於語言翻譯。",
    "examTip": "再次強調，建置問答機器人的標準組合是 Azure AI 語言服務 (用於知識庫) 和 Azure Bot Service (用於機器人框架)。",
    "source": 3
  },
  {
    "id": 279,
    "category": "outline-1",
    "type": "single",
    "question": "下列哪一項不適用於 Microsoft 負責任的 AI 的指導原則？",
    "options": [
      "A. 果斷性 (Decisiveness)",
      "B. 公平性",
      "C. 可靠性和安全性",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "A. 果斷性 (Decisiveness)",
    "rationale": "Microsoft 負責任 AI 的六大指導原則是： 公平性 (Fairness) 可靠性與安全性 (Reliability and Safety) 隱私權與安全性 (Privacy and Security) 包容性 (Inclusiveness) 透明度 (Transparency) 權責 (Accountability) 「果斷性 (Decisiveness)」並非其中之一。",
    "examTip": "務必記住 Microsoft 負責任 AI 的全部六個指導原則。考試常會以「下列何者是/不是」的方式來測驗。",
    "source": 3
  },
  {
    "id": 280,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個資料集，包含了燃油樣本的實驗資料。 您需要根據樣本密度預測其能量輸出。 您應該使用下列哪一種類型的 AI 工作負載？",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 聚集 (Clustering)",
      "C. 分類",
      "D. 知識採礦 (Knowledge Mining)"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "題目要求預測「能量輸出」。能量輸出通常是一個連續的數值（例如 10.5 MJ/kg, 12.3 MJ/kg 等）。預測連續數值的機器學習任務屬於迴歸 (Regression)。 B. 聚集 (Clustering) 是非監督式學習，用於將資料分群。 C. 分類 (Classification) 用於預測離散的類別。 D. 知識採礦 (Knowledge Mining) 通常指從大量非結構化資料中提取可操作的見解，例如使用 Azure AI Search。",
    "examTip": "判斷機器學習類型時，關鍵是看預測目標（標籤）的性質。如果是連續數值，就是迴歸。",
    "source": 3
  },
  {
    "id": 281,
    "category": "outline-4",
    "type": "single",
    "question": "您計劃使用 Azure 認知服務來開發語音控制的個人助理應用程式。 請將 Azure 認知服務與適當的工作配對。 作答時，請將左側資料行所列的適當服務，拖曳至右側對應的描述。每項服務可能只使用一次，也可能使用多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 服務 (Service) A. Azure AI 翻譯工具文字 (Translator Text) B. Azure AI 語音 (Speech) C. Azure AI 語言服務 (Language Service) 描述 (Description) 將使用者的語音轉換為文字。 識別使用者的意圖。 向使用者提供口語回應。",
    "options": [
      "A. 關鍵片語擷取 (Key Phrase Extraction)",
      "B. 對話式語言理解 (CLU)",
      "C. 1. - 將使用者的語音轉換為文字。 (B. Azure AI 語音) 2. - 識別使用者的意圖。 (C. Azure AI 語言服務) 3. - 向使用者提供口語回應。 (B. Azure AI 語音)",
      "D. 向量化/嵌入技術 (Embeddings)"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 將使用者的語音轉換為文字。 (B. Azure AI 語音) 2. - 識別使用者的意圖。 (C. Azure AI 語言服務) 3. - 向使用者提供口語回應。 (B. Azure AI 語音)",
    "rationale": "根據 Azure 服務的功能： 將使用者的語音轉換為文字 (STT)： 這是 Azure AI 語音 (Speech) 服務的核心功能。 識別使用者的意圖 (Intent Recognition)： 這是由 Azure AI 語言服務 (Language Service) 中的交談語言理解 (CLU)（前身為 LUIS）提供的功能。 向使用者提供口語回應 (TTS)： 這也是 Azure AI 語音 (Speech) 服務的核心功能。 Azure AI 翻譯工具文字則是用於在不同語言之間翻譯文本。",
    "examTip": "要清楚區分語音服務（處理語音的輸入和輸出）、語言服務（處理文本的理解，如意圖和實體）以及翻譯服務（處理語言間的轉換）。個人助理應用程式通常會綜合使用這些服務。",
    "source": 3
  },
  {
    "id": 282,
    "category": "outline-4",
    "type": "single",
    "question": "您具有如下圖所示的程式。 圖中顯示下列哪一種類型的 AI 解決方案？",
    "options": [
      "A. 電腦視覺應用程式",
      "B. 聊天機器人 (Chatbot)",
      "C. 情感分析解決方案",
      "D. 機器學習模型"
    ],
    "subQuestions": null,
    "answer": "B. 聊天機器人 (Chatbot)",
    "rationale": "圖中顯示的是一個典型的聊天機器人介面，使用者可以透過文字輸入與系統進行互動式對話。機器人理解使用者的請求（例如「我想預訂飛往倫敦的航班」）並作出回應或執行相應操作。這是交談式 AI 的一種常見應用。",
    "examTip": "能夠從介面截圖或功能描述中識別出聊天機器人是 AI-900 的基本要求。關鍵特徵是互動式對話介面。",
    "source": 3
  },
  {
    "id": 283,
    "category": "outline-4",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 在語音服務中使用文本轉語音時，要獲得最類似人類的結果，應該使用 類神經語音 (Neural voice)。",
    "options": [
      "A. 關鍵片語擷取 (Key Phrase Extraction)",
      "B. 類神經語音 (Neural voice) (題目中可能譯為「中性語音」)",
      "C. 文字分類 (Text Classification)",
      "D. 情感分析 (Sentiment Analysis)"
    ],
    "subQuestions": null,
    "answer": "B. 類神經語音 (Neural voice) (題目中可能譯為「中性語音」)",
    "rationale": "Azure AI 語音服務的文本轉語音 (TTS) 功能提供了不同類型的語音，其中類神經語音 (Neural voice)是利用深度類神經網路生成的，其發音和語調非常接近真人說話，聽起來最自然、最流暢。題目中「中性語音」應指此類語音。",
    "examTip": "對於文本轉語音，如果追求「最自然」、「最像真人」的發音效果，答案通常指向類神經語音 (Neural voice)。",
    "source": 3
  },
  {
    "id": 284,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 歷史學家可以使用 光學字元辨識(OCR) 將報紙文章數位化。",
    "options": [
      "A. 光學字元辨識(OCR)",
      "B. 影像分類",
      "C. 物件偵測",
      "D. 語意分割"
    ],
    "subQuestions": null,
    "answer": "A. 光學字元辨識(OCR)",
    "rationale": "將報紙文章（紙本印刷文字）轉換為數位文字格式，以便於儲存、搜尋和分析，這正是光學字元辨識 (OCR) 技術的典型應用。OCR 可以識別影像中的印刷或手寫文字，並將其轉換為機器可讀的文字。",
    "examTip": "「數位化」紙本文件、從圖片中「讀取文字」等場景，都指向OCR技術。",
    "source": 3
  },
  {
    "id": 285,
    "category": "outline-2",
    "type": "single",
    "question": "您應該使用哪種機器學習類型預測下個月售出的禮品卡數量？",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 分類",
      "C. 叢集 (Clustering，題目為蓄集，應為叢集)"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "預測「下個月售出的禮品卡數量」是在預測一個具體的數值。這個數值是連續的（或至少是離散的整數，但可以取較大範圍的值），因此屬於迴歸 (Regression) 問題。",
    "examTip": "判斷問題類型：預測數量、金額、大小等數值 -> 迴歸。",
    "source": 3
  },
  {
    "id": 286,
    "category": "outline-2",
    "type": "single",
    "question": "您要開發使用分類來預測事件的模型。 您根據測試資料評分的模型的混淆矩陣，如以下圖所示。 [圖片描述：一個標準的2x2混淆矩陣。假設值如下（從左到右，從上到下讀取格子）：左上 (TP) = 11, 右上 (FP) = 5, 左下 (FN) = 0, 右下 (TN) = 1033。 實際正例在第一列，實際負例在第二列。預測正例在第一行，預測負例在第二行。通常第一行/列是 Positive。] 請根據圖中所示的資訊，使用下拉功能表選取答案選項，完成每項敘述 注意；每答對一個選項，可得一分。 正確預測肯定的有【答案選項】： 0 11 1033 5 錯誤否定的有【答案選項】： 0 11 1033 5",
    "options": [
      "A. 聚類/叢集 (Clustering)",
      "B. 時間序列預測 (Time Series Forecasting)",
      "C. 正確預測肯定的有： 11 (True Positives) 錯誤否定的有： 0 (False Negatives)",
      "D. 分類 (Classification)"
    ],
    "subQuestions": null,
    "answer": "C. 正確預測肯定的有： 11 (True Positives) 錯誤否定的有： 0 (False Negatives)",
    "rationale": "混淆矩陣 (Confusion Matrix) 用於評估分類模型的性能。對於二元分類問題，通常結構如下（假設 Positive 是我們關心的類別）： True Positives (TP)： 實際為正，預測也為正。（正確預測肯定的） False Negatives (FN)： 實際為正，預測為負。（錯誤否定的，漏報） False Positives (FP)： 實際為負，預測為正。（錯誤肯定的，誤報，Type I error） True Negatives (TN)： 實際為負，預測也為負。 根據題目圖片中的數值 (通常左上為 TP，左下為 FN)： 正確預測肯定的 (TP) = 11 錯誤否定的 (FN) = 0",
    "examTip": "務必理解混淆矩陣中 TP, TN, FP, FN 的含義。 「正確預測肯定」 = True Positive (TP) 「錯誤否定」 (實際是 Positive，但模型預測是 Negative) = False Negative (FN) 「錯誤肯定」 (實際是 Negative，但模型預測是 Positive) = False Positive (FP) 「正確預測否定」 = True Negative (TN)",
    "source": 3
  },
  {
    "id": 287,
    "category": "outline-2",
    "type": "single",
    "question": "一項醫學研究計畫使用大量匿名腦部掃描影像資料及且已分類為預先定義的腦溢血類型。 您需要使用機器學習，支援在人工審查影像前，早期判讀影像中的不同腦溢血類型。 這是哪種機器學習類型範例？",
    "options": [
      "A. 回歸",
      "B. 分類 (Classification)",
      "C. 聚集 (Clustering)"
    ],
    "subQuestions": null,
    "answer": "B. 分類 (Classification)",
    "rationale": "題目描述的任務是將腦部掃描影像判讀為「預先定義的腦溢血類型」。這意味著輸出結果是從一組已知的、離散的類別中選擇一個。這種預測項目屬於哪個預定義類別的機器學習任務屬於分類 (Classification)。資料集也提到「已分類為預先定義的腦溢血類型」，表明這是監督式學習的分類問題。",
    "examTip": "當預測目標是「類型」、「種類」、「組別」等離散的標籤時，通常是分類問題。",
    "source": 3
  },
  {
    "id": 288,
    "category": "outline-1",
    "type": "single",
    "question": "請將 Microsoft 責任 AI 的指導準則與正確描述相配對。 作答時，請將左欄所列的適當準則，拖曳至右側的敘述中。每項準則可能只使用一或多次，甚至完全用不到。 注意: 每完成一項正確配對可得一分。 準則 A. 可靠性與安全性 (Reliability and Safety) B. 權責 (Accountability) C. 隱私權和安全性 (Privacy and Security) D. 公平性 (Fairness) E. 包容性 (Inclusiveness) 描述 確定 AI 系統能依原始設計運行，回應未預期的狀況，以及拒絕有害的操控。 實施處理程式，以確保人類可覆寫 AI 系統制定的決策。 為消費者提供資訊，使其得以控制對資料的收集、使用和儲存。",
    "options": [
      "A. 公平性",
      "B. 1. - 確定 AI 系統能依原始設計運行，回應未預期的狀況，以及拒絕有害的操控。 (A. 可靠性與安全性) 2. - 實施處理程式，以確保人類可覆寫 AI 系統制定的決策。 (B. 權責) 3. - 為消費者提供資訊，使其得以控制對資料的收集、使用和儲存。 (C. 隱私權和安全性)",
      "C. 隱私權與安全性",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "B. 1. - 確定 AI 系統能依原始設計運行，回應未預期的狀況，以及拒絕有害的操控。 (A. 可靠性與安全性) 2. - 實施處理程式，以確保人類可覆寫 AI 系統制定的決策。 (B. 權責) 3. - 為消費者提供資訊，使其得以控制對資料的收集、使用和儲存。 (C. 隱私權和安全性)",
    "rationale": "描述1：確定 AI 系統能依原始設計運行、處理突發狀況並抵抗惡意操控，這直接體現了可靠性與安全性 (Reliability and Safety) 的原則。 描述2：確保人類可以監督並在必要時覆寫 AI 系統的決策，這是權責 (Accountability) 原則的體現，強調人類對 AI 系統的最終控制權和責任。 描述3：讓消費者了解其資料如何被收集、使用和儲存，並賦予他們控制權，這符合隱私權和安全性 (Privacy and Security) 原則。",
    "examTip": "再次複習 Microsoft 負責任 AI 的六大原則，並理解每個原則的核心含義，以便能準確配對相關描述。",
    "source": 3
  },
  {
    "id": 289,
    "category": "outline-4",
    "type": "single",
    "question": "您需要建置可以大聲朗讀食譜的應用程式，為視力不佳的使用者提供支援。 您應該使用下列哪一種服務？",
    "options": [
      "A. 語音 (Speech)",
      "B. Language Understanding (LUIS)",
      "C. 翻譯工具",
      "D. 文字分析"
    ],
    "subQuestions": null,
    "answer": "A. 語音 (Speech)",
    "rationale": "將食譜（文字內容）「大聲朗讀」出來，這項功能是文本轉語音 (Text-to-Speech, TTS)。Azure AI 語音 (Speech) 服務提供了強大的 TTS 功能，可以將文字轉換為自然的語音。 B. Language Understanding (LUIS)（現為 CLU 的一部分）用於理解使用者意圖。 C. 翻譯工具用於語言翻譯。 D. 文字分析用於從文本中提取見解，如情感、關鍵片語等。",
    "examTip": "「朗讀文字」、「將文字轉換為語音」、「語音合成」等描述都指向文本轉語音 (TTS) 功能，這是 Azure AI 語音服務的核心能力。",
    "source": 3
  },
  {
    "id": 290,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 表格辨識器 (Form Recognizer) 服務可用於擷取駕照上的資訊以填入資料庫中。",
    "options": [
      "A. Azure AI Vision",
      "B. Azure AI Language",
      "C. 表格辨識器 (Form Recognizer)",
      "D. Azure AI Speech"
    ],
    "subQuestions": null,
    "answer": "C. 表格辨識器 (Form Recognizer)",
    "rationale": "Azure AI 文件智慧 (Document Intelligence)（先前稱為表格辨識器）專門用於從各種文件中（包括駕照、發票、收據等）提取文字、鍵/值組、表格和結構化資料。駕照包含許多結構化的資訊，例如姓名、出生日期、證號等，這些都是表格辨識器擅長處理的。",
    "examTip": "當任務涉及從表單、文件或具有結構化/半結構化佈局的影像中提取資訊時，應考慮使用 Azure AI 文件智慧（表格辨識器）。",
    "source": 3
  },
  {
    "id": 291,
    "category": "outline-4",
    "type": "single",
    "question": "請選取可正確完成句子的答選。 自然語言處理可用於 將電子郵件分類為工作相關或個人相關...",
    "options": [
      "A. 迴歸",
      "B. 將電子郵件分類為工作相關或個人相關",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "B. 將電子郵件分類為工作相關或個人相關",
    "rationale": "將電子郵件自動分類為「工作相關」或「個人相關」是一個典型的文本分類 (Text Classification) 任務。這需要分析電子郵件的內容（文字），並根據其主題或特徵將其分配到預先定義的類別中。文本分類是自然語言處理 (NLP) 的核心應用之一。",
    "examTip": "文本分類的應用非常廣泛，例如：垃圾郵件檢測、情感分析（將評論分為正面/負面）、主題分類（將新聞文章歸類）等。",
    "source": 3
  },
  {
    "id": 292,
    "category": "outline-3",
    "type": "yesno",
    "question": "您擁有包含員工及其相片清單的資料庫。 您正在標記員工的新相片。 下列每一項有關 Azure 認知服務的敘述中，若是成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "臉部服務",
        "answer": "是"
      },
      {
        "text": "若您提供每位員工更多不同角度的範例相片，臉部服務",
        "answer": "是"
      },
      {
        "text": "若員工戴著墨鏡，臉部服務",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 臉部服務可用於為員工執行臉部辨識。 2. 是 - 若您提供每位員工更多不同角度的範例相片，臉部服務將能夠更加準確。 3. 否 - 若員工戴著墨鏡，臉部服務將一律無法識別該名員工。",
    "rationale": "第一句：Azure AI 臉部 (Face) 服務的核心功能之一就是臉部辨識，可以將偵測到的臉部與已註冊的人員進行比對。因此，敘述為「是」。 第二句：提供更多樣化、不同角度和條件下的範例相片進行訓練（或建立人員群組），通常有助於提高臉部辨識模型的準確性和強健性。因此，敘述為「是」。 第三句：雖然墨鏡等遮擋物會增加臉部辨識的難度，並可能降低準確率，但並非「一律無法識別」。現代的臉部辨識演算法對於一定程度的遮擋具有一定的容忍度，識別成功與否取決於遮擋的程度、影像品質、演算法能力等多種因素。因此，敘述為「否」。",
    "examTip": "對於臉部辨識： 更多樣的訓練/註冊資料有助於提升準確性。 遮擋（如墨鏡、口罩）會影響辨識，但不是絕對的「無法辨識」。",
    "source": 3
  },
  {
    "id": 293,
    "category": "outline-4",
    "type": "single",
    "question": "請將服務與適當的描述配對。 作答時，請將左側資料行所列的適當服務，拖曳至右側對應的描述。 每項服務可能只使用一或多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 服務 A. Azure Bot Service B. 語言服務 (Language Service) C. 語音 (Speech) 描述 可使用自然語言來查詢知識庫。 可進行語音轉換文字的即時轉錄。",
    "options": [
      "A. Azure AI 搜尋 (AI Search)",
      "B. 1. - 可使用自然語言來查詢知識庫。 (B. 語言服務) 2. - 可進行語音轉換文字的即時轉錄。 (C. 語音)",
      "C. Azure AI 語言 (Language Service)",
      "D. Azure AI 異常偵測工具 (Anomaly Detector)"
    ],
    "subQuestions": null,
    "answer": "B. 1. - 可使用自然語言來查詢知識庫。 (B. 語言服務) 2. - 可進行語音轉換文字的即時轉錄。 (C. 語音)",
    "rationale": "可使用自然語言來查詢知識庫： 這描述的是 Azure AI 語言服務中的自訂問題解答功能（前身為 QnA Maker），它允許使用者透過自然語言與知識庫互動。 可進行語音轉換文字的即時轉錄： 這是 Azure AI 語音 (Speech) 服務的核心功能之一，即語音轉文字 (STT)。 Azure Bot Service 則是用來建立、部署和管理機器人的平台，機器人通常會利用語言服務和語音服務。",
    "examTip": "再次釐清各服務的主要職責： 語言服務：理解文本、建立問答知識庫、情感分析、實體辨識等。 語音服務：語音轉文字 (STT)、文字轉語音 (TTS)、語音翻譯、說話者辨識。 Azure Bot Service：建構與不同通道整合的交談式機器人。",
    "source": 3
  },
  {
    "id": 294,
    "category": "outline-2",
    "type": "single",
    "question": "您有預測 v.s.實際圖表，如下所示。 請問此圖使用哪種評估模型？",
    "options": [
      "A. 分類",
      "B. 聚集 (Clustering)",
      "C. 迴歸 (Regression)"
    ],
    "subQuestions": null,
    "answer": "C. 迴歸 (Regression)",
    "rationale": "圖中顯示的是「預測值」與「實際值」的比較，這是評估迴歸 (Regression) 模型性能的常用視覺化方法。在理想情況下，如果模型預測完美，所有點都會落在 y=x 的對角線上。點圍繞對角線的分佈情況可以直觀地反映模型的預測準確性。 分類模型的評估通常使用混淆矩陣、ROC 曲線等。 叢集模型的評估通常關注群組內相似性和群組間差異性，視覺化方法可能包括資料點分佈圖（按群組著色）。",
    "examTip": "「預測值 vs. 實際值」散佈圖是迴歸模型評估的標誌性圖表。",
    "source": 3
  },
  {
    "id": 295,
    "category": "outline-1",
    "type": "single",
    "question": "您在建置以 AI 為基礎的貸款核准應用程式。 您需要確保應用程式會記錄核准或拒絕貸款的原因，並向申請人提供報告。 這是哪一項 Microsoft 負責任 AI 準則的範例？",
    "options": [
      "A. 透明度 (Transparency)",
      "B. 包容性",
      "C. 權責",
      "D. 公平性"
    ],
    "subQuestions": null,
    "answer": "A. 透明度 (Transparency)",
    "rationale": "確保應用程式記錄決策原因並向申請人提供報告，是為了讓決策過程可被理解和可解釋。這直接符合Microsoft 負責任 AI 的透明度 (Transparency) 原則，該原則強調人們應該能夠了解 AI 系統如何做出決策。同時，這也與權責原則相關，因為記錄原因有助於追溯和釐清責任，但題目更側重於「提供報告」給申請人，使其了解原因，這更偏向透明度。",
    "examTip": "當題目強調「解釋決策原因」、「讓使用者理解系統行為」、「記錄決策過程」時，通常與透明度原則相關。",
    "source": 3
  },
  {
    "id": 296,
    "category": "outline-3",
    "type": "single",
    "question": "您需要為社交媒體建置影像標記解決方案，以便自動標記朋友的影像。 您應該使用下列哪一項 Azure 認知服務？",
    "options": [
      "A. 臉部 (Face)",
      "B. 臉部偵測 (Face Detection)",
      "C. 影像分類 (Image Classification)",
      "D. 臉部識別 (Face Identification)"
    ],
    "subQuestions": null,
    "answer": "A. 臉部 (Face)",
    "rationale": "自動標記朋友的影像，核心是識別影像中的人臉並將其與已知的人物（朋友）進行匹配。這正是 Azure AI 臉部 (Face) 服務的主要功能。該服務可以偵測、分析和辨識人臉。 A. 電腦視覺（現為 Azure AI Vision）提供更廣泛的影像分析功能，如物件偵測、影像描述等，雖然也包含臉部偵測，但臉部服務更專注於人臉相關的進階功能，如辨識。 B. Azure AI 文件智慧用於從文件中提取資料。 D. Azure AI 語言用於處理和理解文本。",
    "examTip": "當任務明確涉及「人臉偵測」、「人臉分析」、「人臉辨識」、「人臉驗證」時，應優先考慮 Azure AI 臉部服務。",
    "source": 3
  },
  {
    "id": 297,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個 Azure Machine Learning 管線，其中包含一個分割資料模組。 分割資料模組會輸出至定型模型模組和評分模型模組。 以下何者為分割資料模組的功能？",
    "options": [
      "A. 調整數值變數，將它們保持在一致的數值範圍內",
      "B. 建立定型和驗證資料集",
      "C. 選取必須包含在模型中的資料列",
      "D. 轉移具有缺少資料的記錄"
    ],
    "subQuestions": null,
    "answer": "B. 建立定型和驗證資料集",
    "rationale": "在機器學習流程中，分割資料 (Split Data) 模組的主要功能是將原始資料集分成兩個（或多個）子集。最常見的用途是將資料分割成： 訓練資料集 (Training Dataset)：用於訓練機器學習模型。 驗證資料集 (Validation Dataset) 或 測試資料集 (Test Dataset)：用於評估已訓練模型的性能，確保模型對新資料具有良好的泛化能力。 題目中提到分割資料模組的輸出分別流向「定型模型」模組和「評分模型」模組，這正符合了建立訓練集和驗證/測試集的目的。 A 描述的是資料正規化或標準化。 C 描述的是資料篩選或取樣。 D 描述的是遺失值處理。",
    "examTip": "分割資料模組是機器學習管線中非常基礎且重要的一環，其核心目的是為了能夠客觀地評估模型性能，避免過度擬合。",
    "source": 3
  },
  {
    "id": 298,
    "category": "outline-1",
    "type": "single",
    "question": "Microsoft 責任 AI 的指導原則是哪三項？每個正確答案都是一種完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 固執性",
      "B. 知識性",
      "C. 決斷性",
      "D. 公平性 (Fairness)",
      "E. 包容性 (Inclusiveness)",
      "F. 可靠性和安全性 (Reliability and Safety)"
    ],
    "subQuestions": null,
    "answer": "D, E, F D. 公平性 (Fairness) E. 包容性 (Inclusiveness) F. 可靠性和安全性 (Reliability and Safety)",
    "rationale": "Microsoft 負責任 AI 的六大指導原則是： 公平性 (Fairness) 可靠性與安全性 (Reliability and Safety) 隱私權與安全性 (Privacy and Security) 包容性 (Inclusiveness) 透明度 (Transparency) 權責 (Accountability) 選項 A, B, C (固執性、知識性、決斷性) 並非 Microsoft 負責任 AI 的指導原則。",
    "examTip": "請務必熟記這六大原則，考試中經常會以不同形式出現，要求您識別哪些是或不是其指導原則。",
    "source": 3
  },
  {
    "id": 299,
    "category": "outline-4",
    "type": "single",
    "question": "您要使用自然語言處理來處理 Microsoft 新聞報導的文字。 您收到如下列所示的輸出。 請問您執行了下列何種類型的自然語言處理？",
    "options": [
      "A. 關鍵片語擷取",
      "B. 翻譯",
      "C. 情感分析",
      "D. 實體辨識 (Entity Recognition)"
    ],
    "subQuestions": null,
    "answer": "D. 實體辨識 (Entity Recognition)",
    "rationale": "圖中顯示的輸出（將文字中的 \"Microsoft\" 標註為 \"Organization\"）是具名實體辨識 (Named Entity Recognition, NER) 的典型結果。NER 的目標是從文本中識別並分類預先定義的實體類別，例如人名、組織名、地名、日期、產品等。 A. 關鍵片語擷取：提取文本中的主要詞語或短語。 B. 翻譯：將文本從一種語言轉換為另一種語言。 C. 情感分析：判斷文本的情緒傾向。",
    "examTip": "當題目展示從文本中找出並標註特定類型的名詞或專有名詞（如公司名、人名、地點）時，應考慮實體辨識 (NER)。",
    "source": 3
  },
  {
    "id": 300,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 AI 解決方案可協助攝影師取得更佳人像相片，方法是提供以下哪一項臉部功能範例之曝光、雜訊與閉塞的回饋： 分析 (Analysis)",
    "options": [
      "A. 分析 (Analysis)",
      "B. 臉部搜尋 (Face Search)",
      "C. 臉部辨識 (Face Recognition)",
      "D. 臉部屬性 (Face Attributes)"
    ],
    "subQuestions": null,
    "answer": "A. 分析 (Analysis)",
    "rationale": "提供關於人像相片中曝光、雜訊、閉塞（遮擋）等問題的回饋，屬於臉部分析 (Face Analysis) 或臉部屬性偵測 (Face Attribute Detection) 的範疇。Azure AI 臉部服務可以偵測臉部並分析多種屬性，包括模糊度、曝光、眼鏡、頭部姿勢、遮擋等。這些分析結果可以幫助攝影師改進人像攝影品質。",
    "examTip": "臉部服務不僅能偵測和辨識臉部，還能分析臉部屬性，如年齡、性別、情緒、姿態、是否有遮擋等。",
    "source": 3
  },
  {
    "id": 301,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 從資料集中隨機選取的資料子集通常用於模型的 驗證 (Validation)",
    "options": [
      "A. 設計工具 (Designer)",
      "B. 管線 (Pipeline)",
      "C. 實驗 (Experiment)",
      "D. 驗證 (Validation)"
    ],
    "subQuestions": null,
    "answer": "D. 驗證 (Validation)",
    "rationale": "在機器學習中，通常會將原始資料集分割。一部分用於訓練模型（訓練集），而另一部分（從原始資料集中隨機選取且模型在訓練過程中未見過）則用於驗證或測試模型的性能。這個子集稱為驗證資料集 (validation dataset) 或測試資料集 (test dataset)。其目的是評估模型對新資料的泛化能力。",
    "examTip": "驗證資料集（或測試資料集）對於客觀評估模型至關重要，它幫助我們了解模型在「真實世界」中的表現，而不僅僅是在它已經學習過的訓練資料上的表現。",
    "source": 3
  },
  {
    "id": 302,
    "category": "outline-1",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "解釋信用貸款應用程式的結果為 Microsoft 責任 AI",
        "answer": "是"
      },
      {
        "text": "依傷害排列保險理賠優先順序的分級機器人為 Microsoft 責任 AI",
        "answer": "否"
      },
      {
        "text": "按不同銷區域的不同定價所提供的 AI",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 解釋信用貸款應用程式的結果為 Microsoft 責任 AI 透明度準則範例。 2. 否 - 依傷害排列保險理賠優先順序的分級機器人為 Microsoft 責任 AI 的可靠性與安全性準則範例。 3. 否 - 按不同銷區域的不同定價所提供的 AI 解決方案為 Microsoft 責任 AI 的包容性準則範例。",
    "rationale": "第一句：解釋信用貸款申請結果的原因，讓申請人了解決策依據，這符合透明度 (Transparency) 原則。因此，敘述為「是」。 第二句：依傷害嚴重程度排列保險理賠優先順序，如果這個排序是準確、一致且能按預期工作的，它可能體現了可靠性。然而，題目本身描述的是一個功能，這個功能是否符合「可靠性與安全性」原則，取決於其設計和實際表現，而不是功能本身直接等於該原則。例如，如果排序錯誤或不穩定，就不符合可靠性。更重要的是，這個場景可能更關聯到公平性（是否對所有理賠都公平排序）或權責（誰對排序結果負責）。僅僅「排列優先順序」並不直接等於「可靠性與安全性」原則。因此，敘述為「否」是合理的，因為它不是該原則的直接範例。 第三句：按不同銷售區域設定不同定價，本身是一種商業策略，不直接體現包容性 (Inclusiveness) 原則。包容性指的是 AI 系統應賦予所有人權力，避免排除或歧視特定群體。如果定價差異導致某些群體無法負擔或被不公平對待，那可能違反公平性原則，但不同區域不同定價本身不等於包容性。因此，敘述為「否」。",
    "examTip": "仔細分析每個場景，判斷它最直接體現了哪個負責任 AI 原則的核心精神。一個場景可能間接觸及多個原則，但題目通常會考查最主要的那個。",
    "source": 3
  },
  {
    "id": 303,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "您使用未標記",
        "answer": "否"
      },
      {
        "text": "分類",
        "answer": "否"
      },
      {
        "text": "依共用特性分組項目為叢集 (Clustering",
        "answer": "是"
      }
    ],
    "answer": "1. 否 - 您使用未標記的資料定型迴歸模型。 2. 否 - 分類技術用於預測一段時間後的連續數值資料。 3. 是 - 依共用特性分組項目為叢集 (Clustering)範例。",
    "rationale": "第一句：迴歸模型是監督式學習的一種，需要使用已標記的資料（即包含已知輸出數值的資料）進行訓練。因此，敘述為「否」。 第二句：分類技術用於預測項目屬於哪個離散的類別，而不是連續數值。預測連續數值資料（無論是否隨時間變化）是迴歸或時間序列預測的任務。因此，敘述為「否」。 第三句：叢集 (Clustering) 是一種非監督式學習技術，其目標就是根據資料點的共同特性將它們分組成不同的群組或叢集。因此，敘述為「是」。",
    "examTip": "再次鞏固對迴歸、分類和叢集這三種基本機器學習類型的理解，包括它們是監督式還是非監督式，以及它們預測的目標類型（數值、類別、群組）。",
    "source": 3
  },
  {
    "id": 304,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 Azure AI 視覺 物件偵測 (Object Detection) 可以用來識別影像中自行車的位置。",
    "options": [
      "A. 影像分類",
      "B. 物件偵測 (Object Detection)",
      "C. 語意分割",
      "D. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "B. 物件偵測 (Object Detection)",
    "rationale": "識別影像中特定物件（如自行車）的位置，並通常以定界框 (bounding box) 標示出來，這是物件偵測 (Object Detection) 的核心功能。Azure AI Vision 服務提供了物件偵測的能力。",
    "examTip": "當任務不僅要識別影像中有什麼，還要知道「在哪裡」時，通常需要物件偵測。",
    "source": 3
  },
  {
    "id": 305,
    "category": "outline-2",
    "type": "single",
    "question": "您使用 Azure Machine Learning 設計工具發佈推斷管線。 您應該使用下列兩個參數存取該 Web 服務？每個正確答案都是一部分的解決方案。 注意；每答對一個選項，可得一分。",
    "options": [
      "A. REST 端點 (Endpoint)",
      "B. 模型名稱",
      "C. 訓練端點",
      "D. 驗證金鑰 (Authentication Key)"
    ],
    "subQuestions": null,
    "answer": "A 和 D A. REST 端點 (Endpoint) D. 驗證金鑰 (Authentication Key)",
    "rationale": "當您在 Azure Machine Learning 中將推斷管線部署為 Web 服務（通常是即時端點）時，用戶端應用程式需要以下資訊才能呼叫該服務： REST 端點 (Endpoint) URI： 這是 Web 服務的唯一網址，用戶端會向此 URI 發送請求。 驗證金鑰 (Authentication Key)（或權杖 Token）： 用於驗證用戶端是否有權限存取該服務。這確保了服務的安全性。 模型名稱和訓練端點與呼叫已部署的推斷服務無直接關係。",
    "examTip": "呼叫已部署的 Azure Machine Learning Web 服務（即時端點）時，通常需要兩樣東西：服務的網址 (端點 URI) 和用於驗證的祕鑰。",
    "source": 3
  },
  {
    "id": 306,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 對於車輛而言，根據重量、引擎動力和其他因素預測每公升燃油行駛距離是下列何者的範例？ 迴歸 (Regression)",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "預測「每公升燃油行駛距離」（例如公里/公升）是在預測一個連續的數值。這種預測數值型輸出的機器學習任務屬於迴歸 (Regression)。",
    "examTip": "再次強調，當預測目標是可以量化的數值時，如距離、價格、溫度、數量等，這通常是迴歸問題。",
    "source": 3
  },
  {
    "id": 307,
    "category": "outline-2",
    "type": "single",
    "question": "您必需利用現有的資料集建立訓練資料集和驗證資料集。 您應該使用 Azure Machine Learning 設計工具的那些模組？",
    "options": [
      "A. 選取資料集中的資料行",
      "B. 分割資料 (Split Data)",
      "C. 合併資料",
      "D. 新增資料列"
    ],
    "subQuestions": null,
    "answer": "B. 分割資料 (Split Data)",
    "rationale": "如第 71 題所述，分割資料 (Split Data) 模組的主要功能是將一個資料集分成兩個或多個部分，通常用於建立訓練資料集和驗證/測試資料集。這是機器學習中準備資料進行模型訓練和評估的標準步驟。",
    "examTip": "在 Azure Machine Learning 設計工具中，當需要從一個資料集產生訓練集和測試集時，分割資料模組是標準的選擇。",
    "source": 3
  },
  {
    "id": 308,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "若為遞歸模型",
        "answer": "是"
      },
      {
        "text": "若為叢集模型",
        "answer": "否"
      },
      {
        "text": "若為分類模型",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 若為迴歸模型，標籤必須是數值。 2. 否 - 若為叢集模型，必須提供標籤。 3. 否 - 若為分類模型，標籤必須是數值。",
    "rationale": "第一句：迴歸模型 (Regression Model) 用於預測連續的數值型標籤。因此，標籤必須是數值。敘述為「是」。(題目中的「遞歸模型」應為「迴歸模型」的筆誤或翻譯問題。) 第二句：叢集模型 (Clustering Model) 屬於非監督式學習，它處理的是未標記的資料，目的是根據資料的相似性將其分群。因此，不需要提供標籤。敘述為「否」。 第三句：分類模型 (Classification Model) 用於預測離散的類別型標籤（例如「是/否」、「貓/狗」、「A類/B類/C類」）。雖然這些類別有時可以用數字表示（例如 0 代表「否」，1 代表「是」），但其本質是類別，而不一定是連續的數值。標籤通常是類別型資料。因此，敘述為「否」。",
    "examTip": "再次區分不同模型類型對標籤的要求： 迴歸：標籤是數值。 分類：標籤是類別（可以是文字或代表類別的數字）。 叢集：沒有標籤（非監督式）。",
    "source": 3
  },
  {
    "id": 309,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 在網站流量大於平時則傳送警示，為下列何者的範例：異常偵測 (Anomaly Detection)。",
    "options": [
      "A. Azure AI 視覺 (Computer Vision)",
      "B. 強化學習 (Reinforcement Learning)",
      "C. Azure OpenAI Service",
      "D. 異常偵測 (Anomaly Detection)"
    ],
    "subQuestions": null,
    "answer": "D. 異常偵測 (Anomaly Detection)",
    "rationale": "網站流量「大於平時」表示發生了與正常模式不符的情況。監測這種不尋常的模式或偏離預期的行為，並在發生時發出警示，是異常偵測 (Anomaly Detection) 的典型應用。",
    "examTip": "異常偵測關注的是找出與「正常」或「預期」模式不同的事件或資料點。",
    "source": 3
  },
  {
    "id": 310,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "驗證集",
        "answer": "否"
      },
      {
        "text": "驗證集",
        "answer": "是"
      },
      {
        "text": "驗證集",
        "answer": "否"
      }
    ],
    "answer": "1. 否 - 驗證集，包含將用於訓練模型的輸入範例集合。 2. 是 - 驗證集，可用以判斷模型預測標籤優良度。 3. 否 - 驗證集，可用以驗證所有訓練資料是否用於訓練該模型。",
    "rationale": "第一句：驗證集 (Validation set) 或測試集是從原始資料中分出來，不用於訓練模型的部分。訓練模型使用的是訓練集 (Training set)。因此，敘述為「否」。 第二句：驗證集的主要用途是在模型訓練完成後，用來評估模型對未曾見過的資料的預測能力（即泛化能力），判斷其預測標籤的優良度（例如準確度、精確率、召回率等）。因此，敘述為「是」。 第三句：驗證集與「驗證所有訓練資料是否用於訓練該模型」無關。訓練過程本身會使用所有指定的訓練資料。驗證集的目的是評估模型性能。因此，敘述為「否」。",
    "examTip": "牢記訓練集和驗證集/測試集的區別和用途： 訓練集：用來「教」模型。 驗證集/測試集：用來「考」模型，評估它學得好不好，且不能用來訓練。",
    "source": 3
  },
  {
    "id": 311,
    "category": "outline-2",
    "type": "single",
    "question": "您需要使用 Azure Machine Learning 設計工具建立一個叢集模型並評估模型。 請問您該怎麼做？",
    "options": [
      "A. 使用原始資料集進行定型和評估。",
      "B. 將原始資料集分割成特徵資料集和標籤資料集。使用特徵資料集進行評估。",
      "C. 將原始資料集分割成定型資料集和測試資料集。使用定型資料集進行評估。",
      "D. 將原始資料集分割成定型資料集和測試資料集。使用測試資料集進行評估。"
    ],
    "subQuestions": null,
    "answer": "D. 將原始資料集分割成定型資料集和測試資料集。使用測試資料集進行評估。",
    "rationale": "評估任何機器學習模型（包括叢集模型）的標準做法是將原始資料集分為訓練集和測試集。模型在訓練集上進行訓練（對於叢集模型，是學習資料的結構以形成群組），然後在模型從未見過的測試集上進行評估，以衡量其性能和泛化能力。 A. 使用原始資料集（即包含訓練資料）進行評估會導致對模型性能的過高估計。 B. 叢集是非監督式學習，通常不直接使用「標籤資料集」。它依賴特徵來分群。評估也不僅僅使用特徵資料集。 C. 應該使用測試資料集進行評估，而不是訓練資料集。 雖然叢集模型的評估指標（如輪廓係數、Davies-Bouldin 指數）與監督式學習不同，但使用獨立測試集來評估分群結果的穩定性和合理性仍然是重要步驟。",
    "examTip": "無論是什麼類型的機器學習模型，評估時都應該使用獨立的測試資料集（或驗證資料集），以獲得對模型在新資料上表現的客觀衡量。",
    "source": 3
  },
  {
    "id": 312,
    "category": "outline-3",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "自訂視覺",
        "answer": "是"
      },
      {
        "text": "自訂視覺",
        "answer": "是"
      },
      {
        "text": "自訂視覺",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 自訂視覺可用於偵測影像中的物件。 2. 是 - 自訂視覺需要您提供自有資料來訓練模型。 3. 否 - 自訂視覺可用於分析影片檔案。",
    "rationale": "第一句：Azure AI 自訂視覺 (Custom Vision) 服務支援兩種主要項目類型：影像分類和物件偵測。因此，它可以用於偵測影像中的物件。敘述為「是」。 第二句：自訂視覺 的核心價值在於允許使用者使用自己的影像資料來訓練專為其特定需求客製化的模型。因此，它需要使用者提供自有資料。敘述為「是」。 第三句：自訂視覺 主要用於處理靜態影像。雖然可以透過對影片逐幀提取影像的方式間接分析影片，但它本身不直接提供針對影片流或影片檔案的內建分析功能。影片分析通常由 Azure Video Indexer（現為 Azure AI Video Indexer）等服務處理。因此，敘述為「否」。",
    "examTip": "自訂視覺 的關鍵字是「自訂」、「自己的資料」、「訓練」。它用於影像分類和物件偵測，主要針對靜態影像。",
    "source": 3
  },
  {
    "id": 313,
    "category": "outline-1",
    "type": "single",
    "question": "可以回答「Contoso,Ltd.股票價格是多少？」這種問題的智慧型裝置是哪一種 AI 工作負載的範例？",
    "options": [
      "A. 關鍵片語擷取 (Key Phrase Extraction)",
      "B. 自然語言處理",
      "C. Azure Cognitive Services",
      "D. 情感分析 (Sentiment Analysis)"
    ],
    "subQuestions": null,
    "answer": "B. 自然語言處理",
    "rationale": "智慧型裝置要能夠回答「Contoso,Ltd.股票價格是多少？」這樣的問題，首先需要理解使用者提出的自然語言查詢。這個「理解」的過程，包括辨識問題的意圖（查詢股票價格）和關鍵實體（Contoso,Ltd.），是自然語言處理 (NLP) 的核心功能。 雖然獲取股票價格可能需要查詢知識庫或外部資料來源（這些知識可能由知識採礦技術間接構建），但使用者與裝置互動並讓裝置理解問題的這一環節，最直接相關的是 NLP。 D. 知識採礦 (Knowledge Mining)：更側重於從大量非結構化或半結構化資料中提取資訊並建立可搜尋的知識索引。它可能是提供答案的後端資料來源的建構方式，但不是使用者與裝置互動的直接工作負載。 (註：根據 PDF 螢幕截圖的提示，此題的正確答案是 A. 自然語言處理。)",
    "examTip": "當題目描述一個系統需要「理解人類語言的提問」或「從文字中提取意義」時，自然語言處理通常是核心的工作負載。即使最終答案來自某個知識庫，理解查詢本身也是 NLP 的範疇。",
    "source": 3
  },
  {
    "id": 314,
    "category": "outline-1",
    "type": "single",
    "question": "從大量非結構化資料中獲取資料間的關聯性，是哪一種 AI 工作負載類型？",
    "options": [
      "A. Azure AI 文件智慧 (Document Intelligence)",
      "B. Azure Video Indexer",
      "C. 知識採礦 (Knowledge Mining)",
      "D. 強化學習 (Reinforcement Learning)"
    ],
    "subQuestions": null,
    "answer": "C. 知識採礦 (Knowledge Mining)",
    "rationale": "知識採礦 (Knowledge Mining) 是一種 AI 工作負載，其目標是從大量、通常是非結構化或半結構化的資料中提取隱藏的見解、模式和關聯性。它通常結合使用多種 AI 技術（如 NLP、電腦視覺、機器學習）來理解內容，並將提取的資訊組織成可供搜尋和分析的知識庫或索引。 A. 自然語言處理是知識採礦中常用的一種技術，但知識採礦是更廣泛的工作負載。 C. 電腦視覺處理影像資料，也是知識採礦可能整合的技術之一（例如，從影像中提取文字或物件資訊）。 (註：PDF 螢幕截圖顯示答案 C (電腦視覺) 被建議為正確，而使用者選擇的 D (知識採礦) 被標記為錯誤。這很可能是 PDF 系統的一個錯誤，因為題目的描述完全符合知識採礦的定義。)",
    "examTip": "知識採礦的關鍵在於從「大量」、「非結構化」資料中「提取見解」和「發現關聯」。Azure AI Search（以前的 Azure Cognitive Search）是實現知識採礦的核心服務。",
    "source": 3
  },
  {
    "id": 315,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 【特徵工程 (Feature Engineering)】 用於產生額外的特徵。",
    "options": [
      "A. 標籤",
      "B. 特徵工程 (Feature Engineering)",
      "C. 參數",
      "D. 超參數"
    ],
    "subQuestions": null,
    "answer": "B. 特徵工程 (Feature Engineering)",
    "rationale": "特徵工程 (Feature Engineering) 是指利用領域知識和資料分析技術，從原始資料中創建新的特徵或轉換現有特徵，以提高機器學習模型的性能。其目標是產生更能揭示資料潛在模式、更適合模型學習的特徵。",
    "examTip": "特徵工程是機器學習流程中非常關鍵的一步，它通常比選擇特定演算法對模型性能的影響更大。記住它是關於「創造」或「轉換」特徵。",
    "source": 3
  },
  {
    "id": 316,
    "category": "outline-2",
    "type": "single",
    "question": "您要使用 Azure Machine Learning 設計工具建置模型管線。 在執行管線之前您應該先建立下列何者？",
    "options": [
      "A. Jupyter Notebook",
      "B. 已註冊模型",
      "C. 計算資源 (Compute Resource)"
    ],
    "subQuestions": null,
    "answer": "C. 計算資源 (Compute Resource)",
    "rationale": "在 Azure Machine Learning 設計工具中執行管線（無論是訓練管線還是推斷管線）都需要計算資源 (Compute Resource)。計算資源提供了運行管線中各個元件（如資料處理、模型訓練、評分）所需的運算能力。<如果沒有指定或建立計算目標（例如計算叢集或計算執行個體），管線將無法執行。 A. Jupyter Notebook 是一種用於撰寫和執行程式碼的互動式環境，不是執行設計工具管線的先決條件。 B. 已註冊模型是在模型訓練完成並準備部署時產生的，而不是執行訓練管線的前提。",
    "examTip": "在 Azure Machine Learning 中，執行任何機器學習工作（如訓練模型、執行腳本、運行設計工具管線）都需要指定一個計算目標。",
    "source": 3
  },
  {
    "id": 317,
    "category": "outline-1",
    "type": "single",
    "question": "您可以使用 Azure OpenAI DALL-E 模型執行下列哪兩個動作？每個正確答案都呈現一個完整的解決方案。 注意：每個正確答案可得一分。",
    "options": [
      "A. 動態條幅中的物件。",
      "B. 產生影像標題。",
      "C. 修改影像 (Edit Image / Inpainting/Outpainting)。",
      "D. 建立影像 (Generate Image)。",
      "E. 使用光學字元辨識 (OCR)。"
    ],
    "subQuestions": null,
    "answer": "C 和 D C. 修改影像 (Edit Image / Inpainting/Outpainting) D. 建立影像 (Generate Image)",
    "rationale": "Azure OpenAI DALL-E 模型是一個生成式 AI 模型，專門用於處理影像。其主要功能包括： 建立影像 (Generate Image)： 根據文字描述（提示）從頭開始生成全新的影像。 修改影像 (Edit Image)： 根據文字提示對現有影像進行編輯，例如影像修補 (inpainting)（填補影像中缺失的部分）或影像擴展 (outpainting)（擴展影像邊界外的內容），以及創建影像的變體。 選項 A, B, E 描述的是物件偵測、影像描述 (NLP/Vision 混合) 和 OCR，這些不是 DALL-E 的核心功能。",
    "examTip": "DALL-E 和類似的影像生成模型的核心能力是「無中生有地創造影像」和「智慧地修改現有影像」，都是基於文字提示。",
    "source": 3
  },
  {
    "id": 318,
    "category": "outline-4",
    "type": "single",
    "question": "您計劃將文字分析 API 功能套用於技術支援報修系統。 請將文字分析 API 功能與適當的自然語言處理案例配對。 作答時，請將左側資料行的適當功能，拖曳至右側的案例中。每項功能可能只使用一或多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 功能 A. 情感分析 (Sentiment Analysis) B. 實體辨識 (Entity Recognition) C. 關鍵片語擷取 (Key Phrase Extraction) 案例 根據支援報修中所包含文字瞭解客戶的不滿意程度 彙總支援報修中重要資訊 從支援報修中擷取關鍵日期",
    "options": [
      "A. 語言翻譯",
      "B. 1. - 根據支援報修中所包含文字瞭解客戶的不滿意程度 (A. 情感分析) 2. - 彙總支援報修中重要資訊 (C. 關鍵片語擷取) 3. - 從支援報修中擷取關鍵日期 (B. 實體辨識)",
      "C. 語音辨識",
      "D. 語音合成"
    ],
    "subQuestions": null,
    "answer": "B. 1. - 根據支援報修中所包含文字瞭解客戶的不滿意程度 (A. 情感分析) 2. - 彙總支援報修中重要資訊 (C. 關鍵片語擷取) 3. - 從支援報修中擷取關鍵日期 (B. 實體辨識)",
    "rationale": "瞭解客戶的不滿意程度： 這涉及到判斷文本的情緒傾向（正面、負面、中性），是情感分析 (Sentiment Analysis) 的典型應用。 彙總支援報修中重要資訊： 找出文本中的主要談論點或核心概念，這可以透過關鍵片語擷取 (Key Phrase Extraction) 來實現，它能提取代表文本主題的詞語或短語。雖然文件摘要也是一個選項，但關鍵片語擷取更側重於提取核心詞彙。 從支援報修中擷取關鍵日期： 「日期」是一種特定類型的資訊或實體。具名實體辨識 (Named Entity Recognition, NER) 可以識別並分類文本中的已知實體，包括日期、時間、地點、組織等。",
    "examTip": "熟悉 Azure AI 語言服務（前身為文字分析）提供的核心功能： 情感分析：判斷情緒。 關鍵片語擷取：找出主要詞彙/主題。 實體辨識：找出並分類特定類型的名詞（人名、地名、日期、組織等）。 語言偵測：識別文本語言。 PII 偵測：識別敏感資訊。",
    "source": 3
  },
  {
    "id": 319,
    "category": "outline-4",
    "type": "single",
    "question": "您正在為電子商務企業建置語言理解模型。 您需要確保當語句超出模型預定範圍時，該模型仍可偵測。 您應該採取什麼措施？",
    "options": [
      "A. 匯出模型",
      "B. 建立新的模型",
      "C. 建立預先建置工作實體",
      "D. 將語句新增至「無 (None)」意圖 (Intent)"
    ],
    "subQuestions": null,
    "answer": "D. 將語句新增至「無 (None)」意圖 (Intent)",
    "rationale": "在交談語言理解 (CLU) 或其前身 LUIS 中，當使用者輸入的語句不屬於任何已定義的特定意圖時，模型應該能夠將其識別為「超出範圍」或「無法理解」。為了達到這個目的，通常會提供一個特殊的「無 (None)」意圖。「無」意圖應該包含各種不屬於其他已定義意圖的範例語句。當模型無法將使用者輸入與任何其他意圖高度匹配時，就會將其歸類到「無」意圖，表示該語句超出了模型的預定處理範圍。",
    "examTip": "「無 (None)」意圖在意圖辨識模型中扮演著「接殺所有不相關輸入」的角色。提供足夠且多樣的「無」意圖範例，對於提高模型的整體穩健性和避免錯誤觸發其他意圖非常重要。",
    "source": 3
  },
  {
    "id": 320,
    "category": "outline-4",
    "type": "single",
    "question": "您需要在新聞中瀏覽與客戶有關的文章，並在出現負面文章時警示員工。正面文章則必須新增至宣傳冊中。 您應該使用下列哪些自然語言處理工作來完成此程式？作答時，請將適當的工作拖曳至正確的位置。每種工作可能只使用一次，也可能使用多次，甚至完全用不到。您可能需要拖曳窗格之間的分隔列，或是捲動畫面以檢視內容。 工作 1: 實體辨識 (Entity Recognition) (用於識別文章是否與客戶相關) 工作 2: 情感分析 (Sentiment Analysis) (用於判斷文章是正面還是負面) 提供的功能選項 (假設)： 翻譯 實體辨識 情感分析 關鍵片語擷取",
    "options": [
      "A. 工作 1: 實體辨識 (Entity Recognition) 工作 2: 情感分析 (Sentiment Analysis)",
      "B. 關鍵片語擷取",
      "C. 語言翻譯",
      "D. 語音辨識"
    ],
    "subQuestions": null,
    "answer": "A. 工作 1: 實體辨識 (Entity Recognition) 工作 2: 情感分析 (Sentiment Analysis)",
    "rationale": "這個流程需要兩個主要的自然語言處理步驟： 識別文章是否與特定客戶相關： 這可以透過實體辨識 (Entity Recognition) 來完成。例如，如果客戶是「Contoso 公司」，則實體辨識可以在新聞文章中找出提及「Contoso 公司」的內容。 判斷文章是正面還是負面： 在確認文章與客戶相關後，需要分析文章的情感傾向。這是情感分析 (Sentiment Analysis) 的任務，它可以將文本分類為正面、負面或中性。",
    "examTip": "許多實際的 NLP 解決方案會組合使用多種 NLP 技術。理解每個技術的核心功能，就能判斷在特定流程中應該使用哪些技術。",
    "source": 3
  },
  {
    "id": 321,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個 Azure Machine Learning 模型，會產生大量的錯誤否定 (False Negatives)。 您需要在不重新訓練模型的情況下，降低錯誤否定的數量。 請問您應該採取什麼措施？",
    "options": [
      "A. 使用其他機器學習模型。",
      "B. 增加訓練資料量。",
      "C. 調整閾值 (Adjust the threshold)。",
      "D. 增加定型反覆運算的數目。"
    ],
    "subQuestions": null,
    "answer": "C. 調整閾值 (Adjust the threshold)。",
    "rationale": "許多分類模型（尤其是二元分類）會輸出一個機率值（例如，某個樣本屬於正類的機率）。然後，根據一個閾值 (threshold)（通常預設為 0.5）將此機率轉換為類別預測。 錯誤否定 (False Negative) 指的是實際為正類，但模型錯誤地預測為負類。 如果模型產生大量錯誤否定，意味著模型對於將樣本預測為正類過於「保守」。在不重新訓練模型的情況下，可以透過降低分類閾值來解決這個問題。例如，將閾值從 0.5 降至 0.3，會使得更多原本機率介於 0.3 和 0.5 之間的樣本被預測為正類，從而減少錯誤否定（但可能會增加錯誤肯定）。 選項 A, B, D 都涉及到重新訓練模型或改變模型，不符合題目「不重新訓練模型」的要求。",
    "examTip": "理解分類閾值對模型預測結果的影響，特別是對精確率 (Precision) 和召回率 (Recall)（以及 FN 和 FP）的影響，是非常重要的。 降低閾值：增加召回率（減少 FN），可能降低精確率（增加 FP）。 提高閾值：增加精確率（減少 FP），可能降低召回率（增加 FN）。",
    "source": 3
  },
  {
    "id": 322,
    "category": "outline-3",
    "type": "single",
    "question": "使用 Azure AI 文件智慧服務中預建收據模型可以處理的影像大小上限為何？",
    "options": [
      "A. 5 MB",
      "B. 100 MB",
      "C. 10 MB",
      "D. 50 MB"
    ],
    "subQuestions": null,
    "answer": "D. 50 MB",
    "rationale": "根據 Microsoft Azure AI 文件智慧（先前稱為表格辨識器）的官方文件，對於影像檔案（如 JPEG, PNG, BMP, TIFF）和 PDF 檔案，輸入檔案的大小上限通常是 50 MB。不同模型和 API 版本可能會有些微差異，但 50MB 是一個常見的上限。",
    "examTip": "記住一些常用 Azure AI 服務的關鍵限制（如檔案大小、API 呼叫頻率等）可能對考試有幫助，但通常更重要的是理解服務的核心功能和適用場景。",
    "source": 3
  },
  {
    "id": 323,
    "category": "outline-3",
    "type": "single",
    "question": "在表格辨識器中使用自訂模型有何優點？",
    "options": [
      "A. 自訂模型比預建模型便宜。",
      "B. 只有自訂模型可以部署在內部部署環境。",
      "C. 自訂模型一律提供更高的精確度。",
      "D. 自訂模型可加以訓練來辨識各種表格類型。"
    ],
    "subQuestions": null,
    "answer": "D. 自訂模型可加以訓練來辨識各種表格類型。",
    "rationale": "Azure AI 文件智慧（表格辨識器）提供預建模型（如收據、發票、名片模型）和自訂模型。 使用自訂模型的主要優點是： 靈活性： 您可以訓練自訂模型來辨識和提取您特定文件類型和格式中的資料，即使這些文件不符合任何預建模型的結構。這包括各種自訂的表格、表單和非結構化文件。 關於其他選項： A. 價格取決於使用量和模型類型，自訂模型訓練和使用也涉及成本，不一定比預建模型便宜。 B. Azure AI 服務（包括文件智慧）主要是在雲端運行，雖然有些服務可以透過容器部署到內部環境，但這並非自訂模型獨有的優勢，且預建模型也可以透過容器部署。 C. 自訂模型的精確度取決於訓練資料的品質和數量以及模型的複雜性。它不一定「一律」比針對通用場景優化的預建模型精確度更高，尤其是在訓練資料不足或品質不高時。",
    "examTip": "自訂模型的優勢在於「客製化」和「適應特定需求」。當預建模型無法滿足特定文件格式或提取需求時，就需要考慮使用自訂模型。",
    "source": 3
  },
  {
    "id": 324,
    "category": "outline-3",
    "type": "single",
    "question": "您正在處理賽跑者的一些相片。 您必須取跑者運動衫上的號碼，以辨識相片中的跑者。 您應該使用哪種電腦視覺類型？",
    "options": [
      "A. 語義分段",
      "B. 影像分類",
      "C. 臉部辨識",
      "D. 光學字元辨識 (OCR)"
    ],
    "subQuestions": null,
    "answer": "D. 光學字元辨識 (OCR)",
    "rationale": "從運動衫上「取號碼」意味著需要從影像中讀取和識別文字（號碼）。這正是光學字元辨識 (OCR) 的功能。 A. 語義分段：將影像中的每個像素分配給一個類別。 B. 影像分類：將整個影像歸類。 C. 臉部辨識：用於識別人物的臉部。 雖然可能需要先用物件偵測找到號碼牌的區域，但最終讀取號碼的步驟依賴 OCR。",
    "examTip": "當任務的核心是從影像中「讀取文字或數字」時，選擇 OCR。",
    "source": 3
  },
  {
    "id": 325,
    "category": "outline-4",
    "type": "single",
    "question": "您可以將下列兩種情況中使用語音辨識？每個正確答案都是一個完整的解決方案。 注意；每答對一個選項，可得一分。",
    "options": [
      "A. 建立電話或會議的文字紀錄",
      "B. 為錄製或直播影片提供隱藏式輔助字幕",
      "C. 為火車站建立自動廣播系統",
      "D. 可大聲朗讀文字訊息的車載系統"
    ],
    "subQuestions": null,
    "answer": "A 和 B A. 建立電話或會議的文字紀錄 B. 為錄製或直播影片提供隱藏式輔助字幕",
    "rationale": "語音辨識 (Speech Recognition)，也稱為語音轉文字 (Speech-to-Text, STT)，是將口語轉換為書面文字的技術。 A. 將電話或會議的語音內容轉換為文字紀錄，是 STT 的典型應用。 B. 為影片（無論是預錄製還是直播）產生字幕，也是將影片中的語音轉換為文字，屬於 STT 的應用。 C. 為火車站建立自動廣播系統，是將文字轉換為語音（TTS），不是語音辨識。 D. 車載系統大聲朗讀文字訊息，也是文本轉語音 (TTS) 的應用。",
    "examTip": "區分語音轉文字 (STT / 語音辨識) 和文本轉語音 (TTS / 語音合成)。 STT：聽到聲音 -> 產生文字 (例如：字幕、會議記錄、語音指令輸入)。 TTS：看到文字 -> 產生聲音 (例如：語音助理回應、朗讀文章、自動廣播)。",
    "source": 3
  },
  {
    "id": 326,
    "category": "outline-4",
    "type": "single",
    "question": "您的解決方案會讀取不同語言的手稿，並且根據主題將手稿分類。 該解決方案使用的是哪些類型的自然語言處理 (NLP) 工作負載？",
    "options": [
      "A. 翻譯和關鍵詞語摘取",
      "B. 語音辨識和實體辨識",
      "C. 語音辨識和語言模型",
      "D. 翻譯和情感分析"
    ],
    "subQuestions": null,
    "answer": "A. 翻譯和關鍵詞語摘取",
    "rationale": "解決方案需要處理「不同語言的手稿」並「根據主題將手稿分類」。這涉及到兩個主要的 NLP 步驟： 處理不同語言： 如果要對不同語言的手稿進行統一的主題分類，首先可能需要將它們翻譯 (Translation) 成一種共同的語言（例如英文）。 根據主題分類： 要根據主題對手稿進行分類，可以提取手稿中的關鍵詞語 (Key Phrase Extraction) 或進行文本分類。關鍵詞語可以幫助識別文本的主要內容和主題。 因此，翻譯和關鍵詞語摘取是實現此解決方案的合理組合。 B, C 中的語音辨識與處理「手稿」（通常指書面文字）不直接相關。 D 中的情感分析是判斷情緒，與主題分類不直接相關。",
    "examTip": "分析問題描述中的多個需求，並將它們映射到相應的 NLP 功能。如此題中，「不同語言」指向翻譯，「根據主題分類」可以透過關鍵詞語摘取或更直接的文本分類來實現。",
    "source": 3
  },
  {
    "id": 327,
    "category": "outline-4",
    "type": "single",
    "question": "您的網站用一個用來協助客戶的聊天機器人。 您需要根據客戶在聊天機器人中鍵入的內容，偵測客戶何時感到沮喪。 您應該使用下列哪一種類型的 AI 工作負載？",
    "options": [
      "A. 自然語言處理 (NLP)",
      "B. Azure OpenAI Service",
      "C. Azure Video Indexer",
      "D. Azure Machine Learning"
    ],
    "subQuestions": null,
    "answer": "A. 自然語言處理 (NLP)",
    "rationale": "偵測客戶在聊天機器人中輸入文字時是否感到「沮喪」，這涉及到分析文字內容以判斷其情感傾向。這是一個典型的情感分析 (Sentiment Analysis) 任務，而情感分析是自然語言處理 (NLP) 的核心應用之一。 A. 電腦視覺用於處理影像。 B. 異常偵測用於識別不尋常的模式。 D. 回歸用於預測連續數值。",
    "examTip": "當題目涉及從文字中判斷情緒、態度、意見（如正面、負面、中性、開心、沮喪等）時，通常答案會是情感分析，它屬於自然語言處理的範疇。",
    "source": 3
  },
  {
    "id": 328,
    "category": "outline-2",
    "type": "single",
    "question": "分類的使用案例為何？",
    "options": [
      "A. 根據過去的賽跑時間，預測某人此次賽跑所需的分鐘數。",
      "B. 分析影像內容並將具有相似色彩的影像分組。",
      "C. 根據某人前一晚的睡眠時數，預測其喝的咖啡杯數。",
      "D. 根據住家到工作地點的距離，預測某人是否騎自行車上班。"
    ],
    "subQuestions": null,
    "answer": "D. 根據住家到工作地點的距離，預測某人是否騎自行車上班。",
    "rationale": "分類 (Classification) 是一種機器學習類型，用於將項目預測到預先定義的類別中。 A 和 C 描述的是預測一個連續數值（分鐘數、咖啡杯數），這屬於迴歸 (Regression)。 B 描述的是根據影像色彩將影像分組，這更像是叢集 (Clustering)（如果沒有預先定義的組別）或一種基於特徵的相似性分組。 D 預測「是否」騎自行車上班，這是一個二元分類問題（類別為「是」或「否」）。",
    "examTip": "分類問題的輸出通常是有限的、離散的類別標籤。例如：「是/否」、「貓/狗/鳥」、「垃圾郵件/非垃圾郵件」。",
    "source": 3
  },
  {
    "id": 329,
    "category": "outline-3",
    "type": "single",
    "question": "使用電腦視覺服務可以執行下列哪兩項工作？ 每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 將影像中的文字翻譯為不同語言",
      "B. 訓練自訂影像分類模型",
      "C. 偵測影像中臉部",
      "D. 辨識手寫文字"
    ],
    "subQuestions": null,
    "answer": "C 和 D C. 偵測影像中臉部 D. 辨識手寫文字",
    "rationale": "Azure AI Vision 服務（前身為電腦視覺服務）提供多種預建的影像分析功能： 偵測影像中臉部： 它可以偵測影像中的人臉並返回其位置以及一些基本屬性。更進階的臉部辨識和分析由臉部服務提供。 辨識手寫文字： Azure AI Vision 的光學字元辨識 (OCR) 功能支援辨識印刷體和手寫文字。 關於其他選項： A. 將影像中的文字翻譯為不同語言，這通常需要先用 OCR 提取文字，然後再使用翻譯服務（如 Azure AI Translator）。電腦視覺服務本身不直接執行翻譯。 B. 訓練自訂影像分類模型是 Azure AI 自訂視覺 (Custom Vision) 服務的功能。",
    "examTip": "要區分 Azure AI Vision (提供預建的通用影像分析功能，如 OCR、物件偵測、基本臉部偵測) 和 自訂視覺 (用於訓練特定領域的自訂影像分類和物件偵測模型)。",
    "source": 3
  },
  {
    "id": 330,
    "category": "outline-1",
    "type": "single",
    "question": "您有一個使用未經許可取得資料所建立的自然語言處理 (NLP) 模型。 此違規行為屬於哪一項 Microsoft 責任 AI 準則的領域？",
    "options": [
      "A. 包容性",
      "B. 可靠性和安全性",
      "C. 透明度",
      "D. 隱私權和安全性 (Privacy and Security)"
    ],
    "subQuestions": null,
    "answer": "D. 隱私權和安全性 (Privacy and Security)",
    "rationale": "「未經許可取得資料」直接違反了資料隱私權的原則。收集和使用資料必須獲得適當的授權和同意，並確保資料的安全。這屬於 Microsoft 負責任 AI 的隱私權與安全性 (Privacy and Security) 指導準則。",
    "examTip": "當題目涉及到資料的取得方式、使用權限、資料保護、個人資訊安全等問題時，通常與隱私權與安全性原則相關。",
    "source": 3
  },
  {
    "id": 331,
    "category": "outline-1",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "轉換器模型",
        "answer": "是"
      },
      {
        "text": "轉換器模型",
        "answer": "是"
      },
      {
        "text": "轉換器模型",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 轉換器模型架構會使用自我注意力 (self-attention)。 2. 是 - 轉換器模型架構包含編碼器區塊和解碼器區塊。 3. 否 - 轉換器模型架構包含加密區塊或解密區塊。",
    "rationale": "第一句：自我注意力機制 (Self-attention mechanism) 是轉換器 (Transformer) 模型的核心組成部分，它允許模型在處理序列資料時，權衡輸入序列中不同位置的重要性。因此，敘述為「是」。 第二句：標準的轉換器模型架構通常包含編碼器 (Encoder) 和解碼器 (Decoder) 兩大部分，每部分都由多個相同的層堆疊而成。因此，敘述為「是」。 第三句：轉換器模型架構的核心是處理和生成序列資料（如文本），與加密 (encryption) 或解密 (decryption) 區塊沒有直接關係。加密和解密是資訊安全領域的概念。因此，敘述為「否」。",
    "examTip": "記住轉換器模型的關鍵組成：自我注意力機制、編碼器-解碼器架構（或僅編碼器/僅解碼器架構的變體，如 BERT 和 GPT）。",
    "source": 3
  },
  {
    "id": 332,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "Azure Machine Learning 設計工具",
        "answer": "是"
      },
      {
        "text": "Azure Machine Learning 設計工具",
        "answer": "是"
      },
      {
        "text": "Azure Machine Learning 設計工具",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - Azure Machine Learning 設計工具提供拖放視覺效果畫布，以供建置、測試及部署機器學習模組。 2. 是 - Azure Machine Learning 設計工具可將進度儲存為管線草稿。 3. 否 - Azure Machine Learning 設計工具可供併入自訂的 JavaScript 函式。",
    "rationale": "第一句：Azure Machine Learning 設計工具的核心特性就是提供一個視覺化的拖放介面（畫布），讓使用者可以透過連接預建的元件來建置、測試和部署機器學習管線和模型。因此，敘述為「是」。 第二句：在設計工具中工作時，您可以將目前的管線進度儲存為「管線草稿 (Pipeline Draft)」，以便稍後繼續編輯或執行。因此，敘述為「是」。 第三句：Azure Machine Learning 設計工具支援使用 Python 腳本來擴展其功能（例如透過「執行 Python 指令碼」元件），但它不直接支援併入自訂的 JavaScript 函式來執行機器學習任務。因此，敘述為「否」。",
    "examTip": "記住設計工具的關鍵特性：視覺化、拖放、元件化、管線。擴展性主要透過 Python 腳本實現。",
    "source": 3
  },
  {
    "id": 333,
    "category": "outline-3",
    "type": "single",
    "question": "哪一項 Azure 服務可以使用 Azure AI 文件智慧服務中的預建收據模型?",
    "options": [
      "A. Azure Machine Learning",
      "B. Azure AI 電腦視覺",
      "C. Azure 認知服務 (Azure Cognitive Services)",
      "D. Azure AI 自訂視覺"
    ],
    "subQuestions": null,
    "answer": "C. Azure 認知服務 (Azure Cognitive Services)",
    "rationale": "Azure AI 文件智慧（先前稱為表格辨識器），包括其預建收據模型，是Azure 認知服務 (Azure Cognitive Services) 產品組合的一部分。Azure 認知服務提供了一系列預建的 AI 功能，開發人員可以透過 API 輕鬆地將其整合到應用程式中。",
    "examTip": "了解 Azure 上主要 AI 服務的歸類。文件智慧（表格辨識器）、電腦視覺、臉部、語言、語音等都是Azure 認知服務的一部分。",
    "source": 3
  },
  {
    "id": 334,
    "category": "outline-1",
    "type": "single",
    "question": "請將責任 AI 的準則與正確描述配對。 作答時，請將左欄所列的適當準則，拖曳至右側的敘述中。每項準則可能只使用一或多次，甚至完全用不到。 注意：每完成一項正確配對可得一分。 準則 A. 可靠性和安全性 (Reliability and Safety) B. 隱私權和安全性 (Privacy and Security) C. 包容性 (Inclusiveness) D. 公平性 (Fairness) 描述 即使發生意外情況，AI 系統也必須始終如一地按預期運作。 AI 系統必須保護及保障個人與企業資訊。",
    "options": [
      "A. 1. - 即使發生意外情況，AI 系統也必須始終如一地按預期運作。 (A. 可靠性和安全性) 2. - AI 系統必須保護及保障個人與企業資訊。 (B. 隱私權和安全性)",
      "B. 公平性",
      "C. 透明度",
      "D. 包容性"
    ],
    "subQuestions": null,
    "answer": "A. 1. - 即使發生意外情況，AI 系統也必須始終如一地按預期運作。 (A. 可靠性和安全性) 2. - AI 系統必須保護及保障個人與企業資訊。 (B. 隱私權和安全性)",
    "rationale": "描述1：「即使發生意外情況，AI 系統也必須始終如一地按預期運作。」這直接對應到可靠性與安全性 (Reliability and Safety) 原則。該原則強調 AI 系統應在其設計的操作條件下可靠且安全地執行。 描述2：「AI 系統必須保護及保障個人與企業資訊。」這直接對應到隱私權和安全性 (Privacy and Security) 原則。該原則強調 AI 系統需要遵守隱私法規並保護資料安全。",
    "examTip": "再次熟悉 Microsoft 負責任 AI 的六大原則，並能夠將具體的場景描述與相應的原則進行配對。",
    "source": 3
  },
  {
    "id": 335,
    "category": "outline-2",
    "type": "single",
    "question": "您需要使用 Azure Machine Learning 設計工具建置能預測汽車價格的模型。 您應該使用哪種模組類型來完成此模型？作答時，請將適當的模組拖曳至正確位置。 每個模組可能只使用一次，也可能使用多次，甚至完全用不到。您可能需要拖曳窗格之間的分隔列，或是捲動畫面以檢視內容。 作答區 (請依序填入模組)： 選取資料集中的資料行 (Select Columns in Dataset) 分割資料 (Split Data) 線性迴歸 (Linear Regression) 提供的模組選項 (假設)： 選取資料集中的資料行 (Select Columns in Dataset) 分割資料 (Split Data) 線性迴歸 (Linear Regression) K-Means 叢集 (K-Means Clustering) 評估模型 (Evaluate Model)",
    "options": [
      "A. 答案 (依序使用模組)： 選取資料集中的資料行 (Select Columns in Dataset) 分割資料 (Split Data) 線性迴歸 (Linear Regression) (註：一個完整的訓練管線還需要「訓練模型」和「評分模型」及「評估模型」元件，但題目只要求完成此模型的「三種」模組類型)",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 答案 (依序使用模組)： 選取資料集中的資料行 (Select Columns in Dataset) 分割資料 (Split Data) 線性迴歸 (Linear Regression) (註：一個完整的訓練管線還需要「訓練模型」和「評分模型」及「評估模型」元件，但題目只要求完成此模型的「三種」模組類型)",
    "rationale": "建立一個預測汽車價格的迴歸模型，在設計工具中的典型步驟（簡化版，僅選三項核心相關模組）： 選取資料集中的資料行 (Select Columns in Dataset)： 通常用於選擇與預測目標（價格）相關的特徵 (features) 以及標籤 (label) 欄位，移除不必要的欄位。 分割資料 (Split Data)： 將資料集分為訓練集和測試集，以便訓練模型並評估其性能。 線性迴歸 (Linear Regression)： 由於目標是預測汽車價格（一個連續數值），線性迴歸是一種合適的迴歸演算法。此元件定義了要使用的演算法。 一個更完整的管線還會包含「訓練模型 (Train Model)」元件（將演算法和訓練資料連接起來）和「評分模型 (Score Model)」及「評估模型 (Evaluate Model)」元件。但根據題目僅要求三項，以上是最核心的步驟。",
    "examTip": "理解設計工具中常用模組的功能，並能根據問題描述（如預測價格 -> 迴歸）選擇合適的演算法模組。",
    "source": 3
  },
  {
    "id": 336,
    "category": "outline-1",
    "type": "single",
    "question": "下列哪一項敘述是 Microsoft 責任 AI 準則的範例？",
    "options": [
      "A. AI 系統必須保障公司的利益。",
      "B. AI 系統必須透明且包容。",
      "C. AI 系統必須只使用公開提供的資料。",
      "D. AI 系統必須將個人資料公開。"
    ],
    "subQuestions": null,
    "answer": "B. AI 系統必須透明且包容。",
    "rationale": "Microsoft 負責任 AI 的六大指導原則中包含了透明度 (Transparency) 和包容性 (Inclusiveness)。 透明度：強調 AI 系統的運作和決策應易於理解。 包容性：強調 AI 系統應賦予每個人權力並吸引人們參與，不應排除或歧視任何群體。 其他選項： A. AI 系統應造福社會，而不僅僅是公司利益。 C. AI 系統可以使用非公開資料，但需遵守隱私原則。 D. AI 系統必須保護個人隱私，而非公開。",
    "examTip": "再次熟悉 Microsoft 負責任 AI 的六大原則：公平性、可靠性與安全性、隱私權與安全性、包容性、透明度、權責。",
    "source": 3
  },
  {
    "id": 337,
    "category": "outline-4",
    "type": "single",
    "question": "您需要為商務聊天機器人提供內容，以協助其為使用者解答簡單的查詢。 下列哪三種方式是使用語言服務的問題解答來建立問與答文字？ 每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 從預先定義的資料來源匯入問聊內容。",
      "B. 手動輸入問題和答案。",
      "C. 從現有的網頁產生問題與答案。",
      "D. 使用 Azure Machine Learning 自動化 ML，根據包含問題與答案例的檔案來定型模型。",
      "E. 將機器人連線至 Cortana 頻道，並使用 Cortana 提出問題。"
    ],
    "subQuestions": null,
    "answer": "A, B, C A. 從預先定義的資料來源匯入問聊內容。 B. 手動輸入問題和答案。 C. 從現有的網頁產生問題與答案。",
    "rationale": "Azure AI 語言服務的自訂問題解答功能 (前身為 QnA Maker) 提供了多種方式來建立和擴充知識庫的問答內容： 從資料來源匯入： 可以從現有的文件（如 PDF, DOCX）、網頁 URL 或結構化檔案（如 TSV, XLSX）中匯入問答配對或內容。 手動新增： 可以直接在服務的入口網站（如 Language Studio）中手動編輯或新增問答配對。 從網頁產生： 可以指定網頁 URL，服務會嘗試從該網頁的 FAQ 結構中提取問答配對。 選項 D 和 E 描述的是模型訓練或機器人通道整合，而不是直接建立問答內容的方式。",
    "examTip": "了解自訂問題解答服務填充知識庫內容的幾種主要途徑：匯入文件、指定網址、手動編輯。",
    "source": 3
  },
  {
    "id": 338,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 藉由監視資訊站的視訊摘要來識別資訊站使用者是否感到困擾，此為以下何者的範例： 臉部分析 (Face Analysis)",
    "options": [
      "A. 臉部屬性 (Face Attributes)",
      "B. 臉部分析 (Face Analysis)",
      "C. 情緒偵測 (Emotion Detection)",
      "D. 影像分類 (Image Classification)"
    ],
    "subQuestions": null,
    "answer": "B. 臉部分析 (Face Analysis)",
    "rationale": "從視訊摘要中識別使用者是否感到「困擾」（一種情緒狀態），涉及到對人臉表情的分析。Azure AI 臉部服務可以偵測人臉並分析多種臉部屬性，其中包括情緒。因此，這屬於臉部分析的範疇。",
    "examTip": "當任務涉及從臉部判斷情緒、年齡、性別或其他臉部特徵時，通常與臉部分析相關，這是臉部服務提供的功能。",
    "source": 3
  },
  {
    "id": 339,
    "category": "outline-2",
    "type": "yesno",
    "question": "您擁有可以預測產品品質的 Azure Machine Learning 模型。 該模型的訓練資料集包含 50,000 筆記錄。下表顯示其資料範例。 [圖片描述：一個表格，包含欄位如 ID, 質量(kg), 質量測試, 溫度(C)。範例資料：ID=1, 質量(kg)=10.2, 質量測試=通過, 溫度(C)=22.5] 在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意；每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "“質量(kg)”是特徵 (Feature",
        "answer": "是"
      },
      {
        "text": "“質量測試”是標籤 (Label",
        "answer": "是"
      },
      {
        "text": "“溫度(C)”是標籤 (Label",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - “質量(kg)”是特徵 (Feature)。 2. 是 - “質量測試”是標籤 (Label)。 3. 否 - “溫度(C)”是標籤 (Label)。",
    "rationale": "在此模型中，目標是「預測產品品質」。 “質量(kg)”和“溫度(C)”是輸入變數，用來預測品質，因此它們是特徵 (features)。 “質量測試”（例如「通過」或「不通過」）代表了產品的品質結果，是模型要預測的目標，因此它是標籤 (label)。 所以： “質量(kg)”是特徵。 (是) “質量測試”是標籤。 (是) “溫度(C)”是特徵，不是標籤。 (否)",
    "examTip": "標籤是您想要預測的變數。特徵是您用來進行預測的輸入變數。",
    "source": 3
  },
  {
    "id": 340,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "您可以使用 Cortana",
        "answer": "是"
      },
      {
        "text": "您可以使用 Microsoft Teams",
        "answer": "是"
      },
      {
        "text": "您可以使用網頁聊天",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 您可以使用 Cortana 與機器人交談。 2. 是 - 您可以使用 Microsoft Teams 與機器人交談。 3. 是 - 您可以使用網頁聊天介面與機器人交談。",
    "rationale": "Azure Bot Service 允許開發者將建立的機器人連接到多個通道 (channels)，以便使用者可以透過不同的平台與機器人互動。 Cortana： Cortana 是一個支援的通道，可以將機器人整合為 Cortana 技能。因此，敘述為「是」。 Microsoft Teams： Teams 也是一個常見且受支援的機器人通道。因此，敘述為「是」。 網頁聊天介面： Azure Bot Service 提供了網頁聊天 (Web Chat) 控制項，可以輕鬆地將機器人嵌入到網站中，提供網頁聊天介面。因此，敘述為「是」。",
    "examTip": "Azure Bot Service 的一個主要優勢是其多通道支援能力，讓機器人可以部署到各種流行的通訊平台。",
    "source": 3
  },
  {
    "id": 341,
    "category": "outline-2",
    "type": "single",
    "question": "您有下列資料集。 [圖片描述：一個表格，包含欄位如 家庭收入, 房屋類型。範例資料：家庭收入=50000, 房屋類型=公寓；家庭收入=120000, 房屋類型=獨棟住宅] 您打算使用此資料集來訓練可預測房屋房價類別的模型。 家庭收入和房價類別是什麼？作答時，請將適當的選項拖曳至作答區中。 每個選項可能只使用一次，也可能使用多次，甚至完全用不到。 作答區： 家庭收入： 功能 (Feature) 房價類別： 標籤 (Label) 提供的選項 (假設)： 功能, 標籤, 資料集, 模型",
    "options": [
      "A. 家庭收入： 功能 (Feature) 房價類別： 標籤 (Label)",
      "B. 特徵",
      "C. 參數",
      "D. 輸出層"
    ],
    "subQuestions": null,
    "answer": "A. 家庭收入： 功能 (Feature) 房價類別： 標籤 (Label)",
    "rationale": "在此機器學習場景中，目標是「預測房屋房價類別」。 家庭收入： 這是用來進行預測的輸入資料或屬性，因此它是一個功能 (Feature)。 房價類別： 這是模型需要預測的目標輸出（一個類別，例如低、中、高），因此它是一個標籤 (Label)。 （註：題目表格中並未直接顯示「房價類別」，但題目描述指明了預測目標是「房價類別」。）",
    "examTip": "再次強調，特徵是輸入，標籤是輸出（要預測的目標）。能夠從問題描述中準確識別哪些是特徵、哪些是標籤，是理解機器學習問題的基礎。",
    "source": 3
  },
  {
    "id": 342,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 物件偵測 (Object Detection) 用於在一張影像中識別多種項目。",
    "options": [
      "A. 影像分類",
      "B. 物件偵測 (Object Detection)",
      "C. 語意分割",
      "D. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "B. 物件偵測 (Object Detection)",
    "rationale": "物件偵測 (Object Detection) 是一種電腦視覺技術，它不僅能識別影像中存在哪些物件，還能標示出這些物件在影像中的位置（通常使用定界框）。因此，它非常適合用於在一張影像中識別「多種項目」及其位置。 相比之下，影像分類通常只為整個影像指派一個標籤。",
    "examTip": "當任務涉及在一張圖片中找出「多個不同的東西」並可能要知道它們在哪裡時，通常是物件偵測。",
    "source": 3
  },
  {
    "id": 343,
    "category": "outline-3",
    "type": "single",
    "question": "您需要計算相片中的動物數目。您應該使用哪種電腦視覺類型？",
    "options": [
      "A. 影像分類",
      "B. 臉部偵測",
      "C. 光學字元辨識 (OCR)",
      "D. 物件偵測 (Object Detection)"
    ],
    "subQuestions": null,
    "answer": "D. 物件偵測 (Object Detection)",
    "rationale": "要「計算相片中的動物數目」，首先需要能夠識別並定位影像中的每一個動物個體。物件偵測 (Object Detection) 能夠做到這一點，它可以識別出影像中所有屬於「動物」類別的物件，並為每個物件提供位置資訊（定界框），從而可以對其進行計數。 A. 影像分類：只能判斷整個影像是關於動物的，但無法區分和計數個別動物。 B. 臉部偵測：專門用於偵測人臉，不適用於動物計數（除非特指動物臉部且有相應模型）。 C. OCR：用於讀取文字。",
    "examTip": "當任務需要找出並計算影像中特定類別物件的數量時，物件偵測是合適的技術，因為它可以區分和定位多個物件實例。",
    "source": 3
  },
  {
    "id": 344,
    "category": "outline-3",
    "type": "single",
    "question": "您需要將收據轉換成試算表中的交易。試算表必須包含交易的日期、商家、支出總計，以及任何支付的稅額。 您應該使用下列哪一項 Azure 認知服務？",
    "options": [
      "A. 圖像 (Image) (此選項不標準，應指 Computer Vision)",
      "B. 臉部",
      "C. 表格識別器 (Form Recognizer / Document Intelligence)",
      "D. 自訂視覺"
    ],
    "subQuestions": null,
    "answer": "C. 表格識別器 (Form Recognizer / Document Intelligence)",
    "rationale": "從收據中提取結構化資訊，如日期、商家名稱、總金額和稅額，並將其轉換為試算表格式，這是 Azure AI 文件智慧（先前稱為表格辨識器）的核心功能。文件智慧服務提供了預建的收據模型，專門用於從收據影像中準確地提取這些常見欄位。 A. 「圖像」不是一個標準的 Azure AI 服務名稱。如果指的是通用的電腦視覺服務，它可以進行 OCR，但不如文件智慧的預建收據模型專精於提取收據上的特定欄位。 B. 臉部服務用於處理人臉。 D. 自訂視覺用於訓練自訂的影像分類或物件偵測模型。",
    "examTip": "當任務涉及從特定類型的表單或文件（如收據、發票、名片、身分證件）中提取結構化資料時，應優先考慮 Azure AI 文件智慧（表格辨識器）及其預建模型或自訂模型功能。",
    "source": 3
  },
  {
    "id": 345,
    "category": "outline-3",
    "type": "single",
    "question": "您要籌辦一場慈善活動，其內容包含在 Twitter 上發佈人們戴著墨鏡的相片。 您需要確保只轉推符合下列要求的相片： 您應該使用下列何者來分析影像？",
    "options": [
      "A. 臉部服務中的[驗證]作業",
      "B. 臉部服務中的[偵測 (Detect)]作業",
      "C. 電腦視覺服務中的[分析影像 (Analyze Image)]作業",
      "D. 電腦視覺服務中的[描述影像 (Describe Image)]作業"
    ],
    "subQuestions": null,
    "answer": "B. 臉部服務中的[偵測 (Detect)]作業",
    "rationale": "題目的需求是： 計算相片中的人臉數量（一或兩張）。 判斷是否有人戴墨鏡（一種臉部屬性）。 Azure AI 臉部服務的[偵測 (Detect)]作業可以滿足這些需求。它不僅能偵測影像中的人臉並返回其位置（從而可以計數），還能同時分析多種臉部屬性，包括是否佩戴眼鏡（其中墨鏡是一種）。 A. [驗證]作業用於比對兩張臉是否為同一個人。 C. 電腦視覺服務的[分析影像]作業可以偵測臉部，但臉部服務在臉部屬性分析方面通常更為專精和詳細。 D. [描述影像]作業生成對影像內容的文字描述。 因此，臉部服務的[偵測]作業是最適合的。",
    "examTip": "當需要偵測人臉、計數人臉，並且分析如眼鏡、情緒、年齡等臉部屬性時，Azure AI 臉部服務的[偵測]作業是首選。",
    "source": 3
  },
  {
    "id": 346,
    "category": "outline-4",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 Microsoft Bot Framework 可以用來建置使用內建自然語言處理模型的無程式碼應用程式。",
    "options": [
      "A. Microsoft Bot Framework",
      "B. Azure Cognitive Services",
      "C. Azure OpenAI Service",
      "D. Azure AI 翻譯工具 (Translator)"
    ],
    "subQuestions": null,
    "answer": "A. Microsoft Bot Framework",
    "rationale": "Microsoft Bot Framework 是一個全面的開發者平台，用於建置、連接、測試和部署高品質的智慧型機器人。雖然 Bot Framework SDK 主要用於程式碼開發，但 Azure Bot Service 和相關工具（如 Power Virtual Agents，它也基於 Bot Framework）提供了低程式碼或無程式碼的選項來建置機器人。這些機器人通常會整合自然語言處理能力（例如透過 Azure AI Language 服務）來理解使用者輸入。 題目提到「無程式碼應用程式」和「內建自然語言處理模型」，這指向了 Bot Framework 生態系中提供的解決方案，特別是那些簡化開發流程的工具。",
    "examTip": "Microsoft Bot Framework 是建置交談式 AI 應用程式的基礎。雖然它本身是一個框架，但與 Azure Bot Service 和其他工具結合使用時，可以實現不同程度的程式碼需求，包括無程式碼的方案。",
    "source": 3
  },
  {
    "id": 347,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個資料集，包含了銷售資料，並定義了客戶類型標籤。 您需要根據銷售資料分類客戶類型 您應該使用哪種機器學習類型？",
    "options": [
      "A. 回歸",
      "B. 分類 (Classification)",
      "C. 叢集 (Clustering)"
    ],
    "subQuestions": null,
    "answer": "B. 分類 (Classification)",
    "rationale": "題目明確指出目標是「根據銷售資料分類客戶類型」，並且資料集已經「定義了客戶類型標籤」。這是一個典型的監督式學習中的分類 (Classification) 問題，因為目標是將客戶分配到預先定義的客戶類型（類別）中。",
    "examTip": "當題目中出現「分類」、「類別」、「類型」、「標籤」等關鍵字，並且目標是預測一個離散的組別時，通常是分類問題。",
    "source": 3
  },
  {
    "id": 348,
    "category": "outline-1",
    "type": "single",
    "question": "您要建置 AI 系統。該包含哪項工作以確保服務符合 Microsoft 責任 AI 透明度準則？",
    "options": [
      "A. 確定所有視覺效果都有可供編輯程式讀取的相關聯文字。",
      "B. 提供文件以利開發人員偵錯程式碼。",
      "C. 確定訓練資料集具有母體代表性。",
      "D. 嚴用自動調整功能，以確保服務能根據需求調整。"
    ],
    "subQuestions": null,
    "answer": "B. 提供文件以利開發人員偵錯程式碼。",
    "rationale": "Microsoft 責任 AI 的透明度 (Transparency) 原則強調人們應該了解 AI 系統如何運作。提供良好的文件，使開發人員能夠理解系統的內部機制、如何偵錯以及模型的行為，是實現透明度的一個重要方面。這有助於建立對系統的信任，並在出現問題時能夠有效地進行診斷和修復。 A. 確保視覺效果有替代文字，主要與包容性和無障礙設計相關。 C. 確保訓練資料集的代表性，主要與公平性相關，以避免模型產生偏見。 D. 自動調整功能主要與系統的可靠性和效能相關。",
    "examTip": "透明度不僅僅是針對最終使用者，也包括對開發者和維護者的透明。良好的文件、模型可解釋性工具和偵錯能力都是透明度的體現。",
    "source": 3
  },
  {
    "id": 349,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 確保訓練資料中的數值變數具有相似規模，為下列何者的範例： 特徵工程 (Feature Engineering)",
    "options": [
      "A. 標籤",
      "B. 特徵工程 (Feature Engineering)",
      "C. 參數",
      "D. 超參數"
    ],
    "subQuestions": null,
    "answer": "B. 特徵工程 (Feature Engineering)",
    "rationale": "確保訓練資料中的數值變數具有相似的規模（例如，將所有數值特徵縮放到 0-1 範圍或進行標準化使其均值為0、標準差為1）是一種常見的資料預處理技術，稱為特徵縮放 (Feature Scaling)。特徵縮放是特徵工程 (Feature Engineering) 的一部分。這樣做有助於某些機器學習演算法（尤其是那些基於距離計算或梯度下降的演算法）更快地收斂並獲得更好的性能，避免數值範圍較大的特徵主導模型。",
    "examTip": "特徵工程包含多種技術，用以改進原始特徵或創建新特徵，特徵縮放（如正規化、標準化）是其中重要的一環，目的是處理不同特徵間數值範圍差異過大的問題。",
    "source": 3
  },
  {
    "id": 350,
    "category": "outline-4",
    "type": "single",
    "question": "您可以在下列哪兩種情況中使用語音合成解決方案？每個正確答案都呈現一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 使用數字鍵盤將信用卡號碼輸入到電話時，可以朗讀號碼的自動語音",
      "B. 從會議錄音中提取關鍵片語",
      "C. 為新聞廣播產生即時字幕",
      "D. 可以用語音與玩家交談的電腦遊戲 AI 角色"
    ],
    "subQuestions": null,
    "answer": "A 和 D A. 使用數字鍵盤將信用卡號碼輸入到電話時，可以朗讀號碼的自動語音 D. 可以用語音與玩家交談的電腦遊戲 AI 角色",
    "rationale": "語音合成 (Speech Synthesis)，也稱為文本轉語音 (Text-to-Speech, TTS)，是將書面文字轉換為口語語音的技術。 A. 自動語音系統朗讀使用者輸入的信用卡號碼，是將數字（文字的一種形式）轉換為語音，屬於 TTS 的應用。 D. 電腦遊戲中的 AI 角色用「語音」與玩家交談，這意味著遊戲角色的台詞（文字）被轉換成了語音輸出，也是 TTS 的應用。 關於其他選項： B. 從會議錄音中提取關鍵片語，首先需要語音轉文字 (STT)，然後進行關鍵片語提取 (NLP)。 C. 為新聞廣播產生即時字幕，是將語音轉換為文字 (STT)。",
    "examTip": "判斷是 TTS 還是 STT 的關鍵是看資訊轉換的方向： 文字 -> 聲音：TTS (語音合成) 聲音 -> 文字：STT (語音辨識)",
    "source": 3
  },
  {
    "id": 351,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 光學字元辨識 (OCR) 可從手寫檔中擷取文字。",
    "options": [
      "A. 影像分類",
      "B. 光學字元辨識 (OCR)",
      "C. 物件偵測",
      "D. 語意分割"
    ],
    "subQuestions": null,
    "answer": "B. 光學字元辨識 (OCR)",
    "rationale": "從手寫文件中提取文字是光學字元辨識 (OCR) 的一項重要功能。Azure AI Vision 的 OCR 技術能夠識別和提取影像中的印刷體和手寫文字。",
    "examTip": "OCR 不僅能處理印刷體文字，也能處理手寫文字（儘管手寫文字的識別難度通常更高）。",
    "source": 3
  },
  {
    "id": 352,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 自訂視覺模型如果可從共 100 張包含柳橙的影像中，正確識別出 70 張包含柳橙的影像，即產生 70%的 召回率 (Recall) 計量。",
    "options": [
      "A. 召回率 (Recall)",
      "B. 準確度",
      "C. 精確度",
      "D. F1分數"
    ],
    "subQuestions": null,
    "answer": "A. 召回率 (Recall)",
    "rationale": "在這個場景中： 總共有 100 張實際包含柳橙的影像（實際正例總數）。 模型正確識別出其中 70 張包含柳橙的影像（真陽性，TP = 70）。 召回率 (Recall) 的定義是：在所有實際為正例的樣本中，被模型正確預測為正例的比例。 其公式為：Recall = TP / (TP + FN)，其中 FN 是偽陰性（實際為正例但被錯誤預測為負例的數量）。 在此案例中，TP = 70。FN = 100 (總正例) - 70 (正確識別的正例) = 30。 所以，召回率 = 70 / (70 + 30) = 70 / 100 = 0.70，即 70%。 題目描述的「從共 100 張包含柳橙的影像中，正確識別出 70 張」正是召回率的計算基礎。",
    "examTip": "理解分類模型的常用評估指標： 精確率 (Precision)：在所有被模型預測為正例的樣本中，實際為正例的比例 (TP / (TP + FP))。關注的是「預測為正的裡面有多少是真的正」。 召回率 (Recall) / 敏感度 (Sensitivity)：在所有實際為正例的樣本中，被模型正確預測為正例的比例 (TP / (TP + FN))。關注的是「所有真的正例有多少被找出來了」。 F1 分數 (F1-Score)：精確率和召回率的調和平均數。 準確度 (Accuracy)：模型正確預測的樣本數佔總樣本數的比例 ((TP+TN) / (TP+TN+FP+FN))。 本題描述的是「所有該找出來的柳橙（100張），實際找出來了多少（70張）」，這符合召回率的定義。",
    "source": 3
  },
  {
    "id": 353,
    "category": "outline-2",
    "type": "single",
    "question": "您正在分析使用 K-Means 叢集演算法的資料集。 您可以在下列哪一個階段中指定所建立叢集的數量？",
    "options": [
      "A. 模型訓練",
      "B. 特徵選取",
      "C. 特徵工程 (Feature Engineering)",
      "D. 模型評估"
    ],
    "subQuestions": null,
    "answer": "C. 特徵工程 (Feature Engineering)",
    "rationale": "在 K-Means 叢集演算法中，參數 'K' 代表預期要形成的叢集數量。這個 K 值通常需要在執行演算法（即模型訓練）之前被指定。 選擇 C (特徵工程) 作為指定 K 的階段，其理由可能比較間接： 在特徵工程階段，資料科學家會探索資料、清理資料並轉換特徵。在這個過程中，可能會透過一些探索性分析（例如 Elbow method、Silhouette analysis）來輔助判斷一個合適的 K 值。因此，決定 K 值的過程可能與特徵工程階段的資料探索緊密相關。 然而，更直接地說，K 是一個超參數，其設定通常被視為模型配置或訓練準備的一部分。 如果嚴格按照標準機器學習流程，K 值的設定應在模型訓練之前。將其歸類於「特徵工程」階段可能意味著該階段包含了決定 K 值的探索性步驟。 選項 A (模型訓練) 也是一個強相關的階段，因為 K-Means 的訓練過程本身就是根據指定的 K 值來進行分群的。 (註：此題答案若為 C，則其邏輯可能較為特定，建議以官方解釋為準。通常 K 值的設定是模型訓練前的一個重要參數設定步驟。)",
    "examTip": "對於 K-Means，記住 K（叢集數量）是一個需要預先指定的超參數。確定最佳 K 值的方法有很多，例如手肘法或輪廓係數法，這些通常在模型訓練前或作為模型選擇的一部分進行。",
    "source": 3
  },
  {
    "id": 354,
    "category": "outline-1",
    "type": "single",
    "question": "您要設計能加強所有人能力的 AI 系統，這些對象包括聽覺、視覺和其他障礙人士。 這是哪一項 Microsoft 責任 AI 指導準則的範例?",
    "options": [
      "A. 權責性",
      "B. 可靠性和安全性",
      "C. 包容性 (Inclusiveness)",
      "D. 公平性"
    ],
    "subQuestions": null,
    "answer": "C. 包容性 (Inclusiveness)",
    "rationale": "Microsoft 負責任 AI 的包容性 (Inclusiveness) 原則強調 AI 系統應該為所有人設計，賦予每個人權力，並吸引各種背景的人參與，特別是那些可能被傳統技術所忽略或排除的群體，例如有聽覺、視覺或其他障礙的人士。題目的描述完全符合這一原則的核心精神。",
    "examTip": "當題目強調為所有人設計、考慮不同能力的使用者、避免排除特定群體、無障礙設計等概念時，通常與包容性原則相關。",
    "source": 3
  },
  {
    "id": 355,
    "category": "outline-2",
    "type": "single",
    "question": "將核心工作與適當的使用案例配對。 作答時，請將左側資料行所列的適當工作，拖曳至右側對應的使用案例。每一項工作可能只使用一次，也可能使用多次，甚至完全用不到。 注意：每完成一項正確配對可得一分。 核心工作 A. 特徵工程和選取 (Feature Engineering and Selection) B. 模型評估 (Model Evaluation) C. 資料擷取和準備 (Data Ingestion and Preparation) 使用案例 合併多個來源資料 根據驗證資料計算模型效能 移除包含遺失資料或不相關資料其資料行",
    "options": [
      "A. 標籤",
      "B. 1. - 合併多個來源資料 (C. 資料擷取和準備) 2. - 根據驗證資料計算模型效能 (B. 模型評估) 3. - 移除包含遺失資料或不相關資料其資料行 (A. 特徵工程和選取)",
      "C. 參數",
      "D. 超參數"
    ],
    "subQuestions": null,
    "answer": "B. 1. - 合併多個來源資料 (C. 資料擷取和準備) 2. - 根據驗證資料計算模型效能 (B. 模型評估) 3. - 移除包含遺失資料或不相關資料其資料行 (A. 特徵工程和選取)",
    "rationale": "合併多個來源資料： 這是資料擷取和準備 (Data Ingestion and Preparation) 階段的典型任務。在此階段，會從不同來源收集資料並將其整合。 根據驗證資料計算模型效能： 在模型訓練完成後，使用驗證（或測試）資料來評估其性能指標（如準確率、RMSE等），這屬於模型評估 (Model Evaluation) 階段。 移除包含遺失資料或不相關資料其資料行： 處理遺失值和選擇與預測目標最相關的特徵（移除不相關的資料行/特徵）是特徵工程和選取 (Feature Engineering and Selection) 階段的任務。這有助於提高模型品質和效率。",
    "examTip": "理解機器學習專案的典型生命週期和每個階段的主要任務： 資料擷取和準備：獲取資料、清理資料（處理遺失值、異常值）、整合資料。 特徵工程和選取：轉換現有特徵、創建新特徵、選擇最重要的特徵。 模型訓練：選擇演算法並使用訓練資料訓練模型。 模型評估：使用測試資料評估模型性能。 模型部署與監控。",
    "source": 3
  },
  {
    "id": 356,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 預測貸款是否能償還的銀行系統是 [ 分類 (Classification) ] 類型的機器學習之範例",
    "options": [
      "A. 迴歸",
      "B. 分類 (Classification)",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "B. 分類 (Classification)",
    "rationale": "預測貸款「是否」能償還，這是一個典型的二元分類 (Binary Classification) 問題。模型的輸出是兩個類別之一：「能償還」或「不能償還」（或者「低風險」/「高風險」）。因此，這屬於分類類型的機器學習。",
    "examTip": "當預測目標是判斷某事物屬於幾個預先定義的類別之一時（尤其是像「是/否」這樣的二選一問題），這就是分類問題。",
    "source": 3
  },
  {
    "id": 357,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 交通流量監視系統從監視器影片中收集車牌號碼是下列項目的範例： 文字擷取 (Text Extraction / OCR) 在電腦視覺服務中。",
    "options": [
      "A. 文字擷取 (Text Extraction / OCR)",
      "B. 影像分類",
      "C. 物件偵測",
      "D. 語意分割"
    ],
    "subQuestions": null,
    "answer": "A. 文字擷取 (Text Extraction / OCR)",
    "rationale": "從監視器影片中收集（讀取）車牌號碼，涉及到從影像中識別和提取文字資訊（即車牌上的字母和數字）。這項技術是光學字元辨識 (OCR)，在更廣泛的意義上也可以稱為文字擷取 (Text Extraction)。Azure AI Vision 服務（電腦視覺服務）提供了強大的 OCR 功能。",
    "examTip": "從影像中讀取車牌號碼、路標文字、文件內容等，都是OCR或文字擷取的應用。",
    "source": 3
  },
  {
    "id": 358,
    "category": "outline-4",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 具名實體辨識(NER) 來獲取文字中的日期、數量和位置。",
    "options": [
      "A. 情感分析",
      "B. 具名實體辨識(NER)",
      "C. 關鍵片語擷取",
      "D. 語言翻譯"
    ],
    "subQuestions": null,
    "answer": "B. 具名實體辨識(NER)",
    "rationale": "具名實體辨識 (Named Entity Recognition, NER) 是一種自然語言處理技術，用於從非結構化文本中識別並分類預先定義的實體類別。這些實體類別通常包括人名、組織名、地名（位置）、日期、時間、百分比、金額（數量的一種）等。因此，要獲取文字中的日期、數量和位置，應使用 NER。",
    "examTip": "NER 的核心功能是「找出並分類」文本中的特定資訊片段。當題目提到需要從文本中提取如人名、地點、組織、日期、時間、金錢、百分比等特定類型的名詞或數值時，就是 NER 的應用場景。",
    "source": 3
  },
  {
    "id": 359,
    "category": "outline-4",
    "type": "single",
    "question": "您正在使用 Azure AI 語言服務的自解答功能建立知識庫。 您可以使用哪種檔案格式來填入知識庫？",
    "options": [
      "A. PDF",
      "B. ZIP",
      "C. JPEG",
      "D. PPTX"
    ],
    "subQuestions": null,
    "answer": "A. PDF",
    "rationale": "Azure AI 語言服務的自訂問題解答功能（前身為 QnA Maker）支援從多種資料來源匯入內容以建立知識庫。支援的檔案格式包括： .tsv (Tab Separated Values) .pdf (Portable Document Format) .txt (Plain Text) .docx (Microsoft Word Document) .xlsx (Microsoft Excel Workbook) 它也支援從網頁 URL 匯入 FAQ 內容。 在提供的選項中，只有 PDF 是支援的檔案格式。ZIP 檔案本身不直接作為內容來源，除非其內容解壓縮後是支援的格式。JPEG 是影像格式。PPTX (PowerPoint) 通常不直接作為原始知識庫來源，除非轉換為 PDF 或 DOCX。",
    "examTip": "記住自訂問題解答服務可以從常見的文件格式（如 PDF, DOCX, TXT）和網頁中提取問答內容。",
    "source": 3
  },
  {
    "id": 360,
    "category": "outline-2",
    "type": "single",
    "question": "您想要使用 Azure Machine Learning 工作室與自動化機器學習 (Automated ML) 建置一個模型並加以訓練。您應該先建立下列哪一項？",
    "options": [
      "A. Jupyter Notebook",
      "B. Machine Learning 設計工具管線",
      "C. 已註冊的資料集",
      "D. Machine Learning 工作區 (Workspace)"
    ],
    "subQuestions": null,
    "answer": "D. Machine Learning 工作區 (Workspace)",
    "rationale": "Azure Machine Learning 工作區 (Workspace) 是 Azure Machine Learning 的最上層資源，也是使用其所有功能的基礎。無論您是要使用自動化機器學習、設計工具、Notebooks，還是其他功能，都必須先建立或擁有一個工作區。工作區提供了一個集中的位置來管理所有機器學習資產，如資料集、實驗、模型、計算目標等。",
    "examTip": "在 Azure Machine Learning 中，工作區是進行所有機器學習活動的「容器」或「入口」。沒有工作區，就無法使用其內部的各種工具和服務。",
    "source": 3
  },
  {
    "id": 361,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 當重要欄位包含不尋常或缺少值時，確保 AI 系統不會提供預測，是負責任 AI 的 可靠性和安全性 (Reliability and Safety) 準則。",
    "options": [
      "A. 包容性 (Inclusiveness)",
      "B. 問責性 (Accountability)",
      "C. 可靠性和安全性 (Reliability and Safety)",
      "D. 隱私權與安全性 (Privacy and Security)"
    ],
    "subQuestions": null,
    "answer": "C. 可靠性和安全性 (Reliability and Safety)",
    "rationale": "Microsoft 負責任 AI 的可靠性與安全性 (Reliability and Safety) 原則強調 AI 系統應在其設計的操作條件下可靠且安全地執行。如果重要欄位包含不尋常或遺失的值，這可能表示輸入資料的品質有問題，或者超出了模型設計的處理範圍。在這種情況下，如果系統仍然強行提供預測，其結果可能是不可靠的，甚至可能導致不安全的後果。因此，確保系統在這種情況下不提供預測（或提供警告），是為了維護其可靠性和安全性。",
    "examTip": "可靠性與安全性原則關注的是 AI 系統在各種情況下（包括預期和非預期情況）是否能穩定、正確且安全地運作。處理異常輸入、避免產生有害輸出都是該原則的體現。",
    "source": 3
  },
  {
    "id": 362,
    "category": "outline-4",
    "type": "single",
    "question": "您需要建立一套客戶支援解決方案，協助客戶存取資訊。該解決方案必須支援電子郵件、電話與即時聊天式管道。您應該使用下列哪一種 AI 解決方案？",
    "options": [
      "A. 聊天機器人 (Chatbot)",
      "B. Azure AI 異常偵測工具 (Anomaly Detector)",
      "C. Azure AI 文件智慧 (Document Intelligence)",
      "D. Azure AI 自訂視覺 (Custom Vision)"
    ],
    "subQuestions": null,
    "answer": "A. 聊天機器人 (Chatbot)",
    "rationale": "題目描述了一個需要支援多種通訊管道（電子郵件、電話、即時聊天）的客戶支援解決方案，其核心功能是協助客戶存取資訊。這是一個典型的聊天機器人（或更廣泛的交談式 AI）應用場景。聊天機器人可以透過不同管道與使用者互動，理解他們的查詢，並提供相關資訊或執行任務。 D. 自然語言處理 (NLP) 是建置聊天機器人的基礎技術之一，但聊天機器人是更完整的解決方案。 A 和 B 與此場景不直接相關。",
    "examTip": "當解決方案涉及跨多個通訊管道（如聊天、郵件、語音）提供互動式問答或服務時，通常是指聊天機器人或交談式 AI 解決方案。",
    "source": 3
  },
  {
    "id": 363,
    "category": "outline-3",
    "type": "single",
    "question": "請將電腦視覺工作負載類型與適當的案例配對。 作答時，請將左側資料行所列的適當工作負載類型，拖曳至右側對應的案例。 每種工作負載類型可能只使用一或多次，甚至完全用不到。 注意；每完成一項正確配對可得一分。 工作負載類型 A. 臉部辨識 (Face Recognition) B. 光學字元辨識 (OCR) C. 物件偵測 (Object Detection) D. 影像分類 (Image Classification) 案例 識別影像中名人 擷取電影海報影像中電影名稱 找到影像中車輛",
    "options": [
      "A. 影像分類",
      "B. 語意分割",
      "C. 1. - 識別影像中名人 (A. 臉部辨識) 2. - 擷取電影海報影像中電影名稱 (B. 光學字元辨識) 3. - 找到影像中車輛 (C. 物件偵測)",
      "D. OCR"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 識別影像中名人 (A. 臉部辨識) 2. - 擷取電影海報影像中電影名稱 (B. 光學字元辨識) 3. - 找到影像中車輛 (C. 物件偵測)",
    "rationale": "識別影像中名人： 這涉及到辨識特定人物的臉部，屬於臉部辨識 (Face Recognition) 的範疇。Azure AI Vision 和臉部服務都提供了名人辨識功能。 擷取電影海報影像中電影名稱： 從影像中讀取文字（電影名稱）是光學字元辨識 (OCR) 的任務。 找到影像中車輛： 在影像中定位特定類別的物件（如車輛）並找出其位置，這是物件偵測 (Object Detection) 的功能。",
    "examTip": "再次釐清各種電腦視覺任務的核心功能： 影像分類：判斷整個影像是什麼。 物件偵測：找出影像中的物件並定位。 臉部辨識/偵測：處理人臉相關任務。 OCR：從影像中讀取文字。",
    "source": 3
  },
  {
    "id": 364,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 用來進行預測的資料值稱為 [ 特徵 (Feature) ]。",
    "options": [
      "A. 特徵 (Feature)",
      "B. 標籤",
      "C. 參數",
      "D. 超參數"
    ],
    "subQuestions": null,
    "answer": "A. 特徵 (Feature)",
    "rationale": "在機器學習中，特徵 (Feature) 是指導致結果的已知變數，或者說是模型的輸入變數。模型使用這些特徵來學習模式並進行預測。例如，在預測房價時，房屋大小、房間數量、地點等都是特徵。",
    "examTip": "特徵是模型的「輸入」或「觀察值」，而標籤（在監督式學習中）是模型要預測的「輸出」或「答案」。",
    "source": 3
  },
  {
    "id": 365,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答選。 能夠從收據中輸取小計與總計的是 表格識別器 (Form Recognizer / Document Intelligence) 某務的功能",
    "options": [
      "A. Azure AI Vision",
      "B. Azure AI Language",
      "C. Azure AI Speech",
      "D. 表格識別器 (Form Recognizer / Document Intelligence)"
    ],
    "subQuestions": null,
    "answer": "D. 表格識別器 (Form Recognizer / Document Intelligence)",
    "rationale": "從收據中提取特定欄位值，如小計（Subtotal）和總計（Total），是 Azure AI 文件智慧（先前稱為表格辨識器）服務的預建收據模型的典型功能。該模型經過專門訓練，能夠識別和提取收據上的常見欄位。",
    "examTip": "當涉及到從收據、發票等半結構化文件中提取特定欄位（如金額、日期、商家名稱）時，Azure AI 文件智慧是首選服務。",
    "source": 3
  },
  {
    "id": 366,
    "category": "outline-2",
    "type": "single",
    "question": "訓練模型時，為什麼應該將資料列隨機分割成不同的子集？",
    "options": [
      "A. 為了使用未用於訓練模型的資料來測試模型",
      "B. 為了訓練模型兩次以取得更好的精確度",
      "C. 為了同時訓練多個模型以取得更好的效能"
    ],
    "subQuestions": null,
    "answer": "A. 為了使用未用於訓練模型的資料來測試模型",
    "rationale": "在訓練機器學習模型時，將資料集隨機分割成訓練集和測試集（或驗證集）的主要目的是為了能夠客觀地評估模型的性能。模型在訓練集上學習，然後使用它從未見過的測試集來進行評估。這樣可以檢驗模型對新資料的泛化能力，並避免過度擬合 (overfitting)（即模型在訓練資料上表現很好，但在新資料上表現很差）。 B. 訓練模型兩次不一定能提高精確度，除非第二次訓練使用了不同的方法或資料。 C. 同時訓練多個模型是模型比較或集成學習的策略，但不是分割資料的主要原因。",
    "examTip": "資料分割（訓練集/測試集）是機器學習中的基本且關鍵的步驟，其核心目的是為了獲得對模型在新資料上表現的無偏估計。",
    "source": 3
  },
  {
    "id": 367,
    "category": "outline-1",
    "type": "single",
    "question": "請將 AI 工作負載類型與適當的案例配對。 作答時，請將左側資料行所列的適當工作負載類型，拖曳至右側對應的案例。 每種工作負載類型可能只使用一或多次，甚至完全用不到。 注意；每答對一個選項，可得一分。 AI 工作負載類型 A. 電腦視覺 B. 自然語言處理 C. 異常偵測 D. 機器學習（叢集） 案例 識別手寫字體 預測社交媒體貼文的情感 識別異常信用卡付款 根據多個尺寸將動物分組",
    "options": [
      "A. 1. - 識別手寫字體 (A. 電腦視覺) 2. - 預測社交媒體貼文的情感 (B. 自然語言處理) 3. - 識別異常信用卡付款 (C. 異常偵測) 4. - 根據多個尺寸將動物分組 (D. 機器學習（叢集）)",
      "B. 迴歸",
      "C. 分類",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 1. - 識別手寫字體 (A. 電腦視覺) 2. - 預測社交媒體貼文的情感 (B. 自然語言處理) 3. - 識別異常信用卡付款 (C. 異常偵測) 4. - 根據多個尺寸將動物分組 (D. 機器學習（叢集）)",
    "rationale": "識別手寫字體： 從影像或掃描件中識別手寫文字是光學字元辨識 (OCR) 的一部分，屬於電腦視覺的範疇。 預測社交媒體貼文的情感： 分析文本內容以判斷其情感傾向（正面、負面、中性）是情感分析，屬於自然語言處理。 識別異常信用卡付款： 監測交易數據，找出與正常模式顯著不同的、可疑的付款行為，這是異常偵測的典型應用。 根據多個尺寸將動物分組： 根據動物的特徵（尺寸）將其自動分組，而沒有預先定義的類別，這是機器學習中的叢集 (Clustering) 任務。",
    "examTip": "能夠根據問題描述將場景與核心的 AI 工作負載類型（如電腦視覺、NLP、異常偵測、機器學習的不同類型）進行匹配，是 AI-900 的基礎考點。",
    "source": 3
  },
  {
    "id": 368,
    "category": "outline-1",
    "type": "single",
    "question": "您可以使用下列哪兩項工具來呼叫 Azure OpenAI 服務？每個正確答案都呈現一個完整的解決方案。 注意：每個正確答案可得一分。",
    "options": [
      "A. 適用於 JavaScript 的 Azure SDK",
      "B. Azure 命令列介面(CLI)",
      "C. 適用於 Python 的 Azure SDK",
      "D. Azure REST API"
    ],
    "subQuestions": null,
    "answer": "C 和 D C. 適用於 Python 的 Azure SDK D. Azure REST API",
    "rationale": "與 Azure OpenAI 服務互動的主要方式包括： REST API： 可以直接透過 HTTP 請求呼叫 Azure OpenAI 服務的端點。 SDK (軟體開發套件)： Microsoft 提供了多種語言的 SDK，其中Python SDK 是與 Azure OpenAI 互動最常用和功能最完善的 SDK 之一。適用於 JavaScript（Node.js）、.NET 等語言的 SDK 也可用。 關於其他選項： A. 雖然有適用於 JavaScript 的 Azure SDK 可以與 Azure OpenAI 互動，但 Python SDK 更為常見且功能更全面，並且 Python 是 AI/ML 領域的主流語言。題目要求選兩項，Python SDK 和 REST API 是最核心的兩種。 B. Azure CLI 主要用於管理 Azure 資源（如部署服務、管理金鑰），而不是直接呼叫 OpenAI 模型進行推斷或內容生成，儘管它可能可以用於某些管理任務。",
    "examTip": "Azure 服務通常提供 REST API 和多種語言的 SDK 作為主要的互動方式。Python 是 AI 開發的首選語言，因此其 SDK 通常功能最完整。",
    "source": 3
  },
  {
    "id": 369,
    "category": "outline-4",
    "type": "single",
    "question": "下列何種情況應該使用關鍵片語獲取？",
    "options": [
      "A. 根據音軌為影片產生字幕",
      "B. 辨識哪些檔提供相同主題的資訊",
      "C. 辨識餐廳的評論為正面或負面",
      "D. 將一些文件從英文翻譯成德文"
    ],
    "subQuestions": null,
    "answer": "B. 辨識哪些檔提供相同主題的資訊",
    "rationale": "關鍵片語擷取 (Key Phrase Extraction) 的目的是從文本中識別出主要的談論點或核心概念。透過比較不同文件中提取出的關鍵片語，可以判斷這些文件是否討論相同或相似的主題。 A. 為影片產生字幕是語音轉文字 (STT)。 C. 辨識評論的正面或負面是情感分析。 D. 語言翻譯是翻譯服務的功能。",
    "examTip": "關鍵片語擷取有助於快速了解大量文本的主要內容和主題，可以用於文件索引、內容分類、主題建模等。",
    "source": 3
  },
  {
    "id": 370,
    "category": "outline-3",
    "type": "single",
    "question": "您正在建設工具來處理零售商店的影像，並且能夠識別競爭對手的產品。 該解決方案將使用自訂模型。 您應該使用下列哪一項 Azure 認知服務？",
    "options": [
      "A. Azure AI 電腦視覺",
      "B. Azure AI 文件智慧",
      "C. Azure AI 自訂視覺 (Custom Vision)",
      "D. 臉部"
    ],
    "subQuestions": null,
    "answer": "C. Azure AI 自訂視覺 (Custom Vision)",
    "rationale": "題目明確指出「該解決方案將使用自訂模型」來「識別競爭對手的產品」。当需要訓練一個針對特定物件（如此處的競爭對手產品）的自訂影像辨識模型時，Azure AI 自訂視覺 (Custom Vision) 服務是正確的選擇。它允許使用者上傳自己的影像資料並標記，以訓練影像分類或物件偵測模型。 A. Azure AI 電腦視覺提供預建的通用模型，不直接支援訓練自訂模型來識別特定產品。 B. Azure AI 文件智慧用於處理文件和表單。 D. 臉部服務專門用於人臉相關任務。",
    "examTip": "當題目提到需要「訓練自己的模型」來識別「特定」的影像內容或物件時，應優先考慮 Azure AI 自訂視覺。",
    "source": 3
  },
  {
    "id": 371,
    "category": "outline-4",
    "type": "single",
    "question": "識別電話號碼時，會使用哪種類型的自然語言處理 (NLP)實體？",
    "options": [
      "A. 規則運算式 (Regular Expression)",
      "B. machine-learned",
      "C. Pattern.any",
      "D. 清單"
    ],
    "subQuestions": null,
    "answer": "A. 規則運算式 (Regular Expression)",
    "rationale": "在交談語言理解 (CLU) 或其前身 LUIS 中，定義自訂實體以識別具有明確模式的數據（如電話號碼、電子郵件地址、產品代碼等）時，規則運算式 (Regular Expression) 實體是一個非常有效的方法。電話號碼通常遵循特定的數字和符號組合格式，這使其非常適合使用規則運算式來精確匹配和提取。 機器學習 (Machine-learned) 實體： 當實體的邊界和上下文比較模糊，需要從大量範例中學習時更為適用。雖然也可以用於電話號碼，但對於模式清晰的電話號碼，規則運算式可能更直接高效。 清單 (List) 實體： 用於一組固定的、已知的同義詞值，不適用於識別模式化的電話號碼。 Pattern.any 實體： 主要用在模式 (Patterns) 中作為變動文字的預留位置，而不是直接定義電話號碼這種特定格式的實體。 Azure AI 語言服務也提供了預建的電話號碼實體，這些預建實體底層可能也利用了複雜的規則或機器學習模型。但如果題目是關於使用者「如何定義」一個用於識別電話號碼的自訂實體類型，且電話號碼格式可被規則描述，則規則運算式是一個強有力的選項。",
    "examTip": "當需要識別的實體具有清晰、明確的文字模式時（例如，電子郵件格式、特定格式的 ID 號碼、電話號碼），規則運算式實體通常是首選。如果模式非常多樣或依賴上下文，則機器學習實體可能更合適。",
    "source": 3
  },
  {
    "id": 372,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個資料集。 您需要建立一個 Azure Machine Learning 分類模型來識別瑕疵產品。 您應該先採取什麼措施？",
    "options": [
      "A. 建立叢集模型。",
      "B. 將資料分割成訓練與測試資料集。",
      "C. 取資料集。",
      "D. 建立分類模型。"
    ],
    "subQuestions": null,
    "answer": "B. 將資料分割成訓練與測試資料集。",
    "rationale": "在建立任何監督式學習模型（如分類模型）之前，一個關鍵的準備步驟是將可用的資料集分割成訓練資料集和測試資料集（有時還會有驗證資料集）。 訓練資料集：用於訓練模型，讓模型從中學習模式。 測試資料集：用於在模型訓練完成後評估其性能，確保模型對未見過的新資料具有良好的泛化能力。 這是模型開發流程中的標準做法。 A. 建立叢集模型與分類任務無關。 C. 「取資料集」過於模糊。資料擷取 (ingestion) 確實是第一步，但題目問的是建立分類模型「之前」的「先決」措施，分割資料以備訓練和評估更為具體。 D. 「建立分類模型」是目標，而不是準備步驟。",
    "examTip": "在開始訓練模型之前，資料準備階段非常重要，其中將資料分割為訓練集和測試集是確保模型能夠被客觀評估的關鍵步驟。",
    "source": 3
  },
  {
    "id": 373,
    "category": "outline-2",
    "type": "single",
    "question": "您可以將哪兩個元件拖曳至 Azure Machine Learning 設計工具的畫布？ 每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 模組 (Module)",
      "B. 計算",
      "C. 管線",
      "D. 資料集 (Dataset)"
    ],
    "subQuestions": null,
    "answer": "A 和 D A. 模組 (Module) D. 資料集 (Dataset)",
    "rationale": "Azure Machine Learning 設計工具提供了一個視覺化的畫布，使用者可以從資產庫中將以下主要類型的項目拖曳到畫布上來建置機器學習管線： 資料集 (Datasets)： 代表用於訓練或評分模型的資料。 模組 (Modules) / 元件 (Components)： 代表執行特定機器學習任務的演算法或資料處理操作（例如資料轉換、模型訓練、模型評分等）。 「計算」是在執行管線時選擇的計算目標，而不是直接拖曳到畫布上的項目。「管線」是畫布上模組和資料集連接後形成的整體流程。",
    "examTip": "在設計工具中，您主要是透過拖放資料集和功能模組/元件，並將它們連接起來，以定義資料流和機器學習處理步驟。",
    "source": 3
  },
  {
    "id": 374,
    "category": "outline-1",
    "type": "single",
    "question": "您有一部物聯網(IoT)裝置，可以監視引擎溫度。 如果引擎溫度脫離預期常態，裝置即會產生警示。 該裝置代表哪一種 AI 工作負載？",
    "options": [
      "A. 語言偵測 (Language Detection)",
      "B. 聚類/叢集 (Clustering)",
      "C. Azure Video Indexer",
      "D. 異常偵測 (Anomaly Detection)"
    ],
    "subQuestions": null,
    "answer": "D. 異常偵測 (Anomaly Detection)",
    "rationale": "題目描述的場景是監視引擎溫度，並在溫度「脫離預期常態」時產生警示。這種識別不尋常或偏離正常模式的事件，正是異常偵測 (Anomaly Detection) 工作負載的核心功能。",
    "examTip": "異常偵測的關鍵在於找出「不正常」或「預期之外」的情況。例如：設備故障預警、信用卡盜刷偵測、網路入侵檢測等。",
    "source": 3
  },
  {
    "id": 375,
    "category": "outline-4",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 為錄製影片建立字幕 是語音辨識 (Speech Recognition)的範例。",
    "options": [
      "A. 情感分析",
      "B. 語音辨識 (Speech Recognition)",
      "C. 實體辨識",
      "D. 關鍵片語擷取"
    ],
    "subQuestions": null,
    "answer": "B. 語音辨識 (Speech Recognition)",
    "rationale": "為錄製的影片建立字幕，需要將影片中的口語語音轉換為書面文字。這個過程稱為語音辨識 (Speech Recognition) 或語音轉文字 (Speech-to-Text, STT)。",
    "examTip": "將「聲音」轉換成「文字」就是語音辨識 (STT)。",
    "source": 3
  },
  {
    "id": 376,
    "category": "outline-2",
    "type": "single",
    "question": "在機器學習的過程中，您何時該檢閱評估計量？",
    "options": [
      "A. 清理資料之後。",
      "B. 使用驗證資料測試模型之後。",
      "C. 定型模型之際。",
      "D. 選擇模型的類型之前。"
    ],
    "subQuestions": null,
    "answer": "B. 使用驗證資料測試模型之後。",
    "rationale": "評估計量 (Evaluation Metrics) 是在模型使用訓練資料完成訓練後，再使用獨立的驗證資料（或測試資料）對其進行預測，然後計算出來的。這些計量（如準確率、精確率、召回率、RMSE等）用於衡量模型在未見過資料上的性能。因此，檢閱評估計量的時機是在「使用驗證資料測試模型之後」。 A. 清理資料是模型訓練前的資料準備步驟。 C. 定型模型之際，模型正在學習，尚未完成訓練以進行全面評估。 D. 選擇模型類型是更早期的步驟。",
    "examTip": "機器學習流程：資料準備 -> 模型選擇 -> 模型訓練 -> 使用驗證/測試資料進行模型評估（此時檢閱評估計量）-> 模型部署。",
    "source": 3
  },
  {
    "id": 377,
    "category": "outline-2",
    "type": "single",
    "question": "您需要用下列資料集預測指定客戶的收入範圍。 您應該使用哪兩個欄位作為特徵 (Features)？每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 名字",
      "B. 年齡",
      "C. 姓氏",
      "D. 教育程度",
      "E. 收入範圍"
    ],
    "subQuestions": null,
    "answer": "B 和 D B. 年齡 D. 教育程度",
    "rationale": "在此情境中，目標是「預測指定客戶的收入範圍」。因此，「收入範圍」是我們要預測的標籤 (Label)。 用來進行預測的輸入變數是特徵 (Features)。 「年齡」和「教育程度」通常是影響收入的重要因素，適合作為特徵。 「名字」和「姓氏」通常是識別碼，不太可能直接作為預測收入的有效特徵（除非有特殊情況，如某些姓氏與特定社會經濟地位相關，但在一般情況下不應使用以避免偏見）。 「收入範圍」是我們要預測的目標，所以它是標籤，不是特徵。 因此，選擇「年齡」和「教育程度」作為特徵是合理的。",
    "examTip": "仔細區分特徵（用於預測的輸入）和標籤（要預測的輸出）。通常，識別碼（如姓名）不作為特徵，除非它們被轉換為有意義的代表性數值。",
    "source": 3
  },
  {
    "id": 378,
    "category": "outline-2",
    "type": "single",
    "question": "您需要預測某個區域的動物數量。 您應該使用下列哪一種 Azure Machine Learning 類型。",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 分類",
      "C. 聚集 (Clustering)"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "預測「動物數量」是在預測一個具體的數值。這個數值是連續的（或至少是可數的整數，可以取較大範圍的值），因此屬於迴歸 (Regression) 問題。",
    "examTip": "當預測的目標是一個數值（如數量、價格、溫度、長度等）時，所使用的機器學習類型是迴歸。",
    "source": 3
  },
  {
    "id": 379,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "根據文件內容字的相似性分組文件為叢集",
        "answer": "是"
      },
      {
        "text": "根據症狀和診斷測試結果分組相似患者為叢集",
        "answer": "是"
      },
      {
        "text": "根據花粉計數預測某人會罹患輕度、中度還是嚴重的過敏症狀為叢集",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 根據文件內容字的相似性分組文件為叢集範例。 2. 是 - 根據症狀和診斷測試結果分組相似患者為叢集範例。 3. 否 - 根據花粉計數預測某人會罹患輕度、中度還是嚴重的過敏症狀為叢集範例。",
    "rationale": "第一句：根據文件內容字的相似性將文件分組，目的是找出內容相似的文件群體，這是叢集 (Clustering) 的典型應用（例如主題建模）。因此，敘述為「是」。 第二句：根據患者的症狀和測試結果將相似的患者分組，可能用於識別不同的患者群體或疾病亞型，這也是叢集的應用。因此，敘述為「是」。 第三句：預測某人會罹患「輕度」、「中度」還是「嚴重」的過敏症狀，是在預測一個預先定義的類別。這屬於分類 (Classification) 問題，而不是叢集。因此，敘述為「否」。",
    "examTip": "叢集的核心是「分群」未標記的資料，找出資料中的自然群組。如果預測目標是已知的類別，則為分類。",
    "source": 3
  },
  {
    "id": 380,
    "category": "outline-1",
    "type": "single",
    "question": "當您設計用以評估是否應核准貸款的 AI 系統時，制定決策所用的因素應為可解釋。 這是哪一項 Microsoft 責任 AI 指導原則的範例？",
    "options": [
      "A. 公平性",
      "B. 包容性",
      "C. 隱私和安全性",
      "D. 透明度 (Transparency)"
    ],
    "subQuestions": null,
    "answer": "D. 透明度 (Transparency)",
    "rationale": "要求 AI 系統在制定貸款核准決策時，所使用的因素應為「可解釋 (interpretable / explainable)」，這直接符合 Microsoft 責任 AI 的透明度 (Transparency) 原則。透明度強調人們應該能夠理解 AI 系統如何做出決策，以及這些決策背後的理由。",
    "examTip": "「可解釋性」、「理解決策原因」、「模型如何運作」等關鍵詞通常指向透明度原則。",
    "source": 3
  },
  {
    "id": 381,
    "category": "outline-3",
    "type": "single",
    "question": "您有一個可在超市貨架影像中識別產品品牌名稱的 Bot。 該 Bot 使用了哪一項服務？",
    "options": [
      "A. 語言理解功能",
      "B. 電腦視覺影像分析功能",
      "C. 自訂視覺影像分類功能",
      "D. Azure 搜尋功能中的 AI 擴充"
    ],
    "subQuestions": null,
    "answer": "B. 電腦視覺影像分析功能",
    "rationale": "從超市貨架的影像中識別產品的「品牌名稱」，這涉及到在影像中偵測和識別品牌標誌或與品牌相關的視覺元素。這項功能由 Azure AI Vision（電腦視覺）服務提供，其影像分析功能包含品牌偵測。 A. 語言理解功能用於處理文字。 C. 自訂視覺影像分類功能用於訓練自訂模型對影像進行分類，如果需要識別的品牌非常特定或不在預建模型的範圍內，可能會用到，但對於「識別品牌名稱」這種通用需求，預建的電腦視覺功能更直接。 D. Azure AI Search 的 AI 擴充是用於豐富搜尋索引的內容，可能在後端使用電腦視覺，但題目問的是直接識別品牌名稱的服務。",
    "examTip": "Azure AI Vision (電腦視覺) 服務提供了多種預建的影像分析能力，包括物件偵測、臉部偵測、成人內容偵測、品牌偵測、OCR 等。",
    "source": 3
  },
  {
    "id": 382,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 偵測大型機器的不正常溫度流動是下列何者的範例： 異常偵測工作負載 (Anomaly Detection Workload)。",
    "options": [
      "A. 異常偵測工作負載 (Anomaly Detection Workload)",
      "B. 關鍵片語擷取 (Key Phrase Extraction)",
      "C. Azure AI 文件智慧 (Document Intelligence)",
      "D. Azure AI 內容安全 (Content Safety)"
    ],
    "subQuestions": null,
    "answer": "A. 異常偵測工作負載 (Anomaly Detection Workload)",
    "rationale": "偵測機器溫度的「不正常」流動，即找出與平時溫度模式顯著不同的情況，是異常偵測 (Anomaly Detection) 的典型應用。這種工作負載旨在識別罕見的、可能表示問題（如設備故障）的事件或模式。",
    "examTip": "關鍵詞「不正常」、「異常」、「偏離預期」通常指向異常偵測工作負載。",
    "source": 3
  },
  {
    "id": 383,
    "category": "outline-4",
    "type": "single",
    "question": "某間公司聘請了客戶服務代理人小組，為客戶提供電話及電子郵件支援。 該公司開發網頁聊天機器人，為常見的客戶查詢提供自動回答。 建立網頁聊天機器人解決方案後，該公司可期待取得下列哪些商業利益？",
    "options": [
      "A. 產品可靠性提升",
      "B. 銷售額增加",
      "C. 客戶服務代理人的工作量下降"
    ],
    "subQuestions": null,
    "answer": "C. 客戶服務代理人的工作量下降",
    "rationale": "引入網頁聊天機器人來自動回答常見的客戶查詢，其主要商業利益之一是分擔人工客服的工作量。機器人可以處理大量重複性的簡單問題，讓人力客服代理可以專注於更複雜或需要人工介入的問題，從而提高整體客服效率並可能降低人力成本。 A. 聊天機器人主要改善客服效率，不直接提升產品本身的可靠性。 B. 雖然良好的客服體驗可能間接促進銷售，但聊天機器人的直接目的是解答查詢，而非直接增加銷售額。",
    "examTip": "聊天機器人在客服領域的主要優勢是提高效率、降低重複性工作、提供即時回應，以及24/7可用性。",
    "source": 3
  },
  {
    "id": 384,
    "category": "outline-2",
    "type": "single",
    "question": "請將工作與適當的機器學習模型配對。 作答時，請將左側資料行所列的適當工作，拖曳至右側對應的模型。每一項工作可能只使用一次，也可能使用多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 工作 (Task) A. 叢集 (Clustering) B. 迴歸 (Regression) C. 分類 (Classification) 模型/案例描述 (Model/Scenario Description) 根據人口統計資料為乘客指派類別。 根據飛行距離預測消耗的燃油量。 根據人口統計資料預測乘客是否會錯過他們的航班。",
    "options": [
      "A. 強化學習",
      "B. 監督式學習",
      "C. 1. - 根據人口統計資料為乘客指派類別。 (A. 叢集) 2. - 根據飛行距離預測消耗的燃油量。 (B. 迴歸) 3. - 根據人口統計資料預測乘客是否會錯過他們的航班。 (C. 分類)",
      "D. 非監督式學習"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 根據人口統計資料為乘客指派類別。 (A. 叢集) 2. - 根據飛行距離預測消耗的燃油量。 (B. 迴歸) 3. - 根據人口統計資料預測乘客是否會錯過他們的航班。 (C. 分類)",
    "rationale": "根據人口統計資料為乘客指派類別： 如果這裡的「類別」是預先未定義的，而是根據乘客的人口統計特徵自動形成的群組（例如，將乘客劃分為不同的市場區隔），那麼這屬於叢集 (Clustering)。如果「類別」是預先定義好的（例如，高價值乘客、普通乘客），那麼這會是分類，但題目描述更傾向於探索性分群。 根據飛行距離預測消耗的燃油量： 消耗的燃油量是一個連續的數值，因此這是一個迴歸 (Regression) 問題。 根據人口統計資料預測乘客是否會錯過他們的航班： 預測「是否」錯過航班，這是一個二元分類問題（錯過/未錯過）。因此，這屬於分類 (Classification)。",
    "examTip": "根據預測目標的性質來判斷機器學習的類型： 叢集：將相似的項目分組，通常沒有預先定義的標籤。 迴歸：預測一個連續的數值。 分類：預測項目屬於哪個預先定義的類別。",
    "source": 3
  },
  {
    "id": 385,
    "category": "outline-2",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "自動化機器學習",
        "answer": "否"
      },
      {
        "text": "自動化機器學習",
        "answer": "是"
      },
      {
        "text": "自動化機器學習",
        "answer": "否"
      }
    ],
    "answer": "1. 否 - 自動化機器學習讓您能夠自訂 Python 指令碼包含在訓練管線中。 2. 是 - 自動化機器學習實作機器學習解決方案無需程式設計經驗。 3. 否 - 自動化機器學習讓您能夠在互動式畫布中以視覺方式連結資料集和模組。",
    "rationale": "第一句：自動化機器學習 (Automated ML) 主要目標是自動化模型選擇、特徵工程和超參數調整的過程，它通常不直接允許使用者在其中自訂或包含 Python 指令碼來修改其核心訓練流程。如果需要高度自訂的程式碼，通常會使用 Azure Machine Learning SDK 或設計工具中的「執行 Python 指令碼」元件。因此，敘述為「否」。 第二句：自動化機器學習提供了一個使用者友好的介面（例如工作室中的精靈），使得即使沒有深厚程式設計經驗的使用者也能夠訓練和部署機器學習模型。因此，敘述為「是」。 第三句：在互動式畫布中以視覺方式連結資料集和模組是Azure Machine Learning 設計工具 (Designer) 的特性，而不是自動化機器學習。自動化機器學習通常是透過設定參數和執行一個自動化的流程。因此，敘述為「否」。",
    "examTip": "區分 Azure Machine Learning 中的主要工具： 自動化機器學習 (Automated ML)：自動化模型開發流程，適合快速原型設計和基準模型建立，對程式設計要求較低。 設計工具 (Designer)：視覺化的拖放介面，用於建置管線，提供一定程度的自訂能力。 Notebooks (SDK)：程式碼優先的方法，提供最大的靈活性和控制力。",
    "source": 3
  },
  {
    "id": 386,
    "category": "outline-3",
    "type": "single",
    "question": "您的保全系統會分析 CCTV 的影像，讓經過授權的人員能夠進入管制區域。 請問系統使用的是哪一種電腦視覺？",
    "options": [
      "A. 臉部偵測和臉部辨識 (Face Detection and Recognition)",
      "B. 語意分析",
      "C. 影像分析",
      "D. 光學字元辨識(OCR)"
    ],
    "subQuestions": null,
    "answer": "A. 臉部偵測和臉部辨識 (Face Detection and Recognition)",
    "rationale": "保全系統允許「經過授權的人員」進入管制區域，這意味著系統需要： 偵測 (Detect) 影像中是否有人臉。 辨識 (Recognize / Identify) 該人臉是否屬於已授權的人員列表。 這正是臉部偵測和臉部辨識（或臉部驗證）技術的結合應用。Azure AI 臉部服務提供了這些功能。 B. 語意分析（更常見於 NLP 的語義理解或影像的語義分割）在此不直接適用。 C. 影像分析是一個廣泛的術語，而臉部偵測和辨識是其中更具體的技術。 D. OCR 用於讀取文字。",
    "examTip": "當場景涉及到識別特定人物或驗證個人身份時，通常需要使用臉部辨識。而臉部辨識的前提是先進行臉部偵測。",
    "source": 3
  },
  {
    "id": 387,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 針對 模型定型 (Model Training) 您使用資料集的其中一部分來準備機器學習模型及保持資料集平衡，以驗證結果。",
    "options": [
      "A. 環境 (Environment)",
      "B. 模型定型 (Model Training)",
      "C. 計算叢集 (Compute Cluster)",
      "D. 隨機森林 (Random Forest)"
    ],
    "subQuestions": null,
    "answer": "B. 模型定型 (Model Training)",
    "rationale": "模型定型（訓練）(Model Training) 是機器學習的核心過程，在這個階段，演算法會從訓練資料集（通常是原始資料集的一部分）中學習模式和關係。題目描述的「使用資料集的其中一部分來準備機器學習模型」正是指定型過程。而「保持資料集平衡，以驗證結果」雖然提到了驗證，但主要動作是準備和訓練模型。 「保持資料集平衡」可能指處理類別不平衡問題，這也是訓練前資料準備的一部分，或者在訓練過程中透過加權等方式處理。「以驗證結果」暗示了訓練後會有驗證步驟，但核心動作是「準備機器學習模型」。",
    "examTip": "模型訓練是演算法從資料中學習的過程。這個階段會使用「訓練資料集」。",
    "source": 3
  },
  {
    "id": 388,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意；每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "您可以透過使用電子郵件與機器人",
        "answer": "是"
      },
      {
        "text": "您可以透過使用 Microsoft Teams",
        "answer": "是"
      },
      {
        "text": "您可以透過使用網頁網路聊天",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 您可以透過使用電子郵件與機器人通信。 2. 是 - 您可以透過使用 Microsoft Teams 與機器人通信。 3. 是 - 您可以透過使用網頁網路聊天介面與機器人通信。",
    "rationale": "Azure Bot Service 允許開發者將建立的機器人連接到多個通道 (channels)，以便使用者可以透過各種平台與之互動。 電子郵件： Azure Bot Service 支援 Office 365 電子郵件通道。因此，敘述為「是」。 Microsoft Teams： Teams 是一個受支援的熱門通道。因此，敘述為「是」。 網頁網路聊天介面： Web Chat 是一個標準通道，可以將機器人嵌入網站。因此，敘述為「是」。",
    "examTip": "記住 Azure Bot Service 的多通道特性是其重要優勢之一。",
    "source": 3
  },
  {
    "id": 389,
    "category": "outline-4",
    "type": "single",
    "question": "想要建立一套交談式 AI 解決方案，以在 Microsoft Teams、Microsoft Cortana 與 Amazon Alexa 中呈現。 您應該使用下列哪一項服務？",
    "options": [
      "A. 語言理解",
      "B. 語音",
      "C. QnA Maker",
      "D. Azure Bot Service"
    ],
    "subQuestions": null,
    "answer": "D. Azure Bot Service",
    "rationale": "題目要求建立一個能夠在多個平台（Microsoft Teams、Cortana、Amazon Alexa）上呈現的交談式 AI 解決方案。Azure Bot Service 正是為此目的而設計的平台。它提供了一個框架來建置機器人，並能將這些機器人輕鬆連接到各種通道 (channels)，包括題目中提到的這些平台。 A. 語言理解 (LUIS/CLU) 是機器人理解使用者意圖的組件，但不是部署到多通道的框架。 B. 語音服務處理語音輸入輸出，也是機器人可能使用的組件。 C. QnA Maker（現為自訂問題解答）用於建立問答知識庫，可作為機器人的後端。",
    "examTip": "當題目強調需要將交談式 AI 部署到多個不同的平台或通道時，Azure Bot Service 是核心的解決方案。",
    "source": 3
  },
  {
    "id": 390,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 不尋常值或缺少值是一種應用負責任 AI 的 可靠性和安全性 (Reliability and Safety) 準則範例。",
    "options": [
      "A. 透明度 (Transparency)",
      "B. 隱私權與安全性 (Privacy and Security)",
      "C. 問責性 (Accountability)",
      "D. 可靠性和安全性 (Reliability and Safety)"
    ],
    "subQuestions": null,
    "answer": "D. 可靠性和安全性 (Reliability and Safety)",
    "rationale": "當資料中出現不尋常值（異常值）或遺失值時，這些資料品質問題可能會影響 AI 系統的可靠性和安全性 (Reliability and Safety)。Microsoft 負責任 AI 的可靠性和安全性原則強調系統應該在各種情況下（包括面對有問題的資料時）能夠穩健且安全地運作。處理不尋常值或缺少值是確保系統在遇到這些資料品質問題時仍能維持可靠性的重要措施。",
    "examTip": "可靠性和安全性原則關注 AI 系統在各種情況下（包括預期和非預期情況）是否能穩定、正確且安全地運作。處理異常輸入、資料品質問題都是該原則的體現。",
    "source": 3
  },
  {
    "id": 391,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "實體辨識",
        "answer": "是"
      },
      {
        "text": "關鍵片語擷取",
        "answer": "是"
      },
      {
        "text": "關鍵片語擷取",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 實體辨識可用來擷取文字字串中的日期與時間。 2. 是 - 關鍵片語擷取可用來摘取文字字串中的重要片語。 3. 否 - 關鍵片語擷取可用來摘取文字字串中的所有城市名稱。",
    "rationale": "第一句：具名實體辨識 (NER) 可以識別並分類文本中的多種預建實體類型，其中包括「日期」和「時間」。因此，敘述為「是」。 第二句：關鍵片語擷取的目的是識別並提取文本中代表主要談論點或核心概念的詞語或短語（即「重要片語」）。因此，敘述為「是」。 第三句：雖然城市名稱可能是文本中的重要片語之一，但關鍵片語擷取本身並不保證能「擷取所有城市名稱」。要專門提取所有城市名稱，應該使用實體辨識，並指定尋找「地點 (Location)」或「地理政治實體 (Geopolitical Entity, GPE)」等類型的實體。關鍵片語擷取更側重於提取能代表文本主題的詞組。因此，敘述為「否」。",
    "examTip": "區分實體辨識和關鍵片語擷取： 實體辨識：找出並分類特定類型的名詞或專有名詞（如人名、地點、日期、組織）。 關鍵片語擷取：提取代表文本主要觀點或主題的詞語或短語，不一定會進行分類。",
    "source": 3
  },
  {
    "id": 392,
    "category": "outline-2",
    "type": "single",
    "question": "您需要預測某個區域的動物族群規模。 您應該使用下列哪一種 Azure Machine Learning 類型？",
    "options": [
      "A. 蓄集 (應為叢集)",
      "B. 分類",
      "C. 迴歸 (Regression)"
    ],
    "subQuestions": null,
    "answer": "C. 迴歸 (Regression)",
    "rationale": "預測「動物族群規模」（即動物的數量）是在預測一個具體的數值。這個數值是連續的（或至少是可數的整數，可以取較大範圍的值），因此屬於迴歸 (Regression) 問題。",
    "examTip": "當預測的目標是一個數值（如數量、價格、溫度、長度等）時，所使用的機器學習類型是迴歸。",
    "source": 3
  },
  {
    "id": 393,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "聊天機器人",
        "answer": "是"
      },
      {
        "text": "每一種溝通管道都需要一個不同聊天機器人",
        "answer": "否"
      },
      {
        "text": "聊天機器人",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 聊天機器人可以支援語音輸入。 2. 否 - 每一種溝通管道都需要一個不同聊天機器人。 3. 是 - 聊天機器人可以結合自然語言及受限的回應選項來管理交談程式。",
    "rationale": "第一句：現代的聊天機器人可以透過整合語音服務 (STT/TTS) 來支援語音輸入和輸出。因此，敘述為「是」。 第二句：Azure Bot Service 的一個主要優點是，您可以建立一個機器人邏輯，然後將其連接到多個不同的溝通管道（如 Teams, Web Chat, Email, Slack 等），而不需要為每個管道建立一個全新的、不同的機器人。因此，敘述為「否」。 第三句：聊天機器人的設計可以非常靈活。它們既可以理解自由格式的自然語言輸入，也可以提供按鈕、快速回覆等受限的回應選項來引導對話流程（「交談程式」或對話流程 dialog flow）。這種混合方式有助於提升使用者體驗和對話效率。因此，敘述為「是」。",
    "examTip": "理解聊天機器人的能力： 可以處理文字和語音（透過整合）。 一個機器人可以服務多個通道。 可以混合使用自然語言理解和引導式對話（如按鈕、選單）。",
    "source": 3
  },
  {
    "id": 394,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 確判為假 (False Negative) 會在當機器學習模型預測條件不存在，但實際上存在時發生。",
    "options": [
      "A. 強化學習 (Reinforcement Learning)",
      "B. 非監督式學習 (Unsupervised Learning)",
      "C. 聚類/叢集 (Clustering)",
      "D. 確判為假 (False Negative)"
    ],
    "subQuestions": null,
    "answer": "D. 確判為假 (False Negative)",
    "rationale": "確判為假 (False Negative, FN)，也稱為偽陰性或第二型錯誤，是指在二元分類中，實際情況為「正例」（條件存在），但模型錯誤地預測為「負例」（條件不存在）的情況。例如，一個疾病檢測模型將一個實際患病的病人錯誤地判斷為健康。",
    "examTip": "理解混淆矩陣中的四種情況： True Positive (TP) / 真陽性 / 確判為真： 實際為正，預測為正 (正確)。 False Negative (FN) / 偽陰性 / 確判為假： 實際為正，預測為負 (錯誤，漏報)。 False Positive (FP) / 偽陽性 / 誤判為真： 實際為負，預測為正 (錯誤，誤報)。 True Negative (TN) / 真陰性 / 誤判為假： 實際為負，預測為負 (正確)。 題目描述的是 FN 的情況。",
    "source": 3
  },
  {
    "id": 395,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個資料集，其中包含的資料如下表所示。 您有一個根據其他數值資料行預測 ColumnE 值的機器學習模型。 這是下列哪一種模型？",
    "options": [
      "A. 聚集 (Clustering)",
      "B. 分析",
      "C. 迴歸 (Regression)"
    ],
    "subQuestions": null,
    "answer": "C. 迴歸 (Regression)",
    "rationale": "題目描述的任務是「預測 ColumnE 值」，並且 ColumnE 以及其他用來預測的資料行都是「數值資料行」。當預測的目標是一個數值時，這屬於迴歸 (Regression) 類型的機器學習模型。",
    "examTip": "判斷機器學習類型時，首要關注的是預測目標（標籤）的資料類型。如果目標是連續的或廣泛的數值，就是迴歸。",
    "source": 3
  },
  {
    "id": 396,
    "category": "outline-4",
    "type": "single",
    "question": "您正在開發使用文字分析服務的解決方案。 您需要確定某些檔中的主要話題為何。 您應該使用下列何種類型的自然語言處理？",
    "options": [
      "A. 語言偵測",
      "B. 情感分析",
      "C. 實體辨識",
      "D. 關鍵片語提取 (Key Phrase Extraction)"
    ],
    "subQuestions": null,
    "answer": "D. 關鍵片語提取 (Key Phrase Extraction)",
    "rationale": "確定文件中「主要話題」或核心談論點，是關鍵片語提取 (Key Phrase Extraction) 的主要功能。文字分析服務（現為 Azure AI Language 的一部分）可以從文本中識別並提取出代表主要概念的詞語或短語。 A. 語言偵測用於識別文本的語言。 B. 情感分析用於判斷文本的情緒。 C. 實體辨識用於找出並分類特定類型的實體。",
    "examTip": "當需要快速了解一段文字的「主要內容」或「核心主題」時，關鍵片語提取是一個非常有用的工具。",
    "source": 3
  },
  {
    "id": 397,
    "category": "outline-4",
    "type": "single",
    "question": "下列哪一項是互動語音回應系統(IVR)功能？",
    "options": [
      "A. 根據語音路由傳送通話。",
      "B. 將語音通話轉錄為文字。",
      "C. 合併多個通話。",
      "D. 根據成本路由傳送通話。"
    ],
    "subQuestions": null,
    "answer": "B. 將語音通話轉錄為文字。",
    "rationale": "互動語音回應 (IVR) 系統通常用於電話客服中心，允許使用者透過語音指令或按鍵與自動化系統互動。現代 IVR 系統常整合語音辨識（語音轉文字, STT）來理解來電者的口語請求，並將其轉錄為文字以供後續處理或路由。 A. 「根據語音路由傳送通話」是 IVR 的一個應用，但更核心的是先理解語音內容。 B. 將語音通話內容轉錄成文字是 IVR 系統理解使用者需求並進行互動的基礎。 C 和 D 描述的是電話系統的功能，不直接是 IVR 的核心 AI 功能。 雖然 IVR 本身是一個系統，但其核心的 AI 能力之一就是語音辨識。",
    "examTip": "IVR 系統的關鍵在於透過「語音」進行「互動」。這通常需要語音轉文字 (STT) 來理解使用者說了什麼，以及文本轉語音 (TTS) 來回應用戶。將通話轉錄為文字是 STT 的直接應用。",
    "source": 3
  },
  {
    "id": 398,
    "category": "outline-2",
    "type": "single",
    "question": "下列哪兩個動作會在資料擷取期間及 Azure Machine Learning 程式的資料準備階段執行?每個正確答案都是解決方案的一部份。 注意:每答對一個選項，可得一分。",
    "options": [
      "A. [ ] 使用模型為測試數據進行評分。",
      "B. [x] 移除具有缺失值的記錄。",
      "C. [x] 合併多個資料集。",
      "D. [ ] 計算模型的精準度。",
      "E. [ ] 使用即時預測的模型。"
    ],
    "subQuestions": null,
    "answer": "B 和 C B. 移除具有缺失值的記錄。 C. 合併多個資料集。",
    "rationale": "在機器學習的資料擷取和準備階段，常見的任務包括： 資料清理： 例如處理遺失值（如移除包含缺失值的記錄或插補缺失值）、處理異常值、修正資料錯誤等。 資料整合： 例如合併來自多個來源的資料集，以創建一個更全面的資料視圖。 資料轉換：例如特徵縮放、編碼類別變數等。 選項 B 和 C 都屬於這個階段的典型活動。 A, D, E 描述的是模型評估或模型部署階段的任務，而不是資料準備。",
    "examTip": "資料準備是機器學習流程中耗時但至關重要的一環。常見的準備工作包括資料清理（處理缺失值、異常值）、資料轉換（正規化、標準化、編碼）、資料整合以及特徵工程。",
    "source": 3
  },
  {
    "id": 399,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 產生描述影像的文字是下列何者的範例： 光學字元辨識(OCR)。",
    "options": [
      "A. 影像分類",
      "B. 物件偵測",
      "C. 光學字元辨識(OCR) (假設描述來自影像中的文字)",
      "D. 語意分割"
    ],
    "subQuestions": null,
    "answer": "C. 光學字元辨識(OCR) (假設描述來自影像中的文字)",
    "rationale": "如果「產生描述影像的文字」指的是從影像中讀取並提取現有的文字內容，那麼這屬於光學字元辨識 (OCR) 的範疇。OCR 技術用於識別影像中的字元並將其轉換為機器可讀的文字。 然而，如果這句話指的是根據影像的視覺內容生成一段全新的描述性文字（例如，為一張風景照生成「日落時分的海灘」這樣的描述），那麼這更準確地說是影像描述 (Image Captioning) 或影像字幕功能，這也是電腦視覺的一種進階能力。 鑑於 OCR 是 AI-900 中常考的基礎電腦視覺概念，且題目選項通常指向最直接的技術，若 PDF 答案為 OCR，則題目可能預設描述是從影像內嵌文字而來。",
    "examTip": "仔細辨別題目是要求「讀取影像中的現有文字」(OCR) 還是「為影像生成新的描述性文字」(影像描述)。AI-900 考試中，OCR 更為常見。",
    "source": 3
  },
  {
    "id": 400,
    "category": "outline-3",
    "type": "single",
    "question": "您可以在下列哪兩種情況中使用表格辨識器服務？每個正確答案都呈現一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. [ ] 在目錄中尋找產品影像。",
      "B. [x] 根據收據辨識零售商。",
      "C. [x] 從發票中擷取發票號碼。",
      "D. [ ] 將表格從法文翻譯成英文。"
    ],
    "subQuestions": null,
    "answer": "B 和 C B. 根據收據辨識零售商。 C. 從發票中擷取發票號碼。",
    "rationale": "Azure AI 文件智慧（表格辨識器）專門用於從文件和表單中提取文字、鍵值對和表格資料。 根據收據辨識零售商： 文件智慧的預建收據模型可以識別並提取收據上的商家名稱（零售商）。 從發票中擷取發票號碼： 文件智慧的預建發票模型可以識別並提取發票上的發票號碼等關鍵欄位。 關於其他選項： A. 在目錄中尋找產品影像是影像搜尋或物件偵測的任務，通常由電腦視覺或自訂視覺處理。 D. 將表格從法文翻譯成英文是翻譯服務（如 Azure AI Translator）的功能。雖然可能先用文件智慧提取表格內容，但翻譯本身不是其核心功能。",
    "examTip": "當需要從特定類型的結構化或半結構化文件（如收據、發票、名片、ID卡、合約等）中提取特定欄位資訊或表格資料時，Azure AI 文件智慧（表格辨識器）是主要選擇。",
    "source": 3
  },
  {
    "id": 401,
    "category": "outline-1",
    "type": "single",
    "question": "轉換器模型中的三個階段是什麼？每個正確答案都呈現一個完整的解決方案。 注意：每個正確答案可得一分。",
    "options": [
      "A. Token 化 (Tokenization)",
      "B. 下一個 Token 預測 (Next Token Prediction)",
      "C. 姓名化",
      "D. 內嵌計算 (Embedding Calculation)",
      "E. 物件偵測"
    ],
    "subQuestions": null,
    "answer": "A, B, D A. Token 化 (Tokenization) B. 下一個 Token 預測 (Next Token Prediction) D. 內嵌計算 (Embedding Calculation)",
    "rationale": "轉換器模型 (Transformer Model) 在處理和生成文本時，通常涉及以下關鍵階段或概念： Token 化 (Tokenization)： 將輸入文本分割成更小的單元（tokens），例如單詞、子詞或字元。這是文本預處理的第一步。 內嵌計算 (Embedding Calculation)： 將每個 token 轉換為一個稠密的數值向量（embedding），這個向量能夠捕捉 token 的語義資訊。這些內嵌會作為模型的輸入。 （自我）注意力機制和轉換器區塊處理： 這是模型的核心，透過自我注意力機制來權衡不同 token 之間的重要性，並透過多層編碼器/解碼器區塊進行深度特徵提取和上下文理解。 下一個 Token 預測 (Next Token Prediction)： 對於生成式任務（如文本生成、機器翻譯），模型的核心目標是基於已有的上下文（輸入 tokens 和已生成的 tokens）預測下一個最有可能出現的 token。 選項 A, B, D 都是轉換器模型處理流程中的重要環節。 C. 「姓名化」不是標準的 NLP 或轉換器模型術語。 E. 物件偵測是電腦視覺的任務。",
    "examTip": "理解大型語言模型（很多基於轉換器架構）處理文本的基本流程：Token化 -> 內嵌 -> 模型核心處理（如注意力機制）-> 輸出（如下一個Token預測或分類結果）。",
    "source": 3
  },
  {
    "id": 402,
    "category": "outline-4",
    "type": "single",
    "question": "您需要為客戶支援系統開發一套 Web 架構的 AI 解決方案。使用者必須能夠與 Web 應用程式進行互動，引導他們找到最佳資源或解答。 您應該將哪項服務與 Web 應用程式整合以達成目標？",
    "options": [
      "A. 翻譯工具",
      "B. 自訂視覺",
      "C. 臉部",
      "D. 語言服務 (Language Service)"
    ],
    "subQuestions": null,
    "answer": "D. 語言服務 (Language Service)",
    "rationale": "題目描述了一個需要與使用者互動、理解使用者查詢並引導他們找到解答的 Web 應用程式。這是一個典型的交談式 AI 或問答系統的場景。 Azure AI 語言服務 (Language Service) 提供了多種功能來支援這類解決方案，例如： 自訂問題解答（前身為 QnA Maker）：從現有內容建立知識庫以回答使用者問題。 交談語言理解 (CLU)：理解使用者輸入的意圖和實體，以驅動更複雜的對話流程。 這些功能可以與 Web 應用程式（通常透過 Azure Bot Service 整合）結合，以實現目標。 其他選項與此場景不直接相關。",
    "examTip": "當解決方案需要理解使用者文字輸入、回答問題或進行自然語言互動時，Azure AI 語言服務及其相關功能是核心。",
    "source": 3
  },
  {
    "id": 403,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 使用上次消費日期、消費頻率、消費金額 (RFM) 值來識別客戶群中的客層，為下列何者的範例： 叢集 (Clustering)",
    "options": [
      "A. 迴歸",
      "B. 分類",
      "C. 叢集 (Clustering)",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "C. 叢集 (Clustering)",
    "rationale": "使用 RFM（Recency, Frequency, Monetary value）指標來「識別客戶群中的客層」（即將客戶劃分成不同的群組或區隔）是一個典型的客戶分群應用。當目標是根據客戶的特性（如 RFM 值）將他們自動分組，而沒有預先定義好的群組標籤時，這屬於叢集 (Clustering) 這種非監督式學習方法。",
    "examTip": "客戶分群是叢集演算法的常見商業應用。當目標是根據相似性將資料點（如客戶）劃分為若干群組時，應考慮叢集。",
    "source": 3
  },
  {
    "id": 404,
    "category": "outline-4",
    "type": "single",
    "question": "以下何者可用來根據使用者提供的句子完成段落？",
    "options": [
      "A. Azure AI 視覺",
      "B. Azure OpenAI",
      "C. Azure AI 語言 (Language)",
      "D. Azure Machine Learning"
    ],
    "subQuestions": null,
    "answer": "B. Azure OpenAI",
    "rationale": "「根據使用者提供的句子完成段落」這是一個典型的文本生成 (Text Generation) 任務。Azure OpenAI 服務提供了強大的大型語言模型（如 GPT 系列），這些模型非常擅長理解上下文並生成連貫、相關的後續文本，包括完成段落。 C. Azure AI 語言服務提供多種 NLP 功能，如情感分析、實體辨識、摘要等，但對於自由形式的段落完成，Azure OpenAI 的生成能力更為直接和強大。 A. Azure AI 視覺用於處理影像。 D. Azure Machine Learning 是一個用於建置自訂模型的平台。",
    "examTip": "當任務涉及生成新的文本內容，如寫故事、回答開放式問題、完成句子或段落、寫程式碼等，應優先考慮使用像 Azure OpenAI 這樣的大型生成式 AI 模型。",
    "source": 3
  },
  {
    "id": 405,
    "category": "outline-4",
    "type": "single",
    "question": "您正在開發一套交談式 AI 解決方案，該解決方案可透過多種管道 (包括電子郵件、Microsoft Teams 與 Wechat) 與使用者進行交流。 您應該使用下列哪一種服務？",
    "options": [
      "A. Azure Bot Service",
      "B. 文字分析",
      "C. 表格辨識器",
      "D. 翻譯工具"
    ],
    "subQuestions": null,
    "answer": "A. Azure Bot Service",
    "rationale": "題目要求開發一個能夠透過多種通訊管道（如電子郵件、Teams、WeChat）與使用者進行交談的 AI 解決方案。Azure Bot Service 正是為此目的而設計的平台。它允許開發者建置一個核心的機器人邏輯，然後將該機器人連接到各種不同的通道，從而實現跨平台的用户互動。",
    "examTip": "當題目強調交談式 AI 需要支援多個通訊平台或通道時，Azure Bot Service 是關鍵的解決方案。",
    "source": 3
  },
  {
    "id": 406,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 物件偵測 (Object Detection) 可用於識別輸送帶上的產品位置。",
    "options": [
      "A. 影像分類",
      "B. 物件偵測 (Object Detection)",
      "C. 語意分割",
      "D. 臉部辨識"
    ],
    "subQuestions": null,
    "answer": "B. 物件偵測 (Object Detection)",
    "rationale": "識別輸送帶上產品的「位置」是物件偵測 (Object Detection) 的典型應用。物件偵測不僅能識別出影像是某個產品，還能提供該產品在影像中的具體位置（通常以定界框表示）。這對於自動化產線、品質控制等場景非常重要。",
    "examTip": "當任務需要知道物體在影像中的確切位置，而不僅僅是判斷影像的整體類別時，通常需要使用物件偵測。",
    "source": 3
  },
  {
    "id": 407,
    "category": "outline-3",
    "type": "single",
    "question": "您必須判斷影像中汽車位置，以便估計車與車之間的距離。 您應該使用哪種電腦視覺類型？",
    "options": [
      "A. 物件偵測 (Object Detection)",
      "B. 臉部偵測",
      "C. 影像分類",
      "D. 光學字元符辨識 (OCR)"
    ],
    "subQuestions": null,
    "answer": "A. 物件偵測 (Object Detection)",
    "rationale": "要估計車輛之間的距離，首先需要準確地「判斷影像中汽車位置」。物件偵測 (Object Detection) 能夠識別影像中的汽車並提供其位置（定界框）。有了位置資訊，才能進一步計算距離。",
    "examTip": "當任務需要識別物件並確定其在影像中的位置時，物件偵測是關鍵技術。",
    "source": 3
  },
  {
    "id": 408,
    "category": "outline-2",
    "type": "single",
    "question": "您需要在資料集中識別類似的數值。 您應該使用下列哪一種機器學習?",
    "options": [
      "A. 叢集 (Clustering)",
      "B. 迴歸",
      "C. 分類"
    ],
    "subQuestions": null,
    "answer": "A. 叢集 (Clustering)",
    "rationale": "在資料集中「識別類似的數值」並將它們分組，是叢集 (Clustering) 的典型應用。叢集是一種非監督式學習方法，旨在根據資料點之間的相似性將它們劃分為不同的群組或叢集，而不需要預先定義的標籤。",
    "examTip": "當任務是根據相似性將資料分組，尤其是當沒有預先定義的類別標籤時，應考慮叢集。",
    "source": 3
  },
  {
    "id": 409,
    "category": "outline-3",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "物件偵測",
        "answer": "是"
      },
      {
        "text": "物件偵測",
        "answer": "是"
      },
      {
        "text": "物件偵測",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 物件偵測可以識別影像中受損產品的位置。 2. 是 - 物件偵測可以識別影像中受損產品的多個實例。 3. 是 - 物件偵測可以識別影像中多種類型的受損產品。",
    "rationale": "第一句：物件偵測 (Object Detection) 的核心功能之一就是定位影像中物件的位置（通常使用定界框）。因此，它可以識別受損產品的位置。敘述為「是」。 第二句：物件偵測能夠識別和定位影像中同一類別物件的多個實例。例如，如果有多個受損產品，它可以分別標出它們。因此，敘述為「是」。 第三句：一個物件偵測模型可以被訓練來識別多個不同的類別。例如，一個模型可以同時識別「受損的蘋果」、「受損的橘子」和「受損的香蕉」等不同類型的受損產品。因此，敘述為「是」。 (註：PDF 答案為「否」可能基於特定情境或對問題的狹隘解讀，但從物件偵測的一般能力來看，此敘述應為「是」。)",
    "examTip": "物件偵測非常靈活，它可以： 定位物件。 識別同一物件的多個實例。 識別多個不同類別的物件（如果模型已為這些類別進行訓練）。",
    "source": 3
  },
  {
    "id": 410,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選擇 [是]。否則，請選擇 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "下列服務呼叫將接受英文文字做為輸入並且輸出義大利文和法文文字。/translate?from=it&to=fr&to=en",
        "answer": "否"
      },
      {
        "text": "下列服務呼叫將接受英文文字做為輸入並且輸出義大利文和法文文字。translate?from=en&to=fr&to=it",
        "answer": "是"
      },
      {
        "text": "翻譯工具",
        "answer": "是"
      }
    ],
    "answer": "1. 否 - 下列服務呼叫將接受英文文字做為輸入並且輸出義大利文和法文文字。/translate?from=it&to=fr&to=en 2. 是 - 下列服務呼叫將接受英文文字做為輸入並且輸出義大利文和法文文字。translate?from=en&to=fr&to=it 3. 是 - 翻譯工具服務可用來將檔從英文翻譯為法文。",
    "rationale": "第一句：from=it 表示輸入語言是義大利文，to=fr&to=en 表示目標語言是法文和英文。因此，此呼叫會接受義大利文輸入並輸出法文和英文，而不是接受英文輸入。敘述為「否」。 第二句：from=en 表示輸入語言是英文，to=fr&to=it 表示目標語言是法文和義大利文。這符合題目描述「接受英文文字做為輸入並且輸出義大利文和法文文字」。敘述為「是」。 第三句：Azure AI 翻譯工具 (Translator) 服務支援文件翻譯，可以將整個文件（或批次文件）從一種語言翻譯成另一種或多種語言，包括從英文到法文。因此，敘述為「是」。",
    "examTip": "仔細閱讀 API 呼叫中的參數： from：指定來源語言。 to：指定目標語言（可以有多個）。 翻譯工具服務支援文字翻譯和文件翻譯。",
    "source": 3
  },
  {
    "id": 411,
    "category": "outline-3",
    "type": "single",
    "question": "貴公司想要打造瓶子回收機。此回收機必須能夠自動識別正確形狀的瓶子，拒收所有其他項目。公司應該使用哪種 AI 工作負載？",
    "options": [
      "A. 影像分析 (Image Analysis)",
      "B. 電腦視覺 (Computer Vision)",
      "C. 空間分析 (Spatial Analysis)",
      "D. 物件偵測 (Object Detection)"
    ],
    "subQuestions": null,
    "answer": "B. 電腦視覺 (Computer Vision)",
    "rationale": "回收機需要「自動識別正確形狀的瓶子」，這涉及到對物理物件（瓶子）的視覺外觀（形狀）進行分析和識別。這是一個典型的電腦視覺 (Computer Vision) 工作負載。具體來說，可能使用物件偵測或影像分類技術來判斷投入的物品是否為符合規格的瓶子。",
    "examTip": "當任務涉及從影像或影片中識別物件、場景、人臉、文字等視覺資訊時，通常屬於電腦視覺的範疇。",
    "source": 3
  },
  {
    "id": 412,
    "category": "outline-2",
    "type": "single",
    "question": "您有一個 Azure Machine Learning 模型，使用臨床資料預測患者是否患有某種疾病。 您清理並轉換了臨床資料。 您需要確保模型準確度可進行驗證。 您接下來該做什麼?",
    "options": [
      "A. 使用臨床資料驗證模型",
      "B. 使用臨床資料訓練模型。",
      "C. 將臨床資料分割成兩個資料集。",
      "D. 使用自動化機器學習(Automated ML)訓練模型。"
    ],
    "subQuestions": null,
    "answer": "C. 將臨床資料分割成兩個資料集。",
    "rationale": "在清理和轉換資料之後，為了能夠驗證模型的準確度，下一步關鍵步驟是將資料分割成訓練資料集和測試（或驗證）資料集。模型將使用訓練資料集進行學習，然後使用測試資料集（模型未曾見過的資料）來評估其準確度和泛化能力。如果沒有這個分割，直接用全部資料訓練並用相同資料評估，會導致對模型性能的過度樂觀估計。",
    "examTip": "資料分割是機器學習流程中不可或缺的一步，通常在資料清理和特徵工程之後、模型訓練之前進行。",
    "source": 3
  },
  {
    "id": 413,
    "category": "outline-4",
    "type": "single",
    "question": "哪一項自然語言處理功能可用於識別客戶意見反應問卷中的主要話題？",
    "options": [
      "A. 實體辨識",
      "B. 關鍵片段抽取 (Key Phrase Extraction)",
      "C. 翻譯",
      "D. 語言檢測"
    ],
    "subQuestions": null,
    "answer": "B. 關鍵片段抽取 (Key Phrase Extraction)",
    "rationale": "識別客戶意見反應問卷中的「主要話題」或核心談論點，是關鍵片語提取 (Key Phrase Extraction) 的主要功能。文字分析服務（現為 Azure AI Language 的一部分）可以從文本中識別並提取出代表主要概念的詞語或短語。",
    "examTip": "當需要從一段文字中快速了解其「主要內容」或「核心主題」時，關鍵片語提取是一個非常有用的工具。",
    "source": 3
  },
  {
    "id": 414,
    "category": "outline-3",
    "type": "single",
    "question": "使用電腦視覺服務可執行哪一項動作？",
    "options": [
      "A. 輸取手寫信件中的資料",
      "B. 建立訓練影片的縮圖",
      "C. 輸取文件中的關鍵字語",
      "D. 識別直播影片中的動物品種"
    ],
    "subQuestions": null,
    "answer": "A. 輸取手寫信件中的資料",
    "rationale": "Azure AI Vision（電腦視覺服務）的光學字元辨識 (OCR) 功能可以從影像中提取印刷體和手寫文字。因此，「輸取手寫信件中的資料」（即讀取手寫文字）是其能力範圍。 B. 建立訓練影片的縮圖，通常是影片處理服務（如 Azure Media Services 或 Azure AI Video Indexer）的功能，後者也使用電腦視覺技術。 C. 輸取文件中的關鍵字語是自然語言處理（例如 Azure AI Language 服務的關鍵片語提取）的功能。 D. 識別直播影片中的動物品種，屬於進階的電腦視覺（物件偵測或影像分類），可能需要自訂視覺模型或更專業的影片分析服務。",
    "examTip": "Azure AI Vision 的 OCR 功能是其核心能力之一，能夠處理手寫和印刷文字。",
    "source": 3
  },
  {
    "id": 415,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 根據影片摘要計算某區域的動物數目是以下何者的範例： 電腦視覺 (Computer Vision)",
    "options": [
      "A. 深度估計 (Depth Estimation)",
      "B. 空間分析 (Spatial Analysis)",
      "C. 電腦視覺 (Computer Vision)",
      "D. 影像描述 (Image Captioning)"
    ],
    "subQuestions": null,
    "answer": "C. 電腦視覺 (Computer Vision)",
    "rationale": "從影片摘要中計算某區域的動物數量，涉及到對視覺資訊（影片畫面）的分析，以識別和計數動物。這屬於電腦視覺 (Computer Vision) 的範疇。具體來說，可能需要使用物件偵測技術來定位並計數動物。",
    "examTip": "任何涉及從影像或影片中提取資訊、識別物件、分析場景等的任務，都屬於電腦視覺。",
    "source": 3
  },
  {
    "id": 416,
    "category": "outline-4",
    "type": "single",
    "question": "您有一個根據問題解答知識庫提供回應的網路聊天機器人。 您需要確保該機器人會利用使用者意見反應隨著時間改善回應的相關性。 您應該使用何者？",
    "options": [
      "A. 關鍵片語提取",
      "B. 情感分析",
      "C. 商務邏輯",
      "D. 主動式學習 (Active Learning)"
    ],
    "subQuestions": null,
    "answer": "D. 主動式學習 (Active Learning)",
    "rationale": "Azure AI 語言服務的自訂問題解答功能（前身為 QnA Maker）提供了主動式學習 (Active Learning) 的機制。啟用主動式學習後，系統會收集使用者提出的、知識庫中沒有高信度答案的問題。然後，開發者可以檢閱這些問題，並將其新增到知識庫中作為新的問答配對，或將其連結到現有的答案。透過這個過程，機器人的回應相關性會隨著時間和使用者互動而不斷改進。",
    "examTip": "主動式學習是自訂問題解答服務中一個重要的持續改進機制，它利用使用者的實際查詢來幫助擴充和優化知識庫。",
    "source": 3
  },
  {
    "id": 417,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意；每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "您可以使用翻譯工具",
        "answer": "是"
      },
      {
        "text": "您可以使用翻譯工具",
        "answer": "是"
      },
      {
        "text": "您可以使用翻譯工具",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - 您可以使用翻譯工具服務將文字翻譯為不同語言。 2. 是 - 您可以使用翻譯工具服務來偵測指定文字的語言。 3. 否 - 您可以使用翻譯工具服務將語音轉譯為文字。",
    "rationale": "第一句：Azure AI 翻譯工具 (Translator) 服務的核心功能就是將文字從一種語言翻譯成另一種或多種語言。因此，敘述為「是」。 第二句：Azure AI 翻譯工具服務也提供了語言偵測功能，可以識別輸入文字的語言。因此，敘述為「是」。 第三句：將「語音」轉譯（應為轉換）為「文字」是語音轉文字 (STT) 的功能，這是由 Azure AI 語音服務 (Speech Service) 提供的。翻譯工具服務主要處理文字到文字的翻譯。因此，敘述為「否」。",
    "examTip": "區分服務： 翻譯工具服務：處理文字到文字的翻譯和語言偵測。 語音服務：處理語音轉文字 (STT)、文字轉語音 (TTS) 以及語音翻譯（結合 STT、翻譯、TTS）。",
    "source": 3
  },
  {
    "id": 418,
    "category": "outline-4",
    "type": "single",
    "question": "您正在建立一個聊天機器人，該聊天機器人會根據使用者的文字輸入，使用自然語言處理 (NLP) 執行下列動作： 您應該使用下列哪一種類型的 NLP?",
    "options": [
      "A. 語言模組化",
      "B. 翻譯",
      "C. 具名實體辨識 (NER)",
      "D. 情感分析"
    ],
    "subQuestions": null,
    "answer": "C. 具名實體辨識 (NER)",
    "rationale": "聊天機器人要執行如「接受客戶訂單」、「開啟檔案」、「擷取訂單狀態更新」等動作，首先需要從使用者的文字輸入中提取關鍵資訊片段。例如： 接受客戶訂單：需要提取產品名稱、數量、送貨地址等。 開啟檔案：需要提取檔案名稱。 擷取訂單狀態更新：需要提取訂單編號。 這些關鍵資訊片段（產品名稱、檔案名稱、訂單編號等）都可以被視為「實體 (Entities)」。具名實體辨識 (NER) 正是用於從文本中識別和提取這些預先定義或自訂的實體類型。同時，還需要意圖辨識來理解使用者的整體目的，但題目選項中更側重於提取資訊的方面。 A. 「語言模組化」不是標準的 NLP 術語。 B. 翻譯用於語言轉換。 D. 情感分析用於判斷情緒。 因此，NER 是此場景中不可或缺的 NLP 技術。",
    "examTip": "當聊天機器人或任何 NLP 應用需要從使用者輸入中「抓取」或「提取」特定的資訊片段（如名稱、地點、日期、產品、編號等）以執行後續動作時，通常會使用實體辨識。",
    "source": 3
  },
  {
    "id": 419,
    "category": "outline-1",
    "type": "single",
    "question": "您需要根據使用者提示產生影像。 您應該使用下列哪一個 Azure OpenAI 模型？",
    "options": [
      "A. GPT-4",
      "B. Codex",
      "C. DALL-E",
      "D. GPT-3"
    ],
    "subQuestions": null,
    "answer": "C. DALL-E",
    "rationale": "Azure OpenAI 服務中的 DALL-E 模型專門用於根據文字提示（使用者提示）生成影像。 A 和 D (GPT-4, GPT-3)：這些是強大的文本生成和理解模型，但不直接生成影像。 B. Codex：是 GPT-3 的一個變體，專門針對程式碼生成進行了優化。",
    "examTip": "記住 Azure OpenAI 中不同模型的專長： GPT 系列（如 GPT-3, GPT-3.5, GPT-4）：主要用於文本理解和生成。 Codex：主要用於程式碼生成。 DALL-E：主要用於影像生成和編輯。 Embeddings：用於將文本轉換為數值向量以進行語義相似性比較等任務。",
    "source": 3
  },
  {
    "id": 420,
    "category": "outline-1",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "根據歷史資料預測房價為異常偵測",
        "answer": "否"
      },
      {
        "text": "在異常模式中尋找偏差以識別可疑的登入為異常偵測",
        "answer": "是"
      },
      {
        "text": "根據患者的病歷預測患者是否會罹患糖尿病為異常偵測",
        "answer": "否"
      }
    ],
    "answer": "1. 否 - 根據歷史資料預測房價為異常偵測範圍。 2. 是 - 在異常模式中尋找偏差以識別可疑的登入為異常偵測範例。 3. 否 - 根據患者的病歷預測患者是否會罹患糖尿病為異常偵測範例。",
    "rationale": "第一句：根據歷史資料預測房價是一個迴歸 (Regression) 問題，目標是預測一個連續的數值（房價），而不是偵測異常。因此，敘述為「否」。 第二句：在登入模式中尋找偏差以識別可疑的登入活動（例如，從不尋常的地理位置登入、在異常時間登入），這是異常偵測的典型應用，用於安全性監控。因此，敘述為「是」。 第三句：根據患者的病歷預測患者「是否」會罹患糖尿病，這是一個分類 (Classification) 問題（預測兩個類別：會/不會罹患），而不是異常偵測。因此，敘述為「否」。",
    "examTip": "異常偵測的核心是找出與「正常」或「預期」模式不同的事件。要仔細區分它與迴歸（預測數值）和分類（預測類別）的不同。",
    "source": 3
  },
  {
    "id": 421,
    "category": "outline-4",
    "type": "single",
    "question": "您正在為音樂節撰寫 Language Understanding (LUIS) 應用程式。 您希望使用者能夠詢問預定節目的相關問題，例如：「主舞臺現在正在進行哪一場表演？」 「主舞臺現在正在進行哪一場表演？」問題，是下列何種類型元素的範例？",
    "options": [
      "A. 領域",
      "B. 表達 (Utterance)",
      "C. 實體",
      "D. 意圖"
    ],
    "subQuestions": null,
    "answer": "B. 表達 (Utterance)",
    "rationale": "在語言理解 (LUIS) 或其後繼者交談語言理解 (CLU) 中： 表達 (Utterance)： 是使用者實際輸入或說出的文字或片語。例如，「主舞臺現在正在進行哪一場表演？」就是一個表達。 意圖 (Intent)： 代表使用者表達的目的或想要執行的動作。例如，上述表達的意圖可能是「查詢表演節目」。 實體 (Entity)： 是表達中包含的關鍵資訊片段，與意圖相關。例如，在上述表達中，「主舞臺」可能是一個實體（表演地點）。 領域 (Domain)：在 LUIS 的早期版本中，用於組織相關意圖和實體的概念，類似於應用程式的主題。 因此，問題「主舞臺現在正在進行哪一場表演？」本身是用戶說的話，即表達。",
    "examTip": "記住 LUIS/CLU 的核心概念： 表達 (Utterance)：使用者說的話。 意圖 (Intent)：使用者想做什麼。 實體 (Entity)：話中的關鍵字/資訊。",
    "source": 3
  },
  {
    "id": 422,
    "category": "outline-2",
    "type": "single",
    "question": "您可以使用哪兩種計量來評估迴歸模型？每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 均方根誤差 (RMSE)",
      "B. 平衡精準度",
      "C. 曲線下面積 (AUC)",
      "D. 決定係數 (R-squared / R²)",
      "E. F1 分數"
    ],
    "subQuestions": null,
    "answer": "A 和 D A. 均方根誤差 (RMSE) D. 決定係數 (R-squared / R²)",
    "rationale": "評估迴歸模型性能的常用計量包括： 均方根誤差 (Root Mean Squared Error, RMSE)： 衡量預測值與實際值之間差異的平方平均數的平方根。值越小表示模型性能越好。 決定係數 (Coefficient of Determination, R-squared, R²)： 表示模型解釋的目標變數變異性的百分比。值越接近 1 表示模型擬合得越好。 平均絕對誤差 (Mean Absolute Error, MAE) 相對平方誤差 (Relative Squared Error, RSE) 相對絕對誤差 (Relative Absolute Error, RAE) 選項 B, C, E (平衡精準度、AUC、F1 分數) 都是用於評估分類模型的計量。",
    "examTip": "務必區分迴歸模型和分類模型的評估計量。 迴歸常用：RMSE, MAE, R-squared。 分類常用：準確度, 精確率, 召回率, F1 分數, AUC。",
    "source": 3
  },
  {
    "id": 423,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取[是]，否則，請選取[否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "Azure AI",
        "answer": "是"
      },
      {
        "text": "Azure AI",
        "answer": "否"
      },
      {
        "text": "Azure AI",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - Azure AI 語言服務可用來從文件中擷取關鍵字語。 2. 否 - Azure AI 語言服務可用根據使用者提示產生新聞稿。 3. 是 - Azure AI 語言服務可用來建立社交媒體摘要分析器以偵測情緒。",
    "rationale": "第一句：Azure AI 語言服務提供了關鍵片語提取功能，可以從文件中識別並提取重要的詞語或短語。因此，敘述為「是」。 第二句：根據使用者提示產生新聞稿（文本生成）是大型語言模型（如 Azure OpenAI 服務中的模型）的強項。Azure AI 語言服務本身不直接提供這種自由形式的文本生成。因此，敘述為「否」。 第三句：Azure AI 語言服務提供了情感分析功能，可以分析文本（如社交媒體摘要）並偵測其中表達的情緒（正面、負面、中性）。因此，敘述為「是」。",
    "examTip": "Azure AI 語言服務專注於「理解」和「分析」現有文本（如提取關鍵片語、實體、情感、摘要等）。而「生成」全新內容（如寫文章、新聞稿）則更多是 Azure OpenAI 這類生成式 AI 服務的範疇。",
    "source": 3
  },
  {
    "id": 424,
    "category": "outline-4",
    "type": "single",
    "question": "您可使用哪一個適用於語言的 Azure AI 服務功能，從社交媒體貼文中提取日期和人名等資料？",
    "options": [
      "A. 關鍵片語顯取",
      "B. 實體辨識 (Entity Recognition)",
      "C. 語言偵測",
      "D. 語音辨識"
    ],
    "subQuestions": null,
    "answer": "B. 實體辨識 (Entity Recognition)",
    "rationale": "從社交媒體貼文中提取「日期」和「人名」等特定類型的資訊，是具名實體辨識 (Named Entity Recognition, NER) 的功能。Azure AI 語言服務提供了 NER 功能，可以識別和分類文本中的多種預建實體，包括日期、人名、地點、組織等。",
    "examTip": "當需要從文本中找出並分類特定類型的信息（如日期、人名、地點、組織、產品等）時，應使用實體辨識。",
    "source": 3
  },
  {
    "id": 425,
    "category": "outline-1",
    "type": "single",
    "question": "請將 AI 工作負載類型與適當的案例配對。 作答時，請將左側資料行所列的適當工作負載類型，拖曳至右側對應的案例。每種工作負載類型可能只使用一或多次，甚至完全用不到。 注意；每答對一個選項，可得一分。 AI 工作負載類型 A. 知識採礦 (Knowledge Mining) B. 電腦視覺 (Computer Vision) C. 自然語言處理 (NLP) 案例 回答退款及換貨問題的自動化聊天機器人 判斷相片中是否有人 判斷評論為正面或負面",
    "options": [
      "A. Azure AI 語言 (Language Service)",
      "B. Azure AI 內容安全 (Content Safety)",
      "C. 1. - 回答退款及換貨問題的自動化聊天機器人 (A. 知識採礦) 2. - 判斷相片中是否有人 (B. 電腦視覺) 3. - 判斷評論為正面或負面 (C. 自然語言處理)",
      "D. 具名實體辨識 (Named Entity Recognition)"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 回答退款及換貨問題的自動化聊天機器人 (A. 知識採礦) 2. - 判斷相片中是否有人 (B. 電腦視覺) 3. - 判斷評論為正面或負面 (C. 自然語言處理)",
    "rationale": "回答退款及換貨問題的自動化聊天機器人： 這種聊天機器人通常需要存取一個包含大量相關資訊（如公司政策、產品資訊、常見問題解答）的知識庫。建立和查詢這種知識庫的過程可以被視為知識採礦 (Knowledge Mining) 的一部分，它涉及到從各種來源提取和組織知識，使機器人能夠有效地回答問題。雖然聊天機器人本身也使用 NLP，但能夠從大量資料中找到答案更偏向知識採礦的應用。 判斷相片中是否有人： 這是典型的電腦視覺 (Computer Vision) 任務，具體來說是物件偵測（如果需要定位人）或影像分類（如果只是判斷是否有人出現）。 判斷評論為正面或負面： 這是情感分析，是自然語言處理 (NLP) 的一個核心應用。",
    "examTip": "知識採礦通常與從大量（通常是非結構化）資料中建立可搜尋的知識庫或索引相關，以便應用程式（如聊天機器人、搜尋引擎）可以查詢和利用這些知識。",
    "source": 3
  },
  {
    "id": 426,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 迴歸 (Regression) 模型可用於預測拍賣品售價。",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "預測拍賣品的「售價」是在預測一個連續的數值（金額）。這種預測數值型輸出的機器學習任務屬於迴歸 (Regression)。",
    "examTip": "再次強調，當預測的目標是價格、數量、溫度等數值時，通常是迴歸問題。",
    "source": 3
  },
  {
    "id": 427,
    "category": "outline-3",
    "type": "single",
    "question": "請選擇可正確填完句子的答案。 您可以透過 Azure AI 自訂視覺 (Custom Vision) 服務，使用您自己的影像來定型物件偵測模型。",
    "options": [
      "A. 實例分割 (Instance Segmentation)",
      "B. 臉部辨識 (Face Recognition)",
      "C. 影像分類 (Image Classification)",
      "D. Azure AI 自訂視覺 (Custom Vision)"
    ],
    "subQuestions": null,
    "answer": "D. Azure AI 自訂視覺 (Custom Vision)",
    "rationale": "Azure AI 自訂視覺 (Custom Vision) 服務允許使用者上傳自己的影像資料，並對其進行標記，以訓練自訂的影像分類或物件偵測模型。如果需要使用自己的影像來訓練一個能夠偵測特定物件的模型，自訂視覺是合適的選擇。",
    "examTip": "當題目提到「使用自己的影像」、「訓練自訂模型」來進行影像分類或物件偵測時，通常指向 Azure AI 自訂視覺服務。",
    "source": 3
  },
  {
    "id": 428,
    "category": "outline-3",
    "type": "single",
    "question": "您的公司專門製造小工具。 您有 1,000 張小工具的數位相片。 您需要在這些相片中識別出小工具的位置。 您應該使用何者？",
    "options": [
      "A. Azure AI 電腦視覺空間分析",
      "B. Azure AI 電腦視覺影像分析",
      "C. Azure AI 自訂視覺物件偵測",
      "D. Azure AI 自訂視覺分類"
    ],
    "subQuestions": null,
    "answer": "C. Azure AI 自訂視覺物件偵測",
    "rationale": "題目要求在公司「專門製造的小工具」的相片中「識別出小工具的位置」。這表明需要一個能夠偵測特定自訂物件（小工具）並定位它的模型。 Azure AI 自訂視覺 (Custom Vision) 服務的物件偵測功能允許使用者上傳自己的影像（如 1,000 張小工具相片），標記物件的位置，並訓練一個自訂的物件偵測模型。 A. 空間分析通常與分析實體空間中人員的移動和存在有關。 B. Azure AI 電腦視覺的影像分析提供預建模型，可能無法準確識別特定的小工具，除非它是常見物件。 D. 自訂視覺分類只會告訴您影像是哪種類別，不會提供物件的位置。",
    "examTip": "當需要識別特定、自訂的物件並找出其位置時，Azure AI 自訂視覺的物件偵測是首選方案。",
    "source": 3
  },
  {
    "id": 429,
    "category": "outline-3",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 電腦視覺功能可部署來，將臉部辨識功能整合...",
    "options": [
      "A. 將臉部辨識功能整合",
      "B. 影像分類",
      "C. 物件偵測",
      "D. 語意分割"
    ],
    "subQuestions": null,
    "answer": "A. 將臉部辨識功能整合",
    "rationale": "Azure AI Vision（電腦視覺服務）本身提供了基本的臉部偵測功能。而更進階的臉部辨識、驗證、相似臉部搜尋等功能則由專門的 Azure AI 臉部服務 (Face service) 提供。題目中的「電腦視覺功能可部署來，將臉部辨識功能整合...」表明了使用電腦視覺相關技術（在此更可能是指臉部服務）來實現臉部辨識的整合。 其他選項： 「從表單擷取資訊」是 Azure AI 文件智慧（表格辨識器）的功能。 「偵測不当影像內容」是 Azure AI Vision 的內容安全功能，或專門的 Azure AI 內容安全服務。",
    "examTip": "雖然 Azure AI Vision 可以偵測臉部，但完整的臉部辨識（識別特定人物）通常會使用更專門的臉部服務。",
    "source": 3
  },
  {
    "id": 430,
    "category": "outline-4",
    "type": "single",
    "question": "請將自然語言處理工作負載的類型與適當案例配對。 作答時，請將資料行所列的適當工作負載類型，拖曳至右側對應的案例。每種工作負載類型可能只使用一或多次，甚至完全用不到。 注意：每答對一個選項，可得一分。 NLP 工作負載類型 A. 實體辨識 (Entity Recognition) B. 情感分析 (Sentiment Analysis) C. 翻譯 (Translation) D. 關鍵片語擷取 (Key Phrase Extraction) E. 語言偵測 (Language Detection) 案例 從文字中擷取人員、位置與組織 沿著正負態度評估文字 將文字轉換為不同語言",
    "options": [
      "A. 1. - 從文字中擷取人員、位置與組織 (A. 實體辨識) 2. - 沿著正負態度評估文字 (B. 情感分析) 3. - 將文字轉換為不同語言 (C. 翻譯)",
      "B. 關鍵片語擷取",
      "C. 語言翻譯",
      "D. 語音辨識"
    ],
    "subQuestions": null,
    "answer": "A. 1. - 從文字中擷取人員、位置與組織 (A. 實體辨識) 2. - 沿著正負態度評估文字 (B. 情感分析) 3. - 將文字轉換為不同語言 (C. 翻譯)",
    "rationale": "從文字中擷取人員、位置與組織： 這是具名實體辨識 (NER) 的核心功能，用於識別和分類文本中的特定實體類型。 沿著正負態度評估文字： 判斷文本的情緒傾向（正面、負面或中性）是情感分析的任務。 將文字轉換為不同語言： 這是機器翻譯的功能。",
    "examTip": "熟悉各種 NLP 工作負載的定義和典型應用場景對於解答配對題非常重要。",
    "source": 3
  },
  {
    "id": 431,
    "category": "outline-4",
    "type": "single",
    "question": "您有一套 AI 解決方案，可讓使用者使用口語命令控制智慧型裝置。 該解決方案使用的是哪兩種類型的自然語言處理 (NLP) 工作負載？每個正確答案都是解決方案的一部分。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. [ ] 語言模型",
      "B. [x] 關鍵片語提取",
      "C. [ ] 文字轉換語音",
      "D. [x] 語音轉換文字",
      "E. [ ] 翻譯"
    ],
    "subQuestions": null,
    "answer": "B 和 D B. 關鍵片語提取 D. 語音轉換文字",
    "rationale": "使用者使用「口語命令」控制智慧型裝置，這個過程涉及到： 語音轉換文字 (Speech-to-Text, STT)： 首先，系統需要將使用者的口語命令轉換成文字格式，以便進行後續處理。 理解命令內容： 轉換成文字後，系統需要理解這個命令的含義。這可能包括： 意圖辨識（例如，使用者想要「開燈」還是「關燈」）。 實體辨識（例如，燈的位置是「客廳」還是「臥室」）。 關鍵片語提取 (Key Phrase Extraction) 也可以用來識別命令中的重要詞語（如「燈」、「客廳」），作為理解命令的一部分。 在提供的選項中，D (語音轉換文字) 是必需的。B (關鍵片語提取) 是一種可以用來輔助理解命令內容的 NLP 技術。 選項 C (文本轉語音) 是裝置回應用戶時才需要。",
    "examTip": "對於語音控制的應用，通常至少需要語音轉文字 (STT) 來接收指令，以及某種形式的自然語言理解（如意圖辨識、實體辨識或關鍵片語提取）來解析指令的含義。",
    "source": 3
  },
  {
    "id": 432,
    "category": "outline-3",
    "type": "single",
    "question": "您將一張影像傳送至電腦視覺 API，並收到如下圖所示的標註影像。 請問此處使用了哪種電腦視覺類型？",
    "options": [
      "A. 光學字元辨識 (OCR)",
      "B. 影像分類",
      "C. 物件偵測 (Object Detection)",
      "D. 臉部偵測"
    ],
    "subQuestions": null,
    "answer": "C. 物件偵測 (Object Detection)",
    "rationale": "圖中顯示的結果是，影像中的不同物件（香蕉和蘋果）不僅被識別出來，而且它們的位置也被用定界框 (bounding box) 標示出來了。這種同時識別物件類別並定位物件的電腦視覺任務稱為物件偵測 (Object Detection)。",
    "examTip": "如果電腦視覺任務的輸出不僅告訴你影像是「什麼」（分類），還告訴你「什麼在哪裡」（定位），那麼這就是物件偵測。",
    "source": 3
  },
  {
    "id": 433,
    "category": "outline-4",
    "type": "single",
    "question": "您可以使用下列哪一個 AI 服務擷取使用者輸入的意圖（例如「稍後給我回電」）？",
    "options": [
      "A. 交談式 Language Understanding",
      "B. 翻譯工具",
      "C. Azure 認知搜尋",
      "D. 語音"
    ],
    "subQuestions": null,
    "answer": "A. 交談式 Language Understanding",
    "rationale": "從使用者輸入（如「稍後給我回電」）中擷取其「意圖 (intent)」（例如，「請求回電」的意圖），是交談語言理解 (CLU) 的核心功能。CLU（其前身是 LUIS - Language Understanding Intelligent Service）允許開發者建立模型來識別使用者話語背後的意圖，並提取相關的實體 (entities)。",
    "examTip": "當任務是理解使用者「想要做什麼」或他們輸入的「目的」時，通常需要使用意圖辨識功能，這在 Azure 中由交談語言理解 (CLU) 提供。",
    "source": 3
  },
  {
    "id": 434,
    "category": "outline-3",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意；每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "在自定義視覺",
        "answer": "否"
      },
      {
        "text": "您可以在自訂視覺",
        "answer": "是"
      },
      {
        "text": "在自訂視覺",
        "answer": "是"
      }
    ],
    "answer": "1. 否 - 在自定義視覺服務中建立物件偵測模型時，您必須選取「多標籤」或「多類別」其中一種分類類型。 2. 是 - 您可以在自訂視覺服務中建立物件偵測模型，以尋找影像中內容的位置。 3. 是 - 在自訂視覺服務中建立物件偵測模型時，您可以從一組預先定義的領域中加以選擇。",
    "rationale": "第一句：在 Azure AI 自訂視覺 (Custom Vision) 服務中建立影像分類專案時，才需要選擇分類類型（「多類別」指一張影像只屬於一個類別，「多標籤」指一張影像可以有多個標籤/類別）。對於物件偵測專案，您是定義要偵測的物件類別（標籤）並標註其在影像中的位置（定界框），而不是選擇「多標籤」或「多類別」分類類型。因此，敘述為「否」。 第二句：物件偵測的核心功能就是識別影像中的物件並找出其位置。因此，敘述為「是」。 第三句：自訂視覺服務為某些常見的物件偵測場景（如一般、零售貨架上的標誌、地標等）提供了預先訓練的領域模型。選擇一個合適的領域可以利用該領域的預訓練知識，從而用較少的自訂訓練資料達到更好的效果。因此，敘述為「是」。",
    "examTip": "區分自訂視覺中的影像分類和物件偵測專案類型及其設定差異。物件偵測關注物件的「類別」和「位置」。預訓練領域可以加速特定場景的模型開發。",
    "source": 3
  },
  {
    "id": 435,
    "category": "outline-4",
    "type": "single",
    "question": "下列哪兩案例屬於交談式 AI 工作負載的範例？每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 使用知識庫以互動方式回答使用者問題的網站",
      "B. 可以回答諸如「今天天氣如何？」等問題的家用智慧型裝置",
      "C. 監控機器溫度，以在溫度達到特定閾值時打開風扇",
      "D. 自動將車前燈插入汽車的生產線機械"
    ],
    "subQuestions": null,
    "answer": "A 和 B A. 使用知識庫以互動方式回答使用者問題的網站 B. 可以回答諸如「今天天氣如何？」等問題的家用智慧型裝置",
    "rationale": "交談式 AI (Conversational AI) 的核心是模擬人類的互動式對話。 A. 網站上的聊天機器人使用知識庫與使用者進行問答互動，這是典型的交談式 AI 應用。 B. 家用智慧型裝置（如智慧音箱）理解使用者的自然語言問題並給予回答，也是交談式 AI 的範例。 選項 C 和 D 描述的是自動化控制或機器人流程自動化，不涉及與使用者的自然語言對話。",
    "examTip": "交談式 AI 的關鍵詞是「互動」、「對話」、「問答」、「聊天」。",
    "source": 3
  },
  {
    "id": 436,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 建置迴歸模型時，標籤的資料類型必須是 數值 (Numeric)。",
    "options": [
      "A. 類別",
      "B. 文字",
      "C. 數值 (Numeric)",
      "D. 布林值"
    ],
    "subQuestions": null,
    "answer": "C. 數值 (Numeric)",
    "rationale": "迴歸模型 (Regression Model) 用於預測連續的數值型輸出。因此，其標籤 (Label)（即要預測的目標變數）的資料類型必須是數值，例如價格、溫度、數量等。",
    "examTip": "記住不同機器學習類型對標籤資料類型的要求： 迴歸：標籤是數值。 分類：標籤是類別 (可以是文字或代表類別的數字)。",
    "source": 3
  },
  {
    "id": 437,
    "category": "outline-2",
    "type": "single",
    "question": "在機器學習過程中，您該如何分割資料以供訓練及評估之用？",
    "options": [
      "A. 就訓練使用標籤，評估則使用特徵。",
      "B. 將資料隨機分割為訓練用資料列和評估用資料列。",
      "C. 將資料隨機分割為訓練用資料行和評估用資料行。",
      "D. 就訓練使用特徵，評估則使用標籤。"
    ],
    "subQuestions": null,
    "answer": "B. 將資料隨機分割為訓練用資料列和評估用資料列。",
    "rationale": "在機器學習中，標準的資料分割方法是將整個資料集按資料列（樣本）隨機分割成訓練集和測試/驗證集。每一筆資料列（樣本）都包含其特徵和（對於監督式學習）標籤。模型在訓練集上學習，然後在測試/驗證集上評估其對新樣本的預測能力。 分割資料行（選項 C）是沒有意義的，因為這樣會導致訓練集和測試集包含不同的特徵或標籤。 選項 A 和 D 混淆了特徵和標籤在訓練與評估中的角色。訓練和評估都需要使用特徵來進行預測，並將預測結果與實際標籤進行比較。",
    "examTip": "資料分割是按樣本（資料列）進行的，而不是按屬性（資料行）。目標是創建兩個（或多個）具有相似分佈但互不重疊的樣本子集。",
    "source": 3
  },
  {
    "id": 438,
    "category": "outline-1",
    "type": "single",
    "question": "以下何者是 Microsoft 負責任 AI 準則的範例？",
    "options": [
      "A. AI 系統應該使用黑箱模型。",
      "B. AI 系統應該公平待人。",
      "C. AI 系統不應該透露其設計細節。",
      "D. AI 系統應該保即開發人員的利益。"
    ],
    "subQuestions": null,
    "answer": "B. AI 系統應該公平待人。",
    "rationale": "Microsoft 負責任 AI 的核心原則之一是公平性 (Fairness)，即 AI 系統應公平對待所有人，避免基於種族、性別、年齡或其他敏感特徵而產生歧視性或有偏見的結果。 A 和 C 違反了透明度原則。 D. AI 系統的目標應是造福社會和個人，而不僅僅是開發者的利益。",
    "examTip": "「公平待人」、「避免偏見」、「不歧視」是公平性原則的關鍵描述。",
    "source": 3
  },
  {
    "id": 439,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 Azure Kubernetes Service (AKS) 可以用來在實際執行環境中裝載自動化機器學習 (Automated ML) 模型。",
    "options": [
      "A. Azure Kubernetes Service (AKS)",
      "B. 隨機森林 (Random Forest)",
      "C. 工作區 (Workspace)",
      "D. 設計工具 (Designer)"
    ],
    "subQuestions": null,
    "answer": "A. Azure Kubernetes Service (AKS)",
    "rationale": "在 Azure Machine Learning 中，將模型部署到實際執行環境（生產環境）時，Azure Kubernetes Service (AKS) 是一個常用的、功能強大的計算目標。它提供了延展性、高可用性和進階管理功能，適合部署對性能和可靠性有較高要求的機器學習模型，包括由自動化機器學習產生的模型。 Azure Container Instances (ACI) 也是一個部署選項，但它更適合用於開發、測試或低流量的場景。",
    "examTip": "對於生產環境的模型部署，AKS 通常是首選，因為它提供了更好的延展性和管理能力。而 ACI 更適合快速測試和小型部署。",
    "source": 3
  },
  {
    "id": 440,
    "category": "outline-1",
    "type": "single",
    "question": "下列哪一項為處理提供給 AI 系統的異常值或缺少值考慮的 Microsoft 責任 AI 的指導原則？",
    "options": [
      "A. 包容性",
      "B. 透明度 (Transparency)",
      "C. 可靠性和安全性 (Reliability and Safety)",
      "D. 公平性"
    ],
    "subQuestions": null,
    "answer": "C. 可靠性和安全性 (Reliability and Safety)",
    "rationale": "處理提供給 AI 系統的異常值或缺少值，確保系統能夠穩健地處理這些不完整或異常的輸入資料，是可靠性和安全性 (Reliability and Safety) 原則的核心體現。這個原則要求 AI 系統在面對各種輸入條件（包括異常或缺失資料）時都能可靠運作，避免產生錯誤或有害的結果。 雖然透明度也很重要（理解資料問題如何影響模型），但「處理」這些異常值的實際行動更直接關聯到系統的可靠性和安全性。",
    "examTip": "可靠性和安全性原則強調 AI 系統應該能夠在各種條件下（包括異常輸入）穩健運作，避免失效或產生有害結果。",
    "source": 3
  },
  {
    "id": 441,
    "category": "outline-4",
    "type": "single",
    "question": "您需要為網站部署聊天機器人。該聊天機器人必須根據以下檔中的資訊，回答使用者的問題： 您應該使用下列何種服務來處理檔？（選兩項）",
    "options": [
      "A. QnA Maker (現為自訂問題解答)",
      "B. Azure 機器人服務 (Azure Bot Service)",
      "C. 文字分析",
      "D. Language Understanding (LUIS)"
    ],
    "subQuestions": null,
    "answer": "A 和 B (假設題目為選兩項) A. QnA Maker (現為自訂問題解答) B. Azure 機器人服務 (Azure Bot Service) (如果題目實際為單選，且僅能選擇一個服務來「處理文件」以建立知識，則 A 是最直接的答案。)",
    "rationale": "要建立一個能根據 Word 文件和 FAQ 網頁回答問題的聊天機器人，通常需要以下服務： QnA Maker (現為 Azure AI 語言服務的自訂問題解答功能)： 此服務用於從您提供的內容來源（如 Word 文件、網頁 FAQ）建立和管理知識庫。它會自動提取問答配對。 Azure Bot Service： 此服務用於建置、部署和管理聊天機器人本身。機器人會使用 QnA Maker 建立的知識庫來回答使用者問題，並可以連接到網站等通道。 因此，要「處理文件」以供聊天機器人使用，QnA Maker 是直接相關的服務。而要「部署聊天機器人」，則需要 Azure Bot Service。如果題目是選兩項服務來完成整個解決方案，則 A 和 B 都是必要的。如果僅指「處理文件」階段，則 A 是核心。",
    "examTip": "從現有文件或 FAQ 快速建立問答知識庫是 QnA Maker（自訂問題解答）的強項。然後，通常會使用 Azure Bot Service 將此知識庫整合到一個可用的聊天機器人中。",
    "source": 3
  },
  {
    "id": 442,
    "category": "outline-2",
    "type": "single",
    "question": "請問您應該採取什麼措施以減少機器學習分類模型所產生的誤判為真 (False Positives) 之數目？",
    "options": [
      "A. 修改有利於錯誤否定的閾值。",
      "B. 修改有利於誤判為真的閾值。 (應理解為調整閾值以減少FP)",
      "C. 在定型資料中納入測試資料。",
      "D. 增加定型反覆運算的數目。"
    ],
    "subQuestions": null,
    "answer": "B. 修改有利於誤判為真的閾值。 (應理解為調整閾值以減少FP)",
    "rationale": "誤判為真 (False Positive, FP) 指的是實際為負類，但模型錯誤地預測為正類的情況。 要減少 FP 的數量，通常需要讓模型對於將樣本預測為正類更加「嚴格」或「謹慎」。這可以透過提高分類閾值來實現。例如，如果原本閾值是 0.5，模型將機率大於 0.5 的樣本預測為正。若將閾值提高到 0.7，則只有機率大於 0.7 的樣本才會被預測為正，這會減少一些原本會被誤判為正的樣本（即減少 FP），但同時也可能增加錯誤否定 (FN) 的數量。 選項 B「修改有利於誤判為真的閾值」的表述有些不直觀，但其意涵應是調整閾值以達到減少誤判為真的目的，即提高閾值。 A. 修改有利於錯誤否定的閾值（即降低閾值）會增加 FP。 C 和 D 涉及到重新訓練模型或改變訓練過程，而調整閾值是在模型訓練完成後進行的。",
    "examTip": "理解調整分類閾值對 FP 和 FN 的影響： 提高閾值：減少 FP（提高精確率 Precision），可能增加 FN（降低召回率 Recall）。 降低閾值：減少 FN（提高召回率 Recall），可能增加 FP（降低精確率 Precision）。 目標是減少 FP，所以需要提高閾值。",
    "source": 3
  },
  {
    "id": 443,
    "category": "outline-3",
    "type": "single",
    "question": "將機器學習的類型與適當的方案相匹配。 將適當的機器學習類型從左欄拖曳到右欄的方案。每個類型可以使用一次、多次或完全不使用。 注意：每答對一個選項，可得一分。 機器學習類型 A. 影像分類 (Image Classification) B. 物件偵測 (Object Detection) C. 影像分割 (Image Segmentation) D. 臉部辨識 (Face Detection/Recognition) E. 光學字元辨識 (OCR) 方案 (Scenario) 隔離北極熊和棕熊的影像 判斷相片中熊的位置 判斷影像中哪些圖元是熊的一部分。",
    "options": [
      "A. 迴歸",
      "B. 叢集",
      "C. 1. - 隔離北極熊和棕熊的影像 (A. 影像分類) 2. - 判斷相片中熊的位置 (B. 物件偵測) 3. - 判斷影像中哪些圖元是熊的一部分。 (C. 影像分割)",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 隔離北極熊和棕熊的影像 (A. 影像分類) 2. - 判斷相片中熊的位置 (B. 物件偵測) 3. - 判斷影像中哪些圖元是熊的一部分。 (C. 影像分割)",
    "rationale": "隔離北極熊和棕熊的影像： 這是將影像分配到「北極熊」或「棕熊」這兩個預定義類別中，屬於影像分類 (Image Classification)。 判斷相片中熊的位置： 找出熊在相片中的具體位置（通常用定界框標出）是物件偵測 (Object Detection) 的任務。 判斷影像中哪些圖元是熊的一部分： 精確到像素級別，識別出哪些像素屬於熊，哪些不屬於，這是影像分割 (Image Segmentation)（更具體地說是語義分割或實例分割）。",
    "examTip": "理解不同電腦視覺任務的精度和輸出： 影像分類：整個影像是什麼？（一個標籤） 物件偵測：影像是什麼，在哪裡？（多個物件，每個有類別和定界框） 影像分割：影像中每個像素屬於什麼？（像素級的標籤/遮罩）",
    "source": 3
  },
  {
    "id": 444,
    "category": "outline-1",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 開發 AI 自動駕駛汽車系統時，應善用 Microsoft 責任 AI 的 可靠性和安全性 (Reliability and Safety) ，確保系統在生命週期內維持一致的作業。",
    "options": [
      "A. 可靠性和安全性 (Reliability and Safety)",
      "B. 包容性 (Inclusiveness)",
      "C. 透明度 (Transparency)",
      "D. 可靠性與安全性 (Reliability and Safety)"
    ],
    "subQuestions": null,
    "answer": "A. 可靠性和安全性 (Reliability and Safety)",
    "rationale": "對於自動駕駛汽車這類對安全有極高要求的 AI 系統，「確保系統在生命週期內維持一致的作業」至關重要。這直接對應到 Microsoft 責任 AI 的可靠性和安全性 (Reliability and Safety) 原則。該原則強調 AI 系統應在其設計的操作條件下可靠且安全地執行，能夠應對非預期情況，並避免造成傷害。",
    "examTip": "當題目涉及對生命安全有潛在影響的 AI 應用（如自動駕駛、醫療診斷）時，可靠性與安全性原則通常是首要考量。",
    "source": 3
  },
  {
    "id": 445,
    "category": "outline-4",
    "type": "single",
    "question": "您擁有 100 部 [不] 包含任何音訊的教學影片。每部教學影片都有一份腳本。 您需要根據腳本，為每部影片產生旁白音訊檔案。 您應該使用下列何種工作負載？",
    "options": [
      "A. 翻譯",
      "B. 語音合成 (Speech Synthesis / TTS)",
      "C. 語音辨識",
      "D. 語言模組化"
    ],
    "subQuestions": null,
    "answer": "B. 語音合成 (Speech Synthesis / TTS)",
    "rationale": "根據提供的腳本（文字）為影片「產生旁白音訊檔案」，這是一個將文字轉換為語音的過程。這項技術稱為語音合成 (Speech Synthesis) 或文本轉語音 (Text-to-Speech, TTS)。Azure AI 語音服務提供了此功能。 C. 語音辨識是將語音轉換為文字。",
    "examTip": "文字 -> 聲音 = 語音合成 / TTS。 聲音 -> 文字 = 語音辨識 / STT。",
    "source": 3
  },
  {
    "id": 446,
    "category": "outline-3",
    "type": "single",
    "question": "您使用無人機識別生長在農作物之間的雜草，以傳送清除雜草的指示。 這是哪種電腦視覺類型範例？",
    "options": [
      "A. 物件偵測 (Object Detection)",
      "B. 光學字元辨識 (OCR)",
      "C. 場景分割"
    ],
    "subQuestions": null,
    "answer": "A. 物件偵測 (Object Detection)",
    "rationale": "使用無人機識別農作物間的「雜草」並「傳送清除雜草的指示」（可能意味著需要知道雜草的具體位置），這是一個物件偵測 (Object Detection) 的應用場景。物件偵測不僅能識別出影像是雜草，還能提供雜草在影像中的位置，以便進行精準的清除作業。 C. 場景分割（或影像分割）會將影像中的每個像素分配給一個類別（例如，雜草、作物、土壤），提供比物件偵測更精細的資訊，但物件偵測已足以識別和定位雜草以進行清除。在 AI-900 的選項中，物件偵測是更常見且直接的答案。",
    "examTip": "當需要從影像中找出特定物件並定位它們以進行後續操作時（如計數、標記、清除），物件偵測是關鍵技術。",
    "source": 3
  },
  {
    "id": 447,
    "category": "outline-4",
    "type": "single",
    "question": "您需要以多種語言為公司提供書面新聞稿。 您應該使用下列哪一種服務？",
    "options": [
      "A. 翻譯工具 (Translator)",
      "B. 文字分析",
      "C. 語音",
      "D. Language Understanding (LUIS)"
    ],
    "subQuestions": null,
    "answer": "A. 翻譯工具 (Translator)",
    "rationale": "將書面新聞稿（文字）提供為「多種語言」版本，這直接涉及到文字翻譯的功能。Azure AI 翻譯工具 (Translator) 服務專門用於在多種語言之間進行文字和文件翻譯。",
    "examTip": "當任務的核心是將文本從一種語言轉換為另一種語言時，翻譯工具服務是正確的選擇。",
    "source": 3
  },
  {
    "id": 448,
    "category": "outline-2",
    "type": "single",
    "question": "您可以使用哪兩種語言撰寫 Azure Machine Learning 設設計工具的自訂程式碼？每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. [ ] Scala",
      "B. [ ] C#",
      "C. [x] Python",
      "D. [x] R"
    ],
    "subQuestions": null,
    "answer": "C 和 D C. Python D. R",
    "rationale": "Azure Machine Learning 設計工具雖然是一個視覺化的拖放工具，但它也允許使用者透過特定的元件來執行自訂程式碼，以擴展其功能。設計工具主要支援以下兩種語言來撰寫自訂腳本： Python： 透過「執行 Python 指令碼」元件。 R： 透過「執行 R 指令碼」元件。 Scala 和 C# 並非設計工具中直接支援用於自訂機器學習邏輯的腳本語言。",
    "examTip": "在 Azure Machine Learning 設計工具中，如果需要編寫自訂程式碼，Python 和 R 是受支援的語言。",
    "source": 3
  },
  {
    "id": 449,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "聊天機器人",
        "answer": "否"
      },
      {
        "text": "Azure Bot Service",
        "answer": "是"
      },
      {
        "text": "使用 Azure Bot Service",
        "answer": "是"
      }
    ],
    "answer": "1. 否 - 聊天機器人只能使用自訂程式碼來建置。 2. 是 - Azure Bot Service 提供可用於裝載交談式機器人的服務。 3. 是 - 使用 Azure Bot Service 建置的機器人可與 Microsoft Teams 使用者交流。",
    "rationale": "第一句：雖然可以使用自訂程式碼（例如使用 Bot Framework SDK）來建置聊天機器人以獲得最大的靈活性，但並非「只能」如此。Azure 也提供了低程式碼或無程式碼的選項來建立機器人，例如 Power Virtual Agents，或者使用 Azure AI Language 的自訂問題解答功能快速建立問答機器人。因此，敘述為「否」。 第二句：Azure Bot Service 的核心功能之一就是提供一個平台來裝載（部署和運行）交談式機器人，並管理其與各種通道的連接。因此，敘述為「是」。 第三句：Microsoft Teams 是 Azure Bot Service 支援的眾多通道之一。使用 Azure Bot Service 建置的機器人可以輕鬆地配置為與 Teams 使用者進行互動。因此，敘述為「是」。",
    "examTip": "Azure Bot Service 是建立和部署交談式 AI 的核心平台，支援多種開發方式（程式碼優先、低程式碼）和多種通訊通道。",
    "source": 3
  },
  {
    "id": 450,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 根據接單數，可預測外送員將會加班的時數是下列何種範例： 迴歸 (Regression)",
    "options": [
      "A. 迴歸 (Regression)",
      "B. 分類",
      "C. 叢集",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "A. 迴歸 (Regression)",
    "rationale": "預測外送員「加班的時數」是在預測一個具體的數值（小時數）。這個數值是連續的或至少是可量化的，因此這是一個迴歸 (Regression) 問題。",
    "examTip": "當預測目標是一個可以量化的數值時，例如時間長度、金額、溫度、數量等，通常適用迴歸模型。",
    "source": 3
  },
  {
    "id": 451,
    "category": "outline-1",
    "type": "single",
    "question": "您有一套以 AI 為基礎的貸款核准系統。 在測試期間，您發現這套系統具有性別偏見。 這會違反哪一項責任 AI 準則？",
    "options": [
      "A. 權責性",
      "B. 可靠性和安全性",
      "C. 公平性 (Fairness)",
      "D. 透明度"
    ],
    "subQuestions": null,
    "answer": "C. 公平性 (Fairness)",
    "rationale": "如果 AI 系統在貸款核准方面表現出「性別偏見」，意味著它對不同性別的申請人給予了不平等的待遇或產生了有偏差的結果。這直接違反了 Microsoft 責任 AI 的公平性 (Fairness) 原則，該原則要求 AI 系統應公平對待所有人，避免產生歧視。",
    "examTip": "「偏見 (Bias)」（如性別偏見、種族偏見）是公平性原則中需要重點關注和解決的問題。",
    "source": 3
  },
  {
    "id": 452,
    "category": "outline-2",
    "type": "single",
    "question": "您計劃將 Azure Machine Learning 模型部署為供用戶端應用程式使用的服務。 在部署模型之前，您應該依序執行下列哪三個程式？作答時，請將正確的程式從程式清單拖曳至答案區域，然後依照正確的順序排列。 提供的程式選項 (假設)： 資料準備 模型訓練 模型評估 資料加密 模型重新訓練 作答區 (請依正確順序排列三項)： 步驟 1 位置 步驟 2 位置 步驟 3 位置",
    "options": [
      "A. 答案 (正確順序)： 資料準備 模型訓練 模型評估",
      "B. 超參數調整 (Hyperparameter Tuning)",
      "C. 環境 (Environment)",
      "D. 模型登錄 (Model Registry)"
    ],
    "subQuestions": null,
    "answer": "A. 答案 (正確順序)： 資料準備 模型訓練 模型評估",
    "rationale": "在將機器學習模型部署為服務之前，典型的開發流程包括以下主要階段： 資料準備 (Data Preparation)： 這包括資料的收集、清理、轉換、特徵工程和分割（訓練集/測試集）。 模型訓練 (Model Training)： 使用準備好的訓練資料集來訓練所選的機器學習演算法。 模型評估 (Model Evaluation)： 使用獨立的測試資料集來評估已訓練模型的性能，確保其達到預期的準確度和泛化能力。 只有在模型經過充分訓練和評估，並被認為可以接受之後，才會進行部署。資料加密是安全措施，模型重新訓練是後續維護的環節。",
    "examTip": "記住標準的機器學習專案生命週期：資料準備 -> 模型訓練 -> 模型評估 -> 模型部署。",
    "source": 3
  },
  {
    "id": 453,
    "category": "outline-1",
    "type": "single",
    "question": "您有一個使用 Azure OpenAGPT-3.5 大型語言模型(LLM)回答技術性問題的聊天機器人。 下列哪兩個敘述正確描述了該聊天機器人？每個正確答案都呈現一個完整的解決方案。 注意：每個正確答案可得一分。",
    "options": [
      "A. [ ] 該聊天機器人將一律提供準確的資料。",
      "B. [x] 基礎知識資料可用來限制聊天機器人的輸出。",
      "C. [ ] 該聊天機器人適合用來執行醫療診斷。",
      "D. [x] 該聊天機器人可能會使用不準確的資料回應。"
    ],
    "subQuestions": null,
    "answer": "B 和 D B. 基礎知識資料可用來限制聊天機器人的輸出。 D. 該聊天機器人可能會使用不準確的資料回應。",
    "rationale": "關於使用大型語言模型 (LLM)（如 GPT-3.5）的聊天機器人： 基礎知識資料可用來限制聊天機器人的輸出 (B)： 這是指檢索增強生成 (Retrieval Augmented Generation, RAG) 或「在您的資料上使用 Azure OpenAI」的概念。透過提供特定的背景資料（基礎知識），可以引導 LLM 根據這些提供的資訊來生成回應，從而提高回應的相關性和準確性，並減少模型「幻覺」（產生不實資訊）的可能性。這可以「限制」或更準確地說是「引導」和「 grounding」模型的輸出。 該聊天機器人可能會使用不準確的資料回應 (D)： 大型語言模型雖然非常強大，但它們是基於其訓練資料中的模式來生成文本的，並不具備真正的理解或事實核查能力。因此，它們有時可能會產生聽起來合理但不正確或不準確的資訊（稱為「幻覺」或 hallucinations）。 關於其他選項： A. LLM 並不保證一律提供準確的資料，如上所述。 C. 雖然 LLM 可以處理醫療相關的文字，但由於其可能產生不準確資訊的特性以及醫療診斷的嚴肅性，直接將其用於執行醫療診斷是不恰當的，也不符合負責任 AI 的原則（特別是可靠性與安全性）。",
    "examTip": "理解大型語言模型的優點和局限性： 優點：強大的文本理解和生成能力，能執行多種 NLP 任務。 局限性：可能產生「幻覺」（不實資訊），需要謹慎使用，尤其是在高風險領域。可以透過提供基礎資料 (grounding data) 來提高其回答的準確性和相關性。",
    "source": 3
  },
  {
    "id": 454,
    "category": "outline-4",
    "type": "single",
    "question": "請選取作答區中正確的選項，完成下列句子。 在會議上進行簡報時，您的場次會被轉譯為聽眾的隱藏式輔助字幕。 為下列何者的範例： 語音辨識 (Speech Recognition)",
    "options": [
      "A. 情感分析",
      "B. 語音辨識 (Speech Recognition)",
      "C. 實體辨識",
      "D. 關鍵片語擷取"
    ],
    "subQuestions": null,
    "answer": "B. 語音辨識 (Speech Recognition)",
    "rationale": "將會議簡報的口語內容「轉譯為聽眾的隱藏式輔助字幕」，這個過程是將語音轉換為文字。這項技術稱為語音辨識 (Speech Recognition) 或語音轉文字 (Speech-to-Text, STT)。Azure AI 語音服務提供了此功能。",
    "examTip": "當場景描述將「說出來的話」變成「寫下來的字」（例如字幕、會議記錄），這就是語音辨識。",
    "source": 3
  },
  {
    "id": 455,
    "category": "outline-1",
    "type": "single",
    "question": "您需要產生用於冊頁冊的卡通。每個卡通都將以文字描述為基礎。 您應該使用下列哪一個 Azure OpenAI 模型？",
    "options": [
      "A. GPT-3.5",
      "B. GPT-4",
      "C. Codex",
      "D. DALL-E"
    ],
    "subQuestions": null,
    "answer": "D. DALL-E",
    "rationale": "根據「文字描述」來「產生卡通（影像）」，這是影像生成的任務。Azure OpenAI 服務中的 DALL-E 模型專門用於此類基於文本提示生成影像的功能。",
    "examTip": "當任務是從文字描述創造視覺圖像時，DALL-E 是 Azure OpenAI 中對應的模型。",
    "source": 3
  },
  {
    "id": 456,
    "category": "outline-3",
    "type": "single",
    "question": "您有一個可在超市貨架影像中識別產品品牌標幀的應用程式。 該應用程式使用了哪一項服務？",
    "options": [
      "A. Azure AI 自訂視覺分類",
      "B. Azure AI 電腦視覺讀取",
      "C. Azure AI 自訂視覺物件偵測",
      "D. Azure AI 電腦視覺光學字元辨識(OCR)"
    ],
    "subQuestions": null,
    "answer": "C. Azure AI 自訂視覺物件偵測",
    "rationale": "在超市貨架影像中識別「產品品牌標幀」（可能指品牌標誌或特定產品包裝）並可能需要定位它們，這是一個物件偵測任務。由於「產品品牌」可能非常多樣且特定，通常需要訓練一個自訂模型。Azure AI 自訂視覺 (Custom Vision) 服務的物件偵測功能允許使用者訓練自己的模型來識別和定位特定物件。 A. 自訂視覺分類只會對整個影像進行分類，不會標出品牌的位置。 B 和 D (電腦視覺讀取/OCR) 用於提取文字，與識別品牌標誌的視覺特徵不同。",
    "examTip": "當需要識別特定品牌或產品（尤其是那些可能不被通用模型覆蓋的）並定位它們時，Azure AI 自訂視覺的物件偵測是一個強大的選擇。",
    "source": 3
  },
  {
    "id": 457,
    "category": "outline-4",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 互動式答題的使用者輸入做為應用程式的一部分，是下列項目之範例： 自然語言處理 (NLP)。↓",
    "options": [
      "A. 自然語言處理 (NLP)",
      "B. 對話式語言理解 (CLU)",
      "C. 機器翻譯 (Machine Translation)",
      "D. 具名實體辨識 (Named Entity Recognition)"
    ],
    "subQuestions": null,
    "answer": "A. 自然語言處理 (NLP)",
    "rationale": "「互動式答題的使用者輸入」通常是以自然語言（文字或語音）的形式提供的。應用程式需要理解這些輸入的含義才能做出正確的回應或執行相應的操作。處理和理解人類自然語言是自然語言處理 (NLP) 的核心範疇。",
    "examTip": "任何涉及讓電腦「理解」或「處理」人類語言（書面或口語）的場景，都與自然語言處理有關。",
    "source": 3
  },
  {
    "id": 458,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 建置分類模型時，標籤必須是 類別 (Categorical)。",
    "options": [
      "A. 分類 (Classification)",
      "B. 異常偵測 (Anomaly Detection)",
      "C. 類別 (Categorical)",
      "D. 遷移學習 (Transfer Learning)"
    ],
    "subQuestions": null,
    "answer": "C. 類別 (Categorical)",
    "rationale": "分類模型 (Classification Model) 的目標是將輸入資料分配到預先定義的離散類別中。因此，其標籤 (Label)（即要預測的目標變數）必須是類別型的資料，例如「是/否」、「貓/狗/鳥」、「垃圾郵件/非垃圾郵件」等。雖然這些類別有時可以用數字編碼，但它們本質上代表的是不同的組別或類型。",
    "examTip": "分類模型的標籤是類別型的；迴歸模型的標籤是數值型的。",
    "source": 3
  },
  {
    "id": 459,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "Azure Bot Service",
        "answer": "是"
      },
      {
        "text": "Azure Bot Service",
        "answer": "是"
      },
      {
        "text": "Azure Bot Service",
        "answer": "否"
      }
    ],
    "answer": "1. 是 - Azure Bot Service 與 Azure 認知服務可加以整合。 2. 是 - Azure Bot Service 可透過交談方式與客戶互動。 3. 否 - Azure Bot Service 可以直接將常見問題解答 (FAQ) 匯入問答集。",
    "rationale": "第一句：Azure Bot Service 經常與 Azure 認知服務（如 Azure AI Language、Azure AI Speech）整合，以賦予機器人理解自然語言、進行語音互動等能力。因此，敘述為「是」。 第二句：Azure Bot Service 的核心目的就是建立能夠透過交談方式與使用者（包括客戶）互動的機器人。因此，敘述為「是」。 第三句：直接將 FAQ 匯入並建立問答集（知識庫）是 Azure AI 語言服務的自訂問題解答功能（前身為 QnA Maker）的任務。Azure Bot Service 本身不直接執行此匯入操作，而是使用由其他服務建立的知識庫。因此，敘述為「否」。",
    "examTip": "Azure Bot Service 是「骨架」和「通道」，而認知服務（如語言服務、語音服務）是賦予機器人「大腦」和「感官」的組件。",
    "source": 3
  },
  {
    "id": 460,
    "category": "outline-3",
    "type": "single",
    "question": "請問使用電腦視覺可以執行哪兩項工作？每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 偵測影像中的色彩配置。",
      "B. 擷取關鍵詞組。",
      "C. 預測股票價格。",
      "D. 將文字翻譯為不同語言。",
      "E. 偵測影像中的商標。"
    ],
    "subQuestions": null,
    "answer": "A 和 E A. 偵測影像中的色彩配置。 E. 偵測影像中的商標。",
    "rationale": "Azure AI Vision（電腦視覺服務）提供了多種影像分析功能： 偵測影像中的色彩配置： Azure AI Vision 可以分析影像並識別其主要色彩、輔助色彩以及是否為黑白影像。 偵測影像中的商標 (Brand Detection)： 它可以從包含數千個全球公認標誌的資料庫中偵測影像中的商業品牌。 關於其他選項： B. 擷取關鍵詞組是自然語言處理（Azure AI Language 服務）的功能。 C. 預測股票價格是機器學習中的迴歸或時間序列預測任務。 D. 將文字翻譯為不同語言是翻譯工具服務的功能。",
    "examTip": "熟悉 Azure AI Vision 的核心功能，例如影像分類、物件偵測、OCR、臉部偵測、成人內容偵測、色彩配置分析、品牌偵測等。",
    "source": 3
  },
  {
    "id": 461,
    "category": "outline-3",
    "type": "single",
    "question": "您需要建立一個模型，為個人數位相片集加上標籤。 您應該使用下列哪一項 Azure 認知服務？",
    "options": [
      "A. 自訂視覺",
      "B. 用字遣詞",
      "D. 表格辨識器"
    ],
    "subQuestions": null,
    "answer": "C. 電腦視覺 (Computer Vision)",
    "rationale": "為「個人數位相片集加上標籤」這項任務，如果指的是自動識別影像中的常見物件、生物、風景或動作，並為其生成描述性標籤（例如，一張海灘照片可能被標記為 \"海灘\"、\"海洋\"、\"天空\"、\"沙子\"），那麼 Azure AI Vision（電腦視覺服務）的影像分析功能（特別是其標記影像內容的能力）非常適合。它使用預建模型來識別數千種可辨識的物件和概念。 A. 自訂視覺用於當您需要訓練模型來識別特定於您需求的、預建模型可能無法很好識別的物件或類別時。對於一般的個人相片標記，預建的電腦視覺模型通常已足夠。 B. 「用字遣詞」不是標準的 Azure 服務名稱，如果指的是語言服務或文字分析，則與影像標記無關。 D. 表格辨識器用於從文件中提取資料。",
    "examTip": "如果需要對影像進行廣泛的、通用的內容標記（識別常見物件、場景等），Azure AI Vision（電腦視覺）的影像分析功能是首選。如果需要識別高度特定或自訂的物件，則考慮自訂視覺。",
    "source": 3
  },
  {
    "id": 462,
    "category": "outline-4",
    "type": "single",
    "question": "您正在 Azure 中開發一套聊天機器人解決方案。 您應該使用下列何種服務來判斷使用者的意圖？",
    "options": [
      "A. Azure 認知搜尋",
      "B. 翻譯工具",
      "C. 語音",
      "D. 語言 (Language)"
    ],
    "subQuestions": null,
    "answer": "D. 語言 (Language)",
    "rationale": "判斷使用者在聊天機器人中的「意圖 (intent)」（即他們想要做什麼或查詢什麼），是自然語言理解的核心任務。Azure AI 語言 (Language) 服務提供了交談語言理解 (CLU) 功能（其前身是 LUIS），專門用於從使用者話語中識別意圖和提取相關實體。",
    "examTip": "當需要理解使用者輸入的「目的」或「意圖」時，Azure AI 語言服務的交談語言理解 (CLU) 是關鍵。",
    "source": 3
  },
  {
    "id": 463,
    "category": "outline-2",
    "type": "single",
    "question": "您正在評估在 Azure 機器學習中是使用基本工作區還是企業工作區。 哪兩項任務需要企業工作區？每個正確答案都是一個完整的解決方案。 注意：每答對一個選項，可得一分。",
    "options": [
      "A. 使用圖形使用者介面(GUI)從 Azure 機器學習設計器定義並運行機器學習實驗",
      "B. 創建用作工作站的計算實例",
      "C. 使用圖形用戶介面(GUI)運行自動機器學習實驗",
      "D. 基於逗號分隔值(CSV)文件創建數據集"
    ],
    "subQuestions": null,
    "answer": "A 和 C A. 使用圖形使用者介面(GUI)從 Azure 機器學習設計器定義並運行機器學習實驗 C. 使用圖形用戶介面(GUI)運行自動機器學習實驗",
    "rationale": "(註：Azure Machine Learning 的工作區版本（基本版和企業版）概念已被棄用。現在只有單一類型的工作區，其功能由 Azure 訂用帳戶和角色型存取控制 (RBAC) 決定。然而，此問題可能基於舊有的版本區別。) 在過去的版本區分中： 企業版工作區 提供了更完整的功能集，包括對圖形化工具如 Azure Machine Learning 設計工具 (Designer) 和自動化機器學習 (Automated ML) 的使用者介面 (GUI) 的完整支援。 基本版工作區功能相對較少，更偏重於使用 SDK 進行開發。 因此，使用 GUI 運行設計器實驗 (選項 A) 和使用 GUI 運行自動化機器學習實驗 (選項 C) 在舊有版本區分下，通常被視為企業版工作區的功能。 創建計算實例 (選項 B) 和從 CSV 創建數據集 (選項 D) 是兩種版本都支援的基本功能。",
    "examTip": "雖然工作區版本已統一，但如果遇到區分基本版和企業版的問題，通常圖形化、無程式碼/低程式碼的進階工具（如設計工具 UI、自動化 ML UI）以及更全面的 MLOps 功能會被歸類為（歷史上的）企業版特性。",
    "source": 3
  },
  {
    "id": 464,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "語言服務",
        "answer": "是"
      },
      {
        "text": "語言服務",
        "answer": "否"
      },
      {
        "text": "語言服務",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 語言服務可以識別文字是以何種語言撰寫。 2. 否 - 語言服務可以偵測檔中手寫簽名。 3. 是 - 語言服務可以識別檔中所提及公司和組織。",
    "rationale": "第一句：Azure AI 語言服務 (Language Service) 提供了語言偵測功能，可以識別輸入文字的語言。因此，敘述為「是」。 第二句：偵測文件中的手寫簽名屬於影像處理和可能的電腦視覺或文件智慧（表格辨識器，如果簽名是文件的一部分）的範疇，而不是語言服務的核心功能（語言服務處理文本）。因此，敘述為「否」。 第三句：Azure AI 語言服務提供了具名實體辨識 (NER) 功能，可以識別和分類文本中提及的各種實體，包括「公司」和「組織」。因此，敘述為「是」。",
    "examTip": "Azure AI 語言服務的核心功能圍繞著對「文字」的理解和分析。而涉及影像中視覺元素的識別，則屬於電腦視覺或文件智慧的範疇。",
    "source": 3
  },
  {
    "id": 465,
    "category": "outline-2",
    "type": "single",
    "question": "您應該使用哪種機器學習類型找出有相似購物習慣的人群組？",
    "options": [
      "A. 回歸",
      "B. 分類",
      "C. 叢集 (Clustering)"
    ],
    "subQuestions": null,
    "answer": "C. 叢集 (Clustering)",
    "rationale": "「找出有相似購物習慣的人群組」是在沒有預先定義群組標籤的情況下，根據人們的購物行為（特徵）將他們自動分組。這是一個典型的叢集 (Clustering) 問題，屬於非監督式學習。其目的是發現資料中潛在的自然群體結構。",
    "examTip": "當任務是「分群」、「區隔」或「找出相似的群體」，並且沒有預先給定的類別標籤時，通常適用叢集演算法。",
    "source": 3
  },
  {
    "id": 466,
    "category": "outline-4",
    "type": "single",
    "question": "您正在 Azure 中開發自然語言處理解決方案。該解決方案會分析客戶評論，並判斷每則評論的正面或負面程度。 這是下列何種類型自然語言處理工作負載範例？",
    "options": [
      "A. 語言偵測",
      "B. 關鍵片語摘取",
      "C. 情感分析 (Sentiment Analysis)",
      "D. 實體辨識"
    ],
    "subQuestions": null,
    "answer": "C. 情感分析 (Sentiment Analysis)",
    "rationale": "分析客戶評論並判斷其「正面或負面程度」是情感分析 (Sentiment Analysis) 的核心任務。情感分析旨在識別和提取文本中表達的主觀意見、情緒和態度。",
    "examTip": "當需要判斷一段文字是正面、負面還是中性，或者更細緻的情緒（如開心、悲傷、憤怒）時，所使用的 NLP 技術是情感分析。",
    "source": 3
  },
  {
    "id": 467,
    "category": "outline-2",
    "type": "single",
    "question": "請選取可正確完成句子的答案。 在 Azure Machine Learning 設計工具中，您可以使用以 選取資料集中的資料行 (Select Columns in Dataset)... 探索潛在特徵資料行中值的分佈。",
    "options": [
      "A. 計算叢集 (Compute Cluster)",
      "B. 訓練管線 (Training Pipeline)",
      "C. 線性迴歸 (Linear Regression)",
      "D. 選取資料集中的資料行 (Select Columns in Dataset) (並結合其視覺化功能)"
    ],
    "subQuestions": null,
    "answer": "D. 選取資料集中的資料行 (Select Columns in Dataset) (並結合其視覺化功能)",
    "rationale": "在 Azure Machine Learning 設計工具中，若要探索資料行中值的分佈（例如查看直方圖、統計摘要等），通常會先選取感興趣的資料行。雖然「選取資料集中的資料行」模組本身主要用於選擇要保留或排除的欄位，但在選取後，可以對其輸出進行視覺化 (Visualize) 操作，以查看所選欄位的值分佈。 更直接用於探索資料分佈的可能是資料集本身的視覺化功能，或者在「執行 Python 指令碼」元件中使用程式碼繪圖。但如果必須從設計工具的標準模組中選擇與「探索潛在特徵資料行中值的分佈」最相關的前置操作，那麼選定要分析的欄位是第一步。",
    "examTip": "Azure Machine Learning 設計工具提供了對資料集和模組輸出進行視覺化的功能，這對於資料探索和理解至關重要。通常，您需要先指定要分析的資料或資料行。",
    "source": 3
  },
  {
    "id": 468,
    "category": "outline-4",
    "type": "yesno",
    "question": "在下列每一項敘述中，如果敘述成立，請選取 [是]。否則，請選取 [否]。 注意：每答對一個選項，可得一分。",
    "options": null,
    "subQuestions": [
      {
        "text": "您可以使用語音服務",
        "answer": "是"
      },
      {
        "text": "您可以使用文字分析",
        "answer": "是"
      },
      {
        "text": "您可以使用語音服務",
        "answer": "是"
      }
    ],
    "answer": "1. 是 - 您可以使用語音服務將通話轉譯為文字。 2. 是 - 您可以使用文字分析服務從通話文字記錄中萃取關鍵實體。 3. 是 - 您可以使用語音服務將通話語音翻譯為其他語言。",
    "rationale": "第一句：將通話（語音）轉譯（轉換）為文字是語音轉文字 (STT) 的功能，這是 Azure AI 語音服務的核心能力。因此，敘述為「是」。 第二句：從通話的文字記錄中萃取關鍵實體（如人名、地點、產品等）是具名實體辨識 (NER) 的任務，這是 Azure AI 語言服務（其前身包含文字分析）提供的功能。因此，敘述為「是」。 第三句：Azure AI 語音服務提供了語音翻譯功能，可以將一種語言的語音輸入翻譯成另一種語言的文字或語音輸出。因此，敘述為「是」。",
    "examTip": "Azure 提供了多種認知服務，它們可以協同工作以完成複雜的任務。例如，語音服務負責處理語音的輸入和輸出，而語言服務負責對轉換後的文本進行理解和分析。",
    "source": 3
  },
  {
    "id": 469,
    "category": "outline-4",
    "type": "single",
    "question": "您有一個包含客戶評論的網站。 您需要儲存這些評論英文版，然後辨識每位使用者的地理位置，以個別的語言向使用者展示評論。您應該使用下列何種類型的自然語言處理工作負載？",
    "options": [
      "A. 語言模組化",
      "B. 翻譯 (Translation)",
      "C. 關鍵片語摘取",
      "D. 語音辨識"
    ],
    "subQuestions": null,
    "answer": "B. 翻譯 (Translation)",
    "rationale": "題目描述的核心需求是「以個別的語言向使用者展示評論」，並且前提是已經有了評論的「英文版」。這意味著需要將英文版的評論翻譯成使用者各自的語言。這是一個典型的機器翻譯任務。雖然還提到了「辨識每位使用者的地理位置」（可能用於推斷其語言），但主要的 NLP 工作負載是翻譯。",
    "examTip": "當任務涉及到將文本從一種語言轉換為另一種語言時，無論是單句還是整個文件，都屬於翻譯工作負載。",
    "source": 3
  },
  {
    "id": 470,
    "category": "outline-4",
    "type": "single",
    "question": "您有一個 Azure 機器人。 您需要新增常見問題集 (FAQ) 的支援。 您該使用哪項 Azure 認知服務以支援 FAQ？",
    "options": [
      "A. Azure AI 語言 (Language)",
      "B. Azure AI 翻譯工具",
      "C. Azure AI 語音",
      "D. Azure AI 文件智慧"
    ],
    "subQuestions": null,
    "answer": "A. Azure AI 語言 (Language)",
    "rationale": "為機器人新增 FAQ 支援，即讓機器人能夠根據常見問題集回答使用者問題，這正是 Azure AI 語言服務中的自訂問題解答功能（前身為 QnA Maker）的核心用途。該功能可以從現有的 FAQ 文件、網頁或其他內容來源建立知識庫。",
    "examTip": "當需要從現有 FAQ 或文件快速建立一個問答知識庫以供聊天機器人使用時，Azure AI 語言服務的自訂問題解答功能是首選。",
    "source": 3
  },
  {
    "id": 471,
    "category": "outline-2",
    "type": "single",
    "question": "您需要預測未來 10 年的海平面（以公尺為單位）。 您應該使用哪種機器學習類型？",
    "options": [
      "A. 回歸 (Regression)",
      "B. 聚類 (Clustering)",
      "C. 分類"
    ],
    "subQuestions": null,
    "answer": "A. 回歸 (Regression)",
    "rationale": "預測「海平面（以公尺為單位）」是在預測一個連續的數值。這種預測數值型輸出的機器學習任務屬於迴歸 (Regression)。如果這個預測是基於時間序列數據並且關注時間的推移，它也可以被視為時間序列預測，而時間序列預測本質上是一種特殊形式的迴歸。",
    "examTip": "當預測目標是一個可以量化的數值時，通常選擇迴歸。",
    "source": 3
  },
  {
    "id": 472,
    "category": "outline-3",
    "type": "single",
    "question": "您需要將手寫筆記轉換成數位元文字。 您應該使用哪種電腦視覺類型？",
    "options": [
      "A. 光學字元辨識 (OCR)",
      "B. 物件偵測",
      "C. 影像分類",
      "D. 腦部偵測 (應為臉部偵測)"
    ],
    "subQuestions": null,
    "answer": "A. 光學字元辨識 (OCR)",
    "rationale": "將「手寫筆記」轉換成「數位元文字」（即機器可讀的文字），這正是光學字元辨識 (OCR) 技術的應用。Azure AI Vision 的 OCR 功能支援識別和提取影像中的手寫文字。",
    "examTip": "從任何形式的影像（包括手寫筆記掃描件或照片）中讀取文字，都屬於 OCR 的範疇。",
    "source": 3
  },
  {
    "id": 473,
    "category": "outline-1",
    "type": "single",
    "question": "您有一套監視工業製程感應器的解決方案，而且這套解決方案會使用 AI 來偵測發生潛在問題的狀況。 該解決方案使用的是哪一種 AI 工作負載？",
    "options": [
      "A. Azure AI 自訂視覺 (Custom Vision)",
      "B. 聚類/叢集 (Clustering)",
      "C. 異常偵測 (Anomaly Detection)",
      "D. Azure AI 異常偵測工具 (Anomaly Detector)"
    ],
    "subQuestions": null,
    "answer": "C. 異常偵測 (Anomaly Detection)",
    "rationale": "監視工業製程感應器並「偵測發生潛在問題的狀況」，這意味著系統在尋找與正常操作模式不同的、不尋常的讀數或事件。這正是異常偵測 (Anomaly Detection) 工作負載的典型應用，用於預防性維護或故障預警。",
    "examTip": "工業設備監控、金融交易反欺詐、網路安全入侵檢測等場景，如果涉及到找出「不正常」或「可疑」的模式，通常會使用異常偵測。",
    "source": 3
  },
  {
    "id": 474,
    "category": "outline-4",
    "type": "single",
    "question": "您需要讓客戶能夠使用手機、社交媒體或數位助理查詢訂單的狀態。 您應該使用何者？",
    "options": [
      "A. 翻譯工具服務",
      "B. Azure Machine Learning 模型",
      "C. 表格辨識器模型",
      "D. Azure Bot Service"
    ],
    "subQuestions": null,
    "answer": "D. Azure Bot Service",
    "rationale": "讓客戶能夠透過「手機、社交媒體或數位助理」等多種管道查詢訂單狀態，這是一個典型的多通道交談式 AI 應用。Azure Bot Service 允許開發者建立一個機器人，該機器人可以理解使用者查詢（通常整合語言服務），並連接到多個不同的通訊通道，以提供一致的服務體驗。",
    "examTip": "當需要開發一個能夠在多個平台（如手機應用、社交媒體、語音助理）上與使用者互動的交談式應用程式時，Azure Bot Service 是核心的建置和部署平台。",
    "source": 3
  },
  {
    "id": 475,
    "category": "outline-3",
    "type": "single",
    "question": "請將電腦視覺工作負載類型與適當的案例配對。 作答時，請將資料行所列的適當工作負載類型，拖曳至右側對應的案例。每種工作負載類型可能只使用一或多次，甚至完全用不到。 注意:每完成一項正確配對可得一分。 工作負載類型 A. 影像分類 (Image Classification) B. 光學字元辨識 (OCR) C. 物件偵測 (Object Detection) 案例 產生影像標題。 擷取電影海報影像中的電影名稱。 找到影像中的車輛。",
    "options": [
      "A. 迴歸",
      "B. 叢集",
      "C. 1. - 產生影像標題。 (A. 影像分類 - 雖然影像描述更準確，但分類是最接近的選項，或理解為生成描述性標籤) 2. - 擷取電影海報影像中的電影名稱。 (B. 光學字元辨識) 3. - 找到影像中的車輛。 (C. 物件偵測)",
      "D. 強化學習"
    ],
    "subQuestions": null,
    "answer": "C. 1. - 產生影像標題。 (A. 影像分類 - 雖然影像描述更準確，但分類是最接近的選項，或理解為生成描述性標籤) 2. - 擷取電影海報影像中的電影名稱。 (B. 光學字元辨識) 3. - 找到影像中的車輛。 (C. 物件偵測)",
    "rationale": "產生影像標題： 雖然更精確的術語是「影像描述 (Image Captioning)」，但在提供的選項中，影像分類 (Image Classification) 可以被理解為為影像生成描述性的類別標籤，這是最接近的選項。影像描述功能本身也是 Azure AI Vision 的一部分。 擷取電影海報影像中的電影名稱： 從影像中讀取文字（電影名稱）是光學字元辨識 (OCR) 的任務。 找到影像中的車輛： 在影像中定位特定類別的物件（如車輛）並找出其位置，這是物件偵測 (Object Detection) 的功能。",
    "examTip": "理解每個電腦視覺任務的具體輸出。產生影像標題/描述是 Azure AI Vision 的一項功能，如果選項中沒有「影像描述」，則需要選擇最相關的基礎技術或概念。",
    "source": 3
  }
];
