import { Component } from '@angular/core';


@Component({
    selector: 'app-checkbox-task',
    templateUrl: './checkbox-task.component.html',
    styleUrls: ['./checkbox-task.component.css']
})
export class CheckboxTaskComponent {

    locations = [
    {
    "completed":false,
    "id": 1,
    "name": "Gym",
    "advertisers": [
        {
            "city_id": 1,
            "city": {
                "id": 1,
                "name": "Mumbai"
            },
            "area": [
                {
                    "area": "Chembur"
                }
            ]
            },
            {
                "city_id": 2,
                "city": {
                    "id": 2,
                    "name": "Delhi"
                },
                "area": [
                    {
                        "area": "Goregaon West"
                    }
                ]
            },
        ]
    },
    {
        "completed":false,
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

]
    l: any;
    c: any;
    a: any;

selectAll(event:any,asd: any){
    console.log(asd);
}
Completed: boolean = false;

updateAllComplete() {
    this.Completed = this.l.c != null && this.l.c.every((l:any) => l.completed);
  }

  someComplete(): boolean {
    if (this.l == null) {
      return false;
    }
    return this.l.c.filter((l:any) => l.completed).length > 0 && !this.Completed;
  }

  setAll(completed: boolean) {
    this.Completed = completed;
    if (this.a == null) {
      return;
    }
    this.l.c.forEach((l:any) => (l.completed = completed));
  }




}
