let num1 = 50
function distanceFromHqInBlocks (num1) {
    return Math.abs(num1 - 42)
}


function distanceFromHqInFeet(num1) {

    return distanceFromHqInBlocks(num1) * 264
}

function distanceTravelledInFeet(block1, block2) {
return Math.abs(block1-block2)*264
}

function calculatesFarePrice(start, destination) {
    let travelFare = Math.abs(start-destination) *264
    if (travelFare < 400) {
        return 0
      }
      else if (travelFare <=2000) {
        return (travelFare-400) *.02
      }
      else if (travelFare < 2500) {
        return 25
      }
      else if (travelFare > 2500) {
        return "cannot travel that far"
      }
}