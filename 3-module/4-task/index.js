function showSalary(users, age) {
  const filteredUsers = users.filter(user => user.age <= age);

  const formattedUsers = filteredUsers.map(user => `${user.name}, ${user.balance}`);

  return formattedUsers.join("\n");

}

