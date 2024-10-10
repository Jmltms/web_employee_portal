import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiDomain = process.env.REACT_APP_API_DOMAIN;
const token = localStorage.getItem("mytoken");

const clientFromStorage: any = localStorage.getItem("employee_detail");
const clientObj = JSON.parse(clientFromStorage);
const client = clientObj?.client?.id;
console.log(client);

const departmentApi = createApi({
  reducerPath: "department",
  baseQuery: fetchBaseQuery({
    baseUrl: apiDomain,
  }),
  tagTypes: ["department"],
  endpoints(builder) {
    return {
      fetchDepartment: builder.query({
        query: () => {
          return {
            url: `/api/client/department/${client}/department_list/`,
            headers: { Authorization: "token " + token },
            method: "GET",
          };
        },
        providesTags: ["department"],
      }),
    };
  },
});
export const { useFetchDepartmentQuery } = departmentApi;
export { departmentApi };
