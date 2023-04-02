import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

async function addJob(title, location, companyName, description) {
  try {
    const jobData = {
      title,
      location,
      companyName,
      description,
      accessability,
      // Add more fields as needed
    };

    const docRef = await addDoc(collection(db, "jobs"), jobData);
    console.log("Job added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding job:", error);
  }
}

export { addJob };
