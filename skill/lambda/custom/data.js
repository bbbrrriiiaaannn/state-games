
module.exports = {
    'getGames' : function(game) {
        // console.log(`*** in data.getGames, game:\n${JSON.stringify(game)}`);

        if(game) {
            return gamelist.filter((item) => {
                return item.name === game;
            });
        } else {
            return gamelist;
        }

    },

    'getData' : function() {

        return stateData;
    }

};

const gamelist = [
    {
        'name':'coast to coast',
        'rules': [],
        'startsOn': 'state.Ocean=="Atlantic"',
        'endsWhen': 'state.Ocean=="Pacific"',
        'lowScoreBetter':true,
        'intro':'Start by naming an Atlantic Ocean state.  Continue naming states until you get to the Pacific.',
        'author':'robm'
    },
    {
        'name':'bigger pop',
        'rules': [
            'state.Population > lastState.Population'
           // , 'state.Population > 7000000'
        ],
        'startsOn': null,
        'endsWhen': null,
        'lowScoreBetter':false,
        'intro':'Start by naming any state.  Continue naming states, each must have a larger population than the last.',
        'author':'robm'
    }

];

const stateData = [
    {
        "Id": 1,
        "Name": "Alabama",
        "Borders": "9,24,10,42",
        "Abbreviation": "AL",
        "Capital": "Montgomery",
        "Largest City": "Birmingham",
        "Statehood": "12/14/1819",
        "Population": 4833722,
        "Area": 52420,
        "House Seats": 7,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 2,
        "Name": "Alaska",
        "Borders": "",
        "Abbreviation": "AK",
        "Capital": "Juneau",
        "Largest City": "Anchorage",
        "Statehood": "1/3/59",
        "Population": 738432,
        "Area": 663268,
        "House Seats": 1,
        "Ocean": "Pacific",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 3,
        "Name": "Arizona",
        "Borders": "5,28,44,31",
        "Abbreviation": "AZ",
        "Capital": "Phoenix",
        "Largest City": "Phoenix",
        "Statehood": "2/14/12",
        "Population": 6626624,
        "Area": 113990,
        "House Seats": 9,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Mexico"
    },
    {
        "Id": 4,
        "Name": "Arkansas",
        "Borders": "18,43,36,25,42,24",
        "Abbreviation": "AR",
        "Capital": "Little Rock",
        "Largest City": "Little Rock",
        "Statehood": "6/15/1836",
        "Population": 2959373,
        "Area": 53179,
        "House Seats": 4,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 5,
        "Name": "California",
        "Borders": "3,28,37",
        "Abbreviation": "CA",
        "Capital": "Sacramento",
        "Largest City": "Los Angeles",
        "Statehood": "9/9/1850",
        "Population": 38332521,
        "Area": 163695,
        "House Seats": 53,
        "Ocean": "Pacific",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Mexico"
    },
    {
        "Id": 6,
        "Name": "Colorado",
        "Borders": "31,44,50,27,16,36",
        "Abbreviation": "CO",
        "Capital": "Denver",
        "Largest City": "Denver",
        "Statehood": "8/1/1876",
        "Population": 5268367,
        "Area": 104094,
        "House Seats": 7,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "Rocky",
        "CountryBorder": ""
    },
    {
        "Id": 7,
        "Name": "Connecticut",
        "Borders": "39,21,32",
        "Abbreviation": "CT",
        "Capital": "Hartford",
        "Largest City": "Bridgeport",
        "Statehood": "1/9/1788",
        "Population": 3596080,
        "Area": 5543,
        "House Seats": 5,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 8,
        "Name": "Delaware",
        "Borders": "20,38,30",
        "Abbreviation": "DE",
        "Capital": "Dover",
        "Largest City": "Wilmington",
        "Statehood": "12/7/1787",
        "Population": 925749,
        "Area": 2489,
        "House Seats": 1,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 9,
        "Name": "Florida",
        "Borders": "1,10",
        "Abbreviation": "FL",
        "Capital": "Tallahassee",
        "Largest City": "Jacksonville",
        "Statehood": "3/3/1845",
        "Population": 19552860,
        "Area": 65758,
        "House Seats": 27,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 10,
        "Name": "Georgia",
        "Borders": "9,1,40,33,42",
        "Abbreviation": "GA",
        "Capital": "Atlanta",
        "Largest City": "Atlanta",
        "Statehood": "1/2/1788",
        "Population": 9992167,
        "Area": 59425,
        "House Seats": 14,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 11,
        "Name": "Hawaii",
        "Borders": "",
        "Abbreviation": "HI",
        "Capital": "Honolulu",
        "Largest City": "Honolulu",
        "Statehood": "8/21/59",
        "Population": 1431603,
        "Area": 10931,
        "House Seats": 2,
        "Ocean": "Pacific",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 12,
        "Name": "Idaho",
        "Borders": "47,37,28,44,50,26",
        "Abbreviation": "ID",
        "Capital": "Boise",
        "Largest City": "Boise",
        "Statehood": "7/3/1890",
        "Population": 1612136,
        "Area": 83569,
        "House Seats": 2,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "Rocky",
        "CountryBorder": "Canada"
    },
    {
        "Id": 13,
        "Name": "Illinois",
        "Borders": "49,15,25,17,14",
        "Abbreviation": "IL",
        "Capital": "Springfield",
        "Largest City": "Chicago",
        "Statehood": "12/3/1818",
        "Population": 12882135,
        "Area": 57914,
        "House Seats": 18,
        "Ocean": "",
        "Great Lakes": "Michigan",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 14,
        "Name": "Indiana",
        "Borders": "13,17,35,22",
        "Abbreviation": "IN",
        "Capital": "Indianapolis",
        "Largest City": "Indianapolis",
        "Statehood": "11/11/1816",
        "Population": 6570902,
        "Area": 36420,
        "House Seats": 9,
        "Ocean": "",
        "Great Lakes": "Michigan",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 15,
        "Name": "Iowa",
        "Borders": "23,41,27,25,13,49",
        "Abbreviation": "IA",
        "Capital": "Des Moines",
        "Largest City": "Des Moines",
        "Statehood": "12/28/1846",
        "Population": 3090416,
        "Area": 56273,
        "House Seats": 4,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 16,
        "Name": "Kansas",
        "Borders": "36,6,27,25",
        "Abbreviation": "KS",
        "Capital": "Topeka",
        "Largest City": "Wichita",
        "Statehood": "1/29/1861",
        "Population": 2893957,
        "Area": 82278,
        "House Seats": 4,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 17,
        "Name": "Kentucky",
        "Borders": "42,25,13,14,35,48,46",
        "Abbreviation": "KY",
        "Capital": "Frankfort",
        "Largest City": "Louisville",
        "Statehood": "6/1/1792",
        "Population": 4395295,
        "Area": 40408,
        "House Seats": 6,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 18,
        "Name": "Louisiana",
        "Borders": "43,4,24",
        "Abbreviation": "LA",
        "Capital": "Baton Rouge",
        "Largest City": "New Orleans",
        "Statehood": "4/30/1812",
        "Population": 4625470,
        "Area": 52378,
        "House Seats": 6,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 19,
        "Name": "Maine",
        "Borders": "29",
        "Abbreviation": "ME",
        "Capital": "Augusta",
        "Largest City": "Portland",
        "Statehood": "3/15/1820",
        "Population": 1328302,
        "Area": 35380,
        "House Seats": 2,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 20,
        "Name": "Maryland",
        "Borders": "48,46,38,8",
        "Abbreviation": "MD",
        "Capital": "Annapolis",
        "Largest City": "Baltimore",
        "Statehood": "4/28/1788",
        "Population": 5928814,
        "Area": 12406,
        "House Seats": 8,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 21,
        "Name": "Massachusetts",
        "Borders": "29,45,32,7,39",
        "Abbreviation": "MA",
        "Capital": "Boston",
        "Largest City": "Boston",
        "Statehood": "2/6/1788",
        "Population": 6692824,
        "Area": 10554,
        "House Seats": 9,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 22,
        "Name": "Michigan",
        "Borders": "14,35,49",
        "Abbreviation": "MI",
        "Capital": "Lansing",
        "Largest City": "Detroit",
        "Statehood": "1/26/1837",
        "Population": 9895622,
        "Area": 96714,
        "House Seats": 14,
        "Ocean": "",
        "Great Lakes": "Michigan,Superior,Huron,Erie",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 23,
        "Name": "Minnesota",
        "Borders": "34,41,15,49",
        "Abbreviation": "MN",
        "Capital": "Saint Paul",
        "Largest City": "Minneapolis",
        "Statehood": "5/11/1858",
        "Population": 5420380,
        "Area": 86936,
        "House Seats": 8,
        "Ocean": "",
        "Great Lakes": "Superior",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 24,
        "Name": "Mississippi",
        "Borders": "18,4,42,1",
        "Abbreviation": "MS",
        "Capital": "Jackson",
        "Largest City": "Jackson",
        "Statehood": "12/10/1817",
        "Population": 2991207,
        "Area": 48432,
        "House Seats": 4,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 25,
        "Name": "Missouri",
        "Borders": "16,27,15,13,17,42,4,36",
        "Abbreviation": "MO",
        "Capital": "Jefferson City",
        "Largest City": "Kansas City",
        "Statehood": "8/10/1821",
        "Population": 6021988,
        "Area": 69707,
        "House Seats": 8,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 26,
        "Name": "Montana",
        "Borders": "12,50,34,41",
        "Abbreviation": "MT",
        "Capital": "Helena",
        "Largest City": "Billings",
        "Statehood": "11/8/1889",
        "Population": 1015165,
        "Area": 147040,
        "House Seats": 1,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "Rocky",
        "CountryBorder": "Canada"
    },
    {
        "Id": 27,
        "Name": "Nebraska",
        "Borders": "6,50,41,15,25,16",
        "Abbreviation": "NE",
        "Capital": "Lincoln",
        "Largest City": "Omaha",
        "Statehood": "3/1/1867",
        "Population": 1868516,
        "Area": 77348,
        "House Seats": 3,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 28,
        "Name": "Nevada",
        "Borders": "5,3,44,37,12",
        "Abbreviation": "NV",
        "Capital": "Carson City",
        "Largest City": "Las Vegas",
        "Statehood": "12/31/1864",
        "Population": 2790136,
        "Area": 110572,
        "House Seats": 4,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 29,
        "Name": "New Hampshire",
        "Borders": "19,45,21",
        "Abbreviation": "NH",
        "Capital": "Concord",
        "Largest City": "Manchester",
        "Statehood": "6/21/1788",
        "Population": 1323459,
        "Area": 9349,
        "House Seats": 2,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 30,
        "Name": "New Jersey",
        "Borders": "32,38,8",
        "Abbreviation": "NJ",
        "Capital": "Trenton",
        "Largest City": "Newark",
        "Statehood": "12/18/1787",
        "Population": 8899339,
        "Area": 8723,
        "House Seats": 12,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 31,
        "Name": "New Mexico",
        "Borders": "3,6,36,43",
        "Abbreviation": "NM",
        "Capital": "Santa Fe",
        "Largest City": "Albuquerque",
        "Statehood": "1/6/12",
        "Population": 2085287,
        "Area": 121590,
        "House Seats": 3,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "Rocky",
        "CountryBorder": "Mexico"
    },
    {
        "Id": 32,
        "Name": "New York",
        "Borders": "45,21,7,30,38",
        "Abbreviation": "NY",
        "Capital": "Albany",
        "Largest City": "New York",
        "Statehood": "7/26/1788",
        "Population": 19651127,
        "Area": 54555,
        "House Seats": 27,
        "Ocean": "Atlantic",
        "Great Lakes": "Erie, Ontario",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 33,
        "Name": "North Carolina",
        "Borders": "40,10,42,46",
        "Abbreviation": "NC",
        "Capital": "Raleigh",
        "Largest City": "Charlotte",
        "Statehood": "11/21/1789",
        "Population": 9848060,
        "Area": 53819,
        "House Seats": 13,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 34,
        "Name": "North Dakota",
        "Borders": "26,41,23",
        "Abbreviation": "ND",
        "Capital": "Bismarck",
        "Largest City": "Fargo",
        "Statehood": "11/2/1889",
        "Population": 723393,
        "Area": 70698,
        "House Seats": 1,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 35,
        "Name": "Ohio",
        "Borders": "22,14,17,48,38",
        "Abbreviation": "OH",
        "Capital": "Columbus",
        "Largest City": "Columbus",
        "Statehood": "3/1/1803",
        "Population": 11570808,
        "Area": 44826,
        "House Seats": 16,
        "Ocean": "",
        "Great Lakes": "Erie",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 36,
        "Name": "Oklahoma",
        "Borders": "43,31,6,16,25,4",
        "Abbreviation": "OK",
        "Capital": "Oklahoma City",
        "Largest City": "Oklahoma City",
        "Statehood": "11/16/07",
        "Population": 3850568,
        "Area": 69899,
        "House Seats": 5,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 37,
        "Name": "Oregon",
        "Borders": "5,28,12,47",
        "Abbreviation": "OR",
        "Capital": "Salem",
        "Largest City": "Portland",
        "Statehood": "2/14/1859",
        "Population": 3930065,
        "Area": 98379,
        "House Seats": 5,
        "Ocean": "Pacific",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 38,
        "Name": "Pennsylvania",
        "Borders": "32,30,8,20,48,35",
        "Abbreviation": "PA",
        "Capital": "Harrisburg",
        "Largest City": "Philadelphia",
        "Statehood": "12/12/1787",
        "Population": 12773801,
        "Area": 46054,
        "House Seats": 18,
        "Ocean": "",
        "Great Lakes": "Erie",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 39,
        "Name": "Rhode Island",
        "Borders": "7,21",
        "Abbreviation": "RI",
        "Capital": "Providence",
        "Largest City": "Providence",
        "Statehood": "5/29/1790",
        "Population": 1051511,
        "Area": 1545,
        "House Seats": 2,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 40,
        "Name": "South Carolina",
        "Borders": "33,10",
        "Abbreviation": "SC",
        "Capital": "Columbia",
        "Largest City": "Columbia",
        "Statehood": "5/23/1788",
        "Population": 4774839,
        "Area": 32020,
        "House Seats": 7,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 41,
        "Name": "South Dakota",
        "Borders": "26,50,27,15,23,34",
        "Abbreviation": "SD",
        "Capital": "Pierre",
        "Largest City": "Sioux Falls",
        "Statehood": "11/2/1889",
        "Population": 844877,
        "Area": 77116,
        "House Seats": 1,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 42,
        "Name": "Tennessee",
        "Borders": "10,1,24,4,25,17,46,33",
        "Abbreviation": "TN",
        "Capital": "Nashville",
        "Largest City": "Memphis",
        "Statehood": "6/1/1796",
        "Population": 6495978,
        "Area": 42144,
        "House Seats": 9,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 43,
        "Name": "Texas",
        "Borders": "31,36,4,18",
        "Abbreviation": "TX",
        "Capital": "Austin",
        "Largest City": "Houston",
        "Statehood": "12/29/1845",
        "Population": 26448193,
        "Area": 268596,
        "House Seats": 36,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Mexico"
    },
    {
        "Id": 44,
        "Name": "Utah",
        "Borders": "3,28,12,50,6",
        "Abbreviation": "UT",
        "Capital": "Salt Lake City",
        "Largest City": "Salt Lake City",
        "Statehood": "1/4/1896",
        "Population": 2900872,
        "Area": 84897,
        "House Seats": 4,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "Rocky",
        "CountryBorder": ""
    },
    {
        "Id": 45,
        "Name": "Vermont",
        "Borders": "32,21,29",
        "Abbreviation": "VT",
        "Capital": "Montpelier",
        "Largest City": "Burlington",
        "Statehood": "3/4/1791",
        "Population": 626630,
        "Area": 9616,
        "House Seats": 1,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 46,
        "Name": "Virginia",
        "Borders": "33,42,17,48,20",
        "Abbreviation": "VA",
        "Capital": "Richmond",
        "Largest City": "Virginia Beach",
        "Statehood": "6/25/1788",
        "Population": 8260405,
        "Area": 42775,
        "House Seats": 11,
        "Ocean": "Atlantic",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 47,
        "Name": "Washington",
        "Borders": "37,12",
        "Abbreviation": "WA",
        "Capital": "Olympia",
        "Largest City": "Seattle",
        "Statehood": "11/11/1889",
        "Population": 6971406,
        "Area": 71298,
        "House Seats": 10,
        "Ocean": "Pacific",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": "Canada"
    },
    {
        "Id": 48,
        "Name": "West Virginia",
        "Borders": "38,35,17,46,20",
        "Abbreviation": "WV",
        "Capital": "Charleston",
        "Largest City": "Charleston",
        "Statehood": "6/20/1863",
        "Population": 1854304,
        "Area": 24230,
        "House Seats": 3,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 49,
        "Name": "Wisconsin",
        "Borders": "22,23,15,13",
        "Abbreviation": "WI",
        "Capital": "Madison",
        "Largest City": "Milwaukee",
        "Statehood": "5/29/1848",
        "Population": 5742713,
        "Area": 65496,
        "House Seats": 8,
        "Ocean": "",
        "Great Lakes": "Superior,Michigan",
        "Mississippi": "yes",
        "Mountain": "",
        "CountryBorder": ""
    },
    {
        "Id": 50,
        "Name": "Wyoming",
        "Borders": "26,12,44,6,27,41",
        "Abbreviation": "WY",
        "Capital": "Cheyenne",
        "Largest City": "Cheyenne",
        "Statehood": "7/10/1890",
        "Population": 582658,
        "Area": 97813,
        "House Seats": 1,
        "Ocean": "",
        "Great Lakes": "",
        "Mississippi": "",
        "Mountain": "Rocky",
        "CountryBorder": ""
    }
];