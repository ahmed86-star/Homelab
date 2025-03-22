// 🎨 Custom JavaScript for Homelab Documentation

// 🌟 Progress Bar
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// 📚 Code Block Enhancement
document.querySelectorAll('pre code').forEach((block) => {
    // Add copy button
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = '📋 Copy';
    block.parentNode.appendChild(button);

    // Add expand/collapse button
    const expandButton = document.createElement('button');
    expandButton.className = 'expand-button';
    expandButton.innerHTML = '📖 Expand';
    block.parentNode.appendChild(expandButton);

    // Add line numbers
    const lines = block.textContent.split('\n');
    const lineNumbers = document.createElement('div');
    lineNumbers.className = 'line-numbers';
    lines.forEach((_, i) => {
        const lineNumber = document.createElement('span');
        lineNumber.textContent = i + 1;
        lineNumbers.appendChild(lineNumber);
    });
    block.parentNode.insertBefore(lineNumbers, block);

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(block.textContent);
            button.innerHTML = '✅ Copied!';
            setTimeout(() => {
                button.innerHTML = '📋 Copy';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });

    expandButton.addEventListener('click', () => {
        block.parentNode.classList.toggle('expanded');
        expandButton.innerHTML = block.parentNode.classList.contains('expanded') ? '📖 Collapse' : '📖 Expand';
    });
});

// 🔍 Search Enhancement
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        const searchResults = document.querySelectorAll('.search-result');
        
        searchResults.forEach(result => {
            const text = result.textContent.toLowerCase();
            result.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    }, 300));
}

// 🎯 Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 🌈 Fade In Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .highlight-box, .guest-card').forEach(el => {
    observer.observe(el);
});

// 🎨 Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '🌙';
document.body.appendChild(darkModeToggle);

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-mode', savedTheme === 'dark');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.innerHTML = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 📊 Table of Contents Enhancement
const toc = document.querySelector('.toc');
if (toc) {
    const tocLinks = toc.querySelectorAll('a');
    const sections = Array.from(tocLinks).map(link => ({
        id: link.getAttribute('href').substring(1),
        element: document.getElementById(link.getAttribute('href').substring(1))
    }));

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            if (section.element) {
                const sectionTop = section.element.offsetTop;
                const sectionBottom = sectionTop + section.element.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    tocLinks.forEach(link => link.classList.remove('active'));
                    document.querySelector(`.toc a[href="#${section.id}"]`).classList.add('active');
                }
            }
        });
    });
}

// 🔄 Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 📱 Mobile Menu Enhancement
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
}

// 🎨 Syntax Highlighting Enhancement
document.querySelectorAll('pre code').forEach((block) => {
    // Add language indicator
    const language = block.className.match(/language-(\w+)/)?.[1];
    if (language) {
        const langIndicator = document.createElement('div');
        langIndicator.className = 'language-indicator';
        langIndicator.textContent = language;
        block.parentNode.appendChild(langIndicator);
    }
});

// 🎯 Guest Card Interaction
document.querySelectorAll('.guest-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

// 📊 Resource Usage Visualization
function updateResourceUsage() {
    const usageElements = document.querySelectorAll('.resource-usage');
    usageElements.forEach(el => {
        const usage = parseFloat(el.dataset.usage);
        const bar = el.querySelector('.usage-bar');
        bar.style.width = `${usage}%`;
        bar.style.backgroundColor = usage > 80 ? '#ef4444' : usage > 60 ? '#f59e0b' : '#10b981';
    });
}

// 🔄 Auto-refresh for monitoring data
setInterval(updateResourceUsage, 5000);

// 🎨 Theme Switcher
const themeSwitcher = document.createElement('div');
themeSwitcher.className = 'theme-switcher';
themeSwitcher.innerHTML = `
    <button class="theme-btn" data-theme="light">☀️ Light</button>
    <button class="theme-btn" data-theme="dark">🌙 Dark</button>
    <button class="theme-btn" data-theme="system">💻 System</button>
`;
document.body.appendChild(themeSwitcher);

themeSwitcher.addEventListener('click', (e) => {
    if (e.target.classList.contains('theme-btn')) {
        const theme = e.target.dataset.theme;
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }
});

// 📱 Responsive Images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('expanded');
    });
});

// 🖥️ Proxmox Guest Cards Enhancement
document.querySelectorAll('.guest-card').forEach(card => {
    // Add status indicator
    const status = card.dataset.status || 'running';
    const statusIndicator = document.createElement('div');
    statusIndicator.className = `status-indicator ${status}`;
    statusIndicator.innerHTML = getStatusEmoji(status);
    card.appendChild(statusIndicator);

    // Add resource usage visualization
    const resources = document.createElement('div');
    resources.className = 'resource-grid';
    resources.innerHTML = `
        <div class="resource-item">
            <span class="resource-label">CPU</span>
            <div class="resource-usage" data-usage="${card.dataset.cpu || 0}">
                <div class="usage-bar"></div>
            </div>
        </div>
        <div class="resource-item">
            <span class="resource-label">RAM</span>
            <div class="resource-usage" data-usage="${card.dataset.ram || 0}">
                <div class="usage-bar"></div>
            </div>
        </div>
        <div class="resource-item">
            <span class="resource-label">Storage</span>
            <div class="resource-usage" data-usage="${card.dataset.storage || 0}">
                <div class="usage-bar"></div>
            </div>
        </div>
    `;
    card.appendChild(resources);

    // Add quick actions
    const actions = document.createElement('div');
    actions.className = 'guest-actions';
    actions.innerHTML = `
        <button class="action-btn" data-action="restart">🔄 Restart</button>
        <button class="action-btn" data-action="console">🖥️ Console</button>
        <button class="action-btn" data-action="backup">💾 Backup</button>
    `;
    card.appendChild(actions);

    // Handle action clicks
    actions.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-btn')) {
            const action = e.target.dataset.action;
            handleGuestAction(card.dataset.id, action);
        }
    });
});

function getStatusEmoji(status) {
    const emojis = {
        running: '🟢',
        stopped: '🔴',
        paused: '🟡',
        error: '⚠️'
    };
    return emojis[status] || '⚪';
}

function handleGuestAction(guestId, action) {
    // Show confirmation dialog
    const dialog = document.createElement('div');
    dialog.className = 'action-dialog';
    dialog.innerHTML = `
        <div class="dialog-content">
            <h3>Confirm ${action}</h3>
            <p>Are you sure you want to ${action} guest ${guestId}?</p>
            <div class="dialog-actions">
                <button class="confirm-btn">Confirm</button>
                <button class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(dialog);

    // Handle dialog actions
    dialog.querySelector('.confirm-btn').addEventListener('click', () => {
        // Simulate action (replace with actual API call)
        console.log(`Executing ${action} on guest ${guestId}`);
        dialog.remove();
    });

    dialog.querySelector('.cancel-btn').addEventListener('click', () => {
        dialog.remove();
    });
}

// 📊 Resource Monitoring Dashboard
function createResourceDashboard() {
    const dashboard = document.createElement('div');
    dashboard.className = 'resource-dashboard';
    dashboard.innerHTML = `
        <div class="dashboard-header">
            <h2>Resource Usage Overview</h2>
            <div class="time-range">
                <button class="time-btn active" data-range="1h">1H</button>
                <button class="time-btn" data-range="24h">24H</button>
                <button class="time-btn" data-range="7d">7D</button>
            </div>
        </div>
        <div class="dashboard-grid">
            <div class="dashboard-card">
                <h3>CPU Usage</h3>
                <canvas id="cpuChart"></canvas>
            </div>
            <div class="dashboard-card">
                <h3>Memory Usage</h3>
                <canvas id="memoryChart"></canvas>
            </div>
            <div class="dashboard-card">
                <h3>Storage Usage</h3>
                <canvas id="storageChart"></canvas>
            </div>
            <div class="dashboard-card">
                <h3>Network Traffic</h3>
                <canvas id="networkChart"></canvas>
            </div>
        </div>
    `;
    document.querySelector('.resource-monitoring').appendChild(dashboard);

    // Initialize charts
    initializeCharts();
}

function initializeCharts() {
    // CPU Chart
    const cpuCtx = document.getElementById('cpuChart').getContext('2d');
    new Chart(cpuCtx, {
        type: 'line',
        data: {
            labels: generateTimeLabels(),
            datasets: [{
                label: 'CPU Usage',
                data: generateRandomData(),
                borderColor: '#4299e1',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Add similar chart initializations for memory, storage, and network
}

function generateTimeLabels() {
    const labels = [];
    for (let i = 0; i < 24; i++) {
        labels.push(`${i}:00`);
    }
    return labels;
}

function generateRandomData() {
    return Array.from({length: 24}, () => Math.floor(Math.random() * 100));
}

// 🔍 Search and Filter Enhancement
function enhanceSearchAndFilter() {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer) return;

    const filterPanel = document.createElement('div');
    filterPanel.className = 'filter-panel';
    filterPanel.innerHTML = `
        <div class="filter-group">
            <label>Status</label>
            <div class="filter-options">
                <label><input type="checkbox" value="running"> Running</label>
                <label><input type="checkbox" value="stopped"> Stopped</label>
                <label><input type="checkbox" value="paused"> Paused</label>
            </div>
        </div>
        <div class="filter-group">
            <label>Resource Usage</label>
            <div class="filter-options">
                <label><input type="checkbox" value="high-cpu"> High CPU</label>
                <label><input type="checkbox" value="high-memory"> High Memory</label>
                <label><input type="checkbox" value="high-storage"> High Storage</label>
            </div>
        </div>
        <div class="filter-group">
            <label>Node</label>
            <div class="filter-options">
                <label><input type="checkbox" value="pve1"> pve1.ahmed2</label>
                <label><input type="checkbox" value="ahmed2"> ahmed2</label>
            </div>
        </div>
    `;
    searchContainer.appendChild(filterPanel);

    // Handle filter changes
    filterPanel.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            applyFilters();
        }
    });
}

function applyFilters() {
    const filters = {
        status: Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => cb.value)
    };

    document.querySelectorAll('.guest-card').forEach(card => {
        const matches = filters.status.length === 0 || 
            filters.status.includes(card.dataset.status);
        card.style.display = matches ? 'block' : 'none';
    });
}

// Initialize new features
document.addEventListener('DOMContentLoaded', () => {
    // ... existing initialization code ...
    
    // Initialize new features
    createResourceDashboard();
    enhanceSearchAndFilter();
}); 