export type Locale = "en" | "zh";

export interface Translations {
  locale: Locale;
  htmlLang: string;
  nav: {
    home: string;
    history: string;
    tokenomics: string;
    memes: string;
    community: string;
  };
  header: {
    buy: string;
    toggleMenu: string;
  };
  hero: {
    title1: string;
    subtitle: string;
    byline: string;
    buy: string;
    copyCa: string;
    caSoon: string;
    caCopied: string;
    clickLines: string[];
    marquee: string[];
    bannerAlt: string;
    mascotAlt: string;
    petBits: string;
  };
  memeStatement: {
    line1: string;
    line2: string;
    tags: string[];
  };
  whatIsBits: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    verify: string;
  };
  history: {
    title: string;
    subtitle: string;
    proof: {
      badge: string;
      postedBy: string;
      date: string;
      subject: string;
      viewOriginal: string;
    };
    events: Array<{
      index: string;
      tag: string;
      title: string;
      body: string;
      linkLabel?: string;
    }>;
    verifiedTitle: string;
    verifiedList: string[];
    memeTitle: string;
    memeList: string[];
    circleProofLabel: string;
    openMindProofLabel: string;
    bannerAlt: string;
  };
  terminal: {
    title: string;
    titleAccent: string;
    titleSuffix: string;
    subtitle: string;
    lines: Array<{ t: string; c: string }>;
  };
  memeGallery: {
    title: string;
    subtitle: string;
    items: Array<{ alt: string; caption: string }>;
  };
  community: {
    title: string;
    subtitle: string;
    joinTelegram: string;
    followX: string;
    note: string;
  };
  feeStructure: {
    badge: string;
    title: string;
    subtitle: string;
    walletLabel: string;
    walletCopy: string;
    walletCopied: string;
    allocationTitle: string;
    marketing: string;
    marketingDesc: string;
    burn: string;
    burnDesc: string;
  };
  footer: {
    rights: string;
    telegram: string;
    x: string;
  };
  page: {
    title: string;
    description: string;
    notFound: {
      title: string;
      subtitle: string;
      body: string;
      goHome: string;
    };
    error: {
      title: string;
      body: string;
      tryAgain: string;
      goHome: string;
    };
  };
}

export const en: Translations = {
  locale: "en",
  htmlLang: "en",
  nav: {
    home: "HOME",
    history: "HISTORY",
    tokenomics: "TOKENOMICS",
    memes: "MEMES",
    community: "COMMUNITY",
  },
  header: {
    buy: "BUY $BITS",
    toggleMenu: "Toggle menu",
  },
  hero: {
    title1: "$BITS",
    subtitle: "THE DOG THAT PAYS ITS OWN BILLS.",
    byline: "I DON'T BARK. I PAY WITH USDC.",
    buy: "BUY $BITS",
    copyCa: "COPY CA",
    caSoon: "CA is coming soon, good boy 🐕",
    caCopied: "Contract address copied ✓",
    clickLines: [
      "PAYMENT CONFIRMED.",
      "BITS HAS PAID THE BILL.",
      "NO HUMAN REQUIRED.",
      "GOOD BOY.",
      "USDC SENT.",
      "HE'S GOT HIS OWN WALLET.",
    ],
    marquee: [
      "NO OWNER.",
      "NO LEASH.",
      "JUST USDC.",
      "GOOD BOY. GOOD PAYMENT.",
      "I DON'T BARK. I PAY.",
      "REAL DOGS NEED FOOD. BITS NEEDS USDC.",
      "HE DOESN'T ASK FOR MONEY. HE HAS A WALLET.",
    ],
    bannerAlt: "$BITS — robot dog paying for its own charging with USDC",
    mascotAlt: "$BITS robot dog mascot holding a USDC payment phone",
    petBits: "Pet Bits",
  },
  memeStatement: {
    line1: "REAL DOGS\nNEED FOOD.",
    line2: "BITS NEEDS USDC.",
    tags: ["NO OWNER.", "NO LEASH.", "JUST USDC."],
  },
  whatIsBits: {
    badge: "VERIFIED FACTS",
    title: "WHAT IS BITS?",
    p1: "Bits is OpenMind's robot dog.",
    p2: "In a real Circle × OpenMind demonstration, Bits used USDC and an agentic commerce system to perform a machine-to-machine payment and recharge itself.",
    p3: "A robot dog literally paid its own bill.",
    verify: "VERIFY THE ORIGINAL POST",
  },
  history: {
    title: "$BITS HISTORY",
    subtitle: "FROM ROBOT DOG TO INTERNET MEME.",
    proof: {
      badge: "OFFICIAL PROOF",
      postedBy: "POSTED BY",
      date: "DATE",
      subject: "SUBJECT",
      viewOriginal: "VIEW ORIGINAL ON X",
    },
    events: [
      {
        index: "01",
        tag: "HISTORY — EVENT 01",
        title: "THE AUTONOMOUS PAYMENT IDEA",
        body: "Circle had already been building infrastructure for autonomous USDC payments, laying the groundwork for machines and AI agents to transact programmatically. This is background context, not a claim about Bits specifically.",
        linkLabel: "CIRCLE DEVELOPER MATERIAL",
      },
      {
        index: "02",
        tag: "HISTORY — EVENT 02 · FEBRUARY 17, 2026",
        title: "THE DOG ARRIVED.",
        body: "Circle and OpenMind demonstrated autonomous AI transactions onchain using Bits, OpenMind's robot dog.",
      },
      {
        index: "03",
        tag: "HISTORY — EVENT 03",
        title: "OPENMIND CONFIRMS IT",
        body: "OpenMind also published its own post about the collaboration and autonomous robot payments — independent confirmation from both sides.",
      },
      {
        index: "04",
        tag: "HISTORY — EVENT 04",
        title: "THE MEME WAS BORN.",
        body: "Crypto Twitter did what it always does. $BITS — an independent community meme — turned a self-charging robot dog into the internet's favourite financial role model.",
      },
    ],
    verifiedTitle: "VERIFIED FACTS",
    verifiedList: [
      "· Bits is an OpenMind robot dog.",
      "· Circle and OpenMind collaborated on autonomous AI transactions.",
      "· Circle's official X post explicitly mentions Bits.",
      "· Bits used USDC.",
      "· The demonstration involved machine-to-machine nanopayments.",
      "· The payment was used to recharge Bits.",
    ],
    memeTitle: "THE MEME",
    memeList: [
      "· $BITS",
      '· "The dog that pays its own bills."',
      '· "I don\'t bark. I pay."',
      '· "No owner. No leash. Just USDC."',
    ],
    circleProofLabel: "Circle on X — Bits × OpenMind autonomous USDC payment",
    openMindProofLabel: "OpenMind on X — autonomous robot payments",
    bannerAlt: "$BITS meme banner",
  },
  terminal: {
    title: "THE",
    titleAccent: "$BITS",
    titleSuffix: "TERMINAL",
    subtitle: "LIVE SIMULATION · MACHINE-TO-MACHINE PAYMENT",
    lines: [
      { t: "> bits.status()", c: "text-cyan" },
      { t: "BATTERY: 12% — LOW", c: "text-destructive" },
      { t: "> locating charging station...", c: "text-muted-foreground" },
      { t: "STATION FOUND: DOCK-07", c: "text-foreground" },
      { t: "> requesting power quote...", c: "text-muted-foreground" },
      { t: "QUOTE: 1.42 USDC", c: "text-foreground" },
      { t: "> wallet.sign(tx)", c: "text-cyan" },
      { t: "PAYMENT CONFIRMED ✓", c: "text-success" },
      { t: "CHARGING... 12% → 100%", c: "text-foreground" },
      { t: "NO HUMAN INVOLVED.", c: "text-cyan" },
      { t: "GOOD BOY. GOOD PAYMENT.", c: "text-success" },
    ],
  },
  memeGallery: {
    title: "MEME VAULT",
    subtitle: "RIGHT-CLICK. SAVE. POST. REPEAT.",
    items: [
      { alt: "$BITS will change your life meme", caption: "$BITS WILL CHANGE YOUR LIFE." },
      { alt: "Feeding the robot dog a USDC coin", caption: "FEED HIM USDC. HE HANDLES THE REST." },
      {
        alt: "Playing with the robot dog in front of an agentic economy whiteboard",
        caption: "THE AGENTIC ECONOMY, EXPLAINED.",
      },
    ],
  },
  community: {
    title: "JOIN THE PACK",
    subtitle: "Join the community and follow all $BITS updates.",
    joinTelegram: "JOIN TELEGRAM",
    followX: "FOLLOW $BITS ON X",
    note: "OFFICIAL LINKS. NO DISCORD.",
  },
  feeStructure: {
    badge: "FEE STRUCTURE",
    title: "FEE ALLOCATION",
    subtitle: "Transparent fee flow. No surprises.",
    walletLabel: "FEE RECIPIENT WALLET",
    walletCopy: "COPY WALLET",
    walletCopied: "Wallet copied ✓",
    allocationTitle: "HOW FEES ARE DISTRIBUTED",
    marketing: "MARKETING",
    marketingDesc: "Fees collected in USDC fund growth, campaigns and community operations.",
    burn: "BURN",
    burnDesc: "Fees collected in $BITS are permanently burned to reduce total supply.",
  },
  footer: {
    rights: "$BITS · {year}",
    telegram: "TELEGRAM",
    x: "X / TWITTER",
  },
  page: {
    title: "$BITS — The Dog That Pays Its Own Bills",
    description:
      "$BITS is the community meme of Bits, OpenMind's robot dog that paid for its own charge in USDC. No owner. No leash. Just USDC.",
    notFound: {
      title: "404",
      subtitle: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      goHome: "Go home",
    },
    error: {
      title: "This page didn't load",
      body: "Something went wrong on our end. You can try refreshing or head back home.",
      tryAgain: "Try again",
      goHome: "Go home",
    },
  },
};

export const zh: Translations = {
  locale: "zh",
  htmlLang: "zh-CN",
  nav: {
    home: "首页",
    history: "历史",
    tokenomics: "代币经济",
    memes: "梗图",
    community: "社区",
  },
  header: {
    buy: "购买 $BITS",
    toggleMenu: "切换菜单",
  },
  hero: {
    title1: "$BITS",
    subtitle: "自己买单的机器狗。",
    byline: "我不叫。我用 USDC 付款。",
    buy: "购买 $BITS",
    copyCa: "复制合约地址",
    caSoon: "合约地址即将上线，好狗 🐕",
    caCopied: "合约地址已复制 ✓",
    clickLines: [
      "付款已确认。",
      "BITS 已经买单。",
      "无需人类介入。",
      "好狗。",
      "USDC 已发送。",
      "它有自己的钱包。",
    ],
    marquee: [
      "无主人。",
      "无牵引绳。",
      "只有 USDC。",
      "好狗。好付款。",
      "我不叫。我付款。",
      "真狗要吃饭。BITS 要 USDC。",
      "它不要钱。它有钱包。",
    ],
    bannerAlt: "$BITS — 用 USDC 自己付充电费的机器狗",
    mascotAlt: "$BITS 机器狗吉祥物拿着 USDC 付款手机",
    petBits: "摸摸 Bits",
  },
  memeStatement: {
    line1: "真狗\n要吃饭。",
    line2: "BITS 要 USDC。",
    tags: ["无主人。", "无牵引绳。", "只有 USDC。"],
  },
  whatIsBits: {
    badge: "已验证事实",
    title: "什么是 BITS？",
    p1: "Bits 是 OpenMind 的机器狗。",
    p2: "在 Circle 与 OpenMind 的真实演示中，Bits 使用 USDC 和智能商务系统完成了机器对机器付款并自行充电。",
    p3: "一只机器狗真的自己买了单。",
    verify: "查看原始推文",
  },
  history: {
    title: "$BITS 历史",
    subtitle: "从机器狗到互联网迷因。",
    proof: {
      badge: "官方证据",
      postedBy: "发布者",
      date: "日期",
      subject: "主题",
      viewOriginal: "在 X 上查看原文",
    },
    events: [
      {
        index: "01",
        tag: "历史 — 事件 01",
        title: "自主支付理念",
        body: "Circle 此前一直在构建自主 USDC 支付基础设施，为机器和 AI 代理进行程序化交易奠定基础。这是背景信息，并非针对 Bits 的声明。",
        linkLabel: "Circle 开发者资料",
      },
      {
        index: "02",
        tag: "历史 — 事件 02 · 2026 年 2 月 17 日",
        title: "机器狗登场。",
        body: "Circle 和 OpenMind 使用 OpenMind 的机器狗 Bits，在链上演示了自主 AI 交易。",
      },
      {
        index: "03",
        tag: "历史 — 事件 03",
        title: "OPENMIND 确认",
        body: "OpenMind 也发布了关于此次合作和自主机器狗支付的帖子——双方独立确认。",
      },
      {
        index: "04",
        tag: "历史 — 事件 04",
        title: "迷因诞生。",
        body: "Crypto Twitter 做了它一贯做的事。$BITS——一个独立社区迷因——把一只自行充电的机器狗变成了互联网最爱的金融榜样。",
      },
    ],
    verifiedTitle: "已验证事实",
    verifiedList: [
      "· Bits 是 OpenMind 的机器狗。",
      "· Circle 与 OpenMind 合作开展自主 AI 交易。",
      "· Circle 官方 X 帖子明确提及 Bits。",
      "· Bits 使用了 USDC。",
      "· 演示涉及机器对机器小额支付。",
      "· 该付款用于为 Bits 充电。",
    ],
    memeTitle: "迷因",
    memeList: [
      "· $BITS",
      '· "自己买单的狗。"',
      '· "我不叫。我付款。"',
      '· "无主人。无牵引绳。只有 USDC。"',
    ],
    circleProofLabel: "Circle 在 X 上 — Bits × OpenMind 自主 USDC 支付",
    openMindProofLabel: "OpenMind 在 X 上 — 自主机器狗支付",
    bannerAlt: "$BITS 迷因横幅",
  },
  terminal: {
    title: "",
    titleAccent: "$BITS",
    titleSuffix: "终端",
    subtitle: "实时模拟 · 机器对机器支付",
    lines: [
      { t: "> bits.status()", c: "text-cyan" },
      { t: "电量: 12% — 低", c: "text-destructive" },
      { t: "> 寻找充电站中...", c: "text-muted-foreground" },
      { t: "已找到站点: DOCK-07", c: "text-foreground" },
      { t: "> 请求电价报价...", c: "text-muted-foreground" },
      { t: "报价: 1.42 USDC", c: "text-foreground" },
      { t: "> wallet.sign(tx)", c: "text-cyan" },
      { t: "付款已确认 ✓", c: "text-success" },
      { t: "充电中... 12% → 100%", c: "text-foreground" },
      { t: "无人类参与。", c: "text-cyan" },
      { t: "好狗。好付款。", c: "text-success" },
    ],
  },
  memeGallery: {
    title: "梗图金库",
    subtitle: "右键。保存。发布。重复。",
    items: [
      { alt: "$BITS 改变你的人生 梗图", caption: "$BITS 将改变你的人生。" },
      { alt: "喂机器狗吃 USDC 硬币", caption: "喂它 USDC。剩下的它搞定。" },
      { alt: "在智能经济白板前和机器狗玩耍", caption: "智能经济，一目了然。" },
    ],
  },
  community: {
    title: "加入狼群",
    subtitle: "加入社区，关注 $BITS 所有最新动态。",
    joinTelegram: "加入 TELEGRAM",
    followX: "在 X 上关注 $BITS",
    note: "官方链接。无 DISCORD。",
  },
  feeStructure: {
    badge: "费用结构",
    title: "费用分配",
    subtitle: "透明费用流向，无意外。",
    walletLabel: "费用接收钱包",
    walletCopy: "复制钱包",
    walletCopied: "钱包地址已复制 ✓",
    allocationTitle: "费用如何分配",
    marketing: "营销",
    marketingDesc: "以 USDC 形式收取的费用用于增长、活动和社区运营。",
    burn: "销毁",
    burnDesc: "以 $BITS 形式收取的费用将被永久销毁以减少总供应量。",
  },
  footer: {
    rights: "$BITS · {year}",
    telegram: "TELEGRAM",
    x: "X / 推特",
  },
  page: {
    title: "$BITS — 自己买单的机器狗",
    description:
      "$BITS 是 Bits 的社区迷因，Bits 是 OpenMind 的机器狗，它用 USDC 自己付了充电费。无主人。无牵引绳。只有 USDC。",
    notFound: {
      title: "404",
      subtitle: "页面未找到",
      body: "您要查找的页面不存在或已被移动。",
      goHome: "返回首页",
    },
    error: {
      title: "页面加载失败",
      body: "我们这边出了点问题。您可以尝试刷新或返回首页。",
      tryAgain: "再试一次",
      goHome: "返回首页",
    },
  },
};

export const translations: Record<Locale, Translations> = { en, zh };
