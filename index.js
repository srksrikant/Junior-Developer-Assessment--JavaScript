
    let inputData = {
        "dimensions": [{
        "id": "dimension_re",
        "values": ["East", "East", "West", "SouthWest", "South","NorthEast"]
        }, {
        "id": "dimension_cnt",
        "values": ["London", "Italy", "Germany", "US", "Russia","India"]
        },{
        "id": "measure_sales",
        "values": [100, 156, 432, 462, 25,100]
        }, {
        "id": "measure_qty",
        "values": [85, 34, 153, 434, 52, 43]
        }, {
        "id": "measure_profit",
        "values": [123, 45, 421, 465, 451, 56]
        }],
        "meaures": [
            {
                "id": "measure_sales",
                "values": [100, 156, 432, 462, 25, 100]
            }, {
                "id": "measure_qty",
                "values": [85, 34, 153, 434, 52, 43]
            }, {
                "id": "measure_profit",
                "values": [123, 45, 421, 465, 451, 56]
            }
        ],
        "metadata": [ {
        "id": "measure_sales",
        "label": "Sales",
        "type":"number"
        }, {
        "id": "measure_qty",
        "label": "Quantity",
        "type":"number"
        }, {
        "id": "measure_profit",
        "label": "Profit",
        "type":"number"
        },{
        "id": "dimension_re",
        "label": "Region",
        "type":"string"
        }, {
        "id": "dimension_cnt",
        "label": "County",
        "type":"string"
        }]
    }
    
    let expectdData = [{
        "Region": "East",
        "County": "London",
        "Sales": 100,
        "Quantity": 85,
        "Profit": 123
        }, {
        "Region": "East",
        "County": "Italy",
        "Sales": 156,
        "Quantity": 34,
        "Profit": 45
        }, {
        "Region": "West",
        "County": "Germany",
        "Sales": 432,
        "Quantity": 153,
        "Profit": 421
        }, {
        "Region": "SouthWest",
        "County": "US",
        "Sales": 462,
        "Quantity": 434,
        "Profit": 465
        }, {
        "Region": "South",
        "County": "Russia",
        "Sales": 25,
        "Quantity": 52,
        "Profit": 451
        },
        {
        "Region": "NorthEast",
        "County": "India",
        "Sales": 100,
        "Quantity": 43,
        "Profit": 56
        }]
    
    const actualData = {};
    
    // write your code here
    function newResponse(inputData){
    var Region = inputData.dimensions[0]["values"];
    var Country= inputData.dimensions[1]["values"];
    var Sales= inputData.meaures[0]["values"];
    var Quantity = inputData.meaures[1]["values"];
    var Profit= inputData.meaures[2]["values"];
    var result =[];
    result = Region.map(function(e,i){
        return [e, Country[i], Sales[i], Quantity[i], Profit[i]];
    });
    console.log(result);
    }
    newResponse(inputData);
    
    
    