export default function getStudentsByLocation(student, city) {
  return list.filter(student => student.location === city)
}
