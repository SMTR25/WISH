// ========================================
// NCT WISH 数据定义（共享）
// ========================================

const membersData = [
    {
        id: 1,
        name: "SION",
        nameKr: "오시온",
        nameCn: "吴是温",
        birthday: "2002.05.11",
        birthplace: "韩国木浦",
        position: "队长",
        emoji: "🌷",
        image: "images/sion.jpg",
        themeColor: "#E6D7FF",
        traits: ["温柔可靠", "领导力强", "治愈笑容", "六笑一"],
        description: "作为NCT WISH的队长,SION以其温柔可靠的性格和出色的领导能力带领团队。他的笑容如春日暖阳般治愈,是全能的ACE成员。在舞台上展现强大的气场,私下里却是温暖的哥哥形象。",
        tmi: "在ins看见了sion发的照片，私信的方式让sion觉得是骗子拒绝了，过了差不多1个月联系sion说自己是sm希望他来首尔面试，sion觉得首尔太远拒绝了sm就说要去木浦选拔他，在木浦找了间舞蹈室面试，然后通过进公司了",
        recommendedVideo: {
            title: "SION 个人直拍合集",
            url: "https://www.bilibili.com/video/BV16g5F6iEP9/?spm_id_from=333.337.search-card.all.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f",
            thumbnail: "images/sion1.png"
        }
    },
    {
        id: 2,
        name: "RIKU",
        nameJP: "前田陸",
        nameCn: "前田陆",
        birthday: "2003.6.28",
        birthplace: "日本福井",
        position: "主rap",
        emoji: "️🐿️",
        image: "images/riku.jpg",
        themeColor: "#FFE6E6",
        traits: ["低音炮rapper", "舞蹈实力派", "酷帅外表", "反差萌"],
        description: "RIKU拥有独特的低音炮嗓音,是团队的主rap担当。他不仅rap实力出众,舞蹈也同样精彩。外表酷帅的他其实有着可爱的反差萌,经常在综艺中展现幽默风趣的一面。",
        tmi: "高中毕业之后参加日本旷野选秀进的sm",
        recommendedVideo: {
            title: "RIKU rap高光时刻",
            url: "https://www.bilibili.com/video/BV1cZ421z7qb/?spm_id_from=333.337.search-card.all.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f",
            thumbnail: "images/riku1.png"
        }
    },
    {
        id: 3,
        name: "YUSHI",
        nameJP: "得能勇志",
        nameCn: "得能勇志",
        birthday: "2004.04.05",
        birthplace: "日本东京",
        position: "主舞",
        emoji: "⭐",
        image: "images/yushi.jpg",
        themeColor: "#D7F0FF",
        traits: ["舞蹈天才", "优雅气质", "完美身材比例", "舞台精灵"],
        description: "YUSHI被誉为舞蹈天才,动作流畅优美,舞台表现力极强。他拥有完美的身材比例和优雅的气质,每一个动作都充满艺术感。作为主舞,他的舞蹈总是能吸引所有人的目光。",
        tmi: "14第一次试镜，15年第二次试镜，18年正式入社",
        recommendedVideo: {
            title: "YUSHI 舞蹈solo",
            url: "https://www.bilibili.com/video/BV1sM4m1Q7bR/?spm_id_from=333.337.search-card.all.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f",
            thumbnail: "images/yushi1.png"
        }
    },
    {
        id: 4,
        name: "JAEHEE",
        nameKR: "정재희",
        nameCn: "金栽禧",
        birthday: "2005.09.02",
        birthplace: "韩国首尔",
        position: "主唱",
        emoji: "🌳",
        image: "images/jaehee.jpg",
        themeColor: "#E6FFE6",
        traits: ["天籁之音", "情感丰富", "音乐才华", "温柔声线"],
        description: "JAEHEE拥有令人惊艳的天籁之音,音色清澈动人。他的演唱充满情感,能够深深打动听众的心。作为主唱,他的声音是NCT WISH最具辨识度的标志之一。",
        tmi: "在校庆上和同学演唱了许阁老师hello歌被公司的人发现进的公司",
        recommendedVideo: {
            title: "JAEHEE 高音挑战",
            url: "https://www.bilibili.com/video/BV1aEYPzaEpa/?spm_id_from=333.337.search-card.all.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f",
            thumbnail: "images/jahee1.png"
        }
    },
    {
        id: 5,
        name: "RYO",
        nameJP: "廣瀬遼",
        nameCn: "广濑辽",
        birthday: "2007.08.04",
        birthplace: "日本大阪",
        position: "🦭",
        emoji: "副唱",
        image: "images/ryo.jpg",
        themeColor: "#FFF9E6",
        traits: ["全能忙内", "可爱爆棚", "学习能力强", "潜力无限"],
        description: "RYO是团队的忙内line,却展现出了超越年龄的成熟和实力。他是全能型选手,vocal、dance、rap样样精通。可爱的外表下隐藏着巨大的潜力,未来可期。",
        tmi: "和姐姐去看NCT127的演唱会，在买场周的时候被发现进了公司",
        recommendedVideo: {
            title: "RYO 成长记录",
            url: "https://www.bilibili.com/video/BV1hz421d7kb/?spm_id_from=333.337.search-card.all.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f",
            thumbnail: "images/ryo1.png"
        }
    },
    {
        id: 6,
        name: "SAKUYA",
        nameJP: "藤永咲哉",
        nameCn: "藤永咲哉",
        birthday: "2007.11.18",
        birthplace: "日本神奈川",
        position: "门面",
        emoji: "🥐",
        image: "images/sakuya.jpg",
        themeColor: "#FFE6F5",
        traits: ["视觉中心", "精致五官", "时尚感强", "舞台魅力"],
        description: "SAKUYA，忙内（队内最小）,拥有精致的五官和出众的时尚感。他的外貌如同漫画中走出的美少年,每次亮相都能引发热议。在舞台上,他用独特的魅力征服了无数粉丝。",
        tmi: "妈妈在网上发了saku的照片被看见之后联系了，然后发了saku的唱歌视频过去就过了",
        recommendedVideo: {
            title: "SAKUYA 六萌一",
            url: "https://www.bilibili.com/video/BV1qAdfY3EK8?spm_id_from=333.788.recommend_more_video.5&trackid=web_related_0.router-related-2589621-bzdpg.1781015929479.233&vd_source=fe981a10e0c3d977a588102e1ae67e4f",
            thumbnail: "images/sakuya1.png"
        }
    }
];

const groupPhotosData = {
    blue: [
        { id: 1, title: "WHITE", image: "images/white.jpg", caption: "Cloudsabove" },
        { id: 2, title: "SUMMER", image: "images/summer.jpg", caption: "夏日时光" },
        { id: 3, title: "ANGEL", image: "images/Angel.jpg", caption: "天使降临" },
    ],
    green: [
        { id: 4, title: "SION", image: "images/Oh sion.jpg", caption: "SION个人照" },
        { id: 5, title: "RIKU", image: "images/Maeda riku.jpg", caption: "RIKU个人照" },
        { id: 6, title: "YUSHI", image: "images/Tukuno yushi.jpg", caption: "YUSHI个人照" },
        { id: 7, title: "JAEHEE", image: "images/Daeyoung.jpg", caption: "JAEHEE个人照" },
        { id: 8, title: "RYO", image: "images/Hirose ryo.jpg", caption: "RYO个人照" },
        { id: 9, title: "SAKUYA", image: "images/Fujinaga sakuya.jpg", caption: "SAKUYA个人照" },
    ],
    pink: [
        { id: 10, title: "BLACK", image: "images/black.jpg", caption: "DREAMcatcher" },
        { id: 11, title: "BLUE", image: "images/blue.jpg", caption: "BABYBLUE" },
        { id: 12, title: "BOY", image: "images/BOY.png", caption: "少年感" },
        { id: 13, title: "DREAM", image: "images/dream.jpg", caption: "BLUEdream" },
    ],
    white: [
        { id: 14, title: "FIRST", image: "images/First.jpg", caption: "初次见面" },
        { id: 15, title: "RUN", image: "images/RUN.jpg", caption: "奔跑吧" },
    ]
};

const merchandiseData = [
    {
        id: 1,
        memberName: "SION",
        name: "SIONING",
        description: "SION专属棉花娃娃",
        emoji: "🌷",
        image: "images/sioning.jpg",
        link: "https://v.douyin.com/rTvJSnXLooo/"
    },
    {
        id: 2,
        memberName: "RIKU",
        name: "KURI",
        description: "RIKU专属棉花娃娃",
        emoji: "🐿️",
        image: "images/kuri.jpg",
        link: "https://v.douyin.com/qFJSQt1xjKM/"
    },
    {
        id: 3,
        memberName: "YUSHI",
        name: "奶茶猫",
        description: "YUSHI专属棉花娃娃",
        emoji: "⭐",
        image: "images/milktea.jpg",
        link: "https://v.douyin.com/2A48uvLv2Ks/"
    },
    {
        id: 4,
        memberName: "JAEHEE",
        name: "叮特里",
        description: "JAEHEE专属棉花娃娃",
        emoji: "🌳",
        image: "images/dtl.jpg",
        link: "https://v.douyin.com/5rk42fabKoI/"
    },
    {
        id: 5,
        memberName: "RYO",
        name: "辽辽",
        description: "RYO专属棉花娃娃",
        emoji: "🦭",
        image: "images/ryon.jpg",
        link: "https://v.douyin.com/9kQAT1B9XEE/ "
    },
    {
        id: 6,
        memberName: "SAKUYA",
        name: "SAKUPANG",
        description: "SAKUYA专属棉花娃娃",
        emoji: "🥐",
        image: "images/sakupang.jpg",
        link: "https://v.douyin.com/DpIgCwoMUl0/ "
    }
];

const mvData = [
    {
        id: 1,
        title: "WISH - Official MV",
        date: "2024.02.27",
        image: "images/wish.jpg",
        link: "https://www.bilibili.com/video/BV1K2421M7Va/?spm_id_from=333.337.search-card.all.click"
    },
    {
        id: 2,
        title: "Steady - Official MV",
        date: "2024.09.23",
        image: "images/steady.jpg",
        link: "https://www.bilibili.com/video/BV1cZsteKEfW?spm_id_from=333.788.videopod.sections&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    },
    {
        id: 3,
        title: "NCT WISH《poppop》MV",
        date: "2025.04.10",
        image: "images/poppop.jpg",
        link: "https://www.bilibili.com/video/BV1PktXzkE5M?spm_id_from=333.788.videopod.sections&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    },
    {
        id: 5,
        title: "NCT WISH《Surf》MV",
        date: "2025.08.11",
        image: "images/surf.jpg",
        link: "https://www.bilibili.com/video/BV1QgoNBgEJB/?spm_id_from=333.337.search-card.all.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    },
    {
        id: 6,
        title: "NCT WISH《COLOR》MV",
        date: "2025.09.01",
        image: "images/color1.jpg",
        link: "https://www.bilibili.com/video/BV1rvajzLEVQ?spm_id_from=333.788.videopod.sections&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    },
    {
        id: 7,
        title: "NCT WISH《Ode to Love》MV",
        date: "2026.04.02",
        image: "images/ode to love.jpg",
        link: "https://www.bilibili.com/video/BV1QgoNBgEJB?spm_id_from=333.788.videopod.sections&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    }
];

const fanVideosData = [
    {
        id: 1,
        title: "NCT WISH 入坑指南",
        description: "WISH -花园宝宝",
        badge: "推荐",
        image: "images/安利1.jpg",
        link: "https://v.douyin.com/sGYPWwIdQO8/"
    },
    {
        id: 2,
        title: "关于WISH的点点滴滴",
        description: "综艺下饭合集",
        badge: "热门",
        image: "images/安利2.jpg",
        link: "https://www.bilibili.com/video/example2"
    },
    {
        id: 3,
        title: "NCTWISH 概念先导",
        description: "NCT的最后",
        badge: "精选",
        image: "images/安利3.png",
        link: "https://www.bilibili.com/video/BV1MZ4y1n7Uf/?spm_id_from=333.337.search-card.all.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    },
    {
        id: 4,
        title: "爱你舞台",
        description: "六个小鬼",
        badge: "推荐",
        image: "images/安利4.png",
        link: "https://www.bilibili.com/video/BV1Py8vzNEmx/?share_source=copy_web&vd_source=d2512552f54bc0abc8b48fd1d1517e63"
    },
    {
        id: 5,
        title: "SAKUYA 舞台直拍",
        description: "SAKUYA的舞台直拍 showcase",
        badge: "热门",
        image: "images/安利5.png",
        link: "https://www.bilibili.com/video/BV1DA8azvE1k?spm_id_from=333.788.recommend_more_video.1&trackid=web_related_0.router-related-2589621-bzdpg.1781015929479.233&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    },
    {
        id: 6,
        title: "成员搞怪日常",
        description: "可爱的六名成员",
        badge: "精选",
        image: "images/安利6.png",
        link: "https://v.douyin.com/G9ZC0NiJaWs/"
    },
    {
        id: 7,
        title: "NCT WISH 综艺搞笑片段",
        description: "成员们的搞笑综艺表现",
        badge: "推荐",
        image: "images/安利7.png",
        link: "https://v.douyin.com/Y70yrUnZxlg/"
    },
    {
        id: 8,
        title: "wish的温馨瞬间",
        description: "背后的故事",
        badge: "热点",
        image: "images/安利8.png",
        link: "https://www.bilibili.com/video/BV1LV8bzAEGt/?spm_id_from=333.1387.upload.video_card.click&vd_source=fe981a10e0c3d977a588102e1ae67e4f"
    }
];

const smartRecommendations = [
    { title: "NCT WISH 最新舞台", desc: "精彩表演瞬间", badge: "NEW" },
    { title: "成员个人直拍", desc: "专属focus镜头", badge: "HOT" },
    { title: "幕后花絮", desc: "不为人知的故事", badge: "独家" },
    { title: "粉丝reaction", desc: "真实情感反馈", badge: "感动" },
    { title: "舞蹈练习室", desc: "汗水与努力", badge: "励志" },
    { title: "采访合集", desc: "深入了解成员", badge: "深度" },
    { title: "直播回放", desc: "错过的精彩内容", badge: "回顾" },
    { title: "音乐作品赏析", desc: "专业解读", badge: "专业" },
    { title: "时尚画报拍摄", desc: "视觉盛宴", badge: "美学" },
    { title: "综艺节目集锦", desc: "欢乐时光", badge: "搞笑" }
];

const bilibiliKeywords = [
    'NCT WISH',
    'NCTWISH 舞台',
    'NCT WISH 搞笑',
    'SION 直拍',
    'RIKU rap',
    'YUSHI 舞蹈',
    'JAEHEE 高音',
    'RYO 可爱',
    'SAKUYA 娃娃'
];

const PROXY_SERVERS = [
    'https://api.allorigins.win/get?url=',
    'https://api.codetabs.com/v1/proxy?uri=',
    'https://corsproxy.io/?'
];
