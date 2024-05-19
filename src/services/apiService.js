export async function testApiResponse() {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/test/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

export async function createCourse(coursData) {
  try {
    const token = localStorage.getItem("jwtToken");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(coursData),
    });

    if (response.status === 400) {
      const errorData = await response.json();
      return errorData.data;
    }

    if (!response.ok) {
      throw new Error(
        "Failed to create course. Server returned " + response.status
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
}

export async function register(data) {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 400) {
      return await response.json();
    }

    return await response.json();
  } catch (error) {
    console.error("There was a problem with creating account:", error);
    return null;
  }
}

export async function logIn(data) {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 401 || 404) {
      return await response.json()
    }

    if (!response.ok) {
      throw new Error("Failed to log in. Server returned " + response.status);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with logging in:", error);
    return null;
  }
}

export async function getUserCourses() {
  try {
    const token = localStorage.getItem("jwtToken");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses/user-courses`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

export async function getAllCourses() {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses`);

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return null;
  }
}

export async function getPurchasedCourses() {
  try {
    const token = localStorage.getItem("jwtToken");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses/purchased-courses`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return null;
  }
}

export async function getSingleCourse(id) {
  try {
    const token = localStorage.getItem("jwtToken");
    // Fetches course data from the server using the provided ID
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses/${id}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    // Checks if the response is successful
    if (!response.ok) {
      // Handle error response
      throw new Error("Failed to fetch course data");
    }

    // Parse the response JSON data
    const data = await response.json();

    // Return the course data
    return data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching course data:", error);
    throw error; // Rethrow the error for handling at a higher level
  }
}

export async function buyCourse(id) {
  try {
    const token = localStorage.getItem("jwtToken");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses/purchase-course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ id: id }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to purchase course. Server returned ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error purchasing course:", error);
    throw error;
  }
}

export async function deleteCourse(id) {
  try {
    const token = localStorage.getItem("jwtToken");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function updateCourse(id, coursData) {
  try {
    const token = localStorage.getItem("jwtToken");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/courses/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(coursData),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
