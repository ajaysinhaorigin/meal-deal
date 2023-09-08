export const isMobile = () => {
  return window.innerWidth <= 468
}

export const sortbyDefault = (list) => {
  const result = [...list]
  // console.log(result)
  return result
}
export const sortbyTime = (list) => {
  const data = [...list]
  const result = data.sort(
    (item1, item2) =>
      item1?.info?.sla?.deliveryTime - item2?.info?.sla?.deliveryTime
  )
  return result
}
export const sortbyLowToHigh = (list) => {
  const data = [...list]
  const result = data.sort(
    (item1, item2) =>
      parseInt(item1?.info?.costForTwo.match(/\d+/)[0], 10) -
      parseInt(item2?.info?.costForTwo.match(/\d+/)[0], 10)
  )
  return result
}
export const sortbyHighToLow = (list) => {
  const data = [...list]
  const result = data.sort(
    (item1, item2) =>
      parseInt(item2?.info?.costForTwo.match(/\d+/)[0], 10) -
      parseInt(item1?.info?.costForTwo.match(/\d+/)[0], 10)
  )
  return result
}
