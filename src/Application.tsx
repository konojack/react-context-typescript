import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorAdjustment } from './ColorAdjustment';
import { ColorSlider } from './ColorSlider';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';
import { RGBContext } from './context';

const Application = () => {
  const { light: lightTheme, dark: darkTheme } = React.useContext(ThemeContext);

  const { red, green, blue } = React.useContext(RGBContext);
  const rgbObject = {
    red,
    green,
    blue
  };

  return (
    <main style={{ borderColor: toRGB(rgbObject), ...darkTheme }}>
      <ColorSwatch />
      <ColorInputs />
      <ColorAdjustment Adjustment={ColorSlider} />
    </main>
  );
};

export default Application;
