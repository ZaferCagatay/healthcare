import * as sdk from 'node-appwrite';

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);
// client
//   .setEndpoint('https://cloud.appwrite.io/v1')
//   .setProject('668bc56b002109ce043d')
//   .setKey(
//     'ebe8027f4984e2b96f823dcfcf294f8b32a29f82fed75c9b0de982d7b2c7815645dd966c71cba755fef527e859b9e9e34d6525466f0c95532e291175530ce0b5ec36f3f844f3426f9efb87dfa963ff865b38405b1f12c71e59e812a6f6cf49a5fa5ac75accb3ee1c0ece1bec188ec1acf91d1e46acc1a02761d9bec4998f268c'
//   );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
