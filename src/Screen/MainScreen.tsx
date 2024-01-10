import { useEffect, useState } from "react";
import Header from "../component/Header";
import Slider from "../component/RangeSelector";
import ButtonComponent from "../component/ButtonCompoent";
import Visualizer from "../component/Visualizer";
import { generateAnArray } from "../array_generator/ArrayGenerator";

/**
 * Proptypes definition for the main screen component.
 */
export interface IMainScreenProps {}

const MAX_VALUE = 100;

/**
 * Function definition for the main screen component.
 *
 * @param props Properties for the main screen component.
 * @returns Main screen component.
 */
export default function MainScreen(props: IMainScreenProps) {
  const maxValue = MAX_VALUE;
  const [length, setLength] = useState(10);
  const [arrayData, setArrayData] = useState<number[]>(
    generateAnArray(length, maxValue)
  );
  const [activeIndex, setActiveIndex] = useState(-1);
  const [delay, setDelay] = useState(100);

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setArrayData(generateAnArray(length, maxValue));
  }, [length, maxValue]);

  const generateNewArrayHandler = async () => {
    setArrayData(generateAnArray(length, maxValue));
  };

  let timer: NodeJS.Timer;

  const handleStop = () => {
    clearInterval(timer);
    setDisable(false);
  };

  const bubbleSortAlgo = async () => {
    const len = arrayData.length;
    setDisable(true);

    let i = 0;
    let j = 0;
    timer = setInterval(() => {
      if (j < len - i) {
        arrayData[j] > arrayData[j + 1]
          ? setActiveIndex(j + 1)
          : setActiveIndex(j + 2);
        if (arrayData[j] > arrayData[j + 1]) {
          const data = arrayData;
          const a = data[j];
          data[j] = data[j + 1];
          data[j + 1] = a;
          setArrayData(data);
        }
        j++;
      } else {
        j = 0;
        i++;
        setActiveIndex(j);

        if (i >= len) {
          clearInterval(timer);
          setActiveIndex(-1);
          setDisable(false);
        }
      }
    }, delay);
  };

  const selectionSortAlgo = async () => {
    const len = arrayData.length;
    setDisable(true);

    let i = 0;
    let j = 0;
    const timer = setInterval(() => {
      if (j < len - i - 1) {
        arrayData[j] > arrayData[j + 1]
          ? setActiveIndex(j + 1)
          : setActiveIndex(j + 2);
        if (arrayData[j] > arrayData[j + 1]) {
          const data = arrayData;
          const a = data[j];
          data[j] = data[j + 1];
          data[j + 1] = a;
          setArrayData(data);
        }
        j++;
      } else {
        j = 0;
        i++;
        if (i >= len) {
          clearInterval(timer);
          setDisable(false);
        }
        setActiveIndex(j);
      }
    }, delay);
  };

  const handleBubbleSort = async () => {
    bubbleSortAlgo();
  };
  const handleInsertionSort = () => {
    selectionSortAlgo();
  };
  const handleSelectionSort = () => {
    setDisable(true);
    setDisable(false);
  };
  const handleMergeSort = () => {
    setDisable(true);
    setDisable(false);
  };
  const handleHeapSort = () => {
    setDisable(true);
    setDisable(false);
  };
  const handleQuickSort = () => {
    setDisable(true);
    setDisable(false);
  };

  return (
    <div className="flex flex-col h-screen w-full m-auto max-w-7xl">
      <Header title="Sorting Visualizer" />
      <div className="flex flex-row m-auto justify-between items-center outline rounded-md p-2 outline-orange-700">
        <ButtonComponent
          disable={disable}
          title="Generate new array"
          callback={generateNewArrayHandler}
        />
        <ButtonComponent
          disable={!disable}
          title="Stop sorting"
          callback={handleStop}
        />
        <Slider
          title={"Length of the array"}
          min={10}
          max={200}
          disable={disable}
          callback={(value: number) => setLength(value)}
        />
        <Slider
          title={"Speed value"}
          min={10}
          max={100}
          disable={disable}
          callback={(value: number) => setDelay(value)}
        />
      </div>
      <div className="flex m-auto flex-row w-full mt-5">
        <div className="flex flex-col h-full w-1/4">
          <ButtonComponent
            disable={disable}
            title="Bubble sort"
            callback={handleBubbleSort}
          />
          <ButtonComponent
            disable={disable}
            title="Selection sort"
            callback={handleSelectionSort}
          />
          <ButtonComponent
            disable={disable}
            title="Insertion sort"
            callback={handleInsertionSort}
          />
          <ButtonComponent
            disable={disable}
            title="Merge sort"
            callback={handleMergeSort}
          />
          <ButtonComponent
            disable={disable}
            title="Heap sort"
            callback={handleHeapSort}
          />
          <ButtonComponent
            disable={disable}
            title="Quick sort"
            callback={handleQuickSort}
          />
        </div>
        <div className="flex flex-col w-3/4 mr-10 outline-dashed outline-orange-400 rounded-md m-2">
          <Visualizer
            data={arrayData}
            max={maxValue}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </div>
  );
}
