import useHomeParams from "./useHomeParams";

const usePageNumber = () => {
  const { page } = useHomeParams();
  return page ? parseInt(page) : 0;
};

export default usePageNumber;
