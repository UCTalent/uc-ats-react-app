import { IDndScene } from "types/dnd"

// Mock data for column names
const columnNames = ["Column 1", "Column 2", "Column 3", "Column 4"]

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
  children: generateItems(4, (i) => ({
    id: `column${i}`,
    type: "container",
    name: columnNames[i], // Use columnNames[i] safely, assuming it exists
    props: {
      orientation: "vertical",
      className: "card-container",
    },
    children: generateItems(Math.floor(Math.random() * 10) + 5, (j) => ({
      type: "draggable",
      id: `${i}${j}`,
      props: {
        className: "card",
        style: { backgroundColor: pickColor() }, // Use pickColor to assign random colors
      },
      data: lorem.slice(0, Math.floor(Math.random() * 150) + 30), // Slice lorem text
    })),
  })),
}
