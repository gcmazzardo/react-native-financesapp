import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Transactions from "../../components/Transactions";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto pag. luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0 //0 = despesas
  },
  {
    id: 2,
    label: "PIX recebido",
    value: "1.024,99",
    date: "11/09/2022",
    type: 1 //1 = entradas
  },
  {
    id: 3,
    label: "TED pag. salário",
    value: "7.900,00",
    date: "01/09/2022",
    type: 1 //1 = entradas
  }
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabriel Mazzardo"></Header>
      <Balance saldo="15.000,00" gastos="-978,94"></Balance>
      <Actions></Actions>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Transactions data={item}></Transactions>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
