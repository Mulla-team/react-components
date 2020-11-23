export const color : {
  [s : string] : string
} = {
  blue: '#009EFA',
  darkBlue: '#0495EA',
  grey: '#707F8A',
  orange: '#F4A124',
  opalBlue: '#012236',
  odeurYaBlue: '#0075E1',
  leafGreen: '#20B538',
  asphaltGray: '#D0D6E0',
  red: '#EC442A',
  darkRed: '#C9402B',
  naijaGreen: '#109B26',
  lightGrey: '#F1F2F4',
  glazedOrange: '#EA8C00',
  concreteGrey: '#344B5B',
  redTransluscent: '#FFEFED',
  blueTransluscent: '#C5E9FF',
  opalBlueTransluscent: 'rgba(0, 39, 63, 0.42)',
  greenTransluscent: '#DCF7E0',
  naijaGreenTransluscent: `rgba(46, 171, 66, 0.42)`,
  glazedOranngeTransluscent: 'rgba(234, 140, 0, 0.42)'
}

export const size : {
  [s : string] : string
} = {
  xLargeWindowSize: '1300px',
  largeWindowSize: '1000px',
  midWindowSize: '650px',
  borderWidth: '1px',
  borderRadius: '2px',
  inputBorderRadius: '4px'
}

export const theme : {
  [s : string] : string
} = {
  primary: color.blue,
  secondary: color.leafGreen,
  accent: color.orange,
  darkPrimary: color.darkBlue,
  darkSecondary: color.naijaGreen,
  darkAccent: color.glazedOrange,
  danger: color.red,
  success: color.green,
  darkDanger: color.darkRed,
  dangerTransluscent: color.redTransluscent,
  primaryTransluscent: color.blueTransluscent,
  darkPrimaryTransluscent: color.blueTransluscent,
  secondaryTransluscent: color.greenTransluscent,
  darkSecondaryTransluscent: color.naijaGreenTransluscent,
  darkAccentTransluscent: color.glazedOranngeTransluscent,
  inactiveGrey: color.asphaltGray,
  textFieldBorder: color.odeurYaBlue,
  defaultTextColor: color.opalBlue,
  iconGrey: color.grey,
  ...size,
  ...color
}