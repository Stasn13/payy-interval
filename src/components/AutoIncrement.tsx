import * as React from 'react';
import Button from '../ui/Button';
import RangeSlider from '../ui/RangeSlider';
import PlayIcon from '../assets/icons/play';
import StopIcon from '../assets/icons/stop';

interface AutoIncrementProps {
    tickCallback: () => void
}
const AutoIncrement = ({ tickCallback }: AutoIncrementProps) => {
    const [incrementStep, setIncrementStep] = React.useState(100);
    const [isStarted, setIsStarted] = React.useState(false);
    const [timeInterval, setTimeInterval] = React.useState<null | number>(null);

    React.useEffect(() => {
        if (isStarted) {
            setTimeInterval(setInterval(() => {
                tickCallback()
            }, incrementStep))
        }

        if (!isStarted) {
            clearInterval(timeInterval as number);
        }
    }, [isStarted])

    React.useEffect(() => {
        clearInterval(timeInterval as number);
        
        if (isStarted) {
            setTimeInterval(setInterval(() => {
                tickCallback()
            }, incrementStep))
        }
    }, [incrementStep])


    return (
        <section className="auto-increment">
            <p className="label">
                Auto increment
            </p>
            <Button
                text={isStarted ? "Stop" : "Start"}
                onClick={() => setIsStarted(!isStarted)}
                iconBefore={isStarted ? <StopIcon /> : <PlayIcon />}
            />
            <RangeSlider
                onInput={(value: number[]) => setIncrementStep(value[1])}
            />
            <div>
                <span className="count-seconds">{incrementStep / 100 > 10 ? (incrementStep / 1000).toFixed() : incrementStep}</span>
                <span>{incrementStep / 100 > 10 ? " " : " mili"}seconds</span>
            </div>
        </section>
    )
}

export default AutoIncrement;