type statusType = {
  id: number;
  label: string;
  color: string;
};
// status for employee profile
export const statusList: statusType[] = [
  {
    id: 1,
    label: "Active",
    color: "text-green-600 font-sans",
  },
  {
    id: 2,
    label: "Inactive",
    color: "text-neutral-400 font-sans",
  },
  {
    id: 3,
    label: "In-progress",
    color: "text-blue-600 font-sans",
  },
];
