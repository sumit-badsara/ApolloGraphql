const launch = require("./launch")
// @ponicode
describe("getAllLaunches", () => {
    let inst

    beforeEach(() => {
        inst = new launch()
    })

    test("0", async () => {
        await inst.getAllLaunches()
    })
})

// @ponicode
describe("getLaunchesByIds", () => {
    let inst

    beforeEach(() => {
        inst = new launch()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getLaunchesByIds({ launchIds: ["projects/", 12] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getLaunchesByIds({ launchIds: ["project_secret_", "proj_"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getLaunchesByIds({ launchIds: [12, "projects/"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getLaunchesByIds({ launchIds: [2, 2] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getLaunchesByIds({ launchIds: ["project_secret_", "P5"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.getLaunchesByIds({ launchIds: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("launchReducer", () => {
    let inst

    beforeEach(() => {
        inst = new launch()
    })

    test("0", () => {
        let callFunction = () => {
            inst.launchReducer({ flight_number: 0, launch_site: 0.5, site_name: -29.45, launch_date_unix: "2017-09-29T23:01:00.000Z", mission_name: "Home Loan Account", links: { mission_patch_small: "Foo bar", mission_patch: "Hello, world!" }, rocket: { rocket_id: "Tasty", rocket_name: "Rustic", rocket_type: "Gorgeous" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.launchReducer({ flight_number: 100, launch_site: 0.0, site_name: 10.23, launch_date_unix: "2017-09-29T19:01:00.000", mission_name: "Checking Account", links: { mission_patch_small: "Foo bar", mission_patch: "Foo bar" }, rocket: { rocket_id: "Tasty", rocket_name: "Intelligent", rocket_type: "Intelligent" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.launchReducer({ flight_number: -5.48, launch_site: 1.0, site_name: 0.0, launch_date_unix: "01:04:03", mission_name: "Checking Account", links: { mission_patch_small: "This is a Text", mission_patch: "foo bar" }, rocket: { rocket_id: "Awesome", rocket_name: "Rustic", rocket_type: "Intelligent" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.launchReducer({ flight_number: 1, launch_site: 1.0, site_name: -1.0, launch_date_unix: "01:04:03", mission_name: "Investment Account", links: { mission_patch_small: "Foo bar", mission_patch: "Foo bar" }, rocket: { rocket_id: "Intelligent", rocket_name: "Awesome", rocket_type: "Rustic" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.launchReducer({ flight_number: -100, launch_site: 0.0, site_name: -0.5, launch_date_unix: "Mon Aug 03 12:45:00", mission_name: "Investment Account", links: { mission_patch_small: "This is a Text", mission_patch: "This is a Text" }, rocket: { rocket_id: "Rustic", rocket_name: "Rustic", rocket_type: "Intelligent" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.launchReducer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
