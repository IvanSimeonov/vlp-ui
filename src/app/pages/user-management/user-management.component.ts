import { Component } from "@angular/core";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent {
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

  isHidden = false;

  toggleVisibilty() {
    this.isHidden = !this.isHidden;
  }
}
