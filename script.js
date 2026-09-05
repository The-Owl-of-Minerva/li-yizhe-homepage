const translations = {
  zh: {
    "nav.about": "个人简介",
    "nav.research": "科研",
    "nav.competitions": "竞赛",
    "nav.internship": "实习",
    "nav.overseas": "海外交流",

    "hero.eyebrow": "STATISTICS · ARTIFICIAL INTELLIGENCE · OPTIMIZATION",
    "hero.role": "本科生研究者 · Statistics + AI",
    "hero.intro": "西南财经大学经济与管理研究院金融学本科生。我的研究兴趣逐渐聚焦于统计建模、机器学习与优化方法，目前参与脉冲神经网络对抗鲁棒性、微观调查数据统计分析与供应链多主体决策等研究。我希望以统计学的理论与方法为基础，进一步探索 AI 模型的可靠性、可解释性与数据驱动决策问题。",
    "hero.viewResearch": "查看科研经历 ↓",

    "profile.educationLabel": "EDUCATION",
    "profile.education": "西南财经大学 · 经济与管理研究院",
    "profile.major": "金融学（经管国际化创新实验班）",
    "profile.interestsLabel": "RESEARCH INTERESTS",
    "profile.interests": "统计建模 · 对抗机器学习 · 优化方法",
    "profile.toolsLabel": "TOOLS",
    "profile.locationLabel": "LOCATION",
    "profile.location": "中国 · 江苏苏州",

    "research.kicker": "RESEARCH EXPERIENCE",
    "research.title": "科研经历",
    "research.ai.org": "西南财经大学 · 计算机与人工智能学院",
    "research.ai.title": "科研助理 · 脉冲神经网络对抗攻击与鲁棒性",
    "research.ai.body": "研究 SNN 的时空动态、离散脉冲表示与替代梯度机制对攻击有效性和鲁棒性评估的影响；系统比较不同梯度构造与白盒攻击方法，并搭建统一的对抗鲁棒性评测流程。",
    "research.stat.org": "西南财经大学 · 统计与数据科学学院",
    "research.stat.title": "科研助理 · 统计建模与微观调查数据",
    "research.stat.paper": "工作论文：《中国城乡相对贫困的测度与脆弱性：基于“环境—努力”双重框架的分析》",
    "research.stat.body": "使用 Python 与 Stata 处理 CFPS 微观数据，构建省级城乡相对贫困线与贫困脆弱性指标；通过回归模型、Shapley 分解、稳健性检验与异质性分析评估不同因素的相对贡献及主要结论的稳定性。",
    "research.innovation.org": "国家级大学生创新创业训练计划",
    "research.innovation.title": "项目负责人 · 银发经济政策工具与家庭决策",
    "research.innovation.body": "围绕银发经济政策工具对家庭投资与消费决策的影响开展研究；使用 Python 与 Stata 清洗 CHARLS、CHFS、CFPS 数据，并采用 DID 方法识别政策效应及其潜在家庭内部代际传导。",
    "research.or.org": "西南财经大学 · 管理科学与工程学院",
    "research.or.title": "科研助理 · 管理科学与运筹优化",
    "research.or.body": "构建包含商家、物流服务商与平台等主体的供应链博弈模型，研究循环包装、新能源运输等策略下的均衡决策与利润变化，并分析固定投入成本、运营成本及关键参数对进入门槛和策略区间的影响。",

    "competitions.kicker": "COMPETITIONS",
    "competitions.title": "竞赛经历",
    "competitions.citi.title": "第二十一届“花旗杯”金融创新应用大赛",
    "competitions.citi.subtitle": "团队成员 · 《数智慧眼：基于公开数据知识图谱与大语言模型的上市企业反欺诈预警平台》",
    "competitions.citi.body": "构建包含 20+ 类实体与 111 类关系的异构知识图谱，结合 RAG、大语言模型与多源结构化/非结构化数据处理管道，形成融合规则引擎、图谱特征与 LLM 推理的风险识别流程。",
    "competitions.mcm.title": "美国大学生数学建模竞赛（MCM/ICM） · S Award",
    "competitions.mcm.subtitle": "《基于数据的网络安全政策效能评估》",
    "competitions.mcm.body": "使用 Stata 与 SPSS 进行描述性统计和数据处理，以 Python 基于熵权法构建指标，使用聚类分析识别政策类型，并通过 DID 模型评估政策影响。",
    "competitions.math.title": "第 16 届全国大学生数学竞赛",
    "competitions.math.subtitle": "四川省三等奖",

    "internship.kicker": "INTERNSHIP",
    "internship.title": "实习经历",
    "internship.location": "中国 · 上海",
    "internship.org": "申万宏源证券总部 · 资金营运部",
    "internship.role": "实习生",
    "internship.b1": "使用 Excel 与 Python 对存量债券、短期融资券及公司债等多源金融数据进行清洗、匹配、汇总与基础统计分析。",
    "internship.b2": "基于债券期限、到期规模与融资结构等变量构建债务期限结构、再融资规划及市场监测指标。",
    "internship.b3": "整理每日现券市场成交数据与市场信息，归纳重点券种与市场变化并形成交易简报。",
    "internship.b4": "整理公募债发行材料与监管文件，熟悉债券产品分类、发行规则与主要市场数据指标。",

    "overseas.kicker": "OVERSEAS PROGRAMS",
    "overseas.title": "海外交流经历",
    "overseas.cambridge.place": "英国 · 剑桥",
    "overseas.cambridge.org": "英国剑桥大学暑期交流 · FIN + AI",
    "overseas.cambridge.role": "项目组组长",
    "overseas.cambridge.topic": "《媒体情绪框架对证券分析师判断的影响：基于 NLP 的证据》",
    "overseas.cambridge.body": "负责团队分工、研究进度与成果整合；从 CSMAR 收集分析师预测与研报、从 Wind 获取市场数据，并使用 Python 采集金融新闻；基于 SnowNLP 进行情绪识别，使用 Python 与 Stata 完成数据清洗、匹配、变量构造与回归分析。",
    "overseas.utaustin.place": "美国 · 奥斯汀",
    "overseas.utaustin.org": "美国德克萨斯大学奥斯汀分校寒假交流",
    "overseas.utaustin.role": "国际交流生",
    "overseas.utaustin.body": "基于图像识别与深度学习方法搭建手写数字识别系统，并进一步开发面向小学生的简易口算训练软件；参与 Python / Java 程序实现、模型与软件功能调试以及成果整合。",

    "contact.kicker": "CONTACT",
    "contact.title": "保持联系",
    "contact.body": "如果你对统计建模、机器学习鲁棒性、数据科学或优化研究感兴趣，欢迎联系。",
    "footer.back": "回到顶部 ↑"
  },

  en: {
    "nav.about": "About",
    "nav.research": "Research",
    "nav.competitions": "Competitions",
    "nav.internship": "Internship",
    "nav.overseas": "Overseas",

    "hero.eyebrow": "STATISTICS · ARTIFICIAL INTELLIGENCE · OPTIMIZATION",
    "hero.role": "Undergraduate Researcher · Statistics + AI",
    "hero.intro": "I am an undergraduate in Finance at the Research Institute of Economics and Management, Southwestern University of Finance and Economics. My research interests have increasingly centered on statistical modeling, machine learning, and optimization. I currently work on adversarial robustness of spiking neural networks, statistical analysis of micro-survey data, and multi-agent decision problems in supply chains. I am particularly interested in using statistical foundations to study reliable and interpretable AI and data-driven decision making.",
    "hero.viewResearch": "View Research ↓",

    "profile.educationLabel": "EDUCATION",
    "profile.education": "Southwestern University of Finance and Economics · RIEM",
    "profile.major": "Finance · International Innovation Program",
    "profile.interestsLabel": "RESEARCH INTERESTS",
    "profile.interests": "Statistical Modeling · Adversarial Machine Learning · Optimization",
    "profile.toolsLabel": "TOOLS",
    "profile.locationLabel": "LOCATION",
    "profile.location": "Suzhou, Jiangsu, China",

    "research.kicker": "RESEARCH EXPERIENCE",
    "research.title": "Research",
    "research.ai.org": "SWUFE · School of Computing and Artificial Intelligence",
    "research.ai.title": "Research Assistant · Adversarial Attacks and Robustness of SNNs",
    "research.ai.body": "I study how the spatiotemporal dynamics, discrete spike representation, and surrogate-gradient mechanisms of spiking neural networks affect adversarial attacks and robustness evaluation. My work compares white-box attacks and gradient constructions and includes a unified robustness-evaluation pipeline.",
    "research.stat.org": "SWUFE · School of Statistics and Data Science",
    "research.stat.title": "Research Assistant · Statistical Modeling and Microdata",
    "research.stat.paper": "Working paper: Measuring Relative Poverty and Vulnerability in Urban and Rural China under an Environment–Effort Framework",
    "research.stat.body": "Using Python and Stata to process CFPS microdata, construct provincial urban-rural relative-poverty lines and vulnerability measures, and conduct regression modeling, Shapley decomposition, robustness checks, and heterogeneity analysis.",
    "research.innovation.org": "National College Student Innovation and Entrepreneurship Training Program",
    "research.innovation.title": "Project Lead · Silver-Economy Policy and Household Decisions",
    "research.innovation.body": "Studying how silver-economy policy instruments affect household investment and consumption decisions. I use Python and Stata to process CHARLS, CHFS, and CFPS data and apply a DID design to identify policy effects and potential intergenerational transmission within households.",
    "research.or.org": "SWUFE · School of Management Science and Engineering",
    "research.or.title": "Research Assistant · Management Science and Operations Research",
    "research.or.body": "Building game-theoretic supply-chain models with merchants, logistics providers, and a platform to study equilibrium decisions under recycling-packaging and new-energy transportation strategies, with emphasis on entry thresholds and feasible parameter regions.",

    "competitions.kicker": "COMPETITIONS",
    "competitions.title": "Competitions",
    "competitions.citi.title": "21st Citi Cup Financial Innovation Application Competition",
    "competitions.citi.subtitle": "Team Member · Listed-Firm Anti-Fraud Early-Warning Platform Based on a Public-Data Knowledge Graph and Large Language Models",
    "competitions.citi.body": "Built a heterogeneous knowledge graph with 20+ entity types and 111 relation types, and combined RAG, LLM reasoning, and structured/unstructured multi-source data pipelines into a hybrid fraud-risk identification workflow.",
    "competitions.mcm.title": "Mathematical Contest in Modeling (MCM/ICM) · S Award",
    "competitions.mcm.subtitle": "Data-Driven Evaluation of Cybersecurity Policy Effectiveness",
    "competitions.mcm.body": "Used Stata and SPSS for descriptive analysis and data processing, Python with the entropy-weight method for index construction, clustering to identify policy types, and a DID model to estimate policy effects.",
    "competitions.math.title": "16th National College Students Mathematics Competition",
    "competitions.math.subtitle": "Third Prize · Sichuan Province",

    "internship.kicker": "INTERNSHIP",
    "internship.title": "Internship",
    "internship.location": "Shanghai, China",
    "internship.org": "Shenwan Hongyuan Securities Headquarters · Funds Operation Department",
    "internship.role": "Intern",
    "internship.b1": "Cleaned, matched, summarized, and analyzed multi-source fixed-income data, including outstanding bonds, commercial paper, and corporate bonds, using Excel and Python.",
    "internship.b2": "Constructed debt-maturity structure, refinancing-planning, and market-monitoring indicators using maturity, redemption scale, and financing-structure variables.",
    "internship.b3": "Organized daily cash-bond trading data and market information and prepared concise trading briefs on key securities and market changes.",
    "internship.b4": "Reviewed public bond issuance materials and relevant regulatory documents and became familiar with major bond categories, issuance rules, and market indicators.",

    "overseas.kicker": "OVERSEAS PROGRAMS",
    "overseas.title": "Overseas Programs",
    "overseas.cambridge.place": "Cambridge, UK",
    "overseas.cambridge.org": "University of Cambridge Summer Program · FIN + AI",
    "overseas.cambridge.role": "Team Lead",
    "overseas.cambridge.topic": "Media Sentiment Framing and Securities Analysts' Judgment: Evidence from NLP",
    "overseas.cambridge.body": "Led task allocation, research progress, and final integration. The team collected analyst forecasts and reports from CSMAR, market data from Wind, and financial news with Python; we then used SnowNLP, Python, and Stata for sentiment analysis, cleaning, matching, variable construction, and regression modeling.",
    "overseas.utaustin.place": "Austin, USA",
    "overseas.utaustin.org": "The University of Texas at Austin Winter Program",
    "overseas.utaustin.role": "International Exchange Student",
    "overseas.utaustin.body": "Built a handwritten-digit recognition system using image-recognition and deep-learning methods and extended it into a simple arithmetic-practice application for elementary-school students, contributing to Python/Java implementation, model debugging, and system integration.",

    "contact.kicker": "CONTACT",
    "contact.title": "Get in touch",
    "contact.body": "Feel free to reach out if you are interested in statistical modeling, machine-learning robustness, data science, optimization, or related research.",
    "footer.back": "Back to top ↑"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const translated = translations[lang]?.[key];
    if (translated) node.textContent = translated;
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("siteLanguage", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const menuButton = document.querySelector(".menu-btn");
const mainNav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("siteLanguage") || "zh");
