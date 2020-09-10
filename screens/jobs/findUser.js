import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Image,ScrollView,
    TextInput,Platform 
  } from 'react-native';
  import HeaderButton from '../../components/ui/HeadderButton';
  import {HeaderButtons,Item} from 'react-navigation-header-buttons';
  import { SearchBar } from 'react-native-elements';
  import filter from 'lodash.filter';

const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;




const  UserOverviewScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
const [fullData, setFullData] = useState([]);


    useEffect(() => {
        setIsLoading(true);
    
        fetch(API_ENDPOINT)
          .then(response => response.json())
          .then(response => {
            setData(response.results);
            setFullData(response.results);
            setIsLoading(false);
          })
          .catch(err => {
            setIsLoading(false);
            setError(err);
          });
      }, []);

      if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#5500dc" />
          </View>
        );
      }
    
      if (error) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18}}>
              Error fetching data... Check your network connection!
            </Text>
          </View>
        );
      }
// console.log(data);
// console.log('@@@@@@@@@@@');
// console.log(fullData);
      return (
<ScrollView>


       
                 <SearchBar style={styles.sear}
          round
          searchIcon={{ size: 24 }}
          
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
         
        //   style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
          // onClear={text => this.SearchFilterFunction('')}
          placeholder="Search...."
          
        />
        <View style={styles.container}>

          <FlatList
            data={data}
            keyExtractor={item => item.first}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.coverImage}
                />
                <View style={styles.metaInfo}>
                  <Text style={styles.title}>{`${item.name.first} ${
                    item.name.last
                  }`}</Text>
                  <Text> {`${item.email}`}</Text>
                </View>
              </View>
            )}
          />
        </View>
        </ScrollView>
      );
      
      function renderHeader() {
        return (
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20
            }}
          >
         <SearchBar
          round
          searchIcon={{ size: 24 }}
          
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
         
        //   style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
          // onClear={text => this.SearchFilterFunction('')}
          placeholder="Search...."
          
        />
       
              
 
            
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={query}
              onChangeText={queryText => handleSearch(queryText)}
              placeholder="Search"
              style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
            />
          </View>
        );
      }





      function handleSearch  (text)  {
        //   setData([]);
        //   console.log('***********************');
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, user => {
            // setData([]);
            return contains(user, formattedQuery);

        });
        setData(filteredData);
        
        setQuery(text);
        // console.log(formattedQuery);
        // console.log(filteredData);
      };
      function contains  ({ name, email }, query)  {
        const { first, last } = name;
      
        if (first.includes(query) || last.includes(query) || email.includes(query)) {
          return true;
        }
      
        return false;
      };

  }
  export default UserOverviewScreen;



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center'
    },
    sear:{
        width:'100%'
    },
    text: {
      fontSize: 20,
      color: '#101010',
      marginTop: 60,
      fontWeight: '700'
    },
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    coverImage: {
      width: 100,
      height: 100,
      borderRadius: 8
    },
    metaInfo: {
      marginLeft: 10
    },
    title: {
      fontSize: 18,
      width: 200,
      padding: 10
    }
  });

  UserOverviewScreen.navigationOptions =navData => {
    return {
    headerTitle: 'All users ',
    headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='profile' iconName={Platform.OS==='android'?'md-person':'ios-person'}
        onPress={()=>{ }}
      />
    </HeaderButtons>)};
  };