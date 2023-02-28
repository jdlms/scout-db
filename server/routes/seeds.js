import { faker } from "@faker-js/faker";



//
// faker seed data
//

const status = [
    "In development",
    "On submission",
    "In auction",
    "Sold",
    "Published",
    "International submission",
  ];
  
  const bool = [true, false];
  
  const material = ["None", "Sample pages", "Proposal", "Full ms.", "Partial ms."];
  
  // router.post("/", (req, res) => {
  //   for (var i = 0; i < 2; i++) {
  //     var seedData = new fakerModel({
  //       title: faker.music.songName(),
  //       authorFirstName: faker.name.firstName(),
  //       authorLastName: faker.name.lastName(),
  //       status: status[Math.floor(Math.random() * status.length)],
  //       confidential: bool[Math.floor(Math.random() * bool.length)],
  //       agency: faker.company.name(),
  //       publisher: faker.company.name(),
  //       editor: `${faker.name.firstName()} ${faker.name.lastName()}`,
  //       currentMaterial: material[Math.floor(Math.random() * material.length)],
  //       details: faker.random.words(150),
  //       internalNotes: faker.random.words(60),
  //     });
  //     seedData.save((err, data) => {
  //       if (err) {
  //         console.log("error occured", err);
  //       }
  //     });
  //   }
  //   res.redirect("/");
  // });
  
  router.post("/seed", async (req, res) => {
    try {
      console.log(req.body);
      const addAuthor = await Author.findOneAndUpdate(
        {
          lastName: faker.name.lastName(),
          firstName: faker.name.firstName(),
        },
        {},
        { upsert: true, new: true }
      );
  
      const addPublisher = await Publisher.findOneAndUpdate(
        {
          name: faker.company.name(),
        },
        {},
        { upsert: true, new: true }
      );
  
      const addAgency = await Agency.findOneAndUpdate(
        {
          name: faker.company.name(),
        },
        {},
        { upsert: true, new: true }
      );
  
      const addEditor = await Editor.findOneAndUpdate(
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        {},
        { upsert: true, new: true }
      );
  
      const confidentialValue = bool[Math.floor(Math.random() * bool.length)];
  
      const addBook = await Book.findOneAndUpdate(
        {
          title: faker.music.songName(),
          author: addAuthor._id,
          status: status[Math.floor(Math.random() * status.length)],
          confidential: confidentialValue,
          agency: addAgency._id,
          editor: addEditor._id,
          publisher: addPublisher._id,
          rightsSold: "",
          currentMaterial: material[Math.floor(Math.random() * material.length)],
          details: faker.random.words(150),
          internalNotes: faker.random.words(60),
          reported: false,
        },
        {},
        { upsert: true, new: true }
      );
  
      if (req.body.addToReport.length > 1) {
        const report = await Report.findOne({ title: req.body.addToReport });
        report.books.push(addBook._id);
        await report.save();
      }
  
      res.json({ message: "Title sucessfully added." });
      console.log("Title added!");
    } catch (error) {
      console.log("There was an error", error);
    }
  });
  
  // const defaultValues = {
  //   title: "",
  //   authorFirstName: "",
  //   authorLastName: "",
  //   agency: "",
  //   publisher: "",
  //   editor: "",
  //   details: "",
  //   rightsSold: "",
  //   currentMaterial: "",
  //   internalNotes: "",
  //   status: "",
  //   confidential: false,
  //   addToReport: "",
  //   reported: false,
  // };
  