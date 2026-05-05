

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

export default function SearchScreen() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch Top Rated Movies from TMDB KEY!!!!!!!!!
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=KEY go HERE"
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
      <Text style={styles.header}>Search Movies</Text>

      <TextInput
        style={styles.searchBox}
        placeholder="Type to search..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.movieItem}>{item.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#111",
  },
  header: {
    fontSize: 24,
    color: "white",
    marginBottom: 10,
  },
  searchBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  movieItem: {
    color: "white",
    fontSize: 18,
    paddingVertical: 8,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
});
