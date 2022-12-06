import React from "react";
import {Chart, CategoryScale,LineElement,LinearScale, PointElement} from 'chart.js'
import { Line} from "react-chartjs-2";
Chart.register(CategoryScale,LineElement,LinearScale,PointElement);


const ShowChart = ({priceData})=> {
    const data = {
        labels: [],
        datasets: [
            {
                label: "First dataset",
                data: [],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    console.log(priceData);
    if(priceData.length!==0){
       data.labels = priceData.map((data)=>{
            return data.date;
        })

        data.datasets[0].data = priceData.map((data)=>{
           return  data.price;
        })
    }
    console.log(data);
    return (
        <div className="Chart">
            <Line data={data} />
        </div>
    );
}

export default ShowChart;