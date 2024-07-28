document.addEventListener('DOMContentLoaded', () => {
    const jobs = [
        { title: 'Software Developer', location: 'New York, NY', company: 'Tech Corp', id: 1 },
        { title: 'Graphic Designer', location: 'Los Angeles, CA', company: 'Creative Inc', id: 2 },
        { title: 'Product Manager', location: 'San Francisco, CA', company: 'Innovate LLC', id: 3 },
        { title: 'Data Scientist', location: 'Boston, MA', company: 'DataWorks', id: 4 },
        { title: 'Marketing Specialist', location: 'Chicago, IL', company: 'MarketPro', id: 5 },
        { title: 'HR Manager', location: 'Seattle, WA', company: 'PeopleFirst', id: 6 },
        { title: 'Business Analyst', location: 'Austin, TX', company: 'BizAnalytica', id: 7 },
        { title: 'Sales Executive', location: 'San Diego, CA', company: 'SalesForce', id: 8 },
        { title: 'UX/UI Designer', location: 'New York, NY', company: 'DesignHub', id: 9 },
        { title: 'Full-Stack Developer', location: 'Miami, FL', company: 'CodeSolutions', id: 10 },
        { title: 'Front-End Developer', location: 'Dallas, TX', company: 'WebArt', id: 11 },
        { title: 'Backend Developer', location: 'Denver, CO', company: 'CloudBase', id: 12 },
        { title: 'Digital Marketer', location: 'Atlanta, GA', company: 'DigitalBoost', id: 13 },
        { title: 'Project Manager', location: 'San Francisco, CA', company: 'PMPro', id: 14 },
        { title: 'System Administrator', location: 'Phoenix, AZ', company: 'SysAdmin Co.', id: 15 },
        { title: 'QA Engineer', location: 'Portland, OR', company: 'QualityCheck', id: 16 },
        { title: 'DevOps Engineer', location: 'Nashville, TN', company: 'OpsMasters', id: 17 },
        { title: 'Mobile App Developer', location: 'Austin, TX', company: 'Appify', id: 18 },
        { title: 'Network Engineer', location: 'Orlando, FL', company: 'NetSecure', id: 19 },
        { title: 'Content Writer', location: 'Las Vegas, NV', company: 'WriteNow', id: 20 },
    ];

    const jobsContainer = document.getElementById('jobs-container');

    function displayJobs(filteredJobs = jobs) {
        jobsContainer.innerHTML = '';
        filteredJobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job');
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.location}</p>
                <p>${job.company}</p>
                <button onclick="applyForJob(${job.id})">Apply</button>
            `;
            jobsContainer.appendChild(jobElement);
        });
    }

    function filterJobs() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(searchInput) || 
            job.location.toLowerCase().includes(searchInput) || 
            job.company.toLowerCase().includes(searchInput)
        );
        displayJobs(filteredJobs);
    }

    window.applyForJob = function(jobId) {
        alert(`Applied for job with ID: ${jobId}`);
    };

    displayJobs(); // Initial display of jobs
});
