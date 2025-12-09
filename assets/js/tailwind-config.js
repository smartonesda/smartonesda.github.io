tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    950: '#050000', // Background hitam pekat agak merah dikit
                    900: '#1a0505', // Card background merah gelap
                    800: '#2b0b0b',
                },
                primary: {
                    DEFAULT: '#dc2626', // Red-600 (Warna Logo Utama)
                    glow: '#ef4444',    // Red-500 (Untuk efek cahaya)
                    glass: 'rgba(220, 38, 38, 0.15)', // Merah transparan untuk kaca
                },
                accent: {
                    gold: '#f59e0b', // Aksen emas biar mewah bareng merah
                    silver: '#e2e8f0', // Aksen silver metalik
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            animation: {
                'marquee': 'marquee 30s linear infinite', // Diperlambat biar enak dibaca
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' }, // KUNCI SEAMLESS: Cuma geser 50%
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
}
