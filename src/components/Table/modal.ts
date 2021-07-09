export namespace TableModal {
  export interface Form {
    name: string;
    email: string;
    position: string;
  }

  export interface Employee extends Form {
    id: string;
  }

  export type Status = "success" | "fail" | "fetching";
}
