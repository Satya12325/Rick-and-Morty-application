import styles from "./home.module.css";
import { Cards } from "../Components/Cards";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [cors,setCors]= useState([])
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const result = await res.json();
      console.log(result.results);
      setData(result.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const indexOflastPost = page * totalPages;
  const indexOffirst = indexOflastPost - totalPages;
  let currpost = data.slice(indexOffirst, indexOflastPost);
  
  useEffect(() => {
    getData();
    if (data.length) {
      const totalPages = Math.floor(data.length / 3);
      setTotalPages(totalPages);
    }
  }, [page]);
  useEffect(()=>{
    getData();
    
  },[])
 
  
  // setCors(data.slice(indexOffirst, indexOflastPost))
  console.log(currpost,"curr")
  return (
    <div>
      <div>
        <h1 className={styles.home}>The Rick and Morty API</h1>
      </div>
      <div style={{ background: "#202329", margin: "0px" }}>
        <div className={styles.homepage}>
          {loading ? (
            
            <div className={styles.progress}>
              <CircularProgress color="success" />
            </div>
          ) : (
            currpost?.map((item) => (
              <Cards
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                Lastlocation={item.location.name}
                firstlocation={item.origin.name}
              />
            ))
          )}
        </div>
        <div className={styles.pageBtns}>
          <button
            className={styles.btns}
            onClick={() => {
              if (page === 1) {
                return false;
              }
              setPage(page - 1);
            }}
          >
            {"<"}
          </button>
          <h1 style={{ color: "white" }}>{page}</h1>
          <button
            className={styles.btns}
            onClick={() => {
              if (page === data.length / 5) {
                return false;
              }
              setPage(page + 1);
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
export { Home };
