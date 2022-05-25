import React, { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "./../components/RightSidebar";
import HeartIcon from "./../components/assets/icons/HeartIcon";
import InfiniteScroll from "react-infinite-scroll-component";

const Hadith = () => {
  const [data, setData] = useState();
  // const [page, setPage] = useState(20);
  const { perawiSlug } = useParams();

  const fetchData = (page) => {
    console.log(page)
    axios
      .get(
        `https://hadis-api-id.vercel.app/hadith/${perawiSlug}?page=1&limit=${page || 10}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  const fetchDataMore = () => {
    fetchData(data.pagination.pageSize + 10)
    console.log(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="bg-white ml-24 w-3/4  mt-32 justify-center  flex flex-row wrap flex-wrap gap-5 px-8 py-6">
        <h1 className="text-2xl font-bold">HR Ahmad</h1>
        <ul>
          <InfiniteScroll
            dataLength={data?.pagination?.endIndex || 20} 
            next={fetchDataMore}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {data?.items.map((res) => {
              return (
                <>
                  <li
                    key={res.number}
                    className="font-poppins border-b py-5 flex flex-col space-y-10 list-none"
                  >
                    <div className="flex flex-row justify-between px-5">
                      <span className="font-bold">{res.number}</span>
                      <button>
                        <HeartIcon />
                      </button>
                    </div>
                    <span className="text-3xl">{res.arab}</span>
                    <span className="text-md ">{res.id}</span>
                  </li>{" "}
                </>
              );
            })}
          </InfiniteScroll>
        </ul>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Hadith;
