import type { Category } from "./category";
import type { CompetitionType } from "./competitionType";
import type { Organization } from "./organization";
import type { CompetitionCategory } from "./competitionCategory";

export type CompetitionFormat = "SINGLE_ROUND" | "DOUBLE_ROUND" | "KNOCKOUT";

export interface Competition {
  id_competition: number;
  name: string;
  format: CompetitionFormat;
  is_initialized: boolean;
  competition_type_id: number;
  organization_id: number;
  user_id: number;
  created_at?: Date;
  updated_at?: Date;
}

interface CompetitionCategoryWithDetails {
  season: string | null;
  category: Pick<Category, "id_category" | "name" | "gender"> | null;
  competition_category_id: number;
}

export interface CompetitionWithDetails extends Competition {
  organization: Pick<
    Organization,
    "id_organization" | "name" | "logo" | "address"
  > | null;
  competitionType: Pick<CompetitionType, "id_competition_type" | "name"> | null;
  competitionCategory: CompetitionCategoryWithDetails;
  competition_category_id: Pick<CompetitionCategory, "id_competition_category">;
}

export interface CompetitionsGetResponse {
  success: boolean;
  message: string;
  data: {
    items: CompetitionWithDetails[];
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
