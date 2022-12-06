import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DataBox from './components/DataBox'
import Box from '@mui/material/Box';
import './App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ShowChart from "./components/showChart";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const data = {
    labels: [],
    datasets: [
        {
            label: "First dataset",
            data: [10,20,30],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        }
    ]
};

export default function App() {

    const [country, setCountry] = React.useState('INR');
    const [min,setMin] = React.useState({});
    const [max,setMax] = React.useState({});
    const [duration,setDuration] = React.useState('weekly');
    const [priceData, setPriceData] = React.useState([]);
    const [startDate, setStartDate] = React.useState('2015-08-15');
    const [endDate, setEndDate] = React.useState('2018-08-18');

    React.useEffect(()=>{
            requestData();
        },[country,duration,startDate,endDate]
    )



    const requestData = () =>{
        axios.get(`http://127.0.0.1:3001/api/dashboard/max?country=${country}`)
            .then(res => {
                console.log(res.data[0]);
                setMax(res.data[0]);
            });
        axios.get(`http://127.0.0.1:3001/api/dashboard/min?country=${country}`)
            .then(res => {
                console.log(res.data[0]);
                setMin(res.data[0]);
            });
        axios.get(`http://127.0.0.1:3001/api/dashboard/${duration}?country=${country}&startDate=${startDate}&endDate=${endDate}`)
            .then(res => {
                console.log(res.data);
                setPriceData(res.data);
            });
    }

    const handleChange = (e) => {
        //console.log(e.target.value);
        let country = e.target.value;
        setCountry(country);
    };
    const handleDurationChange = (e) => {
        //console.log(e.target.value);
        let duration = e.target.value;
        setDuration(duration);
    };

    return (
        <div className="App">
            <h1 className="heading">
                <span>D</span>
                <span>A</span>
                <span>S</span>
                <span>H</span>
                <span>B</span>
                <span>O</span>
                <span>A</span>
                <span>R</span>
                <span>D</span>
            </h1>
            <div className='row m-3'>
                <div className='col-3'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            //inputFormat="dd.MM.yyyy"
                            onChange={(newValue) => {
                                setStartDate(newValue.$y+"/"+newValue.$M+"/"+newValue.$D);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='col-3'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            //inputFormat="dd.MM.yyyy"
                            onChange={(newValue) => {
                                setEndDate(newValue.$y+"/"+newValue.$M+"/"+newValue.$D);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className='row mx-3'>
            <FormControl className='col-3' sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label" >Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Country"
                    onChange={handleChange}
                >
                    <MenuItem value={'INR'}>INR</MenuItem>
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'GBP'}>GBP</MenuItem>
                    <MenuItem value={'EUR'}>EUR</MenuItem>
                    <MenuItem value={'DZD'}>DZD</MenuItem>
                    <MenuItem value={'AUD'}>AUD</MenuItem>
                    <MenuItem value={'BHD'}>BHD</MenuItem>
                    <MenuItem value={'VEF'}>VEF</MenuItem>
                    <MenuItem value={'BWP'}>BWP</MenuItem>
                    <MenuItem value={'BRL'}>BRL</MenuItem>
                    <MenuItem value={'BND'}>BND</MenuItem>
                    <MenuItem value={'CAD'}>CAD</MenuItem>
                    <MenuItem value={'CLP'}>CLP</MenuItem>
                    <MenuItem value={'CNY'}>CNY</MenuItem>
                    <MenuItem value={'COP'}>COP</MenuItem>
                    <MenuItem value={'CZK'}>CZK</MenuItem>
                    <MenuItem value={'DKK'}>DKK</MenuItem>
                    <MenuItem value={'HUF'}>HUF</MenuItem>
                    <MenuItem value={'ISK'}>ISK</MenuItem>
                    <MenuItem value={'IDR'}>IDR</MenuItem>
                    <MenuItem value={'IRR'}>IRR</MenuItem>
                    <MenuItem value={'ILS'}>ILS</MenuItem>
                    <MenuItem value={'JPY'}>JPY</MenuItem>
                    <MenuItem value={'KZT'}>KZT</MenuItem>
                    <MenuItem value={'KRW'}>KRW</MenuItem>
                    <MenuItem value={'KWD'}>KWD</MenuItem>
                    <MenuItem value={'LYD'}>LYD</MenuItem>
                    <MenuItem value={'MYR'}>MYR</MenuItem>
                    <MenuItem value={'MUR'}>MUR</MenuItem>
                    <MenuItem value={'MXN'}>MXN</MenuItem>
                    <MenuItem value={'NPR'}>NPR</MenuItem>
                    <MenuItem value={'NZD'}>NZD</MenuItem>
                    <MenuItem value={'NOK'}>NOK</MenuItem>
                    <MenuItem value={'OMR'}>OMR</MenuItem>
                    <MenuItem value={'PKR'}>PKR</MenuItem>
                    <MenuItem value={'PEN'}>PEN</MenuItem>
                    <MenuItem value={'PHP'}>PHP</MenuItem>
                    <MenuItem value={'PLN'}>PLN</MenuItem>
                    <MenuItem value={'QAR'}>QAR</MenuItem>
                    <MenuItem value={'RUB'}>RUB</MenuItem>
                    <MenuItem value={'SAR'}>SAR</MenuItem>
                    <MenuItem value={'SGD'}>SGD</MenuItem>
                    <MenuItem value={'ZAR'}>ZAR</MenuItem>
                    <MenuItem value={'LKR'}>LKR</MenuItem>
                    <MenuItem value={'SEK'}>SEK</MenuItem>
                    <MenuItem value={'CHF'}>CHF</MenuItem>
                    <MenuItem value={'THB'}>THB</MenuItem>
                    <MenuItem value={'TTD'}>TTD</MenuItem>
                    <MenuItem value={'TND'}>TND</MenuItem>
                    <MenuItem value={'AED'}>AED</MenuItem>
                    <MenuItem value={'UYU'}>UYU</MenuItem>
                    <MenuItem value={'VES'}>VES</MenuItem>
                </Select>
            </FormControl>
            <div className='col-3 my-2'>
                <ButtonGroup variant="outlined" aria-label="outlined button group" className=''>
                    <Button onClick={handleDurationChange} value='weekly'>Week</Button>
                    <Button onClick={handleDurationChange} value='monthly'>Month</Button>
                    <Button onClick={handleDurationChange} value='quarterly'>Quarter</Button>
                    <Button onClick={handleDurationChange} value='yearly'>Year</Button>
                </ButtonGroup>
            </div>
            </div>

            <div className='row'>
            <DataBox title='All Time High' price={max.max} color='#ffab2d'/>
            <DataBox title='All Time Low' price={min.min} color='#00cccd'/>
            </div>
            <div className='col-7 mx-3'>
            <ShowChart priceData={priceData}/>
            </div>


        </div>
    );
}
