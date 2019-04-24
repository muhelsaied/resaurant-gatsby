export const colors = {
  mainColor: "#f26038",
  secOrange: "#ff5e00",
  mainWhite: "#ffeee4",
  darkYellow: `#866728`,
  lightYellow: " #d2ab23",
  mainRed: "#d2234b",
  mainBlack: `#262626`,
  mainYellow: `#d2aa5c`,
  mainGrey: `#474747`,
}

export const textSlanted = `font-family:'Caveat', cursive;`

export const transDefault = "transition:all 0.5s ease-in-out"
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}
