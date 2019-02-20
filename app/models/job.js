export default class Job {
    constructor(data) {
        this._id = data._id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.rate = data.rate || 'Unlisted'
        this.description = data.description
    }
    getTemplate() {
        return `
        <div class="card col-3">
        <h3 class= "card-top">${this.company}</h3>
        <div class="card-body">
            <h5 class="card-title"><i>${this.jobTitle}</i></h5>
            <p class="card-text"><b>Job Description:</b> ${this.description}</p>
            <p class="card-text"><b>Hours:</b> ${this.hours}</p>
            <p class="card-text"><b>Hourly Rate:</b>$${this.rate}</p>
            <button onclick="app.controllers.jobController.deleteJobs('${this._id}')">Remove</button>
        </div>
    </div>
    `
    }
}




// https://bcw-gregslist.herokuapp.com/api/jobs

// All jobs look like:

// var job = {

// company: "Microsoft",

// jobTitle: "Cortana AI Learning Coordinator",

// hours: 73,

// rate: 159,

// description: "This one is optional"

// }