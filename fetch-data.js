<script>
// Step 1: Define the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container for displaying data
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch the data from the API
    const response = await fetch(apiUrl);

    // Step 5: Convert response to JSON
    const users = await response.json();

    // Step 6: Clear the "Loading..." message
    dataContainer.innerHTML = '';

    // Step 7: Create and populate the list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 8: Append the list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 9: Handle any errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// Step 10: Run fetchUserData after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
</script>
