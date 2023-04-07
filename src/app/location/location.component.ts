import { Component } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  locations = [
    {
    "id": 1,
    "name": "Gym",
    "completed" : false,
    "advertisers": [
        
        {
            "city_id": 1,
            "city": {
                "id": 1,
                "name": "Mumbai",completed:false
            },
            "area": [
                {
                    "area": "Challaghatta",
                    completed:false
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
                    "name": "Pune",completed:false
                },
                "area": [
                    {
                    "area": "Balewadi",completed:false
                    },
                    {
                    "area": "Kalyani Nagar",completed:false
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
                  "name": "Pune",completed:false
              },
              "area": [
                  {
                      "area": "Baner",completed:false
                  }
              ]
            },
            {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai",completed:false
              },
              "area": [
                  {
                      "area": "Koramangala",completed:false
                  }
              ]
            },
            {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi",completed:false
              },
              "area": [
                  {
                      "area": "Andheri East",completed:false
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
                  "name": "Pune",completed:false
              },
              "area": [
                  {
                      "area": "Baner",completed:false
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
                  "name": "Mumbai",completed:false
              },
              "area": [
                  {
                      "area": "Sanjay Nagar",completed:false
                  }
              ]
            },
            {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi",completed:false
              },
              "area": [
                  {
                      "area": "Andheri West",completed:false
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
                  "name": "Delhi",completed:false
              },
              "area": [
                  {
                      "area": "Andheri East",completed:false
                  }
              ]
            }
        ]
    }
]

  selectOne(event:any){
    if(event.checked){
        this.locations[0].advertisers.map((city,index)=>{
            if(event.source.id == index){
                this.locations[0].advertisers[event.source.id].city.completed = true;
            }
        })
    }
    else{
        this.locations[0].advertisers.map((city,index)=>{
            if(event.source.id == index){
                this.locations[0].advertisers[event.source.id].city.completed = false;
            }
        })
    }
}
}
