const getListStudents = (arr) => {
   if (!Array.isArray) {
     return [];
   }
   return arr.map(value => value.id)
 }
export default getListStudents(arr)
