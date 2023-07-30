import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  useEffect(() => {

    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) =>{ 
        if(err instanceof CanceledError) return;
        setError(err.message)});

      return ()=> controller.abort()
  }, []);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  return {
    games, error
  };
};

export default useGames;
