import { Course } from './course';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

    retrieveAll(): Course[] {
        return COURSES;
    }
 
    retrieveById(id: number): Course {
        return COURSES.find((courseIterator: Course)  => courseIterator.id === id);
    }

    save(course: Course): void {
        if(course.id) {
            const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
            COURSES[index] = course;
        }
    }

}

var COURSES: Course[] = [
    {
        id: 1,
        imageUrl: '/assets/images/forms.png',
        name: 'Angular: Forms',                
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'September, 2, 2019',
        options: 'Paid',
        description: 'Neste Curso os alunos aprenderão...'
    },
    {
        id: 2,
        imageUrl: '/assets/images/http.png',
        name: 'Angular: HTTP',                
        price: 59.99,
        code: 'LPS-8769',
        duration: 80,
        rating: 4,
        releaseDate: 'December, 10, 2019',
        options: 'Sale',
        description: 'Neste Curso os alunos aprenderão...'
    },
    {
        id: 3,
        imageUrl: '/assets/images/animations.png',
        name: 'Angular: Animation',                
        price: 59.99,
        code: 'ANM-2938',
        duration: 30,
        rating: 3,
        releaseDate: 'December, 10, 2019',
        options: 'Sale',
        description: 'Neste Curso os alunos aprenderão...'
    },
    {
        id: 4,
        imageUrl: '/assets/images/cli.png',
        name: 'Angular: CLI',                
        price: 59.99,
        code: 'LPS-5434',
        duration: 20,
        rating: 4.3,
        releaseDate: 'December, 10, 2019',
        options: 'Sale',
        description: 'Neste Curso os alunos aprenderão...'
    },
    {
        id: 5,
        imageUrl: '/assets/images/router.png',
        name: 'Angular: HTTP',                
        price: 0,
        code: 'RTR-8709',
        duration: 40,
        rating: 3.8,
        releaseDate: 'December, 10, 2019',
        options: 'Free',
        description: 'Neste Curso os alunos aprenderão...'
    }
]