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
import UserItem from '../../components/user/useritem';
const API_ENDPOINT = `https://hazajob.herokuapp.com/api/v1/users`;
import userDetailScreen from '../user/userDetailScreen';
import { useSelector, useDispatch } from 'react-redux';
// import * as token from '../../utils/token';



const  UserOverviewScreen = props => {
  
  const userToken = useSelector(state=> state.auth.token);

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
const [fullData, setFullData] = useState([]);

// console.log(userToken);
    useEffect(() => {
        setIsLoading(true);
    
        fetch(API_ENDPOINT,{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'x_auth_token':userToken
          }})
          .then(response => response.json())
          .then(response => {
            setData(response.data.users);
            setFullData(response.data.users);
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
// console.log(token.dataFromToken(userToken));
      return (
<ScrollView>


       
                 <SearchBar 
          round
          searchIcon={{ size: 24 }}
          
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
         
        //   style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
          // onClear={text => this.SearchFilterFunction('')}
          placeholder="Search...."
          
        />
        <View >

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

              <UserItem 
              
              profilePicture={item.profilePicture}
              lastName={item.lastName}
              firstName={item.firstName}
              motor={item.motor}
              country={item.location.country}
              province={item.location.province}
              district={item.location.district}

              onViewDetail={() => {
                props.navigation.navigate('UserDetail', {
                  userId: item.id,
                  data  
                });
              }}
              />


      
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
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, user => {
        return contains(user, formattedQuery);

        });
        setData(filteredData);
        
        setQuery(text);
      };
      function contains  ({ firstName,lastName, phone }, query)  {
        // const { firstName, lastName } = name;
      
        if (firstName.includes(query) || lastName.includes(query) || phone.includes(query)) {
          return true;
        }
      
        return false;
      };

  }
  export default UserOverviewScreen;




  UserOverviewScreen.navigationOptions =navData => {
    return {
    headerTitle: 'Find users ',
    headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='profile' iconName={Platform.OS==='android'?'md-person':'ios-person'}
        onPress={()=>{ }}
      />
    </HeaderButtons>)};
  };