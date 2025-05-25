
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SolvedLeetcode
 * 
 */
export type SolvedLeetcode = $Result.DefaultSelection<Prisma.$SolvedLeetcodePayload>
/**
 * Model SolvedCodeforces
 * 
 */
export type SolvedCodeforces = $Result.DefaultSelection<Prisma.$SolvedCodeforcesPayload>
/**
 * Model CtfWriteup
 * 
 */
export type CtfWriteup = $Result.DefaultSelection<Prisma.$CtfWriteupPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CtfCategory: {
  WEB: 'WEB',
  REV: 'REV',
  PWN: 'PWN',
  CRYPTO: 'CRYPTO',
  MISC: 'MISC',
  OSINT: 'OSINT',
  LINUX: 'LINUX'
};

export type CtfCategory = (typeof CtfCategory)[keyof typeof CtfCategory]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CtfCategory = $Enums.CtfCategory

export const CtfCategory: typeof $Enums.CtfCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solvedLeetcode`: Exposes CRUD operations for the **SolvedLeetcode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolvedLeetcodes
    * const solvedLeetcodes = await prisma.solvedLeetcode.findMany()
    * ```
    */
  get solvedLeetcode(): Prisma.SolvedLeetcodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solvedCodeforces`: Exposes CRUD operations for the **SolvedCodeforces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolvedCodeforces
    * const solvedCodeforces = await prisma.solvedCodeforces.findMany()
    * ```
    */
  get solvedCodeforces(): Prisma.SolvedCodeforcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ctfWriteup`: Exposes CRUD operations for the **CtfWriteup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CtfWriteups
    * const ctfWriteups = await prisma.ctfWriteup.findMany()
    * ```
    */
  get ctfWriteup(): Prisma.CtfWriteupDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SolvedLeetcode: 'SolvedLeetcode',
    SolvedCodeforces: 'SolvedCodeforces',
    CtfWriteup: 'CtfWriteup'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "solvedLeetcode" | "solvedCodeforces" | "ctfWriteup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SolvedLeetcode: {
        payload: Prisma.$SolvedLeetcodePayload<ExtArgs>
        fields: Prisma.SolvedLeetcodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolvedLeetcodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolvedLeetcodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>
          }
          findFirst: {
            args: Prisma.SolvedLeetcodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolvedLeetcodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>
          }
          findMany: {
            args: Prisma.SolvedLeetcodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>[]
          }
          create: {
            args: Prisma.SolvedLeetcodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>
          }
          createMany: {
            args: Prisma.SolvedLeetcodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolvedLeetcodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>[]
          }
          delete: {
            args: Prisma.SolvedLeetcodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>
          }
          update: {
            args: Prisma.SolvedLeetcodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>
          }
          deleteMany: {
            args: Prisma.SolvedLeetcodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolvedLeetcodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolvedLeetcodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>[]
          }
          upsert: {
            args: Prisma.SolvedLeetcodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedLeetcodePayload>
          }
          aggregate: {
            args: Prisma.SolvedLeetcodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolvedLeetcode>
          }
          groupBy: {
            args: Prisma.SolvedLeetcodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolvedLeetcodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolvedLeetcodeCountArgs<ExtArgs>
            result: $Utils.Optional<SolvedLeetcodeCountAggregateOutputType> | number
          }
        }
      }
      SolvedCodeforces: {
        payload: Prisma.$SolvedCodeforcesPayload<ExtArgs>
        fields: Prisma.SolvedCodeforcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolvedCodeforcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolvedCodeforcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>
          }
          findFirst: {
            args: Prisma.SolvedCodeforcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolvedCodeforcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>
          }
          findMany: {
            args: Prisma.SolvedCodeforcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>[]
          }
          create: {
            args: Prisma.SolvedCodeforcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>
          }
          createMany: {
            args: Prisma.SolvedCodeforcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolvedCodeforcesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>[]
          }
          delete: {
            args: Prisma.SolvedCodeforcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>
          }
          update: {
            args: Prisma.SolvedCodeforcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>
          }
          deleteMany: {
            args: Prisma.SolvedCodeforcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolvedCodeforcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolvedCodeforcesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>[]
          }
          upsert: {
            args: Prisma.SolvedCodeforcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedCodeforcesPayload>
          }
          aggregate: {
            args: Prisma.SolvedCodeforcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolvedCodeforces>
          }
          groupBy: {
            args: Prisma.SolvedCodeforcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolvedCodeforcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolvedCodeforcesCountArgs<ExtArgs>
            result: $Utils.Optional<SolvedCodeforcesCountAggregateOutputType> | number
          }
        }
      }
      CtfWriteup: {
        payload: Prisma.$CtfWriteupPayload<ExtArgs>
        fields: Prisma.CtfWriteupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CtfWriteupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CtfWriteupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>
          }
          findFirst: {
            args: Prisma.CtfWriteupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CtfWriteupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>
          }
          findMany: {
            args: Prisma.CtfWriteupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>[]
          }
          create: {
            args: Prisma.CtfWriteupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>
          }
          createMany: {
            args: Prisma.CtfWriteupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CtfWriteupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>[]
          }
          delete: {
            args: Prisma.CtfWriteupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>
          }
          update: {
            args: Prisma.CtfWriteupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>
          }
          deleteMany: {
            args: Prisma.CtfWriteupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CtfWriteupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CtfWriteupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>[]
          }
          upsert: {
            args: Prisma.CtfWriteupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtfWriteupPayload>
          }
          aggregate: {
            args: Prisma.CtfWriteupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCtfWriteup>
          }
          groupBy: {
            args: Prisma.CtfWriteupGroupByArgs<ExtArgs>
            result: $Utils.Optional<CtfWriteupGroupByOutputType>[]
          }
          count: {
            args: Prisma.CtfWriteupCountArgs<ExtArgs>
            result: $Utils.Optional<CtfWriteupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    solvedLeetcode?: SolvedLeetcodeOmit
    solvedCodeforces?: SolvedCodeforcesOmit
    ctfWriteup?: CtfWriteupOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    solved_leetcode: number
    solved_codeforces: number
    ctf_writeups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solved_leetcode?: boolean | UserCountOutputTypeCountSolved_leetcodeArgs
    solved_codeforces?: boolean | UserCountOutputTypeCountSolved_codeforcesArgs
    ctf_writeups?: boolean | UserCountOutputTypeCountCtf_writeupsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolved_leetcodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedLeetcodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolved_codeforcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedCodeforcesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCtf_writeupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CtfWriteupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    github_id: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    github_id: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    github_id: number
    username: number
    email: number
    role: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    github_id?: true
    username?: true
    email?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    github_id?: true
    username?: true
    email?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    github_id?: true
    username?: true
    email?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    github_id: string
    username: string
    email: string | null
    role: $Enums.Role
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    github_id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
    solved_leetcode?: boolean | User$solved_leetcodeArgs<ExtArgs>
    solved_codeforces?: boolean | User$solved_codeforcesArgs<ExtArgs>
    ctf_writeups?: boolean | User$ctf_writeupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    github_id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    github_id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    github_id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "github_id" | "username" | "email" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solved_leetcode?: boolean | User$solved_leetcodeArgs<ExtArgs>
    solved_codeforces?: boolean | User$solved_codeforcesArgs<ExtArgs>
    ctf_writeups?: boolean | User$ctf_writeupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      solved_leetcode: Prisma.$SolvedLeetcodePayload<ExtArgs>[]
      solved_codeforces: Prisma.$SolvedCodeforcesPayload<ExtArgs>[]
      ctf_writeups: Prisma.$CtfWriteupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      github_id: string
      username: string
      email: string | null
      role: $Enums.Role
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solved_leetcode<T extends User$solved_leetcodeArgs<ExtArgs> = {}>(args?: Subset<T, User$solved_leetcodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solved_codeforces<T extends User$solved_codeforcesArgs<ExtArgs> = {}>(args?: Subset<T, User$solved_codeforcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ctf_writeups<T extends User$ctf_writeupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ctf_writeupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly github_id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.solved_leetcode
   */
  export type User$solved_leetcodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    where?: SolvedLeetcodeWhereInput
    orderBy?: SolvedLeetcodeOrderByWithRelationInput | SolvedLeetcodeOrderByWithRelationInput[]
    cursor?: SolvedLeetcodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedLeetcodeScalarFieldEnum | SolvedLeetcodeScalarFieldEnum[]
  }

  /**
   * User.solved_codeforces
   */
  export type User$solved_codeforcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    where?: SolvedCodeforcesWhereInput
    orderBy?: SolvedCodeforcesOrderByWithRelationInput | SolvedCodeforcesOrderByWithRelationInput[]
    cursor?: SolvedCodeforcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedCodeforcesScalarFieldEnum | SolvedCodeforcesScalarFieldEnum[]
  }

  /**
   * User.ctf_writeups
   */
  export type User$ctf_writeupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    where?: CtfWriteupWhereInput
    orderBy?: CtfWriteupOrderByWithRelationInput | CtfWriteupOrderByWithRelationInput[]
    cursor?: CtfWriteupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CtfWriteupScalarFieldEnum | CtfWriteupScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SolvedLeetcode
   */

  export type AggregateSolvedLeetcode = {
    _count: SolvedLeetcodeCountAggregateOutputType | null
    _avg: SolvedLeetcodeAvgAggregateOutputType | null
    _sum: SolvedLeetcodeSumAggregateOutputType | null
    _min: SolvedLeetcodeMinAggregateOutputType | null
    _max: SolvedLeetcodeMaxAggregateOutputType | null
  }

  export type SolvedLeetcodeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SolvedLeetcodeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SolvedLeetcodeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    problem_id: string | null
    title: string | null
    difficulty: string | null
    solution: string | null
    ai_analysis: string | null
    created_at: Date | null
  }

  export type SolvedLeetcodeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    problem_id: string | null
    title: string | null
    difficulty: string | null
    solution: string | null
    ai_analysis: string | null
    created_at: Date | null
  }

  export type SolvedLeetcodeCountAggregateOutputType = {
    id: number
    userId: number
    problem_id: number
    title: number
    difficulty: number
    tags: number
    solution: number
    ai_analysis: number
    created_at: number
    _all: number
  }


  export type SolvedLeetcodeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SolvedLeetcodeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SolvedLeetcodeMinAggregateInputType = {
    id?: true
    userId?: true
    problem_id?: true
    title?: true
    difficulty?: true
    solution?: true
    ai_analysis?: true
    created_at?: true
  }

  export type SolvedLeetcodeMaxAggregateInputType = {
    id?: true
    userId?: true
    problem_id?: true
    title?: true
    difficulty?: true
    solution?: true
    ai_analysis?: true
    created_at?: true
  }

  export type SolvedLeetcodeCountAggregateInputType = {
    id?: true
    userId?: true
    problem_id?: true
    title?: true
    difficulty?: true
    tags?: true
    solution?: true
    ai_analysis?: true
    created_at?: true
    _all?: true
  }

  export type SolvedLeetcodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedLeetcode to aggregate.
     */
    where?: SolvedLeetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedLeetcodes to fetch.
     */
    orderBy?: SolvedLeetcodeOrderByWithRelationInput | SolvedLeetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolvedLeetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedLeetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedLeetcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolvedLeetcodes
    **/
    _count?: true | SolvedLeetcodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolvedLeetcodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolvedLeetcodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolvedLeetcodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolvedLeetcodeMaxAggregateInputType
  }

  export type GetSolvedLeetcodeAggregateType<T extends SolvedLeetcodeAggregateArgs> = {
        [P in keyof T & keyof AggregateSolvedLeetcode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolvedLeetcode[P]>
      : GetScalarType<T[P], AggregateSolvedLeetcode[P]>
  }




  export type SolvedLeetcodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedLeetcodeWhereInput
    orderBy?: SolvedLeetcodeOrderByWithAggregationInput | SolvedLeetcodeOrderByWithAggregationInput[]
    by: SolvedLeetcodeScalarFieldEnum[] | SolvedLeetcodeScalarFieldEnum
    having?: SolvedLeetcodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolvedLeetcodeCountAggregateInputType | true
    _avg?: SolvedLeetcodeAvgAggregateInputType
    _sum?: SolvedLeetcodeSumAggregateInputType
    _min?: SolvedLeetcodeMinAggregateInputType
    _max?: SolvedLeetcodeMaxAggregateInputType
  }

  export type SolvedLeetcodeGroupByOutputType = {
    id: number
    userId: number
    problem_id: string
    title: string
    difficulty: string
    tags: string[]
    solution: string | null
    ai_analysis: string | null
    created_at: Date
    _count: SolvedLeetcodeCountAggregateOutputType | null
    _avg: SolvedLeetcodeAvgAggregateOutputType | null
    _sum: SolvedLeetcodeSumAggregateOutputType | null
    _min: SolvedLeetcodeMinAggregateOutputType | null
    _max: SolvedLeetcodeMaxAggregateOutputType | null
  }

  type GetSolvedLeetcodeGroupByPayload<T extends SolvedLeetcodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolvedLeetcodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolvedLeetcodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolvedLeetcodeGroupByOutputType[P]>
            : GetScalarType<T[P], SolvedLeetcodeGroupByOutputType[P]>
        }
      >
    >


  export type SolvedLeetcodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    ai_analysis?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solvedLeetcode"]>

  export type SolvedLeetcodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    ai_analysis?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solvedLeetcode"]>

  export type SolvedLeetcodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    ai_analysis?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solvedLeetcode"]>

  export type SolvedLeetcodeSelectScalar = {
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    ai_analysis?: boolean
    created_at?: boolean
  }

  export type SolvedLeetcodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problem_id" | "title" | "difficulty" | "tags" | "solution" | "ai_analysis" | "created_at", ExtArgs["result"]["solvedLeetcode"]>
  export type SolvedLeetcodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SolvedLeetcodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SolvedLeetcodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SolvedLeetcodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolvedLeetcode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      problem_id: string
      title: string
      difficulty: string
      tags: string[]
      solution: string | null
      ai_analysis: string | null
      created_at: Date
    }, ExtArgs["result"]["solvedLeetcode"]>
    composites: {}
  }

  type SolvedLeetcodeGetPayload<S extends boolean | null | undefined | SolvedLeetcodeDefaultArgs> = $Result.GetResult<Prisma.$SolvedLeetcodePayload, S>

  type SolvedLeetcodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolvedLeetcodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolvedLeetcodeCountAggregateInputType | true
    }

  export interface SolvedLeetcodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolvedLeetcode'], meta: { name: 'SolvedLeetcode' } }
    /**
     * Find zero or one SolvedLeetcode that matches the filter.
     * @param {SolvedLeetcodeFindUniqueArgs} args - Arguments to find a SolvedLeetcode
     * @example
     * // Get one SolvedLeetcode
     * const solvedLeetcode = await prisma.solvedLeetcode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolvedLeetcodeFindUniqueArgs>(args: SelectSubset<T, SolvedLeetcodeFindUniqueArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolvedLeetcode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolvedLeetcodeFindUniqueOrThrowArgs} args - Arguments to find a SolvedLeetcode
     * @example
     * // Get one SolvedLeetcode
     * const solvedLeetcode = await prisma.solvedLeetcode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolvedLeetcodeFindUniqueOrThrowArgs>(args: SelectSubset<T, SolvedLeetcodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedLeetcode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedLeetcodeFindFirstArgs} args - Arguments to find a SolvedLeetcode
     * @example
     * // Get one SolvedLeetcode
     * const solvedLeetcode = await prisma.solvedLeetcode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolvedLeetcodeFindFirstArgs>(args?: SelectSubset<T, SolvedLeetcodeFindFirstArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedLeetcode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedLeetcodeFindFirstOrThrowArgs} args - Arguments to find a SolvedLeetcode
     * @example
     * // Get one SolvedLeetcode
     * const solvedLeetcode = await prisma.solvedLeetcode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolvedLeetcodeFindFirstOrThrowArgs>(args?: SelectSubset<T, SolvedLeetcodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolvedLeetcodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedLeetcodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolvedLeetcodes
     * const solvedLeetcodes = await prisma.solvedLeetcode.findMany()
     * 
     * // Get first 10 SolvedLeetcodes
     * const solvedLeetcodes = await prisma.solvedLeetcode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solvedLeetcodeWithIdOnly = await prisma.solvedLeetcode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolvedLeetcodeFindManyArgs>(args?: SelectSubset<T, SolvedLeetcodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolvedLeetcode.
     * @param {SolvedLeetcodeCreateArgs} args - Arguments to create a SolvedLeetcode.
     * @example
     * // Create one SolvedLeetcode
     * const SolvedLeetcode = await prisma.solvedLeetcode.create({
     *   data: {
     *     // ... data to create a SolvedLeetcode
     *   }
     * })
     * 
     */
    create<T extends SolvedLeetcodeCreateArgs>(args: SelectSubset<T, SolvedLeetcodeCreateArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolvedLeetcodes.
     * @param {SolvedLeetcodeCreateManyArgs} args - Arguments to create many SolvedLeetcodes.
     * @example
     * // Create many SolvedLeetcodes
     * const solvedLeetcode = await prisma.solvedLeetcode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolvedLeetcodeCreateManyArgs>(args?: SelectSubset<T, SolvedLeetcodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolvedLeetcodes and returns the data saved in the database.
     * @param {SolvedLeetcodeCreateManyAndReturnArgs} args - Arguments to create many SolvedLeetcodes.
     * @example
     * // Create many SolvedLeetcodes
     * const solvedLeetcode = await prisma.solvedLeetcode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolvedLeetcodes and only return the `id`
     * const solvedLeetcodeWithIdOnly = await prisma.solvedLeetcode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolvedLeetcodeCreateManyAndReturnArgs>(args?: SelectSubset<T, SolvedLeetcodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolvedLeetcode.
     * @param {SolvedLeetcodeDeleteArgs} args - Arguments to delete one SolvedLeetcode.
     * @example
     * // Delete one SolvedLeetcode
     * const SolvedLeetcode = await prisma.solvedLeetcode.delete({
     *   where: {
     *     // ... filter to delete one SolvedLeetcode
     *   }
     * })
     * 
     */
    delete<T extends SolvedLeetcodeDeleteArgs>(args: SelectSubset<T, SolvedLeetcodeDeleteArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolvedLeetcode.
     * @param {SolvedLeetcodeUpdateArgs} args - Arguments to update one SolvedLeetcode.
     * @example
     * // Update one SolvedLeetcode
     * const solvedLeetcode = await prisma.solvedLeetcode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolvedLeetcodeUpdateArgs>(args: SelectSubset<T, SolvedLeetcodeUpdateArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolvedLeetcodes.
     * @param {SolvedLeetcodeDeleteManyArgs} args - Arguments to filter SolvedLeetcodes to delete.
     * @example
     * // Delete a few SolvedLeetcodes
     * const { count } = await prisma.solvedLeetcode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolvedLeetcodeDeleteManyArgs>(args?: SelectSubset<T, SolvedLeetcodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolvedLeetcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedLeetcodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolvedLeetcodes
     * const solvedLeetcode = await prisma.solvedLeetcode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolvedLeetcodeUpdateManyArgs>(args: SelectSubset<T, SolvedLeetcodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolvedLeetcodes and returns the data updated in the database.
     * @param {SolvedLeetcodeUpdateManyAndReturnArgs} args - Arguments to update many SolvedLeetcodes.
     * @example
     * // Update many SolvedLeetcodes
     * const solvedLeetcode = await prisma.solvedLeetcode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolvedLeetcodes and only return the `id`
     * const solvedLeetcodeWithIdOnly = await prisma.solvedLeetcode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolvedLeetcodeUpdateManyAndReturnArgs>(args: SelectSubset<T, SolvedLeetcodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolvedLeetcode.
     * @param {SolvedLeetcodeUpsertArgs} args - Arguments to update or create a SolvedLeetcode.
     * @example
     * // Update or create a SolvedLeetcode
     * const solvedLeetcode = await prisma.solvedLeetcode.upsert({
     *   create: {
     *     // ... data to create a SolvedLeetcode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolvedLeetcode we want to update
     *   }
     * })
     */
    upsert<T extends SolvedLeetcodeUpsertArgs>(args: SelectSubset<T, SolvedLeetcodeUpsertArgs<ExtArgs>>): Prisma__SolvedLeetcodeClient<$Result.GetResult<Prisma.$SolvedLeetcodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolvedLeetcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedLeetcodeCountArgs} args - Arguments to filter SolvedLeetcodes to count.
     * @example
     * // Count the number of SolvedLeetcodes
     * const count = await prisma.solvedLeetcode.count({
     *   where: {
     *     // ... the filter for the SolvedLeetcodes we want to count
     *   }
     * })
    **/
    count<T extends SolvedLeetcodeCountArgs>(
      args?: Subset<T, SolvedLeetcodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolvedLeetcodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolvedLeetcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedLeetcodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolvedLeetcodeAggregateArgs>(args: Subset<T, SolvedLeetcodeAggregateArgs>): Prisma.PrismaPromise<GetSolvedLeetcodeAggregateType<T>>

    /**
     * Group by SolvedLeetcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedLeetcodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolvedLeetcodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolvedLeetcodeGroupByArgs['orderBy'] }
        : { orderBy?: SolvedLeetcodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolvedLeetcodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolvedLeetcodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolvedLeetcode model
   */
  readonly fields: SolvedLeetcodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolvedLeetcode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolvedLeetcodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolvedLeetcode model
   */
  interface SolvedLeetcodeFieldRefs {
    readonly id: FieldRef<"SolvedLeetcode", 'Int'>
    readonly userId: FieldRef<"SolvedLeetcode", 'Int'>
    readonly problem_id: FieldRef<"SolvedLeetcode", 'String'>
    readonly title: FieldRef<"SolvedLeetcode", 'String'>
    readonly difficulty: FieldRef<"SolvedLeetcode", 'String'>
    readonly tags: FieldRef<"SolvedLeetcode", 'String[]'>
    readonly solution: FieldRef<"SolvedLeetcode", 'String'>
    readonly ai_analysis: FieldRef<"SolvedLeetcode", 'String'>
    readonly created_at: FieldRef<"SolvedLeetcode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolvedLeetcode findUnique
   */
  export type SolvedLeetcodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * Filter, which SolvedLeetcode to fetch.
     */
    where: SolvedLeetcodeWhereUniqueInput
  }

  /**
   * SolvedLeetcode findUniqueOrThrow
   */
  export type SolvedLeetcodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * Filter, which SolvedLeetcode to fetch.
     */
    where: SolvedLeetcodeWhereUniqueInput
  }

  /**
   * SolvedLeetcode findFirst
   */
  export type SolvedLeetcodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * Filter, which SolvedLeetcode to fetch.
     */
    where?: SolvedLeetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedLeetcodes to fetch.
     */
    orderBy?: SolvedLeetcodeOrderByWithRelationInput | SolvedLeetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedLeetcodes.
     */
    cursor?: SolvedLeetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedLeetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedLeetcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedLeetcodes.
     */
    distinct?: SolvedLeetcodeScalarFieldEnum | SolvedLeetcodeScalarFieldEnum[]
  }

  /**
   * SolvedLeetcode findFirstOrThrow
   */
  export type SolvedLeetcodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * Filter, which SolvedLeetcode to fetch.
     */
    where?: SolvedLeetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedLeetcodes to fetch.
     */
    orderBy?: SolvedLeetcodeOrderByWithRelationInput | SolvedLeetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedLeetcodes.
     */
    cursor?: SolvedLeetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedLeetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedLeetcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedLeetcodes.
     */
    distinct?: SolvedLeetcodeScalarFieldEnum | SolvedLeetcodeScalarFieldEnum[]
  }

  /**
   * SolvedLeetcode findMany
   */
  export type SolvedLeetcodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * Filter, which SolvedLeetcodes to fetch.
     */
    where?: SolvedLeetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedLeetcodes to fetch.
     */
    orderBy?: SolvedLeetcodeOrderByWithRelationInput | SolvedLeetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolvedLeetcodes.
     */
    cursor?: SolvedLeetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedLeetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedLeetcodes.
     */
    skip?: number
    distinct?: SolvedLeetcodeScalarFieldEnum | SolvedLeetcodeScalarFieldEnum[]
  }

  /**
   * SolvedLeetcode create
   */
  export type SolvedLeetcodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * The data needed to create a SolvedLeetcode.
     */
    data: XOR<SolvedLeetcodeCreateInput, SolvedLeetcodeUncheckedCreateInput>
  }

  /**
   * SolvedLeetcode createMany
   */
  export type SolvedLeetcodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolvedLeetcodes.
     */
    data: SolvedLeetcodeCreateManyInput | SolvedLeetcodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolvedLeetcode createManyAndReturn
   */
  export type SolvedLeetcodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * The data used to create many SolvedLeetcodes.
     */
    data: SolvedLeetcodeCreateManyInput | SolvedLeetcodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolvedLeetcode update
   */
  export type SolvedLeetcodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * The data needed to update a SolvedLeetcode.
     */
    data: XOR<SolvedLeetcodeUpdateInput, SolvedLeetcodeUncheckedUpdateInput>
    /**
     * Choose, which SolvedLeetcode to update.
     */
    where: SolvedLeetcodeWhereUniqueInput
  }

  /**
   * SolvedLeetcode updateMany
   */
  export type SolvedLeetcodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolvedLeetcodes.
     */
    data: XOR<SolvedLeetcodeUpdateManyMutationInput, SolvedLeetcodeUncheckedUpdateManyInput>
    /**
     * Filter which SolvedLeetcodes to update
     */
    where?: SolvedLeetcodeWhereInput
    /**
     * Limit how many SolvedLeetcodes to update.
     */
    limit?: number
  }

  /**
   * SolvedLeetcode updateManyAndReturn
   */
  export type SolvedLeetcodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * The data used to update SolvedLeetcodes.
     */
    data: XOR<SolvedLeetcodeUpdateManyMutationInput, SolvedLeetcodeUncheckedUpdateManyInput>
    /**
     * Filter which SolvedLeetcodes to update
     */
    where?: SolvedLeetcodeWhereInput
    /**
     * Limit how many SolvedLeetcodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolvedLeetcode upsert
   */
  export type SolvedLeetcodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * The filter to search for the SolvedLeetcode to update in case it exists.
     */
    where: SolvedLeetcodeWhereUniqueInput
    /**
     * In case the SolvedLeetcode found by the `where` argument doesn't exist, create a new SolvedLeetcode with this data.
     */
    create: XOR<SolvedLeetcodeCreateInput, SolvedLeetcodeUncheckedCreateInput>
    /**
     * In case the SolvedLeetcode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolvedLeetcodeUpdateInput, SolvedLeetcodeUncheckedUpdateInput>
  }

  /**
   * SolvedLeetcode delete
   */
  export type SolvedLeetcodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
    /**
     * Filter which SolvedLeetcode to delete.
     */
    where: SolvedLeetcodeWhereUniqueInput
  }

  /**
   * SolvedLeetcode deleteMany
   */
  export type SolvedLeetcodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedLeetcodes to delete
     */
    where?: SolvedLeetcodeWhereInput
    /**
     * Limit how many SolvedLeetcodes to delete.
     */
    limit?: number
  }

  /**
   * SolvedLeetcode without action
   */
  export type SolvedLeetcodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedLeetcode
     */
    select?: SolvedLeetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedLeetcode
     */
    omit?: SolvedLeetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedLeetcodeInclude<ExtArgs> | null
  }


  /**
   * Model SolvedCodeforces
   */

  export type AggregateSolvedCodeforces = {
    _count: SolvedCodeforcesCountAggregateOutputType | null
    _avg: SolvedCodeforcesAvgAggregateOutputType | null
    _sum: SolvedCodeforcesSumAggregateOutputType | null
    _min: SolvedCodeforcesMinAggregateOutputType | null
    _max: SolvedCodeforcesMaxAggregateOutputType | null
  }

  export type SolvedCodeforcesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    difficulty: number | null
  }

  export type SolvedCodeforcesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    difficulty: number | null
  }

  export type SolvedCodeforcesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    problem_id: string | null
    title: string | null
    difficulty: number | null
    solution: string | null
    language: string | null
    ai_analysis: string | null
    created_at: Date | null
  }

  export type SolvedCodeforcesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    problem_id: string | null
    title: string | null
    difficulty: number | null
    solution: string | null
    language: string | null
    ai_analysis: string | null
    created_at: Date | null
  }

  export type SolvedCodeforcesCountAggregateOutputType = {
    id: number
    userId: number
    problem_id: number
    title: number
    difficulty: number
    tags: number
    solution: number
    language: number
    ai_analysis: number
    created_at: number
    _all: number
  }


  export type SolvedCodeforcesAvgAggregateInputType = {
    id?: true
    userId?: true
    difficulty?: true
  }

  export type SolvedCodeforcesSumAggregateInputType = {
    id?: true
    userId?: true
    difficulty?: true
  }

  export type SolvedCodeforcesMinAggregateInputType = {
    id?: true
    userId?: true
    problem_id?: true
    title?: true
    difficulty?: true
    solution?: true
    language?: true
    ai_analysis?: true
    created_at?: true
  }

  export type SolvedCodeforcesMaxAggregateInputType = {
    id?: true
    userId?: true
    problem_id?: true
    title?: true
    difficulty?: true
    solution?: true
    language?: true
    ai_analysis?: true
    created_at?: true
  }

  export type SolvedCodeforcesCountAggregateInputType = {
    id?: true
    userId?: true
    problem_id?: true
    title?: true
    difficulty?: true
    tags?: true
    solution?: true
    language?: true
    ai_analysis?: true
    created_at?: true
    _all?: true
  }

  export type SolvedCodeforcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedCodeforces to aggregate.
     */
    where?: SolvedCodeforcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedCodeforces to fetch.
     */
    orderBy?: SolvedCodeforcesOrderByWithRelationInput | SolvedCodeforcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolvedCodeforcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedCodeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedCodeforces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolvedCodeforces
    **/
    _count?: true | SolvedCodeforcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolvedCodeforcesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolvedCodeforcesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolvedCodeforcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolvedCodeforcesMaxAggregateInputType
  }

  export type GetSolvedCodeforcesAggregateType<T extends SolvedCodeforcesAggregateArgs> = {
        [P in keyof T & keyof AggregateSolvedCodeforces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolvedCodeforces[P]>
      : GetScalarType<T[P], AggregateSolvedCodeforces[P]>
  }




  export type SolvedCodeforcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedCodeforcesWhereInput
    orderBy?: SolvedCodeforcesOrderByWithAggregationInput | SolvedCodeforcesOrderByWithAggregationInput[]
    by: SolvedCodeforcesScalarFieldEnum[] | SolvedCodeforcesScalarFieldEnum
    having?: SolvedCodeforcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolvedCodeforcesCountAggregateInputType | true
    _avg?: SolvedCodeforcesAvgAggregateInputType
    _sum?: SolvedCodeforcesSumAggregateInputType
    _min?: SolvedCodeforcesMinAggregateInputType
    _max?: SolvedCodeforcesMaxAggregateInputType
  }

  export type SolvedCodeforcesGroupByOutputType = {
    id: number
    userId: number
    problem_id: string
    title: string
    difficulty: number
    tags: string[]
    solution: string | null
    language: string | null
    ai_analysis: string | null
    created_at: Date
    _count: SolvedCodeforcesCountAggregateOutputType | null
    _avg: SolvedCodeforcesAvgAggregateOutputType | null
    _sum: SolvedCodeforcesSumAggregateOutputType | null
    _min: SolvedCodeforcesMinAggregateOutputType | null
    _max: SolvedCodeforcesMaxAggregateOutputType | null
  }

  type GetSolvedCodeforcesGroupByPayload<T extends SolvedCodeforcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolvedCodeforcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolvedCodeforcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolvedCodeforcesGroupByOutputType[P]>
            : GetScalarType<T[P], SolvedCodeforcesGroupByOutputType[P]>
        }
      >
    >


  export type SolvedCodeforcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    language?: boolean
    ai_analysis?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solvedCodeforces"]>

  export type SolvedCodeforcesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    language?: boolean
    ai_analysis?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solvedCodeforces"]>

  export type SolvedCodeforcesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    language?: boolean
    ai_analysis?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solvedCodeforces"]>

  export type SolvedCodeforcesSelectScalar = {
    id?: boolean
    userId?: boolean
    problem_id?: boolean
    title?: boolean
    difficulty?: boolean
    tags?: boolean
    solution?: boolean
    language?: boolean
    ai_analysis?: boolean
    created_at?: boolean
  }

  export type SolvedCodeforcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problem_id" | "title" | "difficulty" | "tags" | "solution" | "language" | "ai_analysis" | "created_at", ExtArgs["result"]["solvedCodeforces"]>
  export type SolvedCodeforcesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SolvedCodeforcesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SolvedCodeforcesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SolvedCodeforcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolvedCodeforces"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      problem_id: string
      title: string
      difficulty: number
      tags: string[]
      solution: string | null
      language: string | null
      ai_analysis: string | null
      created_at: Date
    }, ExtArgs["result"]["solvedCodeforces"]>
    composites: {}
  }

  type SolvedCodeforcesGetPayload<S extends boolean | null | undefined | SolvedCodeforcesDefaultArgs> = $Result.GetResult<Prisma.$SolvedCodeforcesPayload, S>

  type SolvedCodeforcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolvedCodeforcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolvedCodeforcesCountAggregateInputType | true
    }

  export interface SolvedCodeforcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolvedCodeforces'], meta: { name: 'SolvedCodeforces' } }
    /**
     * Find zero or one SolvedCodeforces that matches the filter.
     * @param {SolvedCodeforcesFindUniqueArgs} args - Arguments to find a SolvedCodeforces
     * @example
     * // Get one SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolvedCodeforcesFindUniqueArgs>(args: SelectSubset<T, SolvedCodeforcesFindUniqueArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolvedCodeforces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolvedCodeforcesFindUniqueOrThrowArgs} args - Arguments to find a SolvedCodeforces
     * @example
     * // Get one SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolvedCodeforcesFindUniqueOrThrowArgs>(args: SelectSubset<T, SolvedCodeforcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedCodeforces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCodeforcesFindFirstArgs} args - Arguments to find a SolvedCodeforces
     * @example
     * // Get one SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolvedCodeforcesFindFirstArgs>(args?: SelectSubset<T, SolvedCodeforcesFindFirstArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedCodeforces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCodeforcesFindFirstOrThrowArgs} args - Arguments to find a SolvedCodeforces
     * @example
     * // Get one SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolvedCodeforcesFindFirstOrThrowArgs>(args?: SelectSubset<T, SolvedCodeforcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolvedCodeforces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCodeforcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.findMany()
     * 
     * // Get first 10 SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solvedCodeforcesWithIdOnly = await prisma.solvedCodeforces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolvedCodeforcesFindManyArgs>(args?: SelectSubset<T, SolvedCodeforcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolvedCodeforces.
     * @param {SolvedCodeforcesCreateArgs} args - Arguments to create a SolvedCodeforces.
     * @example
     * // Create one SolvedCodeforces
     * const SolvedCodeforces = await prisma.solvedCodeforces.create({
     *   data: {
     *     // ... data to create a SolvedCodeforces
     *   }
     * })
     * 
     */
    create<T extends SolvedCodeforcesCreateArgs>(args: SelectSubset<T, SolvedCodeforcesCreateArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolvedCodeforces.
     * @param {SolvedCodeforcesCreateManyArgs} args - Arguments to create many SolvedCodeforces.
     * @example
     * // Create many SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolvedCodeforcesCreateManyArgs>(args?: SelectSubset<T, SolvedCodeforcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolvedCodeforces and returns the data saved in the database.
     * @param {SolvedCodeforcesCreateManyAndReturnArgs} args - Arguments to create many SolvedCodeforces.
     * @example
     * // Create many SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolvedCodeforces and only return the `id`
     * const solvedCodeforcesWithIdOnly = await prisma.solvedCodeforces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolvedCodeforcesCreateManyAndReturnArgs>(args?: SelectSubset<T, SolvedCodeforcesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolvedCodeforces.
     * @param {SolvedCodeforcesDeleteArgs} args - Arguments to delete one SolvedCodeforces.
     * @example
     * // Delete one SolvedCodeforces
     * const SolvedCodeforces = await prisma.solvedCodeforces.delete({
     *   where: {
     *     // ... filter to delete one SolvedCodeforces
     *   }
     * })
     * 
     */
    delete<T extends SolvedCodeforcesDeleteArgs>(args: SelectSubset<T, SolvedCodeforcesDeleteArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolvedCodeforces.
     * @param {SolvedCodeforcesUpdateArgs} args - Arguments to update one SolvedCodeforces.
     * @example
     * // Update one SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolvedCodeforcesUpdateArgs>(args: SelectSubset<T, SolvedCodeforcesUpdateArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolvedCodeforces.
     * @param {SolvedCodeforcesDeleteManyArgs} args - Arguments to filter SolvedCodeforces to delete.
     * @example
     * // Delete a few SolvedCodeforces
     * const { count } = await prisma.solvedCodeforces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolvedCodeforcesDeleteManyArgs>(args?: SelectSubset<T, SolvedCodeforcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolvedCodeforces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCodeforcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolvedCodeforcesUpdateManyArgs>(args: SelectSubset<T, SolvedCodeforcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolvedCodeforces and returns the data updated in the database.
     * @param {SolvedCodeforcesUpdateManyAndReturnArgs} args - Arguments to update many SolvedCodeforces.
     * @example
     * // Update many SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolvedCodeforces and only return the `id`
     * const solvedCodeforcesWithIdOnly = await prisma.solvedCodeforces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolvedCodeforcesUpdateManyAndReturnArgs>(args: SelectSubset<T, SolvedCodeforcesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolvedCodeforces.
     * @param {SolvedCodeforcesUpsertArgs} args - Arguments to update or create a SolvedCodeforces.
     * @example
     * // Update or create a SolvedCodeforces
     * const solvedCodeforces = await prisma.solvedCodeforces.upsert({
     *   create: {
     *     // ... data to create a SolvedCodeforces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolvedCodeforces we want to update
     *   }
     * })
     */
    upsert<T extends SolvedCodeforcesUpsertArgs>(args: SelectSubset<T, SolvedCodeforcesUpsertArgs<ExtArgs>>): Prisma__SolvedCodeforcesClient<$Result.GetResult<Prisma.$SolvedCodeforcesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolvedCodeforces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCodeforcesCountArgs} args - Arguments to filter SolvedCodeforces to count.
     * @example
     * // Count the number of SolvedCodeforces
     * const count = await prisma.solvedCodeforces.count({
     *   where: {
     *     // ... the filter for the SolvedCodeforces we want to count
     *   }
     * })
    **/
    count<T extends SolvedCodeforcesCountArgs>(
      args?: Subset<T, SolvedCodeforcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolvedCodeforcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolvedCodeforces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCodeforcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolvedCodeforcesAggregateArgs>(args: Subset<T, SolvedCodeforcesAggregateArgs>): Prisma.PrismaPromise<GetSolvedCodeforcesAggregateType<T>>

    /**
     * Group by SolvedCodeforces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCodeforcesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolvedCodeforcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolvedCodeforcesGroupByArgs['orderBy'] }
        : { orderBy?: SolvedCodeforcesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolvedCodeforcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolvedCodeforcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolvedCodeforces model
   */
  readonly fields: SolvedCodeforcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolvedCodeforces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolvedCodeforcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolvedCodeforces model
   */
  interface SolvedCodeforcesFieldRefs {
    readonly id: FieldRef<"SolvedCodeforces", 'Int'>
    readonly userId: FieldRef<"SolvedCodeforces", 'Int'>
    readonly problem_id: FieldRef<"SolvedCodeforces", 'String'>
    readonly title: FieldRef<"SolvedCodeforces", 'String'>
    readonly difficulty: FieldRef<"SolvedCodeforces", 'Int'>
    readonly tags: FieldRef<"SolvedCodeforces", 'String[]'>
    readonly solution: FieldRef<"SolvedCodeforces", 'String'>
    readonly language: FieldRef<"SolvedCodeforces", 'String'>
    readonly ai_analysis: FieldRef<"SolvedCodeforces", 'String'>
    readonly created_at: FieldRef<"SolvedCodeforces", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolvedCodeforces findUnique
   */
  export type SolvedCodeforcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * Filter, which SolvedCodeforces to fetch.
     */
    where: SolvedCodeforcesWhereUniqueInput
  }

  /**
   * SolvedCodeforces findUniqueOrThrow
   */
  export type SolvedCodeforcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * Filter, which SolvedCodeforces to fetch.
     */
    where: SolvedCodeforcesWhereUniqueInput
  }

  /**
   * SolvedCodeforces findFirst
   */
  export type SolvedCodeforcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * Filter, which SolvedCodeforces to fetch.
     */
    where?: SolvedCodeforcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedCodeforces to fetch.
     */
    orderBy?: SolvedCodeforcesOrderByWithRelationInput | SolvedCodeforcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedCodeforces.
     */
    cursor?: SolvedCodeforcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedCodeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedCodeforces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedCodeforces.
     */
    distinct?: SolvedCodeforcesScalarFieldEnum | SolvedCodeforcesScalarFieldEnum[]
  }

  /**
   * SolvedCodeforces findFirstOrThrow
   */
  export type SolvedCodeforcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * Filter, which SolvedCodeforces to fetch.
     */
    where?: SolvedCodeforcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedCodeforces to fetch.
     */
    orderBy?: SolvedCodeforcesOrderByWithRelationInput | SolvedCodeforcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedCodeforces.
     */
    cursor?: SolvedCodeforcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedCodeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedCodeforces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedCodeforces.
     */
    distinct?: SolvedCodeforcesScalarFieldEnum | SolvedCodeforcesScalarFieldEnum[]
  }

  /**
   * SolvedCodeforces findMany
   */
  export type SolvedCodeforcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * Filter, which SolvedCodeforces to fetch.
     */
    where?: SolvedCodeforcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedCodeforces to fetch.
     */
    orderBy?: SolvedCodeforcesOrderByWithRelationInput | SolvedCodeforcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolvedCodeforces.
     */
    cursor?: SolvedCodeforcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedCodeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedCodeforces.
     */
    skip?: number
    distinct?: SolvedCodeforcesScalarFieldEnum | SolvedCodeforcesScalarFieldEnum[]
  }

  /**
   * SolvedCodeforces create
   */
  export type SolvedCodeforcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * The data needed to create a SolvedCodeforces.
     */
    data: XOR<SolvedCodeforcesCreateInput, SolvedCodeforcesUncheckedCreateInput>
  }

  /**
   * SolvedCodeforces createMany
   */
  export type SolvedCodeforcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolvedCodeforces.
     */
    data: SolvedCodeforcesCreateManyInput | SolvedCodeforcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolvedCodeforces createManyAndReturn
   */
  export type SolvedCodeforcesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * The data used to create many SolvedCodeforces.
     */
    data: SolvedCodeforcesCreateManyInput | SolvedCodeforcesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolvedCodeforces update
   */
  export type SolvedCodeforcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * The data needed to update a SolvedCodeforces.
     */
    data: XOR<SolvedCodeforcesUpdateInput, SolvedCodeforcesUncheckedUpdateInput>
    /**
     * Choose, which SolvedCodeforces to update.
     */
    where: SolvedCodeforcesWhereUniqueInput
  }

  /**
   * SolvedCodeforces updateMany
   */
  export type SolvedCodeforcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolvedCodeforces.
     */
    data: XOR<SolvedCodeforcesUpdateManyMutationInput, SolvedCodeforcesUncheckedUpdateManyInput>
    /**
     * Filter which SolvedCodeforces to update
     */
    where?: SolvedCodeforcesWhereInput
    /**
     * Limit how many SolvedCodeforces to update.
     */
    limit?: number
  }

  /**
   * SolvedCodeforces updateManyAndReturn
   */
  export type SolvedCodeforcesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * The data used to update SolvedCodeforces.
     */
    data: XOR<SolvedCodeforcesUpdateManyMutationInput, SolvedCodeforcesUncheckedUpdateManyInput>
    /**
     * Filter which SolvedCodeforces to update
     */
    where?: SolvedCodeforcesWhereInput
    /**
     * Limit how many SolvedCodeforces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolvedCodeforces upsert
   */
  export type SolvedCodeforcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * The filter to search for the SolvedCodeforces to update in case it exists.
     */
    where: SolvedCodeforcesWhereUniqueInput
    /**
     * In case the SolvedCodeforces found by the `where` argument doesn't exist, create a new SolvedCodeforces with this data.
     */
    create: XOR<SolvedCodeforcesCreateInput, SolvedCodeforcesUncheckedCreateInput>
    /**
     * In case the SolvedCodeforces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolvedCodeforcesUpdateInput, SolvedCodeforcesUncheckedUpdateInput>
  }

  /**
   * SolvedCodeforces delete
   */
  export type SolvedCodeforcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
    /**
     * Filter which SolvedCodeforces to delete.
     */
    where: SolvedCodeforcesWhereUniqueInput
  }

  /**
   * SolvedCodeforces deleteMany
   */
  export type SolvedCodeforcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedCodeforces to delete
     */
    where?: SolvedCodeforcesWhereInput
    /**
     * Limit how many SolvedCodeforces to delete.
     */
    limit?: number
  }

  /**
   * SolvedCodeforces without action
   */
  export type SolvedCodeforcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedCodeforces
     */
    select?: SolvedCodeforcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedCodeforces
     */
    omit?: SolvedCodeforcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedCodeforcesInclude<ExtArgs> | null
  }


  /**
   * Model CtfWriteup
   */

  export type AggregateCtfWriteup = {
    _count: CtfWriteupCountAggregateOutputType | null
    _avg: CtfWriteupAvgAggregateOutputType | null
    _sum: CtfWriteupSumAggregateOutputType | null
    _min: CtfWriteupMinAggregateOutputType | null
    _max: CtfWriteupMaxAggregateOutputType | null
  }

  export type CtfWriteupAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CtfWriteupSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CtfWriteupMinAggregateOutputType = {
    id: number | null
    userId: number | null
    challenge: string | null
    category: $Enums.CtfCategory | null
    is_public: boolean | null
    created_at: Date | null
  }

  export type CtfWriteupMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    challenge: string | null
    category: $Enums.CtfCategory | null
    is_public: boolean | null
    created_at: Date | null
  }

  export type CtfWriteupCountAggregateOutputType = {
    id: number
    userId: number
    challenge: number
    category: number
    is_public: number
    created_at: number
    _all: number
  }


  export type CtfWriteupAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CtfWriteupSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CtfWriteupMinAggregateInputType = {
    id?: true
    userId?: true
    challenge?: true
    category?: true
    is_public?: true
    created_at?: true
  }

  export type CtfWriteupMaxAggregateInputType = {
    id?: true
    userId?: true
    challenge?: true
    category?: true
    is_public?: true
    created_at?: true
  }

  export type CtfWriteupCountAggregateInputType = {
    id?: true
    userId?: true
    challenge?: true
    category?: true
    is_public?: true
    created_at?: true
    _all?: true
  }

  export type CtfWriteupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CtfWriteup to aggregate.
     */
    where?: CtfWriteupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfWriteups to fetch.
     */
    orderBy?: CtfWriteupOrderByWithRelationInput | CtfWriteupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CtfWriteupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfWriteups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfWriteups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CtfWriteups
    **/
    _count?: true | CtfWriteupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CtfWriteupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CtfWriteupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CtfWriteupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CtfWriteupMaxAggregateInputType
  }

  export type GetCtfWriteupAggregateType<T extends CtfWriteupAggregateArgs> = {
        [P in keyof T & keyof AggregateCtfWriteup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCtfWriteup[P]>
      : GetScalarType<T[P], AggregateCtfWriteup[P]>
  }




  export type CtfWriteupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CtfWriteupWhereInput
    orderBy?: CtfWriteupOrderByWithAggregationInput | CtfWriteupOrderByWithAggregationInput[]
    by: CtfWriteupScalarFieldEnum[] | CtfWriteupScalarFieldEnum
    having?: CtfWriteupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CtfWriteupCountAggregateInputType | true
    _avg?: CtfWriteupAvgAggregateInputType
    _sum?: CtfWriteupSumAggregateInputType
    _min?: CtfWriteupMinAggregateInputType
    _max?: CtfWriteupMaxAggregateInputType
  }

  export type CtfWriteupGroupByOutputType = {
    id: number
    userId: number
    challenge: string
    category: $Enums.CtfCategory
    is_public: boolean
    created_at: Date
    _count: CtfWriteupCountAggregateOutputType | null
    _avg: CtfWriteupAvgAggregateOutputType | null
    _sum: CtfWriteupSumAggregateOutputType | null
    _min: CtfWriteupMinAggregateOutputType | null
    _max: CtfWriteupMaxAggregateOutputType | null
  }

  type GetCtfWriteupGroupByPayload<T extends CtfWriteupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CtfWriteupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CtfWriteupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CtfWriteupGroupByOutputType[P]>
            : GetScalarType<T[P], CtfWriteupGroupByOutputType[P]>
        }
      >
    >


  export type CtfWriteupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challenge?: boolean
    category?: boolean
    is_public?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfWriteup"]>

  export type CtfWriteupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challenge?: boolean
    category?: boolean
    is_public?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfWriteup"]>

  export type CtfWriteupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challenge?: boolean
    category?: boolean
    is_public?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ctfWriteup"]>

  export type CtfWriteupSelectScalar = {
    id?: boolean
    userId?: boolean
    challenge?: boolean
    category?: boolean
    is_public?: boolean
    created_at?: boolean
  }

  export type CtfWriteupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "challenge" | "category" | "is_public" | "created_at", ExtArgs["result"]["ctfWriteup"]>
  export type CtfWriteupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CtfWriteupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CtfWriteupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CtfWriteupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CtfWriteup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      challenge: string
      category: $Enums.CtfCategory
      is_public: boolean
      created_at: Date
    }, ExtArgs["result"]["ctfWriteup"]>
    composites: {}
  }

  type CtfWriteupGetPayload<S extends boolean | null | undefined | CtfWriteupDefaultArgs> = $Result.GetResult<Prisma.$CtfWriteupPayload, S>

  type CtfWriteupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CtfWriteupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CtfWriteupCountAggregateInputType | true
    }

  export interface CtfWriteupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CtfWriteup'], meta: { name: 'CtfWriteup' } }
    /**
     * Find zero or one CtfWriteup that matches the filter.
     * @param {CtfWriteupFindUniqueArgs} args - Arguments to find a CtfWriteup
     * @example
     * // Get one CtfWriteup
     * const ctfWriteup = await prisma.ctfWriteup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CtfWriteupFindUniqueArgs>(args: SelectSubset<T, CtfWriteupFindUniqueArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CtfWriteup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CtfWriteupFindUniqueOrThrowArgs} args - Arguments to find a CtfWriteup
     * @example
     * // Get one CtfWriteup
     * const ctfWriteup = await prisma.ctfWriteup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CtfWriteupFindUniqueOrThrowArgs>(args: SelectSubset<T, CtfWriteupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfWriteup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfWriteupFindFirstArgs} args - Arguments to find a CtfWriteup
     * @example
     * // Get one CtfWriteup
     * const ctfWriteup = await prisma.ctfWriteup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CtfWriteupFindFirstArgs>(args?: SelectSubset<T, CtfWriteupFindFirstArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CtfWriteup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfWriteupFindFirstOrThrowArgs} args - Arguments to find a CtfWriteup
     * @example
     * // Get one CtfWriteup
     * const ctfWriteup = await prisma.ctfWriteup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CtfWriteupFindFirstOrThrowArgs>(args?: SelectSubset<T, CtfWriteupFindFirstOrThrowArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CtfWriteups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfWriteupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CtfWriteups
     * const ctfWriteups = await prisma.ctfWriteup.findMany()
     * 
     * // Get first 10 CtfWriteups
     * const ctfWriteups = await prisma.ctfWriteup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ctfWriteupWithIdOnly = await prisma.ctfWriteup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CtfWriteupFindManyArgs>(args?: SelectSubset<T, CtfWriteupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CtfWriteup.
     * @param {CtfWriteupCreateArgs} args - Arguments to create a CtfWriteup.
     * @example
     * // Create one CtfWriteup
     * const CtfWriteup = await prisma.ctfWriteup.create({
     *   data: {
     *     // ... data to create a CtfWriteup
     *   }
     * })
     * 
     */
    create<T extends CtfWriteupCreateArgs>(args: SelectSubset<T, CtfWriteupCreateArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CtfWriteups.
     * @param {CtfWriteupCreateManyArgs} args - Arguments to create many CtfWriteups.
     * @example
     * // Create many CtfWriteups
     * const ctfWriteup = await prisma.ctfWriteup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CtfWriteupCreateManyArgs>(args?: SelectSubset<T, CtfWriteupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CtfWriteups and returns the data saved in the database.
     * @param {CtfWriteupCreateManyAndReturnArgs} args - Arguments to create many CtfWriteups.
     * @example
     * // Create many CtfWriteups
     * const ctfWriteup = await prisma.ctfWriteup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CtfWriteups and only return the `id`
     * const ctfWriteupWithIdOnly = await prisma.ctfWriteup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CtfWriteupCreateManyAndReturnArgs>(args?: SelectSubset<T, CtfWriteupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CtfWriteup.
     * @param {CtfWriteupDeleteArgs} args - Arguments to delete one CtfWriteup.
     * @example
     * // Delete one CtfWriteup
     * const CtfWriteup = await prisma.ctfWriteup.delete({
     *   where: {
     *     // ... filter to delete one CtfWriteup
     *   }
     * })
     * 
     */
    delete<T extends CtfWriteupDeleteArgs>(args: SelectSubset<T, CtfWriteupDeleteArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CtfWriteup.
     * @param {CtfWriteupUpdateArgs} args - Arguments to update one CtfWriteup.
     * @example
     * // Update one CtfWriteup
     * const ctfWriteup = await prisma.ctfWriteup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CtfWriteupUpdateArgs>(args: SelectSubset<T, CtfWriteupUpdateArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CtfWriteups.
     * @param {CtfWriteupDeleteManyArgs} args - Arguments to filter CtfWriteups to delete.
     * @example
     * // Delete a few CtfWriteups
     * const { count } = await prisma.ctfWriteup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CtfWriteupDeleteManyArgs>(args?: SelectSubset<T, CtfWriteupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfWriteups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfWriteupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CtfWriteups
     * const ctfWriteup = await prisma.ctfWriteup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CtfWriteupUpdateManyArgs>(args: SelectSubset<T, CtfWriteupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CtfWriteups and returns the data updated in the database.
     * @param {CtfWriteupUpdateManyAndReturnArgs} args - Arguments to update many CtfWriteups.
     * @example
     * // Update many CtfWriteups
     * const ctfWriteup = await prisma.ctfWriteup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CtfWriteups and only return the `id`
     * const ctfWriteupWithIdOnly = await prisma.ctfWriteup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CtfWriteupUpdateManyAndReturnArgs>(args: SelectSubset<T, CtfWriteupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CtfWriteup.
     * @param {CtfWriteupUpsertArgs} args - Arguments to update or create a CtfWriteup.
     * @example
     * // Update or create a CtfWriteup
     * const ctfWriteup = await prisma.ctfWriteup.upsert({
     *   create: {
     *     // ... data to create a CtfWriteup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CtfWriteup we want to update
     *   }
     * })
     */
    upsert<T extends CtfWriteupUpsertArgs>(args: SelectSubset<T, CtfWriteupUpsertArgs<ExtArgs>>): Prisma__CtfWriteupClient<$Result.GetResult<Prisma.$CtfWriteupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CtfWriteups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfWriteupCountArgs} args - Arguments to filter CtfWriteups to count.
     * @example
     * // Count the number of CtfWriteups
     * const count = await prisma.ctfWriteup.count({
     *   where: {
     *     // ... the filter for the CtfWriteups we want to count
     *   }
     * })
    **/
    count<T extends CtfWriteupCountArgs>(
      args?: Subset<T, CtfWriteupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CtfWriteupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CtfWriteup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfWriteupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CtfWriteupAggregateArgs>(args: Subset<T, CtfWriteupAggregateArgs>): Prisma.PrismaPromise<GetCtfWriteupAggregateType<T>>

    /**
     * Group by CtfWriteup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtfWriteupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CtfWriteupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CtfWriteupGroupByArgs['orderBy'] }
        : { orderBy?: CtfWriteupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CtfWriteupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCtfWriteupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CtfWriteup model
   */
  readonly fields: CtfWriteupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CtfWriteup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CtfWriteupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CtfWriteup model
   */
  interface CtfWriteupFieldRefs {
    readonly id: FieldRef<"CtfWriteup", 'Int'>
    readonly userId: FieldRef<"CtfWriteup", 'Int'>
    readonly challenge: FieldRef<"CtfWriteup", 'String'>
    readonly category: FieldRef<"CtfWriteup", 'CtfCategory'>
    readonly is_public: FieldRef<"CtfWriteup", 'Boolean'>
    readonly created_at: FieldRef<"CtfWriteup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CtfWriteup findUnique
   */
  export type CtfWriteupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * Filter, which CtfWriteup to fetch.
     */
    where: CtfWriteupWhereUniqueInput
  }

  /**
   * CtfWriteup findUniqueOrThrow
   */
  export type CtfWriteupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * Filter, which CtfWriteup to fetch.
     */
    where: CtfWriteupWhereUniqueInput
  }

  /**
   * CtfWriteup findFirst
   */
  export type CtfWriteupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * Filter, which CtfWriteup to fetch.
     */
    where?: CtfWriteupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfWriteups to fetch.
     */
    orderBy?: CtfWriteupOrderByWithRelationInput | CtfWriteupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CtfWriteups.
     */
    cursor?: CtfWriteupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfWriteups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfWriteups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CtfWriteups.
     */
    distinct?: CtfWriteupScalarFieldEnum | CtfWriteupScalarFieldEnum[]
  }

  /**
   * CtfWriteup findFirstOrThrow
   */
  export type CtfWriteupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * Filter, which CtfWriteup to fetch.
     */
    where?: CtfWriteupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfWriteups to fetch.
     */
    orderBy?: CtfWriteupOrderByWithRelationInput | CtfWriteupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CtfWriteups.
     */
    cursor?: CtfWriteupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfWriteups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfWriteups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CtfWriteups.
     */
    distinct?: CtfWriteupScalarFieldEnum | CtfWriteupScalarFieldEnum[]
  }

  /**
   * CtfWriteup findMany
   */
  export type CtfWriteupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * Filter, which CtfWriteups to fetch.
     */
    where?: CtfWriteupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CtfWriteups to fetch.
     */
    orderBy?: CtfWriteupOrderByWithRelationInput | CtfWriteupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CtfWriteups.
     */
    cursor?: CtfWriteupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CtfWriteups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CtfWriteups.
     */
    skip?: number
    distinct?: CtfWriteupScalarFieldEnum | CtfWriteupScalarFieldEnum[]
  }

  /**
   * CtfWriteup create
   */
  export type CtfWriteupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * The data needed to create a CtfWriteup.
     */
    data: XOR<CtfWriteupCreateInput, CtfWriteupUncheckedCreateInput>
  }

  /**
   * CtfWriteup createMany
   */
  export type CtfWriteupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CtfWriteups.
     */
    data: CtfWriteupCreateManyInput | CtfWriteupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CtfWriteup createManyAndReturn
   */
  export type CtfWriteupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * The data used to create many CtfWriteups.
     */
    data: CtfWriteupCreateManyInput | CtfWriteupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CtfWriteup update
   */
  export type CtfWriteupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * The data needed to update a CtfWriteup.
     */
    data: XOR<CtfWriteupUpdateInput, CtfWriteupUncheckedUpdateInput>
    /**
     * Choose, which CtfWriteup to update.
     */
    where: CtfWriteupWhereUniqueInput
  }

  /**
   * CtfWriteup updateMany
   */
  export type CtfWriteupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CtfWriteups.
     */
    data: XOR<CtfWriteupUpdateManyMutationInput, CtfWriteupUncheckedUpdateManyInput>
    /**
     * Filter which CtfWriteups to update
     */
    where?: CtfWriteupWhereInput
    /**
     * Limit how many CtfWriteups to update.
     */
    limit?: number
  }

  /**
   * CtfWriteup updateManyAndReturn
   */
  export type CtfWriteupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * The data used to update CtfWriteups.
     */
    data: XOR<CtfWriteupUpdateManyMutationInput, CtfWriteupUncheckedUpdateManyInput>
    /**
     * Filter which CtfWriteups to update
     */
    where?: CtfWriteupWhereInput
    /**
     * Limit how many CtfWriteups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CtfWriteup upsert
   */
  export type CtfWriteupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * The filter to search for the CtfWriteup to update in case it exists.
     */
    where: CtfWriteupWhereUniqueInput
    /**
     * In case the CtfWriteup found by the `where` argument doesn't exist, create a new CtfWriteup with this data.
     */
    create: XOR<CtfWriteupCreateInput, CtfWriteupUncheckedCreateInput>
    /**
     * In case the CtfWriteup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CtfWriteupUpdateInput, CtfWriteupUncheckedUpdateInput>
  }

  /**
   * CtfWriteup delete
   */
  export type CtfWriteupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
    /**
     * Filter which CtfWriteup to delete.
     */
    where: CtfWriteupWhereUniqueInput
  }

  /**
   * CtfWriteup deleteMany
   */
  export type CtfWriteupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CtfWriteups to delete
     */
    where?: CtfWriteupWhereInput
    /**
     * Limit how many CtfWriteups to delete.
     */
    limit?: number
  }

  /**
   * CtfWriteup without action
   */
  export type CtfWriteupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CtfWriteup
     */
    select?: CtfWriteupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CtfWriteup
     */
    omit?: CtfWriteupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CtfWriteupInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    github_id: 'github_id',
    username: 'username',
    email: 'email',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SolvedLeetcodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problem_id: 'problem_id',
    title: 'title',
    difficulty: 'difficulty',
    tags: 'tags',
    solution: 'solution',
    ai_analysis: 'ai_analysis',
    created_at: 'created_at'
  };

  export type SolvedLeetcodeScalarFieldEnum = (typeof SolvedLeetcodeScalarFieldEnum)[keyof typeof SolvedLeetcodeScalarFieldEnum]


  export const SolvedCodeforcesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problem_id: 'problem_id',
    title: 'title',
    difficulty: 'difficulty',
    tags: 'tags',
    solution: 'solution',
    language: 'language',
    ai_analysis: 'ai_analysis',
    created_at: 'created_at'
  };

  export type SolvedCodeforcesScalarFieldEnum = (typeof SolvedCodeforcesScalarFieldEnum)[keyof typeof SolvedCodeforcesScalarFieldEnum]


  export const CtfWriteupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challenge: 'challenge',
    category: 'category',
    is_public: 'is_public',
    created_at: 'created_at'
  };

  export type CtfWriteupScalarFieldEnum = (typeof CtfWriteupScalarFieldEnum)[keyof typeof CtfWriteupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CtfCategory'
   */
  export type EnumCtfCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CtfCategory'>
    


  /**
   * Reference to a field of type 'CtfCategory[]'
   */
  export type ListEnumCtfCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CtfCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    github_id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    solved_leetcode?: SolvedLeetcodeListRelationFilter
    solved_codeforces?: SolvedCodeforcesListRelationFilter
    ctf_writeups?: CtfWriteupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    github_id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    solved_leetcode?: SolvedLeetcodeOrderByRelationAggregateInput
    solved_codeforces?: SolvedCodeforcesOrderByRelationAggregateInput
    ctf_writeups?: CtfWriteupOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    github_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    solved_leetcode?: SolvedLeetcodeListRelationFilter
    solved_codeforces?: SolvedCodeforcesListRelationFilter
    ctf_writeups?: CtfWriteupListRelationFilter
  }, "id" | "github_id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    github_id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    github_id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SolvedLeetcodeWhereInput = {
    AND?: SolvedLeetcodeWhereInput | SolvedLeetcodeWhereInput[]
    OR?: SolvedLeetcodeWhereInput[]
    NOT?: SolvedLeetcodeWhereInput | SolvedLeetcodeWhereInput[]
    id?: IntFilter<"SolvedLeetcode"> | number
    userId?: IntFilter<"SolvedLeetcode"> | number
    problem_id?: StringFilter<"SolvedLeetcode"> | string
    title?: StringFilter<"SolvedLeetcode"> | string
    difficulty?: StringFilter<"SolvedLeetcode"> | string
    tags?: StringNullableListFilter<"SolvedLeetcode">
    solution?: StringNullableFilter<"SolvedLeetcode"> | string | null
    ai_analysis?: StringNullableFilter<"SolvedLeetcode"> | string | null
    created_at?: DateTimeFilter<"SolvedLeetcode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SolvedLeetcodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    solution?: SortOrderInput | SortOrder
    ai_analysis?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SolvedLeetcodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolvedLeetcodeWhereInput | SolvedLeetcodeWhereInput[]
    OR?: SolvedLeetcodeWhereInput[]
    NOT?: SolvedLeetcodeWhereInput | SolvedLeetcodeWhereInput[]
    userId?: IntFilter<"SolvedLeetcode"> | number
    problem_id?: StringFilter<"SolvedLeetcode"> | string
    title?: StringFilter<"SolvedLeetcode"> | string
    difficulty?: StringFilter<"SolvedLeetcode"> | string
    tags?: StringNullableListFilter<"SolvedLeetcode">
    solution?: StringNullableFilter<"SolvedLeetcode"> | string | null
    ai_analysis?: StringNullableFilter<"SolvedLeetcode"> | string | null
    created_at?: DateTimeFilter<"SolvedLeetcode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SolvedLeetcodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    solution?: SortOrderInput | SortOrder
    ai_analysis?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: SolvedLeetcodeCountOrderByAggregateInput
    _avg?: SolvedLeetcodeAvgOrderByAggregateInput
    _max?: SolvedLeetcodeMaxOrderByAggregateInput
    _min?: SolvedLeetcodeMinOrderByAggregateInput
    _sum?: SolvedLeetcodeSumOrderByAggregateInput
  }

  export type SolvedLeetcodeScalarWhereWithAggregatesInput = {
    AND?: SolvedLeetcodeScalarWhereWithAggregatesInput | SolvedLeetcodeScalarWhereWithAggregatesInput[]
    OR?: SolvedLeetcodeScalarWhereWithAggregatesInput[]
    NOT?: SolvedLeetcodeScalarWhereWithAggregatesInput | SolvedLeetcodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SolvedLeetcode"> | number
    userId?: IntWithAggregatesFilter<"SolvedLeetcode"> | number
    problem_id?: StringWithAggregatesFilter<"SolvedLeetcode"> | string
    title?: StringWithAggregatesFilter<"SolvedLeetcode"> | string
    difficulty?: StringWithAggregatesFilter<"SolvedLeetcode"> | string
    tags?: StringNullableListFilter<"SolvedLeetcode">
    solution?: StringNullableWithAggregatesFilter<"SolvedLeetcode"> | string | null
    ai_analysis?: StringNullableWithAggregatesFilter<"SolvedLeetcode"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SolvedLeetcode"> | Date | string
  }

  export type SolvedCodeforcesWhereInput = {
    AND?: SolvedCodeforcesWhereInput | SolvedCodeforcesWhereInput[]
    OR?: SolvedCodeforcesWhereInput[]
    NOT?: SolvedCodeforcesWhereInput | SolvedCodeforcesWhereInput[]
    id?: IntFilter<"SolvedCodeforces"> | number
    userId?: IntFilter<"SolvedCodeforces"> | number
    problem_id?: StringFilter<"SolvedCodeforces"> | string
    title?: StringFilter<"SolvedCodeforces"> | string
    difficulty?: IntFilter<"SolvedCodeforces"> | number
    tags?: StringNullableListFilter<"SolvedCodeforces">
    solution?: StringNullableFilter<"SolvedCodeforces"> | string | null
    language?: StringNullableFilter<"SolvedCodeforces"> | string | null
    ai_analysis?: StringNullableFilter<"SolvedCodeforces"> | string | null
    created_at?: DateTimeFilter<"SolvedCodeforces"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SolvedCodeforcesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    solution?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    ai_analysis?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SolvedCodeforcesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolvedCodeforcesWhereInput | SolvedCodeforcesWhereInput[]
    OR?: SolvedCodeforcesWhereInput[]
    NOT?: SolvedCodeforcesWhereInput | SolvedCodeforcesWhereInput[]
    userId?: IntFilter<"SolvedCodeforces"> | number
    problem_id?: StringFilter<"SolvedCodeforces"> | string
    title?: StringFilter<"SolvedCodeforces"> | string
    difficulty?: IntFilter<"SolvedCodeforces"> | number
    tags?: StringNullableListFilter<"SolvedCodeforces">
    solution?: StringNullableFilter<"SolvedCodeforces"> | string | null
    language?: StringNullableFilter<"SolvedCodeforces"> | string | null
    ai_analysis?: StringNullableFilter<"SolvedCodeforces"> | string | null
    created_at?: DateTimeFilter<"SolvedCodeforces"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SolvedCodeforcesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    solution?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    ai_analysis?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: SolvedCodeforcesCountOrderByAggregateInput
    _avg?: SolvedCodeforcesAvgOrderByAggregateInput
    _max?: SolvedCodeforcesMaxOrderByAggregateInput
    _min?: SolvedCodeforcesMinOrderByAggregateInput
    _sum?: SolvedCodeforcesSumOrderByAggregateInput
  }

  export type SolvedCodeforcesScalarWhereWithAggregatesInput = {
    AND?: SolvedCodeforcesScalarWhereWithAggregatesInput | SolvedCodeforcesScalarWhereWithAggregatesInput[]
    OR?: SolvedCodeforcesScalarWhereWithAggregatesInput[]
    NOT?: SolvedCodeforcesScalarWhereWithAggregatesInput | SolvedCodeforcesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SolvedCodeforces"> | number
    userId?: IntWithAggregatesFilter<"SolvedCodeforces"> | number
    problem_id?: StringWithAggregatesFilter<"SolvedCodeforces"> | string
    title?: StringWithAggregatesFilter<"SolvedCodeforces"> | string
    difficulty?: IntWithAggregatesFilter<"SolvedCodeforces"> | number
    tags?: StringNullableListFilter<"SolvedCodeforces">
    solution?: StringNullableWithAggregatesFilter<"SolvedCodeforces"> | string | null
    language?: StringNullableWithAggregatesFilter<"SolvedCodeforces"> | string | null
    ai_analysis?: StringNullableWithAggregatesFilter<"SolvedCodeforces"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SolvedCodeforces"> | Date | string
  }

  export type CtfWriteupWhereInput = {
    AND?: CtfWriteupWhereInput | CtfWriteupWhereInput[]
    OR?: CtfWriteupWhereInput[]
    NOT?: CtfWriteupWhereInput | CtfWriteupWhereInput[]
    id?: IntFilter<"CtfWriteup"> | number
    userId?: IntFilter<"CtfWriteup"> | number
    challenge?: StringFilter<"CtfWriteup"> | string
    category?: EnumCtfCategoryFilter<"CtfWriteup"> | $Enums.CtfCategory
    is_public?: BoolFilter<"CtfWriteup"> | boolean
    created_at?: DateTimeFilter<"CtfWriteup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CtfWriteupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challenge?: SortOrder
    category?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CtfWriteupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CtfWriteupWhereInput | CtfWriteupWhereInput[]
    OR?: CtfWriteupWhereInput[]
    NOT?: CtfWriteupWhereInput | CtfWriteupWhereInput[]
    userId?: IntFilter<"CtfWriteup"> | number
    challenge?: StringFilter<"CtfWriteup"> | string
    category?: EnumCtfCategoryFilter<"CtfWriteup"> | $Enums.CtfCategory
    is_public?: BoolFilter<"CtfWriteup"> | boolean
    created_at?: DateTimeFilter<"CtfWriteup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CtfWriteupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challenge?: SortOrder
    category?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    _count?: CtfWriteupCountOrderByAggregateInput
    _avg?: CtfWriteupAvgOrderByAggregateInput
    _max?: CtfWriteupMaxOrderByAggregateInput
    _min?: CtfWriteupMinOrderByAggregateInput
    _sum?: CtfWriteupSumOrderByAggregateInput
  }

  export type CtfWriteupScalarWhereWithAggregatesInput = {
    AND?: CtfWriteupScalarWhereWithAggregatesInput | CtfWriteupScalarWhereWithAggregatesInput[]
    OR?: CtfWriteupScalarWhereWithAggregatesInput[]
    NOT?: CtfWriteupScalarWhereWithAggregatesInput | CtfWriteupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CtfWriteup"> | number
    userId?: IntWithAggregatesFilter<"CtfWriteup"> | number
    challenge?: StringWithAggregatesFilter<"CtfWriteup"> | string
    category?: EnumCtfCategoryWithAggregatesFilter<"CtfWriteup"> | $Enums.CtfCategory
    is_public?: BoolWithAggregatesFilter<"CtfWriteup"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"CtfWriteup"> | Date | string
  }

  export type UserCreateInput = {
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_leetcode?: SolvedLeetcodeCreateNestedManyWithoutUserInput
    solved_codeforces?: SolvedCodeforcesCreateNestedManyWithoutUserInput
    ctf_writeups?: CtfWriteupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_leetcode?: SolvedLeetcodeUncheckedCreateNestedManyWithoutUserInput
    solved_codeforces?: SolvedCodeforcesUncheckedCreateNestedManyWithoutUserInput
    ctf_writeups?: CtfWriteupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_leetcode?: SolvedLeetcodeUpdateManyWithoutUserNestedInput
    solved_codeforces?: SolvedCodeforcesUpdateManyWithoutUserNestedInput
    ctf_writeups?: CtfWriteupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_leetcode?: SolvedLeetcodeUncheckedUpdateManyWithoutUserNestedInput
    solved_codeforces?: SolvedCodeforcesUncheckedUpdateManyWithoutUserNestedInput
    ctf_writeups?: CtfWriteupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedLeetcodeCreateInput = {
    problem_id: string
    title: string
    difficulty: string
    tags?: SolvedLeetcodeCreatetagsInput | string[]
    solution?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSolved_leetcodeInput
  }

  export type SolvedLeetcodeUncheckedCreateInput = {
    id?: number
    userId: number
    problem_id: string
    title: string
    difficulty: string
    tags?: SolvedLeetcodeCreatetagsInput | string[]
    solution?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedLeetcodeUpdateInput = {
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    tags?: SolvedLeetcodeUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolved_leetcodeNestedInput
  }

  export type SolvedLeetcodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    tags?: SolvedLeetcodeUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedLeetcodeCreateManyInput = {
    id?: number
    userId: number
    problem_id: string
    title: string
    difficulty: string
    tags?: SolvedLeetcodeCreatetagsInput | string[]
    solution?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedLeetcodeUpdateManyMutationInput = {
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    tags?: SolvedLeetcodeUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedLeetcodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    tags?: SolvedLeetcodeUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCodeforcesCreateInput = {
    problem_id: string
    title: string
    difficulty: number
    tags?: SolvedCodeforcesCreatetagsInput | string[]
    solution?: string | null
    language?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSolved_codeforcesInput
  }

  export type SolvedCodeforcesUncheckedCreateInput = {
    id?: number
    userId: number
    problem_id: string
    title: string
    difficulty: number
    tags?: SolvedCodeforcesCreatetagsInput | string[]
    solution?: string | null
    language?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedCodeforcesUpdateInput = {
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    tags?: SolvedCodeforcesUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolved_codeforcesNestedInput
  }

  export type SolvedCodeforcesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    tags?: SolvedCodeforcesUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCodeforcesCreateManyInput = {
    id?: number
    userId: number
    problem_id: string
    title: string
    difficulty: number
    tags?: SolvedCodeforcesCreatetagsInput | string[]
    solution?: string | null
    language?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedCodeforcesUpdateManyMutationInput = {
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    tags?: SolvedCodeforcesUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCodeforcesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    tags?: SolvedCodeforcesUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtfWriteupCreateInput = {
    challenge: string
    category: $Enums.CtfCategory
    is_public?: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCtf_writeupsInput
  }

  export type CtfWriteupUncheckedCreateInput = {
    id?: number
    userId: number
    challenge: string
    category: $Enums.CtfCategory
    is_public?: boolean
    created_at?: Date | string
  }

  export type CtfWriteupUpdateInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    category?: EnumCtfCategoryFieldUpdateOperationsInput | $Enums.CtfCategory
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCtf_writeupsNestedInput
  }

  export type CtfWriteupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    category?: EnumCtfCategoryFieldUpdateOperationsInput | $Enums.CtfCategory
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtfWriteupCreateManyInput = {
    id?: number
    userId: number
    challenge: string
    category: $Enums.CtfCategory
    is_public?: boolean
    created_at?: Date | string
  }

  export type CtfWriteupUpdateManyMutationInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    category?: EnumCtfCategoryFieldUpdateOperationsInput | $Enums.CtfCategory
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtfWriteupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    category?: EnumCtfCategoryFieldUpdateOperationsInput | $Enums.CtfCategory
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SolvedLeetcodeListRelationFilter = {
    every?: SolvedLeetcodeWhereInput
    some?: SolvedLeetcodeWhereInput
    none?: SolvedLeetcodeWhereInput
  }

  export type SolvedCodeforcesListRelationFilter = {
    every?: SolvedCodeforcesWhereInput
    some?: SolvedCodeforcesWhereInput
    none?: SolvedCodeforcesWhereInput
  }

  export type CtfWriteupListRelationFilter = {
    every?: CtfWriteupWhereInput
    some?: CtfWriteupWhereInput
    none?: CtfWriteupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SolvedLeetcodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolvedCodeforcesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CtfWriteupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    github_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    github_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    github_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SolvedLeetcodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    solution?: SortOrder
    ai_analysis?: SortOrder
    created_at?: SortOrder
  }

  export type SolvedLeetcodeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SolvedLeetcodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    solution?: SortOrder
    ai_analysis?: SortOrder
    created_at?: SortOrder
  }

  export type SolvedLeetcodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    solution?: SortOrder
    ai_analysis?: SortOrder
    created_at?: SortOrder
  }

  export type SolvedLeetcodeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SolvedCodeforcesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    solution?: SortOrder
    language?: SortOrder
    ai_analysis?: SortOrder
    created_at?: SortOrder
  }

  export type SolvedCodeforcesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
  }

  export type SolvedCodeforcesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    solution?: SortOrder
    language?: SortOrder
    ai_analysis?: SortOrder
    created_at?: SortOrder
  }

  export type SolvedCodeforcesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problem_id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    solution?: SortOrder
    language?: SortOrder
    ai_analysis?: SortOrder
    created_at?: SortOrder
  }

  export type SolvedCodeforcesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
  }

  export type EnumCtfCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CtfCategory | EnumCtfCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCtfCategoryFilter<$PrismaModel> | $Enums.CtfCategory
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CtfWriteupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challenge?: SortOrder
    category?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
  }

  export type CtfWriteupAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CtfWriteupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challenge?: SortOrder
    category?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
  }

  export type CtfWriteupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challenge?: SortOrder
    category?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
  }

  export type CtfWriteupSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumCtfCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtfCategory | EnumCtfCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCtfCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CtfCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtfCategoryFilter<$PrismaModel>
    _max?: NestedEnumCtfCategoryFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SolvedLeetcodeCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedLeetcodeCreateWithoutUserInput, SolvedLeetcodeUncheckedCreateWithoutUserInput> | SolvedLeetcodeCreateWithoutUserInput[] | SolvedLeetcodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedLeetcodeCreateOrConnectWithoutUserInput | SolvedLeetcodeCreateOrConnectWithoutUserInput[]
    createMany?: SolvedLeetcodeCreateManyUserInputEnvelope
    connect?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
  }

  export type SolvedCodeforcesCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedCodeforcesCreateWithoutUserInput, SolvedCodeforcesUncheckedCreateWithoutUserInput> | SolvedCodeforcesCreateWithoutUserInput[] | SolvedCodeforcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCodeforcesCreateOrConnectWithoutUserInput | SolvedCodeforcesCreateOrConnectWithoutUserInput[]
    createMany?: SolvedCodeforcesCreateManyUserInputEnvelope
    connect?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
  }

  export type CtfWriteupCreateNestedManyWithoutUserInput = {
    create?: XOR<CtfWriteupCreateWithoutUserInput, CtfWriteupUncheckedCreateWithoutUserInput> | CtfWriteupCreateWithoutUserInput[] | CtfWriteupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfWriteupCreateOrConnectWithoutUserInput | CtfWriteupCreateOrConnectWithoutUserInput[]
    createMany?: CtfWriteupCreateManyUserInputEnvelope
    connect?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
  }

  export type SolvedLeetcodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedLeetcodeCreateWithoutUserInput, SolvedLeetcodeUncheckedCreateWithoutUserInput> | SolvedLeetcodeCreateWithoutUserInput[] | SolvedLeetcodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedLeetcodeCreateOrConnectWithoutUserInput | SolvedLeetcodeCreateOrConnectWithoutUserInput[]
    createMany?: SolvedLeetcodeCreateManyUserInputEnvelope
    connect?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
  }

  export type SolvedCodeforcesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedCodeforcesCreateWithoutUserInput, SolvedCodeforcesUncheckedCreateWithoutUserInput> | SolvedCodeforcesCreateWithoutUserInput[] | SolvedCodeforcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCodeforcesCreateOrConnectWithoutUserInput | SolvedCodeforcesCreateOrConnectWithoutUserInput[]
    createMany?: SolvedCodeforcesCreateManyUserInputEnvelope
    connect?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
  }

  export type CtfWriteupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CtfWriteupCreateWithoutUserInput, CtfWriteupUncheckedCreateWithoutUserInput> | CtfWriteupCreateWithoutUserInput[] | CtfWriteupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfWriteupCreateOrConnectWithoutUserInput | CtfWriteupCreateOrConnectWithoutUserInput[]
    createMany?: CtfWriteupCreateManyUserInputEnvelope
    connect?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SolvedLeetcodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedLeetcodeCreateWithoutUserInput, SolvedLeetcodeUncheckedCreateWithoutUserInput> | SolvedLeetcodeCreateWithoutUserInput[] | SolvedLeetcodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedLeetcodeCreateOrConnectWithoutUserInput | SolvedLeetcodeCreateOrConnectWithoutUserInput[]
    upsert?: SolvedLeetcodeUpsertWithWhereUniqueWithoutUserInput | SolvedLeetcodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedLeetcodeCreateManyUserInputEnvelope
    set?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    disconnect?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    delete?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    connect?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    update?: SolvedLeetcodeUpdateWithWhereUniqueWithoutUserInput | SolvedLeetcodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedLeetcodeUpdateManyWithWhereWithoutUserInput | SolvedLeetcodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedLeetcodeScalarWhereInput | SolvedLeetcodeScalarWhereInput[]
  }

  export type SolvedCodeforcesUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedCodeforcesCreateWithoutUserInput, SolvedCodeforcesUncheckedCreateWithoutUserInput> | SolvedCodeforcesCreateWithoutUserInput[] | SolvedCodeforcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCodeforcesCreateOrConnectWithoutUserInput | SolvedCodeforcesCreateOrConnectWithoutUserInput[]
    upsert?: SolvedCodeforcesUpsertWithWhereUniqueWithoutUserInput | SolvedCodeforcesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedCodeforcesCreateManyUserInputEnvelope
    set?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    disconnect?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    delete?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    connect?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    update?: SolvedCodeforcesUpdateWithWhereUniqueWithoutUserInput | SolvedCodeforcesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedCodeforcesUpdateManyWithWhereWithoutUserInput | SolvedCodeforcesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedCodeforcesScalarWhereInput | SolvedCodeforcesScalarWhereInput[]
  }

  export type CtfWriteupUpdateManyWithoutUserNestedInput = {
    create?: XOR<CtfWriteupCreateWithoutUserInput, CtfWriteupUncheckedCreateWithoutUserInput> | CtfWriteupCreateWithoutUserInput[] | CtfWriteupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfWriteupCreateOrConnectWithoutUserInput | CtfWriteupCreateOrConnectWithoutUserInput[]
    upsert?: CtfWriteupUpsertWithWhereUniqueWithoutUserInput | CtfWriteupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CtfWriteupCreateManyUserInputEnvelope
    set?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    disconnect?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    delete?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    connect?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    update?: CtfWriteupUpdateWithWhereUniqueWithoutUserInput | CtfWriteupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CtfWriteupUpdateManyWithWhereWithoutUserInput | CtfWriteupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CtfWriteupScalarWhereInput | CtfWriteupScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SolvedLeetcodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedLeetcodeCreateWithoutUserInput, SolvedLeetcodeUncheckedCreateWithoutUserInput> | SolvedLeetcodeCreateWithoutUserInput[] | SolvedLeetcodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedLeetcodeCreateOrConnectWithoutUserInput | SolvedLeetcodeCreateOrConnectWithoutUserInput[]
    upsert?: SolvedLeetcodeUpsertWithWhereUniqueWithoutUserInput | SolvedLeetcodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedLeetcodeCreateManyUserInputEnvelope
    set?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    disconnect?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    delete?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    connect?: SolvedLeetcodeWhereUniqueInput | SolvedLeetcodeWhereUniqueInput[]
    update?: SolvedLeetcodeUpdateWithWhereUniqueWithoutUserInput | SolvedLeetcodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedLeetcodeUpdateManyWithWhereWithoutUserInput | SolvedLeetcodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedLeetcodeScalarWhereInput | SolvedLeetcodeScalarWhereInput[]
  }

  export type SolvedCodeforcesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedCodeforcesCreateWithoutUserInput, SolvedCodeforcesUncheckedCreateWithoutUserInput> | SolvedCodeforcesCreateWithoutUserInput[] | SolvedCodeforcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCodeforcesCreateOrConnectWithoutUserInput | SolvedCodeforcesCreateOrConnectWithoutUserInput[]
    upsert?: SolvedCodeforcesUpsertWithWhereUniqueWithoutUserInput | SolvedCodeforcesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedCodeforcesCreateManyUserInputEnvelope
    set?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    disconnect?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    delete?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    connect?: SolvedCodeforcesWhereUniqueInput | SolvedCodeforcesWhereUniqueInput[]
    update?: SolvedCodeforcesUpdateWithWhereUniqueWithoutUserInput | SolvedCodeforcesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedCodeforcesUpdateManyWithWhereWithoutUserInput | SolvedCodeforcesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedCodeforcesScalarWhereInput | SolvedCodeforcesScalarWhereInput[]
  }

  export type CtfWriteupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CtfWriteupCreateWithoutUserInput, CtfWriteupUncheckedCreateWithoutUserInput> | CtfWriteupCreateWithoutUserInput[] | CtfWriteupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CtfWriteupCreateOrConnectWithoutUserInput | CtfWriteupCreateOrConnectWithoutUserInput[]
    upsert?: CtfWriteupUpsertWithWhereUniqueWithoutUserInput | CtfWriteupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CtfWriteupCreateManyUserInputEnvelope
    set?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    disconnect?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    delete?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    connect?: CtfWriteupWhereUniqueInput | CtfWriteupWhereUniqueInput[]
    update?: CtfWriteupUpdateWithWhereUniqueWithoutUserInput | CtfWriteupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CtfWriteupUpdateManyWithWhereWithoutUserInput | CtfWriteupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CtfWriteupScalarWhereInput | CtfWriteupScalarWhereInput[]
  }

  export type SolvedLeetcodeCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSolved_leetcodeInput = {
    create?: XOR<UserCreateWithoutSolved_leetcodeInput, UserUncheckedCreateWithoutSolved_leetcodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolved_leetcodeInput
    connect?: UserWhereUniqueInput
  }

  export type SolvedLeetcodeUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSolved_leetcodeNestedInput = {
    create?: XOR<UserCreateWithoutSolved_leetcodeInput, UserUncheckedCreateWithoutSolved_leetcodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolved_leetcodeInput
    upsert?: UserUpsertWithoutSolved_leetcodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolved_leetcodeInput, UserUpdateWithoutSolved_leetcodeInput>, UserUncheckedUpdateWithoutSolved_leetcodeInput>
  }

  export type SolvedCodeforcesCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSolved_codeforcesInput = {
    create?: XOR<UserCreateWithoutSolved_codeforcesInput, UserUncheckedCreateWithoutSolved_codeforcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolved_codeforcesInput
    connect?: UserWhereUniqueInput
  }

  export type SolvedCodeforcesUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSolved_codeforcesNestedInput = {
    create?: XOR<UserCreateWithoutSolved_codeforcesInput, UserUncheckedCreateWithoutSolved_codeforcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolved_codeforcesInput
    upsert?: UserUpsertWithoutSolved_codeforcesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolved_codeforcesInput, UserUpdateWithoutSolved_codeforcesInput>, UserUncheckedUpdateWithoutSolved_codeforcesInput>
  }

  export type UserCreateNestedOneWithoutCtf_writeupsInput = {
    create?: XOR<UserCreateWithoutCtf_writeupsInput, UserUncheckedCreateWithoutCtf_writeupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCtf_writeupsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCtfCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CtfCategory
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCtf_writeupsNestedInput = {
    create?: XOR<UserCreateWithoutCtf_writeupsInput, UserUncheckedCreateWithoutCtf_writeupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCtf_writeupsInput
    upsert?: UserUpsertWithoutCtf_writeupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCtf_writeupsInput, UserUpdateWithoutCtf_writeupsInput>, UserUncheckedUpdateWithoutCtf_writeupsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCtfCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CtfCategory | EnumCtfCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCtfCategoryFilter<$PrismaModel> | $Enums.CtfCategory
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCtfCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtfCategory | EnumCtfCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtfCategory[] | ListEnumCtfCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCtfCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CtfCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtfCategoryFilter<$PrismaModel>
    _max?: NestedEnumCtfCategoryFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SolvedLeetcodeCreateWithoutUserInput = {
    problem_id: string
    title: string
    difficulty: string
    tags?: SolvedLeetcodeCreatetagsInput | string[]
    solution?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedLeetcodeUncheckedCreateWithoutUserInput = {
    id?: number
    problem_id: string
    title: string
    difficulty: string
    tags?: SolvedLeetcodeCreatetagsInput | string[]
    solution?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedLeetcodeCreateOrConnectWithoutUserInput = {
    where: SolvedLeetcodeWhereUniqueInput
    create: XOR<SolvedLeetcodeCreateWithoutUserInput, SolvedLeetcodeUncheckedCreateWithoutUserInput>
  }

  export type SolvedLeetcodeCreateManyUserInputEnvelope = {
    data: SolvedLeetcodeCreateManyUserInput | SolvedLeetcodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SolvedCodeforcesCreateWithoutUserInput = {
    problem_id: string
    title: string
    difficulty: number
    tags?: SolvedCodeforcesCreatetagsInput | string[]
    solution?: string | null
    language?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedCodeforcesUncheckedCreateWithoutUserInput = {
    id?: number
    problem_id: string
    title: string
    difficulty: number
    tags?: SolvedCodeforcesCreatetagsInput | string[]
    solution?: string | null
    language?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedCodeforcesCreateOrConnectWithoutUserInput = {
    where: SolvedCodeforcesWhereUniqueInput
    create: XOR<SolvedCodeforcesCreateWithoutUserInput, SolvedCodeforcesUncheckedCreateWithoutUserInput>
  }

  export type SolvedCodeforcesCreateManyUserInputEnvelope = {
    data: SolvedCodeforcesCreateManyUserInput | SolvedCodeforcesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CtfWriteupCreateWithoutUserInput = {
    challenge: string
    category: $Enums.CtfCategory
    is_public?: boolean
    created_at?: Date | string
  }

  export type CtfWriteupUncheckedCreateWithoutUserInput = {
    id?: number
    challenge: string
    category: $Enums.CtfCategory
    is_public?: boolean
    created_at?: Date | string
  }

  export type CtfWriteupCreateOrConnectWithoutUserInput = {
    where: CtfWriteupWhereUniqueInput
    create: XOR<CtfWriteupCreateWithoutUserInput, CtfWriteupUncheckedCreateWithoutUserInput>
  }

  export type CtfWriteupCreateManyUserInputEnvelope = {
    data: CtfWriteupCreateManyUserInput | CtfWriteupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SolvedLeetcodeUpsertWithWhereUniqueWithoutUserInput = {
    where: SolvedLeetcodeWhereUniqueInput
    update: XOR<SolvedLeetcodeUpdateWithoutUserInput, SolvedLeetcodeUncheckedUpdateWithoutUserInput>
    create: XOR<SolvedLeetcodeCreateWithoutUserInput, SolvedLeetcodeUncheckedCreateWithoutUserInput>
  }

  export type SolvedLeetcodeUpdateWithWhereUniqueWithoutUserInput = {
    where: SolvedLeetcodeWhereUniqueInput
    data: XOR<SolvedLeetcodeUpdateWithoutUserInput, SolvedLeetcodeUncheckedUpdateWithoutUserInput>
  }

  export type SolvedLeetcodeUpdateManyWithWhereWithoutUserInput = {
    where: SolvedLeetcodeScalarWhereInput
    data: XOR<SolvedLeetcodeUpdateManyMutationInput, SolvedLeetcodeUncheckedUpdateManyWithoutUserInput>
  }

  export type SolvedLeetcodeScalarWhereInput = {
    AND?: SolvedLeetcodeScalarWhereInput | SolvedLeetcodeScalarWhereInput[]
    OR?: SolvedLeetcodeScalarWhereInput[]
    NOT?: SolvedLeetcodeScalarWhereInput | SolvedLeetcodeScalarWhereInput[]
    id?: IntFilter<"SolvedLeetcode"> | number
    userId?: IntFilter<"SolvedLeetcode"> | number
    problem_id?: StringFilter<"SolvedLeetcode"> | string
    title?: StringFilter<"SolvedLeetcode"> | string
    difficulty?: StringFilter<"SolvedLeetcode"> | string
    tags?: StringNullableListFilter<"SolvedLeetcode">
    solution?: StringNullableFilter<"SolvedLeetcode"> | string | null
    ai_analysis?: StringNullableFilter<"SolvedLeetcode"> | string | null
    created_at?: DateTimeFilter<"SolvedLeetcode"> | Date | string
  }

  export type SolvedCodeforcesUpsertWithWhereUniqueWithoutUserInput = {
    where: SolvedCodeforcesWhereUniqueInput
    update: XOR<SolvedCodeforcesUpdateWithoutUserInput, SolvedCodeforcesUncheckedUpdateWithoutUserInput>
    create: XOR<SolvedCodeforcesCreateWithoutUserInput, SolvedCodeforcesUncheckedCreateWithoutUserInput>
  }

  export type SolvedCodeforcesUpdateWithWhereUniqueWithoutUserInput = {
    where: SolvedCodeforcesWhereUniqueInput
    data: XOR<SolvedCodeforcesUpdateWithoutUserInput, SolvedCodeforcesUncheckedUpdateWithoutUserInput>
  }

  export type SolvedCodeforcesUpdateManyWithWhereWithoutUserInput = {
    where: SolvedCodeforcesScalarWhereInput
    data: XOR<SolvedCodeforcesUpdateManyMutationInput, SolvedCodeforcesUncheckedUpdateManyWithoutUserInput>
  }

  export type SolvedCodeforcesScalarWhereInput = {
    AND?: SolvedCodeforcesScalarWhereInput | SolvedCodeforcesScalarWhereInput[]
    OR?: SolvedCodeforcesScalarWhereInput[]
    NOT?: SolvedCodeforcesScalarWhereInput | SolvedCodeforcesScalarWhereInput[]
    id?: IntFilter<"SolvedCodeforces"> | number
    userId?: IntFilter<"SolvedCodeforces"> | number
    problem_id?: StringFilter<"SolvedCodeforces"> | string
    title?: StringFilter<"SolvedCodeforces"> | string
    difficulty?: IntFilter<"SolvedCodeforces"> | number
    tags?: StringNullableListFilter<"SolvedCodeforces">
    solution?: StringNullableFilter<"SolvedCodeforces"> | string | null
    language?: StringNullableFilter<"SolvedCodeforces"> | string | null
    ai_analysis?: StringNullableFilter<"SolvedCodeforces"> | string | null
    created_at?: DateTimeFilter<"SolvedCodeforces"> | Date | string
  }

  export type CtfWriteupUpsertWithWhereUniqueWithoutUserInput = {
    where: CtfWriteupWhereUniqueInput
    update: XOR<CtfWriteupUpdateWithoutUserInput, CtfWriteupUncheckedUpdateWithoutUserInput>
    create: XOR<CtfWriteupCreateWithoutUserInput, CtfWriteupUncheckedCreateWithoutUserInput>
  }

  export type CtfWriteupUpdateWithWhereUniqueWithoutUserInput = {
    where: CtfWriteupWhereUniqueInput
    data: XOR<CtfWriteupUpdateWithoutUserInput, CtfWriteupUncheckedUpdateWithoutUserInput>
  }

  export type CtfWriteupUpdateManyWithWhereWithoutUserInput = {
    where: CtfWriteupScalarWhereInput
    data: XOR<CtfWriteupUpdateManyMutationInput, CtfWriteupUncheckedUpdateManyWithoutUserInput>
  }

  export type CtfWriteupScalarWhereInput = {
    AND?: CtfWriteupScalarWhereInput | CtfWriteupScalarWhereInput[]
    OR?: CtfWriteupScalarWhereInput[]
    NOT?: CtfWriteupScalarWhereInput | CtfWriteupScalarWhereInput[]
    id?: IntFilter<"CtfWriteup"> | number
    userId?: IntFilter<"CtfWriteup"> | number
    challenge?: StringFilter<"CtfWriteup"> | string
    category?: EnumCtfCategoryFilter<"CtfWriteup"> | $Enums.CtfCategory
    is_public?: BoolFilter<"CtfWriteup"> | boolean
    created_at?: DateTimeFilter<"CtfWriteup"> | Date | string
  }

  export type UserCreateWithoutSolved_leetcodeInput = {
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_codeforces?: SolvedCodeforcesCreateNestedManyWithoutUserInput
    ctf_writeups?: CtfWriteupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolved_leetcodeInput = {
    id?: number
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_codeforces?: SolvedCodeforcesUncheckedCreateNestedManyWithoutUserInput
    ctf_writeups?: CtfWriteupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolved_leetcodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolved_leetcodeInput, UserUncheckedCreateWithoutSolved_leetcodeInput>
  }

  export type UserUpsertWithoutSolved_leetcodeInput = {
    update: XOR<UserUpdateWithoutSolved_leetcodeInput, UserUncheckedUpdateWithoutSolved_leetcodeInput>
    create: XOR<UserCreateWithoutSolved_leetcodeInput, UserUncheckedCreateWithoutSolved_leetcodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolved_leetcodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolved_leetcodeInput, UserUncheckedUpdateWithoutSolved_leetcodeInput>
  }

  export type UserUpdateWithoutSolved_leetcodeInput = {
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_codeforces?: SolvedCodeforcesUpdateManyWithoutUserNestedInput
    ctf_writeups?: CtfWriteupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolved_leetcodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_codeforces?: SolvedCodeforcesUncheckedUpdateManyWithoutUserNestedInput
    ctf_writeups?: CtfWriteupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSolved_codeforcesInput = {
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_leetcode?: SolvedLeetcodeCreateNestedManyWithoutUserInput
    ctf_writeups?: CtfWriteupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolved_codeforcesInput = {
    id?: number
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_leetcode?: SolvedLeetcodeUncheckedCreateNestedManyWithoutUserInput
    ctf_writeups?: CtfWriteupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolved_codeforcesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolved_codeforcesInput, UserUncheckedCreateWithoutSolved_codeforcesInput>
  }

  export type UserUpsertWithoutSolved_codeforcesInput = {
    update: XOR<UserUpdateWithoutSolved_codeforcesInput, UserUncheckedUpdateWithoutSolved_codeforcesInput>
    create: XOR<UserCreateWithoutSolved_codeforcesInput, UserUncheckedCreateWithoutSolved_codeforcesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolved_codeforcesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolved_codeforcesInput, UserUncheckedUpdateWithoutSolved_codeforcesInput>
  }

  export type UserUpdateWithoutSolved_codeforcesInput = {
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_leetcode?: SolvedLeetcodeUpdateManyWithoutUserNestedInput
    ctf_writeups?: CtfWriteupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolved_codeforcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_leetcode?: SolvedLeetcodeUncheckedUpdateManyWithoutUserNestedInput
    ctf_writeups?: CtfWriteupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCtf_writeupsInput = {
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_leetcode?: SolvedLeetcodeCreateNestedManyWithoutUserInput
    solved_codeforces?: SolvedCodeforcesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCtf_writeupsInput = {
    id?: number
    github_id: string
    username: string
    email?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    solved_leetcode?: SolvedLeetcodeUncheckedCreateNestedManyWithoutUserInput
    solved_codeforces?: SolvedCodeforcesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCtf_writeupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCtf_writeupsInput, UserUncheckedCreateWithoutCtf_writeupsInput>
  }

  export type UserUpsertWithoutCtf_writeupsInput = {
    update: XOR<UserUpdateWithoutCtf_writeupsInput, UserUncheckedUpdateWithoutCtf_writeupsInput>
    create: XOR<UserCreateWithoutCtf_writeupsInput, UserUncheckedCreateWithoutCtf_writeupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCtf_writeupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCtf_writeupsInput, UserUncheckedUpdateWithoutCtf_writeupsInput>
  }

  export type UserUpdateWithoutCtf_writeupsInput = {
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_leetcode?: SolvedLeetcodeUpdateManyWithoutUserNestedInput
    solved_codeforces?: SolvedCodeforcesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCtf_writeupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_leetcode?: SolvedLeetcodeUncheckedUpdateManyWithoutUserNestedInput
    solved_codeforces?: SolvedCodeforcesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SolvedLeetcodeCreateManyUserInput = {
    id?: number
    problem_id: string
    title: string
    difficulty: string
    tags?: SolvedLeetcodeCreatetagsInput | string[]
    solution?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type SolvedCodeforcesCreateManyUserInput = {
    id?: number
    problem_id: string
    title: string
    difficulty: number
    tags?: SolvedCodeforcesCreatetagsInput | string[]
    solution?: string | null
    language?: string | null
    ai_analysis?: string | null
    created_at?: Date | string
  }

  export type CtfWriteupCreateManyUserInput = {
    id?: number
    challenge: string
    category: $Enums.CtfCategory
    is_public?: boolean
    created_at?: Date | string
  }

  export type SolvedLeetcodeUpdateWithoutUserInput = {
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    tags?: SolvedLeetcodeUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedLeetcodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    tags?: SolvedLeetcodeUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedLeetcodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    tags?: SolvedLeetcodeUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCodeforcesUpdateWithoutUserInput = {
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    tags?: SolvedCodeforcesUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCodeforcesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    tags?: SolvedCodeforcesUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCodeforcesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    problem_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    tags?: SolvedCodeforcesUpdatetagsInput | string[]
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    ai_analysis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtfWriteupUpdateWithoutUserInput = {
    challenge?: StringFieldUpdateOperationsInput | string
    category?: EnumCtfCategoryFieldUpdateOperationsInput | $Enums.CtfCategory
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtfWriteupUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    category?: EnumCtfCategoryFieldUpdateOperationsInput | $Enums.CtfCategory
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtfWriteupUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge?: StringFieldUpdateOperationsInput | string
    category?: EnumCtfCategoryFieldUpdateOperationsInput | $Enums.CtfCategory
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}