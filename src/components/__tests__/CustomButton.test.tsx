import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import TestRenderer from 'react-test-renderer';
import CustomButton from '../CustomButton';

jest.mock('../../styles/customButtonStyles', () => ({
    customButtonStyles: {
        button: {
            backgroundColor: 'rgba(40, 175, 110, 1)',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonDisabled: {
            backgroundColor: 'rgba(189, 189, 189, 1)',
            opacity: 0.6,
        },
        buttonText: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: 16,
            fontWeight: '600',
        },
    },
}));

describe('CustomButton', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with default props', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(
            <CustomButton title="Test Button" onPress={onPress} />
        );

        expect(tree).toMatchSnapshot();
        const buttonElement = tree.root.findByType(TouchableOpacity);
        const textElement = tree.root.findByType(Text);

        expect(buttonElement).toBeTruthy();
        expect(textElement.props.children).toBe('Test Button');
    });

    it('calls onPress when pressed', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(
            <CustomButton title="Click Me" onPress={onPress} />
        );

        const buttonElement = tree.root.findByType(TouchableOpacity);
        buttonElement.props.onPress();

        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('renders with custom style', () => {
        const onPress = jest.fn();
        const customStyle = { backgroundColor: 'red', marginTop: 10 };
        const tree = TestRenderer.create(
            <CustomButton
                title="Custom Styled Button"
                onPress={onPress}
                style={customStyle}
            />
        );

        expect(tree).toMatchSnapshot();
        const buttonElement = tree.root.findByType(TouchableOpacity);
        const style = buttonElement.props.style;

        expect(style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    backgroundColor: 'rgba(40, 175, 110, 1)',
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                    borderRadius: 8,
                }),
                customStyle
            ])
        );
    });

    it('renders with custom text style', () => {
        const onPress = jest.fn();
        const customTextStyle = { color: 'blue', fontSize: 18 };
        const tree = TestRenderer.create(
            <CustomButton
                title="Custom Text Button"
                onPress={onPress}
                textStyle={customTextStyle}
            />
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        const style = textElement.props.style;

        expect(style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 16,
                    fontWeight: '600',
                }),
                customTextStyle
            ])
        );
    });

    it('renders disabled state correctly', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(
            <CustomButton title="Disabled Button" onPress={onPress} disabled={true} />
        );

        expect(tree).toMatchSnapshot();
        const buttonElement = tree.root.findByType(TouchableOpacity);

        expect(buttonElement.props.disabled).toBe(true);
        expect(buttonElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    backgroundColor: 'rgba(40, 175, 110, 1)',
                }),
                expect.objectContaining({
                    backgroundColor: 'rgba(189, 189, 189, 1)',
                    opacity: 0.6,
                })
            ])
        );
    });

    it('does not call onPress when disabled', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(
            <CustomButton title="Disabled Button" onPress={onPress} disabled={true} />
        );

        const buttonElement = tree.root.findByType(TouchableOpacity);
        buttonElement.props.onPress();

        expect(onPress).not.toHaveBeenCalled();
    });

    it('renders with long title', () => {
        const onPress = jest.fn();
        const longTitle = 'This is a very long button title that should still render correctly';
        const tree = TestRenderer.create(
            <CustomButton title={longTitle} onPress={onPress} />
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        expect(textElement.props.children).toBe(longTitle);
    });

    it('renders with empty title', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(
            <CustomButton title="" onPress={onPress} />
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        expect(textElement.props.children).toBe('');
    });

    it('renders with special characters in title', () => {
        const onPress = jest.fn();
        const specialTitle = 'Button with émojis 🚀 and symbols @#$%';
        const tree = TestRenderer.create(
            <CustomButton title={specialTitle} onPress={onPress} />
        );

        expect(tree).toMatchSnapshot();
        const textElement = tree.root.findByType(Text);
        expect(textElement.props.children).toBe(specialTitle);
    });

    it('applies both custom style and text style', () => {
        const onPress = jest.fn();
        const customStyle = { marginTop: 20 };
        const customTextStyle = { fontWeight: 'bold' as const };
        const tree = TestRenderer.create(
            <CustomButton
                title="Styled Button"
                onPress={onPress}
                style={customStyle}
                textStyle={customTextStyle}
            />
        );

        expect(tree).toMatchSnapshot();
        const buttonElement = tree.root.findByType(TouchableOpacity);
        const textElement = tree.root.findByType(Text);

        expect(buttonElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    backgroundColor: 'rgba(40, 175, 110, 1)',
                }),
                customStyle
            ])
        );

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    color: 'rgba(255, 255, 255, 1)',
                }),
                customTextStyle
            ])
        );
    });

    it('handles multiple rapid presses', () => {
        const onPress = jest.fn();
        const tree = TestRenderer.create(
            <CustomButton title="Rapid Press Button" onPress={onPress} />
        );

        const buttonElement = tree.root.findByType(TouchableOpacity);

        // Simulate rapid presses
        buttonElement.props.onPress();
        buttonElement.props.onPress();
        buttonElement.props.onPress();

        expect(onPress).toHaveBeenCalledTimes(3);
    });
}); 