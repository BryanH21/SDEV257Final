import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList} from 'react-native';
import styles from './styles';

export default function TopRanked() {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms()    
  }, [])

  const getFilms = () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjA4Nzg0Y2IyYTg0NmEzYTg5Y2U2NDEzZjVhN2ZhYyIsIm5iZiI6MTc3NTkyMzU5Mi40Njg5OTk5LCJzdWIiOiI2OWRhNzE4ODk2MjAwMWJhODJjNzMxOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1gW5LoqdkmE2t_9zHBByLj22HUbCicvZvUVmdO8nxNI'
      }
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFilms(data.results);
      })
      .then(() => {
        //console.log(films);
      })

  }

  return (
    <View style={styles.container}>
      <FlatList data = {films} 
        renderItem = {({item}) => 
          <View style = {styles.movie}>
            <View style={styles.header}> 
              <Text style={styles.title}>{item.title + " (" + item.release_date.slice(0, 4) + ")"}</Text>
              <Text style={styles.rating}> Rating: {item.vote_average}</Text>
            </View>
            <Text style={styles.overview}>{item.overview}</Text>
          </View>}
        />
      <StatusBar />
    </View>
  );
}
