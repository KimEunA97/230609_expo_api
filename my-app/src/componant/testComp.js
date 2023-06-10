import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export function TestComp() {
  const [data, setData] = useState(null); // 데이터를 저장할 상태
 
  const fetchData = () => {
    fetch('https://openapi.map.naver.com/openapi/v3/maps.js?')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchData(); // 컴포넌트가 마운트되면 데이터를 가져옴
  }, []);

  return (
    <View>
      {data ? (
        <Text>{data}</Text> // 데이터를 화면에 표시하거나 원하는 대로 활용
      ) : (
        <Text>Loading...</Text> // 데이터가 아직 없을 때 로딩 상태를 표시
      )}
    </View>
  );
}
