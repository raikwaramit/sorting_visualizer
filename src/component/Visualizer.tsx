export interface IVisualizerProps {
  data: Array<number>;
  activeIndex: number;
  max: number;
}

export default function Visualizer(props: IVisualizerProps) {
  const width: number = 1 / props.data.length;
  return (
    <div className="w-full h-full flex flex-row bg-amber-200">
      {props.data.map((item: number, index: number) => {
        const height: number = item / props.max;
        return (
          <BarComponent
            height={height}
            width={width * 10}
            active={index === props.activeIndex}
            key={index}
          />
        );
      })}
    </div>
  );
}

interface BarComponentProps {
  height: number;
  width: number;
  active: boolean;
}

function BarComponent(props: BarComponentProps) {
  return (
    <div
      className={`h-full flex ${
        props.active ? "bg-orange-700" : "bg-orange-200"
      } outline-dashed outline-1 mb-2`}
      style={{
        height: props.height * 400,
        width: props.width * 1000,
        marginRight: props.width,
      }}
    />
  );
}
