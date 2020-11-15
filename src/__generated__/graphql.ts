import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | undefined> : T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** Raw JSON value */
  Json: any;
  Hex: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  RGBAHue: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
};

export type CollectionUpdateLocalizationInput = {
  data: CollectionUpdateLocalizationDataInput;
  locale: Locale;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** The item at the end of the edge. */
  node: Order;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type OrderUpdateOneInlineInput = {
  /** Create and connect one Order document */
  create: Maybe<OrderCreateInput>;
  /** Update single Order document */
  update: Maybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert: Maybe<OrderUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Order document */
  connect: Maybe<OrderWhereUniqueInput>;
  /** Disconnect currently connected Order document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Order document */
  delete: Maybe<Scalars['Boolean']>;
};

export enum ReviewOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC'
}

/** References Meta record uniquely */
export type MetaWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** The item at the end of the edge. */
  node: Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: Maybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryUpdateOneInlineInput = {
  /** Create and connect one Category document */
  create: Maybe<CategoryCreateInput>;
  /** Update single Category document */
  update: Maybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert: Maybe<CategoryUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Category document */
  connect: Maybe<CategoryWhereUniqueInput>;
  /** Disconnect currently connected Category document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Category document */
  delete: Maybe<Scalars['Boolean']>;
};

export type MetaUpsertInput = {
  /** Create document if it didn't exist */
  create: MetaCreateInput;
  /** Update document if it exists */
  update: MetaUpdateInput;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: OrderItemWhereInput;
  /** Update many input */
  data: OrderItemUpdateManyInput;
};


/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<CategoryWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  slug: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  products_every: Maybe<ProductWhereInput>;
  products_some: Maybe<ProductWhereInput>;
  products_none: Maybe<ProductWhereInput>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CollectionWhereInput;
  /** Update many input */
  data: CollectionUpdateManyInput;
};

export type OrderCreateManyInlineInput = {
  /** Create and connect multiple existing Order documents */
  create: Maybe<Array<OrderCreateInput>>;
  /** Connect multiple existing Order documents */
  connect: Maybe<Array<OrderWhereUniqueInput>>;
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect: Maybe<AssetWhereUniqueInput>;
};

/** Category of products, e.g. Menswear. */
export type Category = Node & {
  __typename?: 'Category';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Category>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  description: Maybe<RichText>;
  products: Array<Product>;
  /** List of Category versions */
  history: Array<Version>;
};


/** Category of products, e.g. Menswear. */
export type CategoryLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Category of products, e.g. Menswear. */
export type CategoryDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Category of products, e.g. Menswear. */
export type CategoryCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryProductsArgs = {
  where: Maybe<ProductWhereInput>;
  orderBy: Maybe<ProductOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

export type ReviewConnectInput = {
  /** Document to connect */
  where: ReviewWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type CollectionUpdateManyInput = {
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations: Maybe<CollectionUpdateManyLocalizationsInput>;
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ReviewWhereUniqueInput;
  /** Document to update */
  data: ReviewUpdateInput;
};

export type AddressUpdateInput = {
  billingOrder: Maybe<OrderUpdateOneInlineInput>;
  shippingOrder: Maybe<OrderUpdateOneInlineInput>;
  name: Maybe<Scalars['String']>;
  address1: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
};

export type ProductCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** name input for default locale (es) */
  name: Scalars['String'];
  /** slug input for default locale (es) */
  slug: Scalars['String'];
  /** description input for default locale (es) */
  description: Maybe<Scalars['RichTextAST']>;
  /** price input for default locale (es) */
  price: Scalars['Int'];
  images: Maybe<AssetCreateManyInlineInput>;
  category: Maybe<CategoryCreateOneInlineInput>;
  reviews: Maybe<ReviewCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: Maybe<ProductCreateLocalizationsInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type AddressUpdateManyInput = {
  name: Maybe<Scalars['String']>;
  address1: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CollectionCreateLocalizationInput = {
  /** Localization input */
  data: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type MetaUpdateManyLocalizationInput = {
  data: MetaUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type OrderItemCreateManyInlineInput = {
  /** Create and connect multiple existing OrderItem documents */
  create: Maybe<Array<OrderItemCreateInput>>;
  /** Connect multiple existing OrderItem documents */
  connect: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Create and connect one Review document */
  create: Maybe<ReviewCreateInput>;
  /** Connect one existing Review document */
  connect: Maybe<ReviewWhereUniqueInput>;
};

export type Address = Node & {
  __typename?: 'Address';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Address>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  billingOrder: Maybe<Order>;
  shippingOrder: Maybe<Order>;
  name: Scalars['String'];
  /** Address line 1 */
  address1: Scalars['String'];
  /** Address line 2 */
  address2: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  state: Maybe<Scalars['String']>;
  zip: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  /** List of Address versions */
  history: Array<Version>;
};


export type AddressDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type AddressBillingOrderArgs = {
  locales: Maybe<Array<Locale>>;
};


export type AddressShippingOrderArgs = {
  locales: Maybe<Array<Locale>>;
};


export type AddressHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

/** Identifies documents */
export type CollectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<CollectionWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /** The item at the end of the edge. */
  node: OrderItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** The item at the end of the edge. */
  node: Review;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex: Maybe<Scalars['Hex']>;
  rgba: Maybe<RgbaInput>;
};

export type AddressCreateOneInlineInput = {
  /** Create and connect one Address document */
  create: Maybe<AddressCreateInput>;
  /** Connect one existing Address document */
  connect: Maybe<AddressWhereUniqueInput>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type OrderItemCreateOneInlineInput = {
  /** Create and connect one OrderItem document */
  create: Maybe<OrderItemCreateInput>;
  /** Connect one existing OrderItem document */
  connect: Maybe<OrderItemWhereUniqueInput>;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  aggregate: Aggregate;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height: Maybe<Scalars['Float']>;
  /** The file width */
  width: Maybe<Scalars['Float']>;
  /** The file size */
  size: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType: Maybe<Scalars['String']>;
  productImages: Array<Product>;
  metaSeoImage: Array<Meta>;
  metaLogo: Array<Meta>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetProductImagesArgs = {
  where: Maybe<ProductWhereInput>;
  orderBy: Maybe<ProductOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetMetaSeoImageArgs = {
  where: Maybe<MetaWhereInput>;
  orderBy: Maybe<MetaOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetMetaLogoArgs = {
  where: Maybe<MetaWhereInput>;
  orderBy: Maybe<MetaOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation: Maybe<AssetTransformationInput>;
};

export type MetaUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: Maybe<Array<MetaUpdateManyLocalizationInput>>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** An edge in a connection. */
export type AddressEdge = {
  __typename?: 'AddressEdge';
  /** The item at the end of the edge. */
  node: Address;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ReviewUpdateOneInlineInput = {
  /** Create and connect one Review document */
  create: Maybe<ReviewCreateInput>;
  /** Update single Review document */
  update: Maybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert: Maybe<ReviewUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Review document */
  connect: Maybe<ReviewWhereUniqueInput>;
  /** Disconnect currently connected Review document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Review document */
  delete: Maybe<Scalars['Boolean']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type AssetUpdateManyInput = {
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type CollectionCreateLocalizationDataInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type MetaManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<MetaWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<MetaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<MetaWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  seoDescription: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  seoDescription_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  seoDescription_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  seoDescription_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  seoDescription_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  seoDescription_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  seoDescription_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  seoDescription_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  seoDescription_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  seoDescription_not_ends_with: Maybe<Scalars['String']>;
  seoImage: Maybe<AssetWhereInput>;
  logo: Maybe<AssetWhereInput>;
  siteName: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  siteName_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  siteName_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  siteName_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  siteName_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  siteName_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  siteName_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  siteName_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  siteName_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  siteName_not_ends_with: Maybe<Scalars['String']>;
};

export type MetaUpdateLocalizationInput = {
  data: MetaUpdateLocalizationDataInput;
  locale: Locale;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<OrderWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with: Maybe<Scalars['String']>;
  fulfilled: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  fulfilled_not: Maybe<Scalars['Boolean']>;
  total: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  total_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte: Maybe<Scalars['Int']>;
  orderItems_every: Maybe<OrderItemWhereInput>;
  orderItems_some: Maybe<OrderItemWhereInput>;
  orderItems_none: Maybe<OrderItemWhereInput>;
  billingAddress: Maybe<AddressWhereInput>;
  shippingAddress: Maybe<AddressWhereInput>;
};

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type AssetCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  productImages: Maybe<ProductCreateManyInlineInput>;
  metaSeoImage: Maybe<MetaCreateManyInlineInput>;
  metaLogo: Maybe<MetaCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpsertLocalizationInput = {
  update: CategoryUpdateLocalizationDataInput;
  create: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type MetaUpdateLocalizationsInput = {
  /** Localizations to create */
  create: Maybe<Array<MetaCreateLocalizationInput>>;
  /** Localizations to update */
  update: Maybe<Array<MetaUpdateLocalizationInput>>;
  upsert: Maybe<Array<MetaUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete: Maybe<Array<Locale>>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize: Maybe<ImageResizeInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CategoryWhereUniqueInput;
  /** Upsert data */
  data: CategoryUpsertInput;
};

export type MetaCreateLocalizationDataInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  seoTitle: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<ReviewWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: Maybe<Scalars['String']>;
  headline: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  headline_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  headline_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  headline_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  headline_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  message_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  message_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  message_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  message_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  message_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  message_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  message_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  message_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  message_not_ends_with: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  rating_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  rating_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  rating_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte: Maybe<Scalars['Int']>;
  product: Maybe<ProductWhereInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

export type MetaUpdateManyInlineInput = {
  /** Create and connect multiple Meta documents */
  create: Maybe<Array<MetaCreateInput>>;
  /** Connect multiple existing Meta documents */
  connect: Maybe<Array<MetaConnectInput>>;
  /** Override currently-connected documents with multiple existing Meta documents */
  set: Maybe<Array<MetaWhereUniqueInput>>;
  /** Update multiple Meta documents */
  update: Maybe<Array<MetaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Meta documents */
  upsert: Maybe<Array<MetaUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Meta documents */
  disconnect: Maybe<Array<MetaWhereUniqueInput>>;
  /** Delete multiple Meta documents */
  delete: Maybe<Array<MetaWhereUniqueInput>>;
};

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}


export enum CategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type OrderUpdateManyInput = {
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  fulfilled: Maybe<Scalars['Boolean']>;
  total: Maybe<Scalars['Int']>;
};

export type OrderItemUpdateInput = {
  order: Maybe<OrderUpdateOneInlineInput>;
  name: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['Int']>;
  price: Maybe<Scalars['Int']>;
  variantId: Maybe<Scalars['String']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Collection of products, e.g. Winter Sale. */
export type Collection = Node & {
  __typename?: 'Collection';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Collection>;
  /** Get the document in other stages */
  documentInStages: Array<Collection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  description: Maybe<RichText>;
  /** List of Collection versions */
  history: Array<Version>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

export type CollectionCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  description: Maybe<Scalars['RichTextAST']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: Maybe<CollectionCreateLocalizationsInput>;
};

export type CollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionCreateInput;
  /** Update document if it exists */
  update: CollectionUpdateInput;
};

export type ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create: Maybe<Array<ProductCreateLocalizationInput>>;
  /** Localizations to update */
  update: Maybe<Array<ProductUpdateLocalizationInput>>;
  upsert: Maybe<Array<ProductUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete: Maybe<Array<Locale>>;
};

export type CategoryUpdateInput = {
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  description: Maybe<Scalars['RichTextAST']>;
  products: Maybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations: Maybe<CategoryUpdateLocalizationsInput>;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CollectionWhereUniqueInput;
  /** Document to update */
  data: CollectionUpdateInput;
};

/** metadata for the site */
export type Meta = Node & {
  __typename?: 'Meta';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Meta>;
  /** Get the document in other stages */
  documentInStages: Array<Meta>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  seoImage: Maybe<Asset>;
  /** logo for the site */
  logo: Maybe<Asset>;
  /** site's name */
  siteName: Maybe<Scalars['String']>;
  /** List of Meta versions */
  history: Array<Version>;
};


/** metadata for the site */
export type MetaLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** metadata for the site */
export type MetaDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** metadata for the site */
export type MetaCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** metadata for the site */
export type MetaUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** metadata for the site */
export type MetaPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** metadata for the site */
export type MetaSeoImageArgs = {
  locales: Maybe<Array<Locale>>;
};


/** metadata for the site */
export type MetaLogoArgs = {
  locales: Maybe<Array<Locale>>;
};


/** metadata for the site */
export type MetaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

export type MetaCreateOneInlineInput = {
  /** Create and connect one Meta document */
  create: Maybe<MetaCreateInput>;
  /** Connect one existing Meta document */
  connect: Maybe<MetaWhereUniqueInput>;
};

export type AddressUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AddressWhereInput;
  /** Update many input */
  data: AddressUpdateManyInput;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** The item at the end of the edge. */
  node: Collection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type MetaConnectInput = {
  /** Document to connect */
  where: MetaWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};



export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type CategoryUpdateManyLocalizationInput = {
  data: CategoryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create: Maybe<Array<CollectionCreateLocalizationInput>>;
  /** Localizations to update */
  update: Maybe<Array<CollectionUpdateLocalizationInput>>;
  upsert: Maybe<Array<CollectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete: Maybe<Array<Locale>>;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CollectionWhereUniqueInput;
  /** Upsert data */
  data: CollectionUpsertInput;
};

export type OrderItemConnectInput = {
  /** Document to connect */
  where: OrderItemWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

export type OrderItemUpdateManyInlineInput = {
  /** Create and connect multiple OrderItem documents */
  create: Maybe<Array<OrderItemCreateInput>>;
  /** Connect multiple existing OrderItem documents */
  connect: Maybe<Array<OrderItemConnectInput>>;
  /** Override currently-connected documents with multiple existing OrderItem documents */
  set: Maybe<Array<OrderItemWhereUniqueInput>>;
  /** Update multiple OrderItem documents */
  update: Maybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple OrderItem documents */
  upsert: Maybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple OrderItem documents */
  disconnect: Maybe<Array<OrderItemWhereUniqueInput>>;
  /** Delete multiple OrderItem documents */
  delete: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProductWhereInput;
  /** Update many input */
  data: ProductUpdateManyInput;
};

export type ReviewUpdateManyInlineInput = {
  /** Create and connect multiple Review documents */
  create: Maybe<Array<ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect: Maybe<Array<ReviewConnectInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set: Maybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update: Maybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert: Maybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect: Maybe<Array<ReviewWhereUniqueInput>>;
  /** Delete multiple Review documents */
  delete: Maybe<Array<ReviewWhereUniqueInput>>;
};

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** A connection to a list of items. */
export type MetaConnection = {
  __typename?: 'MetaConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<MetaEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type MetaEdge = {
  __typename?: 'MetaEdge';
  /** The item at the end of the edge. */
  node: Meta;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  aggregate: Aggregate;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<OrderWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with: Maybe<Scalars['String']>;
  fulfilled: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  fulfilled_not: Maybe<Scalars['Boolean']>;
  total: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  total_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte: Maybe<Scalars['Int']>;
  orderItems_every: Maybe<OrderItemWhereInput>;
  orderItems_some: Maybe<OrderItemWhereInput>;
  orderItems_none: Maybe<OrderItemWhereInput>;
  billingAddress: Maybe<AddressWhereInput>;
  shippingAddress: Maybe<AddressWhereInput>;
};

export type OrderUpdateInput = {
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  fulfilled: Maybe<Scalars['Boolean']>;
  total: Maybe<Scalars['Int']>;
  orderItems: Maybe<OrderItemUpdateManyInlineInput>;
  billingAddress: Maybe<AddressUpdateOneInlineInput>;
  shippingAddress: Maybe<AddressUpdateOneInlineInput>;
};

export type OrderItemUpdateManyInput = {
  name: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['Int']>;
  price: Maybe<Scalars['Int']>;
  variantId: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyInlineInput = {
  /** Create and connect multiple Category documents */
  create: Maybe<Array<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  connect: Maybe<Array<CategoryConnectInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update: Maybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert: Maybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Delete multiple Category documents */
  delete: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CollectionUpdateInput = {
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  description: Maybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations: Maybe<CollectionUpdateLocalizationsInput>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export enum AddressOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  Address1Asc = 'address1_ASC',
  Address1Desc = 'address1_DESC',
  Address2Asc = 'address2_ASC',
  Address2Desc = 'address2_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  ZipAsc = 'zip_ASC',
  ZipDesc = 'zip_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC'
}

export type CategoryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: Maybe<Array<CategoryUpdateManyLocalizationInput>>;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<ProductWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  images_every: Maybe<AssetWhereInput>;
  images_some: Maybe<AssetWhereInput>;
  images_none: Maybe<AssetWhereInput>;
  category: Maybe<CategoryWhereInput>;
  reviews_every: Maybe<ReviewWhereInput>;
  reviews_some: Maybe<ReviewWhereInput>;
  reviews_none: Maybe<ReviewWhereInput>;
};

export type ProductUpdateManyInput = {
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  /** description input for default locale (es) */
  description: Maybe<Scalars['RichTextAST']>;
  /** price input for default locale (es) */
  price: Maybe<Scalars['Int']>;
  /** Optional updates to localizations */
  localizations: Maybe<ProductUpdateManyLocalizationsInput>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type CategoryCreateOneInlineInput = {
  /** Create and connect one Category document */
  create: Maybe<CategoryCreateInput>;
  /** Connect one existing Category document */
  connect: Maybe<CategoryWhereUniqueInput>;
};

export type MetaCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** seoTitle input for default locale (es) */
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  seoImage: Maybe<AssetCreateOneInlineInput>;
  logo: Maybe<AssetCreateOneInlineInput>;
  siteName: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: Maybe<MetaCreateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
};

export type OrderConnectInput = {
  /** Document to connect */
  where: OrderWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  productImages: Maybe<ProductUpdateManyInlineInput>;
  metaSeoImage: Maybe<MetaUpdateManyInlineInput>;
  metaLogo: Maybe<MetaUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations: Maybe<AssetUpdateLocalizationsInput>;
};

export type CategoryUpdateManyLocalizationDataInput = {
  name: Maybe<Scalars['String']>;
};

export type MetaUpdateOneInlineInput = {
  /** Create and connect one Meta document */
  create: Maybe<MetaCreateInput>;
  /** Update single Meta document */
  update: Maybe<MetaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Meta document */
  upsert: Maybe<MetaUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Meta document */
  connect: Maybe<MetaWhereUniqueInput>;
  /** Disconnect currently connected Meta document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Meta document */
  delete: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<OrderItemEdge>;
  aggregate: Aggregate;
};

export type OrderItemUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderItemCreateInput;
  /** Update document if it exists */
  update: OrderItemUpdateInput;
};

export type ProductConnectInput = {
  /** Document to connect */
  where: ProductWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
};

export type ProductUpdateManyInlineInput = {
  /** Create and connect multiple Product documents */
  create: Maybe<Array<ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect: Maybe<Array<ProductConnectInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set: Maybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update: Maybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert: Maybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect: Maybe<Array<ProductWhereUniqueInput>>;
  /** Delete multiple Product documents */
  delete: Maybe<Array<ProductWhereUniqueInput>>;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<ReviewWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: Maybe<Scalars['String']>;
  headline: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  headline_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  headline_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  headline_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  headline_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  message_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  message_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  message_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  message_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  message_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  message_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  message_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  message_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  message_not_ends_with: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  rating_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  rating_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  rating_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte: Maybe<Scalars['Int']>;
  product: Maybe<ProductWhereInput>;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}


export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete: Maybe<Array<Locale>>;
};

export type OrderItemUpdateOneInlineInput = {
  /** Create and connect one OrderItem document */
  create: Maybe<OrderItemCreateInput>;
  /** Update single OrderItem document */
  update: Maybe<OrderItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OrderItem document */
  upsert: Maybe<OrderItemUpsertWithNestedWhereUniqueInput>;
  /** Connect existing OrderItem document */
  connect: Maybe<OrderItemWhereUniqueInput>;
  /** Disconnect currently connected OrderItem document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected OrderItem document */
  delete: Maybe<Scalars['Boolean']>;
};

export type AddressUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AddressWhereUniqueInput;
  /** Upsert data */
  data: AddressUpsertInput;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ReviewWhereInput;
  /** Update many input */
  data: ReviewUpdateManyInput;
};

export type MetaCreateManyInlineInput = {
  /** Create and connect multiple existing Meta documents */
  create: Maybe<Array<MetaCreateInput>>;
  /** Connect multiple existing Meta documents */
  connect: Maybe<Array<MetaWhereUniqueInput>>;
};

export type Order = Node & {
  __typename?: 'Order';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  fulfilled: Maybe<Scalars['Boolean']>;
  total: Scalars['Int'];
  orderItems: Array<OrderItem>;
  billingAddress: Maybe<Address>;
  shippingAddress: Maybe<Address>;
  /** List of Order versions */
  history: Array<Version>;
};


export type OrderDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type OrderOrderItemsArgs = {
  where: Maybe<OrderItemWhereInput>;
  orderBy: Maybe<OrderItemOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<Locale>>;
};


export type OrderBillingAddressArgs = {
  locales: Maybe<Array<Locale>>;
};


export type OrderShippingAddressArgs = {
  locales: Maybe<Array<Locale>>;
};


export type OrderHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  Es = 'es'
}

export type AddressUpdateManyInlineInput = {
  /** Create and connect multiple Address documents */
  create: Maybe<Array<AddressCreateInput>>;
  /** Connect multiple existing Address documents */
  connect: Maybe<Array<AddressConnectInput>>;
  /** Override currently-connected documents with multiple existing Address documents */
  set: Maybe<Array<AddressWhereUniqueInput>>;
  /** Update multiple Address documents */
  update: Maybe<Array<AddressUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Address documents */
  upsert: Maybe<Array<AddressUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Address documents */
  disconnect: Maybe<Array<AddressWhereUniqueInput>>;
  /** Delete multiple Address documents */
  delete: Maybe<Array<AddressWhereUniqueInput>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

export type CategoryCreateManyInlineInput = {
  /** Create and connect multiple existing Category documents */
  create: Maybe<Array<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  connect: Maybe<Array<CategoryWhereUniqueInput>>;
};

/** Identifies documents */
export type MetaWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<MetaWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<MetaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<MetaWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  seoTitle: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  seoTitle_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  seoTitle_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  seoTitle_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  seoTitle_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  seoTitle_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  seoTitle_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  seoTitle_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  seoTitle_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  seoTitle_not_ends_with: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  seoDescription_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  seoDescription_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  seoDescription_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  seoDescription_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  seoDescription_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  seoDescription_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  seoDescription_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  seoDescription_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  seoDescription_not_ends_with: Maybe<Scalars['String']>;
  seoImage: Maybe<AssetWhereInput>;
  logo: Maybe<AssetWhereInput>;
  siteName: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  siteName_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  siteName_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  siteName_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  siteName_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  siteName_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  siteName_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  siteName_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  siteName_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  siteName_not_ends_with: Maybe<Scalars['String']>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
  /** Document to update */
  data: OrderItemUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderWhereUniqueInput;
  /** Upsert data */
  data: OrderUpsertInput;
};

export type OrderCreateOneInlineInput = {
  /** Create and connect one Order document */
  create: Maybe<OrderCreateInput>;
  /** Connect one existing Order document */
  connect: Maybe<OrderWhereUniqueInput>;
};

export type ProductUpdateManyLocalizationInput = {
  data: ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

export type CategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create: Maybe<Array<CategoryCreateLocalizationInput>>;
  /** Localizations to update */
  update: Maybe<Array<CategoryUpdateLocalizationInput>>;
  upsert: Maybe<Array<CategoryUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete: Maybe<Array<Locale>>;
};

export type MetaUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MetaWhereUniqueInput;
  /** Document to update */
  data: MetaUpdateInput;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderWhereUniqueInput;
  /** Document to update */
  data: OrderUpdateInput;
};

export type OrderItemCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  order: Maybe<OrderCreateOneInlineInput>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  price: Scalars['Int'];
  variantId: Scalars['String'];
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type ProductUpdateLocalizationInput = {
  data: ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateOneInlineInput = {
  /** Create and connect one Product document */
  create: Maybe<ProductCreateInput>;
  /** Connect one existing Product document */
  connect: Maybe<ProductWhereUniqueInput>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node: Maybe<Node>;
  /** Retrieve multiple addresses */
  addresses: Array<Address>;
  /** Retrieve a single address */
  address: Maybe<Address>;
  /** Retrieve multiple addresses using the Relay connection interface */
  addressesConnection: AddressConnection;
  /** Retrieve document version */
  addressVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve a single category */
  category: Maybe<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve document version */
  categoryVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple collections */
  collections: Array<Collection>;
  /** Retrieve a single collection */
  collection: Maybe<Collection>;
  /** Retrieve multiple collections using the Relay connection interface */
  collectionsConnection: CollectionConnection;
  /** Retrieve document version */
  collectionVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple metas */
  metas: Array<Meta>;
  /** Retrieve a single meta */
  meta: Maybe<Meta>;
  /** Retrieve multiple metas using the Relay connection interface */
  metasConnection: MetaConnection;
  /** Retrieve document version */
  metaVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve a single order */
  order: Maybe<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve document version */
  orderVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple orderItems */
  orderItems: Array<OrderItem>;
  /** Retrieve a single orderItem */
  orderItem: Maybe<OrderItem>;
  /** Retrieve multiple orderItems using the Relay connection interface */
  orderItemsConnection: OrderItemConnection;
  /** Retrieve document version */
  orderItemVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve a single product */
  product: Maybe<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve document version */
  productVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve a single review */
  review: Maybe<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve document version */
  reviewVersion: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAddressesArgs = {
  where: Maybe<AddressWhereInput>;
  orderBy: Maybe<AddressOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAddressesConnectionArgs = {
  where: Maybe<AddressWhereInput>;
  orderBy: Maybe<AddressOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAddressVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  where: Maybe<AssetWhereInput>;
  orderBy: Maybe<AssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where: Maybe<AssetWhereInput>;
  orderBy: Maybe<AssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCategoriesArgs = {
  where: Maybe<CategoryWhereInput>;
  orderBy: Maybe<CategoryOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoriesConnectionArgs = {
  where: Maybe<CategoryWhereInput>;
  orderBy: Maybe<CategoryOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCollectionsArgs = {
  where: Maybe<CollectionWhereInput>;
  orderBy: Maybe<CollectionOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCollectionArgs = {
  where: CollectionWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCollectionsConnectionArgs = {
  where: Maybe<CollectionWhereInput>;
  orderBy: Maybe<CollectionOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCollectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMetasArgs = {
  where: Maybe<MetaWhereInput>;
  orderBy: Maybe<MetaOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMetaArgs = {
  where: MetaWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMetasConnectionArgs = {
  where: Maybe<MetaWhereInput>;
  orderBy: Maybe<MetaOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMetaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrdersArgs = {
  where: Maybe<OrderWhereInput>;
  orderBy: Maybe<OrderOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrdersConnectionArgs = {
  where: Maybe<OrderWhereInput>;
  orderBy: Maybe<OrderOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrderItemsArgs = {
  where: Maybe<OrderItemWhereInput>;
  orderBy: Maybe<OrderItemOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderItemsConnectionArgs = {
  where: Maybe<OrderItemWhereInput>;
  orderBy: Maybe<OrderItemOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  where: Maybe<ProductWhereInput>;
  orderBy: Maybe<ProductOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductsConnectionArgs = {
  where: Maybe<ProductWhereInput>;
  orderBy: Maybe<ProductOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReviewsArgs = {
  where: Maybe<ReviewWhereInput>;
  orderBy: Maybe<ReviewOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReviewsConnectionArgs = {
  where: Maybe<ReviewWhereInput>;
  orderBy: Maybe<ReviewOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<AssetWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  productImages_every: Maybe<ProductWhereInput>;
  productImages_some: Maybe<ProductWhereInput>;
  productImages_none: Maybe<ProductWhereInput>;
  metaSeoImage_every: Maybe<MetaWhereInput>;
  metaSeoImage_some: Maybe<MetaWhereInput>;
  metaSeoImage_none: Maybe<MetaWhereInput>;
  metaLogo_every: Maybe<MetaWhereInput>;
  metaLogo_some: Maybe<MetaWhereInput>;
  metaLogo_none: Maybe<MetaWhereInput>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpsertLocalizationInput = {
  update: CollectionUpdateLocalizationDataInput;
  create: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductWhereUniqueInput;
  /** Upsert data */
  data: ProductUpsertInput;
};

export type ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: Maybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
  /** Create and connect multiple existing Product documents */
  create: Maybe<Array<ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect: Maybe<Array<ProductWhereUniqueInput>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize: Maybe<Scalars['Int']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<AssetWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  handle: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with: Maybe<Scalars['String']>;
  productImages_every: Maybe<ProductWhereInput>;
  productImages_some: Maybe<ProductWhereInput>;
  productImages_none: Maybe<ProductWhereInput>;
  metaSeoImage_every: Maybe<MetaWhereInput>;
  metaSeoImage_some: Maybe<MetaWhereInput>;
  metaSeoImage_none: Maybe<MetaWhereInput>;
  metaLogo_every: Maybe<MetaWhereInput>;
  metaLogo_some: Maybe<MetaWhereInput>;
  metaLogo_none: Maybe<MetaWhereInput>;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: Maybe<Array<ProductCreateLocalizationInput>>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** The item at the end of the edge. */
  node: Category;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ProductUpdateOneInlineInput = {
  /** Create and connect one Product document */
  create: Maybe<ProductCreateInput>;
  /** Update single Product document */
  update: Maybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert: Maybe<ProductUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Product document */
  connect: Maybe<ProductWhereUniqueInput>;
  /** Disconnect currently connected Product document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Product document */
  delete: Maybe<Scalars['Boolean']>;
};


/** Transformations for Assets */
export type AssetTransformationInput = {
  image: Maybe<ImageTransformationInput>;
  document: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: Maybe<Scalars['Boolean']>;
};

/** References Address record uniquely */
export type AddressWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export enum CollectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type CollectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: Maybe<Array<CollectionUpdateManyLocalizationInput>>;
};

export type Product = Node & {
  __typename?: 'Product';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Product>;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Maybe<RichText>;
  price: Scalars['Int'];
  images: Array<Asset>;
  category: Maybe<Category>;
  reviews: Array<Review>;
  /** List of Product versions */
  history: Array<Version>;
};


export type ProductLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type ProductDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProductCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductImagesArgs = {
  where: Maybe<AssetWhereInput>;
  orderBy: Maybe<AssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<Locale>>;
};


export type ProductCategoryArgs = {
  locales: Maybe<Array<Locale>>;
};


export type ProductReviewsArgs = {
  where: Maybe<ReviewWhereInput>;
  orderBy: Maybe<ReviewOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<Locale>>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

export type ReviewCreateManyInlineInput = {
  /** Create and connect multiple existing Review documents */
  create: Maybe<Array<ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect: Maybe<Array<ReviewWhereUniqueInput>>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output: Maybe<DocumentOutputInput>;
};

export type CollectionUpdateManyLocalizationDataInput = {
  name: Maybe<Scalars['String']>;
};

export enum MetaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SiteNameAsc = 'siteName_ASC',
  SiteNameDesc = 'siteName_DESC'
}

export type MetaUpdateLocalizationDataInput = {
  seoTitle: Maybe<Scalars['String']>;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
  /** Upsert data */
  data: OrderItemUpsertInput;
};

export type AddressConnectInput = {
  /** Document to connect */
  where: AddressWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

export type AddressCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  billingOrder: Maybe<OrderCreateOneInlineInput>;
  shippingOrder: Maybe<OrderCreateOneInlineInput>;
  name: Scalars['String'];
  address1: Scalars['String'];
  address2: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  state: Maybe<Scalars['String']>;
  zip: Scalars['String'];
  phone: Maybe<Scalars['String']>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type MetaUpdateManyInput = {
  /** seoTitle input for default locale (es) */
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  siteName: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations: Maybe<MetaUpdateManyLocalizationsInput>;
};

export type OrderUpdateManyInlineInput = {
  /** Create and connect multiple Order documents */
  create: Maybe<Array<OrderCreateInput>>;
  /** Connect multiple existing Order documents */
  connect: Maybe<Array<OrderConnectInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set: Maybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update: Maybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert: Maybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect: Maybe<Array<OrderWhereUniqueInput>>;
  /** Delete multiple Order documents */
  delete: Maybe<Array<OrderWhereUniqueInput>>;
};

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit: Maybe<ImageFit>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  size: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyInput = {
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations: Maybe<CategoryUpdateManyLocalizationsInput>;
};

export type MetaUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: MetaWhereInput;
  /** Update many input */
  data: MetaUpdateManyInput;
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<OrderItemWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  order: Maybe<OrderWhereInput>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  quantity_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte: Maybe<Scalars['Int']>;
  price: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  price_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  price_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte: Maybe<Scalars['Int']>;
  variantId: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  variantId_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  variantId_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  variantId_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  variantId_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  variantId_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  variantId_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  variantId_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  variantId_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  variantId_not_ends_with: Maybe<Scalars['String']>;
};

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format: Maybe<DocumentFileTypes>;
};

/** A connection to a list of items. */
export type AddressConnection = {
  __typename?: 'AddressConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AddressEdge>;
  aggregate: Aggregate;
};

export type AddressUpdateOneInlineInput = {
  /** Create and connect one Address document */
  create: Maybe<AddressCreateInput>;
  /** Update single Address document */
  update: Maybe<AddressUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Address document */
  upsert: Maybe<AddressUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Address document */
  connect: Maybe<AddressWhereUniqueInput>;
  /** Disconnect currently connected Address document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Address document */
  delete: Maybe<Scalars['Boolean']>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CategoryWhereUniqueInput;
  /** Document to update */
  data: CategoryUpdateInput;
};

export type MetaUpsertLocalizationInput = {
  update: MetaUpdateLocalizationDataInput;
  create: MetaCreateLocalizationDataInput;
  locale: Locale;
};

export type MetaUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MetaWhereUniqueInput;
  /** Upsert data */
  data: MetaUpsertInput;
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CategoryWhereInput;
  /** Update many input */
  data: CategoryUpdateManyInput;
};

export type ProductUpsertLocalizationInput = {
  update: ProductUpdateLocalizationDataInput;
  create: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type AddressUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AddressWhereUniqueInput;
  /** Document to update */
  data: AddressUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type MetaCreateLocalizationInput = {
  /** Localization input */
  data: MetaCreateLocalizationDataInput;
  locale: Locale;
};

/** Identifies documents */
export type OrderItemWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<OrderItemWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  order: Maybe<OrderWhereInput>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  quantity_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte: Maybe<Scalars['Int']>;
  price: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  price_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  price_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte: Maybe<Scalars['Int']>;
  variantId: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  variantId_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  variantId_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  variantId_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  variantId_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  variantId_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  variantId_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  variantId_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  variantId_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  variantId_not_ends_with: Maybe<Scalars['String']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export type CategoryCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  description: Maybe<Scalars['RichTextAST']>;
  products: Maybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: Maybe<CategoryCreateLocalizationsInput>;
};

export type CategoryUpdateLocalizationInput = {
  data: CategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateLocalizationDataInput = {
  name: Maybe<Scalars['String']>;
};

export type CollectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: Maybe<Array<CollectionCreateLocalizationInput>>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductWhereUniqueInput;
  /** Document to update */
  data: ProductUpdateInput;
};

export enum OrderItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  VariantIdAsc = 'variantId_ASC',
  VariantIdDesc = 'variantId_DESC'
}

export type ProductUpdateManyLocalizationDataInput = {
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['RichTextAST']>;
  price: Maybe<Scalars['Int']>;
};

export type ProductUpdateLocalizationDataInput = {
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  description: Maybe<Scalars['RichTextAST']>;
  price: Maybe<Scalars['Int']>;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ReviewWhereUniqueInput;
  /** Upsert data */
  data: ReviewUpsertInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one address */
  createAddress: Maybe<Address>;
  /** Update one address */
  updateAddress: Maybe<Address>;
  /** Delete one address from _all_ existing stages. Returns deleted document. */
  deleteAddress: Maybe<Address>;
  /** Upsert one address */
  upsertAddress: Maybe<Address>;
  /** Publish one address */
  publishAddress: Maybe<Address>;
  /** Unpublish one address from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAddress: Maybe<Address>;
  /** Update many Address documents */
  updateManyAddressesConnection: AddressConnection;
  /** Delete many Address documents, return deleted documents */
  deleteManyAddressesConnection: AddressConnection;
  /** Publish many Address documents */
  publishManyAddressesConnection: AddressConnection;
  /** Find many Address documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAddressesConnection: AddressConnection;
  /**
   * Update many addresses
   * @deprecated Please use the new paginated many mutation (updateManyAddressesConnection)
   */
  updateManyAddresses: BatchPayload;
  /**
   * Delete many Address documents
   * @deprecated Please use the new paginated many mutation (deleteManyAddressesConnection)
   */
  deleteManyAddresses: BatchPayload;
  /**
   * Publish many Address documents
   * @deprecated Please use the new paginated many mutation (publishManyAddressesConnection)
   */
  publishManyAddresses: BatchPayload;
  /**
   * Unpublish many Address documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAddressesConnection)
   */
  unpublishManyAddresses: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset: Maybe<Asset>;
  /** Update one asset */
  updateAsset: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset: Maybe<Asset>;
  /** Publish one asset */
  publishAsset: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one category */
  createCategory: Maybe<Category>;
  /** Update one category */
  updateCategory: Maybe<Category>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory: Maybe<Category>;
  /** Upsert one category */
  upsertCategory: Maybe<Category>;
  /** Publish one category */
  publishCategory: Maybe<Category>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory: Maybe<Category>;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Create one collection */
  createCollection: Maybe<Collection>;
  /** Update one collection */
  updateCollection: Maybe<Collection>;
  /** Delete one collection from _all_ existing stages. Returns deleted document. */
  deleteCollection: Maybe<Collection>;
  /** Upsert one collection */
  upsertCollection: Maybe<Collection>;
  /** Publish one collection */
  publishCollection: Maybe<Collection>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCollection: Maybe<Collection>;
  /** Update many Collection documents */
  updateManyCollectionsConnection: CollectionConnection;
  /** Delete many Collection documents, return deleted documents */
  deleteManyCollectionsConnection: CollectionConnection;
  /** Publish many Collection documents */
  publishManyCollectionsConnection: CollectionConnection;
  /** Find many Collection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCollectionsConnection: CollectionConnection;
  /**
   * Update many collections
   * @deprecated Please use the new paginated many mutation (updateManyCollectionsConnection)
   */
  updateManyCollections: BatchPayload;
  /**
   * Delete many Collection documents
   * @deprecated Please use the new paginated many mutation (deleteManyCollectionsConnection)
   */
  deleteManyCollections: BatchPayload;
  /**
   * Publish many Collection documents
   * @deprecated Please use the new paginated many mutation (publishManyCollectionsConnection)
   */
  publishManyCollections: BatchPayload;
  /**
   * Unpublish many Collection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsConnection)
   */
  unpublishManyCollections: BatchPayload;
  /** Create one meta */
  createMeta: Maybe<Meta>;
  /** Update one meta */
  updateMeta: Maybe<Meta>;
  /** Delete one meta from _all_ existing stages. Returns deleted document. */
  deleteMeta: Maybe<Meta>;
  /** Upsert one meta */
  upsertMeta: Maybe<Meta>;
  /** Publish one meta */
  publishMeta: Maybe<Meta>;
  /** Unpublish one meta from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMeta: Maybe<Meta>;
  /** Update many Meta documents */
  updateManyMetasConnection: MetaConnection;
  /** Delete many Meta documents, return deleted documents */
  deleteManyMetasConnection: MetaConnection;
  /** Publish many Meta documents */
  publishManyMetasConnection: MetaConnection;
  /** Find many Meta documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMetasConnection: MetaConnection;
  /**
   * Update many metas
   * @deprecated Please use the new paginated many mutation (updateManyMetasConnection)
   */
  updateManyMetas: BatchPayload;
  /**
   * Delete many Meta documents
   * @deprecated Please use the new paginated many mutation (deleteManyMetasConnection)
   */
  deleteManyMetas: BatchPayload;
  /**
   * Publish many Meta documents
   * @deprecated Please use the new paginated many mutation (publishManyMetasConnection)
   */
  publishManyMetas: BatchPayload;
  /**
   * Unpublish many Meta documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMetasConnection)
   */
  unpublishManyMetas: BatchPayload;
  /** Create one order */
  createOrder: Maybe<Order>;
  /** Update one order */
  updateOrder: Maybe<Order>;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder: Maybe<Order>;
  /** Upsert one order */
  upsertOrder: Maybe<Order>;
  /** Publish one order */
  publishOrder: Maybe<Order>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder: Maybe<Order>;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Create one orderItem */
  createOrderItem: Maybe<OrderItem>;
  /** Update one orderItem */
  updateOrderItem: Maybe<OrderItem>;
  /** Delete one orderItem from _all_ existing stages. Returns deleted document. */
  deleteOrderItem: Maybe<OrderItem>;
  /** Upsert one orderItem */
  upsertOrderItem: Maybe<OrderItem>;
  /** Publish one orderItem */
  publishOrderItem: Maybe<OrderItem>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrderItem: Maybe<OrderItem>;
  /** Update many OrderItem documents */
  updateManyOrderItemsConnection: OrderItemConnection;
  /** Delete many OrderItem documents, return deleted documents */
  deleteManyOrderItemsConnection: OrderItemConnection;
  /** Publish many OrderItem documents */
  publishManyOrderItemsConnection: OrderItemConnection;
  /** Find many OrderItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Update many orderItems
   * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
   */
  updateManyOrderItems: BatchPayload;
  /**
   * Delete many OrderItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
   */
  deleteManyOrderItems: BatchPayload;
  /**
   * Publish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
   */
  publishManyOrderItems: BatchPayload;
  /**
   * Unpublish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
   */
  unpublishManyOrderItems: BatchPayload;
  /** Create one product */
  createProduct: Maybe<Product>;
  /** Update one product */
  updateProduct: Maybe<Product>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct: Maybe<Product>;
  /** Upsert one product */
  upsertProduct: Maybe<Product>;
  /** Publish one product */
  publishProduct: Maybe<Product>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct: Maybe<Product>;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Create one review */
  createReview: Maybe<Review>;
  /** Update one review */
  updateReview: Maybe<Review>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview: Maybe<Review>;
  /** Upsert one review */
  upsertReview: Maybe<Review>;
  /** Publish one review */
  publishReview: Maybe<Review>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview: Maybe<Review>;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
};


export type MutationCreateAddressArgs = {
  data: AddressCreateInput;
};


export type MutationUpdateAddressArgs = {
  where: AddressWhereUniqueInput;
  data: AddressUpdateInput;
};


export type MutationDeleteAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationUpsertAddressArgs = {
  where: AddressWhereUniqueInput;
  upsert: AddressUpsertInput;
};


export type MutationPublishAddressArgs = {
  where: AddressWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishAddressArgs = {
  where: AddressWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyAddressesConnectionArgs = {
  where: Maybe<AddressManyWhereInput>;
  data: AddressUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAddressesConnectionArgs = {
  where: Maybe<AddressManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAddressesConnectionArgs = {
  where: Maybe<AddressManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyAddressesConnectionArgs = {
  where: Maybe<AddressManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyAddressesArgs = {
  where: Maybe<AddressManyWhereInput>;
  data: AddressUpdateManyInput;
};


export type MutationDeleteManyAddressesArgs = {
  where: Maybe<AddressManyWhereInput>;
};


export type MutationPublishManyAddressesArgs = {
  where: Maybe<AddressManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyAddressesArgs = {
  where: Maybe<AddressManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where: Maybe<AssetManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpdateCategoryArgs = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  where: CategoryWhereUniqueInput;
  upsert: CategoryUpsertInput;
};


export type MutationPublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  where: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  where: Maybe<CategoryManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  where: Maybe<CategoryManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  where: Maybe<CategoryManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCategoriesArgs = {
  where: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
};


export type MutationDeleteManyCategoriesArgs = {
  where: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  where: Maybe<CategoryManyWhereInput>;
  to?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCategoriesArgs = {
  where: Maybe<CategoryManyWhereInput>;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCollectionArgs = {
  data: CollectionCreateInput;
};


export type MutationUpdateCollectionArgs = {
  where: CollectionWhereUniqueInput;
  data: CollectionUpdateInput;
};


export type MutationDeleteCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type MutationUpsertCollectionArgs = {
  where: CollectionWhereUniqueInput;
  upsert: CollectionUpsertInput;
};


export type MutationPublishCollectionArgs = {
  where: CollectionWhereUniqueInput;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishCollectionArgs = {
  where: CollectionWhereUniqueInput;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCollectionsConnectionArgs = {
  where: Maybe<CollectionManyWhereInput>;
  data: CollectionUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCollectionsConnectionArgs = {
  where: Maybe<CollectionManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCollectionsConnectionArgs = {
  where: Maybe<CollectionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCollectionsConnectionArgs = {
  where: Maybe<CollectionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCollectionsArgs = {
  where: Maybe<CollectionManyWhereInput>;
  data: CollectionUpdateManyInput;
};


export type MutationDeleteManyCollectionsArgs = {
  where: Maybe<CollectionManyWhereInput>;
};


export type MutationPublishManyCollectionsArgs = {
  where: Maybe<CollectionManyWhereInput>;
  to?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCollectionsArgs = {
  where: Maybe<CollectionManyWhereInput>;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateMetaArgs = {
  data: MetaCreateInput;
};


export type MutationUpdateMetaArgs = {
  where: MetaWhereUniqueInput;
  data: MetaUpdateInput;
};


export type MutationDeleteMetaArgs = {
  where: MetaWhereUniqueInput;
};


export type MutationUpsertMetaArgs = {
  where: MetaWhereUniqueInput;
  upsert: MetaUpsertInput;
};


export type MutationPublishMetaArgs = {
  where: MetaWhereUniqueInput;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishMetaArgs = {
  where: MetaWhereUniqueInput;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyMetasConnectionArgs = {
  where: Maybe<MetaManyWhereInput>;
  data: MetaUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyMetasConnectionArgs = {
  where: Maybe<MetaManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyMetasConnectionArgs = {
  where: Maybe<MetaManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyMetasConnectionArgs = {
  where: Maybe<MetaManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyMetasArgs = {
  where: Maybe<MetaManyWhereInput>;
  data: MetaUpdateManyInput;
};


export type MutationDeleteManyMetasArgs = {
  where: Maybe<MetaManyWhereInput>;
};


export type MutationPublishManyMetasArgs = {
  where: Maybe<MetaManyWhereInput>;
  to?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyMetasArgs = {
  where: Maybe<MetaManyWhereInput>;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationUpdateOrderArgs = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateInput;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOrderArgs = {
  where: OrderWhereUniqueInput;
  upsert: OrderUpsertInput;
};


export type MutationPublishOrderArgs = {
  where: OrderWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishOrderArgs = {
  where: OrderWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyOrdersConnectionArgs = {
  where: Maybe<OrderManyWhereInput>;
  data: OrderUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyOrdersConnectionArgs = {
  where: Maybe<OrderManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyOrdersConnectionArgs = {
  where: Maybe<OrderManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyOrdersConnectionArgs = {
  where: Maybe<OrderManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyOrdersArgs = {
  where: Maybe<OrderManyWhereInput>;
  data: OrderUpdateManyInput;
};


export type MutationDeleteManyOrdersArgs = {
  where: Maybe<OrderManyWhereInput>;
};


export type MutationPublishManyOrdersArgs = {
  where: Maybe<OrderManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyOrdersArgs = {
  where: Maybe<OrderManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationUpdateOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationUpsertOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  upsert: OrderItemUpsertInput;
};


export type MutationPublishOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyOrderItemsConnectionArgs = {
  where: Maybe<OrderItemManyWhereInput>;
  data: OrderItemUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyOrderItemsConnectionArgs = {
  where: Maybe<OrderItemManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyOrderItemsConnectionArgs = {
  where: Maybe<OrderItemManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyOrderItemsConnectionArgs = {
  where: Maybe<OrderItemManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyOrderItemsArgs = {
  where: Maybe<OrderItemManyWhereInput>;
  data: OrderItemUpdateManyInput;
};


export type MutationDeleteManyOrderItemsArgs = {
  where: Maybe<OrderItemManyWhereInput>;
};


export type MutationPublishManyOrderItemsArgs = {
  where: Maybe<OrderItemManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyOrderItemsArgs = {
  where: Maybe<OrderItemManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationUpdateProductArgs = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  where: ProductWhereUniqueInput;
  upsert: ProductUpsertInput;
};


export type MutationPublishProductArgs = {
  where: ProductWhereUniqueInput;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishProductArgs = {
  where: ProductWhereUniqueInput;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  where: Maybe<ProductManyWhereInput>;
  data: ProductUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  where: Maybe<ProductManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProductsConnectionArgs = {
  where: Maybe<ProductManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  where: Maybe<ProductManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductsArgs = {
  where: Maybe<ProductManyWhereInput>;
  data: ProductUpdateManyInput;
};


export type MutationDeleteManyProductsArgs = {
  where: Maybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  where: Maybe<ProductManyWhereInput>;
  to?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductsArgs = {
  where: Maybe<ProductManyWhereInput>;
  from?: Array<Stage>;
  locales: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationUpdateReviewArgs = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateInput;
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertReviewArgs = {
  where: ReviewWhereUniqueInput;
  upsert: ReviewUpsertInput;
};


export type MutationPublishReviewArgs = {
  where: ReviewWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishReviewArgs = {
  where: ReviewWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyReviewsConnectionArgs = {
  where: Maybe<ReviewManyWhereInput>;
  data: ReviewUpdateManyInput;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyReviewsConnectionArgs = {
  where: Maybe<ReviewManyWhereInput>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationPublishManyReviewsConnectionArgs = {
  where: Maybe<ReviewManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyReviewsConnectionArgs = {
  where: Maybe<ReviewManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['ID']>;
  after: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyReviewsArgs = {
  where: Maybe<ReviewManyWhereInput>;
  data: ReviewUpdateManyInput;
};


export type MutationDeleteManyReviewsArgs = {
  where: Maybe<ReviewManyWhereInput>;
};


export type MutationPublishManyReviewsArgs = {
  where: Maybe<ReviewManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyReviewsArgs = {
  where: Maybe<ReviewManyWhereInput>;
  from?: Array<Stage>;
};

/** Identifies documents */
export type AddressWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<AddressWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<AddressWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<AddressWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  billingOrder: Maybe<OrderWhereInput>;
  shippingOrder: Maybe<OrderWhereInput>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  address1: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  country_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with: Maybe<Scalars['String']>;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete: Maybe<Scalars['Boolean']>;
};

export type OrderCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  fulfilled: Maybe<Scalars['Boolean']>;
  total: Scalars['Int'];
  orderItems: Maybe<OrderItemCreateManyInlineInput>;
  billingAddress: Maybe<AddressCreateOneInlineInput>;
  shippingAddress: Maybe<AddressCreateOneInlineInput>;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  aggregate: Aggregate;
};


export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete: Maybe<Array<AssetWhereUniqueInput>>;
};

export type MetaUpdateInput = {
  /** seoTitle input for default locale (es) */
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  seoImage: Maybe<AssetUpdateOneInlineInput>;
  logo: Maybe<AssetUpdateOneInlineInput>;
  siteName: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations: Maybe<MetaUpdateLocalizationsInput>;
};

export enum ProductOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC'
}

/** Identifies documents */
export type ProductWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<ProductWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  price: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  price_not_in: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  price_lt: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte: Maybe<Scalars['Int']>;
  images_every: Maybe<AssetWhereInput>;
  images_some: Maybe<AssetWhereInput>;
  images_none: Maybe<AssetWhereInput>;
  category: Maybe<CategoryWhereInput>;
  reviews_every: Maybe<ReviewWhereInput>;
  reviews_some: Maybe<ReviewWhereInput>;
  reviews_none: Maybe<ReviewWhereInput>;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<CollectionWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  slug: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
};

export type ReviewCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Maybe<Scalars['String']>;
  headline: Scalars['String'];
  message: Maybe<Scalars['String']>;
  rating: Scalars['Int'];
  product: Maybe<ProductCreateOneInlineInput>;
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export type AddressUpsertInput = {
  /** Create document if it didn't exist */
  create: AddressCreateInput;
  /** Update document if it exists */
  update: AddressUpdateInput;
};

export type ProductCreateLocalizationDataInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Maybe<Scalars['RichTextAST']>;
  price: Scalars['Int'];
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

/** Identifies documents */
export type AddressManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<AddressWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<AddressWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<AddressWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  billingOrder: Maybe<OrderWhereInput>;
  shippingOrder: Maybe<OrderWhereInput>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  address1: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address1_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address1_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address1_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address1_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address1_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address1_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address1_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address1_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address1_not_ends_with: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address2_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address2_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address2_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address2_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address2_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address2_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address2_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address2_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address2_not_ends_with: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  country_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  zip_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zip_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  zip_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  zip_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  zip_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  zip_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  zip_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  zip_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  zip_not_ends_with: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with: Maybe<Scalars['String']>;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
};

export type ProductUpdateInput = {
  /** name input for default locale (es) */
  name: Maybe<Scalars['String']>;
  /** slug input for default locale (es) */
  slug: Maybe<Scalars['String']>;
  /** description input for default locale (es) */
  description: Maybe<Scalars['RichTextAST']>;
  /** price input for default locale (es) */
  price: Maybe<Scalars['Int']>;
  images: Maybe<AssetUpdateManyInlineInput>;
  category: Maybe<CategoryUpdateOneInlineInput>;
  reviews: Maybe<ReviewUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations: Maybe<ProductUpdateLocalizationsInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data: Maybe<Scalars['Json']>;
};

export type MetaUpdateManyLocalizationDataInput = {
  seoTitle: Maybe<Scalars['String']>;
};

export type ReviewUpdateManyInput = {
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  headline: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}


/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  aggregate: Aggregate;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

export type AddressCreateManyInlineInput = {
  /** Create and connect multiple existing Address documents */
  create: Maybe<Array<AddressCreateInput>>;
  /** Connect multiple existing Address documents */
  connect: Maybe<Array<AddressWhereUniqueInput>>;
};

export type MetaCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: Maybe<Array<MetaCreateLocalizationInput>>;
};

export enum OrderOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  FulfilledAsc = 'fulfilled_ASC',
  FulfilledDesc = 'fulfilled_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC'
}

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<OrderItem>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  order: Maybe<Order>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  price: Scalars['Int'];
  variantId: Scalars['String'];
  /** List of OrderItem versions */
  history: Array<Version>;
};


export type OrderItemDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type OrderItemOrderArgs = {
  locales: Maybe<Array<Locale>>;
};


export type OrderItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type CategoryConnectInput = {
  /** Document to connect */
  where: CategoryWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<ConnectPositionInput>;
};

export type CollectionUpdateLocalizationDataInput = {
  name: Maybe<Scalars['String']>;
};

export type CollectionUpdateManyLocalizationInput = {
  data: CollectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: OrderWhereInput;
  /** Update many input */
  data: OrderUpdateManyInput;
};

export type Review = Node & {
  __typename?: 'Review';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Maybe<Scalars['String']>;
  headline: Scalars['String'];
  message: Maybe<Scalars['String']>;
  rating: Scalars['Int'];
  product: Maybe<Product>;
  /** List of Review versions */
  history: Array<Version>;
};


export type ReviewDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ReviewProductArgs = {
  locales: Maybe<Array<Locale>>;
};


export type ReviewHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<Stage>;
};

export type ReviewUpdateInput = {
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  headline: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
  product: Maybe<ProductUpdateOneInlineInput>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect: Maybe<Array<AssetWhereUniqueInput>>;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<CategoryWhereInput>>;
  id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  products_every: Maybe<ProductWhereInput>;
  products_some: Maybe<ProductWhereInput>;
  products_none: Maybe<ProductWhereInput>;
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

/** A connection to a list of items. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  aggregate: Aggregate;
};

export type AssetFragment = (
  { __typename?: 'Asset' }
  & Pick<Asset, 'id' | 'fileName' | 'mimeType' | 'width' | 'height' | 'url'>
);

export type ProductFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name' | 'price' | 'slug'>
  & { category: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'name'>
    & { entryId: Category['id'] }
  )>, images: Array<(
    { __typename?: 'Asset' }
    & AssetFragment
  )> }
);

export type MetaQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MetaQuery = (
  { __typename?: 'Query' }
  & { values: Maybe<(
    { __typename?: 'Meta' }
    & Pick<Meta, 'id' | 'siteName' | 'seoTitle' | 'seoDescription'>
    & { logo: Maybe<(
      { __typename?: 'Asset' }
      & AssetFragment
    )>, seoImage: Maybe<(
      { __typename?: 'Asset' }
      & AssetFragment
    )> }
  )> }
);

export type ProductQueryVariables = Exact<{
  where: Maybe<ProductWhereInput>;
  locales: Array<Locale>;
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { page: (
    { __typename?: 'ProductConnection' }
    & { edges: Array<(
      { __typename?: 'ProductEdge' }
      & { node: (
        { __typename?: 'Product' }
        & { description: Maybe<(
          { __typename?: 'RichText' }
          & Pick<RichText, 'html'>
        )> }
        & ProductFragment
      ) }
    )>, aggregate: (
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    ) }
  ) }
);

export type ProductsQueryVariables = Exact<{
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<ProductWhereInput>;
  orderBy: Maybe<ProductOrderByInput>;
  locales: Array<Locale>;
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { page: (
    { __typename?: 'ProductConnection' }
    & { edges: Array<(
      { __typename?: 'ProductEdge' }
      & { node: (
        { __typename?: 'Product' }
        & ProductFragment
      ) }
    )>, aggregate: (
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    ) }
  ) }
);

export const AssetFragmentDoc = gql`
    fragment asset on Asset {
  id
  fileName
  mimeType
  width
  height
  url
}
    `;
export const ProductFragmentDoc = gql`
    fragment product on Product {
  id
  name
  price
  slug
  category {
    entryId: id
    name
  }
  images {
    ...asset
  }
}
    ${AssetFragmentDoc}`;
export const MetaDocument = gql`
    query meta($id: ID!) {
  values: meta(where: {id: $id}, stage: PUBLISHED) {
    id
    siteName
    seoTitle
    seoDescription
    logo {
      ...asset
    }
    seoImage {
      ...asset
    }
  }
}
    ${AssetFragmentDoc}`;

/**
 * __useMetaQuery__
 *
 * To run a query within a React component, call `useMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMetaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMetaQuery(baseOptions: Apollo.QueryHookOptions<MetaQuery, MetaQueryVariables>) {
        return Apollo.useQuery<MetaQuery, MetaQueryVariables>(MetaDocument, baseOptions);
      }
export function useMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MetaQuery, MetaQueryVariables>) {
          return Apollo.useLazyQuery<MetaQuery, MetaQueryVariables>(MetaDocument, baseOptions);
        }
export type MetaQueryHookResult = ReturnType<typeof useMetaQuery>;
export type MetaLazyQueryHookResult = ReturnType<typeof useMetaLazyQuery>;
export type MetaQueryResult = Apollo.QueryResult<MetaQuery, MetaQueryVariables>;
export const ProductDocument = gql`
    query product($where: ProductWhereInput, $locales: [Locale!]!) {
  page: productsConnection(
    first: 1
    stage: PUBLISHED
    where: $where
    locales: $locales
  ) {
    edges {
      node {
        ...product
        description {
          html
        }
      }
    }
    aggregate {
      count
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *      locales: // value for 'locales'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query products($first: Int, $skip: Int, $where: ProductWhereInput, $orderBy: ProductOrderByInput, $locales: [Locale!]!) {
  page: productsConnection(
    first: $first
    skip: $skip
    stage: PUBLISHED
    where: $where
    orderBy: $orderBy
    locales: $locales
  ) {
    edges {
      node {
        ...product
      }
    }
    aggregate {
      count
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      locales: // value for 'locales'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;