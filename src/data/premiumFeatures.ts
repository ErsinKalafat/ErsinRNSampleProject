import React from 'react';
import ScanIcon2 from '../assets/icons/ScanIcon2';
import SpeedMeter from '../assets/icons/SpeedMeter';
import DiagnoseIcon from '../assets/icons/DiagnoseIcon';

export interface PremiumFeature {
    id: number;
    iconKey: string;
    key: string;
}

export const premiumFeatures: PremiumFeature[] = [
    {
        id: 1,
        iconKey: 'scan',
        key: 'unlimited'
    },
    {
        id: 2,
        iconKey: 'speed',
        key: 'faster'
    },
    {
        id: 3,
        iconKey: 'diagnose',
        key: 'detailed'
    }
]; 