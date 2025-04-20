function camelize(str) {
  const parts = str.split('-');
  let result = parts[0];

  for (let i = 1; i < parts.length; i++) {
    result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }

  return result;
}
