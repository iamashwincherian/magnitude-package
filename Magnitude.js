class Magnitude {
    constructor(apiKey, projectKey) {
        this.apiKey = apiKey;
        this.projectKey = projectKey;
        this.customer = null;
        this.baseURL = "https://magnitude-analytics.herokuapp.com/api";
    }

    addCustomer(email) {
        this.customer = email;
    }

    async event(event) {
        if (!this.customer) throw new Error("Customer not found!");

        await fetch(`${this.baseURL}/projects/${this.projectKey}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            },
            body: JSON.stringify({
                customer: this.customer,
                name: event,
            }),
        });
    }
}

export default Magnitude;
