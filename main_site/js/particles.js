/**
 * Adiminium Premium Particle Effect
 * Creates a subtle, non-intrusive sparkle trail behind the cursor.
 */

(function () {
    // Configuration
    const CONFIG = {
        particleCount: 5,        // Increased for visibility
        sizeMin: 2,
        sizeMax: 5,              // Larger max size
        speed: 0.8,              // Slightly faster
        life: 50,                // Longer life
        color: '0, 200, 83',     // Primary Green (#00C853)
        zIndex: -1
    };

    // Setup Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none'; // Click-through
    canvas.style.zIndex = CONFIG.zIndex;

    document.body.appendChild(canvas);

    let width, height;
    let particles = [];

    // Resize Handler
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    // Theme Detection
    function isLightMode() {
        return document.documentElement.getAttribute('data-theme') === 'light';
    }

    // Particle Class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * (CONFIG.sizeMax - CONFIG.sizeMin) + CONFIG.sizeMin;
            this.vx = (Math.random() - 0.5) * CONFIG.speed;
            this.vy = (Math.random() - 0.5) * CONFIG.speed;
            this.life = CONFIG.life;
            this.maxLife = CONFIG.life;

            // Random variation: Primary Green or Contrast Color (White vs Dark Grey)
            this.isContrast = Math.random() > 0.6;

            // Random Red Dot (Small & Low Opacity) - 15% chance
            this.isRed = Math.random() > 0.85;
            if (this.isRed) {
                this.size = Math.random() * 2 + 1; // Force small size (1-3px)
            }
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;
            this.size *= 0.96; // Shrink slightly slower
        }

        draw() {
            const opacity = this.life / this.maxLife;

            if (this.isRed) {
                // User requested small red dots with less opacity
                // #EF4444 (Red-500) -> 239, 68, 68
                ctx.fillStyle = `rgba(239, 68, 68, ${opacity * 0.6})`; // Increased opacity slightly for visibility
            }
            else if (isLightMode()) {
                // User requested Mint Greens:
                const colors = ['134, 239, 172', '167, 243, 208', '110, 231, 183'];
                const randomColor = colors[Math.floor(this.size * 10) % colors.length];
                ctx.fillStyle = `rgba(${randomColor}, ${opacity * 0.8})`;
            } else {
                if (this.isContrast) {
                    // Dark Mode: White (#FFF)
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                } else {
                    // Dark Mode: Theme Green
                    ctx.fillStyle = `rgba(${CONFIG.color}, ${opacity * 0.6})`;
                }
            }

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Mouse Handler
    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
        spawnParticles(e.clientX, e.clientY);
    });

    // Touch Support
    window.addEventListener('touchmove', (e) => {
        // Prevent default only if necessary, but usually better not to block scrolling
        // e.preventDefault(); 
        for (let i = 0; i < e.touches.length; i++) {
            spawnParticles(e.touches[i].clientX, e.touches[i].clientY);
        }
    }, { passive: true });

    window.addEventListener('touchstart', (e) => {
        for (let i = 0; i < e.touches.length; i++) {
            spawnParticles(e.touches[i].clientX, e.touches[i].clientY);
        }
    }, { passive: true });

    function spawnParticles(x, y) {
        // Spawn particles
        for (let i = 0; i < CONFIG.particleCount; i++) {
            particles.push(new Particle(x, y));
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].life <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

})();
