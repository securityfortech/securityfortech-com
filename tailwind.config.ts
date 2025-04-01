
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					"primary": "#8B5CF6", // Main purple
					"secondary": "#D946EF", // Vibrant pink
					"accent": "#1EAEDB", // Bright blue
					"dark": "#0F0E17", // Dark background
					"light": "#F9F8FC", // Light text
					"glow": "#7E69AB", // Subtle glow
					"grid": "#1A1F2C", // Grid color
					"success": "#36F9C5", // Neon green/success
					"warning": "#F97316", // Orange/warning
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"glow": {
					"0%, 100%": { 
						opacity: "1", 
						filter: "brightness(1)"
					},
					"50%": { 
						opacity: "0.8", 
						filter: "brightness(1.2)" 
					},
				},
				"pulse-glow": {
					"0%, 100%": {
						opacity: 1,
						boxShadow: "0 0 20px 5px rgba(139, 92, 246, 0.5)",
					},
					"50%": {
						opacity: 0.9,
						boxShadow: "0 0 30px 10px rgba(139, 92, 246, 0.7)",
					},
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				},
				"grid-fade": {
					"0%": { 
						opacity: 0.3
					},
					"50%": { 
						opacity: 0.8
					},
					"100%": { 
						opacity: 0.3
					}
				},
				"text-slide": {
					"0%": {
						transform: "translateX(100%)",
						opacity: 0
					},
					"100%": {
						transform: "translateX(0)",
						opacity: 1
					}
				},
				"scroll-data": {
					"0%": {
						transform: "translateY(0)"
					},
					"100%": {
						transform: "translateY(-50%)"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"glow": "glow 2s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"float": "float 6s ease-in-out infinite",
				"grid-fade": "grid-fade 8s ease-in-out infinite",
				"text-slide": "text-slide 0.6s ease forwards",
				"scroll-data": "scroll-data 30s linear infinite"
			},
			fontFamily: {
				'exo': ['Exo 2', 'sans-serif'],
				'orbitron': ['Orbitron', 'sans-serif'],
				'code': ['JetBrains Mono', 'monospace'],
			},
			boxShadow: {
				'neon': '0 0 5px theme(colors.cyber.primary), 0 0 20px theme(colors.cyber.glow)',
				'neon-hover': '0 0 10px theme(colors.cyber.primary), 0 0 30px theme(colors.cyber.glow)',
			},
			backgroundImage: {
				'cyber-grid': 'radial-gradient(circle, rgba(26, 31, 44, 0.3) 1px, transparent 1px)',
				'cyber-gradient': 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(30, 174, 219, 0.1))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
