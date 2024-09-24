export interface Organization {
  id_organization: string;
  name: string;
  address: string;
  logo: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface OrganizationsGetResponse {
  success: boolean;
  message: string;
  data: {
    items: Organization[];
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
