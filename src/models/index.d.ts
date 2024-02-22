import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerHousingType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HousingType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly house?: boolean | null;
  readonly apartment?: boolean | null;
  readonly condo?: boolean | null;
  readonly townhouse?: boolean | null;
  readonly housingDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHousingType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HousingType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly house?: boolean | null;
  readonly apartment?: boolean | null;
  readonly condo?: boolean | null;
  readonly townhouse?: boolean | null;
  readonly housingDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HousingType = LazyLoading extends LazyLoadingDisabled ? EagerHousingType : LazyHousingType

export declare const HousingType: (new (init: ModelInit<HousingType>) => HousingType) & {
  copyOf(source: HousingType, mutator: (draft: MutableModel<HousingType>) => MutableModel<HousingType> | void): HousingType;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly link?: string | null;
  readonly state?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly link?: string | null;
  readonly state?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerGym = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gym, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gym?: boolean | null;
  readonly gymDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGym = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gym, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gym?: boolean | null;
  readonly gymDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Gym = LazyLoading extends LazyLoadingDisabled ? EagerGym : LazyGym

export declare const Gym: (new (init: ModelInit<Gym>) => Gym) & {
  copyOf(source: Gym, mutator: (draft: MutableModel<Gym>) => MutableModel<Gym> | void): Gym;
}

type EagerLaundry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Laundry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly inUnit?: boolean | null;
  readonly laundryDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLaundry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Laundry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly inUnit?: boolean | null;
  readonly laundryDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Laundry = LazyLoading extends LazyLoadingDisabled ? EagerLaundry : LazyLaundry

export declare const Laundry: (new (init: ModelInit<Laundry>) => Laundry) & {
  copyOf(source: Laundry, mutator: (draft: MutableModel<Laundry>) => MutableModel<Laundry> | void): Laundry;
}

type EagerPet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pet?: boolean | null;
  readonly petDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pet?: boolean | null;
  readonly petDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pet = LazyLoading extends LazyLoadingDisabled ? EagerPet : LazyPet

export declare const Pet: (new (init: ModelInit<Pet>) => Pet) & {
  copyOf(source: Pet, mutator: (draft: MutableModel<Pet>) => MutableModel<Pet> | void): Pet;
}

type EagerParking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parking?: boolean | null;
  readonly parkingDetail?: string | null;
  readonly cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parking?: boolean | null;
  readonly parkingDetail?: string | null;
  readonly cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Parking = LazyLoading extends LazyLoadingDisabled ? EagerParking : LazyParking

export declare const Parking: (new (init: ModelInit<Parking>) => Parking) & {
  copyOf(source: Parking, mutator: (draft: MutableModel<Parking>) => MutableModel<Parking> | void): Parking;
}

type EagerPostingImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostingImages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly images?: (string | null)[] | null;
  readonly mainImages?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostingImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostingImages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly images?: (string | null)[] | null;
  readonly mainImages?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostingImages = LazyLoading extends LazyLoadingDisabled ? EagerPostingImages : LazyPostingImages

export declare const PostingImages: (new (init: ModelInit<PostingImages>) => PostingImages) & {
  copyOf(source: PostingImages, mutator: (draft: MutableModel<PostingImages>) => MutableModel<PostingImages> | void): PostingImages;
}

type EagerFurnishing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Furnishing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly furnish?: boolean | null;
  readonly furnishDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFurnishing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Furnishing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly furnish?: boolean | null;
  readonly furnishDetail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Furnishing = LazyLoading extends LazyLoadingDisabled ? EagerFurnishing : LazyFurnishing

export declare const Furnishing: (new (init: ModelInit<Furnishing>) => Furnishing) & {
  copyOf(source: Furnishing, mutator: (draft: MutableModel<Furnishing>) => MutableModel<Furnishing> | void): Furnishing;
}

type EagerIndivisualRoommateDetail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IndivisualRoommateDetail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly legalName?: string | null;
  readonly bio?: string | null;
  readonly currentroommatesdetailsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIndivisualRoommateDetail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IndivisualRoommateDetail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly legalName?: string | null;
  readonly bio?: string | null;
  readonly currentroommatesdetailsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type IndivisualRoommateDetail = LazyLoading extends LazyLoadingDisabled ? EagerIndivisualRoommateDetail : LazyIndivisualRoommateDetail

export declare const IndivisualRoommateDetail: (new (init: ModelInit<IndivisualRoommateDetail>) => IndivisualRoommateDetail) & {
  copyOf(source: IndivisualRoommateDetail, mutator: (draft: MutableModel<IndivisualRoommateDetail>) => MutableModel<IndivisualRoommateDetail> | void): IndivisualRoommateDetail;
}

type EagerCurrentRoommatesDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CurrentRoommatesDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentRoomatesNum?: number | null;
  readonly indivisualRoommateDetail?: string | null;
  readonly IndivisualRoommateDetails?: (IndivisualRoommateDetail | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCurrentRoommatesDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CurrentRoommatesDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentRoomatesNum?: number | null;
  readonly indivisualRoommateDetail?: string | null;
  readonly IndivisualRoommateDetails: AsyncCollection<IndivisualRoommateDetail>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CurrentRoommatesDetails = LazyLoading extends LazyLoadingDisabled ? EagerCurrentRoommatesDetails : LazyCurrentRoommatesDetails

export declare const CurrentRoommatesDetails: (new (init: ModelInit<CurrentRoommatesDetails>) => CurrentRoommatesDetails) & {
  copyOf(source: CurrentRoommatesDetails, mutator: (draft: MutableModel<CurrentRoommatesDetails>) => MutableModel<CurrentRoommatesDetails> | void): CurrentRoommatesDetails;
}

type EagerSearchingForRoommate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SearchingForRoommate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly searching?: boolean | null;
  readonly searchingFor?: string | null;
  readonly notSearchingFor?: string | null;
  readonly searchingExtraDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySearchingForRoommate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SearchingForRoommate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly searching?: boolean | null;
  readonly searchingFor?: string | null;
  readonly notSearchingFor?: string | null;
  readonly searchingExtraDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SearchingForRoommate = LazyLoading extends LazyLoadingDisabled ? EagerSearchingForRoommate : LazySearchingForRoommate

export declare const SearchingForRoommate: (new (init: ModelInit<SearchingForRoommate>) => SearchingForRoommate) & {
  copyOf(source: SearchingForRoommate, mutator: (draft: MutableModel<SearchingForRoommate>) => MutableModel<SearchingForRoommate> | void): SearchingForRoommate;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hobbies?: string | null;
  readonly occupation?: string | null;
  readonly interests?: string | null;
  readonly lifestyle?: string | null;
  readonly preferName?: string | null;
  readonly pronouns?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hobbies?: string | null;
  readonly occupation?: string | null;
  readonly interests?: string | null;
  readonly lifestyle?: string | null;
  readonly preferName?: string | null;
  readonly pronouns?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerSocials = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Socials, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instaLink?: string | null;
  readonly facebookLink?: string | null;
  readonly otherLink?: string | null;
  readonly instahandler?: string | null;
  readonly socialDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySocials = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Socials, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instaLink?: string | null;
  readonly facebookLink?: string | null;
  readonly otherLink?: string | null;
  readonly instahandler?: string | null;
  readonly socialDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Socials = LazyLoading extends LazyLoadingDisabled ? EagerSocials : LazySocials

export declare const Socials: (new (init: ModelInit<Socials>) => Socials) & {
  copyOf(source: Socials, mutator: (draft: MutableModel<Socials>) => MutableModel<Socials> | void): Socials;
}

type EagerLeasingPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeasingPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly starting?: string | null;
  readonly ending?: string | null;
  readonly extention?: boolean | null;
  readonly availabilityDetails?: string | null;
  readonly shortTerm?: boolean | null;
  readonly longTerm?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLeasingPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeasingPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly starting?: string | null;
  readonly ending?: string | null;
  readonly extention?: boolean | null;
  readonly availabilityDetails?: string | null;
  readonly shortTerm?: boolean | null;
  readonly longTerm?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LeasingPeriod = LazyLoading extends LazyLoadingDisabled ? EagerLeasingPeriod : LazyLeasingPeriod

export declare const LeasingPeriod: (new (init: ModelInit<LeasingPeriod>) => LeasingPeriod) & {
  copyOf(source: LeasingPeriod, mutator: (draft: MutableModel<LeasingPeriod>) => MutableModel<LeasingPeriod> | void): LeasingPeriod;
}

type EagerSaveList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SaveList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postID?: string | null;
  readonly saveListTitle?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySaveList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SaveList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postID?: string | null;
  readonly saveListTitle?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SaveList = LazyLoading extends LazyLoadingDisabled ? EagerSaveList : LazySaveList

export declare const SaveList: (new (init: ModelInit<SaveList>) => SaveList) & {
  copyOf(source: SaveList, mutator: (draft: MutableModel<SaveList>) => MutableModel<SaveList> | void): SaveList;
}

type EagerPrices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rentCost?: number | null;
  readonly rentCostDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rentCost?: number | null;
  readonly rentCostDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prices = LazyLoading extends LazyLoadingDisabled ? EagerPrices : LazyPrices

export declare const Prices: (new (init: ModelInit<Prices>) => Prices) & {
  copyOf(source: Prices, mutator: (draft: MutableModel<Prices>) => MutableModel<Prices> | void): Prices;
}

type EagerContents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gym?: string | null;
  readonly parking?: string | null;
  readonly housingType?: string | null;
  readonly pets?: string | null;
  readonly ac?: boolean | null;
  readonly heater?: boolean | null;
  readonly laundry?: string | null;
  readonly furnishing?: string | null;
  readonly Gym?: Gym | null;
  readonly Parking?: Parking | null;
  readonly HousingType?: HousingType | null;
  readonly Pet?: Pet | null;
  readonly Laundry?: Laundry | null;
  readonly Furnishing?: Furnishing | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contentsGymId?: string | null;
  readonly contentsParkingId?: string | null;
  readonly contentsHousingTypeId?: string | null;
  readonly contentsPetId?: string | null;
  readonly contentsLaundryId?: string | null;
  readonly contentsFurnishingId?: string | null;
}

type LazyContents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gym?: string | null;
  readonly parking?: string | null;
  readonly housingType?: string | null;
  readonly pets?: string | null;
  readonly ac?: boolean | null;
  readonly heater?: boolean | null;
  readonly laundry?: string | null;
  readonly furnishing?: string | null;
  readonly Gym: AsyncItem<Gym | undefined>;
  readonly Parking: AsyncItem<Parking | undefined>;
  readonly HousingType: AsyncItem<HousingType | undefined>;
  readonly Pet: AsyncItem<Pet | undefined>;
  readonly Laundry: AsyncItem<Laundry | undefined>;
  readonly Furnishing: AsyncItem<Furnishing | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contentsGymId?: string | null;
  readonly contentsParkingId?: string | null;
  readonly contentsHousingTypeId?: string | null;
  readonly contentsPetId?: string | null;
  readonly contentsLaundryId?: string | null;
  readonly contentsFurnishingId?: string | null;
}

export declare type Contents = LazyLoading extends LazyLoadingDisabled ? EagerContents : LazyContents

export declare const Contents: (new (init: ModelInit<Contents>) => Contents) & {
  copyOf(source: Contents, mutator: (draft: MutableModel<Contents>) => MutableModel<Contents> | void): Contents;
}

type EagerBathroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bathroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bathroomNum?: number | null;
  readonly bathroomDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBathroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bathroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bathroomNum?: number | null;
  readonly bathroomDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bathroom = LazyLoading extends LazyLoadingDisabled ? EagerBathroom : LazyBathroom

export declare const Bathroom: (new (init: ModelInit<Bathroom>) => Bathroom) & {
  copyOf(source: Bathroom, mutator: (draft: MutableModel<Bathroom>) => MutableModel<Bathroom> | void): Bathroom;
}

type EagerPosting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datePostCreated?: string | null;
  readonly timePostCreated?: string | null;
  readonly title?: string | null;
  readonly room?: string | null;
  readonly bathroom?: string | null;
  readonly contents?: string | null;
  readonly location?: string | null;
  readonly postImages?: string | null;
  readonly prices?: string | null;
  readonly leasingPeriod?: string | null;
  readonly userID: string;
  readonly Room?: Room | null;
  readonly Bathroom?: Bathroom | null;
  readonly Contents?: Contents | null;
  readonly Location?: Location | null;
  readonly PostImages?: PostingImages | null;
  readonly Prices?: Prices | null;
  readonly LeasingPeriod?: LeasingPeriod | null;
  readonly currentRoomates?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postingRoomId?: string | null;
  readonly postingBathroomId?: string | null;
  readonly postingContentsId?: string | null;
  readonly postingLocationId?: string | null;
  readonly postingPostImagesId?: string | null;
  readonly postingPricesId?: string | null;
  readonly postingLeasingPeriodId?: string | null;
}

type LazyPosting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datePostCreated?: string | null;
  readonly timePostCreated?: string | null;
  readonly title?: string | null;
  readonly room?: string | null;
  readonly bathroom?: string | null;
  readonly contents?: string | null;
  readonly location?: string | null;
  readonly postImages?: string | null;
  readonly prices?: string | null;
  readonly leasingPeriod?: string | null;
  readonly userID: string;
  readonly Room: AsyncItem<Room | undefined>;
  readonly Bathroom: AsyncItem<Bathroom | undefined>;
  readonly Contents: AsyncItem<Contents | undefined>;
  readonly Location: AsyncItem<Location | undefined>;
  readonly PostImages: AsyncItem<PostingImages | undefined>;
  readonly Prices: AsyncItem<Prices | undefined>;
  readonly LeasingPeriod: AsyncItem<LeasingPeriod | undefined>;
  readonly currentRoomates?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postingRoomId?: string | null;
  readonly postingBathroomId?: string | null;
  readonly postingContentsId?: string | null;
  readonly postingLocationId?: string | null;
  readonly postingPostImagesId?: string | null;
  readonly postingPricesId?: string | null;
  readonly postingLeasingPeriodId?: string | null;
}

export declare type Posting = LazyLoading extends LazyLoadingDisabled ? EagerPosting : LazyPosting

export declare const Posting: (new (init: ModelInit<Posting>) => Posting) & {
  copyOf(source: Posting, mutator: (draft: MutableModel<Posting>) => MutableModel<Posting> | void): Posting;
}

type EagerRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Room, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roomNum?: number | null;
  readonly roomDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Room, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roomNum?: number | null;
  readonly roomDetails?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Room = LazyLoading extends LazyLoadingDisabled ? EagerRoom : LazyRoom

export declare const Room: (new (init: ModelInit<Room>) => Room) & {
  copyOf(source: Room, mutator: (draft: MutableModel<Room>) => MutableModel<Room> | void): Room;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly legalFirstName?: string | null;
  readonly email?: string | null;
  readonly searchingForRoommate?: string | null;
  readonly bio?: string | null;
  readonly prfilePic?: string | null;
  readonly posting?: string | null;
  readonly socials?: string | null;
  readonly dateCreated?: string | null;
  readonly phone?: string | null;
  readonly saveLists?: string | null;
  readonly profile?: string | null;
  readonly timeCreated?: number | null;
  readonly legalLastName?: string | null;
  readonly SearchingForRoommate?: SearchingForRoommate | null;
  readonly Posts?: (Posting | null)[] | null;
  readonly Socials?: Socials | null;
  readonly SaveLists?: (Posting | null)[] | null;
  readonly Profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSearchingForRoommateId?: string | null;
  readonly userSocialsId?: string | null;
  readonly userProfileId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly legalFirstName?: string | null;
  readonly email?: string | null;
  readonly searchingForRoommate?: string | null;
  readonly bio?: string | null;
  readonly prfilePic?: string | null;
  readonly posting?: string | null;
  readonly socials?: string | null;
  readonly dateCreated?: string | null;
  readonly phone?: string | null;
  readonly saveLists?: string | null;
  readonly profile?: string | null;
  readonly timeCreated?: number | null;
  readonly legalLastName?: string | null;
  readonly SearchingForRoommate: AsyncItem<SearchingForRoommate | undefined>;
  readonly Posts: AsyncCollection<Posting>;
  readonly Socials: AsyncItem<Socials | undefined>;
  readonly SaveLists: AsyncCollection<Posting>;
  readonly Profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSearchingForRoommateId?: string | null;
  readonly userSocialsId?: string | null;
  readonly userProfileId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}