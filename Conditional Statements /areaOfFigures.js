function areaOfFigures(input){

    if(input[0] == "square"){
        let squareLength = input[1];
        let squareSurfaceArea = (squareLength * squareLength).toFixed(3);
        console.log(squareSurfaceArea);
    }else if(input[0] == "rectangle"){
        let rectSide1 = input[1];
        let rectSide2 = input[2];
        let rectSurfaceArea = (rectSide1 * rectSide2).toFixed(3);
        console.log(rectSurfaceArea);
    }else if(input[0] == "circle"){
        let circleRadius = input[1];
        let circleSurfaceArea = ((circleRadius * circleRadius) * Math.PI).toFixed(3);
        console.log(circleSurfaceArea);
    }else if(input[0] == "triangle"){
        let triangleLength = input[1];
        let triangleHeight = input[2];
        let triangleSurfaceArea = (triangleLength * triangleHeight / 2).toFixed(3);
        console.log(triangleSurfaceArea)
    }


}
areaOfFigures(["square", "5"])