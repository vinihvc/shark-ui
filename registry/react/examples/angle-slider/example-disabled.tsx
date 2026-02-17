import {
  AngleSlider,
  AngleSliderControl,
  AngleSliderLabel,
  AngleSliderMarker,
  AngleSliderMarkerGroup,
  AngleSliderThumb,
  AngleSliderValueText,
} from "@/registry/react/components/angle-slider";

const Example = () => (
  <AngleSlider defaultValue={45} disabled>
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

export default Example;
