// ========================================
// NCT WISH 成员数据
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
        themeColor: "#E6D7FF", // 淡紫色
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
        themeColor: "#FFE6E6", // 淡红色
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
        themeColor: "#D7F0FF", // 淡蓝色
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
        themeColor: "#E6FFE6", // 淡绿色
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
        themeColor: "#FFF9E6", // 淡黄色
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
        themeColor: "#FFE6F5", // 淡粉色
        traits: ["视觉中心", "精致五官", "时尚感强", "舞台魅力"],
        description: "SAKUYA，忙内（队内最小）,拥有精致的五官和出众的时尚感。他的外貌如同漫画中走出的美少年,每次亮相都能引发热议。在舞台上,他用独特的魅力征服了无数粉丝。",
        tmi: "妈妈在网上发了saku的照片被看见之后联系了，然后发了saku的唱歌视频过去就过了",
        recommendedVideo: {
            title: "SAKUYA 六萌一",
            url: "https://www.bilibili.com/video/BV1qAdfY3EK8?spm_id_from=333.788.recommend_more_video.5&trackid=web_related_0.router-related-2589621-cb5r7.1781178612820.98&vd_source=fe981a10e0c3d977a588102e1ae67e4f",
            thumbnail: "images/sakuya1.png"
        }
    }
];

// 照片轮播相关变量
let currentPhotoIndex = 0;
let photoCarouselTrack = null;
let photoIndicatorsNew = null;
let photoInterval = null;

// ========================================
// 团体美照数据
// ========================================
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

let currentGroupTheme = 'blue';
let currentGroupSlide = 0;

// ========================================
// 官方娃娃周边数据
// ⚠️ 注意：请将 link 字段替换为你的实际购买链接
// ========================================
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

// ========================================
// MV作品数据
// ⚠️ 注意：请将 link 字段替换为你的实际视频链接
// ========================================
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
    },

];

// ========================================
// 安利视频数据（初始数据，后续通过API自动补充）
// ⚠️ 注意：请将 link 字段替换为你的实际视频链接
// ========================================
const fanVideosData = [
    {
        id: 1,
        title: "NCT WISH 入坑指南",
        description: "WISH -花园宝宝",
        badge: "推荐",
        // ️ 在这里添加图片路径
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

// 智能推荐视频池（模拟自动推荐系统，作为API失败时的降级方案）
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

// B站搜索关键词池
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

let currentVideoPage = 0;
const videosPerPage = 8;
let allVideos = [...fanVideosData]; // 合并所有视频数据

// ========================================
// 粉丝留言数据（从本地存储读取）
// ========================================
let messagesData = JSON.parse(localStorage.getItem('nct_wish_messages')) || [];

// ========================================
// 页面初始化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderGroupIntro();
    renderMembers();
    renderMerchandise();
    renderMVs();
    renderFanVideos();
    renderMessages();
    initMessageForm();
    initBackToTop();
    initScrollSpy();
});

// ========================================
// 导航栏功能
// ========================================
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    // 移动端菜单切换
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 点击导航链接后关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// 渲染团体美照 - 单张居中轮播
// ========================================
function renderGroupPhotos() {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    
    const photos = groupPhotosData[currentGroupTheme];
    
    track.innerHTML = photos.map((photo, index) => {
        let position = '';
        if (index === currentGroupSlide) {
            position = 'active';
        } else if (index === (currentGroupSlide - 1 + photos.length) % photos.length) {
            position = 'prev';
        } else if (index === (currentGroupSlide + 1) % photos.length) {
            position = 'next';
        } else {
            position = 'hidden';
        }
        
        return `
            <div class="carousel-slide ${position}" data-index="${index}">
                <img src="${photo.image}" alt="${photo.title}" 
                     onerror="this.parentElement.innerHTML='<div class=\'photo-placeholder\'>NCT WISH</div>';">
                <div class="slide-info">
                    <span class="slide-title">${photo.title}</span>
                    <span class="slide-caption">${photo.caption}</span>
                </div>
            </div>
        `;
    }).join('');
    
    renderCarouselIndicators();
}

// 渲染指示器
function renderCarouselIndicators() {
    const indicators = document.getElementById('carousel-indicators');
    if (!indicators) return;
    
    const photos = groupPhotosData[currentGroupTheme];
    
    indicators.innerHTML = photos.map((_, index) => `
        <span class="carousel-indicator ${index === currentGroupSlide ? 'active' : ''}" 
              data-index="${index}"></span>
    `).join('');
    
    indicators.querySelectorAll('.carousel-indicator').forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentGroupSlide = parseInt(this.dataset.index);
            renderGroupPhotos();
        });
    });
}

// 更新轮播位置
function updateCarousel(direction) {
    const photos = groupPhotosData[currentGroupTheme];
    
    console.log('updateCarousel 被调用:', direction, '当前索引:', currentGroupSlide, '总数:', photos.length);
    
    if (direction === 'next') {
        currentGroupSlide = (currentGroupSlide + 1) % photos.length;
    } else {
        currentGroupSlide = (currentGroupSlide - 1 + photos.length) % photos.length;
    }
    
    console.log('新的索引:', currentGroupSlide);
    
    renderGroupPhotos();
}

// ========================================
// 渲染团体介绍
// ========================================
function renderGroupIntro() {
    const carouselTrack = document.getElementById('photo-carousel-track');
    const indicatorsContainer = document.getElementById('carousel-indicators-new');
    if (!carouselTrack || !indicatorsContainer) return;
    
    // 使用所有团综照片
    const allPhotos = [
        ...groupPhotosData.blue,
        ...groupPhotosData.green,
        ...groupPhotosData.pink,
        ...groupPhotosData.white
    ];
    
    // 渲染轮播幻灯片
    carouselTrack.innerHTML = allPhotos.map((photo, index) => `
        <div class="carousel-slide-photo">
            <img src="${photo.image}" alt="${photo.title}" 
                 onerror="this.src='images/collage1.jpg';">
            <div class="carousel-slide-info">
                <h3>${photo.title}</h3>
                <p>${photo.caption || ''}</p>
            </div>
        </div>
    `).join('');
    
    // 渲染指示器
    indicatorsContainer.innerHTML = allPhotos.map((_, index) => `
        <div class="carousel-indicator-new ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');
    
    // 初始化轮播控制
    initPhotoCarousel(allPhotos.length);
}

// 显示照片大图
function showPhotoModal(photo) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${photo.image}" alt="${photo.title}">
            <div class="modal-info">
                <h3>${photo.title}</h3>
                <p>${photo.caption}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 显示动画
    setTimeout(() => modal.classList.add('show'), 10);
    
    // 关闭事件
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// ========================================
// 照片轮播控制
// ========================================
function initPhotoCarousel(totalPhotos) {
    photoCarouselTrack = document.getElementById('photo-carousel-track');
    photoIndicatorsNew = document.getElementById('carousel-indicators-new');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (!photoCarouselTrack || !prevBtn || !nextBtn) return;
    
    // 上一张
    prevBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
        updatePhotoCarousel();
        resetPhotoInterval();
    });
    
    // 下一张
    nextBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
        updatePhotoCarousel();
        resetPhotoInterval();
    });
    
    // 指示器点击
    photoIndicatorsNew.addEventListener('click', (e) => {
        if (e.target.classList.contains('carousel-indicator-new')) {
            currentPhotoIndex = parseInt(e.target.dataset.index);
            updatePhotoCarousel();
            resetPhotoInterval();
        }
    });
    
    // 自动播放
    startPhotoInterval(totalPhotos);
}

function updatePhotoCarousel() {
    if (!photoCarouselTrack || !photoIndicatorsNew) return;
    
    // 更新轨道位置
    photoCarouselTrack.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
    
    // 更新指示器
    const indicators = photoIndicatorsNew.querySelectorAll('.carousel-indicator-new');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentPhotoIndex);
    });
}

function startPhotoInterval(totalPhotos) {
    photoInterval = setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
        updatePhotoCarousel();
    }, 4000); // 每4秒切换一张
}

function resetPhotoInterval(totalPhotos) {
    clearInterval(photoInterval);
    startPhotoInterval(totalPhotos);
}

// ========================================
// 成员手绘符号SVG
// ========================================
function getMemberHandDrawnSymbol(emoji) {
    // 根据emoji返回对应的手绘线条风格SVG
    const symbolMap = {
        '': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#98d8c8" stroke-width="3" stroke-linecap="round">
                    <!-- 郁金香花茎 -->
                    <path d="M100 180 Q100 150 100 120" />
                    <!-- 叶子 -->
                    <path d="M100 160 Q70 140 60 120" />
                    <path d="M100 150 Q130 130 140 110" />
                    <!-- 花朵 -->
                    <path d="M100 120 Q85 100 90 80 Q95 60 100 50 Q105 60 110 80 Q115 100 100 120" />
                    <path d="M100 120 Q80 110 75 90 Q70 70 85 60" />
                    <path d="M100 120 Q120 110 125 90 Q130 70 115 60" />
                    <!-- 花瓣细节 -->
                    <path d="M90 80 Q95 70 100 65 Q105 70 110 80" />
                </g>
              </svg>`,
        '🐿️': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#ff9999" stroke-width="3" stroke-linecap="round">
                    <!-- 松鼠尾巴 -->
                    <path d="M120 80 Q140 60 150 80 Q160 100 140 110 Q120 120 110 100" />
                    <!-- 身体 -->
                    <ellipse cx="100" cy="130" rx="30" ry="40" />
                    <!-- 头部 -->
                    <circle cx="100" cy="90" r="20" />
                    <!-- 耳朵 -->
                    <path d="M85 80 L80 65 L90 75" />
                    <path d="M115 80 L120 65 L110 75" />
                    <!-- 眼睛 -->
                    <circle cx="95" cy="88" r="2" fill="#ff9999" />
                    <circle cx="105" cy="88" r="2" fill="#ff9999" />
                    <!-- 鼻子 -->
                    <circle cx="100" cy="95" r="2" fill="#ff9999" />
                    <!-- 手 -->
                    <path d="M75 120 Q65 115 60 125" />
                    <path d="M125 120 Q135 115 140 125" />
                </g>
              </svg>`,
        '⭐️': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#ffd700" stroke-width="3" stroke-linecap="round">
                    <!-- 星星 -->
                    <path d="M100 40 L115 75 L150 80 L125 105 L130 140 L100 125 L70 140 L75 105 L50 80 L85 75 Z" />
                    <!-- 闪光 -->
                    <path d="M160 50 L170 40 M165 55 L175 50" />
                    <path d="M40 150 L50 140 M45 155 L55 150" />
                    <!-- 小星星 -->
                    <path d="M150 140 L153 147 L160 150 L153 153 L150 160 L147 153 L140 150 L147 147 Z" />
                    <path d="M50 60 L52 65 L57 67 L52 69 L50 74 L48 69 L43 67 L48 65 Z" />
                </g>
              </svg>`,
        '🎵': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#ffaa66" stroke-width="3" stroke-linecap="round">
                    <!-- 音符 -->
                    <path d="M80 150 L80 80 Q80 60 100 60 Q120 60 120 80 Q120 100 100 100 Q80 100 80 80" />
                    <path d="M120 80 L120 60 Q120 40 140 40 Q160 40 160 60 Q160 80 140 80 Q120 80 120 60" />
                    <!-- 连接线 -->
                    <path d="M80 80 L120 80" />
                    <!-- 装饰音符 -->
                    <path d="M60 120 L60 100 Q60 90 70 90 Q80 90 80 100 Q80 110 70 110 Q60 110 60 100" />
                    <path d="M140 130 L140 110 Q140 100 150 100 Q160 100 160 110 Q160 120 150 120 Q140 120 140 110" />
                </g>
              </svg>`,
        '🦭': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#66b3ff" stroke-width="3" stroke-linecap="round">
                    <!-- 海豹身体 -->
                    <ellipse cx="100" cy="120" rx="50" ry="30" />
                    <!-- 头部 -->
                    <circle cx="100" cy="80" r="25" />
                    <!-- 鳍 -->
                    <path d="M50 120 Q30 110 25 130 Q30 140 50 130" />
                    <path d="M150 120 Q170 110 175 130 Q170 140 150 130" />
                    <!-- 眼睛 -->
                    <circle cx="90" cy="75" r="3" fill="#66b3ff" />
                    <circle cx="110" cy="75" r="3" fill="#66b3ff" />
                    <!-- 鼻子 -->
                    <circle cx="100" cy="85" r="3" fill="#66b3ff" />
                    <!-- 胡须 -->
                    <path d="M85 85 L70 80" />
                    <path d="M85 88 L70 90" />
                    <path d="M115 85 L130 80" />
                    <path d="M115 88 L130 90" />
                </g>
              </svg>`,
        '🥐': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#ffb366" stroke-width="3" stroke-linecap="round">
                    <!-- 羊角面包主体 -->
                    <path d="M60 120 Q70 80 100 70 Q130 80 140 120 Q135 140 120 150 Q100 155 80 150 Q65 140 60 120" />
                    <!-- 层次纹理 -->
                    <path d="M70 110 Q80 90 100 85 Q120 90 130 110" />
                    <path d="M75 125 Q85 105 100 100 Q115 105 125 125" />
                    <path d="M80 140 Q90 125 100 120 Q110 125 120 140" />
                    <!-- 装饰 -->
                    <path d="M90 60 L95 50" />
                    <path d="M110 60 L105 50" />
                    <!-- 小点 -->
                    <circle cx="85" cy="130" r="2" fill="#ffb366" />
                    <circle cx="115" cy="130" r="2" fill="#ffb366" />
                </g>
              </svg>`
    };
    
    return symbolMap[emoji] || `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#98d8c8" stroke-width="3" stroke-linecap="round">
                <circle cx="100" cy="100" r="40" />
                <path d="M80 100 L120 100" />
                <path d="M100 80 L100 120" />
            </g>
        </svg>
    `;
}

// ========================================
// 渲染成员卡片 - 详细版（每个成员独占一行）
// ========================================
function renderMembers() {
    const container = document.getElementById('members-container');
    
    container.innerHTML = membersData.map(member => `
        <div class="member-detailed-card" style="--theme-color: ${member.themeColor};">
            <div class="member-left-section">
                <div class="member-avatar-large">
                    <img src="${member.image}" alt="${member.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'member-emoji-display large\'>${member.emoji}</div>';">
                </div>
                <div class="member-basic-info">
                    <h3 class="member-name-large">${member.name}</h3>
                    <p class="member-name-full">${member.nameKr || member.nameJP} | ${member.nameCn}</p>
                    <span class="member-position-badge" style="background: linear-gradient(135deg, ${member.themeColor}, #fff); color: #000;">${member.position}</span>
                    <div class="member-details-list">
                        <div class="detail-item">
                            <span class="detail-icon">🎂</span>
                            <span>${member.birthday}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>${member.birthplace}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">${member.emoji}</span>
                            <span>代表符号</span>
                        </div>
                    </div>
                    <div class="member-traits-grid">
                        ${member.traits.map(trait => `<span class="trait-tag-large">${trait}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="member-right-section">
                <div class="member-description" style="background: linear-gradient(135deg, ${member.themeColor}, #fff); z-index: 1; position: relative;">
                    <h4 class="description-title">关于 ${member.name}</h4>
                    <p class="description-text">${member.description}</p>
                </div>
                
                <!-- TMI信息框 -->
                ${member.tmi ? `
                <div class="member-tmi-box">
                    <h4 class="tmi-title">进入公司的故事</h4>
                    <p class="tmi-content">${member.tmi}</p>
                </div>
                ` : ''}
                
                <div class="member-recommended-video">
                    <h4 class="video-recommend-title">🎬 推荐视频</h4>
                    <a href="${member.recommendedVideo.url.replace(/&/g, '&amp;')}" target="_blank" class="recommended-video-card" onclick="event.stopPropagation();">
                        <div class="video-thumb">
                            <img src="${member.recommendedVideo.thumbnail}" alt="${member.recommendedVideo.title}" 
                                 onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\'play-icon-large\'>▶️</span>';">
                            <span class="play-overlay">▶️</span>
                        </div>
                        <div class="video-info-small">
                            <div>
                                <h5>${member.recommendedVideo.title}</h5>
                                <p>点击观看完整视频 →</p>
                            </div>
                            <div class="video-actions">
                                <button class="action-btn" onclick="toggleLike(event, this)">
                                    <span class="icon">❤️</span>
                                    <span class="text">喜欢</span>
                                </button>
                                <button class="action-btn" onclick="toggleFavorite(event, this)">
                                    <span class="icon">⭐</span>
                                    <span class="text">收藏</span>
                                </button>
                                <button class="action-btn" onclick="shareVideo(event, '${member.name}', '${member.recommendedVideo.title}')">
                                    <span class="icon">🔗</span>
                                    <span class="text">分享</span>
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// 渲染周边商品
// ========================================
function renderMerchandise() {
    const container = document.getElementById('merchandise-container');
    
    container.innerHTML = merchandiseData.map(item => `
        <a href="${item.link}" target="_blank" class="merch-card">
            <div class="merch-image">
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML='${item.emoji}';">
            </div>
            <div class="merch-info">
                <h3 class="merch-name">${item.name}</h3>
                <p class="merch-desc">${item.description}</p>
                <span class="merch-link-hint">点击查看 👉</span>
            </div>
        </a>
    `).join('');
}

// ========================================
// 渲染MV列表
// ========================================
function renderMVs() {
    const container = document.getElementById('mv-container');
    
    container.innerHTML = mvData.map(mv => `
        <a href="${mv.link}" target="_blank" class="mv-card">
            <div class="mv-thumbnail">
                <img src="${mv.image}" alt="${mv.title}" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\'play-icon\'>▶️</span>';">
            </div>
            <div class="mv-info">
                <h3 class="mv-title">${mv.title}</h3>
                <p class="mv-date">📅 ${mv.date}</p>
            </div>
        </a>
    `).join('');
}

// ========================================
// 渲染安利视频 - 智能瀑布流
// ========================================
function renderFanVideos() {
    const container = document.getElementById('videos-container');
    
    // 使用瀑布流布局
    container.innerHTML = allVideos.map(video => `
        <a href="${video.link}" target="_blank" class="video-waterfall-card">
            <div class="video-waterfall-thumb">
                <img src="${video.image}" alt="${video.title}" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\'play-icon\'>🎥</span><span class=\'video-badge\'>${video.badge}</span>';">
                <span class="video-badge">${video.badge}</span>
                <div class="video-hover-overlay">
                    <span class="play-icon-large">▶️</span>
                </div>
            </div>
            <div class="video-waterfall-info">
                <h3 class="video-waterfall-title">${video.title}</h3>
                <p class="video-waterfall-desc">${video.description}</p>
            </div>
        </a>
    `).join('');
}

// ========================================
// B站API集成 - 搜索视频
// ========================================
// 多个备用代理地址
const PROXY_SERVERS = [
    'https://api.allorigins.win/get?url=',
    'https://api.codetabs.com/v1/proxy?uri=',
    'https://corsproxy.io/?'
];

async function fetchBilibiliVideos(keyword, page = 1) {
    // 尝试多个代理服务器
    for (let proxyIndex = 0; proxyIndex < PROXY_SERVERS.length; proxyIndex++) {
        try {
            const proxyUrl = PROXY_SERVERS[proxyIndex];
            const apiUrl = encodeURIComponent(
                `https://api.bilibili.com/x/web-interface/search/type?keyword=${encodeURIComponent(keyword)}&page=${page}&search_type=video&page_size=8`
            );
            
            console.log(`正在尝试代理 ${proxyIndex + 1}/${PROXY_SERVERS.length}: ${proxyUrl}`);
            console.log(`搜索关键词: ${keyword} (第${page}页)`);
            
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            
            // 解析返回数据
            if (!data.contents) {
                console.warn(`代理 ${proxyIndex + 1} 返回数据格式异常`);
                continue; // 尝试下一个代理
            }
            
            const apiData = JSON.parse(data.contents);
            
            if (!apiData.data || !apiData.data.result || apiData.data.result.length === 0) {
                console.warn(`未找到相关视频: ${keyword}`);
                return []; // 没有结果,不需要换代理
            }
            
            console.log(`✅ 代理 ${proxyIndex + 1} 成功!`);
            
            // 转换数据格式
            return apiData.data.result.slice(0, 8).map(video => ({
                id: video.bvid,
                title: video.title.replace(/<[^>]+>/g, '').substring(0, 50), // 移除HTML标签并限制长度
                description: `${video.author || 'UP主'} · ${formatPlayCount(video.play || 0)}播放`,
                badge: '🔥B站',
                image: video.pic ? (video.pic.startsWith('http') ? video.pic : `https:${video.pic}`) : 'images/安利1.jpg',
                link: `https://www.bilibili.com/video/${video.bvid}`
            }));
            
        } catch (error) {
            console.error(`❌ 代理 ${proxyIndex + 1} 失败:`, error.message);
            if (proxyIndex === PROXY_SERVERS.length - 1) {
                console.error('所有代理都失败了');
                return [];
            }
            // 继续尝试下一个代理
        }
    }
    
    return [];
}

// 格式化播放量
function formatPlayCount(count) {
    if (count >= 100000000) {
        return (count / 100000000).toFixed(1) + '亿';
    }
    if (count >= 10000) {
        return (count / 10000).toFixed(1) + '万';
    }
    return count.toString();
}

// 生成模拟推荐（降级方案）
function generateSmartRecommendations() {
    const startIndex = currentVideoPage * videosPerPage;
    
    for (let i = 0; i < videosPerPage; i++) {
        const recIndex = (startIndex + i) % smartRecommendations.length;
        const rec = smartRecommendations[recIndex];
        const randomImage = `images/安利${((startIndex + i) % 8) + 1}.${(startIndex + i) % 2 === 0 ? 'jpg' : 'png'}`;
        
        allVideos.push({
            id: fanVideosData.length + startIndex + i + 1,
            title: rec.title,
            description: rec.desc,
            badge: rec.badge,
            image: randomImage,
            link: `https://www.bilibili.com/video/BV1example${startIndex + i + 1}`
        });
    }
}

// ========================================
// 渲染粉丝留言
// ========================================
function renderMessages() {
    const container = document.getElementById('messages-container');
    const countElement = document.getElementById('message-count');
    
    // 更新留言数量
    if (countElement) {
        countElement.textContent = messagesData.length;
    }
    
    if (messagesData.length === 0) {
        container.innerHTML = '<p class="empty-message">暂无留言，快来写下第一条吧！💌</p>';
        return;
    }
    
    // 按时间倒序排列，最新的在前面
    const sortedMessages = [...messagesData].reverse();
    
    container.innerHTML = sortedMessages.map(msg => `
        <div class="message-card">
            <div class="message-header">
                <div class="message-avatar">${msg.avatar}</div>
                <div class="message-user">
                    <div class="message-username">${msg.username}</div>
                    <div class="message-time">${msg.time}</div>
                </div>
            </div>
            <p class="message-content">${msg.content}</p>
        </div>
    `).join('');
}

// ========================================
// 初始化留言表单
// ========================================
function initMessageForm() {
    const form = document.getElementById('message-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const username = document.getElementById('fan-name').value.trim();
        const content = document.getElementById('message-content').value.trim();
        
        // 验证输入
        if (!username || !content) {
            alert('请填写昵称和留言内容哦！');
            return;
        }
        
        if (username.length > 20) {
            alert('昵称不能超过20个字符！');
            return;
        }
        
        if (content.length > 500) {
            alert('留言内容不能超过500个字符！');
            return;
        }
        
        // 创建新留言
        const newMessage = {
            id: Date.now(),
            username: username,
            avatar: getAvatarEmoji(username),
            time: formatCurrentTime(),
            content: content
        };
        
        // 添加到数组
        messagesData.push(newMessage);
        
        // 保存到本地存储
        localStorage.setItem('nct_wish_messages', JSON.stringify(messagesData));
        
        // 重新渲染留言列表
        renderMessages();
        
        // 清空表单
        form.reset();
        
        // 显示成功提示
        showNotification('留言发布成功！感谢您的支持 💖');
        
        // 滚动到留言区顶部
        const messagesSection = document.getElementById('messages');
        if (messagesSection) {
            messagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// ========================================
// 根据用户名生成头像emoji
// ========================================
function getAvatarEmoji(username) {
    const emojis = ['⭐', '🌟', '💫', '✨', '🎵', '🎶', '💖', '💝', '🌈', '🦋', '🌸', '🎀'];
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    return emojis[Math.abs(hash) % emojis.length];
}

// ========================================
// 格式化当前时间
// ========================================
function formatCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// ========================================
// 显示通知提示
// ========================================
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // 3秒后隐藏并移除
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// 回到顶部功能
// ========================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// 滚动监听 - 导航栏高亮
// ========================================
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// 视频互动功能
// ========================================

// 点赞功能
function toggleLike(event, btn) {
    event.preventDefault();
    event.stopPropagation();
    
    btn.classList.toggle('active');
    const icon = btn.querySelector('.icon');
    const text = btn.querySelector('.text');
    
    if (btn.classList.contains('active')) {
        icon.textContent = '💖';
        text.textContent = '已喜欢';
        showNotification('已添加到喜欢列表! 💖');
    } else {
        icon.textContent = '❤️';
        text.textContent = '喜欢';
    }
}

// 收藏功能
function toggleFavorite(event, btn) {
    event.preventDefault();
    event.stopPropagation();
    
    btn.classList.toggle('active');
    const icon = btn.querySelector('.icon');
    const text = btn.querySelector('.text');
    
    if (btn.classList.contains('active')) {
        icon.textContent = '⭐';
        text.textContent = '已收藏';
        showNotification('已收藏到收藏夹! ⭐');
    } else {
        icon.textContent = '⭐';
        text.textContent = '收藏';
    }
}

// 分享功能
function shareVideo(event, memberName, videoTitle) {
    event.preventDefault();
    event.stopPropagation();
    
    // 创建分享文本
    const shareText = `推荐你观看 NCT WISH ${memberName} 的视频: ${videoTitle}`;
    
    // 尝试使用Web Share API
    if (navigator.share) {
        navigator.share({
            title: `NCT WISH - ${memberName}`,
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('分享失败:', err));
    } else {
        // 降级方案: 复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('已复制到剪贴板，快去分享吧! 🔗');
        }).catch(() => {
            showNotification('分享功能暂不可用，请稍后再试');
        });
    }
}

// ========================================
// 团体美照轮播初始化
// ========================================
function initGroupPhotoSlider() {
    console.log('initGroupPhotoSlider 初始化');
    
    // 只保留键盘控制和自动轮播，移除左右箭头按钮
    
    // 键盘左右键控制
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            console.log('⌨️ 键盘左键');
            updateCarousel('prev');
        } else if (e.key === 'ArrowRight') {
            console.log('⌨️ 键盘右键');
            updateCarousel('next');
        }
    });
    
    console.log('✅ 轮播初始化完成（仅底部指示器）');
}

// 初始化滚动触发
initScrollTrigger();
