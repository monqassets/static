
//MODIFED FILE TO REMOVE ALERT FROM CDN
//ALERT("DONE");
//CLEARING CACHE
 function openSlideNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeSlideNav() {
        if(document.getElementById('lblMaterialName').innerHTML != "") {
            document.getElementById("cruve_div_id").style.display = "none";
            document.getElementById("myNav").style.backgroundColor = "rgba(0,0,0, 0.97)";
            document.getElementById("div_table_id").style.display = "block";
            document.getElementById('lblMaterialName').innerHTML = "";

            var canvas_curve = document.getElementById("curve_chart");
            canvas_curve.remove()

        }
        else {
            document.getElementById("myNav").style.width = "0%";
        }
    }


//   function drawChart(m1,p1=0,m2,p2=0,m3,p3=0,m4,p4=0,m5,p5=0,m6,p6=0,m7,p7=0,m8,p8=0,m9,p9=0,m10,p10=0,m11,p11=0,m12,p12=0,m13,p13=0,m14,p14=0,m15,p15=0,m16,p16=0,m17,p17=0,m18,p18=0,material = '') {
//     if(material != '')
//     {
//        document.getElementById('lblMaterialName').innerHTML = material;
//     }

//   material = '';
//         var data = new google.visualization.DataTable();
//         data.addColumn('string', 'Month');
//         data.addColumn('number', material);

//        if(p1>0)
//        {
//        data.addRows([
//           [month(m1) ,  p1]
//         ]);
//         }

//         if(p2>0)
//         {
//           data.addRows([
//           [month(m2),  p2]
//         ]);
//         }

//         if(p3>0)
//         {
//           data.addRows([
//           [month(m3),  p3]
//         ]);
//         }

//          if(p4>0)
//         {
//           data.addRows([
//           [month(m4),  p4]
//         ]);
//         }

//          if(p5>0)
//         {
//           data.addRows([
//           [month(m5),  p5]
//         ]);
//         }

//          if(p6>0)
//         {
//           data.addRows([
//           [month(m6),  p6]
//         ]);
//         }

//          if(p7>0)
//         {
//           data.addRows([
//           [month(m7),  p7]
//         ]);
//         }

//          if(p8>0)
//         {
//           data.addRows([
//           [month(m8),  p8]
//         ]);
//         }

//          if(p9>0)
//         {
//           data.addRows([
//           [month(m9),  p9]
//         ]);
//         }

//          if(p10>0)
//         {
//           data.addRows([
//           [month(m10),  p10]
//         ]);
//         }

//          if(p11>0)
//         {
//           data.addRows([
//           [month(m11),  p11]
//         ]);
//         }

//          if(p12>0)
//         {
//           data.addRows([
//           [month(m12),  p12]
//         ]);
//         }

//          if(p13>0)
//         {
//           data.addRows([
//           [month(m13),  p13]
//         ]);
//         }

//          if(p14>0)
//         {
//           data.addRows([
//           [month(m14),  p14]
//         ]);
//         }

//          if(p15>0)
//         {
//           data.addRows([
//           [month(m15),  p15]
//         ]);
//         }

//          if(p16>0)
//         {
//           data.addRows([
//           [month(m16),  p16]
//         ]);
//         }

//          if(p17>0)
//         {
//           data.addRows([
//           [month(m17),  p17]
//         ]);
//         }

//          if(p18>0)
//         {
//           data.addRows([
//           [month(m18),  p18]
//         ]);
//         }

////         var options = {
////          legend: 'none',
////          hAxis: { minValue: 0, maxValue: 9 },
////          curveType: 'function',
////          pointSize: 20,
////      };

//           var options = {
//            legend: 'none',
//         curveType: 'function',
//          pointSize: 7,
//          dataOpacity: 0.3,
//          colors: ['#2B7B8D'],
//           chart: {
//             title: ' ',
//             subtitle: ''
//           },
//           //width:350,
//           width: window.innerWidth * 0.95,
//           height: 400,
//           axes: {
//             x: {
//               0: {side: 'bottom'}
//             },
//           }

//         };

//        document.getElementById("cruve_div_id").style.display = "block";
//        document.getElementById("div_table_id").style.display = "none";
//     //document.getElementById("closeNav").style.display = "none";
//       //document.getElementById("closeCurve").style.display = "inline";
//       //document.getElementById("years").style.display = "block";
//       document.getElementById("myNav").style.backgroundColor = "white";
//         var chart = new google.charts.Line(document.getElementById('curve_chart'));

//         chart.draw(data, google.charts.Line.convertOptions(options));

//      }


function drawChart(m1, p1 = 0, m2, p2 = 0, m3, p3 = 0, m4, p4 = 0, m5, p5 = 0, m6, p6 = 0, m7, p7 = 0, m8, p8 = 0, m9, p9 = 0, m10, p10 = 0, m11, p11 = 0, m12, p12 = 0, m13, p13 = 0, m14, p14 = 0, m15, p15 = 0, m16, p16 = 0, m17, p17 = 0, m18, p18 = 0, material = '') {


    var canvas_curve = document.createElement("canvas");

    canvas_curve.width = "100%";
    canvas_curve.height = screen.height*0.4;
    canvas_curve.id = "curve_chart";


    document.getElementById("div_curve").appendChild(canvas_curve);

    if (material != '')
     {
        document.getElementById('lblMaterialName').innerHTML = material;
     }

    document.getElementById("cruve_div_id").style.display = "block";
    document.getElementById("div_table_id").style.display = "none";
    document.getElementById("myNav").style.backgroundColor = "white";

    //labels = [month(m1), month(m2), month(m3), month(m4), month(m5), month(m6), month(m7), month(m8), month(m9), month(m10), month(m11), month(m12), month(m13), month(m14), month(m15), month(m16), month(m17), month(m18)];
    labels = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18]
    data = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18];
    max = p1;
    if (p2 > max) { max = p2; }
    if (p3 > max) { max = p3; }
    if (p4 > max) { max = p4; }
    if (p5 > max) { max = p5; }
    if (p6 > max) { max = p6; }
    if (p7 > max) { max = p7; }
    if (p8 > max) { max = p8; }
    if (p9 > max) { max = p9; }
    if (p10 > max) { max = p10;}
    if (p11 > max) { max = p11; }
    if (p12 > max) { max = p12; }
    if (p13 > max) { max = p13; }
    if (p14 > max) { max = p14; }
    if (p15 > max) { max = p15; }
    if (p16 > max) { max = p16; }
    if (p17 > max) { max = p17; }
    if (p18 > max) { max = p18; }

    yticks = 10;

    //v = (p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12 + p13 + p14 + p15 + p16 + p17 + p18) / yticks;
   // max = parseInt(max + v);

    var ctx = document.getElementById("curve_chart");
    ctx.innerHTML != ""
    const actions = [

    ];
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "",
                lineTension: 0.3,
                backgroundColor: "rgba(35,132,159,0.02)",
                borderColor: "rgba(35,132,159,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(35,132,159,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "rgba(246,138,31,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: data,
            }],
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: true
                    },
                    ticks: {
                        maxTicksLimit: 18
                    }
                }],
                yAxes: [{
                    ticks: {
                        //min: 0,
                        //max: max,
                        //maxTicksLimit: yticks
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, .125)",
                    }
                }],
            },
            legend: {
                display: false
            }
        }
    });





}


   function openNav() {
     // document.getElementById("mySidenav").style.width = "40%";
     // document.getElementById("mySidenav").classList.add("col-lg-12");
     document.getElementById("mySidenav").style.display = "block";
     document.getElementById("mySidenav").style.height = "50%";
     document.getElementById("btnClose").style.display = "none";
}




   function month(m) {

        var mm = "";

        if(m==1)
        {
        mm = "Jan";
        }
        else if(m==2)
        {
        mm = "Feb";
        }
        else if(m==3)
        {
        mm = "Mar";
        }
        else if(m==4)
        {
        mm = "Apr";
        }
        else if(m==5)
        {
        mm = "May";
        }
        else if(m==6)
        {
        mm = "Jun";
        }
        else if(m==7)
        {
        mm = "Jul";
        }
        else if(m==8)
        {
        mm = "Aug";
        }
        else if(m==9)
        {
        mm = "Sep";
        }
        else if(m==10)
        {
        mm = "Oct";
        }
        else if(m==11)
        {
        mm = "Nov";
        }
        else if(m==12)
        {
        mm = "Dec";
        }
   return mm;
   }

   function closeNav() {
     document.getElementById("mySidenav").style.display = "none";
     document.getElementById("main").style.marginLeft= "0";

     document.getElementById("btnClose").style.display = "inline-block";
   }

   function closeCurve() {
     document.getElementById("div_table_id").style.display = "block";
    document.getElementById("closeNav").style.display = "block";
     document.getElementById("closeCurve").style.display = "none";
     document.getElementById("cruve_div_id").style.display = "none";
     document.getElementById("years").style.display = "none";
       document.getElementById("mySidenav").style.backgroundColor = "#171717";



   }
