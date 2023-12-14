import { useEffect, useState } from "react";
import GitCard from "./GitCard";
import "./Github.css";
import axios from "axios";

const Github = () => {
  const [data, setData] = useState([]);

  const getGit = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/salihbstg/repos"
      );
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error("GitHub repos alınamadı:", error);
    }
  };

  useEffect(() => {
    // Bu blok, bileşen ilk render edildiğinde çalışır
    getGit();
  }, []);

  return (
    <section id="github" className="git z-[-2]">
      <h3 className="text-center text-5xl my-10 z-[-1] ">Github</h3>
      <div className="git-wrapper flex gap-10 p-10 flex-wrap border-t z-[-1] border-black justify-center w-[76%] mx-auto rounded-3xl">
        {data.map((repo, index) => (
          <GitCard url={repo.html_url} name={repo.name} key={index}></GitCard>
        ))}
      </div>
    </section>
  );
};

export default Github;
