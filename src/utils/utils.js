function postsDateArabicFormat(post) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(post.date).toLocaleDateString("ar-EG", options);
}

export { postsDateArabicFormat };
