"use server";

const MEALDB_BASE = "https://www.themealdb.com/api/json/v1/1";

const MOCK_RECIPE = {
  idMeal: "mock-1",
  strMeal: "Spicy Roasted Chicken (Mock)",
  strCategory: "Chicken",
  strArea: "American",
  strMealThumb: "https://images.unsplash.com/photo-1598515214211-89d3c50965ec?w=800&q=80",
  strInstructions: "This is a mock recipe generated because your network firewall is blocking TheMealDB.\n\nEnjoy this imaginary chicken! Preheat oven to 400F. Season chicken with spices. Roast for 45 minutes until golden brown and cooked through.",
  strTags: "Chicken,Spicy,Oven",
  strYoutube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  strIngredient1: "Chicken",
  strMeasure1: "1 whole",
  strIngredient2: "Spices",
  strMeasure2: "2 tbsp",
};

const MOCK_CATEGORIES = [
  { strCategory: "Beef" },
  { strCategory: "Chicken" },
  { strCategory: "Dessert" },
  { strCategory: "Pasta" },
  { strCategory: "Seafood" },
  { strCategory: "Vegetarian" },
];

const MOCK_AREAS = [
  { strArea: "American" },
  { strArea: "British" },
  { strArea: "Chinese" },
  { strArea: "French" },
  { strArea: "Indian" },
  { strArea: "Italian" },
];

const MOCK_MEALS = [
  { idMeal: "mock-1", strMeal: "Spicy Roasted Chicken (Mock)", strMealThumb: "https://images.unsplash.com/photo-1598515214211-89d3c50965ec?w=800&q=80" },
  { idMeal: "mock-2", strMeal: "Beef Wellington (Mock)", strMealThumb: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80" },
  { idMeal: "mock-3", strMeal: "Chocolate Lava Cake (Mock)", strMealThumb: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?w=800&q=80" },
];

// Get random recipe of the day
export async function getRecipeOfTheDay() {
  try {
    const response = await fetch(`${MEALDB_BASE}/random.php`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recipe of the day");
    }

    const data = await response.json();
    return {
      success: true,
      recipe: data.meals[0],
    };
  } catch (error) {
    console.warn("Network error fetching recipe of the day (Firewall block?). Returning mock data.");
    return {
      success: true,
      recipe: MOCK_RECIPE,
    };
  }
}

// Get all categories
export async function getCategories() {
  try {
    const response = await fetch(`${MEALDB_BASE}/list.php?c=list`, {
      next: { revalidate: 604800 }, // Cache for 1 week (categories rarely change)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return {
      success: true,
      categories: data.meals || [],
    };
  } catch (error) {
    console.warn("Network error fetching categories. Returning mock data.");
    return {
      success: true,
      categories: MOCK_CATEGORIES,
    };
  }
}

// Get all areas/cuisines
export async function getAreas() {
  try {
    const response = await fetch(`${MEALDB_BASE}/list.php?a=list`, {
      next: { revalidate: 604800 }, // Cache for 1 week
    });

    if (!response.ok) {
      throw new Error("Failed to fetch areas");
    }

    const data = await response.json();
    return {
      success: true,
      areas: data.meals || [],
    };
  } catch (error) {
    console.warn("Network error fetching areas. Returning mock data.");
    return {
      success: true,
      areas: MOCK_AREAS,
    };
  }
}

// Get meals by category
export async function getMealsByCategory(category) {
  try {
    const response = await fetch(`${MEALDB_BASE}/filter.php?c=${category}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }

    const data = await response.json();
    return {
      success: true,
      meals: data.meals || [],
      category,
    };
  } catch (error) {
    console.warn("Network error fetching meals by category. Returning mock data.");
    return {
      success: true,
      meals: MOCK_MEALS,
      category,
    };
  }
}

// Get meals by area
export async function getMealsByArea(area) {
  try {
    const response = await fetch(`${MEALDB_BASE}/filter.php?a=${area}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }

    const data = await response.json();
    return {
      success: true,
      meals: data.meals || [],
      area,
    };
  } catch (error) {
    console.warn("Network error fetching meals by area. Returning mock data.");
    return {
      success: true,
      meals: MOCK_MEALS,
      area,
    };
  }
}
