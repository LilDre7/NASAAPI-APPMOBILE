import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import fetchApi from "../../utils/fetch";
import TodaysImage from "../../components/TodaysImage";
import { PostImage } from "../../types";

//** Format es un módulo de fecha-fns que nos permite formatear fechas y hora.
import { format , sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

const Home = () => {
  const [istodaysImage, setTodaysImage] = useState<PostImage>({});

  const [isLastFiveDaysImage, setLastFiveDaysImage] = useState<PostImage[]>([])

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    const loadDaysImages = async () => {
      try {
        const date = new Date();
        const todayDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd") 

        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`
        );

        setLastFiveDaysImage(lastFiveDaysImagesResponse);
      } catch (error) {
        console.log(error);
      }
    }

    loadTodaysImage().catch(null);
    loadDaysImages().catch(null);
  }, []);


  return (
    <View>
      <Header />
      <TodaysImage {...istodaysImage} />
      <LastFiveDaysImages postImages={isLastFiveDaysImage} />
    </View>
  );
};

export default Home;
