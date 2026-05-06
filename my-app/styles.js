import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#504459',
  },
  movie: {
    margin: 10,
    padding: 5,
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: 'lightgray',
  },
  header: {
    paddingBottom: 8,
    borderBottomWidth: 2
  },
  overview: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    textAlign: 'left',
    fontSize: 16,
  },
  status: {
    backgroundColor: '#504459'
  },
  nav: {
    backgroundColor: '#504459'
  },  
  title: {
    fontWeight:'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  rating: {
    fontSize: 18,
    textAlign: 'center',
  },
  searchBoxContainer: {
    borderBottomWidth: 2,
    backgroundColor: 'lightgray',
  },
  searchBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    margin: 20,
  },
  movieText: {
    fontSize: 18,
    paddingVertical: 8,
    textAlign: 'center',

  },
  movieItem: {
    backgroundColor: 'lightgray',
    borderBottomColor: "#333",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  watchlistContainer: {
    height: '20%',
    backgroundColor: '#504459',
    borderTopWidth: 2
  },
  sectionTitle: {
    backgroundColor: 'lightgray',
    borderBottomWidth: 2,
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },
  button: {
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 5,
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#4c729c',
  },
  buttonText: {
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  empty: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  removeButton: {
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 5,
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#9c5e5a',
  },
})
