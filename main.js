function draw(a,b,c,d){
var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-3, 10, 15, -3],
    axis:false, grid:true, showCopyright:false,showNavigation:true});
 var p1 = board.create('point', [1,1], {name:'A',fixed:true,size:0});
 var p2 = board.create('point', [getAB()+1,1], {name:'B',fixed:true,size:0});
 var p3 = board.create('point', [getCoordinateC(),calculateMedian()+1], {name:'C',fixed:true,size:0});
 var p4 = board.create('point', [getCoordinateD,calculateMedian()+1], {name:'D',fixed:true,size:0});


 var AB = board.create('line',[p1,p2],{straightFirst:false, straightLast:false, strokeWidth:2});
 var BC = board.create('line',[p2,p3],{straightFirst:false, straightLast:false, strokeWidth:2});
 var CD = board.create('line',[p3,p4],{straightFirst:false, straightLast:false, strokeWidth:2});
 var DA = board.create('line',[p4,p1],{straightFirst:false, straightLast:false, strokeWidth:2});

//Logic for labels on lines
 AB.setLabel(getAB()+' cm');
 AB.label.setAttribute({position:'bot'},{offset:[0,-10]});
 BC.setLabel(getBC()+' cm');
 BC.label.setAttribute({position:'bot'},{offset:[15,0]});
 CD.setLabel(getCD()+' cm');
 CD.label.setAttribute({position:'bot'},{offset:[0,10]});
 DA.setLabel(getDA()+' cm');
 DA.label.setAttribute({position:'bot'},{offset:[-25,0]});

 //Logic for vertices
 p1.label.setAttribute({offset:[-10,-10]});
 p2.label.setAttribute({offset:[10,-10]});
 p3.label.setAttribute({offset:[0,10]});
 p4.label.setAttribute({offset:[-10,5]});
}

function getAB(){
    let num = parseInt(document.forms[0].elements[0].value);
    return num;
}

function getCD(){
    let num = parseInt(document.forms[0].elements[1].value);
    return num;
}

function getBC(){
    let num = parseInt(document.forms[0].elements[2].value);
    return num;
}

function getDA(){
    let num = parseInt(document.forms[0].elements[3].value);
    return num;
}

function calculateMedian(){
    let AB = getAB();
    let BC = getBC();
    let CD = getCD();
    let DA = getDA();
    let base = Math.abs(AB-CD);
    let s = (base + BC + DA)/2;
    let temp = s * (s-base) * (s-BC) * (s-DA);
    let area = Math.sqrt(temp);
    let median = (2/base) * area;
    return median;
}

function getCoordinateC(){
    let x1 = getAB()+1;
    let y1 = 1;
    let y2 = calculateMedian()+1;
    let BC = getBC();
    let temp1 = (BC*BC) - ((y2-y1)*(y2-y1));
    let temp2 = Math.sqrt(temp1);
    let temp3 = getAB() + 1;
    let ans = temp2 + temp3;
    return ans;
}

function getCoordinateD(){
    let t1 = getCoordinateC();
    let t2 = getCD();
    let ans = (t1-t2);
    return ans;
}
