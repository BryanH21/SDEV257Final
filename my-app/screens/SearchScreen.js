// ------------------------------------------------------
// TEMP VERSION: Local-only search screen
// This does NOT use the TMDB API yet.
// Replace the local movies[] array with a real fetch()
// with the API key
// ------------------------------------------------------

import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

export default function SearchScreen() {
  // Local dummy movie data (no API key needed)
  const movies = [
    { id: 1, title: "The Shawshank Redemption" },
    { id: 2, title: "The Godfather" },
    { id: 3, title: "The Dark Knight" },
    { id: 4, title: "Pulp Fiction" },
    { id: 5, title: "Forrest Gump" },
    { id: 6, title: "Inception" },
  ];

  const [searchText, setSearchText] = useState("");

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
