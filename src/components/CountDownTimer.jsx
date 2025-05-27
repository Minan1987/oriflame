import Countdown from "react-countdown";
import CustomNumeralNumericFormat from "./Price";

const CountdownBox = ({ label, value }) => (
    <div className="bg-white text-pink-600 px-2 py-1 rounded-xl text-center min-w-[50px] mx-1">
        <div className="text-xl font-bold">
            <CustomNumeralNumericFormat
                value={value}
            /></div>
        <div className="text-sm text-gray-400">{label}</div>
    </div>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <span>.زمان حراج به پایان رسید</span>;
    } else {
        return (
            <div className="flex justify-center flex-wrap my-3">
                <CountdownBox label="روز" value={days} />
                <CountdownBox label="ساعت" value={hours} />
                <CountdownBox label="دقیقه" value={minutes} />
                <CountdownBox label="ثانیه" value={seconds} />
            </div>
        );
    }
};


const CountDownTimer = ({ endDate }) => {

    return <Countdown date={endDate} renderer={renderer} />;

}

export default CountDownTimer
