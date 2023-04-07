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
    advertisers: any;
    area: any;

// allComplete: boolean = false;
// area:boolean = false;


selectAll(event:any){
    if(event.checked){
        this.locations=this.locations.map((name)=>{
            name.completed = true
            return name;
        })
    }
    else{
        this.locations=this.locations.map((name)=>{
            name.completed = false
            return name;
        })
    }
}

selectAllParents(event:any){
    if(event.checked){
        this.advertisers=this.advertisers.map((area: { completed: boolean; })=>{
            area.completed = true
            return area;
        })
    }
    else{
        this.advertisers=this.advertisers.map((area: { completed: boolean; })=>{
            area.completed = false
            return area;
        })
    }
}

// selectAllChild(event:any){
//     if(event.checked){
//         this.locations=this.area.map((name: { completed: boolean; })=>{
//             name.completed = true
//             return name;
//         })
//     }
//     else{
//         this.locations=this.area.map((name: { completed: boolean; })=>{
//             name.completed = false
//             return name;
//         })
//     }
// }
//////////////////////////////////////////////////


}
