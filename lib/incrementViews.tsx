export async function incrementViews(postId: number) {
  try {
    const response = await fetch(
      `\${process.env.STRAPI_API_BASE_URL}/posts/\${postId}/views`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer \${process.env.STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to increment views");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
