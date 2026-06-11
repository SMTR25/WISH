// ========================================
// NCT WISH 数据定义（共享）
// ========================================

const membersData = [
    {
        id: 1, name: "SION", nameKr: "오시온", nameCn: "吴是温",
        birthday: "2002.05.11", birthplace: "韩国木浦", position: "队长",
        emoji: "🌷", image: "images/sion.jpg", themeColor: "#E6D7FF",
        traits: ["温柔可靠", "领导力强", "治愈笑容", "六笑一"],
        description: "作为NCT WISH的队长,SION以其温柔可靠的性格和出色的领导能力带领团队。他的笑容如春日暖阳般治愈,是全能的ACE成员。",
        tmi: "在ins看见了sion发的照片，私信的方式让sion觉得是骗子拒绝了，过了差不多1个月联系sion说自己是sm希望他来首尔面试，sion觉得首尔太远拒绝了sm就说要去木浦选拔他，在木浦找了间舞蹈室面试，然后通过进公司了",
        recommendedVideo: { title: "SION 个人直拍合集", url: "https://www.bilibili.com/video/BV16g5F6iEP9/", thumbnail: "images/sion1.png" }
    },
    {
        id: 2, name: "RIKU", nameJP: "前田陸", nameCn: "前田陆",
        birthday: "2003.06.28", birthplace: "日本福井", position: "主rap",
        emoji: "🐿️", image: "images/riku.jpg", themeColor: "#FFE6E6",
        traits: ["低音炮rapper", "舞蹈实力派", "酷帅外表", "反差萌"],
        description: "RIKU拥有独特的低音炮嗓音,是团队的主rap担当。外表酷帅的他其实有着可爱的反差萌。",
        tmi: "高中毕业之后参加日本旷野选秀进的sm",
        recommendedVideo: { title: "RIKU rap高光时刻", url: "https://www.bilibili.com/video/BV1cZ421z7qb/", thumbnail: "images/riku1.png" }
    },
    {
        id: 3, name: "YUSHI", nameJP: "得能勇志", nameCn: "得能勇志",
        birthday: "2004.04.05", birthplace: "日本东京", position: "主舞",
        emoji: "⭐", image: "images/yushi.jpg", themeColor: "#D7F0FF",
        traits: ["舞蹈天才", "优雅气质", "完美身材比例", "舞台精灵"],
        description: "YUSHI被誉为舞蹈天才,动作流畅优美,舞台表现力极强。作为主舞,他的舞蹈总是能吸引所有人的目光。",
        tmi: "14第一次试镜，15年第二次试镜，18年正式入社",
        recommendedVideo: { title: "YUSHI 舞蹈solo", url: "https://www.bilibili.com/video/BV1sM4m1Q7bR/", thumbnail: "images/yushi1.png" }
    },
    {
        id: 4, name: "JAEHEE", nameKR: "정재희", nameCn: "金栽禧",
        birthday: "2005.09.02", birthplace: "韩国首尔", position: "主唱",
        emoji: "🌳", image: "images/jaehee.jpg", themeColor: "#E6FFE6",
        traits: ["天籁之音", "情感丰富", "音乐才华", "温柔声线"],
        description: "JAEHEE拥有令人惊艳的天籁之音,音色清澈动人。作为主唱,他的声音是NCT WISH最具辨识度的标志之一。",
        tmi: "在校庆上和同学演唱了许阁老师hello歌被公司的人发现进的公司",
        recommendedVideo: { title: "JAEHEE 高音挑战", url: "https://www.bilibili.com/video/BV1aEYPzaEpa/", thumbnail: "images/jahee1.png" }
    },
    {
        id: 5, name: "RYO", nameJP: "廣瀬遼", nameCn: "广濑辽",
        birthday: "2007.08.04", birthplace: "日本大阪", position: "副唱",
        emoji: "🦭", image: "images/ryo.jpg", themeColor: "#FFF9E6",
        traits: ["全能忙内", "可爱爆棚", "学习能力强", "潜力无限"],
        description: "RYO是团队的忙内line,却展现出了超越年龄的成熟和实力。可爱的外表下隐藏着巨大的潜力,未来可期。",
        tmi: "和姐姐去看NCT127的演唱会，在买场周的时候被发现进了公司",
        recommendedVideo: { title: "RYO 成长记录", url: "https://www.bilibili.com/video/BV1hz421d7kb/", thumbnail: "images/ryo1.png" }
    },
    {
        id: 6, name: "SAKUYA", nameJP: "藤永咲哉", nameCn: "藤永咲哉",
        birthday: "2007.11.18", birthplace: "日本神奈川", position: "门面",
        emoji: "🥐", image: "images/sakuya.jpg", themeColor: "#FFE6F5",
        traits: ["视觉中心", "精致五官", "时尚感强", "舞台魅力"],
        description: "SAKUYA，忙内（队内最小）,拥有精致的五官和出众的时尚感。他的外貌如同漫画中走出的美少年。",
        tmi: "妈妈在网上发了saku的照片被看见之后联系了，然后发了saku的唱歌视频过去就过了",
        recommendedVideo: { title: "SAKUYA 六萌一", url: "https://www.bilibili.com/video/BV1qAdfY3EK8/", thumbnail: "images/sakuya1.png" }
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
    { id: 1, memberName: "SION", name: "SIONING", description: "SION专属棉花娃娃", emoji: "🌷", image: "images/sioning.jpg", link: "https://v.douyin.com/rTvJSnXLooo/" },
    { id: 2, memberName: "RIKU", name: "KURI", description: "RIKU专属棉花娃娃", emoji: "🐿️", image: "images/kuri.jpg", link: "https://v.douyin.com/qFJSQt1xjKM/" },
    { id: 3, memberName: "YUSHI", name: "奶茶猫", description: "YUSHI专属棉花娃娃", emoji: "⭐", image: "images/milktea.jpg", link: "https://v.douyin.com/2A48uvLv2Ks/" },
    { id: 4, memberName: "JAEHEE", name: "叮特里", description: "JAEHEE专属棉花娃娃", emoji: "🌳", image: "images/dtl.jpg", link: "https://v.douyin.com/5rk42fabKoI/" },
    { id: 5, memberName: "RYO", name: "辽辽", description: "RYO专属棉花娃娃", emoji: "🦭", image: "images/ryon.jpg", link: "https://v.douyin.com/9kQAT1B9XEE/" },
    { id: 6, memberName: "SAKUYA", name: "SAKUPANG", description: "SAKUYA专属棉花娃娃", emoji: "🥐", image: "images/sakupang.jpg", link: "https://v.douyin.com/DpIgCwoMUl0/" }
];

const mvData = [
    { id: 1, title: "WISH", date: "2024.02.28", image: "images/wish.jpg", link: "https://www.bilibili.com/video/BV1K2421M7Va/" },
    { id: 2, title: "Steady", date: "2024.09.23", image: "images/steady.jpg", link: "https://www.bilibili.com/video/BV1cZsteKEfW" },
    { id: 3, title: "poppop", date: "2025.04.10", image: "images/poppop.jpg", link: "https://www.bilibili.com/video/BV1PktXzkE5M" },
    { id: 4, title: "Surf", date: "2025.08.11", image: "images/surf.jpg", link: "https://www.bilibili.com/video/BV1QgoNBgEJB/" },
    { id: 5, title: "COLOR", date: "2025.09.01", image: "images/color1.jpg", link: "https://www.bilibili.com/video/BV1rvajzLEVQ" },
    { id: 6, title: "Ode to Love", date: "2026.04.20", image: "images/wish.jpg", link: "https://www.bilibili.com/video/BV1QgoNBgEJB" }
];

const fanVideosData = [
    { id: 1, title: "NCT WISH 入坑指南", description: "WISH -花园宝宝", badge: "推荐", image: "images/安利1.jpg", link: "https://v.douyin.com/sGYPWwIdQO8/" },
    { id: 2, title: "关于WISH的点点滴滴", description: "综艺下饭合集", badge: "热门", image: "images/安利2.jpg", link: "https://www.bilibili.com/video/BV1MZ4y1n7Uf/" },
    { id: 3, title: "NCTWISH 概念先导", description: "NCT的最后", badge: "精选", image: "images/安利3.png", link: "https://www.bilibili.com/video/BV1MZ4y1n7Uf/" },
    { id: 4, title: "爱你舞台", description: "六个小鬼", badge: "推荐", image: "images/安利4.png", link: "https://www.bilibili.com/video/BV1Py8vzNEmx/" },
    { id: 5, title: "SAKUYA 舞台直拍", description: "SAKUYA的舞台直拍 showcase", badge: "热门", image: "images/安利5.png", link: "https://www.bilibili.com/video/BV1DA8azvE1k" },
    { id: 6, title: "成员搞怪日常", description: "可爱的六名成员", badge: "精选", image: "images/安利6.png", link: "https://v.douyin.com/G9ZC0NiJaWs/" },
    { id: 7, title: "NCT WISH 综艺搞笑片段", description: "成员们的搞笑综艺表现", badge: "推荐", image: "images/安利7.png", link: "https://v.douyin.com/Y70yrUnZxlg/" },
    { id: 8, title: "wish的温馨瞬间", description: "背后的故事", badge: "热点", image: "images/安利8.png", link: "https://www.bilibili.com/video/BV1LV8bzAEGt/" }
];

// ========================================
// 唱片数据
// ========================================
const discographyData = [
    {
        id: 1, title: "WISH", type: "Single Album", date: "2024.02.28",
        image: "images/wish.jpg",
        tracks: ["WISH", "We Go Up!"]
    },
    {
        id: 2, title: "Songbird", type: "Digital Single", date: "2024.06.24",
        image: "images/wish.jpg",
        tracks: ["Songbird"]
    },
    {
        id: 3, title: "Steady", type: "1st Mini Album", date: "2024.09.24",
        image: "images/steady.jpg",
        tracks: ["Steady", "3 Minutes", "Dunk Shot", "On & On", "Supercute", "Skate", "Hands Up (Korean Ver.)"]
    },
    {
        id: 4, title: "poppop", type: "2nd Mini Album", date: "2025.04.10",
        image: "images/poppop.jpg",
        tracks: ["poppop", "Melt Inside My Pocket", "Design", "1000", "Silly Dance", "Still 3PM"]
    },
    {
        id: 5, title: "COLOR", type: "3rd Mini Album", date: "2025.09.01",
        image: "images/color1.jpg",
        tracks: ["COLOR", "Baby Blue", "Surf", "Cheat Code", "Videohood", "WICHU", "Reel-ationship"]
    },
    {
        id: 6, title: "WISHLIST", type: "Japan 1st Mini Album", date: "2026.01.14",
        image: "images/wish.jpg",
        tracks: ["Hello Mellow", "ZONE", "BUBBLE GUM", "Dreamcatcher", "SOMEDAY", "Good Morning", "poppop (Japanese Ver.)"]
    },
    {
        id: 7, title: "Ode to Love", type: "1st Full Album", date: "2026.04.20",
        image: "images/wish.jpg",
        tracks: ["2.0 (TWO POINT O)", "Ode to Love", "Sticky", "Feel The Beat", "Crush", "Street (2AM)", "Glow Up", "Everglow", "Don't Say You Love Me", "Voyage"]
    }
];

// ========================================
// 时间线数据
// ========================================
const timelineData = [
    { date: "2023.09", title: "NCT东京分队计划公布", desc: "SM娱乐宣布将通过NCT Universe : LASTART项目推出NCT最终分队", icon: "📢" },
    { date: "2024.01.18", title: "正式定名NCT WISH", desc: "官方宣布团名为NCT WISH，寓意'WISH for Our WISH'", icon: "⭐" },
    { date: "2024.02.21", title: "东京巨蛋Pre-debut表演", desc: "在SM娱乐东京巨蛋演唱会上首次公开亮相，表演出道曲WISH", icon: "🏟️" },
    { date: "2024.02.28", title: "正式出道", desc: "以单曲专辑《WISH》正式出道，主打曲WISH发布MV", icon: "🎉" },
    { date: "2024.03", title: "初舞台 + 初一位", desc: "在The Show和M Countdown获得出道后首个一位，成为最快获得一位的NCT分队", icon: "🏆" },
    { date: "2024.06", title: "发行Songbird", desc: "发行数码单曲《Songbird》，展现清新夏日风格", icon: "🐦" },
    { date: "2024.09", title: "首张迷你专辑Steady", desc: "发行1st Mini Album《Steady》，收录7首歌曲，展现成长中的音乐色彩", icon: "🎵" },
    { date: "2024.11", title: "年度新人奖", desc: "获得ASEA 2024 Best New Artist、K-World Dream Awards Super Rookie Award等多项新人奖", icon: "🥇" },
    { date: "2025.04", title: "poppop回归", desc: "发行2nd Mini Album《poppop》，在Music Bank获得一位", icon: "💿" },
    { date: "2025.09", title: "COLOR回归", desc: "发行3rd Mini Album《COLOR》，收录7首歌曲", icon: "🎨" },
    { date: "2025.10", title: "首次巡演", desc: "举办1st Concert Tour 'INTO THE WISH: Our WISH'，首尔、东京、台北等多地巡演", icon: "🎤" },
    { date: "2025.11", title: "MMA Top 10", desc: "获得2025 Melon Music Awards Top 10奖项", icon: "🏅" },
    { date: "2026.01", title: "日本1st Mini Album", desc: "发行日本首张迷你专辑《WISHLIST》，Hello Mellow作为主打曲", icon: "🇯🇵" },
    { date: "2026.04", title: "首张正规专辑", desc: "发行1st Full Album《Ode to Love》，收录10首歌曲，Ode to Love在Music Bank获得一位", icon: "💚" }
];

// ========================================
// 成就数据
// ========================================
const achievementsData = [
    { category: "音乐节目一位", items: [
        { date: "2024.03", show: "The Show", song: "WISH" },
        { date: "2024.03", show: "M Countdown", song: "WISH" },
        { date: "2024.10", show: "The Show", song: "Steady" },
        { date: "2025.04", show: "Music Bank", song: "poppop" },
        { date: "2025.04", show: "M Countdown", song: "poppop" },
        { date: "2025.08", show: "M Countdown", song: "Surf" },
        { date: "2025.09", show: "Music Bank", song: "COLOR" },
        { date: "2026.04", show: "Music Bank", song: "Ode to Love" },
        { date: "2026.04", show: "M Countdown", song: "Ode to Love" },
        { date: "2026.04", show: "Inkigayo", song: "Ode to Love" },
        { date: "2026.04", show: "Show Champion", song: "Ode to Love" },
    ]},
    { category: "颁奖典礼", items: [
        { date: "2024", award: "ASEA 2024 - Best New Artist" },
        { date: "2024", award: "K-World Dream Awards - Super Rookie Award" },
        { date: "2024", award: "Vietnam Brand of the Year - Male Idol Rookie" },
        { date: "2025", award: "Seoul Music Awards - Best Group" },
        { date: "2025", award: "K-World Dream Awards - 3项大奖" },
        { date: "2025", award: "Melon Music Awards - Top 10" },
    ]},
    { category: "里程碑", items: [
        { stat: "6.7M+", label: "累计专辑销量" },
        { stat: "11", label: "音乐节目一位" },
        { stat: "167M+", label: "YouTube总播放量" },
        { stat: "12", label: "Pop Songs入榜" },
    ]}
];

// ========================================
// 粉丝测试题数据
// ========================================
const quizData = [
    { q: "NCT WISH是NCT的第几支分队？", options: ["第四支", "第五支", "第六支", "第七支"], answer: 2 },
    { q: "NCT WISH的队长是谁？", options: ["RIKU", "YUSHI", "SION", "JAEHEE"], answer: 2 },
    { q: "NCT WISH的出道日期是？", options: ["2024.01.18", "2024.02.21", "2024.02.28", "2024.03.01"], answer: 2 },
    { q: "NCT WISH的首张正规专辑叫什么？", options: ["WISH", "Steady", "COLOR", "Ode to Love"], answer: 3 },
    { q: "哪位成员是通过日本旷野选秀进入SM的？", options: ["SION", "RIKU", "YUSHI", "SAKUYA"], answer: 1 },
    { q: "poppop是第几张迷你专辑？", options: ["1st", "2nd", "3rd", "4th"], answer: 1 },
    { q: "哪位成员是在校庆上被星探发现的？", options: ["YUSHI", "RYO", "JAEHEE", "SAKUYA"], answer: 2 },
    { q: "NCT WISH的组合寓意是？", options: ["梦想", "希望", "未来", "爱"], answer: 1 },
    { q: "忙内（年龄最小）是谁？", options: ["RYO", "JAEHEE", "SAKUYA", "YUSHI"], answer: 2 },
    { q: "3rd Mini Album的名称是？", options: ["Steady", "poppop", "COLOR", "WISHLIST"], answer: 2 },
];

// ========================================
// 照片墙数据
// ========================================
const galleryData = [
    ...Object.values(groupPhotosData).flat(),
    ...membersData.map(m => ({ id: `m${m.id}`, title: m.name, image: m.image, caption: m.nameCn })),
    { id: "g1", title: "Steady", image: "images/steady.jpg", caption: "1st Mini Album" },
    { id: "g2", title: "poppop", image: "images/poppop.jpg", caption: "2nd Mini Album" },
    { id: "g3", title: "COLOR", image: "images/color1.jpg", caption: "3rd Mini Album" },
    { id: "g4", title: "Surf", image: "images/surf.jpg", caption: "夏日清凉" },
];
