
export const getData = async()=>{
const allJobs = await fetch("/jobs.json");
const jobs = await allJobs.json();
return jobs;
} 