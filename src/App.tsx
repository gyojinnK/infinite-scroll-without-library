import { useEffect } from "react";
import DataViewer from "./components/DataViewer";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { getMockData } from "./mocks/mockData";
import DataInfoViewer from "./components/DataInfoViewer";

function App() {
  const {
    data,
    pageNumber,
    hasData,
    isLoading,
    setData,
    setIsLoading,
    nextPageHandler,
  } = useInfiniteScroll();

  useEffect(() => {
    const firstPageHandler = async () => {
      setIsLoading(true);
      const firstPage = await getMockData(pageNumber.current);
      setData(firstPage.data);
      setIsLoading(false);
    };
    firstPageHandler();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", nextPageHandler);

    return () => {
      window.removeEventListener("scroll", nextPageHandler);
    };
  }, [pageNumber]);

  const totalPrice = data.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <DataInfoViewer totalCount={data.length} totalPrice={totalPrice} />
      <DataViewer data={data} isLoading={isLoading} hasData={hasData} />
    </div>
  );
}

export default App;
