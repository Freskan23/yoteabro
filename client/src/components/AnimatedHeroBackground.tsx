import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
}

export default function AnimatedHeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const createParticles = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 25000);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 20 + 10,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.2 - 0.1,
                    opacity: Math.random() * 0.15 + 0.05,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.01,
                });
            }
        };

        const drawKey = (x: number, y: number, size: number, rotation: number, opacity: number) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = "#EE6C4D";
            ctx.lineWidth = 1.5;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Key head (circle)
            ctx.beginPath();
            ctx.arc(-size * 0.3, 0, size * 0.25, 0, Math.PI * 2);
            ctx.stroke();

            // Key shaft
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(size * 0.5, 0);
            ctx.stroke();

            // Key teeth
            ctx.beginPath();
            ctx.moveTo(size * 0.3, 0);
            ctx.lineTo(size * 0.3, size * 0.15);
            ctx.moveTo(size * 0.4, 0);
            ctx.lineTo(size * 0.4, size * 0.1);
            ctx.moveTo(size * 0.5, 0);
            ctx.lineTo(size * 0.5, size * 0.12);
            ctx.stroke();

            ctx.restore();
        };

        const drawLock = (x: number, y: number, size: number, rotation: number, opacity: number) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = "#EE6C4D";
            ctx.lineWidth = 1.5;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Lock body
            ctx.beginPath();
            ctx.roundRect(-size * 0.3, -size * 0.1, size * 0.6, size * 0.5, 3);
            ctx.stroke();

            // Lock shackle
            ctx.beginPath();
            ctx.arc(0, -size * 0.1, size * 0.2, Math.PI, 0);
            ctx.stroke();

            // Keyhole
            ctx.beginPath();
            ctx.arc(0, size * 0.1, size * 0.06, 0, Math.PI * 2);
            ctx.moveTo(0, size * 0.1);
            ctx.lineTo(0, size * 0.25);
            ctx.stroke();

            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.rotation += particle.rotationSpeed;

                // Wrap around edges
                if (particle.x < -50) particle.x = canvas.width + 50;
                if (particle.x > canvas.width + 50) particle.x = -50;
                if (particle.y < -50) particle.y = canvas.height + 50;
                if (particle.y > canvas.height + 50) particle.y = -50;

                // Alternate between keys and locks
                if (index % 2 === 0) {
                    drawKey(particle.x, particle.y, particle.size, particle.rotation, particle.opacity);
                } else {
                    drawLock(particle.x, particle.y, particle.size, particle.rotation, particle.opacity);
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createParticles();
        animate();

        window.addEventListener("resize", () => {
            resizeCanvas();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
            aria-hidden="true"
        />
    );
}
