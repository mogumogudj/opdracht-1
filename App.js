import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

function handlePress() {
  console.log("highlighted out of class");
}
function handlePress1() {
  console.log("Read Book 1");
}
function handlePress2() {
  console.log("Read Book 2");
}
function handlePress3() {
  console.log("Read Book 3");
}
function handlePress4() {
  console.log("Read Book 4");
}
function bookTitle1() {
  console.log("Book title 1 clicked");
}
function bookTitle2() {
  console.log("Book title 2 clicked");
}
function bookTitle3() {
  console.log("Book title 3 clicked");
}
function bookTitle4() {
  console.log("Book title 4 clicked");
}
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navigation}>
      <Text style={styles.bigTitle}>Bookshop</Text>
      <Text style={styles.shoppingCartCounter}>1</Text>
      <Image style={styles.shoppingCart} source={require('./assets/shopping-cart-2.png')}/>
      </View>
      <View style={styles.tilesContainer}>
        <TouchableHighlight>
          
          
          
          <View style={styles.tile}>
            <Text onPress={() => bookTitle1()} style={styles.tileHeader}>Book title 1</Text>
            <Text style={styles.tileByWho}>by Some Random Dude</Text>
            <Text style={styles.tileDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                 Integer luctus, null sit amet pellentesque ultricies,
                                                 magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <Text style={styles.tileISBN}>ISBN 978-8-2165-1860-1</Text>
            <Text underlayColor="red" onPress={() => handlePress1()} style={styles.tileButton}>Read</Text>
          </View>
        </TouchableHighlight>


        <TouchableHighlight underlayColor="blue" onPress={() => handlePress()} style={styles.tile}>
          <View>
          <Text onPress={() => bookTitle2()} style={styles.tileHeader}>Book title 2</Text>
            <Text style={styles.tileByWho}>by Some Random Dude</Text>
            <Text style={styles.tileDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                 Integer luctus, null sit amet pellentesque ultricies,
                                                 magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <Text style={styles.tileISBN}>ISBN 978-8-2165-1860-1</Text>
            <Text underlayColor="red" onPress={() => handlePress2()} style={styles.tileButton}>Read</Text>
          </View>
        </TouchableHighlight>



        <TouchableNativeFeedback>
          <View style={styles.tile}>
          <Text onPress={() => bookTitle3()} style={styles.tileHeader}>Book title 3</Text>
            <Text style={styles.tileByWho}>by Some Random Dude</Text>
            <Text style={styles.tileDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                 Integer luctus, null sit amet pellentesque ultricies,
                                                 magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <Text style={styles.tileISBN}>ISBN 978-8-2165-1860-1</Text>
            <Text style={styles.tileButton} underlayColor="red" onPress={() => handlePress3()}>Read</Text>
          </View>
        </TouchableNativeFeedback>




        <TouchableOpacity activeOpacity={0.1} onPress={() => handlePress()} style={styles.tile}>
          <View>
          <Text onPress={() => bookTitle4()} style={styles.tileHeader}>Book title 4</Text>
            <Text style={styles.tileByWho}>by Some Random Dude</Text>
            <Text style={styles.tileDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                 Integer luctus, null sit amet pellentesque ultricies,
                                                 magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <Text style={styles.tileISBN}>ISBN 978-8-2165-1860-1</Text>
            <Text underlayColor="red" onPress={() => handlePress4()} style={styles.tileButton}>Read</Text>
          </View>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
    //

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'down',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },
  tile: {
    flexBasis: '50%',//200
    bottomBorderRadius: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    borderBottomStyle: 'solid',
    marginVertical: '2%',
    padding: 10,
    margin: 20,
  },
  tileHeader: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '600',
  },
  bigTitle: {
    fontSize: 40,
    padding: 20,
    flex: 1,
    margin: 0,
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 500,
    
  }, 
  shoppingCart: {
    flex: 1,
    margin: 20,
    maxHeight: 64,
  },
  shoppingCartCounter: {
    left: 160,
    paddingTop: 75,
    fontSize: 25,
  },
  tileDescription: {
    marginTop: 16,
  },
  tileISBN: {
    marginTop: 22,
  },
  tileButton: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 8,
    width: 80,
    textAlign: 'center',
    left: 240,
    bottom: 25,
    borderRadius: 5,
    shadowColor: 'red',
    shadowOpacity: 2,
    shadowRadius: 10,
  }


});

