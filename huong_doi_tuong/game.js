function render(row,colume){
    let resume = "<table cellpadding='0' cellspacing='0'>";
    for (let i=0;i<row;i++){
        resume +="<tr>";
        for (let j=0;j<colume;j++){
            resume +="<td>";
            resume += "<button id='but"+i+"_"+j+"'></button>"
            resume +="</td>";
        }
        resume +="</tr>";
    }
    resume +="</table>";
    return resume;
}
function playgame(){
    let rows=document.getElementById("row").value;
    let columes=document.getElementById("colume").value
    document.getElementById("main").innerHTML=render(rows,columes)

}
console.log(render(5,2));