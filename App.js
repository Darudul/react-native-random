import { useState } from 'react';
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';


const itemList = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' },
  { name: 'Item 4' },
  { name: 'Item 5' },
  { name: 'Item 6' },
  { name: 'Item 7' },
  { name: 'Item 8' },
  { name: 'Item 9' },
  { name: 'Item 10' },
  { name: 'Item 11' },
  { name: 'Item 12' },
  { name: 'Item 13' },
  { name: 'Item 14' },
  { name: 'Item 15' },
]
export default function App() {
  const [items, setItems] = useState(itemList);

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items, { name: 'Item 16' }])
    setRefreshing(false)
  }

  return (
    <FlatList

      keyExtractor={(item, index) => index.toString()}
      data={items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
    // <View style={styles.container}>

    //   <ScrollView
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={refreshing}
    //         onRefresh={onRefresh}
    //         colors={['#ff00ff']}
    //       />
    //     }
    //   >

    //     {
    //       items.map(object => {
    //         return (
    //           <View style={styles.item} key={object.key}>
    //             <Text style={styles.text}>{object.item}</Text>
    //           </View>
    //         )
    //       })
    //     }
    //   </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',

  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: "#000",
    fontSize: 45,
    fontStyle: 'italic',

  }
});
