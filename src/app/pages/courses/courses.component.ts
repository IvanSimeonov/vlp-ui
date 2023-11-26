import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { CourseControllerService } from "@ivannicksim/vlp";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  courses: any = [
    {
      title: "Java Beginners",
      author: "Ivan Simeonov",
      rating: 4,
      totalVotes: 120,
      hours: 25,
      totalLectures: 30,
      difficulty: "Beginner",
      image:
        "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
    },
    {
      title: "Java Advanced",
      author: "Ivan Simeonov",
      rating: 5,
      totalVotes: 293,
      hours: 38,
      totalLectures: 43,
      difficulty: "Intermediate",
      image:
        "https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    },
    {
      title: "Java Beginners",
      author: "Ivan Simeonov",
      rating: 4,
      totalVotes: 120,
      hours: 25,
      totalLectures: 30,
      difficulty: "Beginner",
      image:
        "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
    },
    {
      title: "Java Advanced",
      author: "Ivan Simeonov",
      rating: 5,
      totalVotes: 293,
      hours: 38,
      totalLectures: 43,
      difficulty: "Intermediate",
      image:
        "https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    },
    {
      title: "Java Beginners",
      author: "Ivan Simeonov",
      rating: 4,
      totalVotes: 120,
      hours: 25,
      totalLectures: 30,
      difficulty: "Beginner",
      image:
        "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
    },
    {
      title: "Java Advanced",
      author: "Ivan Simeonov",
      rating: 5,
      totalVotes: 293,
      hours: 38,
      totalLectures: 43,
      difficulty: "Intermediate",
      image:
        "https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    },
    {
      title: "Java Beginners",
      author: "Ivan Simeonov",
      rating: 4,
      totalVotes: 120,
      hours: 25,
      totalLectures: 30,
      difficulty: "Beginner",
      image:
        "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
    },
    {
      title: "Java Advanced",
      author: "Ivan Simeonov",
      rating: 5,
      totalVotes: 293,
      hours: 38,
      totalLectures: 43,
      difficulty: "Intermediate",
      image:
        "https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    },
    {
      title: "Java Beginners",
      author: "Ivan Simeonov",
      rating: 4,
      totalVotes: 120,
      hours: 25,
      totalLectures: 30,
      difficulty: "Beginner",
      image:
        "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
    },
    {
      title: "Java Advanced",
      author: "Ivan Simeonov",
      rating: 5,
      totalVotes: 293,
      hours: 38,
      totalLectures: 43,
      difficulty: "Intermediate",
      image:
        "https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    },
    {
      title: "Java Beginners",
      author: "Ivan Simeonov",
      rating: 4,
      totalVotes: 120,
      hours: 25,
      totalLectures: 30,
      difficulty: "Beginner",
      image:
        "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
    },
    {
      title: "Java Advanced",
      author: "Ivan Simeonov",
      rating: 5,
      totalVotes: 293,
      hours: 38,
      totalLectures: 43,
      difficulty: "Intermediate",
      image:
        "https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    },
  ];
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [10, 25, 50, 100];
  length = 100;
  pageEvent!: PageEvent;

  constructor(private courseService: CourseControllerService) {}

  ngOnInit(): void {
    this.courseService.getCourseById(1).subscribe((data) => {
      console.log(data);
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
