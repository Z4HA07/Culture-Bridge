import {
  CultureState,
  LanguageCode,
  MasteryKey,
  QuizQuestion,
  WebzineArticle,
} from "../types/culture";

export const METAVERSE_URL = "https://claude.ai/artifact/WvD5ziJEuuFeHwsxP5vksD";

export const UI_COPY: Record<
  LanguageCode,
  {
    brandSub: string;
    nav: {
      dashboard: string;
      quiz: string;
      chatbot: string;
      webzine: string;
      analytics: string;
      metaverse: string;
    };
    mobileNav: {
      home: string;
      quiz: string;
      chatbot: string;
      analytics: string;
      meta: string;
    };
    sidebar: {
      cultureIndex: string;
      supportTitle: string;
      supportDesc: string;
      supportCta: string;
    };
    header: {
      hotlineFull: string;
      share: string;
      copied: string;
      login: string;
      signup: string;
      logout: string;
    };
    dashboard: {
      badge: string;
      heroTitle: string;
      heroDesc: string;
      ctaQuiz: string;
      ctaChat: string;
      streakLabel: string;
      accuracyLabel: string;
      sectionTitle: string;
      sectionHint: string;
      cards: {
        quizTitle: string;
        quizDesc: string;
        chatTitle: string;
        chatDesc: string;
        webzineTitle: string;
        webzineDesc: string;
        metaTitle: string;
        metaDesc: string;
      };
    };
    quiz: {
      title: string;
      subtitle: string;
      rewardHint: string;
      streakUnit: string;
      questionLabel: string;
      yesTitle: string;
      yesDesc: string;
      noTitle: string;
      noDesc: string;
      correctTitle: string;
      wrongTitle: string;
      totalFooter: string;
      resetBtn: string;
      nextBtn: string;
      navTitle: string;
      navCount: string;
      xpGuideTitle: string;
      xpGuide1: string;
      xpGuide2: string;
    };
    chatbot: {
      title: string;
      subtitle: string;
      liveBadge: string;
      presets: { label: string; prompt: string }[];
      doLabel: string;
      dontLabel: string;
      loading: string;
      placeholder: string;
      sendBtn: string;
      retryBtn: string;
    };
    webzine: {
      title: string;
      subtitle: string;
      readMore: string;
      completedBadge: string;
      completeBtn: string;
      closeBtn: string;
      tipHeading: string;
    };
    analytics: {
      title: string;
      subtitle: string;
      masteryTitle: string;
      tierBadge: string;
      historyTitle: string;
      recentCount: string;
      masteryLabels: Record<MasteryKey, string>;
    };
    auth: {
      loginTitle: string;
      signupTitle: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      submitLogin: string;
      submitSignup: string;
      cancel: string;
    };
  }
> = {
  ko: {
    brandSub: "컬처브릿지",
    nav: {
      dashboard: "홈 · 통합 대시보드",
      quiz: "문화 에티켓 OX 퀴즈",
      chatbot: "AI 에티켓 Q&A 챗봇",
      webzine: "주간 문화 웹진",
      analytics: "점수 확인 및 학습 현황",
      metaverse: "메타버스",
    },
    mobileNav: {
      home: "홈",
      quiz: "퀴즈",
      chatbot: "챗봇",
      analytics: "현황",
      meta: "메타",
    },
    sidebar: {
      cultureIndex: "나의 문화 지수",
      supportTitle: "지원센터 연계",
      supportDesc: "생활 상담, 법률 및 비자 지원 핫라인 24시간 연결",
      supportCta: "센터 연결하기 (1345)",
    },
    header: {
      hotlineFull: "외국인 긴급 지원 콜센터 (1345)",
      share: "공유",
      copied: "복사됨",
      login: "로그인",
      signup: "회원가입",
      logout: "로그아웃",
    },
    dashboard: {
      badge: "누구나 로그인 없이 바로 이용 가능",
      heroTitle: "한국 생활, 쉽고 따뜻하게 배워보세요",
      heroDesc: "어려운 한국 문화와 생활 예절을 퀴즈와 AI 질문으로 편하게 익힐 수 있습니다.",
      ctaQuiz: "OX 퀴즈 시작하기",
      ctaChat: "AI에게 문화 물어보기",
      streakLabel: "일 연속",
      accuracyLabel: "정확도",
      sectionTitle: "어디서부터 시작할까요?",
      sectionHint: "원하는 항목을 눌러 바로 이동하세요",
      cards: {
        quizTitle: "문화 에티켓 OX 퀴즈",
        quizDesc: "식사·인사·분리배출 예절을 O/X로 쉽게 익혀요.",
        chatTitle: "AI 에티켓 Q&A 챗봇",
        chatDesc: "궁금한 한국 문화를 물어보면 바로 답해드려요.",
        webzineTitle: "주간 문화 웹진",
        webzineDesc: "호칭·식사·명절 속 따뜻한 이야기를 읽어보세요.",
        metaTitle: "메타버스 체험관",
        metaDesc: "가상 공간에서 한국 생활을 직접 체험해 보세요.",
      },
    },
    quiz: {
      title: "문화 에티켓 실전 OX 퀴즈",
      subtitle: "한국 생활 속 헷갈리기 쉬운 문화 예절을 풀고 경험치를 획득하세요.",
      rewardHint: "정답 시 +20 XP",
      streakUnit: "연속 정답",
      questionLabel: "Question",
      yesTitle: "그렇다 (O)",
      yesDesc: "맞는 행동입니다",
      noTitle: "아니다 (X)",
      noDesc: "틀린 행동입니다",
      correctTitle: "정답입니다! (+20 XP 적립)",
      wrongTitle: "아쉽지만 오답입니다 (+5 XP 해설 보너스)",
      totalFooter: "총 8개의 생활 예절 문제가 준비되어 있습니다.",
      resetBtn: "처음부터 다시 풀기",
      nextBtn: "다음 문항",
      navTitle: "문항 바로가기",
      navCount: "총 8문항",
      xpGuideTitle: "경험치 적립 안내",
      xpGuide1: "정답 시 +20 XP 즉시 적립",
      xpGuide2: "해설 확인 시 +5 XP 보너스",
    },
    chatbot: {
      title: "AI 에티켓 Q&A 챗봇",
      subtitle: "한국의 생활 문화와 예절에 대해 궁금한 점을 직접 물어보세요.",
      liveBadge: "실시간 AI 상담",
      presets: [
        { label: "집들이 선물 예절", prompt: "집들이 선물로 무엇을 사가면 좋을까요?" },
        { label: "직장 회식 · 술자리", prompt: "직장 회식이나 술자리에서 주의할 점이 있나요?" },
        { label: "쓰레기 분리배출", prompt: "한국의 쓰레기 분리배출 방법이 궁금해요." },
        { label: "경조사 축의금", prompt: "결혼식 축의금은 어떻게 준비하나요?" },
      ],
      doLabel: "권장 (Do)",
      dontLabel: "주의 (Don’t)",
      loading: "답변을 작성하고 있습니다...",
      placeholder: "한국 문화나 생활 예절을 물어보세요...",
      sendBtn: "질문하기",
      retryBtn: "다시 시도",
    },
    webzine: {
      title: "주간 문화 웹진",
      subtitle: "서로의 일상을 이해하는 짧은 문화 에세이를 읽어보세요.",
      readMore: "자세히 보기 →",
      completedBadge: "읽기 완료",
      completeBtn: "읽기 완료 (+15 XP)",
      closeBtn: "닫기",
      tipHeading: "생활 속 핵심 포인트",
    },
    analytics: {
      title: "점수 확인 및 학습 현황",
      subtitle: "OX 퀴즈와 AI 에티켓 학습으로 쌓은 성장 지표입니다.",
      masteryTitle: "영역별 문화 숙련도",
      tierBadge: "준전문가",
      historyTitle: "나의 실시간 학습 기록",
      recentCount: "최근 기록",
      masteryLabels: {
        neighbor: "이웃 소통 · 분리수거",
        lifestyle: "생활 관습 · 집들이",
        public: "공공기관 · 병원 소통",
        workplace: "직장 예절 · 호칭",
      },
    },
    auth: {
      loginTitle: "컬처브릿지 로그인",
      signupTitle: "간편 프로필 시작하기",
      subtitle: "닉네임을 입력하면 학습 기록과 문화 지수를 맞춤 저장할 수 있습니다.",
      nameLabel: "이름 또는 닉네임",
      namePlaceholder: "예: 민수 / Linh / Alex",
      submitLogin: "로그인",
      submitSignup: "시작하기",
      cancel: "취소",
    },
  },
  vi: {
    brandSub: "Cầu nối Văn hóa",
    nav: {
      dashboard: "Trang chủ · Tổng quan",
      quiz: "Trắc nghiệm O/X văn hóa",
      chatbot: "Chatbot AI Hỏi đáp",
      webzine: "Tạp chí văn hóa tuần",
      analytics: "Điểm & Tiến độ học tập",
      metaverse: "Metaverse",
    },
    mobileNav: {
      home: "Trang chủ",
      quiz: "Đố vui",
      chatbot: "Chatbot",
      analytics: "Tiến độ",
      meta: "Meta",
    },
    sidebar: {
      cultureIndex: "Chỉ số văn hóa",
      supportTitle: "Trung tâm hỗ trợ",
      supportDesc: "Đường dây tư vấn đời sống, pháp luật và visa 24/7",
      supportCta: "Kết nối trung tâm (1345)",
    },
    header: {
      hotlineFull: "Tổng đài hỗ trợ khẩn cấp người nước ngoài (1345)",
      share: "Chia sẻ",
      copied: "Đã sao chép",
      login: "Đăng nhập",
      signup: "Đăng ký",
      logout: "Đăng xuất",
    },
    dashboard: {
      badge: "Sử dụng ngay không cần đăng nhập",
      heroTitle: "Học văn hóa sống Hàn Quốc dễ dàng và ấm áp",
      heroDesc: "Làm quen văn hóa và phép lịch sự Hàn Quốc qua câu đố O/X và hỏi đáp AI.",
      ctaQuiz: "Bắt đầu đố vui O/X",
      ctaChat: "Hỏi AI về văn hóa",
      streakLabel: " ngày liên tiếp",
      accuracyLabel: "Độ chính xác",
      sectionTitle: "Bạn muốn bắt đầu từ đâu?",
      sectionHint: "Chọn một mục để chuyển đến ngay",
      cards: {
        quizTitle: "Trắc nghiệm O/X văn hóa",
        quizDesc: "Học phép lịch sự ăn uống, chào hỏi và phân loại rác.",
        chatTitle: "Chatbot AI Hỏi đáp",
        chatDesc: "Đặt câu hỏi về văn hóa Hàn Quốc và nhận câu trả lời ngay.",
        webzineTitle: "Tạp chí văn hóa tuần",
        webzineDesc: "Đọc những câu chuyện ấm áp về xưng hô, bữa ăn và ngày lễ.",
        metaTitle: "Không gian Metaverse",
        metaDesc: "Trải nghiệm trực tiếp đời sống Hàn Quốc trong không gian ảo.",
      },
    },
    quiz: {
      title: "Trắc nghiệm O/X thực hành văn hóa",
      subtitle: "Giải các tình huống dễ nhầm lẫn tại Hàn Quốc để nhận điểm XP.",
      rewardHint: "Đúng +20 XP",
      streakUnit: "câu đúng liên tiếp",
      questionLabel: "Câu hỏi",
      yesTitle: "Đúng (O)",
      yesDesc: "Hành động phù hợp",
      noTitle: "Sai (X)",
      noDesc: "Hành động không phù hợp",
      correctTitle: "Chính xác! (+20 XP)",
      wrongTitle: "Chưa đúng (+5 XP xem giải thích)",
      totalFooter: "Có tổng cộng 8 câu hỏi về phép lịch sự đời sống.",
      resetBtn: "Làm lại từ đầu",
      nextBtn: "Câu tiếp theo",
      navTitle: "Chọn nhanh câu hỏi",
      navCount: "8 câu hỏi",
      xpGuideTitle: "Hướng dẫn tích điểm XP",
      xpGuide1: "Trả lời đúng nhận ngay +20 XP",
      xpGuide2: "Xem giải thích nhận thưởng +5 XP",
    },
    chatbot: {
      title: "Chatbot AI Hỏi đáp văn hóa",
      subtitle: "Hỏi trực tiếp bất kỳ thắc mắc nào về đời sống và phép lịch sự Hàn Quốc.",
      liveBadge: "Tư vấn AI trực tiếp",
      presets: [
        { label: "Quà tân gia", prompt: "Nên mua gì làm quà tân gia ở Hàn Quốc?" },
        { label: "Tiệc công ty", prompt: "Cần lưu ý gì khi đi liên hoan uống rượu ở công ty Hàn Quốc?" },
        { label: "Phân loại rác", prompt: "Cách phân loại rác đúng quy định tại Hàn Quốc như thế nào?" },
        { label: "Tiền mừng đám cưới", prompt: "Cách chuẩn bị phong bì tiền mừng đám cưới ở Hàn Quốc?" },
      ],
      doLabel: "Nên làm (Do)",
      dontLabel: "Nên tránh (Don’t)",
      loading: "Đang soạn câu trả lời...",
      placeholder: "Hãy hỏi về văn hóa hoặc phép lịch sự Hàn Quốc...",
      sendBtn: "Gửi câu hỏi",
      retryBtn: "Thử lại",
    },
    webzine: {
      title: "Tạp chí văn hóa tuần",
      subtitle: "Đọc các bài viết ngắn giúp hiểu thêm nhịp sống hằng ngày.",
      readMore: "Xem chi tiết →",
      completedBadge: "Đã đọc xong",
      completeBtn: "Đánh dấu đã đọc (+15 XP)",
      closeBtn: "Đóng",
      tipHeading: "Điểm cần ghi nhớ",
    },
    analytics: {
      title: "Điểm số & Tiến độ học tập",
      subtitle: "Các chỉ số phát triển tích lũy qua trắc nghiệm O/X và hỏi đáp AI.",
      masteryTitle: "Mức độ thành thạo theo chủ đề",
      tierBadge: "Bán chuyên",
      historyTitle: "Nhật ký học tập gần đây",
      recentCount: "Hoạt động gần nhất",
      masteryLabels: {
        neighbor: "Giao tiếp hàng xóm · Phân loại rác",
        lifestyle: "Tập quán đời sống · Tân gia",
        public: "Cơ quan công · Bệnh viện",
        workplace: "Phép lịch sự công sở · Xưng hô",
      },
    },
    auth: {
      loginTitle: "Đăng nhập Culture Bridge",
      signupTitle: "Tạo hồ sơ nhanh",
      subtitle: "Nhập biệt danh để lưu điểm văn hóa và lịch sử học tập của bạn.",
      nameLabel: "Tên hoặc biệt danh",
      namePlaceholder: "Ví dụ: Linh / Minh",
      submitLogin: "Đăng nhập",
      submitSignup: "Bắt đầu",
      cancel: "Hủy",
    },
  },
  en: {
    brandSub: "Culture Bridge",
    nav: {
      dashboard: "Home · Dashboard",
      quiz: "Cultural Etiquette OX Quiz",
      chatbot: "AI Etiquette Q&A Chatbot",
      webzine: "Weekly Cultural Webzine",
      analytics: "Scores & Learning Analytics",
      metaverse: "Metaverse",
    },
    mobileNav: {
      home: "Home",
      quiz: "Quiz",
      chatbot: "Chat",
      analytics: "Stats",
      meta: "Meta",
    },
    sidebar: {
      cultureIndex: "Culture Index",
      supportTitle: "Support Center",
      supportDesc: "24/7 hotline for daily life, legal, and visa guidance",
      supportCta: "Call Center (1345)",
    },
    header: {
      hotlineFull: "Foreigner Emergency Support Call Center (1345)",
      share: "Share",
      copied: "Copied",
      login: "Log in",
      signup: "Sign up",
      logout: "Log out",
    },
    dashboard: {
      badge: "Instant access — no login required",
      heroTitle: "Learn Korean life with warmth and ease",
      heroDesc: "Master Korean etiquette and daily customs comfortably through quick OX quizzes and AI Q&A.",
      ctaQuiz: "Start OX Quiz",
      ctaChat: "Ask AI About Culture",
      streakLabel: "-day streak",
      accuracyLabel: "Accuracy",
      sectionTitle: "Where would you like to start?",
      sectionHint: "Choose any card to jump right in",
      cards: {
        quizTitle: "Cultural Etiquette OX Quiz",
        quizDesc: "Practice dining, greeting, and recycling etiquette via O/X questions.",
        chatTitle: "AI Etiquette Q&A Chatbot",
        chatDesc: "Ask anything about Korean culture and get clear, friendly advice.",
        webzineTitle: "Weekly Cultural Webzine",
        webzineDesc: "Read short essays on Korean titles, meals, and seasonal holidays.",
        metaTitle: "Metaverse Experience",
        metaDesc: "Explore Korean daily life inside an interactive virtual space.",
      },
    },
    quiz: {
      title: "Practical Cultural Etiquette OX Quiz",
      subtitle: "Test everyday Korean manners and earn XP with instant explanations.",
      rewardHint: "+20 XP per correct answer",
      streakUnit: "streak",
      questionLabel: "Question",
      yesTitle: "True (O)",
      yesDesc: "Appropriate etiquette",
      noTitle: "False (X)",
      noDesc: "Inappropriate etiquette",
      correctTitle: "Correct! (+20 XP earned)",
      wrongTitle: "Not quite (+5 XP explanation bonus)",
      totalFooter: "8 everyday etiquette questions are ready for you.",
      resetBtn: "Restart Quiz",
      nextBtn: "Next Question",
      navTitle: "Jump to Question",
      navCount: "8 Questions",
      xpGuideTitle: "XP Rewards Guide",
      xpGuide1: "+20 XP immediately for each correct answer",
      xpGuide2: "+5 XP bonus for reading the explanation",
    },
    chatbot: {
      title: "AI Etiquette Q&A Chatbot",
      subtitle: "Ask any question about Korean daily customs, dining, workplace, or public etiquette.",
      liveBadge: "Live AI Guidance",
      presets: [
        { label: "Housewarming gifts", prompt: "What should I bring as a housewarming gift in Korea?" },
        { label: "Company dinners", prompt: "What should I watch out for at Korean company dinners and drinking gatherings?" },
        { label: "Trash sorting", prompt: "How does trash and recycling separation work in Korea?" },
        { label: "Wedding gift envelopes", prompt: "How should I prepare congratulatory money for a Korean wedding?" },
      ],
      doLabel: "Recommended (Do)",
      dontLabel: "Avoid (Don’t)",
      loading: "Writing your cultural guide...",
      placeholder: "Ask about Korean culture or daily etiquette...",
      sendBtn: "Ask",
      retryBtn: "Retry",
    },
    webzine: {
      title: "Weekly Cultural Webzine",
      subtitle: "Read short essays that illuminate everyday Korean traditions.",
      readMore: "Read more →",
      completedBadge: "Completed",
      completeBtn: "Mark as Read (+15 XP)",
      closeBtn: "Close",
      tipHeading: "Key Cultural Takeaway",
    },
    analytics: {
      title: "Scores & Learning Analytics",
      subtitle: "Your growth across OX quizzes, AI Q&A, and cultural readings.",
      masteryTitle: "Cultural Mastery by Topic",
      tierBadge: "Proficient",
      historyTitle: "Recent Learning Activity",
      recentCount: "Recent entries",
      masteryLabels: {
        neighbor: "Neighbors · Recycling",
        lifestyle: "Daily Customs · Housewarming",
        public: "Public Offices · Hospitals",
        workplace: "Workplace · Titles",
      },
    },
    auth: {
      loginTitle: "Sign in to Culture Bridge",
      signupTitle: "Create Quick Profile",
      subtitle: "Enter a display name to save your XP and learning progress.",
      nameLabel: "Name or Nickname",
      namePlaceholder: "e.g., Alex / Minsu",
      submitLogin: "Sign in",
      submitSignup: "Get Started",
      cancel: "Cancel",
    },
  },
  zh: {
    brandSub: "文化桥梁",
    nav: {
      dashboard: "首页 · 综合仪表板",
      quiz: "文化礼仪 OX 测验",
      chatbot: "AI 礼仪问答机器人",
      webzine: "每周文化网络杂志",
      analytics: "分数与学习情况",
      metaverse: "元宇宙",
    },
    mobileNav: {
      home: "首页",
      quiz: "测验",
      chatbot: "问答",
      analytics: "进度",
      meta: "元宇宙",
    },
    sidebar: {
      cultureIndex: "我的文化指数",
      supportTitle: "支援中心联动",
      supportDesc: "生活咨询、法律及签证支持热线 24 小时连接",
      supportCta: "连接中心 (1345)",
    },
    header: {
      hotlineFull: "外国人紧急支援呼叫中心 (1345)",
      share: "分享",
      copied: "已复制",
      login: "登录",
      signup: "注册",
      logout: "退出登录",
    },
    dashboard: {
      badge: "无需登录即可直接使用",
      heroTitle: "轻松温暖地学习韩国生活文化",
      heroDesc: "通过 OX 测验和 AI 问答，轻松掌握韩国文化与日常生活礼仪。",
      ctaQuiz: "开始 OX 测验",
      ctaChat: "向 AI 咨询文化",
      streakLabel: "天连续",
      accuracyLabel: "准确率",
      sectionTitle: "从哪里开始呢？",
      sectionHint: "点击任意卡片即可立即前往",
      cards: {
        quizTitle: "文化礼仪 OX 测验",
        quizDesc: "通过 O/X 轻松学习用餐、问候和垃圾分类礼仪。",
        chatTitle: "AI 礼仪问答机器人",
        chatDesc: "随时提问好奇的韩国文化，立即为您解答。",
        webzineTitle: "每周文化网络杂志",
        webzineDesc: "阅读称呼、饮食与节日背后的温暖故事。",
        metaTitle: "元宇宙体验馆",
        metaDesc: "在虚拟空间中亲身体验韩国日常生活。",
      },
    },
    quiz: {
      title: "文化礼仪实战 OX 测验",
      subtitle: "解答韩国生活中容易混淆的文化礼仪并获取经验值。",
      rewardHint: "答对 +20 XP",
      streakUnit: "连对",
      questionLabel: "问题",
      yesTitle: "正确 (O)",
      yesDesc: "符合礼仪的行为",
      noTitle: "错误 (X)",
      noDesc: "不符合礼仪的行为",
      correctTitle: "回答正确！(+20 XP)",
      wrongTitle: "回答有误 (+5 XP 解析奖励)",
      totalFooter: "共准备了 8 道生活礼仪题目。",
      resetBtn: "重新开始",
      nextBtn: "下一题",
      navTitle: "题目快速跳转",
      navCount: "共 8 题",
      xpGuideTitle: "经验值获取说明",
      xpGuide1: "答对立即获得 +20 XP",
      xpGuide2: "查看解析获得 +5 XP 奖励",
    },
    chatbot: {
      title: "AI 礼仪问答机器人",
      subtitle: "直接询问关于韩国生活文化与日常礼仪的任何问题。",
      liveBadge: "实时 AI 咨询",
      presets: [
        { label: "乔迁礼物礼仪", prompt: "去韩国朋友家乔迁聚会时带什么礼物比较好？" },
        { label: "职场聚餐礼仪", prompt: "在韩国公司聚餐或酒局上有哪些需要注意的礼仪？" },
        { label: "垃圾分类方法", prompt: "韩国的垃圾分类和回收规定是怎样的？" },
        { label: "婚礼礼金准备", prompt: "参加韩国婚礼时礼金红包应该怎么准备？" },
      ],
      doLabel: "建议 (Do)",
      dontLabel: "注意 (Don’t)",
      loading: "正在为您撰写解答...",
      placeholder: "请询问韩国文化或生活礼仪...",
      sendBtn: "提问",
      retryBtn: "重试",
    },
    webzine: {
      title: "每周文化网络杂志",
      subtitle: "阅读理解彼此日常生活的短篇文化随笔。",
      readMore: "查看详情 →",
      completedBadge: "已读完",
      completeBtn: "标记已读 (+15 XP)",
      closeBtn: "关闭",
      tipHeading: "生活中的核心要点",
    },
    analytics: {
      title: "分数确认与学习情况",
      subtitle: "通过 OX 测验和 AI 问答积累的成长指标。",
      masteryTitle: "各领域文化熟练度",
      tierBadge: "准专家",
      historyTitle: "我的实时学习记录",
      recentCount: "最近记录",
      masteryLabels: {
        neighbor: "邻里沟通 · 垃圾分类",
        lifestyle: "生活习俗 · 乔迁",
        public: "公共机构 · 医院沟通",
        workplace: "职场礼仪 · 称呼",
      },
    },
    auth: {
      loginTitle: "登录 Culture Bridge",
      signupTitle: "快速创建个人资料",
      subtitle: "输入昵称即可保存您的文化指数和学习记录。",
      nameLabel: "姓名或昵称",
      namePlaceholder: "例如：明秀 / 晓宇",
      submitLogin: "登录",
      submitSignup: "开始使用",
      cancel: "取消",
    },
  },
};

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    masteryKey: "lifestyle",
    category: {
      ko: "생활 관습 · 식사",
      vi: "Tập quán · Bữa ăn",
      en: "Daily Customs · Dining",
      zh: "生活习俗 · 用餐",
    },
    question: {
      ko: "한국에서는 밥을 먹을 때 밥그릇을 손에 들고 식사하는 것이 정중하고 바른 식사 예절이다.",
      vi: "Ở Hàn Quốc, cầm bát cơm lên tay khi ăn là phép lịch sự trang trọng và đúng mực.",
      en: "In Korea, picking up your rice bowl with your hands while eating is considered polite dining etiquette.",
      zh: "在韩国，吃饭时用手端起饭碗用餐是礼貌且正确的餐桌礼仪。",
    },
    answer: "X",
    explanation: {
      ko: "한국에서는 밥그릇과 국그릇을 식탁 위에 내려놓고 수저로 떠먹는 것이 바른 식사 예절입니다.",
      vi: "Ở Hàn Quốc, đặt bát cơm và bát canh trên bàn rồi dùng thìa đũa để ăn mới là phép lịch sự chuẩn mực.",
      en: "In Korea, rice and soup bowls stay placed on the table while you eat with your spoon and chopsticks.",
      zh: "在韩国，应将饭碗和汤碗放在餐桌上，使用勺子和筷子用餐才是正确的礼仪。",
    },
  },
  {
    id: 2,
    masteryKey: "workplace",
    category: {
      ko: "직장 예절 · 인사",
      vi: "Công sở · Chào hỏi",
      en: "Workplace · Greetings",
      zh: "职场礼仪 · 问候",
    },
    question: {
      ko: "직장 상사나 어른과 악수할 때는 두 손으로 공손히 잡는 것이 예의에 맞다.",
      vi: "Khi bắt tay cấp trên hoặc người lớn tuổi ở công ty, dùng hai tay nắm lịch sự là đúng phép tắc.",
      en: "When shaking hands with a senior colleague or elder, using both hands respectfully is proper etiquette.",
      zh: "与职场前辈或长辈握手时，用双手恭敬地握住是符合礼仪的。",
    },
    answer: "O",
    explanation: {
      ko: "윗사람과 악수할 때는 오른손으로 잡고 왼손으로 팔꿈치나 손등을 살짝 받치는 것이 공손한 표현입니다.",
      vi: "Khi bắt tay người lớn tuổi hoặc cấp trên, nắm bằng tay phải và dùng tay trái đỡ nhẹ khuỷu tay hoặc mu bàn tay thể hiện sự kính trọng.",
      en: "Shaking with the right hand while lightly supporting the wrist or forearm with the left hand shows respect.",
      zh: "与长辈握手时，用右手握住，左手轻托肘部或手背是恭敬的礼貌表现。",
    },
  },
  {
    id: 3,
    masteryKey: "lifestyle",
    category: {
      ko: "생활 관습 · 방문",
      vi: "Tập quán · Thăm nhà",
      en: "Daily Customs · Visiting",
      zh: "生活习俗 · 拜访",
    },
    question: {
      ko: "한국인의 집을 방문할 때는 현관에서 신발을 벗고, 신발 끝이 밖을 향하도록 정리해 두는 것이 좋다.",
      vi: "Khi đến thăm nhà người Hàn, nên cởi giày ở sảnh và xếp mũi giày hướng ra phía cửa.",
      en: "When visiting a Korean home, take off your shoes at the entryway and align them pointing toward the door.",
      zh: "拜访韩国人家庭时，应在玄关脱鞋，并将鞋尖朝外摆放整齐。",
    },
    answer: "O",
    explanation: {
      ko: "실내에서는 신발을 벗고, 나갈 때 편하도록 신발 코가 현관문 쪽을 향하게 두면 배려 깊은 인상을 줍니다.",
      vi: "Trong nhà luôn cởi giày, và việc xếp mũi giày hướng ra cửa giúp khi ra về thuận tiện và tạo ấn tượng chu đáo.",
      en: "Shoes are always removed indoors; turning them to face the door makes leaving tidy and shows thoughtfulness.",
      zh: "进入室内需脱鞋，将鞋尖朝向玄关门摆放既方便离开，也能给人留下体贴的好印象。",
    },
  },
  {
    id: 4,
    masteryKey: "neighbor",
    category: {
      ko: "이웃 소통 · 분리배출",
      vi: "Hàng xóm · Phân loại rác",
      en: "Neighbors · Recycling",
      zh: "邻里沟通 · 垃圾分类",
    },
    question: {
      ko: "음식물 쓰레기와 일반 생활 쓰레기는 같은 종량제 봉투에 담아 버려도 무방하다.",
      vi: "Có thể bỏ chung rác thực phẩm và rác sinh hoạt thông thường vào cùng một túi rác quy định.",
      en: "Food waste and general household trash can be placed together in the same standard pay-as-you-throw bag.",
      zh: "厨余垃圾和普通生活垃圾可以装在同一个计量垃圾袋里丢弃。",
    },
    answer: "X",
    explanation: {
      ko: "음식물 쓰레기는 전용 수거함이나 전용 봉투에 분리 배출해야 합니다.",
      vi: "Rác thực phẩm phải được phân loại riêng vào thùng hoặc túi chuyên dụng dành cho rác thực phẩm.",
      en: "Food waste must be separated into dedicated food waste bins or designated food waste bags.",
      zh: "厨余垃圾必须投放到专用回收桶或专用厨余垃圾袋中进行分类处理。",
    },
  },
  {
    id: 5,
    masteryKey: "lifestyle",
    category: {
      ko: "경조사 · 예절",
      vi: "Hiếu hỷ · Lễ nghi",
      en: "Ceremonies · Etiquette",
      zh: "红白喜事 · 礼仪",
    },
    question: {
      ko: "결혼식 축의금이나 장례식 부의금은 흰 봉투에 담아 전달하며, 뒷면에 이름을 적는 것이 일반적이다.",
      vi: "Tiền mừng đám cưới hoặc tiền phúng điếu thường bỏ trong phong bì trắng và ghi tên ở mặt sau.",
      en: "Monetary gifts for weddings or funerals are placed in a white envelope with your name written on the back.",
      zh: "婚礼礼金或葬礼奠仪通常装在白色信封中，并在信封背面写上自己的名字。",
    },
    answer: "O",
    explanation: {
      ko: "흰 봉투 앞면에 축하·추모 문구를 적고 뒷면 왼쪽 아래에 본인 이름을 적는 것이 기본 예절입니다.",
      vi: "Mặt trước phong bì trắng ghi lời chúc hoặc chia buồn, mặt sau góc dưới bên trái ghi tên người gửi.",
      en: "Write a congratulatory or condolence phrase on the front and your full name at the bottom-left of the back.",
      zh: "通常在白色信封正面写上祝贺或哀悼词，背面左下角写上自己的姓名。",
    },
  },
  {
    id: 6,
    masteryKey: "public",
    category: {
      ko: "대중교통 · 에티켓",
      vi: "Giao thông · Phép lịch sự",
      en: "Public Transit · Etiquette",
      zh: "公共交通 · 礼仪",
    },
    question: {
      ko: "지하철이나 버스의 노약자석은 빈자리라도 일반인이 잠시 앉아도 괜찮다.",
      vi: "Ghế ưu tiên trên tàu điện ngầm hoặc xe buýt nếu còn trống thì người bình thường ngồi tạm cũng không sao.",
      en: "It is generally acceptable for anyone to sit in priority seats on Korean subways or buses as long as they are empty.",
      zh: "地铁或公交车上的老弱病残专座只要空着，普通人暂时坐一下也没关系。",
    },
    answer: "X",
    explanation: {
      ko: "노약자석은 어르신, 임산부, 장애인 등 교통약자를 위해 비워 두는 것이 보편적인 에티켓입니다.",
      vi: "Ghế ưu tiên thường được để trống dành cho người cao tuổi, phụ nữ mang thai và người khuyết tật ngay cả khi tàu vắng.",
      en: "In Korea, priority seats are typically kept vacant for seniors, pregnant passengers, and people with disabilities.",
      zh: "老弱病残专座通常需要为老年人、孕妇和残障人士等交通弱势群体留空，这是普遍礼仪。",
    },
  },
  {
    id: 7,
    masteryKey: "workplace",
    category: {
      ko: "직장 회식 · 술자리",
      vi: "Tiệc công ty · Bàn nhậu",
      en: "Work Dinners · Drinking",
      zh: "职场聚餐 · 酒桌",
    },
    question: {
      ko: "윗사람에게 술을 따를 때는 한 손으로 병을 잡고 따르는 것이 자연스럽다.",
      vi: "Khi rót rượu cho cấp trên hoặc người lớn tuổi, chỉ cần cầm chai bằng một tay là tự nhiên.",
      en: "When pouring a drink for a senior colleague, holding the bottle with one hand is considered natural.",
      zh: "给长辈或上司倒酒时，用一只手拿酒瓶倒酒是很自然的。",
    },
    answer: "X",
    explanation: {
      ko: "윗사람에게 술을 따르거나 받을 때는 두 손으로 공손하게 따르고 받는 것이 예의입니다.",
      vi: "Khi rót hoặc nhận rượu từ người lớn tuổi, dùng hai tay thể hiện sự lễ phép và tôn trọng.",
      en: "Both pouring and receiving a drink from an elder or senior colleague should be done politely with two hands.",
      zh: "给长辈倒酒或接酒时，用双手恭敬地倒和接才是礼貌的做法。",
    },
  },
  {
    id: 8,
    masteryKey: "public",
    category: {
      ko: "공공기관 · 민원",
      vi: "Cơ quan công · Cư trú",
      en: "Public Offices · Residency",
      zh: "公共机构 · 政务",
    },
    question: {
      ko: "체류지 변경 신고는 이사한 날로부터 14일 이내에 관할 기관에 신고해야 한다.",
      vi: "Khi chuyển chỗ ở, cần khai báo thay đổi địa chỉ cư trú trong vòng 14 ngày kể từ ngày chuyển nhà.",
      en: "Foreign residents must report a change of address to the local office within 14 days of moving.",
      zh: "外国人居住地变更申报必须在搬家之日起 14 天内向管辖机构申报。",
    },
    answer: "O",
    explanation: {
      ko: "체류지 변경 시 14일 이내에 반드시 신고해야 과태료를 피할 수 있습니다.",
      vi: "Bạn bắt buộc phải khai báo trong vòng 14 ngày sau khi chuyển nhà để tránh bị phạt hành chính.",
      en: "Reporting within 14 days of moving is required by law to avoid late-reporting fines.",
      zh: "变更居住地后务必在 14 天内完成申报，以免产生罚款。",
    },
  },
];

export const WEBZINE_ARTICLES: WebzineArticle[] = [
  {
    id: "article-1",
    category: {
      ko: "생활 언어",
      vi: "Ngôn ngữ đời sống",
      en: "Everyday Language",
      zh: "生活语言",
    },
    readTime: {
      ko: "3분 읽기",
      vi: "3 phút đọc",
      en: "3 min read",
      zh: "阅读 3 分钟",
    },
    icon: "forum",
    title: {
      ko: "한국인의 가족·직장 호칭 문화",
      vi: "Văn hóa xưng hô gia đình & công sở tại Hàn Quốc",
      en: "Korean Family & Workplace Honorific Titles",
      zh: "韩国人的家庭与职场称呼文化",
    },
    summary: {
      ko: "이름 대신 가족 호칭이나 직함을 부르는 문화 속에 담긴 친밀감과 배려를 알아봅니다.",
      vi: "Tìm hiểu sự gần gũi và tôn trọng ẩn sau cách gọi chức danh hoặc xưng hô như người thân.",
      en: "Discover the warmth and respect behind calling people by titles or kinship terms instead of first names.",
      zh: "了解韩国人用家庭称谓或职务代替直呼其名背后所蕴含的亲切感与关怀。",
    },
    paragraphs: {
      ko: [
        "한국에서는 친한 사이라도 윗사람의 이름만 부르는 대신 '선배님', '과장님', '선생님' 혹은 '언니·오빠·형·누나' 같은 호칭을 사용합니다. 이는 단순한 서열 구분이 아니라 상대와의 관계 속에서 적절한 예의와 정서적 거리를 맞추려는 배려입니다.",
        "직장에서는 이름 뒤에 직급과 '-님'을 붙이는 것이 가장 안전하며, 식당이나 시장에서는 '사장님', '이모님'처럼 친근함과 존중을 함께 담은 호칭을 자주 듣게 됩니다.",
        "처음에는 호칭이 낯설 수 있지만, 상대방이 부르는 호칭을 귀 기울여 듣고 자연스럽게 따라 부르면 훨씬 빠르게 친근감을 쌓을 수 있습니다.",
      ],
      vi: [
        "Ở Hàn Quốc, thay vì gọi trực tiếp tên người lớn tuổi hơn, mọi người thường dùng chức danh như 'Seonbaenim', 'Gwajangnim' hoặc các cách gọi thân mật như 'Eonni/Oppa/Hyeong/Nuna'.",
        "Tại nơi làm việc, gọi tên kèm chức vụ và '-nim' là an toàn và lịch sự nhất; tại quán ăn hay chợ truyền thống, bạn sẽ thường nghe 'Sajangnim' hoặc 'Imonim'.",
        "Lắng nghe cách người xung quanh xưng hô và dùng theo một cách tự nhiên sẽ giúp bạn nhanh chóng tạo thiện cảm.",
      ],
      en: [
        "In Korea, even among close acquaintances, people rarely call someone older by their first name alone. Instead, they use workplace titles like 'Gwajangnim' or kinship terms like 'Eonni', 'Oppa', 'Hyeong', or 'Nuna'.",
        "At work, pairing a name with a title plus '-nim' is always respectful. In neighborhood restaurants or markets, warm terms like 'Sajangnim' (owner) express both politeness and friendliness.",
        "Listening to how colleagues address one another is the easiest way to build rapport quickly and respectfully.",
      ],
      zh: [
        "在韩国，即使是熟悉的人之间，也通常不直呼长辈或前辈的名字，而是使用“前辈”、“科长”或“姐姐、哥哥”等称呼，这体现了对关系与礼节的重视。",
        "在职场中，使用“姓名 + 职务 + 님”是最稳妥的表达；而在餐厅或市场里，也常听到充满亲切与尊重的“社长님”或“姨母”。",
        "多留意身边人互相之间的称呼方式并自然效仿，能帮您更快拉近彼此的距离。",
      ],
    },
    culturalTip: {
      ko: "처음 만나는 성인에게는 이름 뒤에 '님' 또는 '선생님'을 붙이면 언제나 정중하고 따뜻한 인상을 줄 수 있습니다.",
      vi: "Với người lớn mới gặp lần đầu, thêm '-nim' hoặc 'Seonsaengnim' sau tên luôn tạo ấn tượng lịch sự và ấm áp.",
      en: "When meeting someone new, adding '-nim' or 'Seonsaengnim' is always a safe, warm, and polite choice.",
      zh: "初次见面的成年人，在名字后加上“님”或称呼“先生님”，总能留下礼貌又温暖的好印象。",
    },
  },
  {
    id: "article-2",
    category: {
      ko: "음식 문화",
      vi: "Văn hóa ẩm thực",
      en: "Food Culture",
      zh: "饮食文化",
    },
    readTime: {
      ko: "4분 읽기",
      vi: "4 phút đọc",
      en: "4 min read",
      zh: "阅读 4 分钟",
    },
    icon: "restaurant",
    title: {
      ko: '"밥 한 번 먹자!" 한국인의 인사 문화',
      vi: 'Lời chào "Hôm nào đi ăn cơm nhé!" của người Hàn',
      en: '"Let’s Grab a Meal Sometime!" — Korean Food Greetings',
      zh: '“一起吃顿饭吧！”韩国人的问候文化',
    },
    summary: {
      ko: '"밥 먹었어?"라는 안부 인사의 유래와 반찬 공유 및 식탁 위 배려 문화를 소개합니다.',
      vi: 'Khám phá nguồn gốc câu hỏi "Ăn cơm chưa?" và nét văn hóa sẻ chia món ăn trên bàn ăn Hàn Quốc.',
      en: 'Learn why "Have you eaten?" is a warm greeting and how sharing side dishes connects people.',
      zh: "介绍“吃饭了吗？”这句问候语的由来，以及共享小菜的餐桌体贴文化。",
    },
    paragraphs: {
      ko: [
        "한국에서는 아침이나 낮에 지인을 만났을 때 '밥 먹었어?', '식사하셨어요?'라고 묻는 것이 가장 다정한 안부 인사입니다. 이는 상대의 건강과 안녕을 걱정하는 마음이 담긴 표현입니다.",
        "또한 헤어질 때 '언제 밥 한 번 먹자'라고 말하는 것은 '앞으로도 좋은 인연을 이어가자'는 따뜻한 호감의 신호이기도 합니다.",
        "식탁 위에서는 큰 찌개나 반찬을 함께 나누어 먹는 정 문화가 있으며, 개인 접시에 덜어 먹거나 어른이 먼저 수저를 드신 뒤 식사를 시작하는 작은 배려가 빛납니다.",
      ],
      vi: [
        "Ở Hàn Quốc, câu hỏi 'Bạn ăn cơm chưa?' là lời hỏi thăm thân tình nhất, thể hiện sự quan tâm đến sức khỏe và đời sống của đối phương.",
        "Khi chia tay, câu 'Hôm nào cùng ăn cơm nhé' thường mang ý nghĩa giữ gìn mối quan hệ tốt đẹp trong tương lai.",
        "Trên bàn ăn, mọi người thường chia sẻ các món canh và banchan; việc dùng đĩa riêng gắp thức ăn và chờ người lớn cầm đũa trước luôn được đánh giá cao.",
      ],
      en: [
        'Asking "Have you eaten?" in Korea is one of the warmest ways to check on someone’s well-being, rooted in caring for each other’s health.',
        'Saying "Let’s eat together sometime" when parting is a friendly way of expressing goodwill and wanting to stay connected.',
        "At the table, side dishes (banchan) are shared communally—using clean serving utensils or a personal side plate and waiting for elders to lift their spoons first shows thoughtful manners.",
      ],
      zh: [
        "在韩国，见到熟人时问一句“吃饭了吗？”，是最亲切的日常问候，蕴含着对对方健康与近况的关心。",
        "告别时说“改天一起吃顿饭吧”，往往是表达好感与希望继续保持联系的温暖信号。",
        "餐桌上大家会共同分享大锅汤和各式小菜，使用公勺公筷分盘享用、等长辈先动筷再开动，都是备受赞赏的餐桌礼仪。",
      ],
    },
    culturalTip: {
      ko: "한국인 동료가 '밥 먹었어?'라고 물으면 '네, 먹었어요! ○○님은요?'라고 웃으며 되물어 보세요.",
      vi: "Khi đồng nghiệp hỏi 'Ăn cơm chưa?', hãy mỉm cười đáp 'Vâng, tôi ăn rồi! Còn anh/chị thì sao?' nhé.",
      en: 'When someone asks if you’ve eaten, a warm smile and "Yes, how about you?" naturally opens friendly conversation.',
      zh: "当韩国同事问您“吃饭了吗？”，微笑回答“吃过了！您吃了吗？”能自然开启亲切的对话。",
    },
  },
  {
    id: "article-3",
    category: {
      ko: "명절 문화",
      vi: "Văn hóa ngày lễ",
      en: "Seasonal Holidays",
      zh: "节日文化",
    },
    readTime: {
      ko: "4분 읽기",
      vi: "4 phút đọc",
      en: "4 min read",
      zh: "阅读 4 分钟",
    },
    icon: "celebration",
    title: {
      ko: "한국의 추석과 아시아의 수확 명절",
      vi: "Tết Trung thu Hàn Quốc (Chuseok) & lễ hội mùa màng châu Á",
      en: "Korean Chuseok and Asian Harvest Traditions",
      zh: "韩国的秋夕与亚洲的丰收佳节",
    },
    summary: {
      ko: "한국의 추석과 베트남의 뗏(Tết), 중국의 중추절까지 닮아 있는 명절 풍습을 정리했습니다.",
      vi: "So sánh nét tương đồng ấm áp giữa Chuseok Hàn Quốc, Tết Việt Nam và Trung thu các nước châu Á.",
      en: "Explore how Chuseok shares family reunion values with Tết, Mid-Autumn Festival, and harvest holidays across Asia.",
      zh: "梳理韩国秋夕与越南春节/中秋、中国中秋节等一脉相承的团圆与丰收习俗。",
    },
    paragraphs: {
      ko: [
        "음력 8월 15일 추석(한가위)은 설날과 함께 한국의 가장 큰 명절입니다. 햇곡식과 햇과일로 조상께 감사를 올리고, 온 가족이 모여 반달 모양의 송편을 빚으며 덕담을 나눕니다.",
        "베트남의 중추절(Tết Trung Thu)과 설 명절(Tết), 중국의 중추절 역시 보름달 아래 가족이 모여 월병이나 전통 음식을 나누며 한 해의 풍요와 건강을 기원한다는 점에서 깊은 공감대를 나눕니다.",
        "명절 연휴에는 고속도로와 기차표 예매가 치열하고, 개인 상점이나 병원이 휴무하는 경우가 많으니 미리 운영 시간을 확인해 두는 것이 좋습니다.",
      ],
      vi: [
        "Chuseok (15/8 âm lịch) là một trong những ngày lễ lớn nhất Hàn Quốc. Các gia đình sum họp, dâng lễ tạ ơn tổ tiên và cùng nhau nặn bánh Songpyeon hình bán nguyệt.",
        "Nét văn hóa đoàn viên dưới ánh trăng rằm này có nhiều điểm tương đồng sâu sắc với Tết Trung Thu Việt Nam và Tết cổ truyền châu Á.",
        "Vào kỳ nghỉ lễ, vé tàu xe thường hết sớm và nhiều cửa hàng, phòng khám đóng cửa, nên hãy kiểm tra lịch hoạt động trước khi đi nhé.",
      ],
      en: [
        "Chuseok (15th day of the 8th lunar month) is one of Korea’s biggest holidays. Families gather to give thanks for the autumn harvest and make crescent-shaped rice cakes called songpyeon.",
        "This spirit of gathering beneath the full moon resonates deeply with Tết Trung Thu in Vietnam and Mid-Autumn Festival traditions across Asia.",
        "During the holiday week, train tickets sell out quickly and many clinics or small shops close, so checking schedules ahead of time helps.",
      ],
      zh: [
        "农历八月十五的秋夕（仲秋节）与春节并列为韩国最重要的传统节日。家人团聚一堂祭祖感恩，并一起制作半月形的松糕。",
        "这种在满月下阖家团圆、祈愿丰收与安康的习俗，与中国的春节、中秋节以及越南的中秋节都有着深厚的文化共鸣。",
        "节假日期间车票紧张，许多小店和诊所也会休息，建议提前查询营业时间。",
      ],
    },
    culturalTip: {
      ko: "명절 전후에는 이웃이나 동료에게 '즐거운 한가위 보내세요' 또는 '새해 복 많이 받으세요'라고 인사해 보세요.",
      vi: "Dịp lễ, bạn có thể chúc đồng nghiệp hoặc hàng xóm 'Chúc kỳ nghỉ Chuseok vui vẻ!' để gắn kết tình cảm.",
      en: 'Before the holiday, wishing colleagues "Have a wonderful Chuseok!" is a warm and appreciated gesture.',
      zh: "节日前后不妨向邻居或同事问候一声“祝您度过愉快的秋夕佳节！”，会让彼此倍感温暖。",
    },
  },
];

export const INITIAL_CULTURE_STATE: CultureState = {
  xp: 1250,
  streakDays: 4,
  quizAnswers: {},
  quizStreak: 0,
  readArticleIds: [],
  mastery: {
    neighbor: 94,
    lifestyle: 88,
    public: 82,
    workplace: 76,
  },
  records: [
    {
      id: "seed-1",
      title: "이웃 간 층간소음 · 분리수거 에티켓",
      subtitle: "롤플레잉 · 공손한 존댓말과 사과 표현 우수",
      date: "2026-11-12",
      xp: 30,
    },
    {
      id: "seed-2",
      title: "한국 직장 상사에게 보고할 때 호칭",
      subtitle: "AI Q&A · 직급 호칭 문화 학습 완료",
      date: "2026-11-11",
      xp: 10,
    },
    {
      id: "seed-3",
      title: "주민센터 · 병원 방문 및 민원 소통",
      subtitle: "롤플레잉 · 증상 설명과 서류 요청 표현 우수",
      date: "2026-11-10",
      xp: 25,
    },
  ],
  profile: {
    name: "",
    loggedIn: false,
  },
};
