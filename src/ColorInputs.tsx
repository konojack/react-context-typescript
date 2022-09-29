import { useContext } from 'react';
import { ColorInput } from './ColorInput';
import { RGBContext } from './context';
import { RGBColorType } from './types';

export const ColorInputs = () => {
  const { red, green, blue } = useContext(RGBContext);
  return (
    <section className="color-inputs">
      <ColorInput id="red-input" label="Red" value={red} />
      <ColorInput id="green-input" label="Green" value={green} />
      <ColorInput id="blue-input" label="Blue" value={blue} />
    </section>
  );
};
