export interface CompetitionCategory {
  id_competition_category: number;
  competition_id: number;
  category_id: number;
  season: string;
  user_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface CompetitionCategoriesGetResponse {
  success: boolean;
  message: string;
  data: {
    items: CompetitionCategory[];
    itemCount: number;
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  links: {
    self: string;
    first: string;
    last: string;
    next: string;
    previous: string;
  };
  timestamp: string;
}
