import React,{Component}  from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store/index';

import mainNavigation from './src/navigation/mainNavigation';


export default mainNavigation;
// export default App =()=> {

//     return( 
//     <Provider store={store}>
//         <mainNavigation/>
//         </Provider>
//         )

// } 