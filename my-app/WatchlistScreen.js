import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function WatchlistScreen() {
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjA4Nzg0Y2IyYTg0NmEzYTg5Y2U2NDEzZjVhN2ZhYyIsIm5iZiI6MTc3NTkyMzU5Mi40Njg5OTk5LCJzdWIiOiI2OWRhNzE4ODk2MjAwMWJhODJjNzMxOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1gW5LoqdkmE2t_9zHBByLj22HUbCicvZvUVmdO8nxNI",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => setMovies(data.results));
    };

    const addToWatchlist = (movie) => {
        const alreadyAdded = watchlist.some((m) => m.id === movie.id);
        if (!alreadyAdded) {
            setWatchlist([...watchlist, movie]);
        }
    };

    const removeFromWatchlist = (movieId) => {
        setWatchlist(watchlist.filter((m) => m.id !== movieId));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Popular Movies</Text>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.movie}>
                        <Text style={styles.title}>{item.title} ({item.release_date.slice(0, 4)})</Text>
                        <TouchableOpacity style={styles.button} onPress={() => addToWatchlist(item)}>
                            <Text style={styles.buttonText}>+ Add to Watchlist</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Text style={styles.sectionTitle}>My Watchlist</Text>
            {watchlist.length === 0 ? (
                <Text style={styles.empty}>No movies added yet.</Text>
            ) : (
                <FlatList
                    data={watchlist}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.movie}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity style={styles.removeButton} onPress={() => removeFromWatchlist(item.id)}>
                                <Text style={styles.buttonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 15, marginBottom: 5 },
    movie: { padding: 10, marginBottom: 8, backgroundColor: "#f0f0f0", borderRadius: 6 },
    title: { fontWeight: "bold", fontSize: 14, marginBottom: 4 },
    button: { backgroundColor: "#007AFF", padding: 6, borderRadius: 4, alignSelf: "flex-start" },
    removeButton: { backgroundColor: "#FF3B30", padding: 6, borderRadius: 4, alignSelf: "flex-start" },
    buttonText: { color: "#fff", fontSize: 12 },
    empty: { color: "#999", fontStyle: "italic", marginLeft: 5 },
});