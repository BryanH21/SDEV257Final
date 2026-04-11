import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

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
          <View>
            <Text >{item.original_title}</Text>
            </View>}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
