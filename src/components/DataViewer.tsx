import DataCard from "./DataCard";
import Skeleton from "./Skeleton";
import { MockData } from "../types/mockDataType";
import EndOfDataCard from "./EndOfDataCard";

type DataViewerProps = {
  data: MockData[];
  isLoading: boolean;
  hasData: boolean;
};

const DataViewer: React.FC<DataViewerProps> = ({
  data,
  isLoading,
  hasData,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-40 mb-4">
      {data &&
        data.map((item) => (
          <DataCard
            key={item.productId}
            productId={item.productId}
            productName={item.productName}
            price={item.price}
            boughtDate={item.boughtDate}
          />
        ))}
      {isLoading &&
        hasData &&
        Array(8)
          .fill(0)
          .map((_, idx) => <Skeleton key={idx} />)}
      {!hasData && <EndOfDataCard />}
    </div>
  );
};

export default DataViewer;
