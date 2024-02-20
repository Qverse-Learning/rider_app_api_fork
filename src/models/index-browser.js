
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  email: 'email',
  role: 'role',
  profile_image: 'profile_image',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  email: 'email',
  phone_number: 'phone_number',
  role: 'role',
  profile_image: 'profile_image',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RiderScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  email: 'email',
  phone_number: 'phone_number',
  operating_areas: 'operating_areas',
  role: 'role',
  profile_image: 'profile_image',
  avg_rating: 'avg_rating',
  password: 'password',
  status: 'status',
  is_verified: 'is_verified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DeliveryScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  package_name: 'package_name',
  phone_number: 'phone_number',
  pickup_location: 'pickup_location',
  delivery_location: 'delivery_location',
  estimated_delivery_price: 'estimated_delivery_price',
  package_image: 'package_image',
  landmark: 'landmark',
  rider_id: 'rider_id',
  delivery_code: 'delivery_code',
  is_pickedup: 'is_pickedup',
  is_delivered: 'is_delivered',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  sent_proposal_rider_id: 'sent_proposal_rider_id'
};

exports.Prisma.ProposalScalarFieldEnum = {
  id: 'id',
  rider_id: 'rider_id',
  delivery_id: 'delivery_id',
  status: 'status'
};

exports.Prisma.Operating_areasScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Bank_detailsScalarFieldEnum = {
  id: 'id',
  rider_id: 'rider_id',
  bank_name: 'bank_name',
  account_name: 'account_name',
  account_number: 'account_number',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Rider_ratingScalarFieldEnum = {
  id: 'id',
  rider_id: 'rider_id',
  user_id: 'user_id',
  rating: 'rating',
  review: 'review',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Rider_credentialsScalarFieldEnum = {
  id: 'id',
  rider_id: 'rider_id',
  nin: 'nin',
  nin_image: 'nin_image',
  driver_license: 'driver_license',
  driver_license_image: 'driver_license_image',
  plate_number: 'plate_number',
  vehicle_image: 'vehicle_image',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  User: 'User',
  Rider: 'Rider',
  Admin: 'Admin'
};

exports.Status = exports.$Enums.Status = {
  Available: 'Available',
  Pending: 'Pending',
  Delivered: 'Delivered',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend'
};

exports.Prisma.ModelName = {
  Admin: 'Admin',
  User: 'User',
  Rider: 'Rider',
  Delivery: 'Delivery',
  Proposal: 'Proposal',
  Operating_areas: 'Operating_areas',
  Bank_details: 'Bank_details',
  Rider_rating: 'Rider_rating',
  Rider_credentials: 'Rider_credentials'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
