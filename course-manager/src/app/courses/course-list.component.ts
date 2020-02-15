import { Component, OnInit } from '@angular/core';
import { course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-List.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'September, 2, 2019',
                options: ''
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 59.99,
                code: 'LPS-8769',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 10, 2019',
                options: ''
            }
        ]
    }

}