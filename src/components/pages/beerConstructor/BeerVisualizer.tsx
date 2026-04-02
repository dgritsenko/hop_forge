'use client';

import { BeerStyle } from '@/types/beerConstructor';
import { getBeerStyle } from '@/lib/mocks/beerStyles';
import { getIngredient } from '@/lib/mocks/ingredients';
import { SelectedIngredient } from '@/types/beerConstructor';

interface BeerVisualizerProps {
    selectedStyle: BeerStyle | null;
    volume: number;
    selectedIngredients: SelectedIngredient[];
}

const INGREDIENT_POSITIONS: Record<string, { x: number; y: number; rotation: number }[]> = {
    'bubble-taro': [
        { x: 58, y: 92, rotation: -15 },
        { x: 142, y: 268, rotation: 32 },
        { x: 115, y: 140, rotation: 45 },
        { x: 78, y: 225, rotation: -38 }
    ],
    'bubble-mango': [
        { x: 155, y: 285, rotation: 12 },
        { x: 138, y: 250, rotation: -25 },
        { x: 160, y: 220, rotation: 55 },
        { x: 62, y: 110, rotation: -40 }
    ],
    'bubble-brownsugar': [
        { x: 150, y: 85, rotation: -50 },
        { x: 125, y: 145, rotation: 20 },
        { x: 100, y: 205, rotation: -10 },
        { x: 75, y: 265, rotation: 40 }
    ],
    'bubble-matcha': [
        { x: 55, y: 120, rotation: 15 },
        { x: 52, y: 180, rotation: -30 },
        { x: 58, y: 240, rotation: 45 },
        { x: 95, y: 150, rotation: -15 }
    ],
    'lemon-zest': [
        { x: 90, y: 110, rotation: 45 },
        { x: 145, y: 230, rotation: -20 },
        { x: 65, y: 275, rotation: 60 }
    ],
    'orange-peel': [
        { x: 70, y: 95, rotation: -45 },
        { x: 105, y: 105, rotation: 30 },
        { x: 140, y: 88, rotation: -60 }
    ],
    'chili-pepper': [
        { x: 55, y: 280, rotation: 70 },
        { x: 155, y: 80, rotation: -65 }
    ],
    'black-pepper': [
        { x: 95, y: 175, rotation: 5 },
        { x: 110, y: 165, rotation: -10 },
        { x: 100, y: 195, rotation: 15 }
    ],
    'vanilla-bean': [
        { x: 120, y: 210, rotation: 35 },
        { x: 125, y: 245, rotation: -25 }
    ],
    'coffee-beans': [
        { x: 80, y: 250, rotation: 40 },
        { x: 85, y: 200, rotation: -15 },
        { x: 150, y: 255, rotation: 50 }
    ],
    'cacao-nibs': [
        { x: 60, y: 75, rotation: -55 },
        { x: 130, y: 110, rotation: 25 },
        { x: 95, y: 145, rotation: -30 }
    ],
    'honey': [
        { x: 75, y: 180, rotation: 10 },
        { x: 115, y: 230, rotation: -45 },
        { x: 145, y: 160, rotation: 35 }
    ],
    'passion-fruit': [
        { x: 85, y: 155, rotation: -40 },
        { x: 135, y: 160, rotation: 20 }
    ],
    'ginger': [
        { x: 90, y: 270, rotation: 55 },
        { x: 110, y: 285, rotation: -30 }
    ],
    'coriander': [
        { x: 55, y: 100, rotation: 0 },
        { x: 155, y: 290, rotation: -50 },
        { x: 100, y: 190, rotation: 30 }
    ]
};

const VISUAL_TYPE_OPACITY: Record<string, number> = {
    'bubble': 0.75,
    'slice': 0.85,
    'piece': 0.95,
    'grain': 0.9,
};

const VISUAL_TYPE_SIZE: Record<string, number> = {
    'bubble': 16,
    'slice': 20,
    'piece': 18,
    'grain': 14,
};

export const BeerVisualizer = ({
    selectedStyle,
    volume,
    selectedIngredients,
}: BeerVisualizerProps) => {
    const style = selectedStyle ? getBeerStyle(selectedStyle) : null;

    const volumeToScale = (vol: number): number => {
        const scales: Record<number, number> = {
            200: 0.8,
            400: 0.95,
            500: 1,
        };
        return scales[vol] || 1;
    };

    const scale = volumeToScale(volume);
    const baseWidth = 200;
    const baseHeight = 320;
    const liquidTop = 50;
    const liquidHeight = 230;

    const getVisualElements = () => {
        const elements: {
            id: string;
            color: string;
            x: number;
            y: number;
            rotation: number;
            type: string;
            opacity: number;
            size: number;
        }[] = [];

        selectedIngredients.forEach((item) => {
            const ingredient = getIngredient(item.ingredientId);
            if (!ingredient) return;

            const positions = INGREDIENT_POSITIONS[item.ingredientId] || [];
            const maxElements = Math.min(3, positions.length);

            for (let i = 0; i < maxElements; i++) {
                const pos = positions[i];
                if (!pos) continue;

                const x = 40 + (pos.x / 200) * 120;
                const y = liquidTop + ((pos.y - 50) / 270) * liquidHeight;

                elements.push({
                    id: `${item.ingredientId}-${i}`,
                    color: ingredient.color,
                    x,
                    y,
                    rotation: pos.rotation,
                    type: ingredient.visualType,
                    opacity: VISUAL_TYPE_OPACITY[ingredient.visualType] || 0.8,
                    size: VISUAL_TYPE_SIZE[ingredient.visualType] || 14,
                });
            }
        });

        return elements;
    };

    const visualElements = getVisualElements();

    const renderElement = (el: { type: string; color: string; rotation: number; opacity: number; size: number }) => {
        const half = el.size / 2;

        switch (el.type) {
            case 'bubble':
                return (
                    <circle
                        cx="0"
                        cy="0"
                        r={half}
                        fill={el.color}
                        opacity={el.opacity}
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="1"
                    />
                );
            case 'piece':
                return (
                    <rect
                        x={-half}
                        y={-el.size * 0.3}
                        width={el.size}
                        height={el.size * 0.6}
                        fill={el.color}
                        opacity={el.opacity}
                        rx={el.size * 0.15}
                    />
                );
            case 'grain':
                return (
                    <ellipse
                        cx="0"
                        cy="0"
                        rx={el.size * 0.3}
                        ry={el.size * 0.5}
                        fill={el.color}
                        opacity={el.opacity}
                    />
                );
            case 'slice':
                return (
                    <path
                        d={`M 0 ${-half} A ${half} ${half} 0 0 1 0 ${half} Z`}
                        fill={el.color}
                        opacity={el.opacity}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                    />
                );
            default:
                return <circle cx="0" cy="0" r={half} fill={el.color} opacity={el.opacity} />;
        }
    };

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: baseWidth * scale, height: baseHeight * scale }}
        >
            <svg viewBox={`0 0 ${baseWidth} ${baseHeight}`} className="w-full h-full drop-shadow-2xl">
                <defs>
                    <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                    </linearGradient>
                    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={style?.color || '#d4a84a'} stopOpacity="0.92" />
                        <stop offset="100%" stopColor={style?.colorDark || '#b89040'} stopOpacity="0.98" />
                    </linearGradient>
                </defs>

                <path
                    d="M 50 40 L 150 40 L 142 280 L 58 280 Z"
                    fill="url(#glassGradient)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2.5"
                />

                {style && (
                    <rect
                        x="56"
                        y={liquidTop}
                        width="88"
                        height={liquidHeight}
                        fill="url(#liquidGradient)"
                        rx="2"
                    />
                )}

                {visualElements.map((el) => (
                    <g
                        key={el.id}
                        transform={`translate(${el.x}, ${el.y}) rotate(${el.rotation})`}
                        className="animate-in fade-in duration-500"
                    >
                        {renderElement(el)}
                    </g>
                ))}

                <path
                    d="M 50 40 L 150 40 L 142 280 L 58 280 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="3"
                />

                <path
                    d="M 58 50 L 62 270"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                <ellipse
                    cx="100"
                    cy="40"
                    rx="50"
                    ry="7"
                    fill="rgba(255,255,255,0.2)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2.5"
                />
            </svg>

            <div className="absolute -bottom-8 left-0 right-0 text-center">
                <p className="text-sm text-stone-700 font-semibold">{volume} мл</p>
                {style && (
                    <p className="text-xs text-stone-500 mt-0.5">{style.name}</p>
                )}
            </div>
        </div>
    );
};