import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

const { height, width } = Dimensions.get('window');

export default class ResumeScreen extends React.Component {

    static navigationOptions = {
      header: null,
    /*  title: "iHelp", */
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>iHelper</Title>
            </Body>
            <Right>
            </Right>
          </Header>
          <Content>
            <View style={styles.user}>
              <Image style={styles.avatar} source={require('../img/avatar.png')} />
              <Text>João Paulo</Text>
            </View>
            <View style={styles.dashboard}>
              <Text style={styles.title}>Gráfico de Clientes</Text>
              <View style={styles.graphcenter}>
                <Image style={styles.graph} source={require('../img/graph.png')} />
              </View>
            </View>
            <View style={styles.ads}>
              <Image style={styles.ad} source={require('../img/ad.jpg')}/>
            </View>
            <View style={styles.placeContainer}>
              <View style={styles.place}>
                <Text>João Paulo</Text>
                <Text>Sempre disponível</Text>
                <Text>Já trabalhou numa loja de consertos</Text>
                <Text>Endereço: Rua Cosmo e Damião</Text>
                <Text>Contato: (85)11111-1111</Text>
                <TouchableOpacity style={styles.call}>
                  <Text style={styles.textLight}>Ligar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Content>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    placeContainer: {
      width: '100%',
      maxHeight: 200,
    },
    place: {
      width: width - 40,
      maxHeight: 200,
      backgroundColor: '#fff',
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    call: {
      width: '50%',
      backgroundColor: '#3fad7a',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      paddingTop: 7,
      paddingBottom: 7,
    },
    ads: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
    },
    ad: {
      position: 'relative',
      width: '90%',
      resizeMode: 'contain',
    },
    dashboard: {
      backgroundColor: '#fff',
      padding: 10,
      margin: 10,
    },
    title: {
      marginLeft: 10,
      fontWeight: 'bold',
    },
    graphcenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    graph: {
      flex: 1,
      height: 130,
      width: 347,
    },
    user: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor:"#3fad7a",
    },
    avatar: {
      flex: 1,
      margin: '5%',
      height: 100,
      width: 100,
      borderRadius: 100,
    },
    textLight: {
      color: '#fff',
    },
    textDark: {
        color: '#000',
    },
  });
