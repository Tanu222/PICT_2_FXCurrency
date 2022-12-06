const {StatusCodes} = require('http-status-codes');
const {
    BadRequestError,
    NotFoundError,
} = require('../errors/index.js');
//const moment = require('moment');

const con = require('../connectdb');

exports.getMaxPrice = (req, res) => {
    let {country} = req.query;
    console.log(req.query);
    console.log(country);
    if (!country) {
        throw new BadRequestError("country not found");
    }
    let values;
    con.connect(function (err) {
        if (err) throw err;
        con.query(` select date, max(${country}) as max` +
            ` FROM currencyexchange;`,
            function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                values = result;
                res.status(StatusCodes.OK).json(values);
            });
    });
}

exports.getPricesQuaterly = (req, res) => {
    let {country, startDate, endDate} = req.query;

    if (!country) {
        throw new BadRequestError("country not found");
    }
    if (!startDate) {
        startDate = '2014-11-18'
    }
    if (!endDate) {
        endDate = '2016-11-18';
    }
    let values;
    con.connect(function (err) {
        if (err) throw err;
        con.query(`SELECT date, avg(${country}) as price\n ` +
            ` FROM hack.currencyexchange\n ` +
            ` WHERE date between '${startDate}' and '${endDate}'\n ` +
            ` GROUP BY QUARTER(Date); `, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            values = result;
            res.status(StatusCodes.OK).json(values);
        });

    });

}

exports.getPricesYearly = (req, res) => {
    let {country, startDate, endDate} = req.query;

    if (!country) {
        throw new BadRequestError("country not found");
    }
    if (!startDate) {
        startDate = '2014-11-18'
    }
    if (!endDate) {
        endDate = '2016-11-18';
    }
    let values;
    con.connect(function (err) {
        if (err) throw err;
        con.query(`SELECT date, avg(${country}) as price\n ` +
            ` FROM hack.currencyexchange\n ` +
            ` WHERE date between '${startDate}' and '${endDate}'\n ` +
            ` GROUP BY YEAR(Date); `, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            values = result;
            res.status(StatusCodes.OK).json(values);
        });

    });

}

exports.getPricesMonthly = (req, res) => {
    let {country, startDate, endDate} = req.query;
    
    if (!country) {
        throw new BadRequestError("country not found");
    }
    if (!startDate) {
        startDate = '2014-11-18'
    }
    if (!endDate) {
        endDate = '2016-11-18';
    }
    let values;
    con.connect(function (err) {
        if (err) throw err;
        con.query(`SELECT date, avg(${country}) as price\n ` +
            ` FROM hack.currencyexchange\n ` +
            ` WHERE date between '${startDate}' and '${endDate}'\n ` +
            ` GROUP BY MONTH(Date); `, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            values = result;
            res.status(StatusCodes.OK).json(values);
        });

    });

}

exports.getPricesWeekly = (req, res) => {
    let {country, startDate, endDate} = req.query;
    if (!country) {
        throw new BadRequestError("country not found");
    }
    if (!startDate) {
        startDate = '2014-11-18'
    }
    if (!endDate) {
        endDate = '2015-12-29';
    }
    let values;
    con.connect(function (err) {
        if (err) throw err;
        con.query(`SELECT  date, avg(${country}) as price ` +
            `FROM currencyexchange ` +
            `WHERE date between '${startDate}' and '${endDate}' ` +
            `GROUP BY CONCAT(YEAR(date), '/', WEEK(date)) ` +
            `ORDER BY YEAR(DATE) ASC, WEEK(date) ASC;`, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            values = result;
            res.status(StatusCodes.OK).json(values);
        });
    });

}

exports.getMinPrice = (req, res) => {
    let {country} = req.query;
    if (!country) {
        throw new BadRequestError("country not found");
    }
    let values;
    con.connect(function (err) {
        if (err) throw err;
        con.query(` select date, min(${country}) as min` +
            ` FROM currencyexchange;`,
            function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                values = result;
                res.status(StatusCodes.OK).json(values);
            });
    });

}

//module.exports = {getPricesWeekly,getMaxPrice,getMinPrice}




