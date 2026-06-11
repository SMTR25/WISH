// ========================================
// NCT WISH - 页面逻辑（按需初始化）
// ========================================

let currentPhotoIndex = 0;
let photoCarouselTrack = null;
let photoIndicatorsNew = null;
let photoInterval = null;
let currentGroupTheme = 'blue';
let currentGroupSlide = 0;
let currentVideoPage = 0;
const videosPerPage = 8;
let allVideos = [...fanVideosData];
let messagesData = JSON.parse(localStorage.getItem('nct_wish_messages')) || [];

// ========================================
// 页面初始化（按需加载）
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initActiveNav();

    if (document.getElementById('photo-carousel-track')) renderGroupIntro();
    if (document.getElementById('members-container')) renderMembers();
    if (document.getElementById('merchandise-container')) renderMerchandise();
    if (document.getElementById('mv-container')) renderMVs();
    if (document.getElementById('videos-container')) renderFanVideos();
    if (document.getElementById('messages-container')) {
        renderMessages();
        initMessageForm();
    }

    initBackToTop();
    initScrollSpy();
});

// ========================================
// 导航栏
// ========================================
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (!mobileMenuBtn || !navMenu) return;

    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
}

function initActiveNav() {
    const page = document.body.dataset.page;
    if (!page) return;
    document.querySelectorAll('.nav-menu a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === page);
    });
}

// ========================================
// 团体介绍 + 照片轮播
// ========================================
function renderGroupIntro() {
    const carouselTrack = document.getElementById('photo-carousel-track');
    const indicatorsContainer = document.getElementById('carousel-indicators-new');
    if (!carouselTrack || !indicatorsContainer) return;

    const allPhotos = [
        ...groupPhotosData.blue,
        ...groupPhotosData.green,
        ...groupPhotosData.pink,
        ...groupPhotosData.white
    ];

    carouselTrack.innerHTML = allPhotos.map(photo => `
        <div class="carousel-slide-photo">
            <img src="${photo.image}" alt="${photo.title}" loading="lazy"
                 onerror="this.src='images/collage1.jpg';">
            <div class="carousel-slide-info">
                <h3>${photo.title}</h3>
                <p>${photo.caption || ''}</p>
            </div>
        </div>
    `).join('');

    indicatorsContainer.innerHTML = allPhotos.map((_, i) => `
        <div class="carousel-indicator-new ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
    `).join('');

    initPhotoCarousel(allPhotos.length);
}

function initPhotoCarousel(totalPhotos) {
    photoCarouselTrack = document.getElementById('photo-carousel-track');
    photoIndicatorsNew = document.getElementById('carousel-indicators-new');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (!photoCarouselTrack || !prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
        updatePhotoCarousel();
        resetPhotoInterval(totalPhotos);
    });

    nextBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
        updatePhotoCarousel();
        resetPhotoInterval(totalPhotos);
    });

    photoIndicatorsNew.addEventListener('click', e => {
        if (e.target.classList.contains('carousel-indicator-new')) {
            currentPhotoIndex = parseInt(e.target.dataset.index);
            updatePhotoCarousel();
            resetPhotoInterval(totalPhotos);
        }
    });

    startPhotoInterval(totalPhotos);
}

function updatePhotoCarousel() {
    if (!photoCarouselTrack || !photoIndicatorsNew) return;
    photoCarouselTrack.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
    photoIndicatorsNew.querySelectorAll('.carousel-indicator-new').forEach((ind, i) => {
        ind.classList.toggle('active', i === currentPhotoIndex);
    });
}

function startPhotoInterval(total) {
    photoInterval = setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % total;
        updatePhotoCarousel();
    }, 4000);
}

function resetPhotoInterval(total) {
    clearInterval(photoInterval);
    startPhotoInterval(total);
}

// ========================================
// 成员渲染
// ========================================
function renderMembers() {
    const container = document.getElementById('members-container');
    container.innerHTML = membersData.map(member => `
        <div class="member-detailed-card" style="--theme-color: ${member.themeColor};">
            <div class="member-left-section">
                <div class="member-avatar-large">
                    <img src="${member.image}" alt="${member.name}" loading="lazy"
                         onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'member-emoji-display large\\'>${member.emoji}</div>';">
                </div>
                <div class="member-basic-info">
                    <h3 class="member-name-large">${member.name}</h3>
                    <p class="member-name-full">${member.nameKr || member.nameJP} | ${member.nameCn}</p>
                    <span class="member-position-badge" style="background: linear-gradient(135deg, ${member.themeColor}, #fff); color: #000;">${member.position}</span>
                    <div class="member-details-list">
                        <div class="detail-item"><span class="detail-icon">🎂</span><span>${member.birthday}</span></div>
                        <div class="detail-item"><span class="detail-icon">📍</span><span>${member.birthplace}</span></div>
                        <div class="detail-item"><span class="detail-icon">${member.emoji}</span><span>代表符号</span></div>
                    </div>
                    <div class="member-traits-grid">
                        ${member.traits.map(t => `<span class="trait-tag-large">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="member-right-section">
                <div class="member-description" style="background: linear-gradient(135deg, ${member.themeColor}, #fff); z-index: 1; position: relative;">
                    <h4 class="description-title">关于 ${member.name}</h4>
                    <p class="description-text">${member.description}</p>
                </div>
                ${member.tmi ? `
                <div class="member-tmi-box">
                    <h4 class="tmi-title">进入公司的故事</h4>
                    <p class="tmi-content">${member.tmi}</p>
                </div>` : ''}
                <div class="member-recommended-video">
                    <h4 class="video-recommend-title">🎬 推荐视频</h4>
                    <a href="${member.recommendedVideo.url.replace(/&/g, '&amp;')}" target="_blank" class="recommended-video-card" onclick="event.stopPropagation();">
                        <div class="video-thumb">
                            <img src="${member.recommendedVideo.thumbnail}" alt="${member.recommendedVideo.title}" loading="lazy"
                                 onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'play-icon-large\\'>▶️</span>';">
                            <span class="play-overlay">▶️</span>
                        </div>
                        <div class="video-info-small">
                            <div>
                                <h5>${member.recommendedVideo.title}</h5>
                                <p>点击观看完整视频 →</p>
                            </div>
                            <div class="video-actions">
                                <button class="action-btn" onclick="toggleLike(event, this)"><span class="icon">❤️</span><span class="text">喜欢</span></button>
                                <button class="action-btn" onclick="toggleFavorite(event, this)"><span class="icon">⭐</span><span class="text">收藏</span></button>
                                <button class="action-btn" onclick="shareVideo(event, '${member.name}', '${member.recommendedVideo.title}')"><span class="icon">🔗</span><span class="text">分享</span></button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// 周边商品渲染
// ========================================
function renderMerchandise() {
    const container = document.getElementById('merchandise-container');
    container.innerHTML = merchandiseData.map(item => `
        <a href="${item.link}" target="_blank" class="merch-card">
            <div class="merch-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy"
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
// MV渲染
// ========================================
function renderMVs() {
    const container = document.getElementById('mv-container');
    container.innerHTML = mvData.map(mv => `
        <a href="${mv.link}" target="_blank" class="mv-card">
            <div class="mv-thumbnail">
                <img src="${mv.image}" alt="${mv.title}" loading="lazy"
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'play-icon\\'>▶️</span>';">
            </div>
            <div class="mv-info">
                <h3 class="mv-title">${mv.title}</h3>
                <p class="mv-date">📅 ${mv.date}</p>
            </div>
        </a>
    `).join('');
}

// ========================================
// 安利视频
// ========================================
function renderFanVideos() {
    const container = document.getElementById('videos-container');
    container.innerHTML = allVideos.map(video => `
        <a href="${video.link}" target="_blank" class="video-waterfall-card">
            <div class="video-waterfall-thumb">
                <img src="${video.image}" alt="${video.title}" loading="lazy"
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'play-icon\\'>🎥</span><span class=\\'video-badge\\'>${video.badge}</span>';">
                <span class="video-badge">${video.badge}</span>
                <div class="video-hover-overlay"><span class="play-icon-large">▶️</span></div>
            </div>
            <div class="video-waterfall-info">
                <h3 class="video-waterfall-title">${video.title}</h3>
                <p class="video-waterfall-desc">${video.description}</p>
            </div>
        </a>
    `).join('');
}

// ========================================
// B站 API（降级方案）
// ========================================
async function fetchBilibiliVideos(keyword, page) {
    for (let i = 0; i < PROXY_SERVERS.length; i++) {
        try {
            const proxyUrl = PROXY_SERVERS[i];
            const apiUrl = encodeURIComponent(
                `https://api.bilibili.com/x/web-interface/search/type?keyword=${encodeURIComponent(keyword)}&page=${page}&search_type=video&page_size=8`
            );
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            if (!data.contents) continue;
            const apiData = JSON.parse(data.contents);
            if (!apiData.data || !apiData.data.result || apiData.data.result.length === 0) return [];
            return apiData.data.result.slice(0, 8).map(video => ({
                id: video.bvid,
                title: video.title.replace(/<[^>]+>/g, '').substring(0, 50),
                description: `${video.author || 'UP主'} · ${formatPlayCount(video.play || 0)}播放`,
                badge: '🔥B站',
                image: video.pic ? (video.pic.startsWith('http') ? video.pic : `https:${video.pic}`) : 'images/安利1.jpg',
                link: `https://www.bilibili.com/video/${video.bvid}`
            }));
        } catch (error) {
            if (i === PROXY_SERVERS.length - 1) return [];
        }
    }
    return [];
}

function formatPlayCount(count) {
    if (count >= 100000000) return (count / 100000000).toFixed(1) + '亿';
    if (count >= 10000) return (count / 10000).toFixed(1) + '万';
    return count.toString();
}

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
// 留言板
// ========================================
function renderMessages() {
    const container = document.getElementById('messages-container');
    const countEl = document.getElementById('message-count');
    if (countEl) countEl.textContent = messagesData.length;

    if (messagesData.length === 0) {
        container.innerHTML = '<p class="empty-message">暂无留言，快来写下第一条吧！💌</p>';
        return;
    }

    const sorted = [...messagesData].reverse();
    container.innerHTML = sorted.map(msg => `
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

function initMessageForm() {
    const form = document.getElementById('message-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('fan-name').value.trim();
        const content = document.getElementById('message-content').value.trim();

        if (!username || !content) { alert('请填写昵称和留言内容哦！'); return; }
        if (username.length > 20) { alert('昵称不能超过20个字符！'); return; }
        if (content.length > 500) { alert('留言内容不能超过500个字符！'); return; }

        const newMessage = {
            id: Date.now(),
            username: username,
            avatar: getAvatarEmoji(username),
            time: formatCurrentTime(),
            content: content
        };

        messagesData.push(newMessage);
        localStorage.setItem('nct_wish_messages', JSON.stringify(messagesData));
        renderMessages();
        form.reset();
        showNotification('留言发布成功！感谢您的支持 💖');
    });
}

// ========================================
// 工具函数
// ========================================
function getAvatarEmoji(username) {
    const emojis = ['⭐', '🌟', '💫', '✨', '🎵', '🎶', '💖', '💝', '🌈', '🦋', '🌸', '🎀'];
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    return emojis[Math.abs(hash) % emojis.length];
}

function formatCurrentTime() {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

function showNotification(message) {
    const n = document.createElement('div');
    n.className = 'notification';
    n.textContent = message;
    document.body.appendChild(n);
    setTimeout(() => n.classList.add('show'), 100);
    setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 300); }, 3000);
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
        btn.classList.toggle('visible', window.pageYOffset > 300);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;
    const navLinks = document.querySelectorAll('.nav-menu a');
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });
}

// ========================================
// 视频互动
// ========================================
function toggleLike(event, btn) {
    event.preventDefault();
    event.stopPropagation();
    btn.classList.toggle('active');
    const icon = btn.querySelector('.icon');
    const text = btn.querySelector('.text');
    if (btn.classList.contains('active')) {
        icon.textContent = '💖'; text.textContent = '已喜欢';
        showNotification('已添加到喜欢列表! 💖');
    } else {
        icon.textContent = '❤️'; text.textContent = '喜欢';
    }
}

function toggleFavorite(event, btn) {
    event.preventDefault();
    event.stopPropagation();
    btn.classList.toggle('active');
    const icon = btn.querySelector('.icon');
    const text = btn.querySelector('.text');
    if (btn.classList.contains('active')) {
        icon.textContent = '⭐'; text.textContent = '已收藏';
        showNotification('已收藏到收藏夹! ⭐');
    } else {
        icon.textContent = '⭐'; text.textContent = '收藏';
    }
}

function shareVideo(event, memberName, videoTitle) {
    event.preventDefault();
    event.stopPropagation();
    const shareText = `推荐你观看 NCT WISH ${memberName} 的视频: ${videoTitle}`;
    if (navigator.share) {
        navigator.share({ title: `NCT WISH - ${memberName}`, text: shareText, url: window.location.href }).catch(() => {});
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('已复制到剪贴板，快去分享吧! 🔗');
        }).catch(() => showNotification('分享功能暂不可用，请稍后再试'));
    }
}

// 滚动触发初始化
function initScrollTrigger() { }
initScrollTrigger();
