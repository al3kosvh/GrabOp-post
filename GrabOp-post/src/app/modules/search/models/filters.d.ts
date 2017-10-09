declare module Models {
  interface Filters {
    search?: string,
    country?: string,
    province?: string,
    city?: string,
    businessStyle?: {
      partnership?: boolean,
      exchange?: boolean,
      donate?: boolean,
      internship?: boolean,
      money?: boolean
    },
    fixed?: {
      start?: any,
      end?: any
    }
    hourly?: {
      start?: any,
      end?: any
    }
    commission?: {
      start?: any,
      end?: any
    }
  }
}
