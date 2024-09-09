import {isIOS} from '../utils/platformUtil';

export const themes: any = {
  colors: {
    text: {
      primary: '#374151',
      secondary: '#6B7280',
      tertiary: '#9CA3AF',
      disabled: '#6B7280',
      placeHolder: '#6B7280',
      white: '#FFFFFF',
    },
    background: {
      primary: '#F1F5F9',
      secondary: '#F5F5F5',
    },
    foreground: {
      primary: '#111827',
      secondary: '#374151',
      tertiary: '#4B5563',
      quartenary: '#6B7280',
      quinary: '#9CA3AF',
      disabled: '#9CA3AF',
    },
    border: {
      primary: '#D1D5DB',
      secondary: '#E5E7EB',
      active: '#374151',
      disabled: '#E5E7EB',
    },
  },
  fontSizes: {
    huge: 32,
    xlarge: 22,
    large: 18,
    medium: 16,
    normal: 14,
    small: 12,
    xsmall: 10,
  },
  margins: {
    huge: 32,
    xlarge: 20,
    large: 16,
    medium: 12,
    small: 8,
    tiny: 4,
  },
  paddings: {
    huge: 32,
    xlarge: 24,
    large: 20,
    medium: 16,
    small: 8,
    tiny: 4,
  },
  radiuses: {
    huge: 1000,
    xlarge: 20,
    large: 12,
    medium: 8,
    small: 4,
    tiny: 2,
  },
  fontFamilies: {
    ROBOTO: {
      regular: isIOS() ? 'RobotoRegular' : 'Roboto-Regular',
    },
    MONTSERRAT: {
      regular: isIOS() ? 'MontserratRegular' : 'Montserrat-Regular',
    },
  },
};
