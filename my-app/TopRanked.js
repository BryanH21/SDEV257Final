import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';

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
    <View>
      <FlatList data = {films} 
        renderItem = {({item}) => 
          <View style = {styles.movie}>
            <Text style = {styles.header}>{item.title + " (" + item.release_date.slice(0, 4) + ")"}</Text>
            <Text>{item.overview}</Text>
          </View>}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  movie:{
    margin: 10,
    padding: 10
  },
  header:{
    fontWeight:'bold',
    fontSize: 16
  }
});
