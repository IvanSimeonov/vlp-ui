import { Component } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent {
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
  ];

  users: any = [
    {
      name: "Ivan Simeonov",
      role: "Student",
      profileImg: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
      enrolledCourses: 55,
      completedCourses: 13,
      status: "Active",
      email: "ivan@test.com",
    },
    {
      name: "Yordan Yordanov",
      role: "Teacher",
      profileImg: "https://xsgames.co/randomusers/assets/avatars/male/43.jpg",
      enrolledCourses: 23,
      completedCourses: 21,
      createdCourses: 12,
      status: "Active",
      email: "dancho@test.com",
    },
    {
      name: "Martin Dobrev",
      role: "Teacher",
      profileImg: "https://xsgames.co/randomusers/assets/avatars/male/41.jpg",
      enrolledCourses: 55,
      completedCourses: 43,
      createdCourses: 35,
      status: "Inactive",
      email: "marto@test.com",
    },
  ];
}
