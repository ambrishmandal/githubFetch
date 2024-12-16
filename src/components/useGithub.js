import { useState, useEffect } from 'react';

function useGithub(userName) {
  const [data, setData] = useState(null);
 

  const getData = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        console.error(err); // Corrected here
      });
  };

  useEffect(getData, []); // Added an empty dependency array
  return data;
}

export default useGithub;
