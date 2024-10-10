import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiDomain = process.env.REACT_APP_API_DOMAIN;
const token = localStorage.getItem("mytoken");
const clientFromStorage: any = localStorage.getItem("employee_detail");
const clientObj = JSON.parse(clientFromStorage);
const client = clientObj?.client?.id;
console.log(client);

const documentNewsApi = createApi({
  reducerPath: "memo",
  baseQuery: fetchBaseQuery({
    baseUrl: apiDomain,
  }),
  tagTypes: ["memo"],
  endpoints(builder) {
    return {
      fetchDocumentsPage: builder.query({
        query: ({ page, pageSize, search }) => {
          return {
            url: `/api/client/doc_news/document_page_list/?page=${page}&page_size=${pageSize}&client=${client}&search=${search}`,
            headers: { Authorization: "token " + token },
            method: "GET",
          };
        },
        providesTags: ["memo"],
      }),
      addDocuments: builder.mutation({
        query: (data) => {
          return {
            url: `/api/client/doc_news/document_add/`,
            headers: {
              Authorization: "token " + token,
            },
            body: data,
            method: "POST",
          };
        },
        invalidatesTags: ["memo"],
      }),
      addNews: builder.mutation({
        query: (data) => {
          return {
            url: `/api/client/doc_news/news_add/`,
            headers: {
              Authorization: "token " + token,
            },
            body: data,
            method: "POST",
          };
        },
        invalidatesTags: ["memo"],
      }),
      fetchNewsPage: builder.query({
        query: ({ page, pageSize, search }) => {
          return {
            url: `/api/client/doc_news/news_page_list/?page=${page}&page_size=${pageSize}&client=${client}&search=${search}`,
            headers: { Authorization: "token " + token },
            method: "GET",
          };
        },
        providesTags: ["memo"],
      }),
      getDocumentFiles: builder.query({
        query: ({ file_id }) => {
          return {
            url: `api/client/doc_news/fetch_document_file/?file_id=${file_id}`,
            headers: { Authorization: "token " + token },
            method: "GET",
          };
        },
        providesTags: ["memo"],
      }),
    };
  },
});
export const {
  useAddDocumentsMutation,
  useFetchDocumentsPageQuery,
  useAddNewsMutation,
  useFetchNewsPageQuery,
  useGetDocumentFilesQuery,
} = documentNewsApi;
export { documentNewsApi };
