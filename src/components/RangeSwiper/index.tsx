import { FC } from "react";
import { Range, getTrackBackground } from "react-range";

interface Props {
  minSize: number;
  maxSize: number;
  currentMaxValue: number;
  currentMinValue: number;
  step: number;
  onChange?: (value: [number, number]) => void;
  onFinalChange?: (value: [number, number]) => void;
}

export const RangeSwiper: FC<Props> = ({
  minSize = 1,
  maxSize = 2,
  currentMinValue = 1,
  currentMaxValue = 2,
  step = 0,
  onChange = () => {},
  onFinalChange = () => {},
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between text-12 w-full">
        <span>{currentMinValue} $</span>
        <span>{currentMaxValue} $</span>
      </div>

      <Range
        values={[currentMinValue, currentMaxValue]}
        step={step}
        min={minSize}
        max={maxSize}
        onChange={onChange}
        onFinalChange={onFinalChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              className="h-2 w-full border border-brown-base rounded-full"
              style={{
                background: getTrackBackground({
                  values: [currentMinValue, currentMaxValue],
                  colors: ["#FFF5E5", "#613215", "#FFF5E5"],
                  min: minSize,
                  max: maxSize,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => {
          const { key, ...restProps } = props;

          return (
            <div
              key={key}
              {...restProps}
              className={`h-3 w-3 bg-brown-base rounded-full border-2 bg-white ${
                isDragged ? "border-brown-dark" : "border-brown-light"
              } outline-none`}
              style={{
                ...restProps.style,
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
              }}
            />
          );
        }}
      />
    </div>
  );
};
