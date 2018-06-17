todos = Todo.create!([
    { body: "wash car", complete: true },
    { body: "wash dog", complete: false },
    { body: "wash self", complete: false },
])

Comment.create([
    { body: 'great todo', todo: todos[0] },
    { body: 'what a clean car', todo: todos[0] },
    { body: 'smelly dog', todo: todos[1] },
])