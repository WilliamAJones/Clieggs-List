export default class Car {
    constructor(data) {
        this._id = data._id || "Unavailable"
        this.make = data.make 
        this.year = data.year
        this.model = data.model || "Unavailable"
        this.price = parseInt(data.price).toFixed(2) || "Unavailable"
        this.imgUrl = data.imgUrl || "Unavailable"
        this.description = data.description || 'No Description Provided'
    }


    getTemplate() {
        return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.year} ${this.make} - ${this.model}</h5>
                <p class="card-text">${this.description} -- $${this.price}</p>
                <button onclick="app.controllers.carController.bid('${this._id}')">BID</button>
                <button onclick="app.controllers.carController.deleteCar('${this._id}')">Remove</button>
            </div>
        </div>`
    }
}