const backgroundColor = '#2C3643';
const foregroundColor = '#C0C5CE';

const RED = '#FA5E5B';
const GREEN = '#16C98D';
const YELLOW = '#FFC83F';
const BLUE = '#288AD6';
const PINK = '#FF708E';
const CYAN = '#0FDEBD';
const LIGHT_GRAY = '#D0D0D0';
const MEDIUM_GRAY = '#808080';
const WHITE = '#FFFFFF';

const cursorColor = YELLOW;
const borderColor = MEDIUM_GRAY;

const colors = [
  backgroundColor,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  LIGHT_GRAY,
  MEDIUM_GRAY,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  WHITE,
  foregroundColor
];

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors
  })
);
