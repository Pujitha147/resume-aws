const apiUrl = 'https://iu3cuhffj0.execute-api.ap-south-1.amazonaws.com/prod';  // Your API URL

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    const data = JSON.parse(result.body);  // Parse the JSON body properly

    console.log('API Data:', data);

    // Injecting data into HTML elements
    document.getElementById('name').innerText = data.basics.name;
    document.getElementById('email').innerText = data.basics.email;
    document.getElementById('phone').innerText = data.basics.phone;

    // Display work experience
    const workContainer = document.getElementById('work-experience');
    data.work.forEach(job => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${job.position} at ${job.company}</h3>
        <p>${job.startDate} - ${job.endDate}</p>
        <p>${job.summary}</p>
      `;
      workContainer.appendChild(div);
    });

    // Display education
    const eduContainer = document.getElementById('education');
    data.education.forEach(edu => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${edu.institution}</h3>
        <p>${edu.area} - ${edu.studyType} (${edu.startDate} to ${edu.endDate})</p>
      `;
      eduContainer.appendChild(div);
    });

    // Display skills
    const skillsContainer = document.getElementById('skills');
    data.skills.forEach(skill => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${skill.name}: ${skill.level}</p>`;
      skillsContainer.appendChild(div);
    });

    // Display projects
    const projectsContainer = document.getElementById('projects');
    data.projects.forEach(project => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">Project Link</a>
      `;
      projectsContainer.appendChild(div);
    });

  } catch (error) {
    console.error('Error:', error);
    document.getElementById('name').innerText = 'Failed to load data';
  }
}

fetchData();
