// ========================================
// NCT WISH - 页面逻辑（按需初始化）
// ========================================

let currentPhotoIndex = 0;
let photoCarouselTrack = null;
let photoIndicatorsNew = null;
let photoInterval = null;
let allVideos = [...(typeof fanVideosData !== 'undefined' ? fanVideosData : [])];
let messagesData = JSON.parse(localStorage.getItem('nct_wish_messages')) || [];

// ========================================
// 页面初始化
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initActiveNav();

    if (document.getElementById('photo-carousel-track')) renderGroupIntro();
    if (document.getElementById('members-container')) renderMembers();
    if (document.getElementById('merchandise-container')) renderMerchandise();
    if (document.getElementById('mv-container')) renderMVs();
    if (document.getElementById('videos-container')) renderFanVideos();
    if (document.getElementById('messages-container')) { renderMessages(); initMessageForm(); }
    if (document.getElementById('discography-container')) renderDiscography();
    if (document.getElementById('timeline-container')) renderTimeline();
    if (document.getElementById('achievements-container')) renderAchievements();
    if (document.getElementById('quiz-container')) initQuiz();
    if (document.getElementById('poll-container')) initPoll();
    if (document.getElementById('gallery-container')) renderGallery();
    if (document.getElementById('member-detail-container')) renderMemberDetail();
    if (document.getElementById('cheer-canvas')) initCheer();

    initBackToTop();
});

// ========================================
// 导航栏
// ========================================
function initNavigation() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.nav-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => menu.classList.toggle('active'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('active')));
}

function initActiveNav() {
    const page = document.body.dataset.page;
    if (!page) return;
    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.toggle('active', a.dataset.page === page));
}

// ========================================
// 通用 HTML 转义
// ========================================
function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

// ========================================
// 团体介绍 + 照片轮播
// ========================================
function renderGroupIntro() {
    const track = document.getElementById('photo-carousel-track');
    const indicators = document.getElementById('carousel-indicators-new');
    if (!track || !indicators) return;
    const all = [...groupPhotosData.blue, ...groupPhotosData.green, ...groupPhotosData.pink, ...groupPhotosData.white];
    track.innerHTML = all.map(p => `<div class="carousel-slide-photo"><img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='images/collage1.jpg';"><div class="carousel-slide-info"><h3>${p.title}</h3><p>${p.caption || ''}</p></div></div>`).join('');
    indicators.innerHTML = all.map((_, i) => `<div class="carousel-indicator-new ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('');
    initPhotoCarousel(all.length);
}

function initPhotoCarousel(total) {
    photoCarouselTrack = document.getElementById('photo-carousel-track');
    photoIndicatorsNew = document.getElementById('carousel-indicators-new');
    const prev = document.getElementById('carousel-prev'), next = document.getElementById('carousel-next');
    if (!photoCarouselTrack || !prev || !next) return;
    prev.addEventListener('click', () => { currentPhotoIndex = (currentPhotoIndex - 1 + total) % total; updateCarousel(); resetInterval(total); });
    next.addEventListener('click', () => { currentPhotoIndex = (currentPhotoIndex + 1) % total; updateCarousel(); resetInterval(total); });
    photoIndicatorsNew.addEventListener('click', e => { if (e.target.classList.contains('carousel-indicator-new')) { currentPhotoIndex = +e.target.dataset.index; updateCarousel(); resetInterval(total); } });
    photoInterval = setInterval(() => { currentPhotoIndex = (currentPhotoIndex + 1) % total; updateCarousel(); }, 4000);
}

function updateCarousel() {
    if (!photoCarouselTrack) return;
    photoCarouselTrack.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
    if (photoIndicatorsNew) photoIndicatorsNew.querySelectorAll('.carousel-indicator-new').forEach((d, i) => d.classList.toggle('active', i === currentPhotoIndex));
}

function resetInterval(total) { clearInterval(photoInterval); photoInterval = setInterval(() => { currentPhotoIndex = (currentPhotoIndex + 1) % total; updateCarousel(); }, 4000); }

// ========================================
// 成员渲染
// ========================================
function renderMembers() {
    const c = document.getElementById('members-container');
    c.innerHTML = membersData.map(m => `
        <a href="member.html?id=${m.id}" class="member-detailed-card" style="--theme-color:${m.themeColor};text-decoration:none;color:inherit;">
            <div class="member-left-section">
                <div class="member-avatar-large"><img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'member-emoji-display large\\'>${m.emoji}</div>';"></div>
                <div class="member-basic-info">
                    <h3 class="member-name-large">${m.name}</h3>
                    <p class="member-name-full">${m.nameKr || m.nameJP} | ${m.nameCn}</p>
                    <span class="member-position-badge" style="background:linear-gradient(135deg,${m.themeColor},#fff);color:#000;">${m.position}</span>
                    <div class="member-details-list">
                        <div class="detail-item"><span class="detail-icon">🎂</span><span>${m.birthday}</span></div>
                        <div class="detail-item"><span class="detail-icon">📍</span><span>${m.birthplace}</span></div>
                    </div>
                    <div class="member-traits-grid">${m.traits.map(t => `<span class="trait-tag-large">${t}</span>`).join('')}</div>
                </div>
            </div>
            <div class="member-right-section">
                <div class="member-description" style="background:linear-gradient(135deg,${m.themeColor},#fff);z-index:1;position:relative;">
                    <h4 class="description-title">关于 ${m.name}</h4>
                    <p class="description-text">${m.description}</p>
                </div>
            </div>
        </a>`).join('');
}

// ========================================
// 成员详情页
// ========================================
function renderMemberDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const m = membersData.find(x => x.id === id);
    const c = document.getElementById('member-detail-container');
    if (!m) { c.innerHTML = '<p style="text-align:center;padding:4rem;">成员未找到</p>'; return; }
    document.title = `${m.name} - NCT WISH`;
    c.innerHTML = `
        <div class="member-detail-page" style="--theme-color:${m.themeColor}">
            <div class="detail-hero">
                <div class="detail-hero-img"><img src="${m.image}" alt="${m.name}" loading="lazy"></div>
                <div class="detail-hero-info">
                    <h1>${m.name}</h1>
                    <p class="detail-subtitle">${m.nameKr || m.nameJP} | ${m.nameCn}</p>
                    <span class="member-position-badge" style="background:linear-gradient(135deg,${m.themeColor},#fff);color:#000;">${m.position}</span>
                    <div class="detail-facts">
                        <span>🎂 ${m.birthday}</span><span>📍 ${m.birthplace}</span><span>${m.emoji} 代表符号</span>
                    </div>
                    <div class="member-traits-grid">${m.traits.map(t => `<span class="trait-tag-large">${t}</span>`).join('')}</div>
                </div>
            </div>
            <div class="detail-body">
                <div class="detail-section" style="background:linear-gradient(135deg,${m.themeColor},#fff);">
                    <h3>关于 ${m.name}</h3>
                    <p>${m.description}</p>
                </div>
                ${m.tmi ? `<div class="detail-section detail-tmi"><h3>🏢 进入公司的故事</h3><p>${m.tmi}</p></div>` : ''}
                <div class="detail-section">
                    <h3>🎬 推荐视频</h3>
                    <a href="${m.recommendedVideo.url}" target="_blank" class="recommended-video-card">
                        <img src="${m.recommendedVideo.thumbnail}" alt="${m.recommendedVideo.title}" loading="lazy">
                        <span>${m.recommendedVideo.title} →</span>
                    </a>
                </div>
            </div>
        </div>`;
}

// ========================================
// 周边商品 / MV / 安利视频
// ========================================
function renderMerchandise() {
    document.getElementById('merchandise-container').innerHTML = merchandiseData.map(i => `<a href="${i.link}" target="_blank" class="merch-card"><div class="merch-image"><img src="${i.image}" alt="${i.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='${i.emoji}';"></div><div class="merch-info"><h3 class="merch-name">${i.name}</h3><p class="merch-desc">${i.description}</p><span class="merch-link-hint">点击查看 👉</span></div></a>`).join('');
}

function renderMVs() {
    document.getElementById('mv-container').innerHTML = mvData.map(m => `<a href="${m.link}" target="_blank" class="mv-card"><div class="mv-thumbnail"><img src="${m.image}" alt="${m.title}" loading="lazy"></div><div class="mv-info"><h3 class="mv-title">${m.title}</h3><p class="mv-date">📅 ${m.date}</p></div></a>`).join('');
}

function renderFanVideos() {
    document.getElementById('videos-container').innerHTML = allVideos.map(v => `<a href="${v.link}" target="_blank" class="video-waterfall-card"><div class="video-waterfall-thumb"><img src="${v.image}" alt="${v.title}" loading="lazy"><span class="video-badge">${v.badge}</span><div class="video-hover-overlay"><span class="play-icon-large">▶️</span></div></div><div class="video-waterfall-info"><h3 class="video-waterfall-title">${v.title}</h3><p class="video-waterfall-desc">${v.description}</p></div></a>`).join('');
}

// ========================================
// 唱片页
// ========================================
function renderDiscography() {
    document.getElementById('discography-container').innerHTML = discographyData.map(a => `
        <div class="disco-card">
            <div class="disco-cover"><img src="${a.image}" alt="${a.title}" loading="lazy"></div>
            <div class="disco-info">
                <span class="disco-type">${a.type}</span>
                <h3>${a.title}</h3>
                <p class="disco-date">📅 ${a.date}</p>
                <ol class="disco-tracks">${a.tracks.map(t => `<li>${t}</li>`).join('')}</ol>
            </div>
        </div>`).join('');
}

// ========================================
// 时间线页
// ========================================
function renderTimeline() {
    document.getElementById('timeline-container').innerHTML = `<div class="timeline">${timelineData.map(e => `
        <div class="timeline-item">
            <div class="timeline-icon">${e.icon}</div>
            <div class="timeline-content">
                <span class="timeline-date">${e.date}</span>
                <h3>${e.title}</h3>
                <p>${e.desc}</p>
            </div>
        </div>`).join('')}</div>`;
}

// ========================================
// 成就页
// ========================================
function renderAchievements() {
    const c = document.getElementById('achievements-container');
    c.innerHTML = achievementsData.map(cat => `
        <div class="achieve-section">
            <h3 class="achieve-category">${cat.category}</h3>
            ${cat.items[0].stat !== undefined
                ? `<div class="achieve-milestones">${cat.items.map(i => `<div class="achieve-mile"><span class="achieve-stat">${i.stat}</span><span class="achieve-label">${i.label}</span></div>`).join('')}</div>`
                : `<div class="achieve-list">${cat.items.map(i => {
                    const extra = i.show ? ` — <strong>${i.show}</strong>` : (i.award ? '' : '');
                    const main = i.song || i.award;
                    return `<div class="achieve-item"><span class="achieve-date">${i.date}</span><span>${i.song ? `${i.song}` : ''}${i.show ? ` · ${i.show}` : ''}${i.award ? i.award : ''}</span></div>`;
                }).join('')}</div>`
            }
        </div>`).join('');
}

// ========================================
// 粉丝测试题
// ========================================
let quizState = { current: 0, score: 0, answered: false };

function initQuiz() {
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const c = document.getElementById('quiz-container');
    if (quizState.current >= quizData.length) {
        const pct = Math.round(quizState.score / quizData.length * 100);
        const level = pct >= 90 ? '🥇 WISH百科全书' : pct >= 70 ? '🥈 资深WISHzen' : pct >= 50 ? '🥉 入门WISHzen' : '💪 继续加油';
        c.innerHTML = `<div class="quiz-result"><h2>测试完成！</h2><p class="quiz-score">${quizState.score}/${quizData.length} (${pct}%)</p><p class="quiz-level">${level}</p><button class="btn-submit" onclick="quizState={current:0,score:0};renderQuizQuestion();">重新挑战</button></div>`;
        return;
    }
    const q = quizData[quizState.current];
    quizState.answered = false;
    c.innerHTML = `
        <div class="quiz-progress">第 ${quizState.current + 1}/${quizData.length} 题</div>
        <h3 class="quiz-question">${q.q}</h3>
        <div class="quiz-options">${q.options.map((o, i) => `<button class="quiz-option" data-idx="${i}" onclick="handleQuizAnswer(${i})">${o}</button>`).join('')}</div>`;
}

function handleQuizAnswer(idx) {
    if (quizState.answered) return;
    quizState.answered = true;
    const q = quizData[quizState.current];
    const btns = document.querySelectorAll('.quiz-option');
    btns.forEach((b, i) => {
        b.classList.add(i === q.answer ? 'correct' : (i === idx ? 'wrong' : ''));
        b.disabled = true;
    });
    if (idx === q.answer) quizState.score++;
    setTimeout(() => { quizState.current++; renderQuizQuestion(); }, 1000);
}

// ========================================
// 投票页
// ========================================
function initPoll() {
    const c = document.getElementById('poll-container');
    const votes = JSON.parse(localStorage.getItem('nct_wish_poll') || '{}');
    const total = Object.values(votes).reduce((s, v) => s + v, 0);

    c.innerHTML = `
        <h3 class="poll-title">你最喜欢的成员是谁？</h3>
        <div class="poll-options">${membersData.map(m => {
            const cnt = votes[m.id] || 0;
            const pct = total ? Math.round(cnt / total * 100) : 0;
            return `<button class="poll-option" onclick="castVote(${m.id})" style="--color:${m.themeColor}">
                <span class="poll-member">${m.emoji} ${m.name}</span>
                <div class="poll-bar"><div class="poll-fill" style="width:${pct}%"></div></div>
                <span class="poll-pct">${pct}% (${cnt})</span>
            </button>`;
        }).join('')}</div>
        <p class="poll-total">总票数: ${total}</p>`;
}

function castVote(id) {
    const votes = JSON.parse(localStorage.getItem('nct_wish_poll') || '{}');
    votes[id] = (votes[id] || 0) + 1;
    localStorage.setItem('nct_wish_poll', JSON.stringify(votes));
    initPoll();
}

// ========================================
// 照片墙 + Lightbox
// ========================================
function renderGallery() {
    document.getElementById('gallery-container').innerHTML = galleryData.map(p => `
        <div class="gallery-item" onclick="openLightbox('${p.image}','${escapeHtml(p.title)}','${escapeHtml(p.caption || '')}')">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <div class="gallery-caption"><span>${p.title}</span></div>
        </div>`).join('');
}

function openLightbox(src, title, caption) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<div class="lightbox-overlay" onclick="closeLightbox(this.parentElement)"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="closeLightbox(this.parentElement.parentElement)">✕</button>
            <img src="${src}" alt="${title}">
            <div class="lightbox-info"><h3>${title}</h3><p>${caption}</p></div>
        </div>`;
    document.body.appendChild(lb);
    setTimeout(() => lb.classList.add('show'), 10);
}

function closeLightbox(el) {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
}

// ========================================
// 应援打call页
// ========================================
function initCheer() {
    const canvas = document.getElementById('cheer-canvas');
    const ctx = canvas.getContext('2d');
    const msgs = ['💚', 'WISH', '💚', '加油', '💚', 'NCT WISH', '💚', 'WISHzen', '💚', '阿哩呐'];
    const colors = ['#7B68EE', '#FF69B4', '#00CED1', '#98d8c8', '#FFD700', '#FF6B6B'];
    let particles = [];

    function resize() { canvas.width = canvas.parentElement.clientWidth; canvas.height = 400; }
    resize();
    window.addEventListener('resize', resize);

    function addCheer(x, y) {
        const count = 5 + Math.floor(Math.random() * 5);
        for (let i = 0; i < count; i++) {
            particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 8,
                vy: -Math.random() * 8 - 2,
                text: msgs[Math.floor(Math.random() * msgs.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1,
                size: 14 + Math.random() * 10
            });
        }
    }

    canvas.addEventListener('click', e => {
        const rect = canvas.getBoundingClientRect();
        addCheer(e.clientX - rect.left, e.clientY - rect.top);
    });

    // Auto particles
    setInterval(() => { addCheer(Math.random() * canvas.width, canvas.height); }, 2000);

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles = particles.filter(p => p.life > 0);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1;
            p.life -= 0.012;
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.font = `${p.size}px sans-serif`;
            ctx.fillText(p.text, p.x, p.y);
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }
    draw();
}

// ========================================
// 留言板
// ========================================
function renderMessages() {
    const c = document.getElementById('messages-container');
    const countEl = document.getElementById('message-count');
    if (countEl) countEl.textContent = messagesData.length;
    if (messagesData.length === 0) { c.innerHTML = '<p class="empty-message">暂无留言，快来写下第一条吧！💌</p>'; return; }
    c.innerHTML = [...messagesData].reverse().map(m => `<div class="message-card"><div class="message-header"><div class="message-avatar">${escapeHtml(m.avatar)}</div><div class="message-user"><div class="message-username">${escapeHtml(m.username)}</div><div class="message-time">${escapeHtml(m.time)}</div></div></div><p class="message-content">${escapeHtml(m.content)}</p></div>`).join('');
}

function initMessageForm() {
    const form = document.getElementById('message-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('fan-name').value.trim();
        const content = document.getElementById('message-content').value.trim();
        if (!username || !content) { alert('请填写昵称和留言内容哦！'); return; }
        messagesData.push({ id: Date.now(), username, avatar: getAvatarEmoji(username), time: formatCurrentTime(), content });
        localStorage.setItem('nct_wish_messages', JSON.stringify(messagesData));
        renderMessages(); form.reset();
        showNotification('留言发布成功！感谢您的支持 💖');
    });
}

// ========================================
// 工具函数
// ========================================
function getAvatarEmoji(u) { const e = ['⭐','🌟','💫','✨','🎵','🎶','💖','💝','🌈','🦋','🌸','🎀']; let h = 0; for (let i = 0; i < u.length; i++) h = u.charCodeAt(i) + ((h << 5) - h); return e[Math.abs(h) % e.length]; }
function formatCurrentTime() { const n = new Date(), p = x => String(x).padStart(2, '0'); return `${n.getFullYear()}-${p(n.getMonth()+1)}-${p(n.getDate())} ${p(n.getHours())}:${p(n.getMinutes())}`; }
function showNotification(msg) { const n = document.createElement('div'); n.className = 'notification'; n.textContent = msg; document.body.appendChild(n); setTimeout(() => n.classList.add('show'), 100); setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 300); }, 3000); }
function initBackToTop() { const b = document.getElementById('backToTop'); if (!b) return; window.addEventListener('scroll', () => b.classList.toggle('visible', window.pageYOffset > 300)); b.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' })); }

function shareVideo(event, name, title) {
    event.preventDefault(); event.stopPropagation();
    const t = `推荐你观看 NCT WISH ${name} 的视频: ${title}`;
    if (navigator.share) navigator.share({ title: `NCT WISH - ${name}`, text: t, url: location.href }).catch(() => {});
    else navigator.clipboard.writeText(t).then(() => showNotification('已复制到剪贴板! 🔗')).catch(() => {});
}
