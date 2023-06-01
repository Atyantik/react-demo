import { hexToRgb, mix } from '@utils/hex-to-rgb.util';

const primaryColorHash = '#006763';
export const computeCssVariables = `--font-family: 'Matter', sans-serif;
--font-size: 16px;
--line-height: 24px;
--black: #1c1c1c;
--white: #ffffff;
--text-color: var(--black);
--primary-color: ${primaryColorHash};
--primary-color-rgb: ${hexToRgb(primaryColorHash)};
--primary-color-light: ${mix(primaryColorHash, 'ffffff', 30)};
--primary-color-lighter: ${mix(primaryColorHash, 'ffffff', 15)};
--primary-color-dark: ${mix(primaryColorHash, '000000', 80)};
--secondary-color: var(--black)`.replace(/\n/gi, '');
