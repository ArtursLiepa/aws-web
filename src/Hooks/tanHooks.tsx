import {useQuery} from "@tanstack/react-query";
import {fetcher} from "../Utilities/fetcher";

const techPath = "technologies";

const getTechList = () => fetcher(techPath);

const useTSQgetTechList = () => {
  return useQuery({
    queryKey: ["techList"],
    queryFn: getTechList,
    // enabled: isDataLoaded,
    staleTime: Infinity,
  });
};

export {useTSQgetTechList};