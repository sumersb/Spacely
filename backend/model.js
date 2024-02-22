/*
import { DataStore } from '@aws-amplify/datastore';
import { HousingType } from './models';

await DataStore.save(
    new HousingType({
		"house": true,
		"apartment": true,
		"condo": true,
		"townhouse": true,
		"housingDetail": "Lorem ipsum dolor sit amet"
	})
);

//Update
/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly 
 await DataStore.save(HousingType.copyOf(CURRENT_ITEM, item => {
    // Update the values on {item} variable to update DataStore entry
}));

//Delete
const modelToDelete = await DataStore.query(HousingType, 123456789);
DataStore.delete(modelToDelete);

//Query
const models = await DataStore.query(HousingType);
console.log(models);

import { DataStore } from '@aws-amplify/datastore';
import { Location } from './models';
await DataStore.save(
    new Location({
		"address": "Lorem ipsum dolor sit amet",
		"city": "Lorem ipsum dolor sit amet",
		"link":  /* Provide init commands ,
		"state": "Lorem ipsum dolor sit amet"
	})
);
//Update
/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly 
 await DataStore.save(Location.copyOf(CURRENT_ITEM, item => {
    // Update the values on {item} variable to update DataStore entry
}));
//Delete
const modelToDelete = await DataStore.query(Location, 123456789);
DataStore.delete(modelToDelete);
//Query
const models = await DataStore.query(Location);
console.log(models);

import { DataStore } from '@aws-amplify/datastore';
import { Gym } from './models';
await DataStore.save(
    new Gym({
		"gym": true,
		"gymDetail": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete
const modelToDelete = await DataStore.query(Gym, 123456789);
DataStore.delete(modelToDelete);
//Query
const models = await DataStore.query(Gym);
console.log(models);

import { DataStore } from '@aws-amplify/datastore';
import { Laundry } from './models';
await DataStore.save(
    new Laundry({
		"inUnit": true,
		"laundryDetail": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { Pet } from './models';
await DataStore.save(
    new Pet({
		"pet": true,
		"petDetail": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { Parking } from './models';
await DataStore.save(
    new Parking({
		"parking": true,
		"parkingDetail": "Lorem ipsum dolor sit amet",
		"cost": 123.45
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { PostingImages } from './models';
await DataStore.save(
    new PostingImages({
		"images": [],
		"mainImages":  /* Provide init commands 
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { Furnishing } from './models';
await DataStore.save(
    new Furnishing({
		"furnish": true,
		"furnishDetail": "Lorem ipsum dolor sit amet"
	})
);

//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { IndivisualRoommateDetail } from './models';
await DataStore.save(
    new IndivisualRoommateDetail({
		"legalName": "Lorem ipsum dolor sit amet",
		"bio": "Lorem ipsum dolor sit amet",
		"currentroommatesdetailsID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { CurrentRoommatesDetails } from './models';
await DataStore.save(
    new CurrentRoommatesDetails({
		"currentRoomatesNum": 1020,
		"indivisualRoommateDetail": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"IndivisualRoommateDetails": []
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { SearchingForRoommate } from './models';
await DataStore.save(
    new SearchingForRoommate({
		"searching": true,
		"searchingFor": "Lorem ipsum dolor sit amet",
		"notSearchingFor": "Lorem ipsum dolor sit amet",
		"searchingExtraDetails": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { Profile } from './models';
await DataStore.save(
    new Profile({
		"hobbies": "Lorem ipsum dolor sit amet",
		"occupation": "Lorem ipsum dolor sit amet",
		"interests": "Lorem ipsum dolor sit amet",
		"lifestyle": "Lorem ipsum dolor sit amet",
		"preferName": "Lorem ipsum dolor sit amet",
		"pronouns": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { Socials } from './models';
await DataStore.save(
    new Socials({
		"instaLink":  /* Provide init commands ,
		"facebookLink":  /* Provide init commands ,
		"otherLink":  /* Provide init commands ,
		"instahandler": "Lorem ipsum dolor sit amet",
		"socialDetails": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { LeasingPeriod } from './models';
await DataStore.save(
    new LeasingPeriod({
		"starting": "Lorem ipsum dolor sit amet",
		"ending": "Lorem ipsum dolor sit amet",
		"extention": true,
		"availabilityDetails": "Lorem ipsum dolor sit amet",
		"shortTerm": true,
		"longTerm": true
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { SaveList } from './models';
await DataStore.save(
    new SaveList({
		"postID": "Lorem ipsum dolor sit amet",
		"saveListTitle": "Lorem ipsum dolor sit amet",
		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	})
);
//Update

//Delete

//Query


import { DataStore } from '@aws-amplify/datastore';
import { Prices } from './models';
await DataStore.save(
    new Prices({
		"rentCost": 123.45,
		"rentCostDetails": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query



import { DataStore } from '@aws-amplify/datastore';
import { Contents } from './models';
await DataStore.save(
    new Contents({
		"gym": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"parking": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"housingType": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"pets": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"ac": true,
		"heater": true,
		"laundry": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"furnishing": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"Gym": /* Provide a Gym instance here ,
		"Parking": /* Provide a Parking instance here ,
		"HousingType": /* Provide a HousingType instance here ,
		"Pet": /* Provide a Pet instance here ,
		"Laundry": /* Provide a Laundry instance here ,
		"Furnishing": /* Provide a Furnishing instance here 
	})
);
//Update

//Delete

//Query



import { DataStore } from '@aws-amplify/datastore';
import { Bathroom } from './models';
await DataStore.save(
    new Bathroom({
		"bathroomNum": 1020,
		"bathroomDetails": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query



import { DataStore } from '@aws-amplify/datastore';
import { Posting } from './models';
await DataStore.save(
    new Posting({
		"datePostCreated": "1970-01-01Z",
		"timePostCreated": "12:30:23.999Z",
		"title": "Lorem ipsum dolor sit amet",
		"room": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"bathroom": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"contents": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"location": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"postImages": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"prices": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"leasingPeriod": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"Room": /* Provide a Room instance here ,
		"Bathroom": /* Provide a Bathroom instance here ,
		"Contents": /* Provide a Contents instance here ,
		"Location": /* Provide a Location instance here ,
		"PostImages": /* Provide a PostingImages instance here ,
		"Prices": /* Provide a Prices instance here ,
		"LeasingPeriod": /* Provide a LeasingPeriod instance here ,
		"currentRoomates": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	})
);
//Update

//Delete

//Query



import { DataStore } from '@aws-amplify/datastore';
import { Room } from './models';
await DataStore.save(
    new Room({
		"roomNum": 1020,
		"roomDetails": "Lorem ipsum dolor sit amet"
	})
);
//Update

//Delete

//Query



import { DataStore } from '@aws-amplify/datastore';
import { User } from './models';
await DataStore.save(
    new User({
		"legalFirstName": "Lorem ipsum dolor sit amet",
		"email": "test12346789@testemailtestemail.com",
		"searchingForRoommate": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"bio": "Lorem ipsum dolor sit amet",
		"prfilePic":  /* Provide init commands /,
		"posting": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"socials": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"dateCreated": "1970-01-01T12:30:23.999Z",
		"phone": "(555) 123-6789",
		"saveLists": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"profile": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"timeCreated": 1023123,
		"legalLastName": "Lorem ipsum dolor sit amet",
		"SearchingForRoommate": /* Provide a SearchingForRoommate instance here /,
		"Posts": [],
		"Socials": /* Provide a Socials instance here /,
		"SaveLists": [],
		"Profile": /* Provide a Profile instance here /
	})
);
//Update

//Delete

//Query

*/
