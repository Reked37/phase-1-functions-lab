
function distanceFromHqInBlocks(blocks){
const hq=42
    if (blocks>42){
    return blocks-hq
 }
    else if (blocks<42){
    return hq-blocks
 }
}


function distanceFromHqInFeet(blocks){
     return distanceFromHqInBlocks(blocks)*264
}

function distanceTravelledInFeet(startblock, endblock){
    let blockstravelled=startblock-endblock
    const absblocks= Math.abs(blockstravelled)
    return absblocks*264
}

function calculatesFarePrice(startblock,endblock){
    let distance=distanceTravelledInFeet(startblock,endblock)
    if(distance<400){
        return distance*0
    }
    else if(distance>400 && distance<2000){
        return (distance-400)*.02
    }
    else if(distance>2000 && distance<2500){
        return 25
    }
    else if (distance>2500){
        return 'cannot travel that far'
    }
}