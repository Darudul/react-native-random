import { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';


const itemList = [
  { key: 1, item: 'Item 1' },
  { key: 2, item: 'Item 2' },
  { key: 3, item: 'Item 3' },
  { key: 4, item: 'Item 4' },
  { key: 5, item: 'Item 5' },
  { key: 6, item: 'Item 6' },
  { key: 7, item: 'Item 7' },
  { key: 8, item: 'Item 8' },
  { key: 9, item: 'Item 9' },
  { key: 10, item: 'Item 10' },
  { key: 11, item: 'Item 11' },
  { key: 12, item: 'Item 12' },
  { key: 13, item: 'Item 13' },
  { key: 14, item: 'Item 14' },
  { key: 15, item: 'Item 15' },
]
export default function App() {
  const [items, setItems] = useState(itemList);

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items, { key: 16, item: 'Item 16' }])
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }
      >

        {
          items.map(object => {
            return (
              <View style={styles.item} key={object.key}>
                <Text style={styles.text}>{object.item}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
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
