import { useEffect, useState } from "react";

const useFetchUsers = () => {
  const [photosList, setPhotoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const photosList = await response.json();
      setPhotoList(photosList);
    };
    fetchData();
  }, []);
  return {
    photosList,
  };
};

export default useFetchUsers;
