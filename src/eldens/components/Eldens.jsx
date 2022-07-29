import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EldenService from "../service/EldenService";
import EldenList from "./EldenList";
import throttle from "lodash.throttle";

const eldenService = new EldenService();

const Eldens = () => {
  const [next, setNext] = useState(0);
  const [initial, setInitial] = useState([]);

  const fetchNext = throttle(async () => {
    if (
      window.scrollY + window.innerHeight ===
      document.body.getBoundingClientRect().height
    ) {
      if (next) {
        const eldens = await eldenService.getEldens(next);

        if (eldens) {
          setInitial([...initial, ...eldens]);
          setNext(next + 1);
        }
      }
    }
  });

  const getEldens = async () => {
    const eldens = await eldenService.getEldens(next);

    console.log(eldens);

    setInitial(eldens);
    setNext(next + 1);
  };

  useEffect(() => {
    getEldens();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", fetchNext);

    return () => {
      window.removeEventListener("scroll", fetchNext);
    };
  }, []);

  return <EldenList eldens={initial} />;
};

export default Eldens;
