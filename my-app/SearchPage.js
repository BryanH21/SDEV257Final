import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import styles from './styles';

export default function SearchScreen() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  

  // Fetch Top Rated Movies from TMDB KEY!!!!!!!!!
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjA4Nzg0Y2IyYTg0NmEzYTg5Y2U2NDEzZjVhN2ZhYyIsIm5iZiI6MTc3NTkyMzU5Mi40Njg5OTk5LCJzdWIiOiI2OWRhNzE4ODk2MjAwMWJhODJjNzMxOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1gW5LoqdkmE2t_9zHBByLj22HUbCicvZvUVmdO8nxNI'
      }};

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated", options
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setMovies(data.results);
        }
      })
      .catch((err) => console.log("TMDB API ERROR:", err));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <View style={styles.searchBoxContainer}> 
        <TextInput
          style={styles.searchBox}
          placeholder="Type to search..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}> 
            <Text style={styles.movieText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

