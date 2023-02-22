import { createGlobalStyle } from 'styled-components'

import RobotoRegularWoff from '../fonts/Roboto-Regular.woff'
import RobotoRegularWoff2 from '../fonts/Roboto-Regular.woff2'
import RobotoMediumWoff from '../fonts/Roboto-Medium.woff'
import RobotoMediumWoff2 from '../fonts/Roboto-Medium.woff2'
import RobotoBoldWoff from '../fonts/Roboto-Bold.woff'
import RobotoBoldWoff2 from '../fonts/Roboto-Bold.woff2'
import RobotoLightWoff from '../fonts/Roboto-Light.woff'
import RobotoLightWoff2 from '../fonts/Roboto-Light.woff2'
import RobotoThinItalicWoff from '../fonts/Roboto-ThinItalic.woff'
import RobotoThinItalicWoff2 from '../fonts/Roboto-ThinItalic.woff2'

import MontserratRegularWoff from '../fonts/Montserrat-Regular.woff'
import MontserratRegularWoff2 from '../fonts/Montserrat-Regular.woff2'
import MontserratMediumWoff from '../fonts/Montserrat-Medium.woff'
import MontserratMediumWoff2 from '../fonts/Montserrat-Medium.woff2'
import MontserratSemiBoldWoff from '../fonts/Montserrat-SemiBold.woff'
import MontserratSemiBoldWoff2 from '../fonts/Montserrat-SemiBold.woff2'
import MontserratBoldWoff from '../fonts/Montserrat-Bold.woff'
import MontserratBoldWoff2 from '../fonts/Montserrat-Bold.woff2'

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoLightWoff2}) format('woff2'),
            url(${RobotoLightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBoldWoff2}) format('woff2'),
            url(${RobotoBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoMediumWoff2}) format('woff2'),
            url(${RobotoMediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoThinItalicWoff2}) format('woff2'),
            url(${RobotoThinItalicWoff}) format('woff');
        font-weight: 100;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegularWoff2}) format('woff2'),
            url(${RobotoRegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratMediumWoff2}) format('woff2'),
            url(${MontserratMediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBoldWoff2}) format('woff2'),
            url(${MontserratBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegularWoff2}) format('woff2'),
            url(${MontserratRegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratSemiBoldWoff2}) format('woff2'),
            url(${MontserratSemiBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
`
export default Fonts