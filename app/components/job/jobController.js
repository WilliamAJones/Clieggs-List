//private
import JobService from "./jobService.js";

let _js = new JobService()

function draw() {
    let template = ''
    _js.Jobs.forEach(j => {
        template += j.getTemplate()
    })
    document.getElementById('available-content').innerHTML = template
    document.getElementById('form-content').innerHTML = `
    <form onsubmit="app.controllers.jobController.addJob(event)">
        <input type="text" name="company" placeholder="Company Name" required>
        <input type="text" name="jobTitle" placeholder="Job Title" required>
        <input type="number" name="rate" placeholder="Hourly Rate" required>
        <input type="number" name="hours" placeholder="Hours" required>
        <input type="text" name="description" placeholder="Description">
        <button type="submit">Submit</button>
    </form>
    `

}

//public
export default class JobController {
    constructor() {
        _js.addSubscriber('jobs', draw)
    }

    addJob(event) {
        event.preventDefault();
        let form = event.target
        let newJob = {
            company: form.company.value,
            jobTitle: form.jobTitle.value,
            hours: form.hours.value,
            rate: form.rate.value,
            description: form.description.value,
        }
        _js.addJobs(newJob)
        //Clears the form
        form.reset()

    }
    deleteJobs(id) {
        _js.deleteJobs(id)
    }

    getJobs() {
        _js.getApiJobs()
    }

}