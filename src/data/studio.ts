export interface TimelineEvent {
  date: string;
  title: string;
  summary: string;
  category: "沿革" | "重建" | "制度" | "荣誉" | "行动";
}

export interface GovernanceBody {
  name: string;
  type: string;
  composition: string;
  cadence: string;
  responsibilities: string[];
}

export interface DisciplineRule {
  name: string;
  principle: string;
  details: string[];
}

export interface StudioDocumentSection {
  heading: string;
  paragraphs: string[];
}

export interface StudioDocument {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  highlights: string[];
  sections: StudioDocumentSection[];
}

export interface StudioInitiative {
  slug: string;
  name: string;
  period: string;
  status: string;
  icon: string;
  summary: string;
  outcomes: string[];
  tags: string[];
  relatedDocumentSlug: string;
}

export const studioProfile = {
  name: "冰雪祁缘工作室",
  englishName: "Bingxue Qiyuan Studio",
  tagline: "以公约为轴，重写工作室的时间、组织、纪律与文告。",
  description:
    "冰雪祁缘工作室是在中国共产党领导下，在集体内部研究抽象行为和精神内涵的试验性组织。工作室以抽象为核心宗旨，以平等与团结为基本理念，通过全员大会、常务会议与专项委员会推动制度建设、成员协作与室史整理。",
  foundedAt: "2023-11-24",
  rebuiltAt: "2025-11-11",
  charterTitle: "冰雪祁缘工作室公约（修订二）",
  charterMilestones: [
    "全员大会于 2025-12-12 通过",
    "常务会议于 2025-12-19 第一次部分修改",
    "常务会议于 2026-03-11 第二次部分修改",
  ],
  corePurpose: "抽象",
  coreValues: ["平等", "团结"],
  visualIdentity:
    "标志徽采用蓝金配色，融合冰雪、雪豹与高铁元素，顶部为金色五角星与放射线，下承金蓝渐变橄榄枝，底部蓝丝带书写“冰雪祁缘”。",
  sealStatement:
    "公章是工作室最权威的象征，代表全员大会；每名正式成员均有权保管和使用，但必须遵循少用、慎用原则。",
};

export const studioMetrics = [
  {
    value: String(15).padStart(2, "0"),
    label: "关键节点",
    note: "从“三热”前身成立到重建后的制度化推进。",
  },
  {
    value: String(4).padStart(2, "0"),
    label: "常设与专项机构",
    note: "全员大会、常务会议及三类委员会并行运转。",
  },
  {
    value: String(3).padStart(2, "0"),
    label: "核心纪律",
    note: "语言、财产、保密构成制度底线。",
  },
  {
    value: String(5).padStart(2, "0"),
    label: "公开文告",
    note: "时间线、组织、纪律与荣誉事项统一整理。",
  },
];

export const studioTimeline: TimelineEvent[] = [
  {
    date: "2023-11-24",
    title: "“三热”心理咨询室成立",
    summary: "工作室前身正式出现，成为后续组织沿革的起点。",
    category: "沿革",
  },
  {
    date: "2024-02",
    title: "更名为 6-30 抽象工作室",
    summary: "首次以抽象工作室的方式展开组织命名与对外识别。",
    category: "沿革",
  },
  {
    date: "2024-05-15",
    title: "召开第一届全室代表大会",
    summary: "会议选举郑天祁为室长，初步形成早期组织架构。",
    category: "沿革",
  },
  {
    date: "2024-05-17",
    title: "严淏宸加入工作室",
    summary: "历史文本将其记为具备较强个人实力的重要成员补入。",
    category: "沿革",
  },
  {
    date: "2024-06-06",
    title: "对旧工作室发展状态作出解散建议",
    summary: "经评议认为相关组织形式已不符合历史发展规律。",
    category: "沿革",
  },
  {
    date: "2024-06-13",
    title: "6-30 抽象工作室正式解散",
    summary: "第一次组织生命周期结束，工作室进入停摆阶段。",
    category: "沿革",
  },
  {
    date: "2025-09-29",
    title: "以 2-1-2 抽象工作室名义重建",
    summary: "盛缘会主导重启组织，为后续定名与制度重建铺垫。",
    category: "重建",
  },
  {
    date: "2025-10-29",
    title: "短暂更名为盛缘会外交联络办公室",
    summary: "命名继续震荡，显示重建初期路线尚未稳定。",
    category: "重建",
  },
  {
    date: "2025-10-30 至 2025-11-03",
    title: "展开名称专项争论",
    summary: "经激烈争论后，最终确定“冰雪祁缘工作室”为正式名称。",
    category: "重建",
  },
  {
    date: "2025-11-05",
    title: "工作室被迫转入地下运作",
    summary: "因神秘力量干扰短暂解散，成员以两两单线方式保持联系。",
    category: "重建",
  },
  {
    date: "2025-11-11",
    title: "冰雪祁缘工作室重建",
    summary: "以平等与团结为原则重启，不再设置室长职务。",
    category: "重建",
  },
  {
    date: "2025-11-26",
    title: "吸纳康师傅为临时室友",
    summary: "重建后首次尝试以考察机制吸纳新成员。",
    category: "制度",
  },
  {
    date: "2025-12-07",
    title: "全员大会同意康师傅转为正式成员",
    summary: "成员转正流程开始按制度化路径运行。",
    category: "制度",
  },
  {
    date: "2025-12-10",
    title: "决定设立“姚雪豹”奖",
    summary: "受“香农”奖启发，启动工作室荣誉表彰体系建设。",
    category: "荣誉",
  },
  {
    date: "2025-12-12",
    title: "全员大会通过《公约》与首届奖项决议",
    summary: "工作室核心制度与荣誉文告同日正式确立。",
    category: "制度",
  },
  {
    date: "2025-12-15",
    title: "部署外卖失窃诱饵排查计划",
    summary: "围绕财产纪律制定专项实施计划并启动排查。",
    category: "行动",
  },
  {
    date: "2025-12-19",
    title: "成立肃清消极怠工行为非常委员会",
    summary: "针对集体任务摸鱼与敷衍问题建立专项整治组织。",
    category: "行动",
  },
  {
    date: "2025-12-25",
    title: "工作室拥有公章",
    summary: "制度象征正式落地，公章成为全员大会权威载体。",
    category: "制度",
  },
  {
    date: "2026-02-07",
    title: "进入放假状态",
    summary: "组织活动暂时减缓，进入休整周期。",
    category: "沿革",
  },
  {
    date: "2026-03-07",
    title: "解除放假状态",
    summary: "工作室恢复常态运转，重新进入制度执行阶段。",
    category: "沿革",
  },
  {
    date: "2026-03-08",
    title: "授予姚雪豹“三八红旗手”荣誉称号",
    summary: "荣誉体系继续扩展，形成奖项之外的称号激励。",
    category: "荣誉",
  },
  {
    date: "2026-03-11",
    title: "完成第二次公约修改并授予第二届“姚雪豹”奖",
    summary: "常务会议完成修订，同日记录第二届奖项授予事项。",
    category: "荣誉",
  },
];

export const governanceBodies: GovernanceBody[] = [
  {
    name: "工作室全员大会",
    type: "最高权威机构",
    composition: "由全体正式成员组成，临时室友可列席。",
    cadence: "由常务会议负责召集，重大事项按需召开。",
    responsibilities: [
      "修改工作室名称及公约内容。",
      "批准临时室友转正申请。",
      "讨论并决定工作室各项重要事务。",
      "选举工作室常务会议成员。",
    ],
  },
  {
    name: "工作室常务会议",
    type: "日常运行机构",
    composition: "由全员大会从正式成员中选举产生，临时室友不得担任成员。",
    cadence: "负责日常管理，并筹备全员大会。",
    responsibilities: [
      "审议并通过临时决议案及各类会议决定。",
      "批准外部人员成为临时室友的申请。",
      "决定成员资格审查委员会组成人员。",
      "决定荣誉表彰评议委员会组成人员。",
      "决定肃清消极怠工行为非常委员会组成人员。",
    ],
  },
  {
    name: "成员资格审查委员会",
    type: "审查机构",
    composition: "由常务会议决定组成人员。",
    cadence: "围绕新成员申请和资格核验开展工作。",
    responsibilities: [
      "对申请加入人员进行资格审查。",
      "核实个人信息、思想状况及基本要求匹配度。",
      "形成审查报告并提交常务会议评议。",
    ],
  },
  {
    name: "荣誉表彰评议委员会",
    type: "评奖机构",
    composition: "由常务会议决定组成人员。",
    cadence: "在奖项和荣誉评定期间集中开展工作。",
    responsibilities: [
      "制定评选规则与流程。",
      "组织参选人员评议审核。",
      "形成获奖名单并提交全员大会表决。",
    ],
  },
  {
    name: "肃清消极怠工行为非常委员会",
    type: "专项整治机构",
    composition: "由常务会议决定组成人员，临时室友不得担任委员。",
    cadence: "在专项整治期间直接向常务会议负责。",
    responsibilities: [
      "排查集体任务中的消极怠工、摸鱼敷衍等行为。",
      "认定相关事实并提出整改建议。",
      "跟踪重点关注人员整改进度并核验成效。",
      "向常务会议提交整治情况报告。",
    ],
  },
];

export const currentRosters = [
  {
    group: "工作室常务会议成员",
    members: ["姚雪豹", "郑天祁", "盛缘会", "张福康"],
  },
  {
    group: "成员资格审查委员会委员",
    members: ["姚雪豹", "郑天祁", "盛缘会", "张福康"],
  },
  {
    group: "奖项评议委员会委员",
    members: ["姚雪豹", "郑天祁", "盛缘会", "张福康"],
  },
  {
    group: "肃清消极怠工行为非常委员会委员",
    members: ["姚雪豹", "郑天祁", "盛缘会", "张福康"],
  },
  {
    group: "工作室正式成员",
    members: ["姚雪豹", "郑天祁", "盛缘会", "张福康"],
  },
];

export const memberFramework = {
  categories: [
    {
      name: "正式成员",
      description:
        "享有参加会议、自由表达意见、表决权、选举权和被选举权等完整成员权利，同时承担制度学习、遵守纪律与参与事务等全部义务。",
    },
    {
      name: "临时室友",
      description:
        "经资格审查与常务会议评议后进入考察期，除不享有表决权、选举权和被选举权外，其余权利义务与正式成员一致。",
    },
  ],
  obligations: [
    "主动学习并传播抽象文化知识，持续研习工作室发展历史。",
    "密切关注国家大事与社会发展动态，并将所学用于日常实践。",
    "拥护中国共产党的领导，遵守国家法律法规与社会公序良俗。",
    "承认并遵守工作室公约及各项规章制度。",
  ],
  rights: [
    "参加工作室组织的各类会议及活动。",
    "在工作室内部自由发表意见、建议及观点。",
    "以正式成员身份参与重大事项决策与相关人员选举。",
  ],
  joining:
    "外部人员加入需先经成员资格审查委员会审查，再由常务会议评议同意，方可成为临时室友。",
  regularization:
    "临时室友转正需提交申请，由全员大会讨论并表决通过后正式转为工作室正式成员。",
  exit:
    "成员享有退出自由，但须向常务会议提交书面申请，说明原因并完成相关事务交接。",
};

export const disciplineRules: DisciplineRule[] = [
  {
    name: "语言纪律",
    principle: "工作室内禁止狗叫。",
    details: [
      "倡导文明沟通与理性交流。",
      "尊重他人人格与观点，维护和谐的讨论氛围。",
      "制度讨论强调清晰表达，不以情绪化攻击替代意见。",
    ],
  },
  {
    name: "财产纪律",
    principle: "禁止侵占、盗窃、损毁工作室集体财物或成员个人财物。",
    details: [
      "保护外卖、生活用品、学习工作资料等所有具体财产。",
      "发生财物纠纷时应通过协商或工作室调解解决。",
      "严禁以报复性措施处理财物争议。",
    ],
  },
  {
    name: "保密纪律",
    principle: "内部事务、成员隐私及未公开计划必须严格保密。",
    details: [
      "不得向外部无关人员泄露未公开的决议与计划。",
      "成员个人隐私信息属于受保护内容。",
      "站内联络、制度草案与会议讨论应遵循最小公开原则。",
    ],
  },
];

export const studioDocuments: StudioDocument[] = [
  {
    slug: "charter-revision-two",
    title: "冰雪祁缘工作室公约（修订二）",
    date: "2026-03-11",
    category: "根本制度",
    readingTime: "15 分钟",
    excerpt:
      "全员大会于 2025 年 12 月 12 日通过，随后在 2025 年 12 月 19 日与 2026 年 3 月 11 日完成两次部分修改，构成工作室当前最核心的制度依据。",
    highlights: ["核心宗旨：抽象", "核心理念：平等与团结", "全员大会为最高权威机构"],
    sections: [
      {
        heading: "通过与修订",
        paragraphs: [
          "《冰雪祁缘工作室公约》由全员大会在 2025 年 12 月 12 日通过，此后由常务会议分别在 2025 年 12 月 19 日和 2026 年 3 月 11 日进行两次部分修改，形成当前的修订二版本。",
          "公约的存在使工作室从叙事性的共同体转向有明确规则、明确权力边界和明确成员路径的制度共同体。",
        ],
      },
      {
        heading: "总纲",
        paragraphs: [
          "公约将工作室定义为在中国共产党领导下、在集体内部研究抽象行为和精神内涵的试验性组织。",
          "抽象被界定为一种打破常规思维桎梏、以独特视角洞察事物本质的认知方式与行为准则，要求成员把抽象精神转化为积极向上的行动自觉。",
          "工作室强调以抽象精神参与国家建设，在学习、工作与生活中大胆突破，实现个人价值与社会价值的统一。",
        ],
      },
      {
        heading: "组织与成员制度",
        paragraphs: [
          "全员大会是最高权威机构，常务会议负责日常运行，专项委员会承担资格审查、荣誉评议和怠工整治等专门任务。",
          "成员分为正式成员和临时室友两类，加入、转正与退出都有清晰流程，确保组织扩容不脱离制度轨道。",
        ],
      },
      {
        heading: "纪律与象征",
        paragraphs: [
          "语言纪律、财产纪律与保密纪律构成制度底线，分别约束沟通方式、财产关系与信息边界。",
          "标志徽与公章被纳入公约正文，说明工作室已将视觉识别和权威象征视为制度的一部分，而不只是装饰。",
        ],
      },
    ],
  },
  {
    slug: "studio-chronicle",
    title: "冰雪祁缘工作室发展全历程",
    date: "2025-11-11",
    category: "室史档案",
    readingTime: "12 分钟",
    excerpt:
      "从“三热”心理咨询室到冰雪祁缘工作室，组织经历更名、解散、地下运作与重建，最终在 2025 年 11 月 11 日进入新阶段。",
    highlights: ["前身成立于 2023-11-24", "2025-11-11 完成重建", "名称争论最终统一为冰雪祁缘"],
    sections: [
      {
        heading: "前史阶段",
        paragraphs: [
          "工作室的时间起点可以追溯到 2023 年 11 月 24 日“三热”心理咨询室的成立。此后又在 2024 年 2 月完成更名，进入 6-30 抽象工作室时期。",
          "这一阶段最大的特点是组织形态不断试错，既有代表大会和室长设置，也暴露出组织结构不稳固的问题。",
        ],
      },
      {
        heading: "解散与重建",
        paragraphs: [
          "2024 年 6 月 13 日，旧工作室正式解散。2025 年 9 月 29 日，盛缘会主导完成重建，并以 2-1-2 抽象工作室为过渡名称重新启动。",
          "经历 2025 年 10 月底至 11 月初的名称争论后，组织最终确定采用“冰雪祁缘工作室”这一名称。",
        ],
      },
      {
        heading: "地下运作与正式重建",
        paragraphs: [
          "2025 年 11 月 5 日，工作室曾因外部干扰被迫解散，成员转入两两单线联系状态，这段经历强化了后续对保密纪律和制度化运行的重视。",
          "2025 年 11 月 11 日，工作室正式重建，并明确不再设置室长职务，以平等与团结取代个人化领导结构。",
        ],
      },
      {
        heading: "制度化推进",
        paragraphs: [
          "重建后的关键转折点是 2025 年 12 月 12 日，《公约》与奖项决议同日通过，标志着工作室进入以制度为核心的运行阶段。",
          "2025 年 12 月 19 日非常委员会成立，2025 年 12 月 25 日公章到位，2026 年 3 月再次修订公约，制度结构进一步闭环。",
        ],
      },
    ],
  },
  {
    slug: "governance-and-committees",
    title: "工作室组织架构与委员会运行说明",
    date: "2025-12-19",
    category: "组织文告",
    readingTime: "11 分钟",
    excerpt:
      "围绕全员大会、常务会议与三类委员会，说明工作室如何把“平等与团结”落到实际治理流程中。",
    highlights: ["全员大会决定重大事项", "常务会议负责日常运行", "委员会承担专项治理与审查职责"],
    sections: [
      {
        heading: "权力结构",
        paragraphs: [
          "全员大会是最高权威机构，负责修改公约、变更名称、批准转正以及决定重要事务。",
          "重大事项须经出席会议的正式成员三分之二以上表决通过，其他一般事项适用过半数规则。",
        ],
      },
      {
        heading: "日常运行",
        paragraphs: [
          "常务会议由全员大会从正式成员中选举产生，负责工作室的日常管理、临时决议和会议筹备。",
          "在不设室长的前提下，常务会议承担了原本可能集中于单个职位的协调职责，避免组织再次围绕个人运转。",
        ],
      },
      {
        heading: "委员会体系",
        paragraphs: [
          "成员资格审查委员会负责新成员准入把关，荣誉表彰评议委员会负责奖项和称号评审，非常委员会则专门处理消极怠工行为。",
          "委员会全部由常务会议决定组成人员，但权责明确区分，确保每项事务有对应载体承接。",
        ],
      },
      {
        heading: "学习与组织生活",
        paragraphs: [
          "公约要求工作室一般每月召开一次民主和组织生活会，用于开展批评与自我批评，并反思成员在思想、行为和事务参与中的不足。",
          "集体学习通常与常务会议或组织生活会同步展开，由常务会议制定年度学习计划，涵盖抽象文化、政策法规和社会热点等内容。",
        ],
      },
    ],
  },
  {
    slug: "discipline-briefing",
    title: "三大纪律与工作室边界说明",
    date: "2025-12-19",
    category: "纪律文告",
    readingTime: "9 分钟",
    excerpt:
      "围绕语言、财产、保密三大纪律，梳理工作室在内部协作和外部联络时的最低行为边界。",
    highlights: ["禁止狗叫", "财物纠纷必须通过协商或调解", "未公开事务严格保密"],
    sections: [
      {
        heading: "语言纪律",
        paragraphs: [
          "公约对语言纪律的表述极为直接：工作室内禁止狗叫。它不是一句玩笑，而是对沟通质量的最低限度要求。",
          "制度层面强调文明沟通、理性交流和对成员人格与观点的尊重，确保内部讨论能够回到事实和论证本身。",
        ],
      },
      {
        heading: "财产纪律",
        paragraphs: [
          "财产纪律保护的不只是集体财物，也包括外卖、生活用品、学习资料等具体个人财物。",
          "在发生财物纠纷时，制度明确要求通过协商或调解解决，而不是报复性处理，说明工作室试图把日常矛盾纳入规则框架而非情绪处理。",
        ],
      },
      {
        heading: "保密纪律",
        paragraphs: [
          "内部事务、成员隐私和未公开决议都被纳入保密范围。对曾经历地下运作的组织而言，这一条并非形式主义，而是历史经验的制度表达。",
          "站点对外展示时因此只公开制度摘要和公开文告，不擅自扩散内部细节。",
        ],
      },
    ],
  },
  {
    slug: "honors-and-actions",
    title: "荣誉表彰与专项行动纪要",
    date: "2026-03-11",
    category: "荣誉与行动",
    readingTime: "8 分钟",
    excerpt:
      "记录“姚雪豹”奖、“三八红旗手”称号，以及外卖失窃排查、肃清消极怠工专项行动等制度化实践。",
    highlights: ["2025-12-10 决定设立“姚雪豹”奖", "2026-03-08 授予“三八红旗手”称号", "非常委员会承担专项整治"],
    sections: [
      {
        heading: "荣誉体系",
        paragraphs: [
          "工作室现有荣誉表彰包括“姚雪豹”奖和“三八红旗手”荣誉称号，两者均由荣誉表彰评议委员会组织评审，并最终提交全员大会表决。",
          "荣誉不是装饰性头衔，而是把抽象精神转化为可识别、可传播的公共叙事工具。",
        ],
      },
      {
        heading: "奖项设立",
        paragraphs: [
          "2025 年 12 月 10 日，工作室受“香农”奖启发决定设立“姚雪豹”奖，并同步讨论首届奖项决议草案。",
          "2025 年 12 月 12 日，全员大会正式通过相关决议，说明奖项与公约几乎同步诞生，属于重建期制度设计的一部分。",
        ],
      },
      {
        heading: "专项行动",
        paragraphs: [
          "外卖失窃诱饵排查行动对应财产纪律的实际执行，属于从原则到实施计划的落地动作。",
          "肃清消极怠工行为非常委员会则把集体任务中的摸鱼问题纳入专门治理，为工作室对内外事务执行能力提供保障。",
        ],
      },
    ],
  },
];

export const studioInitiatives: StudioInitiative[] = [
  {
    slug: "charter-codification",
    name: "公约制度化工程",
    period: "2025.12 - 2026.03",
    status: "已完成两轮修订",
    icon: "📜",
    summary: "以《公约（修订二）》为核心，把宗旨、理念、成员制度、组织结构和纪律要求全部写成可执行规则。",
    outcomes: [
      "形成根本制度文本。",
      "明确修改权、表决门槛与成员路径。",
      "将标志徽和公章纳入正式制度对象。",
    ],
    tags: ["根本制度", "组织建设", "修订机制"],
    relatedDocumentSlug: "charter-revision-two",
  },
  {
    slug: "governance-structure",
    name: "全员大会与常务会议机制",
    period: "2025.11 - 至今",
    status: "持续运行",
    icon: "🏛️",
    summary: "以全员大会作为最高权威机构，以常务会议承接日常管理，替代旧时期围绕单个室长运转的模式。",
    outcomes: [
      "确立民主集中制议事原则。",
      "把重大事项与日常事务分层处理。",
      "确保不设室长后组织仍具备执行力。",
    ],
    tags: ["治理结构", "民主集中", "运行机制"],
    relatedDocumentSlug: "governance-and-committees",
  },
  {
    slug: "member-review-system",
    name: "成员资格审查与转正流程",
    period: "2025.11 - 至今",
    status: "已验证可用",
    icon: "🧾",
    summary: "通过资格审查、考察期和全员大会转正表决，保证成员吸纳符合统一标准。",
    outcomes: [
      "明确临时室友与正式成员双轨分类。",
      "完成重建后首次吸纳与转正案例。",
      "为后续扩容保留制度入口。",
    ],
    tags: ["成员管理", "审查机制", "转正流程"],
    relatedDocumentSlug: "governance-and-committees",
  },
  {
    slug: "honor-system",
    name: "荣誉表彰体系建设",
    period: "2025.12 - 至今",
    status: "持续扩展",
    icon: "🏆",
    summary: "建立“姚雪豹”奖与“三八红旗手”荣誉称号，用公共表彰固化抽象精神的示范案例。",
    outcomes: [
      "奖项与称号形成双层激励结构。",
      "评议委员会承担制度化评审工作。",
      "荣誉叙事与室史记录实现联动。",
    ],
    tags: ["荣誉表彰", "精神激励", "评议流程"],
    relatedDocumentSlug: "honors-and-actions",
  },
  {
    slug: "anti-slacking-campaign",
    name: "肃清消极怠工专项行动",
    period: "2025.12 - 至今",
    status: "专项治理中",
    icon: "🔍",
    summary: "非常委员会围绕小组大作业与共同事务中的摸鱼、敷衍问题开展排查、认定与整改跟踪。",
    outcomes: [
      "将怠工问题从吐槽对象转为制度对象。",
      "建立事实收集、认定、督促整改的完整链路。",
      "以专项组织回应执行力风险。",
    ],
    tags: ["纪律整治", "专项治理", "执行力"],
    relatedDocumentSlug: "honors-and-actions",
  },
  {
    slug: "property-and-symbols",
    name: "财物安全与制度象征建设",
    period: "2025.12 - 至今",
    status: "规则已落地",
    icon: "🚨",
    summary: "围绕财产纪律、公章与标志徽展开建设，把日常秩序与组织象征同时纳入制度视野。",
    outcomes: [
      "通过诱饵排查计划处理外卖失窃问题。",
      "明确公章的象征地位与使用原则。",
      "完成蓝金标志徽的制度化描述。",
    ],
    tags: ["财产纪律", "公章", "视觉识别"],
    relatedDocumentSlug: "discipline-briefing",
  },
];

export const contactTopics = [
  {
    title: "制度修订建议",
    description: "针对公约、组织机制或纪律条款提出补充和修订意见。",
  },
  {
    title: "室史档案补录",
    description: "补充时间线事件、会议纪要、奖项信息和历史材料。",
  },
  {
    title: "文告协作与转载",
    description: "沟通站点内容共编、摘录转载和制度说明用途。",
  },
];

export const contactPrinciples = [
  "站内留言优先用于制度修订、档案补录和公开内容协作。",
  "请留下可回联邮箱，常务会议或相关委员将按议题处理。",
  "涉及成员隐私、未公开决议和内部事务的内容不会在站外披露。",
];

export function getDocumentBySlug(slug: string) {
  return studioDocuments.find((document) => document.slug === slug);
}
