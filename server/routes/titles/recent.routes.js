import { Router } from "express";
import { Book } from "../../models/Book.model.js";

const router = Router();

// #todo this search needs to be refinded and not simply get all books
// we'll try paginating

// router.get("/recent", async (req, res) => {
//   try {
//     const paginatedTitles = await Book.find({ _id: { $lt: MaxKey } })
//       .sort({ _id: -1 })
//       .limit(10);
//     res.json(paginatedTitles);
//     console.log(paginatedTitles);
//   } catch (error) {
//     console.log("There was an error", error);
//   }
// });

// function printStudents(startValue, nPerPage) {
//   let endValue = null;
//   db.students.find( { _id: { $lt: startValue } } )
//              .sort( { _id: -1 } )
//              .limit( nPerPage )
//              .forEach( student => {
//                print( student.name );
//                endValue = student._id;
//              } );

//   return endValue;
// }

router.get("/recent", async (req, res) => {
  try {
    const recentTitles = await Book.find();
    res.json(recentTitles);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
