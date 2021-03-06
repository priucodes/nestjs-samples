// import { PaginateConfig } from "nestjs-paginate";
// import { Coffee } from "../entities/coffee.entity";

// const paginateConfig: PaginateConfig<Coffee> {
//   /**
//    * Required: true (must have a minimum of one column)
//    * Type: (keyof CatEntity)[]
//    * Description: These are the columns that are valid to be sorted by.
//    */
//   sortableColumns: ['id', 'name', 'brand'],

//   /**
//    * Required: false
//    * Type: [keyof CatEntity, 'ASC' | 'DESC'][]
//    * Default: [[sortableColumns[0], 'ASC]]
//    * Description: The order to display the sorted entities.
//    */
//   defaultSortBy: [['name', 'DESC']],

//   /**
//    * Required: false
//    * Type: (keyof CatEntity)[]
//    * Description: These columns will be searched through when using the search query
//    * param. Limit search scope further by using `searchBy` query param.
//    */
//   searchableColumns: ['name', 'brand'],

//   /**
//    * Required: false
//    * Type: number
//    * Default: 100
//    * Description: The maximum amount of entities to return per page.
//    */
//   maxLimit: 20,

//   /**
//    * Required: false
//    * Type: number
//    * Default: 20
//    */
//   defaultLimit: 50,

//   /**
//    * Required: false
//    * Type: TypeORM find options
//    * Default: None
//    * https://typeorm.io/#/find-optionsfind-options.md
//    */
//   where: { brand: 'starbucks' },

//   /**
//    * Required: false
//    * Type: { [key in CatEntity]?: FilterOperator[] } - Operators based on TypeORM find operators
//    * Default: None
//    * https://typeorm.io/#/find-options/advanced-options
//    */
//   filterableColumns: { name: [FilterOperator.EQ, FilterOperator.IN] }
// }