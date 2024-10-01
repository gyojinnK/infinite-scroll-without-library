import { useRef, useState } from "react";
import { getMockData } from "../mocks/mockData";
import { MockData } from "../types/mockDataType";

export const useInfiniteScroll = () => {
  const [data, setData] = useState<MockData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasData, setHasData] = useState<boolean>(true);
  const pageNumber = useRef(1);

  const nextPageHandler = async () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    if (scrollTop + window.innerHeight >= scrollHeight && !isLoading) {
      pageNumber.current += 1;
      setIsLoading(true);
      const { data, isEnd } = await getMockData(pageNumber.current);
      if (data) {
        setData((prev) => [...prev, ...data]);
        setIsLoading(false);
      }
      if (isEnd) {
        setHasData(false);
      }
    }
  };

  return {
    data,
    setData,
    pageNumber,
    hasData,
    isLoading,
    setIsLoading,
    nextPageHandler,
  };
};
