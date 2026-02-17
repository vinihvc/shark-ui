import { AngleSliderValueText } from "@ark-ui/react";
import {
  AngleSlider,
  AngleSliderControl,
  AngleSliderLabel,
  AngleSliderMarker,
  AngleSliderMarkerGroup,
  AngleSliderThumb,
} from "@/registry/react/components/angle-slider";

const AngleSliderDemo = () => (
  <AngleSlider>
    <AngleSliderLabel>Rotation</AngleSliderLabel>
    <AngleSliderControl>
      <AngleSliderMarkerGroup>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((value) => (
          <AngleSliderMarker key={value} value={value} />
        ))}
      </AngleSliderMarkerGroup>
      <AngleSliderThumb />
    </AngleSliderControl>
    <AngleSliderValueText />
  </AngleSlider>
);

export default AngleSliderDemo;
