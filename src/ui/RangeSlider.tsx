import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function ({ onInput }: { onInput: (value: number[]) => void }) {
    return (
        <RangeSlider
            className="single-thumb thumb"
            thumbsDisabled={[true, false]}
            defaultValue={[1, 3]}
            min={100}
            max={3000}
            rangeSlideDisabled={true}
            onInput={onInput}
        />
    );
}