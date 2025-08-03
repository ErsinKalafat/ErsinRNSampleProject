import React from 'react';
import PremiumScreen from '../../PremiumScreen';

interface PremiumSectionProps {
    onComplete: () => void;
}

export default function PremiumSection({ onComplete }: PremiumSectionProps) {
    return <PremiumScreen onComplete={onComplete} />;
} 