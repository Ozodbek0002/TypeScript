type Student = {
  id: number;
  name: string;
  age: number;
  course: string;
  grade: number;
};

// Pick - kerakli fieldlarni tanlash uchun ishlatiladi

type NewStudent = Pick<Student, "name" | "age" | "id">;
// type NewStudent = {
//     name: string;
//     age: number;
//     id: number;
// }


// Omit - kerakli fieldlarni tanlamaslik uchun ishlatiladi

type StudentInfo = Omit<Student, "grade" | "course">;
// type StudentInfo = {
//     name: string;
//     age: number;
//     id: number;
// }


// Exclude - bir nechta tipni exclude qilish uchun ishlatiladi

type Status = "pending" | "active" | "inactive" | "banned";
type ActiveStatus = Exclude<Status, "pending" | "inactive" | "banned">;
// type ActiveStatus = "active"


// Extract - bir nechta tipni extract qilish uchun ishlatiladi
type Status1 = "pending" | "active" | "inactive" | "banned";
type ActiveStatus1 = Extract<Status, "active" | "banned">;
// type ActiveStatus1 = "active" | "banned"

