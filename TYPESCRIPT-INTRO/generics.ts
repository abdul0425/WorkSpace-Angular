class BookList<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const language = new BookList<string>();
language.add("Java");
language.add("Python");

const language1 = new BookList<number>();
language1.add(100);
language1.add(200);
