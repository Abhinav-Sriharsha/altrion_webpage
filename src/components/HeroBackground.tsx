import { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            z: number;
            size: number;
            color: string;
            speed: number;

            constructor() {
                this.x = (Math.random() - 0.5) * canvas!.width * 2;
                this.y = (Math.random() - 0.5) * canvas!.height * 2;
                this.z = Math.random() * canvas!.width;
                this.size = 2;
                // Google Antigravity colors: mostly blue-ish
                // Premium Fintech Teal
                this.color = '#008080';
                this.speed = 2 + Math.random();
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.z = canvas!.width;
                    this.x = (Math.random() - 0.5) * canvas!.width * 2;
                    this.y = (Math.random() - 0.5) * canvas!.height * 2;
                }
            }

            draw() {
                if (!ctx || !canvas) return;

                // Perspective projection
                const fov = 300;
                const scale = fov / (fov + this.z);
                const x2d = canvas.width / 2 + this.x * scale;
                const y2d = canvas.height / 2 + this.y * scale;

                const size = this.size * scale;

                if (size < 0) return;

                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.globalAlpha = Math.min(1, scale * 2); // Fade out as they get deep
                ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = 400; // Adjust for density
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            // White background is already set by parent/CSS, transparency is fine here.
            // But if we want to confirm white bg, we can fill rect.
            // ctx.fillStyle = '#ffffff';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
};

export default HeroBackground;
