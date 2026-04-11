/*import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 4,
  },
});

export function RecipePDF({ recipe }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title *}
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.text}>{recipe.description}</Text>

        {/* Meta *}
        <View style={styles.section}>
          <Text>
            Cuisine: {recipe.cuisine} | Category: {recipe.category}
          </Text>
          <Text>
            Time: {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} mins
          </Text>
          <Text>Servings: {recipe.servings}</Text>
        </View>

        {/* Ingredients *}
        <View style={styles.section}>
          <Text style={styles.heading}>Ingredients</Text>
          {recipe.ingredients.map((ing, i) => (
            <Text key={i} style={styles.text}>
              • {ing.item} – {ing.amount}
            </Text>
          ))}
        </View>

        {/* Instructions *}
        <View style={styles.section}>
          <Text style={styles.heading}>Instructions</Text>
          {recipe.instructions.map((step) => (
            <View key={step.step} style={{ marginBottom: 6 }}>
              <Text>
                {step.step}. {step.title}
              </Text>
              <Text>{step.instruction}</Text>
            </View>
          ))}
        </View>

        {/* Tips *}
        {recipe.tips?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Chef’s Tips</Text>
            {recipe.tips.map((tip, i) => (
              <Text key={i}>• {tip}</Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}*/




import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },

  // Header
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 11,
    color: "#555",
    marginBottom: 10,
  },

  // Meta section
  metaContainer: {
    marginBottom: 12,
    padding: 8,
    border: "1px solid #ddd",
  },
  metaText: {
    fontSize: 10,
    marginBottom: 2,
  },

  // Section styling
  section: {
    marginBottom: 14,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "1px solid #ccc",
    paddingBottom: 2,
  },

  // Ingredients
  ingredientItem: {
    fontSize: 10,
    marginBottom: 3,
  },

  // Instructions
  stepContainer: {
    marginBottom: 6,
  },
  stepTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  stepText: {
    fontSize: 10,
    marginBottom: 2,
  },

  // Tips
  tipText: {
    fontSize: 10,
    marginBottom: 3,
  },
});

export function RecipePDF({ recipe }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        {/* Meta */}
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>
            Cuisine: {recipe.cuisine} | Category: {recipe.category}
          </Text>
          <Text style={styles.metaText}>
            Time: {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} mins
          </Text>
          <Text style={styles.metaText}>Servings: {recipe.servings}</Text>
        </View>

        {/* Ingredients */}
        <View style={styles.section}>
          <Text style={styles.heading}>Ingredients</Text>
          {recipe.ingredients.map((ing, i) => (
            <Text key={i} style={styles.ingredientItem}>
              • {ing.item} — {ing.amount}
            </Text>
          ))}
        </View>

        {/* Instructions */}
        <View style={styles.section}>
          <Text style={styles.heading}>Instructions</Text>
          {recipe.instructions.map((step) => (
            <View key={step.step} style={styles.stepContainer}>
              <Text style={styles.stepTitle}>
                {step.step}. {step.title}
              </Text>
              <Text style={styles.stepText}>{step.instruction}</Text>
              {step.tip && (
                <Text style={{ fontSize: 9, color: "#777" }}>
                  Tip: {step.tip}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* Tips */}
        {recipe.tips?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Chef’s Tips</Text>
            {recipe.tips.map((tip, i) => (
              <Text key={i} style={styles.tipText}>
                • {tip}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
