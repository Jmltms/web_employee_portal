import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiDomain = process.env.REACT_APP_API_DOMAIN
const token = localStorage.getItem('mytoken')
const employee_detailed = JSON.parse(
    localStorage.getItem('account_detail') || "{}");

const employeeApi = createApi({
    reducerPath: 'employee',
    baseQuery: fetchBaseQuery({
        baseUrl: apiDomain
    }),
    endpoints(builder){
        return {
            addEmployee: builder.mutation({
                query: (form) => {
                    return {
                        url: '/api/employee/add_employee/',
                        headers: { "Authorization": "token " + token },
                        method: 'POST',
                        body: form
                    };
                }
            }),
            fetchEmployee: builder.query({
                query: () => {
                    return{
                        url:'/api/employee/employee_list/',
                        headers: { "Authorization": "token " + token },
                        params: {
                            client_id: employee_detailed.client.id
                        },
                        method: 'GET',
                    };
                }
            }),
            employeeDetailed: builder.query({
                query: (id) => {
                    return {
                        url: `/api/employee/${id}/employee_detailed/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
            employeeDetailedEdit: builder.mutation({
                query: (form) => {
                    console.log(form);
                    return {
                        url: `/api/employee/${employee_detailed.id}/employee_detail_edit/`,
                        headers: { "Authorization": "token " + token },
                        method: 'PUT',
                        body: form
                    };
                }
            }),
            employeebadges: builder.query({
                query: (id) => {
                    return {
                        url: `/api/employee/${id}/employee_badge/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
            employeeAssignedAssessment: builder.mutation({
                query: (form) => {
                    return {
                        url: `/api/employee/employee_assign_assessment/`,
                        headers: { "Authorization": "token " + token },
                        method: 'POST',
                        body: form
                    }
                }
            }),
            employeeAttendance: builder.mutation({
                query: (form) => {
                    console.log(form);
                    return {
                        url: `/api/employee/save_attendance/`,
                        headers: { "Authorization": "token " + token },
                        method: 'POST',
                        body: form
                    }
                }
            }),
            EmployeeAttendance: builder.query({
                query: () => {
                    return{
                        url: `/api/employee/${employee_detailed.id}/get_attendances/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
        };
    }
});
export const {
    useFetchEmployeeQuery,
    useAddEmployeeMutation,
    useEmployeeDetailedQuery,
    useEmployeeDetailedEditMutation,
    useEmployeebadgesQuery,
    useEmployeeAssignedAssessmentMutation,
    useEmployeeAttendanceMutation,
    useEmployeeAttendanceQuery,
} = employeeApi;
export { employeeApi }