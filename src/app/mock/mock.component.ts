import { Component } from '@angular/core';

export interface locations{
    completed : boolean;
}

@Component({
selector: 'app-mock',
templateUrl: './mock.component.html',
styleUrls: ['./mock.component.css']
})


export class MockComponent {

    locations = [
    {
    "id": 1,
    "completed" : false,
    "name": "Gym",
    "advertisers": [
        {
            "city_id": 1,
            "city": {
                "id": 1,
                "name": "Mumbai",completed:false
            },
            "area": [
                {
                    "area": "Challaghatta",completed:false
                }
            ]
            },
            {
                "city_id": 2,
                "city": {
                    "id": 2,
                    "name": "Delhi",completed:false
                },
                "area": [
                    {
                        "area": "Goregaon West",completed:false
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Corporate Park",
        "advertisers": [
            {
                "city_id": 1,
                "city": {
                    "id": 1,
                    "name": "Pune"
                },
                "area": [
                    {
                    "area": "Balewadi"
                    },
                    {
                    "area": "Kalyani Nagar"
                    }
                ]
            },
            {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Shivaji Nagar"
                  }
              ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Co-Working",
        "advertisers": [
            {
              "city_id": 1,
              "city": {
                  "id": 1,
                  "name": "Pune"
              },
              "area": [
                  {
                      "area": "Baner"
                  }
              ]
            },
            {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Koramangala"
                  }
              ]
            },
            {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi"
              },
              "area": [
                  {
                      "area": "Andheri East"
                  }
              ]
            },
            {
              "city_id": 4,
              "city": {
                  "id": 4,
                  "name": "Bengaluru"
              },
              "area": [
                  {
                      "area": "Connaught Place"
                  },
                  {
                      "area": "Saket"
                  }
              ]
            }
        ]
    },
    {
        "id": 4,
        "name": "Colleges",
        "advertisers": [
            {
              "city_id": 1,
              "city": {
                  "id": 1,
                  "name": "Pune"
              },
              "area": [
                  {
                      "area": "Baner"
                  }
              ]
            },
            {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Ashok Nagar"
                  }
              ]
            }
        ]
    },
    {
        "id": 5,
        "name": "Restaurants",
        "advertisers": [
            {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Sanjay Nagar"
                  }
              ]
            },
            {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi"
              },
              "area": [
                  {
                      "area": "Andheri West"
                  }
              ]
            }
        ]
    },
    {
        "id": 6,
        "name": "Offices",
        "advertisers": [
            {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi"
              },
              "area": [
                  {
                      "area": "Andheri East"
                  }
              ]
            }
        ]
    }
]

// allComplete: boolean = false;
// area:boolean = false;

selectAll(event:any){
    if(event.checked){
        this.locations=this.locations.map((locations)=>{
            locations.completed = true
            return locations;
        })
    }
    else{
        this.locations=this.locations.map((locations)=>{
            locations.completed = false
            return locations;
        })
    }
}
}
