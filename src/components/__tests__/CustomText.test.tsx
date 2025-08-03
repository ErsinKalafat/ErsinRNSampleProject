import React from 'react';
import { Text } from 'react-native';
import TestRenderer from 'react-test-renderer';
import CustomText from '../CustomText';

jest.mock('../../helpers/sizeNormalize', () => ({
    scaleFont: jest.fn((size) => size),
}));

jest.mock('../../constants/colors', () => ({
    text: {
        primary: 'rgba(19, 35, 27, 1)',
    },
}));

describe('CustomText', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with default props', () => {
        const tree = TestRenderer.create(
            <CustomText>Test Text</CustomText>
        );

        expect(tree).toMatchSnapshot();
        expect(tree.root.findByType(Text).props.children).toBe('Test Text');
    });

    it('renders with custom style', () => {
        const customStyle = { color: 'red', fontSize: 20 };
        const tree = TestRenderer.create(
            <CustomText style={customStyle}>Custom Styled Text</CustomText>
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        expect(textElement.props.children).toBe('Custom Styled Text');
    });

    it('renders with children as string', () => {
        const tree = TestRenderer.create(
            <CustomText>Hello World</CustomText>
        );

        expect(tree).toMatchSnapshot();
        expect(tree.root.findByType(Text).props.children).toBe('Hello World');
    });

    it('renders with children as number', () => {
        const tree = TestRenderer.create(
            <CustomText>{42}</CustomText>
        );

        expect(tree).toMatchSnapshot();
        expect(tree.root.findByType(Text).props.children).toBe(42);
    });

    it('renders with children as JSX element', () => {
        const tree = TestRenderer.create(
            <CustomText>
                <CustomText>Nested Text</CustomText>
            </CustomText>
        );

        expect(tree).toMatchSnapshot();
        const nestedText = tree.root.findByProps({ children: 'Nested Text' });
        expect(nestedText).toBeTruthy();
    });

    it('passes through additional props', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(
            <CustomText onPress={onPress} testID="custom-text">
                Clickable Text
            </CustomText>
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        expect(textElement.props.testID).toBe('custom-text');
        expect(textElement.props.onPress).toBe(onPress);
    });

    it('applies default styles correctly', () => {
        const tree = TestRenderer.create(
            <CustomText>Default Styled Text</CustomText>
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        const style = textElement.props.style;

        expect(style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    fontSize: 16,
                    fontFamily: 'Rubik-Regular',
                    fontWeight: '500',
                    color: 'rgba(19, 35, 27, 1)',
                })
            ])
        );
    });

    it('merges custom style with default style', () => {
        const customStyle = { color: 'blue', fontWeight: 'bold' as const };
        const tree = TestRenderer.create(
            <CustomText style={customStyle}>Merged Style Text</CustomText>
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        const style = textElement.props.style;

        expect(style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    fontSize: 16,
                    fontFamily: 'Rubik-Regular',
                    fontWeight: '500',
                    color: 'rgba(19, 35, 27, 1)',
                }),
                customStyle
            ])
        );
    });

    it('handles empty children gracefully', () => {
        const tree = TestRenderer.create(
            <CustomText>{''}</CustomText>
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        expect(textElement.props.children).toBe('');
    });

    it('handles null children gracefully', () => {
        const tree = TestRenderer.create(
            <CustomText>{null}</CustomText>
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        expect(textElement.props.children).toBe(null);
    });
}); 