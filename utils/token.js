// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config({ path: '../config.env' });

// // export const generateAuthToken = (payload) => {
// //   const token = jwt.sign(
// //     {
// //       payload,
// //     },
// //     process.env.SECRETEKEY,
// //     { expiresIn: '1d' }
// //   );
// //   return token;
// // };
// export const dataFromToken = (token) => {
//   const mytoken = jwt.verify(token, process.env.SECRETEKEY);

//   return mytoken;
// };