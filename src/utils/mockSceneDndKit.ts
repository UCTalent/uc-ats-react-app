export interface ICandidate {
  id: string
  columnId: string
  content: string
}

export const CANDIDATE_PROCESS = [
  { id: "new-application", name: "New Application", colors: ["#FF3D00", "#FFECE5"] },
  { id: "screening", name: "Screening", colors: ["#5B20FF", "#EFE9FF"] },
  { id: "interview", name: "Interview", colors: ["#2586CB", "#E5F4FF"] },
  { id: "hired", name: "Hired", colors: ["#E072A4", "#FFE5F1"] },
  { id: "failed", name: "Failed", colors: ["#000", "#999"] },
]

export const initialCandidates: ICandidate[] = [
  {
    id: "1",
    columnId: "new-application",
    content: "Project initiation and planning",
  },
  {
    id: "2",
    columnId: "new-application",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "21",
    columnId: "new-application",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "22",
    columnId: "new-application",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "23",
    columnId: "new-application",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "24",
    columnId: "new-application",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "25",
    columnId: "new-application",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "26",
    columnId: "new-application",
    content: "Gather requirements from stakeholders",
  },
  {
    id: "3",
    columnId: "screening",
    content: "Create wireframes and mockups",
  },
  {
    id: "4",
    columnId: "screening",
    content: "Develop homepage layout",
  },
  {
    id: "44",
    columnId: "screening",
    content: "Develop homepage layout",
  },
  {
    id: "45df",
    columnId: "screening",
    content: "Develop homepage layout",
  },
  {
    id: "4ad",
    columnId: "screening",
    content: "Develop homepage layout",
  },
  {
    id: "df4",
    columnId: "screening",
    content: "Develop homepage layout",
  },
  {
    id: "4sd",
    columnId: "screening",
    content: "Develop homepage layout",
  },
  {
    id: "4hj",
    columnId: "screening",
    content: "Develop homepage layout",
  },
  {
    id: "5",
    columnId: "interview",
    content: "Design color scheme and typography",
  },
  {
    id: "6",
    columnId: "interview",
    content: "Implement user authentication",
  },
  {
    id: "7",
    columnId: "hired",
    content: "Build contact us page",
  },
  {
    id: "8",
    columnId: "hired",
    content: "Create product catalog",
  },
  {
    id: "9",
    columnId: "failed",
    content: "Develop about us page",
  },
  {
    id: "10",
    columnId: "failed",
    content: "Optimize website for mobile devices",
  },
  {
    id: "11",
    columnId: "failed",
    content: "Integrate payment gateway",
  },
]

// export const MOCK_CANDIDATE_TO_RENDER = CANDIDATE_PROCESS.map((column) => ({
//   id: column.id,
//   name: column.name,
//   colors: column.colors,
//   children: initialCandidates.filter((card) => card.columnId === column.id),
// }))
