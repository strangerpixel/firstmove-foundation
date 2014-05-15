var job_data = {

    // Job Seeker Object
    job_seeker: {
        "firstName": "Dmitri",
        "lastName": "Stavrou",
        "emailAddress": "dmitri@gmail.com",
        "addressLine1": "The Willows",
        "addressLine2": "29 Acacia Road",
        "townOrCity": "Southampton",
        "countyOrRegion": "Hampshire",
        "postcode": "E8 5DE",
        "country": "United Kingdom",
        "graduationYear": 2010,
        "nationality": "Greek",
        "homeCountry": "United Kingdom",
        "jobLocation": "London",
        "LCFStudentNumber": "STA08237348",
        "LCFCourse": "BA (Hons) FDT Menswear",
        "personalStatement": "Dimitri Stavrou made a real splash at this year's London Fashion Week. The young designer came out firing with a collection full of shimmering fabrics, fringes and trendy designs. The collection is absolutely brilliant. One look included a metallic gold trench coat that I would love to call my own. Dimitri Stavrou is definitely a designer to keep a close eye on in the years to come - Fashion Indie, 2009",
        "adminNotes": "This kid is incredible."
    },

    // Recruiter Object
    recruiter: {
        "firstName": "Adam",
        "lastName": "Watling",
        "emailAddress": "adam@watling.com",
        "addressLine1": "The Willows",
        "addressLine2": "29 Acacia Road",
        "townOrCity": "Southampton",
        "countyOrRegion": "Hampshire",
        "postcode": "E8 5DE",
        "country": "United Kingdom",
        "adminNotes": "Need to have a word with Adam."
    },

    // Job Object
    job: {
        "jobTitle": "Seamstress",
        "companyName": "Zaeem Jamal",
        "companyURL": "http://www.zaeemjamal.com",
        "jobType": "Graduate job",
        "jobContractLength": "Permanent",
        "jobSalary": "Negotiable",
        "jobSummary": "Zaeem Jamal are currently looking for a part time in house seamstress who would conduct dress fittings and carry out alterations on our gowns and dresses.",
        "jobDescription": "<p>They will pay a negotiable hourly rate on a part time basis. The job would be for probably 2-3 half days per week. So possibly in total approximately 12/15 hours a week, variable. This can be more when busier.</p><p>The candidate would really need to have some experience in fittings and alterations, as they will be working on their own, not under supervision. So a graduate perhaps who has some hands on experience and has worked on the technical aspect of tailoring.</p><p>Below is the website that would give you some idea of their House Collection. Their gowns are in silk and are often delicately beaded.</p>",
        "jobApplicationDeadline": "11 April, 2014",
        "jobLocation": "Shoreditch",
        "jobStatus": "Live"
    },

    // Job Categories Object
    job_categories: [
        {
            "name": "Administration",
            "total": 14
        },
        {
            "name": "Allocator",
            "total": 3
        },
        {
            "name": "Beauty Spa Management",
            "total": 14
        },
        {
            "name": "Buying",
            "total": 4
        },
        {
            "name": "Creative Direction",
            "total": 14
        },        
        {
            "name": "Design",
            "total": 5
        },
        {
            "name": "Digital",
            "total": 19
        },
        {
            "name": "Journalism",
            "total": 14
        },
        {
            "name": "Make Up Artistry",
            "total": 14
        },
        {
            "name": "Marketing",
            "total": 5
        },
        {
            "name": "Merchandising",
            "total": 14
        },
        {
            "name": "Performance Design",
            "total": 14
        },        
        {
            "name": "Photography",
            "total": 5
        },
        {
            "name": "Product Development",
            "total": 5
        },
        {
            "name": "Public Relations",
            "total": 5
        },
        {
            "name": "Research & Development",
            "total": 14
        },
        {
            "name": "Retail",
            "total": 5
        },
        {
            "name": "Sales",
            "total": 5
        },
        {
            "name": "Styling",
            "total": 14
        },
        {
            "name": "Visual Merchandising",
            "total": 5
        }   
    ]

}

// Custom Properties
job_data["job_seeker"].fullName = job_data["job_seeker"].firstName + ' ' + job_data["job_seeker"].lastName;
job_data["recruiter"].fullName = job_data["recruiter"].firstName + ' ' + job_data["recruiter"].lastName;

