export const color : {
  [s : string] : string
} = {
  blue: '#146CEF',
  darkBlue: '#1064E2',
  grey: '#707F8A',
  orange: '#F4A124',
  opalBlue: '#012236',
  odeurYaBlue: '#0075E1',
  leafGreen: '#20B538',
  asphaltGray: '#D0D6E0',
  red: '#EC442A',
  darkRed: '#C9402B',
  naijaGreen: '#109B26',
  lightGrey: '#E7E9ED',
  glazedOrange: '#EA8C00',
  concreteGrey: '#344B5B',
  redTransluscent: '#FFEFED',
  blueTransluscent: '#C5E9FF',
  ashGrey: '#B2BFCF',
  ashGreyDark: '#A2AFBF',
  opalBlueTransluscent: 'rgba(0, 39, 63, 0.42)',
  greenTransluscent: '#DCF7E0',
  naijaGreenTransluscent: `rgba(46, 171, 66, 0.42)`,
  glazedOrangeTransluscent: 'rgba(234, 140, 0, 0.42)',
  orangeTransluscent: '#FFF2DF',
  navyBlue: '#0B4F79'
}

export const screenSize : {
  [s : string] : string
} = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1028px',

  laptopL: '1440px',
  desktop: '2560px'
};

export const size : {
  [s : string] : string
} = {
  xLargeWindowSize: '1300px',
  largeWindowSize: '1000px',
  midWindowSize: '650px',
  borderWidth: '1px',
  borderRadius: '3px',
  inputBorderRadius: '4px'
}

export const theme : {
  [s : string] : any
} = {
  primary: color.blue,
  secondary: color.leafGreen,
  accent: color.orange,
  darkPrimary: color.darkBlue,
  darkSecondary: color.naijaGreen,
  darkAccent: color.glazedOrange,
  presentationTextColor: color.navyBlue,
  danger: color.red,
  success: color.green,
  darkDanger: color.darkRed,
  dangerTransluscent: color.redTransluscent,
  primaryTransluscent: color.blueTransluscent,
  darkPrimaryTransluscent: color.blueTransluscent,
  warningTransluscent: color.orangeTransluscent,
  secondaryTransluscent: color.greenTransluscent,
  darkSecondaryTransluscent: color.naijaGreenTransluscent,
  darkAccentTransluscent: color.glazedOrangeTransluscent,
  inactiveGrey: color.asphaltGray,
  textFieldBorder: color.odeurYaBlue,
  defaultTextColor: color.opalBlue,
  iconGrey: color.grey,
  borderedButtonBg: color.ashGrey,
  borderedButtonFocusBg: color.ashGreyDark,
  screenSize,
  ...size,
  ...color
}