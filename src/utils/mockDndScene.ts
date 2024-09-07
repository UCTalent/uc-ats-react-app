import { IDndScene } from "types/dnd"

export const CANDIDATE_PROCESS = [
  { id: "new-application", name: "New Application", colors: ["#FF3D00", "#FFECE5"] },
  { id: "screening", name: "Screening", colors: ["#5B20FF", "#EFE9FF"] },
  { id: "interview", name: "Interview", colors: ["#2586CB", "#E5F4FF"] },
  { id: "hired", name: "Hired", colors: ["#E072A4", "#FFE5F1"] },
  { id: "failed", name: "Failed", colors: ["#000", "#999"] },
]

// Function to pick a random color (you can define this function as needed)
const pickColor = () => {
  const colors = ["#FF6E40", "#FFA726", "#AB47BC", "#42A5F5", "#26A69A"]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Sample text (lorem ipsum) to be used for data
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."

export const generateItems = (count, creator) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}

export const mockDndScene: IDndScene<string> = {
  type: "container",
  props: {
    orientation: "horizontal",
  },
  children: [
    {
      id: CANDIDATE_PROCESS[0].id,
      type: "container",
      name: CANDIDATE_PROCESS[0].name,
      props: {
        orientation: "vertical",
      },
      children: [
        {
          type: "draggable",
          id: "00",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "01",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "02",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "03",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "04",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
      ],
    },
    {
      id: CANDIDATE_PROCESS[1].id,
      type: "container",
      name: CANDIDATE_PROCESS[1].name,
      props: {
        orientation: "vertical",
      },
      children: [
        {
          type: "draggable",
          id: "10",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "11",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "12",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "13",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "14",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "15",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
      ],
    },
    {
      id: CANDIDATE_PROCESS[2].id,
      type: "container",
      name: CANDIDATE_PROCESS[2].name,
      props: {
        orientation: "vertical",
      },
      children: [
        {
          type: "draggable",
          id: "20",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "21",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "22",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "23",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "24",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
      ],
    },
    {
      id: CANDIDATE_PROCESS[3].id,
      type: "container",
      name: CANDIDATE_PROCESS[3].name,
      props: {
        orientation: "vertical",
      },
      children: [
        {
          type: "draggable",
          id: "30",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "31",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "32",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "33",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
      ],
    },
    {
      id: CANDIDATE_PROCESS[4].id,
      type: "container",
      name: CANDIDATE_PROCESS[4].name,
      props: {
        orientation: "vertical",
      },
      children: [
        {
          type: "draggable",
          id: "40",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "41",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "42",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
        {
          type: "draggable",
          id: "43",
          props: {
            className: "card",
            style: { backgroundColor: pickColor() },
          },
          data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
        },
      ],
    },
  ],
}
