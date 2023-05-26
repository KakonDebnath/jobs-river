import { toast } from "react-hot-toast";

const addToDb = (id) => {
  let storedJob = {};

  const isStoredJob = JSON.parse(localStorage.getItem("stored-job"));
  if (isStoredJob) {
    storedJob = isStoredJob;
  }
  const jobId = storedJob[id];
  if (jobId) {
    
    toast('You all ready Applied This job!', {
      icon: '🔥🔥',
      style: {"backgroundColor":"tomato", "color":"white", "fontSize":"20px"},
      duration: 2000,
    });
  } else {
    storedJob[id] = 1;

    toast('Successfully Applied!', {
      icon: '👍👍',
      style: {"backgroundColor":"lightgreen","color":"white", "fontSize":"20px"},
      duration: 2000,
    });
  }

  localStorage.setItem("stored-job", JSON.stringify(storedJob));
}


const getStoredJob = () => {
  const storedJob = JSON.parse(localStorage.getItem("stored-job"));
  return storedJob;
}

export { addToDb, getStoredJob };


