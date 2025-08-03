import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export const baseFlexCenter: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
};

export const baseFlexEnd: ViewStyle = {
    justifyContent: 'flex-end',
    alignItems: 'center',
};

export const baseFlexStart: ViewStyle = {
    justifyContent: 'flex-start',
    alignItems: 'center',
};

export const baseFlexRow: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
};

export const baseFlexRowCenter: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
};

export const baseFullWidth: ViewStyle = {
    width: '100%',
};

export const baseImageWidth: ImageStyle = {
    width: '100%',
};

export const baseTextCenter: TextStyle = {
    textAlign: 'center',
};

export const baseTextLeft: TextStyle = {
    textAlign: 'left',
};

export const baseTextRight: TextStyle = {
    textAlign: 'right',
};

export const basePaddingHorizontal: ViewStyle = {
    paddingHorizontal: 24,
};

export const baseMarginVertical: ViewStyle = {
    marginVertical: 10,
};

export const baseContainer: ViewStyle = {
    flex: 1,
    ...baseFullWidth,
};

export const baseCard: ViewStyle = {
    ...baseFullWidth,
    borderRadius: 12,
    padding: 16,
};

export const baseAbsoluteBottom: ViewStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
};

export const baseFlexRowSpaceBetween: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export const baseFlexRowStart: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

export const baseSpaceBetween: ViewStyle = {
    justifyContent: 'space-between',
};

export const basePaddingBottom: ViewStyle = {
    paddingBottom: 20,
};

export const baseMarginTop: ViewStyle = {
    marginTop: 20,
};

export const baseMarginBottom: ViewStyle = {
    marginBottom: 20,
};

export const baseMarginHorizontal: ViewStyle = {
    marginHorizontal: 5,
};

export const baseBorderRadius: ViewStyle = {
    borderRadius: 5,
};

export const baseFontRegular: TextStyle = {
    fontFamily: 'Rubik-Regular',
};

export const baseFontLight: TextStyle = {
    fontFamily: 'Rubik-Light',
};

export const baseFontBold: TextStyle = {
    fontFamily: 'Rubik-Bold',
}; 