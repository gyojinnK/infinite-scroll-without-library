type DataInfoViewerProps = {
  totalCount: number;
  totalPrice: number;
};

const DataInfoViewer: React.FC<DataInfoViewerProps> = ({
  totalCount,
  totalPrice,
}) => {
  return (
    <div className="text-center px-40  sticky top-0 left-0 z-1000">
      <div className="backdrop-blur py-4 bg-[rgba(0, 0, 0, 1)] flex justify-evenly items-center text-">
        <div>
          <p>Number of products displayed</p>
          <h1 className="text-4xl">{totalCount}</h1>
        </div>
        <div>
          <p>Total product price displayed</p>
          <h1 className="text-4xl">{totalPrice}$</h1>
        </div>
      </div>
    </div>
  );
};

export default DataInfoViewer;
