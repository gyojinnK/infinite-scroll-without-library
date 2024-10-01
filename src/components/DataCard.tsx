import { convertDate } from "../utils/convertDate";

type DataCardProps = {
  productId: string;
  productName: string;
  price: number;
  boughtDate: string;
};

const DataCard: React.FC<DataCardProps> = ({
  productName,
  price,
  boughtDate,
}) => {
  return (
    <div className="rounded-lg text-white bg-blue-500 mx-auto p-4 w-full h-[12rem] shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-2xl">{productName}</h3>
        <p className="text-lg">
          <strong>{price}$</strong>
        </p>
      </div>
      <p className="self-end">{convertDate(boughtDate)}</p>
    </div>
  );
};

export default DataCard;
