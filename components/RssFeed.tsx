import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { parse } from "react-native-rss-parser";

export default function RssFeed() {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    fetch("https://motorsport.uol.com.br/rss/f1/news/")
      .then(response => response.text())
      .then(responseData => parse(responseData))
      .then(data => setFeedItems(data.items))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text>{item.contentSnippet}</Text>
      </View>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={feedItems}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={{flex: 1}}
    />
  );
}

