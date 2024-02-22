// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HousingType, Location, Gym, Laundry, Pet, Parking, PostingImages, Furnishing, IndivisualRoommateDetail, CurrentRoommatesDetails, SearchingForRoommate, Profile, Socials, LeasingPeriod, SaveList, Prices, Contents, Bathroom, Posting, Room, User } = initSchema(schema);

export {
  HousingType,
  Location,
  Gym,
  Laundry,
  Pet,
  Parking,
  PostingImages,
  Furnishing,
  IndivisualRoommateDetail,
  CurrentRoommatesDetails,
  SearchingForRoommate,
  Profile,
  Socials,
  LeasingPeriod,
  SaveList,
  Prices,
  Contents,
  Bathroom,
  Posting,
  Room,
  User
};